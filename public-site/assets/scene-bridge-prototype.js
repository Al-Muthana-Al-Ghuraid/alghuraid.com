// Small still-frame bridge during the local MPA transition trial.
if(new URLSearchParams(location.search).get('motion')==='studio'){
 const key='portfolio-scene-still';let prepared=null,capturing=null;
 function capture(){
  if(capturing)return capturing;if(document.documentElement.dataset.sceneReady!=='true'||!window.skyState)return Promise.resolve(null);
  capturing=new Promise(resolve=>{let done=false;const finish=value=>{if(done)return;done=true;capturing=null;prepared=value;resolve(value);};
   window.skyState.captureFrame=sky=>{try{
    const width=Math.min(1000,innerWidth),height=Math.round(width*innerHeight/innerWidth),canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const ctx=canvas.getContext('2d'),world=document.querySelector('.world'),r=world.getBoundingClientRect(),scale=width/innerWidth;
    ctx.drawImage(sky,r.left*scale,r.top*scale,r.width*scale,r.height*scale);
    const city=document.querySelector('.candidate-composite');if(city){const k=Math.max(r.width/city.width,r.height/city.height),w=city.width*k,h=city.height*k;ctx.drawImage(city,(r.left+(r.width-w)/2)*scale,(r.top+r.height-h)*scale,w*scale,h*scale);}
    const shade=ctx.createLinearGradient(0,0,width*.7,0);shade.addColorStop(0,'rgba(7,27,48,.33)');shade.addColorStop(1,'rgba(7,27,48,0)');ctx.fillStyle=shade;ctx.fillRect(0,0,width,height);
    finish({image:canvas.toDataURL('image/jpeg',.82),theme:document.documentElement.dataset.theme,at:Date.now()});
   }catch{finish(null);}};setTimeout(()=>finish(null),180);
  });return capturing;
 }
 const showStill=()=>{
  let still;try{still=JSON.parse(sessionStorage.getItem(key)||'null');sessionStorage.removeItem(key);}catch{}
  if(still&&Date.now()-still.at<12000&&still.theme===(new URLSearchParams(location.search).get('theme')||'day')){
   const cover=document.createElement('img');cover.className='scene-still-bridge';cover.alt='';cover.setAttribute('aria-hidden','true');cover.src=still.image;document.body.append(cover);document.documentElement.dataset.sceneBridge='holding';
   const release=()=>{if((document.documentElement.dataset.sceneReady!=='true'||!window.skyState?.firstFrameRendered)&&document.documentElement.dataset.sceneFailed!=='true')return;cover.classList.add('scene-still-finished');setTimeout(()=>cover.remove(),420);document.documentElement.dataset.sceneBridge='released';};
   addEventListener('portfolio-scene-ready',release,{once:true});addEventListener('portfolio-frame-ready',release,{once:true});addEventListener('portfolio-scene-failed',release,{once:true});release();setTimeout(()=>{if(cover.isConnected){cover.remove();document.documentElement.dataset.sceneBridge='fallback';}},8000);
  }
 };if(document.readyState==='loading')addEventListener('DOMContentLoaded',showStill,{once:true});else showStill();
 let scrollTimer;addEventListener('portfolio-frame-ready',()=>setTimeout(capture,120),{once:true});addEventListener('portfolio-scene-ready',()=>setTimeout(capture,160),{once:true});addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(capture,220);},{passive:true});
 document.addEventListener('pointerover',event=>{if(event.target.closest('.readable-project')&&(!prepared||Date.now()-prepared.at>700))capture();},{passive:true});
 document.addEventListener('focusin',event=>{if(event.target.closest('.project-page-link'))capture();});
 document.addEventListener('click',async event=>{
  const link=event.target.closest('.project-page-link');if(!link||event.button>0||event.ctrlKey||event.metaKey||event.altKey||event.shiftKey)return;
  const state=window.skyState;if(prepared&&Date.now()-prepared.at<30000&&prepared.theme===document.documentElement.dataset.theme){try{sessionStorage.setItem(key,JSON.stringify({...prepared,at:Date.now()}));}catch{}if(state)state.freezeFrame=true;return;}event.preventDefault();let still=await capture();
  if(still){still.at=Date.now();try{sessionStorage.setItem(key,JSON.stringify(still));}catch{}}
  if(state)state.freezeFrame=true;location.assign(link.href);
 },false);
 addEventListener('pageshow',()=>{if(window.skyState)window.skyState.freezeFrame=false;});
}
