// Local navigation fix: restore the source card before exposing the returning content.
(()=>{
 const root=document.documentElement,key='portfolio-return-position',intent='portfolio-return-intent';
 const read=()=>{try{return JSON.parse(sessionStorage.getItem(key)||'null');}catch{return null;}};
 let saved=read(),returning=false;
 if(location.pathname==='/'){
  let requested=null;try{requested=sessionStorage.getItem(intent);sessionStorage.removeItem(intent);}catch{}
  if(requested?.startsWith('#'))saved={section:requested,y:0,cardTop:22,at:Date.now()};
  const historyReturn=performance.getEntriesByType('navigation')[0]?.type==='back_forward';
  returning=!!saved&&Date.now()-saved.at<1800000&&(requested==='1'||requested?.startsWith('#')||historyReturn);
  if(returning){
   root.dataset.returnSavedY=String(saved.y);root.dataset.returnSavedCardTop=String(saved.cardTop);root.classList.add('restoring-return','return-visit');root.dataset.returnPosition='preparing';history.scrollRestoration='manual';
   const style=document.createElement('style');style.textContent='@view-transition{navigation:none}html.restoring-return{scroll-behavior:auto!important;overflow-anchor:none}html.restoring-return body>header,html.restoring-return body>main{visibility:hidden!important}html.restoring-return .scene-start-stage{visibility:hidden}';document.head.append(style);
   const hash=location.hash;history.replaceState(history.state,'',location.pathname+location.search);
   const restore=async()=>{
    // Fonts and phone architecture summaries affect the card positions above the saved point.
    await document.fonts.ready;
    await new Promise(resolve=>{
     const prepared=()=>root.dataset.mobileComfortReady==='true'&&(!root.classList.contains('content-motion-trial')||root.dataset.contentMotionReady==='true');
     if(prepared()){resolve();return;}
     const observer=new MutationObserver(()=>{if(prepared()){observer.disconnect();resolve();}});observer.observe(root,{attributes:true,attributeFilter:['data-mobile-comfort-ready','data-content-motion-ready']});
     setTimeout(()=>{observer.disconnect();resolve();},1800);
    });
    await Promise.all([...document.querySelectorAll('link[rel=stylesheet]')].filter(link=>/content-motion-prototype/.test(link.href)&&!link.sheet).map(link=>new Promise(resolve=>{link.addEventListener('load',resolve,{once:true});link.addEventListener('error',resolve,{once:true});setTimeout(resolve,1800);})));
    const locate=()=>saved.section?document.getElementById(saved.section.slice(1)):[...document.querySelectorAll('a.project-page-link,a.program-page-link')].find(a=>new URL(a.href,location.href).pathname===saved.path)?.closest('article');
    const apply=()=>{const card=locate();const y=card?card.getBoundingClientRect().top+scrollY-saved.cardTop:saved.y;scrollTo({top:Math.max(0,y),behavior:'instant'});};
    apply();
    // Only prepare media in the restored viewport; keep off-screen covers lazy.
    const visible=el=>{const r=el.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight;};
    const frames=[...document.querySelectorAll('.animated-project-cover iframe')].filter(frame=>innerWidth>800&&visible(frame));
    await Promise.all(frames.map(frame=>new Promise(resolve=>{
     const loaded=()=>frame.contentDocument?.querySelector('svg');
     if(loaded()){resolve();return;}frame.loading='eager';
     const done=()=>{frame.removeEventListener('load',done);resolve();};frame.addEventListener('load',done,{once:true});setTimeout(done,2500);
    })));
    await Promise.all([...document.querySelectorAll('.boot-card img')].filter(visible).map(img=>img.decode().catch(()=>{})));
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));apply();
    history.replaceState(history.state,'',location.pathname+location.search+hash);root.dataset.returnPosition='restored';root.classList.remove('restoring-return');history.scrollRestoration='auto';
   };
   document.addEventListener('DOMContentLoaded',()=>restore().catch(()=>{root.classList.remove('restoring-return');history.scrollRestoration='auto';}),{once:true});
  }
 }
 document.addEventListener('click',event=>{
  const link=event.target.closest('a[href]');if(!link||event.button>0||event.metaKey||event.ctrlKey||event.altKey||event.shiftKey)return;
  const target=new URL(link.href,location.href);if(target.origin!==location.origin)return;
  try{
   if(location.pathname==='/'&&link.matches('.project-page-link,.program-page-link')){
    const card=link.closest('article');sessionStorage.setItem(key,JSON.stringify({path:target.pathname,y:scrollY,cardTop:card?.getBoundingClientRect().top||0,at:Date.now()}));
   }else if((location.pathname.startsWith('/projects/')||location.pathname.startsWith('/training/'))&&target.pathname==='/'&&['#projects','#bootcamps'].includes(target.hash)){
    sessionStorage.setItem(intent,read()?.path===location.pathname?'1':target.hash);
   }
  }catch{}
 },true);
 addEventListener('pageshow',event=>{if(event.persisted){root.classList.remove('restoring-return');root.dataset.returnPosition='history-restored';history.scrollRestoration='auto';}});
})();
