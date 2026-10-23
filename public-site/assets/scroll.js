// Single user-selected approach, plus a still-image comparison. No perspective,
// independent image layers, traffic, snapping, or synthetic scroll interception.
const root=document.documentElement,world=document.querySelector('.world'),hero=document.querySelector('.hero');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const compare=document.getElementById('scroll-compare'),readout=document.getElementById('scroll-state');
let enabled=new URLSearchParams(location.search).get('motion')!=='still',current=0,target=0,frame=0,previous=0;
const clamp=x=>Math.max(0,Math.min(1,x));
function measure(){const span=Math.max(1,hero.offsetHeight-innerHeight*.16);target=clamp(scrollY/span);wake();}
function paint(){const eased=current*(2-current),active=enabled&&!reduced.matches;
 const arrival=active?eased:0,fade=active?clamp((current-.08)/.7):0;
 root.style.setProperty('--world-scale',(1+.035*arrival).toFixed(6));
 root.style.setProperty('--world-shift',(-Math.min(10,innerHeight*.012)*arrival).toFixed(3)+'px');
 root.style.setProperty('--intro-opacity',(1-fade*fade*(3-2*fade)).toFixed(4));
 root.style.setProperty('--intro-shift',(-14*arrival).toFixed(3)+'px');
 readout.textContent=!active?(reduced.matches?'Reduced motion':'Still comparison'):current>=.999?'View held':current<=.001?'Opening':'Arriving · '+Math.round(current*100)+'%';
 world.classList.toggle('settled',current>=.999||!active);
 compare.textContent=enabled?'Motion on':'Motion off';compare.setAttribute('aria-pressed',String(enabled));
}
function step(now){const dt=previous?Math.min(.05,(now-previous)/1000):1/60;previous=now;
 current+=(target-current)*(reduced.matches?1:1-Math.exp(-dt*18));
 if(Math.abs(target-current)<.00005)current=target;paint();
 if(current!==target)frame=requestAnimationFrame(step);else{frame=0;previous=0;}
}
function wake(){if(!frame)frame=requestAnimationFrame(step);}
compare.onclick=()=>{enabled=!enabled;const params=new URLSearchParams(location.search);params.set('motion',enabled?'gentle':'still');history.replaceState(null,'','?'+params+location.hash);paint();};
document.getElementById('scroll-replay').onclick=()=>scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'});
addEventListener('scroll',measure,{passive:true});addEventListener('resize',measure);reduced.addEventListener('change',()=>{current=target;paint();});
current=clamp(scrollY/Math.max(1,hero.offsetHeight-innerHeight*.16));measure();paint();
