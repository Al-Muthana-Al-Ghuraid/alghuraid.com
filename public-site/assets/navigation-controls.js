// Riyadh clock: stable initial markup, minute updates and no phone timer.
const root=document.documentElement,clock=document.getElementById('riyadh-clock'),clockMobile=matchMedia('(max-width:800px)');let clockTimer;
const formatter=clock?new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Riyadh',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}):null;
function updateClock(){
 clearTimeout(clockTimer);if(!clock||clockMobile.matches)return;
 const value=formatter.format(new Date()),digits=clock.querySelector('.clock-numerals'),caption=clock.querySelector('.clock-caption');
 if(digits&&digits.textContent!==value)digits.textContent=value;
 if(caption)caption.textContent=root.lang==='ar'?'الرياض':'RIYADH';
 clock.setAttribute('aria-label',(root.lang==='ar'?'توقيت الرياض ':'Riyadh time ')+value);clock.dateTime=new Date().toISOString();
 if(!document.hidden)clockTimer=setTimeout(updateClock,60000-Date.now()%60000+30);
}
clockMobile.addEventListener('change',updateClock);document.addEventListener('visibilitychange',updateClock);new MutationObserver(updateClock).observe(root,{attributes:true,attributeFilter:['lang']});updateClock();
// Theme-only visibility guard. The accepted delayed language reveal still owns word-changing.
let themePaintTimer;new MutationObserver(()=>{clearTimeout(themePaintTimer);root.classList.add('theme-paint-changing');themePaintTimer=setTimeout(()=>root.classList.remove('theme-paint-changing'),1200);}).observe(root,{attributes:true,attributeFilter:['data-theme']});
// Replace remaining action glyphs without rewriting translated labels or facts.
const shapes={expand:'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M9 15l6-6m-6 0h6v6',close:'m6 6 12 12M6 18 18 6',plus:'M12 5v14M5 12h14',minus:'M5 12h14',back:'M19 12H5m5-5-5 5 5 5',arrow:'M5 12h14m-5-5 5 5-5 5'};
function svg(kind){return '<svg class="ui-line-icon" width="18" height="18" style="width:18px;height:18px;flex:0 0 18px" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="'+shapes[kind]+'"/></svg>';}
function actionIcons(){
 document.querySelectorAll('.diagram-tools a').forEach(el=>{el.innerHTML=svg('expand')+'<span>'+(root.lang==='ar'?'فتح المخطط':'Open diagram')+'</span>';el.setAttribute('aria-haspopup','dialog');});
 for(const [selector,kind] of [['.overview-close','close'],['.viewer-controls [data-action=close]','close'],['.viewer-controls [data-action=plus]','plus'],['.viewer-controls [data-action=minus]','minus']])document.querySelectorAll(selector).forEach(el=>{if(!el.querySelector('svg'))el.innerHTML=svg(kind);});
 document.querySelectorAll('.detail-page #back,.detail-page header>a,.detail-return a').forEach(el=>{if(el.querySelector('svg'))return;if(!el.querySelector('.detail-back-label')){const label=document.createElement('span');label.className='detail-back-label';label.textContent=el.textContent.replace(/[←→]/g,'').trim();el.replaceChildren(label);}if(!el.querySelector('svg'))el.insertAdjacentHTML('afterbegin',svg('back'));});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',actionIcons,{once:true});else actionIcons();
// Dynamic viewer controls are created with vector marks by the shared comfort module.
new MutationObserver(actionIcons).observe(root,{attributes:true,attributeFilter:['lang']});

