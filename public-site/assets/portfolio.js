// Throwaway comparison: identical portfolio, two different sky engines. No stored state.
const $=id=>document.getElementById(id);
const variant='takram';
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
window.skyState={target:0,paused:reduced.matches,speed:variant==='takram'?4:1,coverage:variant==='takram'?.24:.3,status(text){$('render-status').textContent=text;},update(phase){document.querySelector('.city-back').style.setProperty('--night',Math.max(0,Math.min(1,(phase-.35)/.65)));$('phase').textContent=phase<.2?'Day':phase>.85?'Night':'Twilight';$('light-position').textContent=phase>.8?'Full moon':phase>.3?'Golden hour':'Sunlight';}};
const state=window.skyState;
$('coverage').value=state.coverage;
$('speed').value=state.speed;
$('engine-label').textContent=variant==='takram'?'Living atmosphere · starry night':'Animated sequences';
$('engine-note').textContent=variant==='takram'?'Takram: live cloud volume, atmospheric scattering and sunset. Moon, stars and night fill are art directed.':'Unity CC0: two recorded 64-frame cloud sequences; independent travel, custom sky, sun, stars and textured Moon. Baked cloud lighting.';
document.querySelectorAll('.engine-links a').forEach(a=>a.classList.toggle('active',a.search.includes(variant)));
function setTarget(value){state.target=value;document.documentElement.dataset.theme=value>.65?'night':'day';$('time').textContent=value>.5?'Experience sunrise ↗':'Experience night ↗';$('sun-position').value=value;document.querySelectorAll('[data-moment]').forEach(b=>b.classList.toggle('active',Number(b.dataset.moment)===value));}
$('time').onclick=()=>setTarget(state.target>.5?0:1);$('sun-position').oninput=e=>setTarget(+e.target.value);
document.querySelectorAll('[data-moment]').forEach(b=>b.onclick=()=>setTarget(+b.dataset.moment));
$('pause').onclick=()=>{state.paused=!state.paused;pauseLabel();};
$('meteor-preview').hidden=variant!=='takram';
$('meteor-preview').onclick=()=>{setTarget(1);state.meteorPending=true;};
function pauseLabel(){$('pause').textContent=state.paused?'Resume clouds':'Pause clouds';$('pause').setAttribute('aria-pressed',state.paused);}
$('coverage').oninput=e=>state.coverage=+e.target.value;$('speed').oninput=e=>state.speed=+e.target.value;
if(variant==='unity'){$('scene').hidden=true;$('quality').hidden=true;await import('./portfolio-unity-prototype.js');}
else{$('sky-canvas').hidden=true;await import('/assets/sky.js?v=release-20261027-feedback-batch?rev=sky-final-1');}
if(innerWidth<700)document.querySelector('.review details').open=false;
reduced.addEventListener('change',()=>{if(reduced.matches){state.paused=true;pauseLabel();}});pauseLabel();setTarget(0);
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)document.querySelectorAll('.section-nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id));});},{rootMargin:'-10% 0px -65% 0px'});document.querySelectorAll('.panel').forEach(el=>observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',event=>{const target=document.querySelector(a.hash);if(!target)return;event.preventDefault();history.replaceState(null,'',location.pathname+location.search+a.hash);target.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});}));
await import('/assets/scroll.js?revision=intact-1');
await import('/assets/city.js');
