// Navigation continuity trial: keep the ready homepage alive across detail visits.
if(document.body.classList.contains('content-study')){
 const root=document.documentElement,isDetail=url=>/^\/(projects|training)\/[^/]+\/?$/.test(url.pathname);
 const homeIdentity=crypto.randomUUID();root.dataset.homeInstance=homeIdentity;
 history.scrollRestoration='manual';
 let homeY=scrollY,active=null,pending=null,version=0,homeLocation=location.href,homeTitle=document.title,sourceLink=null,priorFreeze=false,priorPaused=false,suspended=false;
 history.replaceState({...history.state,portfolioHome:true},'',location.href);
 const notice=document.createElement('div');notice.className='navigation-notice';notice.setAttribute('role','status');document.body.append(notice);
 const ar=()=>(active?.contentDocument.documentElement.lang||root.lang)==='ar';
 const homeParts=()=>[...document.querySelectorAll('body>header,body>main')];
 function suspend(){if(suspended)return;suspended=true;priorFreeze=window.skyState?.freezeFrame||false;priorPaused=document.body.classList.contains('paused');if(window.skyState)window.skyState.freezeFrame=true;document.body.classList.add('paused');}
 function resume(){if(!suspended)return;suspended=false;if(window.skyState)window.skyState.freezeFrame=priorFreeze;if(!priorPaused)document.body.classList.remove('paused');}
 function setBusy(link,busy){if(!link)return;busy?link.setAttribute('aria-busy','true'):link.removeAttribute('aria-busy');}
 function until(check,element,timeout=10000){return new Promise((resolve,reject)=>{
  if(check()){resolve();return;}let timer;const observer=new MutationObserver(()=>{if(check()){clearTimeout(timer);observer.disconnect();resolve();}});observer.observe(element,{attributes:true,childList:true,subtree:true});timer=setTimeout(()=>{observer.disconnect();reject(new Error('Target page did not become ready'));},timeout);
 });}
 async function prepare(frame){
  const doc=frame.contentDocument;if(!doc||doc.location.pathname==='/')throw new Error('Unexpected detail response');
  await doc.fonts.ready;
  await until(()=>doc.documentElement.dataset.mobileComfortReady==='true',doc.documentElement);
  const visible=el=>{const r=el.getBoundingClientRect();return r.bottom>0&&r.top<frame.clientHeight;};
  const nested=[...doc.querySelectorAll('.diagram-scroll iframe')].filter(el=>frame.clientWidth>800&&visible(el));
  await Promise.all(nested.map(el=>new Promise((resolve,reject)=>{if(el.contentDocument?.querySelector('svg')){resolve();return;}el.loading='eager';let timer;const done=()=>{clearTimeout(timer);resolve();};el.addEventListener('load',done,{once:true});timer=setTimeout(()=>reject(new Error('Diagram not ready')),8000);}))); 
  await Promise.all([...doc.querySelectorAll('img')].filter(visible).map(img=>img.decode().catch(()=>{})));
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
 }
 function connect(frame){
  const doc=frame.contentDocument;
  doc.addEventListener('click',event=>{
   const a=event.target.closest('a[href]');if(!a||event.button>0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
   const url=new URL(a.href);if(url.origin!==location.origin)return;
   if(url.pathname==='/'&&['#projects','#bootcamps'].includes(url.hash)){
    event.preventDefault();event.stopImmediatePropagation();if(history.state?.portfolioDetail)history.go(-(history.state.portfolioDepth||1));else close(false);
   }else if(isDetail(url)){
    event.preventDefault();event.stopImmediatePropagation();open(url,a,true);
   }
  },true);
 }
 async function open(url,link,push){
  const current=++version;notice.textContent='';setBusy(sourceLink,false);
  if(!active){if(push){homeLocation=location.href;homeTitle=document.title;sourceLink=link;}homeY=scrollY;root.dataset.homeSavedY=String(homeY);}
  setBusy(link,true);suspend();root.dataset.navigationState='preparing-detail';
  if(pending)pending.remove();const frame=document.createElement('iframe');pending=frame;
  frame.className='persistent-detail';frame.title=ar()?'تفاصيل المشروع أو البرنامج':'Project or program details';frame.setAttribute('aria-hidden','true');frame.tabIndex=-1;
  url.searchParams.set('lang',active?.contentDocument.documentElement.lang||root.lang);url.searchParams.set('theme',active?.contentDocument.documentElement.dataset.theme||root.dataset.theme||'day');url.searchParams.set('motion','off');url.searchParams.set('embedded','1');
  const loaded=new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('Navigation timeout')),12000);frame.addEventListener('load',()=>{clearTimeout(timer);resolve();},{once:true});frame.addEventListener('error',()=>{clearTimeout(timer);reject(new Error('Navigation failed'));},{once:true});});
  frame.src=url.href;document.body.append(frame);
  try{
   await loaded;await prepare(frame);if(current!==version){frame.remove();return;}
   const old=active;active=frame;pending=null;connect(frame);
   frame.title=frame.contentDocument.title;if(!old)homeParts().forEach(el=>el.inert=true);
   root.classList.add('has-persistent-detail');frame.removeAttribute('aria-hidden');frame.tabIndex=0;frame.classList.add('detail-ready');
   if(old)old.remove();
   const publicUrl=new URL(url);publicUrl.searchParams.delete('embedded');publicUrl.searchParams.delete('motion');
   if(push){if(!old){const homeEntry=new URL(homeLocation);homeEntry.hash='';history.replaceState({portfolioHome:true},'',homeEntry.pathname+homeEntry.search);}history.pushState({portfolioDetail:true,portfolioDepth:old?(history.state?.portfolioDepth||1)+1:1,url:publicUrl.href},'',publicUrl.pathname+publicUrl.search+publicUrl.hash);}
   document.title=frame.contentDocument.title;root.dataset.navigationState='detail';setBusy(link,false);
   frame.contentWindow.focus();frame.contentDocument.querySelector('h1')?.setAttribute('tabindex','-1');frame.contentDocument.querySelector('h1')?.focus({preventScroll:true});
  }catch(error){
   frame.remove();if(current!==version)return;if(!active)resume();pending=null;setBusy(link,false);root.dataset.navigationState=active?'detail':'home';
   notice.textContent=ar()?'تعذر تجهيز الصفحة. حاول مرة أخرى أو افتح الرابط في علامة تبويب جديدة.':'The page could not be prepared. Try again or open the link in a new tab.';
  }
 }
 async function close(navigate=false){
  version++;if(pending){pending.remove();pending=null;}const frame=active;if(!frame){resume();root.dataset.navigationState='home';setBusy(sourceLink,false);return;}
  const doc=frame.contentDocument,language=doc.documentElement.lang,theme=doc.documentElement.dataset.theme;
  const card=sourceLink?.closest('article'),cardTop=card?.getBoundingClientRect().top,languageChanged=language!==root.lang;
  if(languageChanged){document.querySelector('#language-toggle')?.onclick?.();homeTitle=document.querySelector('main h1').textContent+(root.lang==='ar'?' — الملف الشخصي':' — Portfolio');}
  if(theme!==root.dataset.theme)document.querySelector('#time')?.click();
  await document.fonts.ready;
  if(card&&languageChanged){await new Promise(resolve=>requestAnimationFrame(resolve));homeY=card.getBoundingClientRect().top+scrollY-cardTop;}
  active=null;root.classList.remove('has-persistent-detail');scrollTo({top:homeY,behavior:'instant'});homeParts().forEach(el=>el.inert=false);
  resume();
  document.title=homeTitle;root.dataset.navigationState='home';frame.classList.remove('detail-ready');setTimeout(()=>frame.remove(),130);
  sourceLink?.focus({preventScroll:true});const home=new URL(homeLocation);home.searchParams.set('lang',root.lang);home.searchParams.set('theme',root.dataset.theme);homeLocation=home.href;history.replaceState({portfolioHome:true},'',homeLocation);
 }
 document.addEventListener('click',event=>{
  const link=event.target.closest('a.project-page-link,a.program-page-link');if(!link||event.defaultPrevented||event.button>0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
  const url=new URL(link.href);if(url.origin!==location.origin||!isDetail(url))return;
  event.preventDefault();event.stopImmediatePropagation();open(url,link,true);
 },true);
 addEventListener('popstate',event=>{if(event.state?.portfolioDetail){open(new URL(event.state.url),sourceLink,false);}else if(active||pending){close(false);}});
 root.dataset.navigationState='home';
}
