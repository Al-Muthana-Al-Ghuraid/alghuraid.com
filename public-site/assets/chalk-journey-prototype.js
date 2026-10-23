// Selected chalk A integrated into the local page for review. Desktop only.
const root=document.documentElement,nav=document.querySelector('.section-nav');
if(nav){
 nav.classList.add('journey-original');
 const ns='http://www.w3.org/2000/svg',sections=[...nav.querySelectorAll('a')].map(a=>document.querySelector(a.hash));
 const E=(tag,attrs,parent)=>{const n=document.createElementNS(ns,tag);for(const[k,v]of Object.entries(attrs))n.setAttribute(k,v);parent?.append(n);return n;};
 const host=document.createElement('aside');host.className='chalk-journey';host.setAttribute('aria-hidden','true');host.dataset.material='refined-a';document.body.append(host);
 const svg=E('svg',{},host),defs=E('defs',{},svg),fade=E('linearGradient',{id:'chalk-fade',gradientUnits:'userSpaceOnUse',x1:0,x2:0},defs);
 for(const[o,a]of [[0,0],[.25,.5],[.6,.9],[1,1]])E('stop',{offset:o,'stop-color':'white','stop-opacity':a},fade);
 // Texture is rendered in a small repeating tile, rather than a page-sized noise filter.
 const grain=E('pattern',{id:'chalk-grain-a',width:103,height:97,patternUnits:'userSpaceOnUse'},defs);
 const dry=E('filter',{id:'chalk-dry-a',x:0,y:0,width:1,height:1,'color-interpolation-filters':'sRGB'},defs);
 E('feTurbulence',{type:'fractalNoise',baseFrequency:'.055 .065',numOctaves:4,seed:14,result:'noise'},dry);E('feColorMatrix',{in:'noise',type:'saturate',values:0,result:'gray'},dry);
 const transfer=E('feComponentTransfer',{in:'gray',result:'coverage'},dry);for(const c of ['R','G','B'])E('feFunc'+c,{type:'linear',slope:2.4,intercept:-.5},transfer);
 E('feTurbulence',{type:'fractalNoise',baseFrequency:'.014 .023',numOctaves:2,seed:27,result:'pressure'},dry);E('feColorMatrix',{in:'pressure',type:'saturate',values:0,result:'pressure-gray'},dry);
 const pressure=E('feComponentTransfer',{in:'pressure-gray',result:'pressure-soft'},dry);for(const c of ['R','G','B'])E('feFunc'+c,{type:'linear',slope:.7,intercept:.48},pressure);
 E('feBlend',{in:'coverage',in2:'pressure-soft',mode:'multiply'},dry);E('rect',{width:103,height:97,fill:'white',filter:'url(#chalk-dry-a)'},grain);
 let seed=73;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<300;i++)E('ellipse',{cx:random()*103,cy:random()*97,rx:.15+random()*.65,ry:.1+random()*.4,fill:'black',opacity:.2+random()*.8},grain);
 for(let i=0;i<20;i++)E('path',{d:`M${random()*103} ${random()*97} l${2+random()*5} ${random()*2-1}`,stroke:'black','stroke-width':.4+random()*.7,opacity:.65},grain);
 const texture=E('mask',{id:'chalk-texture-a',maskUnits:'userSpaceOnUse',x:0,y:0,width:200,height:30000},defs);E('rect',{width:200,height:30000,fill:'url(#chalk-grain-a)'},texture);
 const mask=E('mask',{id:'chalk-window',maskUnits:'userSpaceOnUse'},defs),maskRect=E('rect',{x:0,y:0,fill:'url(#chalk-fade)'},mask);
 const clip=E('clipPath',{id:'chalk-front'},defs),front=E('rect',{x:0,y:0,width:200,height:0},clip);
 const group=E('g',{mask:'url(#chalk-window)','clip-path':'url(#chalk-front)'},svg),painted=E('g',{mask:'url(#chalk-texture-a)'},group),path=E('path',{fill:'none',stroke:'none'},svg);
 let start=0,height=0,length=0,draw=0,target=0,last=0;const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 function atY(y){let lo=0,hi=length;for(let i=0;i<22;i++){const mid=(lo+hi)/2;if(path.getPointAtLength(mid).y<y)lo=mid;else hi=mid;}return(lo+hi)/2;}
 function geometry(at){const p=path.getPointAtLength(at),q=path.getPointAtLength(Math.min(length,at+1));const tangent=Math.atan2(q.y-p.y,q.x-p.x),angle=(tangent+Math.PI/2)+(tangent-Math.PI/2)*.12;return{p,angle};}
 function layout(){
  if(innerWidth<1024){host.classList.remove('visible');return;}if(!sections[0])return;seed=73;
  start=sections[0].getBoundingClientRect().top+scrollY-70;height=sections.at(-1).getBoundingClientRect().bottom+scrollY-start-40;
  const width=Math.min(110,Math.max(65,document.querySelector('.content').getBoundingClientRect().left-10));Object.assign(host.style,{top:start+'px',height:height+'px',width:width+'px'});svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.setAttribute('preserveAspectRatio','none');mask.setAttribute('width',width);mask.setAttribute('height',height);maskRect.setAttribute('width',width);maskRect.setAttribute('height',height);
  const margin=25,points=[{x:width*.5,y:10}],count=Math.ceil((height-20)/190);
  for(let i=1;i<=count;i++)points.push({x:margin+random()*(width-margin*2),y:10+(height-20)*i/count});
  let d=`M${points[0].x} ${points[0].y}`;for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i],dy=b.y-a.y,lean=(random()-.5)*width*.65;d+=` C${Math.max(margin,Math.min(width-margin,a.x+lean))} ${a.y+dy*.33} ${Math.max(margin,Math.min(width-margin,b.x-lean))} ${a.y+dy*.67} ${b.x} ${b.y}`;}path.setAttribute('d',d);length=path.getTotalLength();painted.replaceChildren();
  const stops=sections.map(s=>atY(s.getBoundingClientRect().top+scrollY-start+44));
  // Solve actual rectangle-to-circle edge clearance, rather than rounding to the dash grid.
  function clearance(at,stop){const {p,angle}=geometry(at),c=path.getPointAtLength(stop),dx=c.x-p.x,dy=c.y-p.y,u=Math.abs(dx*Math.cos(angle)+dy*Math.sin(angle)),v=Math.abs(-dx*Math.sin(angle)+dy*Math.cos(angle));return Math.hypot(Math.max(0,u-21),Math.max(0,v-6))-19;}
  const neighbours=stops.flatMap(stop=>[-1,1].map(sign=>{let lo=0,hi=65;for(let i=0;i<20;i++){const m=(lo+hi)/2;if(clearance(Math.max(0,Math.min(length,stop+sign*m)),stop)<3)lo=m;else hi=m;}return Math.max(0,Math.min(length,stop+sign*(lo+hi)/2));}));
  const positions=[];for(let at=0;at<length;at+=21)if(!stops.some(c=>clearance(at,c)<3)&&!neighbours.some(n=>Math.abs(at-n)<19))positions.push(at);positions.push(...neighbours);positions.sort((a,b)=>a-b);
  for(const at of positions){const {p,angle}=geometry(at),g=E('g',{transform:`translate(${p.x} ${p.y}) rotate(${angle*180/Math.PI})`,opacity:.88+random()*.12},painted);const l=21,w=6;
   E('path',{class:'chalk-a-mark',d:`M${-l} ${-w+.6} L${-l*.4} ${-w-.4} L${l*.3} ${-w+.5} L${l} ${-w} L${l-.5} ${w-.5} L${l*.2} ${w+.4} L${-l*.5} ${w-.3} L${-l} ${w} Z`,fill:'white'},g);
  }
  for(const stop of stops){const p=path.getPointAtLength(stop);let outline='';for(let i=0;i<=44;i++){const a=i/44*Math.PI*2,r=19+(random()-.5)*1.1;outline+=(i?' L':'M')+(p.x+Math.cos(a)*r)+' '+(p.y+Math.sin(a)*r);}E('path',{class:'chalk-a-checkpoint',d:outline+' Z',fill:'white'},painted);}
  draw=target=atY(Math.max(10,scrollY+innerHeight*.66-start));update();paint();
 }
 function update(){target=atY(Math.max(10,scrollY+innerHeight*.66-start));host.classList.toggle('visible',innerWidth>=1024&&scrollY>100);}
 function paint(){const head=path.getPointAtLength(draw),tail=head.y-innerHeight*.64;fade.setAttribute('y1',tail);fade.setAttribute('y2',head.y);front.setAttribute('height',Math.max(0,head.y));host.dataset.headY=head.y.toFixed(1);host.dataset.tailY=tail.toFixed(1);}
 function frame(time){const dt=Math.min(50,time-last||16);last=time;if(innerWidth>=1024&&Math.abs(target-draw)>.05){draw=reduced.matches?target:draw+(target-draw)*(1-Math.exp(-dt/95));paint();}requestAnimationFrame(frame);}
 layout();requestAnimationFrame(frame);addEventListener('scroll',update,{passive:true});addEventListener('resize',layout);new ResizeObserver(layout).observe(document.querySelector('main'));new MutationObserver(()=>requestAnimationFrame(layout)).observe(root,{attributes:true,attributeFilter:['lang']});
}
