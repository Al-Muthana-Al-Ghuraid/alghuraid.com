// Apply the visitor's existing theme before content paints, including nested media.
(()=>{
 const root=document.documentElement,valid=value=>value==='day'||value==='night';
 let parentRoot,observer,parentWindow;
 const cleanup=()=>{observer?.disconnect();try{parentWindow?.removeEventListener('pagehide',cleanup);}catch{}};
 try{if(parent!==window){const candidate=parent.document.documentElement;if(candidate?.nodeType===1&&candidate.isConnected){parentRoot=candidate;parentWindow=parent;}}}catch{}
 const query=new URLSearchParams(location.search).get('theme');let saved;
 try{saved=localStorage.getItem('portfolio-theme');}catch{}
 const inherited=parentRoot?.dataset.theme;
 root.dataset.theme=valid(inherited)?inherited:valid(query)?query:valid(saved)?saved:'day';
 if(parentRoot){
  const sync=()=>{if(!parentRoot.isConnected){cleanup();return;}const theme=parentRoot.dataset.theme;if(valid(theme)&&root.dataset.theme!==theme)root.dataset.theme=theme;};
  try{observer=new MutationObserver(sync);observer.observe(parentRoot,{attributes:true,attributeFilter:['data-theme']});parentWindow.addEventListener('pagehide',cleanup,{once:true});}catch{cleanup();}
 }
 addEventListener('pagehide',cleanup,{once:true});
})();
