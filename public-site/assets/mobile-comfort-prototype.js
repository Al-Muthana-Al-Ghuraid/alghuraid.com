import {viewerLayout,zoomViewport} from './media-viewer-geometry.js?v=release-20261026-performance';
import {bindDialogHistory} from './dialog-history.js?v=release-20261026-performance';
// Local mobile comfort study: readable architecture groups + optional original full diagram.
const root=document.documentElement,ar=()=>root.lang==='ar';
const copy=(en,arabic)=>ar()?arabic:en;
function preferences(){
 if(document.body.classList.contains('detail-page')){
  const url=new URL(location.href);url.searchParams.set('lang',ar()?'ar':'en');if(root.dataset.theme)url.searchParams.set('theme',root.dataset.theme);history.replaceState(null,'',url.pathname+url.search+url.hash);
  document.querySelectorAll('.detail-return a').forEach(link=>{const target=new URL(link.href);target.searchParams.set('lang',ar()?'ar':'en');if(root.dataset.theme)target.searchParams.set('theme',root.dataset.theme);link.href=target.href;});
  const title=document.querySelector('main h1');if(title)document.title=title.textContent;
  const back=document.querySelector('#back')||document.querySelector('header>a');
  if(back)back.textContent=location.pathname.startsWith('/training/')?copy('← Back to programs','العودة إلى البرامج →'):copy('← Back to projects','العودة إلى المشاريع →');
 }
 
 document.querySelectorAll('figcaption').forEach(el=>{const pair={'Job Discovery / اكتشاف الوظائف':['Job Discovery','اكتشاف الوظائف'],'Lead Finder / البحث عن جهات التواصل':['Lead Finder','البحث عن جهات التواصل'],'Recruitment Email / البريد للتوظيف':['Recruitment Email','البريد للتوظيف']};const original=el.dataset.captionPair||el.textContent.trim();if(pair[original]){el.dataset.captionPair=original;el.textContent=copy(...pair[original]);}});
}
new MutationObserver(preferences).observe(root,{attributes:true,attributeFilter:['lang','data-theme']});preferences();
const blocks=[...document.querySelectorAll('.diagram-scroll')],covers=[...document.querySelectorAll('.animated-project-cover')],maps=[];
if(blocks.length||covers.length){
 const data=await fetch('/assets/mobile-architectures.json').then(r=>r.json());
 blocks.forEach(block=>{
  const frame=block.querySelector('iframe'),slug=(frame?.getAttribute('src')||frame?.dataset.deferredSrc)?.split('/').pop().split('.')[0],model=data[slug];if(!model)return;
  const mobile=document.createElement('div');mobile.className='mobile-architecture';block.after(mobile);block.classList.add('mobile-ready');maps.push({mobile,model,frame});
 });
 function renderMaps(){maps.forEach(({mobile,model,frame})=>{
  mobile.replaceChildren();const heading=document.createElement('p');heading.className='mobile-map-label';heading.textContent=copy('Architecture · mobile view','البنية · عرض الهاتف');mobile.append(heading);
  model.stages.forEach(stage=>{
   const section=document.createElement('section');section.className='mobile-map-stage';const title=document.createElement('h3');title.textContent=stage[ar()?'ar':'en'];section.append(title);
   const group=document.createElement('div');group.className='mobile-map-nodes';if(['User roles','Separate results','Two result branches','Booking result branches','Feature modules','Connected data and secrets','Connected storage','Two interfaces','Shared application features','Administration areas'].includes(stage.en))group.classList.add('parallel');
   stage.nodes.forEach(index=>{const node=model.nodes[index];if(!node)return;const card=document.createElement('div');card.className='mobile-map-node '+node.kind;const lines=node[ar()?'ar':'en'];const name=document.createElement('strong');name.textContent=lines[0];card.append(name);if(lines.length>1){const sub=document.createElement('p');sub.textContent=lines.slice(1).join(' · ');card.append(sub);}group.append(card);});
   section.append(group);mobile.append(section);
  });
  const open=document.createElement('button');open.type='button';open.className='mobile-map-open';open.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M9 15l6-6m-6 0h6v6"/></svg><span>'+copy('Open full architecture','فتح البنية الكاملة')+'</span>';open.addEventListener('click',()=>showMedia(frame.dataset.deferredSrc||frame.src,true,frame.title));mobile.append(open);
 });}
 const summaries={
 'n8n-job':[['Job boards','منصات الوظائف'],['Rules + AI when needed','قواعد وذكاء اصطناعي عند الحاجة'],['Matched / rejected jobs','وظائف مطابقة ومستبعدة']],
 'trackflow-system':[['Admin · instructors · students','الإدارة والمدربون والطلاب'],['React · FastAPI · JWT','React وFastAPI وJWT'],['Learning · booking · progress','التعلم والحجز والتقدم']],
 'rag-vm':[['Questions and PDF documents','أسئلة ومستندات PDF'],['Azure · FastAPI · ChromaDB','Azure وFastAPI وChromaDB'],['Retrieval and responses','الاسترجاع والإجابات']],
 'commerce-system':[['Shoppers and staff','المتسوقون والإدارة'],['Django · accounts · cart','Django والحسابات والسلة'],['Catalog and shared data','الكتالوج والبيانات المشتركة']]
 };
 function renderCovers(){covers.forEach(cover=>{const slug=(cover.querySelector('iframe')?.getAttribute('src')||cover.querySelector('iframe')?.dataset.deferredSrc)?.split('/').pop().split('.')[0],stages=summaries[slug];if(!stages)return;let preview=cover.querySelector('.mobile-project-preview');if(!preview){preview=document.createElement('div');preview.className='mobile-project-preview';cover.append(preview);}preview.replaceChildren();const title=document.createElement('span');title.className='mobile-preview-title';title.textContent=copy('Architecture overview','نظرة على البنية');preview.append(title);stages.forEach((pair,i)=>{const row=document.createElement('div');row.className='mobile-preview-row';const number=document.createElement('span');number.textContent=String(i+1).padStart(2,'0');number.setAttribute('aria-hidden','true');const label=document.createElement('strong');label.textContent=copy(...pair);row.append(number,label);preview.append(row);});});}
 renderCovers();new MutationObserver(renderCovers).observe(root,{attributes:true,attributeFilter:['lang']});
 renderMaps();new MutationObserver(renderMaps).observe(root,{attributes:true,attributeFilter:['lang']});
}
// Shared image/diagram viewer: centered controls, pointer pan and pinch zoom.
const viewer=document.createElement('dialog');viewer.className='architecture-viewer';viewer.innerHTML='<div class="viewer-toolbar"><strong class="viewer-title" id="architecture-viewer-title"></strong><div class="viewer-controls" role="group"><button type="button" data-action="minus">−</button><output class="viewer-scale">100%</output><button type="button" data-action="plus">+</button><button type="button" data-action="fit" class="viewer-fit"></button><button type="button" data-action="close">×</button></div></div><p class="viewer-help"></p><div class="viewer-pan" dir="ltr"><div class="viewer-surface"></div></div>';
document.body.append(viewer);viewer.setAttribute('aria-labelledby','architecture-viewer-title');let zoom=1,ratio=2,opener,lastMedia,gesture;
const pan=viewer.querySelector('.viewer-pan'),surface=viewer.querySelector('.viewer-surface'),pointers=new Map();
bindDialogHistory(viewer,()=>{if(lastMedia)showMedia(...lastMedia);});
function paintMedia(layout=viewerLayout(pan.clientWidth,pan.clientHeight,ratio,zoom)){
 const media=surface.firstElementChild;if(!media)return;surface.style.width=layout.surfaceWidth+'px';surface.style.height=layout.surfaceHeight+'px';Object.assign(media.style,{width:layout.width+'px',height:layout.height+'px',left:layout.left+'px',top:layout.top+'px'});
 viewer.querySelector('.viewer-scale').textContent=Math.round(zoom*100)+'%';viewer.querySelector('[data-action="minus"]').disabled=zoom<=1;viewer.querySelector('[data-action="plus"]').disabled=zoom>=4;pan.classList.toggle('is-zoomed',zoom>1);
}
function zoomAt(next,from={x:pan.clientWidth/2,y:pan.clientHeight/2},to=from){
 const result=zoomViewport({width:pan.clientWidth,height:pan.clientHeight,ratio,zoom,scrollX:pan.scrollLeft,scrollY:pan.scrollTop},next,from,to);zoom=result.zoom;paintMedia(result);pan.scrollTo(result.scrollX,result.scrollY);
}
function showMedia(src,diagram,title){
 lastMedia=[src,diagram,title];opener=document.activeElement;viewer.querySelector('.viewer-title').textContent=title?.split(' / ')[ar()?1:0]||title||copy('Project image','صورة المشروع');
 viewer.querySelector('.viewer-help').textContent=copy('Pinch to zoom. Drag to move.','قرّب بإصبعين للتكبير، واسحب للتحريك.');viewer.querySelector('.viewer-controls').setAttribute('aria-label',copy('Image controls','أدوات الصورة'));viewer.querySelector('.viewer-scale').setAttribute('aria-label',copy('Zoom level','مستوى التكبير'));
 for(const [action,en,arabic] of [['minus','Zoom out','تصغير'],['plus','Zoom in','تكبير'],['fit','Fit image','ملاءمة الصورة'],['close','Close viewer','إغلاق العارض']])viewer.querySelector('[data-action="'+action+'"]').setAttribute('aria-label',copy(en,arabic));
 viewer.querySelector('.viewer-fit').textContent=copy('Fit','ملاءمة');surface.replaceChildren();zoom=1;ratio=2;pointers.clear();gesture=null;
 const media=document.createElement(diagram?'iframe':'img');media.setAttribute(diagram?'title':'alt',title||copy('Architecture','البنية'));if(!diagram){media.draggable=false;media.addEventListener('load',()=>{if(surface.firstElementChild!==media)return;if(media.naturalWidth&&media.naturalHeight)ratio=media.naturalWidth/media.naturalHeight;zoom=1;paintMedia();pan.scrollTo(0,0);},{once:true});}
 surface.append(media);media.src=src;if(!viewer.open)viewer.showModal();paintMedia();pan.scrollTo(0,0);
}
viewer.addEventListener('click',event=>{const action=event.target.closest('[data-action]')?.dataset.action;if(action==='close')viewer.close();else if(action==='fit')zoomAt(1);else if(action==='plus'||action==='minus')zoomAt(zoom+(action==='plus'?.5:-.5));if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
function gestureState(){const values=[...pointers.values()],r=pan.getBoundingClientRect();if(!values.length)return null;if(values.length===1)return {x:values[0].x-r.left,y:values[0].y-r.top,distance:0};const [a,b]=values;return {x:(a.x+b.x)/2-r.left,y:(a.y+b.y)/2-r.top,distance:Math.hypot(a.x-b.x,a.y-b.y)};}
pan.addEventListener('pointerdown',event=>{if(event.pointerType==='mouse'&&event.button!==0)return;pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});pan.setPointerCapture(event.pointerId);gesture=gestureState();pan.classList.add('is-dragging');});
pan.addEventListener('pointermove',event=>{if(!pointers.has(event.pointerId))return;event.preventDefault();pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});const next=gestureState();if(gesture&&next){if(pointers.size>=2&&gesture.distance>0&&next.distance>0)zoomAt(zoom*next.distance/gesture.distance,gesture,next);else pan.scrollBy(gesture.x-next.x,gesture.y-next.y);}gesture=next;});
for(const type of ['pointerup','pointercancel','lostpointercapture'])pan.addEventListener(type,event=>{pointers.delete(event.pointerId);gesture=gestureState();if(!pointers.size)pan.classList.remove('is-dragging');});
pan.addEventListener('dblclick',event=>{const r=pan.getBoundingClientRect();zoomAt(zoom>1?1:2,{x:event.clientX-r.left,y:event.clientY-r.top});});
pan.addEventListener('wheel',event=>{if(!event.ctrlKey&&!event.metaKey)return;event.preventDefault();const r=pan.getBoundingClientRect();zoomAt(zoom*Math.exp(-event.deltaY/300),{x:event.clientX-r.left,y:event.clientY-r.top});},{passive:false});
addEventListener('resize',()=>{if(viewer.open)paintMedia();});
viewer.addEventListener('close',()=>{surface.replaceChildren();pointers.clear();gesture=null;opener?.focus();});
document.querySelectorAll('.diagram-tools a').forEach(a=>a.addEventListener('click',event=>{event.preventDefault();event.stopImmediatePropagation();showMedia(a.href,true,a.closest('.diagram-scroll')?.querySelector('iframe')?.title||copy('Full architecture','البنية الكاملة'));}));
document.querySelectorAll('main figure img').forEach(img=>{img.tabIndex=0;img.setAttribute('role','button');const label=()=>{img.setAttribute('aria-label',copy('Enlarge image: ','تكبير الصورة: ')+(img.alt||''));img.closest('figure')?.setAttribute('data-enlarge',copy('Tap image to enlarge ↗','اضغط على الصورة للتكبير ↗'));};label();new MutationObserver(label).observe(root,{attributes:true,attributeFilter:['lang']});const open=()=>showMedia(img.src,false,img.alt);img.addEventListener('click',open);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});

if(document.body.classList.contains('detail-page')){
 const back=document.querySelector('#back')||document.querySelector('header>a');
 if(back){const footer=document.createElement('footer');footer.className='detail-return';const link=document.createElement('a');link.href=back.href;const training=location.pathname.startsWith('/training/');link.dataset.copyEn=training?'← Back to programs':'← Back to projects';link.dataset.copyAr=training?'العودة إلى البرامج →':'العودة إلى المشاريع →';link.textContent=ar()?link.dataset.copyAr:link.dataset.copyEn;footer.append(link);document.querySelector('main').append(footer);preferences();}
}


root.dataset.mobileComfortReady='true';
