// PROVISIONAL: language light sweep and section journey, enabled only with ?interactions=preview.
if(new URLSearchParams(location.search).get('interactions')==='preview'){
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/interactions-prototype.css';document.head.append(css);
 const root=document.documentElement,reduced=matchMedia('(prefers-reduced-motion: reduce)');
 root.classList.add('interaction-preview');
 const sweep=document.createElement('div');sweep.className='language-sweep';sweep.setAttribute('aria-hidden','true');document.body.append(sweep);
 const button=document.querySelector('#language-toggle');let busy=false;
 document.addEventListener('click',event=>{
  if(!event.target.closest('#language-toggle')||busy){if(busy&&event.target.closest('#language-toggle')){event.preventDefault();event.stopImmediatePropagation();}return;}
  if(reduced.matches)return;
  event.preventDefault();event.stopImmediatePropagation();busy=true;button.setAttribute('aria-busy','true');
  root.style.setProperty('--sweep-direction',root.lang==='ar'?'-1':'1');root.classList.add('language-changing');
  setTimeout(()=>{button.onclick?.call(button,event);},310);
  setTimeout(()=>{root.classList.remove('language-changing');button.removeAttribute('aria-busy');busy=false;},820);
 },true);
 const nav=document.querySelector('.section-nav');
 if(nav){
  nav.classList.add('journey-rail');
  const links=[...nav.querySelectorAll('a')];const sections=links.map(a=>document.querySelector(a.hash));
  const update=()=>{
   const scrollable=document.documentElement.scrollHeight-innerHeight;
   nav.style.setProperty('--journey-progress',Math.max(0,Math.min(1,scrollY/Math.max(1,scrollable))));
   let active=-1;sections.forEach((section,i)=>{if(section&&section.getBoundingClientRect().top<innerHeight*.48)active=i;});
   links.forEach((a,i)=>{a.classList.toggle('current',i===active);if(i===active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  };let pending=false;addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{update();pending=false;});}},{passive:true});addEventListener('resize',update);update();
 }
 const badge=document.createElement('div');badge.className='interaction-review-note';
 const label=()=>badge.textContent=root.lang==='ar'?'تجربة محلية · انتقال اللغة ومسار التصفح':'Local experiment · Language sweep + journey';
 new MutationObserver(label).observe(root,{attributes:true,attributeFilter:['lang']});label();document.body.append(badge);
}
