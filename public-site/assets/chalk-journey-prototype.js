// PROVISIONAL: A loops/knots versus B section webs. Same page; ?variant=A or B.
const root=document.documentElement,nav=document.querySelector('.section-nav');
if(nav){
 nav.classList.add('journey-original');
 const ns='http://www.w3.org/2000/svg',sections=[...nav.querySelectorAll('a')].map(a=>document.querySelector(a.hash));
 const el=(tag,attrs,parent)=>{const n=document.createElementNS(ns,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);parent?.append(n);return n;};
 const host=document.createElement('aside');host.className='chalk-journey';host.setAttribute('aria-hidden','true');document.body.append(host);
 const svg=el('svg',{},host),defs=el('defs',{},svg),gradient=el('linearGradient',{id:'chalk-fade',gradientUnits:'userSpaceOnUse',x1:0,x2:0},defs);
 for(const [offset,opacity] of [[0,0],[.25,.5],[.6,.9],[1,1]])el('stop',{offset,'stop-color':'white','stop-opacity':opacity},gradient);
 const mask=el('mask',{id:'chalk-window',maskUnits:'userSpaceOnUse'},defs),maskRect=el('rect',{x:0,y:0,fill:'url(#chalk-fade)'},mask);
 const group=el('g',{mask:'url(#chalk-window)'},svg),ink=el('g',{},group),webs=el('g',{},group);
 const strokes=[el('path',{class:'chalk-under'},ink),el('path',{class:'chalk-core'},ink),el('path',{class:'chalk-grain'},ink)];
 let variant=new URLSearchParams(location.search).get('variant')==='B'?'B':'A',start=0,length=0,height=0,width=0,draw=0,target=0,last=0;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const bar=document.createElement('div');bar.className='chalk-review-switcher';bar.innerHTML='<button type="button" class="chalk-prev">‹</button><span></span><button type="button" class="chalk-next">›</button>';document.body.append(bar);
 function label(){const ar=root.lang==='ar';bar.querySelector('span').textContent=ar?(variant==='A'?'تجربة A · حلقات وعُقد':'تجربة B · شبكات متفرعة'):(variant==='A'?'Experiment A · Loops & knots':'Experiment B · Branching webs');bar.querySelector('.chalk-prev').setAttribute('aria-label',ar?'التجربة السابقة':'Previous experiment');bar.querySelector('.chalk-next').setAttribute('aria-label',ar?'التجربة التالية':'Next experiment');}
 function choose(){variant=variant==='A'?'B':'A';const u=new URL(location.href);u.searchParams.set('variant',variant);history.replaceState(null,'',u);label();layout();}
 bar.querySelectorAll('button').forEach(b=>b.addEventListener('click',choose));
 addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key)&&!e.target.closest('input,textarea,select,[contenteditable]')){e.preventDefault();choose();}});
 function atY(y){let lo=0,hi=length;for(let i=0;i<22;i++){const mid=(lo+hi)/2;if(strokes[0].getPointAtLength(mid).y<y)lo=mid;else hi=mid;}return(lo+hi)/2;}
 function layout(){
  if(!sections[0])return;start=sections[0].getBoundingClientRect().top+scrollY-70;height=sections.at(-1).getBoundingClientRect().bottom+scrollY-start-40;
  width=Math.max(24,Math.min(110,document.querySelector('.content').getBoundingClientRect().left-9));Object.assign(host.style,{top:start+'px',height:height+'px',width:width+'px'});svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.setAttribute('preserveAspectRatio','none');mask.setAttribute('width',width);mask.setAttribute('height',height);maskRect.setAttribute('width',width);maskRect.setAttribute('height',height);
  const cx=width*.48,knots=sections.map(s=>s.getBoundingClientRect().top+scrollY-start+42);
  let d=`M ${cx} 10`,y=10;
  for(let i=0;i<knots.length;i++){
   const end=knots[i],side=i%2?width*.84:width*.15;
   const steps=Math.max(1,Math.ceil((end-y)/220)),step=(end-y)/steps;
   for(let j=0;j<steps;j++){const x=j%2?width*.8:side;d+=` C ${x} ${y+step*.3} ${x+Math.sin(j+i)*3} ${y+step*.72} ${cx} ${y+step}`;y+=step;}
   if(variant==='A'){const r=Math.min(22,width*.31);d+=` C ${cx+r} ${y-9} ${cx+r} ${y+25} ${cx} ${y+27} C ${cx-r} ${y+29} ${cx-r} ${y+3} ${cx+2} ${y+12} C ${cx+r*.4} ${y+20} ${cx-r*.25} ${y+36} ${cx} ${y+45}`;y+=45;}
  }
  d+=` C ${width*.8} ${y+90} ${width*.15} ${height-40} ${cx} ${height-10}`;
  strokes.forEach(p=>p.setAttribute('d',d));length=strokes[0].getTotalLength();webs.replaceChildren();
  if(variant==='B')knots.forEach((y,i)=>{const r=width*.33,c=cx;const paths=[`M ${c} ${y-25} L ${c+r} ${y} L ${c} ${y+28} L ${c-r} ${y} Z`,`M ${c} ${y-25} L ${c} ${y+28} M ${c-r} ${y} L ${c+r} ${y}`,`M ${c-r*.5} ${y-12} L ${c+r*.5} ${y-12} L ${c+r*.5} ${y+14} L ${c-r*.5} ${y+14} Z`,`M ${c+r} ${y} Q ${width*.96} ${y+10} ${width-1} ${y+7}`];paths.forEach(d=>{const p=el('path',{d,class:'chalk-web'},webs);p.dataset.y=y;});});
  draw=target=atY(Math.max(10,scrollY+innerHeight*.66-start));update();paint();
 }
 function update(){target=atY(Math.max(10,scrollY+innerHeight*.66-start));host.classList.toggle('visible',scrollY>100);}
 function paint(){
  const head=strokes[0].getPointAtLength(draw),tail=head.y-innerHeight*.64;
  gradient.setAttribute('y1',tail);gradient.setAttribute('y2',head.y);host.dataset.headY=head.y.toFixed(1);host.dataset.tailY=tail.toFixed(1);
  strokes.forEach((p,i)=>{p.style.strokeDasharray=i===2?'1.5 4.3':`${draw} ${length+1}`;if(i===2){p.style.clipPath=`inset(0 0 ${Math.max(0,height-head.y)}px 0)`;}});
  // Each web is individually drawn when the chalk front reaches that section.
  for(const p of webs.children){const plen=p.getTotalLength(),amount=Math.max(0,Math.min(1,(head.y-Number(p.dataset.y)+25)/65));p.style.opacity=amount>0?.9:0;p.style.strokeDasharray=`${plen*amount} ${plen+1}`;}
 }
 function frame(time){const dt=Math.min(50,time-last||16);last=time;if(Math.abs(target-draw)>.05){draw=reduced.matches?target:draw+(target-draw)*(1-Math.exp(-dt/95));paint();}requestAnimationFrame(frame);}
 label();layout();requestAnimationFrame(frame);addEventListener('scroll',update,{passive:true});addEventListener('resize',layout);new ResizeObserver(layout).observe(document.querySelector('main'));new MutationObserver(()=>{label();requestAnimationFrame(layout);}).observe(root,{attributes:true,attributeFilter:['lang']});
}

