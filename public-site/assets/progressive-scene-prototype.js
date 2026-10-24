// Local progressive startup: poster and renderer share a held initial cloud state.
const root=document.documentElement;
if(root.classList.contains('progressive-scene-trial')){
 const params=new URLSearchParams(location.search),capture=params.has('poster-capture'),world=document.querySelector('.world');
 const poster=document.createElement('img');poster.className='scene-start-poster';poster.alt='';poster.setAttribute('aria-hidden','true');poster.fetchPriority='high';
 const select=()=>{poster.src='/assets/scene-start-'+root.dataset.theme+(innerWidth<=700?'-phone':'-desktop')+'.webp';};select();world?.append(poster);root.dataset.posterState='holding';
 let revealing=false,generation=0;
 const reveal=async()=>{if(revealing||root.dataset.sceneReady!=='true')return;revealing=true;const current=++generation;
  if(capture){root.dataset.posterState='capture-ready';return;}
  try{await poster.decode();}catch{}
  if(current!==generation)return;root.dataset.posterMounted='true'; // Renderer is still held even when the poster download was slow.
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  if(current!==generation)return;root.dataset.posterState='live';
  const finish=()=>{if(current!==generation)return;if(window.skyState)window.skyState.startupHold=false;root.dataset.posterState='complete';};
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){finish();poster.remove();return;}
  poster.addEventListener('transitionend',()=>{if(current===generation){finish();poster.remove();}},{once:true});setTimeout(()=>{if(current===generation&&root.dataset.posterState==='live'){finish();poster.remove();}},1400);
 };
 addEventListener('portfolio-scene-ready',reveal,{once:true});reveal();
 // Mode changes during startup must not reveal a mismatched poster.
 new MutationObserver(()=>{if(!capture&&root.dataset.posterState!=='complete'){generation++;root.dataset.posterState='holding';revealing=false;select();reveal();}}).observe(root,{attributes:true,attributeFilter:['data-theme']});
}
