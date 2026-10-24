// Provisional editorial background for detail routes; homepage retains the live scene.
if(location.pathname.startsWith('/projects/')||location.pathname.startsWith('/training/')){
 const root=document.documentElement;root.classList.add('detail-background-trial');
 root.dataset.theme=new URLSearchParams(location.search).get('theme')==='night'?'night':'day';
 const update=()=>{const button=document.getElementById('time');if(!button)return;const ar=root.lang==='ar',night=root.dataset.theme==='night';button.textContent=ar?(night?'☀ الوضع النهاري':'☾ الوضع الليلي'):(night?'☀ Light mode':'☾ Dark mode');button.setAttribute('aria-pressed',String(night));};
 document.getElementById('time')?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='night'?'day':'night';update();});
 new MutationObserver(update).observe(root,{attributes:true,attributeFilter:['lang']});update();
 root.dataset.sceneReady='true';root.dataset.backgroundMode='editorial';dispatchEvent(new Event('portfolio-scene-ready'));
}else{
// Shared background on the homepage, project pages and training pages.
const root=document.documentElement;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const params=new URLSearchParams(location.search);
let initial=params.get('theme')==='night'?1:0;
root.dataset.theme=initial?'night':'day';
if(!document.querySelector('.world'))document.body.insertAdjacentHTML('afterbegin','<div class="world" aria-hidden="true"><div id="scene"></div><div class="city-back"></div><div class="readability"></div></div>');
if(!document.getElementById('scene-runtime'))document.body.insertAdjacentHTML('beforeend',`<div hidden aria-hidden="true" id="scene-runtime"><span id="phase"></span><span id="render-status"></span><select id="quality"><option value="high">High</option><option value="medium">Balanced</option><option value="low">Low</option></select><span id="candidate-status"></span><input id="candidate-lights" value="100"><output id="candidate-light-value"></output><select id="candidate-density"><option value="fewer">Fewer</option></select></div>`);
let skyReady=false,cityReady=false;
function ready(){if(skyReady&&cityReady){root.dataset.sceneReady='true';dispatchEvent(new Event('portfolio-scene-ready'));}}
window.skyState={target:initial,paused:reduced.matches,speed:4,coverage:.24,status(text){document.getElementById('render-status').textContent=text;if(text.includes('ready')||text.includes('Calm sky')){skyReady=true;ready();}},update(phase){document.querySelector('.city-back').style.setProperty('--night',Math.max(0,Math.min(1,(phase-.35)/.65)));document.getElementById('phase').textContent=phase<.2?'Day':phase>.85?'Night':'Twilight';}};
const state=window.skyState;
if(innerWidth<700)document.getElementById('quality').value='medium';
function updateButton(){const ar=root.lang==='ar',night=state.target>.5;const b=document.getElementById('time');if(b){b.textContent=ar?(night?'☀ الوضع النهاري':'☾ الوضع الليلي'):(night?'☀ Light mode':'☾ Dark mode');b.setAttribute('aria-pressed',String(night));}}
document.getElementById('time')?.addEventListener('click',()=>{state.target=state.target>.5?0:1;root.dataset.theme=state.target?'night':'day';updateButton();});
new MutationObserver(updateButton).observe(root,{attributes:true,attributeFilter:['lang']});updateButton();
try{
 await import('/assets/sky.js?v=smooth-4');
 await import('/assets/city.js?v=shared-scene-1');
 cityReady=document.querySelector('.city-back').dataset.candidate==='ready';ready();
}catch(error){root.dataset.sceneFailed='true';dispatchEvent(new Event('portfolio-scene-failed'));console.error('Portfolio background unavailable',error);}
reduced.addEventListener('change',()=>{state.paused=reduced.matches;});
if(document.querySelector('.hero')){
 const hero=document.querySelector('.hero'),world=document.querySelector('.world');let frame=0;
 function scrollScene(){frame=0;const t=Math.max(0,Math.min(1,scrollY/Math.max(1,hero.offsetHeight-innerHeight*.16)));const amount=reduced.matches?0:t*(2-t);root.style.setProperty('--world-scale',String(1+.035*amount));root.style.setProperty('--world-shift',(-10*amount)+'px');root.style.setProperty('--intro-opacity',String(1-Math.pow(Math.max(0,Math.min(1,(t-.08)/.7)),2)));root.style.setProperty('--intro-shift',(-14*amount)+'px');world.classList.toggle('settled',t>=.999);}
 addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(scrollScene);},{passive:true});addEventListener('resize',scrollScene);scrollScene();
}

}
