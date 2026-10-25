// Preserve the label node while language animations are using it.
export function renderThemeControl(button,language,night){
 if(!button)return;
 let label=button.querySelector('.header-control-label');
 if(!label){label=document.createElement('span');label.className='header-control-label';button.replaceChildren(label);}
 const text=language==='ar'?(night?'☀ الوضع النهاري':'☾ الوضع الليلي'):(night?'☀ Light mode':'☾ Dark mode');
 if(label.textContent!==text)label.textContent=text;
 button.removeAttribute('aria-pressed');
 button.setAttribute('aria-label',language==='ar'?(night?'التبديل إلى الوضع النهاري':'التبديل إلى الوضع الليلي'):(night?'Switch to light mode':'Switch to dark mode'));
}
