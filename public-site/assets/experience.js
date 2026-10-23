// Shared loading, recruiter summary and navigation preferences.
const root=document.documentElement;
const ar=()=>root.lang==='ar';
function translateShared(){document.querySelectorAll('[data-copy-en]').forEach(el=>el.textContent=el.getAttribute(ar()?'data-copy-ar':'data-copy-en'));}
new MutationObserver(translateShared).observe(root,{attributes:true,attributeFilter:['lang']});translateShared();
const loader=document.getElementById('page-loader');
const loadingTargets=Array.from(document.querySelectorAll('body>header,body>main'));loadingTargets.forEach(el=>el.inert=true);
let dismissed=false;function dismiss(){if(dismissed)return;dismissed=true;loader?.classList.add('finished');document.body.classList.remove('page-loading');loadingTargets.forEach(el=>el.inert=false);setTimeout(()=>loader?.remove(),350);}
addEventListener('portfolio-scene-ready',dismiss,{once:true});
if(root.dataset.sceneReady==='true')dismiss();
const skip=document.getElementById('skip-loading');skip?.addEventListener('click',dismiss);
addEventListener('portfolio-scene-failed',()=>{root.dataset.sceneFallback='true';dismiss();},{once:true});
setTimeout(()=>{if(!dismissed){root.dataset.sceneFallback='true';dismiss();}},10000);
// Preserve the chosen language and mode across full-page navigation.
document.addEventListener('click',event=>{const a=event.target.closest('a[href]');if(!a||a.download)return;const u=new URL(a.href,location.href);if(u.origin!==location.origin||/\.(pdf|png|jpg|webp|svg)$/i.test(u.pathname))return;u.searchParams.set('lang',root.lang==='ar'?'ar':'en');u.searchParams.set('theme',root.dataset.theme==='night'?'night':'day');a.href=u.pathname+u.search+u.hash;});
const dialog=document.getElementById('quick-overview');let opener;
document.getElementById('quick-overview-open')?.addEventListener('click',event=>{opener=event.currentTarget;translateShared();dialog.showModal();});
document.getElementById('quick-overview-close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog){const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)dialog.close();}});
dialog?.addEventListener('close',()=>opener?.focus());
