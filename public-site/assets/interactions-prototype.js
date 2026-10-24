// Initial live interaction trial; ?interactions=off retains the baseline.
if(document.querySelector('#language-toggle') && new URLSearchParams(location.search).get('interactions')!=='off'){
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/interactions-prototype.css?v=launch-1';document.head.append(css);
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
 // Read every rectangle before changing layout: otherwise the flex row collapses between reads.
 function captureControls(){
  const items=[...document.querySelectorAll('.hero-actions > a,.hero-actions > button')].map((original,i)=>{
   const r=original.getBoundingClientRect();return {original,left:r.left,top:r.top,width:r.width,height:r.height,style:original.getAttribute('style'),i};
  }).filter(v=>v.top+v.height>=0&&v.top<innerHeight);
  items.forEach(({original,left,top,width})=>Object.assign(original.style,{position:'fixed',left:left+'px',top:top+'px',width:width+'px',margin:'0',zIndex:'8501'}));
  return items;
 }
 // One continuous launch: compact V, release, destination overshoot, damped return.
 const slide=items=>{
  items.forEach(({original,style})=>style===null?original.removeAttribute('style'):original.setAttribute('style',style));
  const destinations=items.map(v=>v.original.getBoundingClientRect());
  if(!items.length)return Promise.resolve();
  const sourceCentre=items.reduce((sum,v)=>sum+v.left+v.width/2,0)/items.length;
  const targetCentre=destinations.reduce((sum,r)=>sum+r.left+r.width/2,0)/items.length;
  const direction=targetCentre>=sourceCentre?1:-1;
  // Keep overshoot inside the viewport on narrow screens.
  const room=direction>0?innerWidth-Math.max(...destinations.map(r=>r.right))-12:Math.min(...destinations.map(r=>r.left))-12;
  const overshoot=Math.max(0,Math.min(34,room));
  return Promise.all(items.map(({original,left,top,width,i},index)=>{
   const r=destinations[index],x=left-r.left,y=top-r.top;
   const local=left+width/2-sourceCentre;
   const squeezeX=x-local*.27-direction*12;
   const v=Math.abs(index-(items.length-1)/2)*11-9;
   const animation=original.animate([
    {transform:`translate(${x}px,${y}px) scaleX(${width/r.width})`,offset:0,easing:'cubic-bezier(.45,0,.75,1)'},
    {transform:`translate(${squeezeX}px,${y+v}px) scale(.9,1.08) rotate(${direction*(index-1.5)*3}deg)`,offset:.23,easing:'cubic-bezier(.52,0,.2,1)'},
    {transform:`translate(${direction*overshoot}px,${v*.55}px) scale(1.08,.94) rotate(${-direction*(index-1.5)*2}deg)`,offset:.67,easing:'cubic-bezier(.35,0,.65,1)'},
    {transform:`translate(${-direction*12}px,${-v*.22}px) scale(.97,1.025)`,offset:.82,easing:'cubic-bezier(.35,0,.65,1)'},
    {transform:`translate(${direction*4}px,0) scale(1.01,.995)`,offset:.92,easing:'cubic-bezier(.35,0,.65,1)'},
    {transform:'translate(0,0) scale(1)',offset:1}
   ],{duration:1460,delay:i*12,easing:'linear',fill:'both'});
   return animation.finished.then(()=>animation.cancel());
  }));
 };
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






