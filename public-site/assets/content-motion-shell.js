// Early opt-in shell for the local cross-page transition trial.
if(new URLSearchParams(location.search).get('motion')==='studio'){
 document.documentElement.classList.add('content-motion-trial');
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/content-motion-prototype.css?v=1';document.head.append(css);
 const incoming=()=>{if(!location.pathname.startsWith('/projects/'))return;const title=document.querySelector('main h1'),cover=document.querySelector('main .diagram-scroll');if(title)title.style.viewTransitionName='project-title';if(cover)cover.style.viewTransitionName='project-cover';};
 addEventListener('pagereveal',event=>{incoming();if(event.viewTransition){document.documentElement.dataset.projectTransition='starting';event.viewTransition.ready.then(()=>document.documentElement.dataset.projectTransition='ready').catch(()=>document.documentElement.dataset.projectTransition='fallback');}});document.addEventListener('DOMContentLoaded',incoming);
 document.addEventListener('click',event=>{const a=event.target.closest('a[href]');if(!a||a.download||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button>0)return;const u=new URL(a.href,location.href);if(u.origin!==location.origin||/\.(pdf|png|jpg|svg|webp)$/i.test(u.pathname))return;u.searchParams.set('motion','studio');a.href=u.pathname+u.search+u.hash;
  const card=a.closest('.readable-project');if(card){document.querySelectorAll('[style*="view-transition-name"]').forEach(n=>n.style.viewTransitionName='none');const title=card.querySelector('h3'),cover=card.querySelector('.animated-project-cover');if(title)title.style.viewTransitionName='project-title';if(cover)cover.style.viewTransitionName='project-cover';sessionStorage.setItem('portfolio-motion-arrival',String(Date.now()));}
 },true);
 addEventListener('pageshow',()=>{if(!location.pathname.startsWith('/projects/'))document.querySelectorAll('[style*="view-transition-name"]').forEach(n=>n.style.viewTransitionName='none');});
}

