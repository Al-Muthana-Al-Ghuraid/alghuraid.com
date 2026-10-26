// Run the real inline diagram scripts at their parent-document lifecycle boundary.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const root='public-site/diagrams';let failed=0,checked=0;
for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){
 const html=fs.readFileSync(root+'/'+file,'utf8'),code=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n');if(!code.includes('MutationObserver'))continue;
 for(const state of ['connected','detached','cross-origin']){
  const observed=[],observers=[],listeners=[];
  const body={classList:{contains:()=>false,toggle(){}}},document={body,documentElement:{lang:'en'},querySelectorAll:()=>[]};
  const parent={document:state==='detached'?{body:null,documentElement:null}:{body,documentElement:{lang:'ar'}}};if(state==='cross-origin')Object.defineProperty(parent,'document',{get(){throw new Error('Parent origin unavailable');}});
  class MutationObserver{constructor(fn){this.fn=fn;this.disconnected=false;observers.push(this);}observe(node){if(!node)throw new TypeError("Failed to execute 'observe' on 'MutationObserver': parameter1 is not of type Node");observed.push(node);}disconnect(){this.disconnected=true;}}
  try{vm.runInNewContext(code,{document,parent,window:{},location:{search:''},URLSearchParams,MutationObserver,addEventListener:(name,fn)=>listeners.push([name,fn])},{timeout:1000});assert.equal(observed.length,state==='connected'?2:0);if(state==='connected'){assert.equal(document.documentElement.lang,'ar');for(const [event,fn]of listeners)if(event==='pagehide')fn();assert.ok(observers.every(o=>o.disconnected),'disconnect on teardown');}checked++;}
  catch(error){failed++;console.log('FAIL '+file+' / '+state+': '+error.message);}
 }
}
console.log(JSON.stringify({checked,failed}));if(failed)process.exitCode=1;
