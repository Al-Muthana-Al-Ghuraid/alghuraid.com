// One shared request for language text and the skills display.
export const catalogReady=fetch('/assets/translations.json').then(response=>{
 if(!response.ok)throw new Error('Translation catalog unavailable');
 return response.json();
});
