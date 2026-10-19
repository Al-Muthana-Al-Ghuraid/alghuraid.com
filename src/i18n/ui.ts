// Fixed interface text (nav, headings, buttons). Content text lives in src/content.
export type Text = { en: string; ar: string };

export const ui = {
  'nav.about': { en: 'About', ar: 'نبذة' },
  'nav.skills': { en: 'Skills', ar: 'المهارات' },
  'nav.projects': { en: 'Projects', ar: 'المشاريع' },
  'nav.certs': { en: 'Certifications', ar: 'الشهادات' },
  'nav.boot': { en: 'Bootcamps', ar: 'المعسكرات' },
  'nav.exp': { en: 'Experience', ar: 'الخبرات' },
  'nav.contact': { en: 'Contact', ar: 'تواصل' },
  'nav.cv': { en: 'Download CV', ar: 'السيرة الذاتية' },
  'hero.hi': { en: "Hi, I'm", ar: 'مرحبًا، أنا' },
  'hero.cta1': { en: 'View projects', ar: 'استعرض المشاريع' },
  'hero.cta2': { en: 'Get in touch', ar: 'تواصل معي' },
  'hero.qv': { en: '30-sec summary', ar: 'ملخص في 30 ثانية' },
  'sn.hint': { en: "psst… whatever you do, <span>don't type <code>snake</code></span>", ar: 'تلميح… مهما فعلت، <span>لا تكتب <code>snake</code></span>' },
  'about.h': { en: 'About me', ar: 'نبذة عني' },
  'f.edu': { en: 'Education', ar: 'التعليم' },
  'f.loc': { en: 'Location', ar: 'الموقع' },
  'f.lang': { en: 'Languages', ar: 'اللغات' },
  'f.cert': { en: 'Certified', ar: 'الشهادات' },
  'skills.h': { en: 'Skills & tech stack', ar: 'المهارات والتقنيات' },
  'pr.h': { en: 'Selected projects', ar: 'مشاريع مختارة' },
  'pr.sub': { en: 'Real systems I designed, built and shipped, each with a write-up of how and why.', ar: 'أنظمة حقيقية صمّمتها وبنيتها وأطلقتها، مع شرح لطريقة بناء كلٍّ منها وأسبابها.' },
  'pr.feat': { en: '★ featured', ar: '★ مشروع مميّز' },
  'fl.all': { en: 'All', ar: 'الكل' },
  'fl.cloud': { en: 'Cloud & DevOps', ar: 'السحابة وDevOps' },
  'fl.web': { en: 'Full-stack', ar: 'تطوير متكامل' },
  'fl.ai': { en: 'AI & Automation', ar: 'الذكاء الاصطناعي والأتمتة' },
  'btn.case': { en: 'Case study', ar: 'تفاصيل المشروع' },
  'btn.soon': { en: 'soon', ar: 'قريبًا' },
  'btn.live': { en: 'Live', ar: 'عرض مباشر' },
  'btn.verify': { en: 'Verify ↗', ar: 'تحقّق ↗' },
  'btn.view': { en: 'View certificate', ar: 'عرض الشهادة' },
  'ce.h': { en: 'Certifications', ar: 'الشهادات' },
  'st.active': { en: 'Active', ar: 'سارية' },
  'st.in-progress': { en: 'In progress', ar: 'قيد التحضير' },
  'st.expired': { en: 'Expired', ar: 'منتهية' },
  'ce.prepping': { en: 'Currently preparing', ar: 'أستعد للاختبار حاليًا' },
  'bo.h': { en: 'Bootcamps & training', ar: 'المعسكرات والبرامج التدريبية' },
  'bo.sub': { en: 'Intensive, hands-on programs where I built real systems end to end.', ar: 'برامج مكثفة وعملية بنيت فيها أنظمة حقيقية من البداية إلى النهاية.' },
  'bo.s1': { en: 'training hours', ar: 'ساعة تدريب' },
  'bo.s2': { en: 'programs', ar: 'برامج' },
  'bo.s3': { en: 'capstone projects', ar: 'مشاريع تخرج' },
  'bo.cap': { en: 'Capstone project', ar: 'مشروع التخرج' },
  'u.hrs': { en: ' hrs', ar: ' ساعة' },
  'mode.online': { en: 'Online', ar: 'عن بُعد' },
  'mode.in-person': { en: 'In person', ar: 'حضوري' },
  'mode.hybrid': { en: 'Hybrid', ar: 'مدمج' },
  'ex.h': { en: 'Experience', ar: 'الخبرات' },
  'ex.present': { en: 'Present', ar: 'حتى الآن' },
  'co.h': { en: "Let's work together", ar: 'لنعمل معًا' },
  'co.sub': { en: 'Hiring for a cloud, DevOps or technical project role? I usually reply within a day.', ar: 'هل تبحث عن مرشّح لوظيفة في الحوسبة السحابية أو DevOps أو إدارة المشاريع التقنية؟ عادةً ما أرد خلال يوم واحد.' },
  'co.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'co.avail': { en: 'Availability:', ar: 'التوفر:' },
  'co.reply': { en: 'Usually replies within a day', ar: 'عادةً ما أرد خلال يوم واحد' },
  'co.copy': { en: 'Copy', ar: 'نسخ' },
  'co.copied': { en: '✓ Copied', ar: '✓ تم النسخ' },
  'co.formTitle': { en: 'Send a message', ar: 'أرسل رسالة' },
  'co.wa': { en: 'Message me on WhatsApp', ar: 'راسلني على واتساب' },
  'fo.name': { en: 'Name', ar: 'الاسم' },
  'fo.name.ph': { en: 'Jane Recruiter', ar: 'اسمك الكامل' },
  'fo.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'fo.msg': { en: 'Message', ar: 'رسالتك' },
  'fo.msg.ph': { en: 'Tell me about the role…', ar: 'أخبرني عن الوظيفة…' },
  'fo.send': { en: 'Send message', ar: 'إرسال الرسالة' },
  'fo.sent': { en: '✓ Sent, thank you!', ar: '✓ تم الإرسال، شكرًا لك!' },
  'fo.err': { en: 'Something went wrong. Please email me instead.', ar: 'حدث خطأ ما، يُرجى مراسلتي عبر البريد الإلكتروني.' },
  'qv.label': { en: 'recruiter quick-view', ar: 'ملخص سريع لمسؤولي التوظيف' },
  'qv.avail': { en: 'Availability', ar: 'التوفر' },
  'qv.certs': { en: 'Certifications', ar: 'الشهادات' },
  'qv.skills': { en: 'Top skills', ar: 'أبرز المهارات' },
  'qv.hl': { en: 'Highlights', ar: 'أبرز الإنجازات' },
  'cs.back': { en: '← All projects', ar: '→ كل المشاريع' },
  'cs.arch': { en: 'Architecture', ar: 'البنية المعمارية' },
  'cs.replay': { en: 'replay', ar: 'إعادة التشغيل' },
  'cs.problem': { en: 'The problem', ar: 'المشكلة' },
  'cs.built': { en: 'What I built', ar: 'ما الذي بنيته' },
  'cs.challenges': { en: 'Challenges', ar: 'التحديات' },
  'cs.results': { en: 'Results', ar: 'النتائج' },
  'cs.shots': { en: 'Screenshots', ar: 'لقطات الشاشة' },
  'cs.stack': { en: 'Tech stack', ar: 'التقنيات المستخدمة' },
  'ft.built': { en: 'built with astro · hosted on cloudflare pages', ar: 'بُني باستخدام Astro · مستضاف على Cloudflare Pages' },
  'nf.h': { en: 'Page not found', ar: 'الصفحة غير موجودة' },
} satisfies Record<string, Text>;

export type UiKey = keyof typeof ui;
export const t = (k: UiKey): Text => ui[k];

const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
};
/** "2025-02" → { en: "Feb 2025", ar: "فبراير 2025" } */
export function month(ym?: string): Text | undefined {
  if (!ym) return undefined;
  const [y, m] = ym.split('-').map(Number);
  return { en: `${MONTHS.en[m - 1]} ${y}`, ar: `${MONTHS.ar[m - 1]} ${y}` };
}
/** start/end months → "Feb → May 2025" style range (bilingual). */
export function range(start?: string, end?: string, present?: Text): Text | undefined {
  const s = month(start), e = end ? month(end) : present;
  if (!s) return e;
  if (!e) return s;
  const sameYear = start && end && start.slice(0, 4) === end.slice(0, 4);
  const trim = (x: string) => (sameYear ? x.replace(/ \d{4}$/, '') : x);
  return { en: `${trim(s.en)} → ${e.en}`, ar: `${trim(s.ar)} ← ${e.ar}` };
}
/** Replace {placeholders} in both languages. */
export function fill(v: Text, vars: Record<string, string | number>): Text {
  const f = (s: string) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
  return { en: f(v.en), ar: f(v.ar) };
}
