// Initial live interaction trial; ?interactions=off retains the baseline.
if(document.querySelector('#language-toggle') && new URLSearchParams(location.search).get('interactions')!=='off'){
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/interactions-prototype.css?v=smooth-4';document.head.append(css);
 const root=document.documentElement,reduced=matchMedia('(prefers-reduced-motion: reduce)');root.classList.add('interaction-preview');
 const button=document.querySelector('#language-toggle');let busy=false;
 const layer=document.createElement('div');layer.className='word-flight-layer';layer.setAttribute('aria-hidden','true');document.body.append(layer);
 // Whole-word fragments preserve connected Arabic shaping; only visible main-page text participates.
 function snapshot(){
  const items=[];const walker=document.createTreeWalker(document.querySelector('main'),NodeFilter.SHOW_TEXT);
  for(let node;node=walker.nextNode();){
   const parent=node.parentElement;if(parent.closest('script,style,iframe,svg')||!node.textContent.trim())continue;
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
 const play=(items,inward)=>Promise.all(items.map(({el,x,y},i)=>{
  const orbit=(i%9-4)*7,spin=(i%7-3)*8;
  const frames=inward?[
   {transform:'translate(0,0)',opacity:1,offset:0},
   {transform:'translate(-3px,2px) rotate(-2deg)',offset:.09},
   {transform:'translate(3px,-2px) rotate(2deg)',offset:.18},
   {transform:'translate(-2px,1px)',offset:.27},
   {transform:`translate(${x+orbit}px,${y-orbit}px) scale(.25) rotate(${spin}deg)`,opacity:0,offset:1}
  ]:[
   {transform:`translate(${x-orbit}px,${y+orbit}px) scale(.25) rotate(${-spin}deg)`,opacity:0},
   {transform:'translate(0,0) scale(1)',opacity:1}
  ];return el.animate(frames,{duration:inward?760:800,delay:(i%11)*12,easing:inward?'cubic-bezier(.65,0,.8,.45)':'cubic-bezier(.16,1,.3,1)',fill:'both'}).finished;
 }));
 document.addEventListener('click',async event=>{
  if(!event.target.closest('#language-toggle'))return;if(reduced.matches)return;
  event.preventDefault();event.stopImmediatePropagation();if(busy)return;busy=true;await document.fonts.ready;button.setAttribute('aria-busy','true');
  const scrollPosition=scrollY;let outgoing=[];const priorFreeze=window.skyState?.freezeFrame;if(window.skyState)window.skyState.freezeFrame=true;const hide=items=>new Set(items.map(i=>i.parent)).forEach(p=>p.classList.add('word-hidden'));const reveal=()=>document.querySelectorAll('.word-hidden').forEach(p=>p.classList.remove('word-hidden'));
  try{
   outgoing=snapshot();hide(outgoing);root.classList.add('word-changing');await play(outgoing,true);outgoing.forEach(v=>v.el.remove());
   button.onclick?.call(button,event);await document.fonts.ready;scrollTo({top:scrollPosition,behavior:'instant'});
   // Translation and direction have settled before measuring destination word positions.
   await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
   reveal();const incoming=snapshot();hide(incoming);await play(incoming,false);
   // A short crossfade hands the same settled positions back to real text.
   root.classList.add('word-handoff');reveal();
   await layer.animate([{opacity:1},{opacity:0}],{duration:140,easing:'linear',fill:'forwards'}).finished;

  }finally{reveal();layer.replaceChildren();layer.getAnimations().forEach(a=>a.cancel());root.classList.remove('word-changing','word-handoff');if(window.skyState)window.skyState.freezeFrame=priorFreeze||false;button.removeAttribute('aria-busy');busy=false;}
 },true);

 // Side track parked at owner request. Saved in .scratch/portfolio/parked-side-track-2026-10-24.
}





