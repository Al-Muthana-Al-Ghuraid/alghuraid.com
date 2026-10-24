// Local skills-only icon study. Brand paths from Simple Icons (CC0); concepts and unavailable logos use simple symbols.
const brands=await fetch('/assets/skill-icons-prototype.json').then(r=>r.json());
const shapes={
 cloud:'<path d="M6 18h12a4 4 0 0 0 0-8 6 6 0 0 0-11-2A5 5 0 0 0 6 18Z"/>',
 key:'<circle cx="8" cy="8" r="4"/><path d="m11 11 9 9m-5-5 3-3m-1 5 3-3"/>',
 database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',
 search:'<path d="M4 3h10v5h5v7M14 3v5h5M4 3v18h7"/><circle cx="15" cy="16" r="4"/><path d="m18 19 3 3"/>',
 plan:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6m10-6v6M3 11h18M7 15h3m4 0h3m-10 3h3"/>',
 risk:'<path d="M12 2 21 6v6c0 5-9 10-9 10S3 17 3 12V6Z"/><path d="M12 7v6m0 3h.01"/>',
 people:'<circle cx="9" cy="7" r="3"/><path d="M3 21v-4a6 6 0 0 1 12 0v4M16 4a3 3 0 0 1 0 6m3 11v-5a5 5 0 0 0-3-4"/>',
 team:'<circle cx="12" cy="5" r="3"/><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="m10 8-3 7m7-7 3 7M8 18h8"/>',
 cycle:'<path d="M20 8a8 8 0 0 0-14-3L3 8m0-5v5h5M4 16a8 8 0 0 0 14 3l3-3m0 5v-5h-5"/>',
 board:'<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M9 3v18m6-18v18M5 7h1m6 0h0m6 0h1M5 11h1m6 0h0m6 0h1"/>',
 chat:'<path d="M21 14a3 3 0 0 1-3 3H9l-6 4V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3Z"/><path d="M7 8h10M7 12h7"/>'
};
const concept={'Microsoft Azure':'cloud','Oracle Cloud':'cloud','Key Vault':'key','PostgreSQL':'database','SQLAlchemy':'database','SQL':'database','Cosmos DB':'database','RAG':'search','OpenAI API':'chat','Project planning':'plan','Risk registers':'risk','Stakeholders':'people','Team coordination':'team','Scrum':'cycle','Kanban':'board','Communication':'chat'};
export function skillIcon(key){
 const data=brands[key],svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
 svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');svg.classList.add('skill-tag-icon');
 if(data){svg.innerHTML=data.body;svg.setAttribute('fill','currentColor');}
 else{svg.innerHTML=shapes[concept[key]||'cloud'];svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.7');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');}
 return svg;
}

