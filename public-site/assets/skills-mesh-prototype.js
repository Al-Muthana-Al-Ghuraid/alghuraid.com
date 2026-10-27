// Local skills-mesh trial. Existing factual labels stay in their four groups.
const section=document.querySelector('#skills');
if(section){
 const catalog=await fetch('/assets/translations.json').then(r=>r.json()),ar=()=>document.documentElement.lang==='ar';
 const keys=['Microsoft Azure','Oracle Cloud','Terraform','Docker','Linux','Key Vault','GitHub Actions','Cloudflare Zero Trust','Python','JavaScript','React','FastAPI','Django','Streamlit','JWT','Bootstrap','SQL','PostgreSQL','Cosmos DB','SQLAlchemy','RAG','OpenAI API','n8n','Project planning','Risk registers','Stakeholders','Team coordination','Scrum','Kanban','Communication'];
 const projects=[
 {en:'Azure RAG Chatbot',ar:'روبوت محادثة RAG على Azure',href:'/projects/rag-chatbot/',skills:['Microsoft Azure','Terraform','Docker','Linux','Key Vault','GitHub Actions','Python','FastAPI','Streamlit','PostgreSQL','Cosmos DB','RAG']},
 {en:'TrackFlow',ar:'TrackFlow',href:'/projects/trackflow/',skills:['Python','JavaScript','React','FastAPI','JWT','Bootstrap','SQLAlchemy','SQL','Team coordination']},
 {en:'Django E-commerce',ar:'متجر Django الإلكتروني',href:'/projects/django-ecommerce/',skills:['Python','Django','Bootstrap','SQL']},
 {en:'Job-search Automation',ar:'أتمتة البحث عن وظائف',href:'/projects/n8n-automation/',skills:['Oracle Cloud','Docker','Linux','Cloudflare Zero Trust','OpenAI API','n8n']}
 ];
 const professional=['Project planning','Risk registers','Stakeholders','Team coordination','Scrum','Kanban','Communication'];
 const groups=[keys.slice(0,8),keys.slice(8,16),keys.slice(16,23),keys.slice(23)];
 const grid=section.querySelector('.readable-skills'),layout=document.createElement('div');layout.className='skills-mesh-layout';grid.before(layout);layout.append(grid);
 const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/skills-mesh-prototype.css?v=release-20261027-slate-cobalt';document.head.append(css);
 const panel=document.createElement('aside');panel.className='skills-mesh-panel';panel.innerHTML='<p class="mesh-eyebrow"></p><h3 class="mesh-title"></h3><p class="mesh-help"></p><div class="mesh-stage"><svg aria-hidden="true" viewBox="0 0 500 340" preserveAspectRatio="none"></svg><div class="mesh-nodes"></div></div><div class="mesh-evidence" aria-live="polite"></div><p class="mesh-prototype-note"></p>';layout.append(panel);
 const instruction=document.createElement('p');instruction.className='mesh-instruction';section.querySelector('h2').after(instruction);
 const buttons=[];let selected='Python';
 grid.querySelectorAll('.tags span').forEach((span,i)=>{const key=keys[i];if(!key)return;const b=document.createElement('button');b.type='button';b.className='mesh-skill';b.dataset.skill=key;b.textContent=span.textContent;b.addEventListener('click',()=>{selected=key;render();});span.replaceWith(b);buttons.push(b);});
 const text=(en,arabic)=>ar()?arabic:en,label=key=>ar()?(catalog[key]||key):key;
 function render(){
  instruction.textContent=text('Select a skill to explore its connections and related work.','اختر مهارة لاستكشاف ارتباطاتها والأعمال المرتبطة بها.');
  const matches=projects.filter(p=>p.skills.includes(selected));
  let related=[...new Set(matches.flatMap(p=>p.skills))].filter(k=>k!==selected);
  const own=groups.find(g=>g.includes(selected))||[];
  related.sort((a,b)=>(own.includes(b)?1:0)-(own.includes(a)?1:0));
  if(!matches.length||professional.includes(selected))related=own.filter(k=>k!==selected);
  const preferred={Python:['FastAPI','Django','SQLAlchemy','React','Streamlit'],'Microsoft Azure':['Terraform','Docker','Key Vault','GitHub Actions','Linux'],n8n:['Oracle Cloud','OpenAI API','Docker','Cloudflare Zero Trust','Linux']};if(preferred[selected])related=[...preferred[selected].filter(k=>related.includes(k)),...related.filter(k=>!preferred[selected].includes(k))];related=related.slice(0,5);
  buttons.forEach(b=>{b.textContent=label(b.dataset.skill);b.setAttribute('aria-pressed',String(b.dataset.skill===selected));b.classList.toggle('mesh-related',related.includes(b.dataset.skill));});
  panel.querySelector('.mesh-eyebrow').textContent=text('CONNECTED SKILLS','مهارات مترابطة');panel.querySelector('.mesh-title').textContent=label(selected);panel.querySelector('.mesh-help').textContent=text('Follow a connection. Select any node to explore further.','تتبّع الارتباطات. اختر أي نقطة لمواصلة الاستكشاف.');
  panel.querySelector('.mesh-prototype-note').textContent=text('Local design trial · Connections show shared project use or a related skill group.','تجربة تصميم محلية · توضح الروابط الاستخدام في مشروع مشترك أو مجموعة مهارات مترابطة.');
  const svg=panel.querySelector('svg'),nodes=panel.querySelector('.mesh-nodes');svg.replaceChildren();nodes.replaceChildren();
  const positions=[{x:250,y:170},...related.map((_,i)=>{const angle=(-90+i*360/related.length)*Math.PI/180;return{x:250+Math.cos(angle)*173,y:170+Math.sin(angle)*125};})];
  related.forEach((key,i)=>{const end=positions[i+1],path=document.createElementNS('http://www.w3.org/2000/svg','path');const d=`M250 170 Q${(250+end.x)/2+28} ${(170+end.y)/2-20} ${end.x} ${end.y}`;path.setAttribute('d',d);path.classList.add('mesh-connection');path.style.animationDelay=i*65+'ms';svg.append(path);
   const pulse=document.createElementNS(svg.namespaceURI,'circle');pulse.setAttribute('r',3);pulse.classList.add('mesh-pulse');const motion=document.createElementNS(svg.namespaceURI,'animateMotion');motion.setAttribute('path',d);motion.setAttribute('dur','1.1s');motion.setAttribute('begin','indefinite');motion.setAttribute('repeatCount','1');motion.setAttribute('fill','freeze');pulse.append(motion);svg.append(pulse);motion.beginElement();
  });
  [selected,...related].forEach((key,i)=>{const b=document.createElement('button');b.type='button';b.className=i?'mesh-node':'mesh-node mesh-centre';b.textContent=label(key);b.style.left=positions[i].x/5+'%';b.style.top=positions[i].y/3.4+'%';b.addEventListener('click',()=>{if(key!==selected){selected=key;render();panel.querySelector('.mesh-centre').focus();}});nodes.append(b);});
  const evidence=panel.querySelector('.mesh-evidence');evidence.replaceChildren();const heading=document.createElement('h4');heading.textContent=text(matches.length?'Used in':'Related qualification',matches.length?'استُخدمت في':'شهادات ذات صلة');evidence.append(heading);
  if(matches.length)for(const project of matches){const a=document.createElement('a');a.href=project.href+'?lang='+(ar()?'ar':'en');a.textContent=(ar()?project.ar:project.en)+' ↗';evidence.append(a);}
  else{const a=document.createElement('a');a.href='#certifications';a.textContent=text('PMP · PMI-RMP — view certifications ↗','PMP · PMI-RMP — استعرض الشهادات ↖');evidence.append(a);}
 }
 new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});render();
}

