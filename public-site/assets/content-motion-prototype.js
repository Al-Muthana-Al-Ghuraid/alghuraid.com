import {catalogReady} from './translation-catalog.js?v=release-20261026-performance';
import {skillIcon} from './skill-icons-prototype.js?v=release-20261026-performance';
// Opt-in motion study: no generated mesh or extra skills panel.
const section=document.querySelector('#skills'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(section){
 const catalog=await catalogReady;
 const keys=['Microsoft Azure','Oracle Cloud','Terraform','Docker','Linux','Key Vault','GitHub Actions','Cloudflare Zero Trust','Python','JavaScript','React','FastAPI','Django','Streamlit','JWT','Bootstrap','SQL','PostgreSQL','Cosmos DB','SQLAlchemy','RAG','OpenAI API','n8n','Project planning','Risk registers','Stakeholders','Team coordination','Scrum','Kanban','Communication'];
 const stacks=[['Microsoft Azure','Terraform','Docker','Linux','Key Vault','GitHub Actions','Python','FastAPI','Streamlit','PostgreSQL','Cosmos DB','RAG'],['Python','JavaScript','React','FastAPI','JWT','Bootstrap','SQLAlchemy','SQL','Team coordination'],['Python','Django','Bootstrap','SQL'],['Oracle Cloud','Docker','Linux','Cloudflare Zero Trust','OpenAI API','n8n']];
 const preferred={Python:['Django','FastAPI','SQLAlchemy','React','Streamlit'],'Microsoft Azure':['Terraform','Docker','Key Vault','GitHub Actions','Linux']};
 const cards=[...section.querySelectorAll('.readable-skills article')],buttons=[];let selected=null;
 const hint=document.createElement('p');hint.className='skill-motion-hint';section.querySelector('h2').after(hint);
 const icons=[
 '<path d="M18 31 C7 29 9 13 21 14 C26 2 44 5 47 17 C60 15 63 31 50 32"/><rect x="16" y="38" width="38" height="21" rx="4"/><path d="M21 44 H42 M21 51 H42"/><circle class="art-packet" cx="49" cy="45" r="2"/><path class="art-signal" d="M35 33 V38"/>',
 '<rect x="7" y="10" width="57" height="45" rx="5"/><path d="M7 21 H64"/><path class="art-bracket art-bracket-left" d="M25 30 L19 37 L25 44"/><path class="art-bracket art-bracket-right" d="M45 30 L51 37 L45 44"/><path class="art-typing" d="M14 16 H20 M25 16 H31 M36 16 H42"/><path class="art-code" d="M39 28 L32 47"/>',
 '<path d="M9 18 H24 Q35 18 35 36 H63 M9 36 H63 M9 54 H24 Q35 54 35 36" opacity=".5"/><rect x="58" y="28" width="10" height="16" rx="3"/><circle class="packet-stream packet-top" cx="9" cy="18" r="2.8"/><circle class="packet-stream packet-mid" cx="9" cy="36" r="2.8"/><circle class="packet-stream packet-low" cx="9" cy="54" r="2.8"/>',
 '<rect x="10" y="9" width="51" height="51" rx="5"/><path d="M26 9 V60 M44 9 V60" opacity=".4"/><rect class="art-task art-task-a" x="14" y="17" width="8" height="10" rx="2"/><rect class="art-task art-task-b" x="30" y="33" width="10" height="10" rx="2"/><path class="art-check" d="M48 23 L52 27 L58 18"/>'
 ];
 function play(card){card.classList.remove('skill-art-playing');requestAnimationFrame(()=>{card.classList.add('skill-art-playing');setTimeout(()=>card.classList.remove('skill-art-playing'),1600);});}
 cards.forEach((card,i)=>{const art=document.createElement('div');art.className='skill-group-art';art.setAttribute('aria-hidden','true');art.innerHTML='<svg viewBox="0 0 72 72">'+icons[i]+'</svg>';card.prepend(art);card.addEventListener('pointerenter',()=>play(card));card.addEventListener('focusin',()=>play(card));});
 section.querySelectorAll('.readable-skills .tags span').forEach((span,i)=>{const b=document.createElement('button');b.type='button';b.className='skill-inline-choice';b.dataset.skill=keys[i];b.textContent=span.textContent;b.addEventListener('click',()=>{selected=selected===keys[i]?null:keys[i];update();});span.replaceWith(b);buttons.push(b);});
 function update(){const ar=document.documentElement.lang==='ar';let related=selected?[...new Set(stacks.filter(s=>s.includes(selected)).flat())].filter(k=>k!==selected):[];if(preferred[selected])related=preferred[selected];if(selected&&keys.indexOf(selected)>=23)related=keys.slice(23).filter(k=>k!==selected);related=related.slice(0,7);buttons.forEach(b=>{const label=document.createElement('span');label.className='skill-tag-label';label.textContent=ar?(catalog[b.dataset.skill]||b.dataset.skill):b.dataset.skill;b.replaceChildren(skillIcon(b.dataset.skill),label);b.classList.toggle('is-related',related.includes(b.dataset.skill));b.setAttribute('aria-pressed',String(selected===b.dataset.skill));});hint.textContent=ar?'اختر مهارة لإبراز الأدوات المرتبطة بها. اخترها مرة أخرى لإلغاء التحديد.':'Select a skill to highlight related tools. Select it again to clear.';}
 new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});update();
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{e.target.classList.toggle('skill-art-visible',e.isIntersecting);}),{threshold:.35});cards.forEach(c=>observer.observe(c));
}
// Draw the actual cover diagrams, rather than adding another decorative layer.
const covers=[...document.querySelectorAll('.animated-project-cover')];
const coverObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.dataset.entered='true';activateCover(e.target);coverObserver.unobserve(e.target);}}),{threshold:.25});
const returnVisit=document.documentElement.classList.contains('return-visit');
function activateCover(cover){if(document.body.classList.contains('page-loading')||!cover.dataset.prepared||cover.dataset.activated)return;cover.dataset.activated='true';if(!returnVisit)cover.classList.add('cover-arrived');const doc=cover.querySelector('iframe')?.contentDocument;if(doc&&!reduced.matches&&!returnVisit)requestAnimationFrame(()=>doc.body.classList.add('cover-entered'));}
function prepareCover(cover){const frame=cover.querySelector('iframe'),doc=frame?.contentDocument;if(!doc?.querySelector('svg'))return;cover.dataset.prepared='true';
 if(!doc.getElementById('cover-motion-style')){const style=doc.createElement('style');style.id='cover-motion-style';style.textContent='.cover-pending .wire{stroke-dasharray:var(--wire-length);stroke-dashoffset:var(--wire-length)}.cover-pending .node{opacity:0}.cover-pending .pulse{opacity:0}.cover-entered .wire{animation:cover-wire .7s ease forwards}.cover-entered .node{animation:cover-node .5s ease both;animation-delay:calc(.25s + var(--node-order)*.035s)}.cover-entered .pulse{opacity:1;transition:opacity .3s .9s}@keyframes cover-wire{to{stroke-dashoffset:0}}@keyframes cover-node{from{opacity:0;translate:0 7px}to{opacity:1;translate:0 0}}@media(prefers-reduced-motion:reduce){.cover-pending .wire{stroke-dashoffset:0}.cover-pending .node,.cover-pending .pulse{opacity:1}.cover-entered .wire,.cover-entered .node{animation:none}}';doc.head.append(style);doc.querySelectorAll('.wire').forEach(p=>p.style.setProperty('--wire-length',p.getTotalLength()));doc.querySelectorAll('.node').forEach((n,i)=>n.style.setProperty('--node-order',i));if(!reduced.matches&&!returnVisit)doc.body.classList.add('cover-pending');}
 if(cover.dataset.entered)activateCover(cover);
}
covers.forEach(cover=>{const frame=cover.querySelector('iframe');frame?.addEventListener('load',()=>prepareCover(cover));prepareCover(cover);coverObserver.observe(cover);});

new MutationObserver(()=>{if(!document.body.classList.contains('page-loading'))covers.filter(c=>c.dataset.entered).forEach(activateCover);}).observe(document.body,{attributes:true,attributeFilter:['class']});


document.documentElement.dataset.contentMotionReady='true';
