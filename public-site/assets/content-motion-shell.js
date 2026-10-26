// Early opt-in shell for the local cross-page transition trial.
if(location.pathname==='/' && new URLSearchParams(location.search).get('motion')!=='off'){
 document.documentElement.classList.add('content-motion-trial');// Detail backgrounds render directly; no scene screenshot bridge.
 document.addEventListener('DOMContentLoaded',()=>{const label=document.querySelector('#quick-overview-open [data-copy-en]');if(label){label.dataset.copyEn='Quick view';label.dataset.copyAr='نظرة سريعة';label.textContent=document.documentElement.lang==='ar'?label.dataset.copyAr:label.dataset.copyEn;}});
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/content-motion-prototype.css?v=release-20261026-performance';document.head.append(css);
 const incoming=()=>{if(!location.pathname.startsWith('/projects/'))return;const cover=document.querySelector('main .diagram-scroll');if(cover)cover.style.viewTransitionName='none';};
 addEventListener('pagereveal',event=>{incoming();if(event.viewTransition){document.documentElement.dataset.projectTransition='starting';event.viewTransition.ready.then(()=>document.documentElement.dataset.projectTransition='ready').catch(()=>document.documentElement.dataset.projectTransition='fallback');}});document.addEventListener('DOMContentLoaded',incoming);
 document.addEventListener('click',event=>{const a=event.target.closest('a[href]');if(!a||a.download||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button>0)return;const u=new URL(a.href,location.href);if(u.origin!==location.origin||/\.(pdf|png|jpg|svg|webp)$/i.test(u.pathname))return;u.searchParams.set('motion','studio');u.searchParams.set('trial','editorial-1');a.href=u.pathname+u.search+u.hash;if(u.pathname==='/'&&location.pathname.startsWith('/projects/'))sessionStorage.setItem('portfolio-motion-arrival',String(Date.now()));
  const card=a.closest('.readable-project');if(card){document.querySelectorAll('[style*="view-transition-name"]').forEach(n=>n.style.viewTransitionName='none');const title=card.querySelector('h3'),cover=card.querySelector('.animated-project-cover');if(cover)cover.style.viewTransitionName='none';sessionStorage.setItem('portfolio-motion-arrival',String(Date.now()));}
 },true);
 addEventListener('pageshow',()=>{if(!location.pathname.startsWith('/projects/'))document.querySelectorAll('[style*="view-transition-name"]').forEach(n=>n.style.viewTransitionName='none');});
}


