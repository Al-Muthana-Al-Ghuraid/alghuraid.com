// Initial live interaction trial; ?interactions=off retains the baseline.
if(document.querySelector('#language-toggle') && new URLSearchParams(location.search).get('interactions')!=='off'){
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/interactions-prototype.css?v=exchange-1';document.head.append(css);
 const root=document.documentElement,reduced=matchMedia('(prefers-reduced-motion: reduce)');root.classList.add('interaction-preview');
 const button=document.querySelector('#language-toggle');let busy=false;
 const layer=document.createElement('div');layer.className='word-flight-layer';layer.setAttribute('aria-hidden','true');document.body.append(layer);
 // Whole-word fragments preserve connected Arabic shaping; only visible main-page text participates.
 function snapshot(){
  const items=[];const walker=document.createTreeWalker(document.querySelector('main'),NodeFilter.SHOW_TEXT);
  for(let node;node=walker.nextNode();){
   const parent=node.parentElement;if(parent.closest('script,style,iframe,svg,.hero-actions')||!node.textContent.trim())continue;
   if(!parent.getBoundingClientRect().width)continue;const style=getComputedStyle(parent);if(style.visibility==='hidden'&&!root.classList.contains('word-changing')||style.display==='none')continue;
   for(const match of node.textContent.matchAll(/\S+/gu)){
    const range=document.createRange();range.setStart(node,match.index);range.setEnd(node,match.index+match[0].length);
    const rect=range.getBoundingClientRect();if(rect.width<1||rect.height<1||rect.top<0||rect.bottom>innerHeight||rect.right<0||rect.left>innerWidth)continue;
    const el=document.createElement('span');el.textContent=match[0];el.dir=root.dir;
    Object.assign(el.style,{left:rect.left+'px',top:rect.top+'px',font:style.font,color:style.color,letterSpacing:style.letterSpacing,lineHeight:rect.height+'px'});layer.append(el);
    items.push({parent,el,x:innerWidth/2-rect.left-rect.width/2,y:innerHeight/2-rect.top-rect.height/2});
    if(items.length>=220)return items;
   }
  }return items;
 }
 // Owner-selected provisional choreography: curved social fan and an orbiting word exchange.
 const play=(items,inward)=>Promise.all(items.map(({el,x,y},i)=>{
  const angle=i*2.4,ox=Math.cos(angle)*(24+i%5*8),oy=Math.sin(angle)*(24+i%5*8);
  const cluster=`translate(${x+ox}px,${y+oy}px) scale(.3) rotate(${i%7*12-36}deg)`;
  return el.animate(inward?[
   {transform:'translate(0,0)',opacity:1},
   {transform:`translate(${i%2?3:-3}px,-4px) rotate(2deg)`,offset:.14},
   {transform:`translate(${x*.65-oy}px,${y*.65+ox}px) scale(.72) rotate(12deg)`,opacity:.9,offset:.65},
   {transform:cluster,opacity:.25}
  ]:[
   {transform:cluster,opacity:0},
   {transform:`translate(${x*.5+oy}px,${y*.5-ox}px) scale(.72) rotate(-8deg)`,opacity:1,offset:.4},
   {transform:'translate(0,-2px) scale(1.015)',opacity:1,offset:.86},
   {transform:'translate(0,0)',opacity:1}
  ],{duration:inward?820:920,delay:i%9*14,easing:'cubic-bezier(.25,.7,.25,1)',fill:'both'}).finished;
 }));
 let controls=[];
 function captureControls(){return [...document.querySelectorAll('.hero-actions > a,.hero-actions > button')].flatMap((original,i)=>{
  const r=original.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return [];
  const clone=original.cloneNode(true);clone.removeAttribute('id');clone.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));clone.classList.add('exchange-control');clone.setAttribute('aria-hidden','true');clone.tabIndex=-1;
  Object.assign(clone.style,{left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px'});document.body.append(clone);original.classList.add('exchange-hidden');
  return [{original,clone,x:innerWidth-70-r.left-r.width/2,y:innerHeight*.48-r.top-r.height/2+(i-1.5)*13,i}];
 });}
 const fan=(items,inward)=>Promise.all(items.map(({clone,x,y,i})=>clone.animate(inward?[
  {transform:'translate(0,0)',opacity:1},
  {transform:'translate(-12px,-14px) rotate(-7deg)',offset:.2},
  {transform:`translate(${x*.7}px,${y-42}px) rotate(9deg) scale(.92)`,offset:.7},
  {transform:`translate(${x}px,${y}px) rotate(${(i-1.5)*9}deg) scale(.82)`,opacity:.9}
 ]:[
  {transform:`translate(${x}px,${y}px) rotate(${(i-1.5)*9}deg) scale(.82)`,opacity:.9},
  {transform:`translate(${x*.4}px,${y*.4-35}px) rotate(-6deg)`,offset:.48},
  {transform:'translate(-4px,0) rotate(1deg)',offset:.85},
  {transform:'translate(0,0)',opacity:1}
 ],{duration:inward?740:860,delay:i*55,easing:'cubic-bezier(.22,.8,.25,1)',fill:'both'}).finished));
 document.addEventListener('click',async event=>{
  if(!event.target.closest('#language-toggle'))return;if(reduced.matches)return;
  event.preventDefault();event.stopImmediatePropagation();if(busy)return;busy=true;await document.fonts.ready;button.setAttribute('aria-busy','true');
  const scrollPosition=scrollY;let outgoing=[];const priorFreeze=window.skyState?.freezeFrame;if(window.skyState)window.skyState.freezeFrame=true;const hide=items=>new Set(items.map(i=>i.parent)).forEach(p=>p.classList.add('word-hidden'));const reveal=()=>document.querySelectorAll('.word-hidden').forEach(p=>p.classList.remove('word-hidden'));
  try{
   outgoing=snapshot();controls=captureControls();hide(outgoing);root.classList.add('word-changing');await Promise.all([play(outgoing,true),fan(controls,true)]);outgoing.forEach(v=>v.el.remove());
   button.onclick?.call(button,event);await document.fonts.ready;scrollTo({top:scrollPosition,behavior:'instant'});
   // Translation and direction have settled before measuring destination word positions.
   await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
   reveal();const incoming=snapshot();hide(incoming);controls.forEach(c=>{const old=c.clone.getBoundingClientRect(),r=c.original.getBoundingClientRect();c.clone.getAnimations().forEach(a=>a.cancel());Object.assign(c.clone.style,{left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px'});c.x=old.left+old.width/2-r.left-r.width/2;c.y=old.top+old.height/2-r.top-r.height/2;});await Promise.all([play(incoming,false),fan(controls,false)]);
   // A short crossfade hands the same settled positions back to real text.
   root.classList.add('word-handoff');reveal();
   await layer.animate([{opacity:1},{opacity:0}],{duration:140,easing:'linear',fill:'forwards'}).finished;

  }finally{controls.forEach(c=>{c.original.classList.remove("exchange-hidden");c.clone.remove();});controls=[];reveal();layer.replaceChildren();layer.getAnimations().forEach(a=>a.cancel());root.classList.remove('word-changing','word-handoff');if(window.skyState)window.skyState.freezeFrame=priorFreeze||false;button.removeAttribute('aria-busy');busy=false;}
 },true);

 // Side track parked at owner request. Saved in .scratch/portfolio/parked-side-track-2026-10-24.
}





