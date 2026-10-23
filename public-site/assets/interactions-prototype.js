// PROVISIONAL: visible-word gathering and travelling route. Local opt-in only.
if(new URLSearchParams(location.search).get('interactions')==='preview'){
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/interactions-prototype.css';document.head.append(css);
 const root=document.documentElement,reduced=matchMedia('(prefers-reduced-motion: reduce)');root.classList.add('interaction-preview');
 const button=document.querySelector('#language-toggle');let busy=false;
 const layer=document.createElement('div');layer.className='word-flight-layer';layer.setAttribute('aria-hidden','true');document.body.append(layer);
 // Whole-word fragments preserve connected Arabic shaping; only visible main-page text participates.
 function snapshot(){
  const items=[];const walker=document.createTreeWalker(document.querySelector('main'),NodeFilter.SHOW_TEXT);
  for(let node;node=walker.nextNode();){
   const parent=node.parentElement;if(parent.closest('script,style,iframe,svg')||!node.textContent.trim())continue;
   const style=getComputedStyle(parent);if(style.visibility==='hidden'&&!root.classList.contains('word-changing')||style.display==='none')continue;
   for(const match of node.textContent.matchAll(/\S+/gu)){
    const range=document.createRange();range.setStart(node,match.index);range.setEnd(node,match.index+match[0].length);
    const rect=range.getBoundingClientRect();if(rect.width<1||rect.height<1||rect.top<0||rect.bottom>innerHeight||rect.right<0||rect.left>innerWidth)continue;
    const el=document.createElement('span');el.textContent=match[0];el.dir=root.dir;
    Object.assign(el.style,{left:rect.left+'px',top:rect.top+'px',font:style.font,color:style.color,letterSpacing:style.letterSpacing,lineHeight:rect.height+'px'});layer.append(el);
    items.push({el,x:innerWidth/2-rect.left-rect.width/2,y:innerHeight/2-rect.top-rect.height/2});
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
  event.preventDefault();event.stopImmediatePropagation();if(busy)return;busy=true;button.setAttribute('aria-busy','true');
  const scrollPosition=scrollY;let outgoing=[];
  try{
   outgoing=snapshot();root.classList.add('word-changing');await play(outgoing,true);outgoing.forEach(v=>v.el.remove());
   button.onclick?.call(button,event);scrollTo({top:scrollPosition,behavior:'instant'});
   // Translation and direction have settled before measuring destination word positions.
   await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
   root.classList.remove('word-changing');const incoming=snapshot();root.classList.add('word-changing');await play(incoming,false);
  }finally{layer.replaceChildren();root.classList.remove('word-changing');button.removeAttribute('aria-busy');busy=false;}
 },true);
 const nav=document.querySelector('.section-nav');
 if(nav){
  nav.classList.add('journey-original');const links=[...nav.querySelectorAll('a')];const sections=links.map(a=>document.querySelector(a.hash));
  const travel=document.createElement('aside');travel.className='travel-route';travel.setAttribute('aria-hidden','true');
  travel.innerHTML='<svg xmlns="http://www.w3.org/2000/svg"><path class="route-shadow"/><path class="route-road"/><path class="route-dashes"/><g class="route-stations"></g><g class="route-trail"></g><g class="traveller"><circle r="12" class="traveller-halo"/><path d="M0 -9 L6 7 L0 4 L-6 7 Z"/></g></svg><span class="travel-caption"></span>';
  document.body.append(travel);const svg=travel.querySelector('svg'),paths=travel.querySelectorAll('svg>path'),path=paths[0],stations=travel.querySelector('.route-stations'),trail=travel.querySelector('.route-trail'),traveller=travel.querySelector('.traveller'),caption=travel.querySelector('.travel-caption');
  const ns='http://www.w3.org/2000/svg';const circle=(r,group)=>{const c=document.createElementNS(ns,'circle');c.setAttribute('r',r);group.append(c);return c;};
  const dots=Array.from({length:14},(_,i)=>circle(2.8-i*.13,trail));let progress=0,target=0,active=-1,visible=false,last=0,mobile;
  function layout(){mobile=innerWidth<1000;svg.setAttribute('viewBox',mobile?'0 0 360 80':'0 0 100 420');const d=mobile?'M20 50 C65 50 50 18 100 24 S150 66 190 46 S240 13 275 30 S310 64 340 30':'M50 20 C5 70 90 80 55 135 S10 200 55 245 S90 310 45 350 S30 385 50 400';paths.forEach(p=>p.setAttribute('d',d));stations.replaceChildren();links.forEach((_,i)=>{const p=path.getPointAtLength(path.getTotalLength()*i/(links.length-1));const c=circle(5,stations);c.setAttribute('cx',p.x);c.setAttribute('cy',p.y);});}
  function update(){target=Math.max(0,Math.min(1,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)));visible=scrollY>100;travel.classList.toggle('visible',visible);active=-1;sections.forEach((s,i)=>{if(s&&s.getBoundingClientRect().top<innerHeight*.48)active=i;});caption.textContent=active<0?(root.lang==='ar'?'بداية الرحلة':'Setting off'):links[active].textContent;[...stations.children].forEach((c,i)=>c.classList.toggle('passed',i<=active));}
  function frame(time){const dt=Math.min(50,time-last||16);last=time;progress+= (target-progress)*(1-Math.exp(-dt/130));if(visible){const length=path.getTotalLength(),position=progress*length,p=path.getPointAtLength(position),q=path.getPointAtLength(Math.min(length,position+2));traveller.setAttribute('transform',`translate(${p.x},${p.y}) rotate(${Math.atan2(q.y-p.y,q.x-p.x)*180/Math.PI+90})`);dots.forEach((dot,i)=>{const offset=reduced.matches?i*4:(i*5+(time*.025)%5);const at=path.getPointAtLength(Math.max(0,position-offset));dot.setAttribute('cx',at.x);dot.setAttribute('cy',at.y);dot.style.opacity=String((1-i/15)*.8);});}requestAnimationFrame(frame);}
  layout();update();requestAnimationFrame(frame);addEventListener('scroll',update,{passive:true});addEventListener('resize',()=>{layout();update();});new MutationObserver(update).observe(root,{attributes:true,attributeFilter:['lang']});
 }
 const badge=document.createElement('div');badge.className='interaction-review-note';const label=()=>badge.textContent=root.lang==='ar'?'تجربة محلية · تجمع الكلمات ورحلة التصفح':'Local experiment · Word gathering + travelling route';new MutationObserver(label).observe(root,{attributes:true,attributeFilter:['lang']});label();document.body.append(badge);
}

