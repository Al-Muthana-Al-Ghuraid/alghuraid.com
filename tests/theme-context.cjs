// Exercise the real theme bridge at preference and parent-document boundaries.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const code=fs.readFileSync('public-site/assets/theme-context.js','utf8');let checked=0;
function run({query='',saved=null,parentTheme=null,state='top'}={}){
 const root={dataset:{}},listeners=[],parentListeners=[],observers=[],parentRoot={nodeType:1,isConnected:state!=='detached',dataset:{theme:parentTheme}};
 const window={},parent=state==='top'?window:{document:{documentElement:parentRoot},addEventListener:(n,f)=>parentListeners.push([n,f]),removeEventListener:(n,f)=>{const i=parentListeners.findIndex(v=>v[0]===n&&v[1]===f);if(i>=0)parentListeners.splice(i,1);}};
 if(state==='cross-origin')Object.defineProperty(parent,'document',{get(){throw Error('inaccessible');}});
 class MutationObserver{constructor(fn){this.fn=fn;observers.push(this);}observe(node){assert.equal(node,parentRoot);}disconnect(){this.disconnected=true;}}
 vm.runInNewContext(code,{document:{documentElement:root},window,parent,location:{search:query},URLSearchParams,localStorage:{getItem:()=>saved},MutationObserver,addEventListener:(n,f)=>listeners.push([n,f])});
 return {root,parentRoot,observers,listeners,parentListeners};
}
for(const [options,expected] of [[{},'day'],[{saved:'night'},'night'],[{query:'?theme=day',saved:'night'},'day'],[{query:'?theme=night'},'night'],[{query:'?theme=invalid',saved:'night'},'night'],[{state:'detached',query:'?theme=night'},'night'],[{state:'cross-origin',query:'?theme=night'},'night']]){const r=run(options);assert.equal(r.root.dataset.theme,expected);assert.equal(r.observers.length,0);checked++;}
const r=run({state:'connected',parentTheme:'night',query:'?theme=day'});assert.equal(r.root.dataset.theme,'night');r.parentRoot.dataset.theme='day';r.observers[0].fn();assert.equal(r.root.dataset.theme,'day');r.parentRoot.dataset.theme='invalid';r.observers[0].fn();assert.equal(r.root.dataset.theme,'day');r.parentRoot.isConnected=false;r.observers[0].fn();assert.ok(r.observers[0].disconnected);assert.equal(r.parentListeners.length,0);checked++;
for(const origin of ['child','parent']){const q=run({state:'connected',parentTheme:'day'});const list=origin==='child'?q.listeners:q.parentListeners;list.find(v=>v[0]==='pagehide')[1]();assert.ok(q.observers[0].disconnected);assert.equal(q.parentListeners.length,0);checked++;}
console.log(JSON.stringify({checked,failed:0}));
