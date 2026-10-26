// Mount nearby diagrams; pause their CSS/SMIL animation when outside the viewport.
const frames=new Set();
function pause(frame,offscreen){
 offscreen=offscreen||document.documentElement.classList.contains('has-persistent-detail');
 try{
  const doc=frame.contentDocument;if(!doc?.documentElement)return;
  if(!doc.getElementById('diagram-visibility-style')){
   const style=doc.createElement('style');style.id='diagram-visibility-style';
   style.textContent='html[data-diagram-paused] *,html[data-diagram-paused] *::before,html[data-diagram-paused] *::after{animation-play-state:paused!important}';doc.head.append(style);
  }
  doc.documentElement.toggleAttribute('data-diagram-paused',offscreen);
  doc.querySelectorAll('svg').forEach(svg=>{offscreen?svg.pauseAnimations?.():svg.unpauseAnimations?.();});
 }catch{/* Only same-origin diagrams participate. */}
}
function mount(frame){if(frame.dataset.deferredSrc&&!frame.hasAttribute('src'))frame.src=frame.dataset.deferredSrc;}
const visible=new WeakMap();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
 visible.set(entry.target,entry.isIntersecting);if(entry.isIntersecting)mount(entry.target);
 pause(entry.target,document.hidden||!entry.isIntersecting);
}));
const nearby=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){mount(entry.target);nearby.unobserve(entry.target);}}),{rootMargin:'250px'});
function scan(){document.querySelectorAll('iframe[src*="/diagrams/"],iframe[data-deferred-src]').forEach(frame=>{
 if(frames.has(frame))return;frames.add(frame);visible.set(frame,false);
 frame.addEventListener('load',()=>pause(frame,document.hidden||!visible.get(frame)));
 observer.observe(frame);nearby.observe(frame);
});for(const frame of frames)if(!frame.isConnected){observer.unobserve(frame);nearby.unobserve(frame);frames.delete(frame);}}
new MutationObserver(records=>{
 const changed=records.some(record=>[...record.addedNodes,...record.removedNodes].some(node=>node.nodeType===1&&(node.tagName==='IFRAME'||node.querySelector('iframe'))));
 if(changed)scan();
}).observe(document.body,{childList:true,subtree:true});
document.addEventListener('visibilitychange',()=>frames.forEach(frame=>pause(frame,document.hidden||!visible.get(frame))));
new MutationObserver(()=>frames.forEach(frame=>pause(frame,document.hidden||!visible.get(frame)))).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
scan();
