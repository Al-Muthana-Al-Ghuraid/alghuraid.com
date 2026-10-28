import {catalogReady} from './translation-catalog.js?v=release-20261026-performance';
import {renderThemeControl} from './theme-control.js?v=release-20261028-navigation';
const catalog=await catalogReady;
Object.assign(catalog,{'Experience night ↗':'استعرض الليل ↖','Experience sunrise ↗':'استعرض النهار ↖','RIYADH, SAUDI ARABIA':'الرياض، المملكة العربية السعودية','Home':'الرئيسية','CONTENT STUDY · Draft copy & visuals':'دراسة التصميم · محتوى وصور أولية','Previous layout ↗':'التصميم السابق ↖','Jump to projects ↓':'انتقل إلى المشاريع ↓'});
const source=new WeakMap(),originalAttributes=new WeakMap();
const button=document.querySelector('#language-toggle');
let language=new URLSearchParams(location.search).get('lang')==='ar'?'ar':'en';
function translated(value){
 if(catalog[value]!==undefined)return catalog[value];
 const match=value.match(/^(.*?)(\s*[↗↘↓↑+]\s*)$/);
 if(match&&catalog[match[1].trim()]!==undefined)return catalog[match[1].trim()]+match[2];
 return value;
}
function translate(root){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 for(let node;node=walker.nextNode();){
  if(node.parentElement.closest('script,style,#language-toggle,#time'))continue;
  const raw=node.nodeValue,key=raw.trim();if(!key)continue;
  if(!source.has(node))source.set(node,{key,prefix:raw.match(/^\s*/)[0],suffix:raw.match(/\s*$/)[0]});
  const saved=source.get(node),next=saved.prefix+(language==='ar'?translated(saved.key):saved.key)+saved.suffix;
  if(node.nodeValue!==next)node.nodeValue=next;
 }
 root.querySelectorAll('[alt],[aria-label],[title]').forEach(el=>{
  if(el===button)return;
  let attrs=originalAttributes.get(el);if(!attrs){attrs={};for(const name of ['alt','aria-label','title'])if(el.hasAttribute(name))attrs[name]=el.getAttribute(name);originalAttributes.set(el,attrs);}
  for(const [name,value] of Object.entries(attrs))el.setAttribute(name,language==='ar'?translated(value):value);
 });
}
function controlLabel(control,text){let label=control.querySelector('.header-control-label');if(!label){label=document.createElement('span');label.className='header-control-label';control.replaceChildren(label);}if(label.textContent!==text)label.textContent=text;}
function updateTime(){renderThemeControl(document.querySelector('#time'),language,document.documentElement.dataset.theme==='night');}
function apply(){
 document.documentElement.lang=language;document.documentElement.dir=language==='ar'?'rtl':'ltr';
 document.querySelectorAll('.program-page-link,.project-page-link').forEach(link=>{const url=new URL(link.href);url.searchParams.set('lang',language);link.href=url.pathname+url.search+url.hash;});
 translate(document.body);controlLabel(button,language==='ar'?'English':'العربية');button.lang=language==='ar'?'en':'ar';button.setAttribute('aria-label',language==='ar'?'Switch to English':'التبديل إلى العربية');
 document.title=language==='ar'?'المثنى الغريض — الملف الشخصي':'Al-Muthana Al-Ghuraid — Portfolio';updateTime();
}
button.onclick=()=>{language=language==='ar'?'en':'ar';const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url.pathname+url.search+url.hash);apply();};
apply();
// Measure both translations synchronously: no alternate-language frame is painted.
// A shared text footprint keeps the social/action row steady on mobile.
function sizeMobileHero(){
 const items=[...new Set(document.querySelectorAll('.hero h1,.hero .professional-focus,.hero>p'))];
 if(!items.length)return;
 items.forEach(el=>el.style.removeProperty('min-height'));
 if(!matchMedia('(max-width:800px)').matches)return;
 const selected=language,heights=items.map(()=>0);
 for(const next of ['en','ar']){language=next;apply();items.forEach((el,i)=>heights[i]=Math.max(heights[i],el.getBoundingClientRect().height));}
 language=selected;apply();items.forEach((el,i)=>el.style.minHeight=Math.ceil(heights[i])+'px');
 document.documentElement.dataset.heroLayoutReady='true';
}
let heroResize;
addEventListener('resize',()=>{clearTimeout(heroResize);heroResize=setTimeout(sizeMobileHero,120);});
document.fonts.addEventListener('loadingdone',sizeMobileHero);
await document.fonts.ready;sizeMobileHero();
