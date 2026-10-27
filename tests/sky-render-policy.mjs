import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRenderPolicy,themeFrameRate} from '../public-site/assets/sky-render-policy.js';

const rows=[];
for(const hz of [60,90,120,144,165,240]){
 const normal=createRenderPolicy(),boosted=createRenderPolicy();
 let baseline=0,transition=0,after=0,normalTime=0,boostedTime=0;
 for(let i=0;i<hz*3;i++){
  const now=i*1000/hz,changing=now>=1000&&now<2000;
  const a=normal.frame(now),b=boosted.frame(now,{frameFPS:changing?120:60});
  if(a!==null){normalTime+=a;if(changing)baseline++;}
  if(b!==null){boostedTime+=b;if(changing)transition++;if(now>=2000)after++;}
 }
 assert.ok(Math.abs(normalTime-boostedTime)<.025,'wall time preserved');
 assert.ok(after>=58&&after<=61,'returns to60 after theme change');
 assert.ok(transition<=Math.min(hz,120)+1,'display and120 ceiling respected');
 if(hz===60)assert.equal(transition,baseline);
 if(hz>=120)assert.ok(transition>=118,'uses available120 callbacks');
 rows.push({callbackHz:hz,baseline,transition,after});
}
const base={width:1280,reduced:false,startup:false,progress:1,target:0,goal:0};
assert.equal(themeFrameRate(base),60);
assert.equal(themeFrameRate({...base,target:1}),120,'first change detected before progress updates');
assert.equal(themeFrameRate({...base,progress:.5}),120);
for(const width of [320,390,800])assert.equal(themeFrameRate({...base,width,progress:.5}),60);
assert.equal(themeFrameRate({...base,reduced:true,progress:.5}),60);
assert.equal(themeFrameRate({...base,startup:true,progress:.5}),60);
assert.equal(themeFrameRate({...base,progress:1,target:1,goal:1}),60);
for(const fps of [60,120]){
 const p=createRenderPolicy();p.frame(0,{frameFPS:fps});
 assert.equal(p.frame(100,{blocked:true,frameFPS:fps}),null);
 assert.equal(p.frame(10000,{frameFPS:fps}),0,'hidden/frozen time excluded');
 p.invalidate();const idle={moving:false,settled:true,key:'night',frameFPS:fps};
 assert.equal(p.frame(10001,idle),0);assert.equal(p.frame(11000,idle),null);
 assert.notEqual(p.frame(11001,{...idle,key:'day'}),null,'theme wakes idle');
 assert.equal(p.frame(12000,{...idle,key:'day'}),null);
 p.invalidate();assert.equal(p.frame(12001,idle),0,'resize wakes idle');
 assert.notEqual(p.frame(12002,{...idle,force:true}),null,'capture remains available');
}
const sky=fs.readFileSync(new URL('../public-site/assets/sky.js',import.meta.url),'utf8');
assert.ok(sky.includes('frameFPS:themeFrameRate({width:innerWidth,reduced:ta.matches,startup:Ln.startupHold,progress:Wr.progress,target:Ln.target,goal:Wr.goal})'),'real sky uses guarded budget');
assert.ok(sky.includes('blocked:document.hidden||!!Ln.freezeFrame'),'real sky retains visibility/navigation freeze');
console.log(JSON.stringify({simulated:true,rows,idleFreezeGuardsPass:true}));
