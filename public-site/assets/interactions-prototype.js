// Initial live interaction trial; ?interactions=off retains the baseline.
if(document.querySelector('#language-toggle') && new URLSearchParams(location.search).get('interactions')!=='off'){
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/interactions-prototype.css?v=ripple-3';document.head.append(css);
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
 // Provisional turning wave: connected words rotate in depth; no centre gathering.
 const play=(items,inward)=>Promise.all(items.map(({el},i)=>{
  const r=el.getBoundingClientRect(),direction=root.lang==='ar'?-1:1;
  const progress=direction===1?r.left/innerWidth:1-r.right/innerWidth;
  const delay=Math.max(0,progress)*190+Math.min(130,r.top/innerHeight*130);
  el.style.transformOrigin=inward?'50% 100%':'50% 0%';
  return el.animate(inward?[
   {transform:'perspective(650px) rotateX(0) translateY(0)',opacity:1},
   {transform:`perspective(650px) rotateX(-16deg) translateY(-8px) translateX(${-direction*5}px)`,opacity:1,offset:.28},
   {transform:`perspective(650px) rotateX(88deg) translateY(24px) translateX(${direction*24}px)`,opacity:0}
  ]:[
   {transform:`perspective(650px) rotateX(-88deg) translateY(-26px) translateX(${-direction*24}px)`,opacity:0},
   {transform:`perspective(650px) rotateX(12deg) translateY(5px) translateX(${direction*3}px)`,opacity:1,offset:.76},
   {transform:'perspective(650px) rotateX(0) translateY(0)',opacity:1}
  ],{duration:inward?620:840,delay,easing:'cubic-bezier(.25,.7,.2,1)',fill:'both'}).finished;
 }));
 let controls=[];
 function captureControls(){return [...document.querySelectorAll('.hero-actions > a,.hero-actions > button')].flatMap((original,i)=>{
  const r=original.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return [];
  const clone=original.cloneNode(true);clone.removeAttribute('id');clone.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));clone.classList.add('exchange-control');clone.setAttribute('aria-hidden','true');clone.tabIndex=-1;
  Object.assign(clone.style,{left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px'});document.body.append(clone);original.classList.add('exchange-hidden');
  return [{original,clone,left:r.left,top:r.top,i}];
 });}
 // Every control retains its place in the row; one continuous trip to its translated position.
 const slide=items=>Promise.all(items.map(({clone,original,left,top,i})=>{
  const r=original.getBoundingClientRect(),x=r.left-left,y=r.top-top,direction=x<0?-1:1;
  return clone.animate([
   {transform:'translate(0,0) scale(1,1)',opacity:1},
   {transform:`translate(${-direction*9}px,0) scale(.95,1.04)`,offset:.12},
   {transform:`translate(${x*.48}px,${y*.48}px) scale(1.13,.94)`,offset:.5},
   {transform:`translate(${x+direction*5}px,${y}px) scale(.97,1.03)`,offset:.87},
   {transform:`translate(${x}px,${y}px) scale(1,1)`,opacity:1}
  ],{duration:1080,delay:i*65,easing:'cubic-bezier(.45,0,.2,1)',fill:'both'}).finished;
 }));
 document.addEventListener('click',async event=>{
  if(!event.target.closest('#language-toggle'))return;if(reduced.matches)return;
  event.preventDefault();event.stopImmediatePropagation();if(busy)return;busy=true;await document.fonts.ready;button.setAttribute('aria-busy','true');
  const scrollPosition=scrollY;let outgoing=[];const priorFreeze=window.skyState?.freezeFrame;if(window.skyState)window.skyState.freezeFrame=true;const hide=items=>new Set(items.map(i=>i.parent)).forEach(p=>p.classList.add('word-hidden'));const reveal=()=>document.querySelectorAll('.word-hidden').forEach(p=>p.classList.remove('word-hidden'));
  try{
   outgoing=snapshot();controls=captureControls();hide(outgoing);root.classList.add('word-changing');await play(outgoing,true);outgoing.forEach(v=>v.el.remove());
   button.onclick?.call(button,event);await document.fonts.ready;scrollTo({top:scrollPosition,behavior:'instant'});
   // Translation and direction have settled before measuring destination word positions.
   await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
   reveal();const incoming=snapshot();hide(incoming);await Promise.all([play(incoming,false),slide(controls)]);
   // A short crossfade hands the same settled positions back to real text.
   root.classList.add('word-handoff');reveal();
   await layer.animate([{opacity:1},{opacity:0}],{duration:140,easing:'linear',fill:'forwards'}).finished;

  }finally{controls.forEach(c=>{c.original.classList.remove("exchange-hidden");c.clone.remove();});controls=[];reveal();layer.replaceChildren();layer.getAnimations().forEach(a=>a.cancel());root.classList.remove('word-changing','word-handoff');if(window.skyState)window.skyState.freezeFrame=priorFreeze||false;button.removeAttribute('aria-busy');busy=false;}
 },true);

 // Side track parked at owner request. Saved in .scratch/portfolio/parked-side-track-2026-10-24.
}






