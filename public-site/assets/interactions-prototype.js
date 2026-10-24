// Initial live interaction trial; ?interactions=off retains the baseline.
if(document.querySelector('#language-toggle') && new URLSearchParams(location.search).get('interactions')!=='off'){
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/interactions-prototype.css?v=spring-1';document.head.append(css);
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
 // Provisional simple text fade; the controls carry the expressive motion.
 const play=(items,outward)=>Promise.all(items.map(({el})=>el.animate(
  outward?[{opacity:1},{opacity:0}]:[{opacity:0},{opacity:1}],
  {duration:outward?260:460,easing:'ease-in-out',fill:'both'}).finished));
 let controls=[];
 function captureControls(){return [...document.querySelectorAll('.hero-actions > a,.hero-actions > button')].flatMap((original,i)=>{
  const r=original.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return [];
  const style=original.getAttribute('style');
  Object.assign(original.style,{position:'fixed',left:r.left+'px',top:r.top+'px',width:r.width+'px',margin:'0',zIndex:'8501'});
  return [{original,left:r.left,top:r.top,width:r.width,style,i}];
 });}
 // FLIP animates the actual controls, removing the clone-to-original visual handoff.
 const slide=items=>{
  items.forEach(({original,style})=>style===null?original.removeAttribute('style'):original.setAttribute('style',style));
  return Promise.all(items.map(({original,left,top,width,i})=>{
  const r=original.getBoundingClientRect(),x=left-r.left,y=top-r.top,direction=x>0?-1:1;
  const animation=original.animate([
   {transform:`translate(${x}px,${y}px) scaleX(${width/r.width})`},
   {transform:`translate(${x-direction*9}px,${y}px) scale(.97,1.03)`,offset:.1},
   {transform:`translate(${x*.45}px,${y*.45}px) scale(1.09,.96)`,offset:.46},
   {transform:`translate(${direction*14}px,0) scale(.97,1.025)`,offset:.73},
   {transform:`translate(${-direction*6}px,0) scale(1.015,.99)`,offset:.85},
   {transform:`translate(${direction*2}px,0)`,offset:.94},
   {transform:'translate(0,0) scale(1)'}
  ].map(frame=>({...frame,easing:'cubic-bezier(.33,0,.67,1)'})),{duration:1120,delay:i*45,easing:'linear',fill:'both'});
  return animation.finished.then(()=>animation.cancel());
 }));};
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

  }finally{controls.forEach(({original,style})=>style===null?original.removeAttribute('style'):original.setAttribute('style',style));controls=[];reveal();layer.replaceChildren();layer.getAnimations().forEach(a=>a.cancel());root.classList.remove('word-changing','word-handoff');if(window.skyState)window.skyState.freezeFrame=priorFreeze||false;button.removeAttribute('aria-busy');busy=false;}
 },true);

 // Side track parked at owner request. Saved in .scratch/portfolio/parked-side-track-2026-10-24.
}






