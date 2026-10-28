// Reviewed compact mobile layout; comparison controls are loopback-only.
const root=document.documentElement,params=new URLSearchParams(location.search);
const localReview=['127.0.0.1','localhost','[::1]'].includes(location.hostname)&&params.has('mobile-preview');
{
 const compact=!localReview||params.get('mobile-preview')==='compact';
 root.classList.add('mobile-layout-review');root.dataset.mobilePreview=compact?'compact':'current';
 const sheet=document.createElement('link');sheet.rel='stylesheet';sheet.href='/assets/mobile-layout-prototype.css?v=release-20261027-single-opening';document.head.append(sheet);
 const ar=()=>root.lang==='ar',copy=(en,arabic)=>ar()?arabic:en;
 function linkPreferences(){if(!localReview)return;document.querySelectorAll('a.project-page-link,a.program-page-link,a.related,.detail-return a').forEach(a=>{const u=new URL(a.href);if(u.origin!==location.origin)return;u.searchParams.set('mobile-preview',compact?'compact':'current');a.href=u.pathname+u.search+u.hash;});}
 linkPreferences();
 if(compact&&matchMedia('(max-width:800px)').matches){
  const header=document.querySelector('.detail-page main header');
  if(header){
   const back=header.querySelector(':scope>a'),cv=header.querySelector('.top-cv'),theme=header.querySelector('#time'),language=header.querySelector('#lang,#language');
   if(back&&cv&&theme&&language){const utilities=document.createElement('div');utilities.className='preview-detail-utilities';utilities.append(theme,language);header.replaceChildren(back,cv,utilities);header.classList.add('preview-detail-header');}
  }
  if(location.pathname==='/training/cloud/'){
   const main=document.querySelector('main'),title=main.querySelector('h1'),provider=main.querySelector('.provider'),cover=main.querySelector('.program-cover');
   if(title&&cover){(main.querySelector('.detail-tech-stack')||main.querySelector('header')).after(title);if(provider)title.after(provider);main.classList.add('preview-title-first');}
  }
 }
 const bar=document.createElement('nav');bar.className='mobile-preview-switcher';bar.setAttribute('aria-label','Mobile layout preview');
 function render(){
  document.querySelectorAll('[data-copy-en][data-copy-ar]').forEach(e=>{if(e.closest('.mobile-preview-card'))e.textContent=e.dataset[ar()?'copyAr':'copyEn'];});
  bar.replaceChildren();const label=document.createElement('span');label.textContent=copy('Mobile preview','معاينة الهاتف');bar.append(label);
  for(const value of ['current','compact']){const a=document.createElement('a'),u=new URL(location.href);u.searchParams.set('mobile-preview',value);a.href=u.pathname+u.search+u.hash;a.textContent=value==='current'?copy('Current','الحالي'):copy('Compact','المختصر');if(value===(compact?'compact':'current'))a.setAttribute('aria-current','page');bar.append(a);}
  bar.setAttribute('aria-label',copy('Mobile layout preview','معاينة تخطيط الهاتف'));linkPreferences();
 }
 if(localReview&&!params.has('embedded'))document.body.append(bar);
 new MutationObserver(render).observe(root,{attributes:true,attributeFilter:['lang']});render();
 await new Promise(resolve=>{if(sheet.sheet)resolve();else{sheet.addEventListener('load',resolve,{once:true});sheet.addEventListener('error',resolve,{once:true});}});
 root.dataset.mobilePreviewReady='true';
}
