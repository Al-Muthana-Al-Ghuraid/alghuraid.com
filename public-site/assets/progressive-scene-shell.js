// Local progressive scene trial: select poster before rendering the page.
(()=>{const root=document.documentElement,query=new URLSearchParams(location.search);let stored;try{stored=localStorage.getItem('portfolio-theme');}catch{}
 const theme=['day','night'].includes(query.get('theme'))?query.get('theme'):(stored==='night'?'night':'day');root.dataset.theme=theme;
 try{localStorage.setItem('portfolio-theme',theme);}catch{}
 new MutationObserver(()=>{try{localStorage.setItem('portfolio-theme',root.dataset.theme);}catch{}const url=new URL(location.href);url.searchParams.set('theme',root.dataset.theme);history.replaceState(null,'',url.pathname+url.search+url.hash);}).observe(root,{attributes:true,attributeFilter:['data-theme']});
 if(location.pathname!=='/')return;
 root.classList.add('progressive-scene-trial');if(query.has('poster-capture'))root.classList.add('poster-capture');
 const link=new Image();link.fetchPriority='high';link.decoding='async';link.src='/assets/scene-start-'+theme+(innerWidth<=700?'-phone':'-desktop')+'.webp';window.portfolioStartPoster=link;
 link.className='scene-start-poster';link.alt='';link.setAttribute('aria-hidden','true');
 const mount=()=>{if(!link.isConnected)document.querySelector('.world')?.append(link);};
 document.readyState==='loading'?document.addEventListener('DOMContentLoaded',mount,{once:true}):mount();
})();
