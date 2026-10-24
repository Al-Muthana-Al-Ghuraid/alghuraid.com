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
  const frame=block.querySelector('iframe'),slug=frame?.getAttribute('src')?.split('/').pop().split('.')[0],model=data[slug];if(!model)return;
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
  const open=document.createElement('button');open.type='button';open.className='mobile-map-open';open.textContent=copy('Open full architecture ↗','فتح البنية الكاملة ↗');open.addEventListener('click',()=>showMedia(frame.src,true,frame.title));mobile.append(open);
 });}
 const summaries={
 'n8n-job':[['Job boards','منصات الوظائف'],['Rules + AI when needed','قواعد وذكاء اصطناعي عند الحاجة'],['Matched / rejected jobs','وظائف مطابقة ومستبعدة']],
 'trackflow-system':[['Admin · instructors · students','الإدارة والمدربون والطلاب'],['React · FastAPI · JWT','React وFastAPI وJWT'],['Learning · booking · progress','التعلم والحجز والتقدم']],
 'rag-vm':[['Questions and PDF documents','أسئلة ومستندات PDF'],['Azure · FastAPI · ChromaDB','Azure وFastAPI وChromaDB'],['Retrieval and responses','الاسترجاع والإجابات']],
 'commerce-system':[['Shoppers and staff','المتسوقون والإدارة'],['Django · accounts · cart','Django والحسابات والسلة'],['Catalog and shared data','الكتالوج والبيانات المشتركة']]
 };
 function renderCovers(){covers.forEach(cover=>{const slug=cover.querySelector('iframe')?.getAttribute('src')?.split('/').pop().split('.')[0],stages=summaries[slug];if(!stages)return;let preview=cover.querySelector('.mobile-project-preview');if(!preview){preview=document.createElement('div');preview.className='mobile-project-preview';cover.append(preview);}preview.replaceChildren();const title=document.createElement('span');title.className='mobile-preview-title';title.textContent=copy('Architecture overview','نظرة على البنية');preview.append(title);stages.forEach((pair,i)=>{const row=document.createElement('div');row.className='mobile-preview-row';const number=document.createElement('span');number.textContent=String(i+1).padStart(2,'0');number.setAttribute('aria-hidden','true');const label=document.createElement('strong');label.textContent=copy(...pair);row.append(number,label);preview.append(row);});});}
 renderCovers();new MutationObserver(renderCovers).observe(root,{attributes:true,attributeFilter:['lang']});
 renderMaps();new MutationObserver(renderMaps).observe(root,{attributes:true,attributeFilter:['lang']});
}
// A native dialog gives keyboard dismissal/focus containment and a larger inspection surface.
const viewer=document.createElement('dialog');viewer.className='architecture-viewer';viewer.innerHTML='<div class="viewer-toolbar"><strong class="viewer-title"></strong><div><button type="button" data-action="minus">−</button><button type="button" data-action="plus">+</button><button type="button" data-action="close">×</button></div></div><p class="viewer-help"></p><div class="viewer-pan" dir="ltr"></div>';
document.body.append(viewer);let zoom=1,baseWidth=0,opener;
function resizeMedia(){const media=viewer.querySelector('.viewer-pan').firstElementChild;if(!media)return;media.style.width=Math.round(baseWidth*zoom)+'px';if(media.tagName==='IFRAME')media.style.height=Math.round(baseWidth*zoom/2)+'px';}
function showMedia(src,diagram,title){
 opener=document.activeElement;viewer.querySelector('.viewer-title').textContent=title?.split(' / ')[ar()?1:0]||title||copy('Project image','صورة المشروع');
 viewer.querySelector('.viewer-help').textContent=copy('Use + to enlarge. Swipe to move around the image.','استخدم + للتكبير، ثم اسحب لاستكشاف الصورة.');
 viewer.querySelector('[data-action="minus"]').setAttribute('aria-label',copy('Zoom out','تصغير'));viewer.querySelector('[data-action="plus"]').setAttribute('aria-label',copy('Zoom in','تكبير'));viewer.querySelector('[data-action="close"]').setAttribute('aria-label',copy('Close viewer','إغلاق العارض'));
 const pan=viewer.querySelector('.viewer-pan');pan.replaceChildren();const media=document.createElement(diagram?'iframe':'img');media.src=src;media.setAttribute(diagram?'title':'alt',title||copy('Architecture','البنية'));pan.append(media);zoom=1;viewer.showModal();baseWidth=pan.clientWidth;resizeMedia();pan.scrollTo(0,0);
}
viewer.addEventListener('click',event=>{const action=event.target.closest('[data-action]')?.dataset.action;if(action==='close')viewer.close();if(action==='plus'||action==='minus'){zoom=Math.min(4,Math.max(1,zoom+(action==='plus' ? 0.5 : -0.5)));resizeMedia();}if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
viewer.addEventListener('close',()=>{viewer.querySelector('.viewer-pan').replaceChildren();opener?.focus();});
document.querySelectorAll('.diagram-tools a').forEach(a=>a.addEventListener('click',event=>{event.preventDefault();event.stopImmediatePropagation();showMedia(a.href,true,a.closest('.diagram-scroll')?.querySelector('iframe')?.title||copy('Full architecture','البنية الكاملة'));}));
document.querySelectorAll('main figure img').forEach(img=>{img.tabIndex=0;img.setAttribute('role','button');const label=()=>{img.setAttribute('aria-label',copy('Enlarge image: ','تكبير الصورة: ')+(img.alt||''));img.closest('figure')?.setAttribute('data-enlarge',copy('Tap image to enlarge ↗','اضغط على الصورة للتكبير ↗'));};label();new MutationObserver(label).observe(root,{attributes:true,attributeFilter:['lang']});const open=()=>showMedia(img.src,false,img.alt);img.addEventListener('click',open);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});

if(document.body.classList.contains('detail-page')){
 const back=document.querySelector('#back')||document.querySelector('header>a');
 if(back){const footer=document.createElement('footer');footer.className='detail-return';const link=document.createElement('a');link.href=back.href;const training=location.pathname.startsWith('/training/');link.dataset.copyEn=training?'← Back to programs':'← Back to projects';link.dataset.copyAr=training?'العودة إلى البرامج →':'العودة إلى المشاريع →';link.textContent=ar()?link.dataset.copyAr:link.dataset.copyEn;footer.append(link);document.querySelector('main').append(footer);preferences();}
}


root.dataset.mobileComfortReady='true';
