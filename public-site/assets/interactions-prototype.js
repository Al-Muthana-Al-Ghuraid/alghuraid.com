// Initial live interaction trial; ?interactions=off retains the baseline.
if(document.querySelector('#language-toggle') && new URLSearchParams(location.search).get('interactions')!=='off'){
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/interactions-prototype.css?v=wall-launch-1';document.head.append(css);
 const root=document.documentElement,reduced=matchMedia('(prefers-reduced-motion: reduce)');root.classList.add('interaction-preview');
 const button=document.querySelector('#language-toggle');let busy=false;
 const layer=document.createElement('div');layer.className='word-flight-layer';layer.setAttribute('aria-hidden','true');document.body.append(layer);
 // Fade real document text; never detach words into a viewport overlay.
 function textElements(){
  const nodes=new Set(),walker=document.createTreeWalker(document.querySelector('main'),NodeFilter.SHOW_TEXT);
  for(let node;node=walker.nextNode();){const p=node.parentElement;if(!node.textContent.trim()||p.closest('script,style,iframe,svg,.hero-actions'))continue;const rect=p.getBoundingClientRect();if(!rect.width||rect.bottom<0||rect.top>innerHeight)continue;nodes.add(p);}
  return [...nodes].filter(p=>![...nodes].some(other=>other!==p&&other.contains(p)));
 }
 let fades=[];
 function fade(elements,frames,options){const animations=elements.map(el=>el.animate(frames,{...options,fill:'both'}));fades.push(...animations);return Promise.all(animations.map(a=>a.finished));}
 let controls=[],startScroll=0,actionRow,priorRowHeight;
 // Read every rectangle before changing layout: otherwise the flex row collapses between reads.
 function captureControls(){
  const items=[...document.querySelectorAll('.hero-actions > a,.hero-actions > button')].map((original,i)=>{
   const r=original.getBoundingClientRect();return {original,left:r.left,top:r.top,width:r.width,height:r.height,style:original.getAttribute('style'),i};
  }).filter(v=>v.top+v.height>=0&&v.top<innerHeight);
  items.forEach(({original,left,top,width})=>Object.assign(original.style,{position:'fixed',left:left+'px',top:top+'px',width:width+'px',margin:'0',zIndex:'8501'}));
  return items;
 }
 // Edge-anchored wind-up and wall impact, followed by release back to the normal row.
 const slide=items=>{
  const mobile=matchMedia('(max-width:800px)').matches,compression=mobile?.78:.57,kick=mobile?6:14;
  items.forEach(({original,style})=>style===null?original.removeAttribute('style'):original.setAttribute('style',style));
  const destinations=items.map(v=>v.original.getBoundingClientRect());
  if(!items.length)return Promise.resolve();
  const sourceCentre=items.reduce((sum,v)=>sum+v.left+v.width/2,0)/items.length;
  const targetCentre=destinations.reduce((sum,r)=>sum+r.left+r.width/2,0)/items.length;
  const direction=targetCentre>=sourceCentre?1:-1;
  // Keep overshoot inside the viewport on narrow screens.
  const room=direction>0?innerWidth-Math.max(...destinations.map(r=>r.right))-12:Math.min(...destinations.map(r=>r.left))-12;
  const overshoot=Math.max(0,Math.min(mobile?8:54,room));
  const sourceEdge=direction>0?Math.min(...items.map(v=>v.left)):Math.max(...items.map(v=>v.left+v.width));
  const wall=direction>0?Math.max(...destinations.map(r=>r.right))+overshoot:Math.min(...destinations.map(r=>r.left))-overshoot;
  return Promise.all(items.map(({original,left,top,width,i},index)=>{
   const r=destinations[index],x=left-r.left,y=top-(scrollY-startScroll)-r.top;
   const sourceMid=left+width/2,targetMid=r.left+r.width/2;
   // Compress distances toward the outer edge, never toward the group's centre.
   const squeezedMid=sourceEdge+(sourceMid-sourceEdge)*compression-direction*kick;
   const squeezeX=squeezedMid-targetMid;
   const impactMid=wall+(targetMid-wall)*compression;
   const impactX=impactMid-targetMid;
   const v=(Math.abs(index-(items.length-1)/2)*11-9)*(mobile?.4:1);
   const animation=original.animate([
    {transform:`translate(${squeezeX}px,${y+v}px) scale(${mobile?'.82,1.08':'.66,1.16'}) rotate(${direction*(index-1.5)*(mobile?1.5:3)}deg)`,offset:0,easing:'cubic-bezier(.52,0,.2,1)'},
    {transform:`translate(${impactX}px,${v*.55}px) scale(${mobile?'.8,1.1':'.64,1.2'}) rotate(${-direction*(index-1.5)*(mobile?1:2)}deg)`,offset:.57,easing:'cubic-bezier(.35,0,.65,1)'},
    {transform:`translate(${-direction*(mobile?6:16)}px,${-v*.22}px) scale(1.07,.96)`,offset:.77,easing:'cubic-bezier(.35,0,.65,1)'},
    {transform:`translate(${direction*(mobile?2:4)}px,0) scale(1.01,.995)`,offset:.9,easing:'cubic-bezier(.35,0,.65,1)'},
    {transform:'translate(0,0) scale(1)',offset:1}
   ],{duration:mobile?900:1120,delay:i*(mobile?8:12),easing:'linear',fill:'both'});
   return animation.finished.then(()=>animation.cancel());
  }));
 };
 // Wind up at the source edge while the outgoing words disappear.
 function windUp(items){
  if(!items.length)return Promise.resolve();const direction=root.dir==='rtl'?-1:1;
  const mobile=matchMedia('(max-width:800px)').matches,compression=mobile?.78:.57,kick=mobile?6:14;
  const edge=direction>0?Math.min(...items.map(v=>v.left)):Math.max(...items.map(v=>v.left+v.width));
  return Promise.all(items.map(({original,left,width,i})=>{
   const dx=edge+(left+width/2-edge)*compression-direction*kick-(left+width/2),v=(Math.abs(i-(items.length-1)/2)*11-9)*(mobile?.4:1);
   const animation=original.animate([{transform:'none'},{transform:`translate(${dx}px,${v}px) scale(${mobile?'.82,1.08':'.66,1.16'}) rotate(${direction*(i-1.5)*(mobile?1.5:3)}deg)`}],{duration:mobile?280:340,easing:'cubic-bezier(.45,0,.75,1)',fill:'both'});
   return animation.finished;
  }));
 }
 document.addEventListener('click',async event=>{
  if(!event.target.closest('#language-toggle')||reduced.matches)return;
  event.preventDefault();event.stopImmediatePropagation();if(busy)return;busy=true;await document.fonts.ready;button.setAttribute('aria-busy','true');
  const priorFreeze=window.skyState?.freezeFrame;if(window.skyState)window.skyState.freezeFrame=true;
  try{
   const mobile=matchMedia('(max-width:800px)').matches;
   actionRow=document.querySelector('.hero-actions');priorRowHeight=actionRow?.style.minHeight;if(actionRow)actionRow.style.minHeight=actionRow.getBoundingClientRect().height+'px';
   startScroll=scrollY;const outgoing=textElements();controls=captureControls();root.classList.add('word-changing');
   const shadow=[...document.querySelectorAll('.readability')];
   const headerLabels=[...document.querySelectorAll('header .header-control-label,header .top-cv>span')];
   await Promise.all([fade([...outgoing,...shadow,...headerLabels],[{opacity:1},{opacity:0}],{duration:mobile?280:340,easing:'ease-in'}),windUp(controls)]);
   // Preserve the user's current scroll, rather than snapping back to the click position.
   button.onclick?.call(button,event);await document.fonts.ready;
   await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
   controls.forEach(({original})=>original.getAnimations().forEach(a=>a.cancel()));
   const incoming=textElements();
   // Fade starts during flight and finishes with the arrival/rebound, on the same timeline.
   const frames=[{opacity:0,offset:0},{opacity:0,offset:.22},{opacity:.25,offset:.48},{opacity:.85,offset:.78},{opacity:1,offset:1}];
   const entering=fade([...incoming,...shadow,...headerLabels],frames,{duration:mobile?900:1120,easing:'linear'});
   await Promise.all([entering,slide(controls)]);
  }finally{
   controls.forEach(({original,style})=>{original.getAnimations().forEach(a=>a.cancel());style===null?original.removeAttribute('style'):original.setAttribute('style',style);});controls=[];
   if(actionRow)actionRow.style.minHeight=priorRowHeight||'';
   fades.forEach(a=>a.cancel());fades=[];layer.replaceChildren();root.classList.remove('word-changing','word-handoff');
   if(window.skyState)window.skyState.freezeFrame=priorFreeze||false;button.removeAttribute('aria-busy');busy=false;
  }
 },true);

 // Side track parked at owner request. Saved in .scratch/portfolio/parked-side-track-2026-10-24.
}






