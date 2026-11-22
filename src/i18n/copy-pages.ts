import type { Locale } from '@/lib/site';

/**
 * Inner-page copy.
 *
 * Turkish is the source. Where the 2026 redesign prototypes carried placeholder
 * copy (Check-up packages, preparation table, device notes), the Turkish was
 * replaced in November 2026 with what the live site www.iyitem.com actually
 * says — nothing here states a clinical fact the old site did not.
 *
 * English and Arabic are translations of that Turkish, published November 2026
 * (see TRANSLATION-NOTES.md). `pick()` still falls back to Turkish for any
 * table a locale is missing.
 */

/** Returns the locale's copy, falling back to Turkish. */
export function pick<T>(table: Partial<Record<Locale, T>>, locale: Locale): T {
  return (table[locale] ?? table.tr) as T;
}

type Numbered = { no: string; title?: string; text: string };
type Fact = { value: string; label: string };

// ---------------------------------------------------------------- services --
export const SERVICES_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  countLabel: string;
  reasons: Numbered[];
}>> = {
  tr: {
    title: 'Tüm görüntüleme ihtiyaçlarınız için kapsamlı çözümler',
    lead: 'Kesitsel görüntülemeden girişimsel radyolojiye, 15 farklı hizmeti tek merkezde sunuyoruz.',
    countLabel: 'hizmet',
    reasons: [
      { no: '01', title: 'Çifte kontrollü rapor', text: 'Her görüntüleme iki ayrı radyoloji uzmanı tarafından değerlendirilir.' },
      { no: '02', title: 'Aynı gün sonuç', text: 'Tetkikiniz çoğu durumda aynı gün raporlanır, online erişiminize açılır.' },
      { no: '03', title: 'Konforlu çekim', text: 'Geniş tüp çapı, kısa sekans süreleri ve süreci anlatan bir ekip.' },
    ],
  },
  en: {
    title: 'Comprehensive solutions for all your imaging needs',
    lead: 'From cross-sectional imaging to interventional radiology, fifteen services in one centre.',
    countLabel: 'services',
    reasons: [
      { no: '01', title: 'Double-checked reports', text: 'Every scan is assessed by two separate radiologists.' },
      { no: '02', title: 'Same-day results', text: 'In most cases your examination is reported the same day and opened to you online.' },
      { no: '03', title: 'A comfortable scan', text: 'A wide bore, short sequences and a team that explains each step.' },
    ],
  },
  ar: {
    title: 'حلول شاملة لجميع احتياجاتكم من التصوير الطبي',
    lead: 'من التصوير المقطعي إلى الأشعة التداخلية، خمس عشرة خدمة في مركز واحد.',
    countLabel: 'خدمة',
    reasons: [
      { no: '01', title: 'تقارير بفحص مزدوج', text: 'يُقيَّم كل فحص من طبيبَي أشعة منفصلين.' },
      { no: '02', title: 'نتائج في اليوم نفسه', text: 'يُعدّ تقرير فحصك في اليوم نفسه غالبًا ويُتاح لك إلكترونيًا.' },
      { no: '03', title: 'فحص مريح', text: 'نفق واسع وتسلسلات قصيرة وفريق يشرح كل خطوة.' },
    ],
  },
};

// ------------------------------------------------------------------- about --
type AboutCopy = {
  title: string;
  lead: string;
  facts: Fact[];
  principlesTitle: string;
  principles: { no: string; text: string }[];
  devicesTitle: string;
  devices: { name: string; note: string }[];
  ctaTitle: string;
  ctaBody: string;
};

const DEVICE_NAMES = [
  'Siemens Magnetom Vida',
  'GE Revolution Maxima',
  'Canon i800',
  'Siemens Acuson Sequoia',
  'GMM Opera T',
  'Fuji Amulet',
  'Kavo OP 300 · DMS Stratos',
];

export const ABOUT_PAGE: Partial<Record<Locale, AboutCopy>> = {
  tr: {
    title: 'İyi hizmeti uygun fiyata, 1995’ten beri aynı özenle',
    lead: 'Kendi alanında kalitesiyle anılan bir görüntüleme merkezi olmak için çalışıyoruz.',
    facts: [
      { value: '1995', label: 'Kuruluş yılı' },
      { value: '2011', label: 'Bugünkü yönetimin devraldığı yıl' },
      { value: '2 uzman', label: 'Her tetkikte çifte kontrol' },
      { value: '15+', label: 'Görüntüleme hizmeti' },
    ],
    principlesTitle: 'İlkelerimiz',
    principles: [
      { no: '01', text: 'İnsan yaşamına en üst düzeyde saygı göstermek' },
      { no: '02', text: 'Hasta sağlık ve esenliğine öncelik vermek' },
      { no: '03', text: 'Hasta özerkliğine ve onuruna saygı göstermek' },
      { no: '04', text: 'Çağdaş düzeyde kaliteli sağlık hizmeti sunmak' },
      { no: '05', text: 'Yürürlükteki yasal şartlar, Sağlık Bakanlığı mevzuatı ve KYS şartları doğrultusunda çalışmak' },
      { no: '06', text: 'Yoksul ve yardıma muhtaç kimselere destek sağlamak' },
    ],
    devicesTitle: 'Cihaz altyapımız',
    devices: [
      { name: DEVICE_NAMES[0], note: '3 Tesla MR' },
      { name: DEVICE_NAMES[1], note: '128 kesit BT' },
      { name: DEVICE_NAMES[2], note: 'Doppler ultrasonografi' },
      { name: DEVICE_NAMES[3], note: 'Ultrasonografi' },
      { name: DEVICE_NAMES[4], note: 'Floroskopili dijital röntgen' },
      { name: DEVICE_NAMES[5], note: 'Dijital mamografi' },
      { name: DEVICE_NAMES[6], note: 'Dental tomografi · kemik dansitometri' },
    ],
    ctaTitle: 'Tetkikiniz için randevu alın',
    ctaBody: 'Uygun saati telefonda birlikte belirleyelim; acele eden durumlar için doğrudan arayabilirsiniz.',
  },
  en: {
    title: 'Good care at a fair price, with the same attention since 1995',
    lead: 'We work to be an imaging centre known for the quality of its work.',
    facts: [
      { value: '1995', label: 'Year founded' },
      { value: '2011', label: 'Year the current management took over' },
      { value: '2 specialists', label: 'Double check on every examination' },
      { value: '15+', label: 'Imaging services' },
    ],
    principlesTitle: 'Our principles',
    principles: [
      { no: '01', text: 'To show the utmost respect for human life' },
      { no: '02', text: 'To put the health and well-being of patients first' },
      { no: '03', text: 'To respect the autonomy and dignity of patients' },
      { no: '04', text: 'To provide high-quality, up-to-date healthcare' },
      { no: '05', text: 'To work in line with the law in force, Ministry of Health regulations and quality management requirements' },
      { no: '06', text: 'To support people who are poor or in need' },
    ],
    devicesTitle: 'Our equipment',
    devices: [
      { name: DEVICE_NAMES[0], note: '3 Tesla MRI' },
      { name: DEVICE_NAMES[1], note: '128-slice CT' },
      { name: DEVICE_NAMES[2], note: 'Doppler ultrasound' },
      { name: DEVICE_NAMES[3], note: 'Ultrasound' },
      { name: DEVICE_NAMES[4], note: 'Digital X-ray with fluoroscopy' },
      { name: DEVICE_NAMES[5], note: 'Digital mammography' },
      { name: DEVICE_NAMES[6], note: 'Dental CT · bone densitometry' },
    ],
    ctaTitle: 'Book your examination',
    ctaBody: 'We will agree a suitable time with you by phone; for anything urgent, call us directly.',
  },
  ar: {
    title: 'خدمة جيدة بسعر مناسب، وبالعناية نفسها منذ عام 1995',
    lead: 'نعمل لنكون مركز تصوير يُعرف بجودة عمله في مجاله.',
    facts: [
      { value: '1995', label: 'سنة التأسيس' },
      { value: '2011', label: 'سنة تسلّم الإدارة الحالية' },
      { value: 'أخصائيان', label: 'فحص مزدوج لكل تصوير' },
      { value: '+15', label: 'خدمة تصوير' },
    ],
    principlesTitle: 'مبادئنا',
    principles: [
      { no: '01', text: 'إظهار أعلى درجات الاحترام لحياة الإنسان' },
      { no: '02', text: 'إعطاء الأولوية لصحة المرضى وسلامتهم' },
      { no: '03', text: 'احترام استقلالية المريض وكرامته' },
      { no: '04', text: 'تقديم رعاية صحية عالية الجودة ومواكبة للعصر' },
      { no: '05', text: 'العمل وفق الأحكام القانونية النافذة وتشريعات وزارة الصحة ومتطلبات نظام إدارة الجودة' },
      { no: '06', text: 'دعم الفقراء والمحتاجين' },
    ],
    devicesTitle: 'أجهزتنا',
    devices: [
      { name: DEVICE_NAMES[0], note: 'رنين مغناطيسي 3 تسلا' },
      { name: DEVICE_NAMES[1], note: 'تصوير مقطعي 128 شريحة' },
      { name: DEVICE_NAMES[2], note: 'موجات فوق صوتية دوبلر' },
      { name: DEVICE_NAMES[3], note: 'الموجات فوق الصوتية' },
      { name: DEVICE_NAMES[4], note: 'أشعة سينية رقمية مع تنظير فلوري' },
      { name: DEVICE_NAMES[5], note: 'تصوير الثدي الرقمي' },
      { name: DEVICE_NAMES[6], note: 'تصوير مقطعي للأسنان · قياس كثافة العظام' },
    ],
    ctaTitle: 'احجز موعد فحصك',
    ctaBody: 'نتفق معك هاتفيًا على الوقت المناسب، وللحالات المستعجلة يمكنك الاتصال بنا مباشرة.',
  },
};

// ------------------------------------------------------------------ devices --
/**
 * Spec chips on the device pages. Every chip restates something the old
 * site's service pages said about that device.
 */
export const DEVICES_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  facts: Fact[];
  specs: Record<string, string[]>;
}>> = {
  tr: {
    title: 'Görüntülemede güncel teknoloji',
    lead: 'Yedi farklı modalitede, üreticilerin güncel sistemleriyle çalışıyoruz.',
    facts: [
      { value: '7', label: 'Farklı modalite' },
      { value: '3 Tesla', label: 'MR alan gücü' },
      { value: '128', label: 'Kesit BT' },
      { value: '15 yıl', label: 'PACS arşiv süresi' },
    ],
    specs: {
      'mr-3-tesla-siemens-optima-360': ['70 cm geniş tüp', 'Sessiz MR', 'Yapay zeka ile 4 kata kadar hızlı sekans'],
      'multislice-bt-ge-elite': ['128 kesit', 'Düşük doz koroner BT anjiyografi', 'Sanal kolonoskopi'],
      'i800-doppler-ultrasonografi-canon': ['Renkli Doppler', 'Ekokardiyografi probu', 'Çocuk ve bebek probu'],
      'dijital-rontgen-gmm': ['Floroskopi', 'Stitching ile boy ve skolyoz grafisi', 'Düşük doz'],
      'dijital-mammografi-fuji-amulet': ['Düşük doz', 'Meme kanseri taraması', '5 megapiksel tıbbi ekranda değerlendirme'],
      '3-boyutlu-dental-tomografi-kavo': ['Cone beam 3B dental tomografi', 'Dijital panoramik', 'Düşük doz'],
      'kemik-dansitometri-dms': ['Standart kemik ölçümü', 'Tüm vücut ve radial ölçüm', 'Çocuklarda kemik yoğunluğu'],
    },
  },
  en: {
    title: 'Up-to-date imaging technology',
    lead: 'We work with current systems from leading manufacturers across seven modalities.',
    facts: [
      { value: '7', label: 'Modalities' },
      { value: '3 Tesla', label: 'MRI field strength' },
      { value: '128', label: 'Slice CT' },
      { value: '15 years', label: 'PACS archive period' },
    ],
    specs: {
      'mr-3-tesla-siemens-optima-360': ['70 cm wide bore', 'Silent MRI', 'AI-accelerated sequences, up to 4× faster'],
      'multislice-bt-ge-elite': ['128 slices', 'Low-dose coronary CT angiography', 'Virtual colonoscopy'],
      'i800-doppler-ultrasonografi-canon': ['Colour Doppler', 'Echocardiography probe', 'Paediatric and infant probe'],
      'dijital-rontgen-gmm': ['Fluoroscopy', 'Full-length and scoliosis films by stitching', 'Low dose'],
      'dijital-mammografi-fuji-amulet': ['Low dose', 'Breast cancer screening', 'Read on 5-megapixel medical displays'],
      '3-boyutlu-dental-tomografi-kavo': ['Cone beam 3D dental CT', 'Digital panoramic', 'Low dose'],
      'kemik-dansitometri-dms': ['Standard bone measurement', 'Whole-body and radial measurement', 'Bone density in children'],
    },
  },
  ar: {
    title: 'أحدث تقنيات التصوير الطبي',
    lead: 'نعمل بأحدث أنظمة الشركات المصنّعة في سبع وسائط تصوير مختلفة.',
    facts: [
      { value: '7', label: 'وسائط تصوير' },
      { value: '3 تسلا', label: 'قوة مجال الرنين' },
      { value: '128', label: 'شريحة تصوير مقطعي' },
      { value: '15 سنة', label: 'مدة الحفظ في أرشيف PACS' },
    ],
    specs: {
      'mr-3-tesla-siemens-optima-360': ['نفق واسع بقطر 70 سم', 'رنين صامت', 'تسلسلات أسرع حتى 4 مرات بالذكاء الاصطناعي'],
      'multislice-bt-ge-elite': ['128 شريحة', 'تصوير أوعية تاجية بجرعة منخفضة', 'تنظير قولون افتراضي'],
      'i800-doppler-ultrasonografi-canon': ['دوبلر ملوّن', 'مسبار تخطيط صدى القلب', 'مسبار للأطفال والرضّع'],
      'dijital-rontgen-gmm': ['تنظير فلوري', 'صور الطول والجنف بتقنية الدمج', 'جرعة منخفضة'],
      'dijital-mammografi-fuji-amulet': ['جرعة منخفضة', 'الكشف المبكر عن سرطان الثدي', 'قراءة على شاشات طبية 5 ميغابكسل'],
      '3-boyutlu-dental-tomografi-kavo': ['تصوير مقطعي مخروطي ثلاثي الأبعاد للأسنان', 'بانورامي رقمي', 'جرعة منخفضة'],
      'kemik-dansitometri-dms': ['قياس العظام القياسي', 'قياس الجسم كاملًا والساعد', 'كثافة العظام لدى الأطفال'],
    },
  },
};

// ------------------------------------------------------------------ doctors --
export const DOCTORS_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  stepsTitle: string;
  steps: Numbered[];
  since: Record<string, string>;
  summary: Record<string, string>;
}>> = {
  tr: {
    title: 'Her görüntüleme, iki ayrı uzmanın kontrolünden geçer',
    lead: 'Radyoloji uzmanlarımız tetkiklerinizi ayrı ayrı okur ve değerlendirmelerini karşılaştırır.',
    stepsTitle: 'Nasıl çalışıyoruz?',
    steps: [
      { no: '01', title: 'Çekim', text: 'Tetkikiniz deneyimli teknisyenlerimiz tarafından, uygun protokolle gerçekleştirilir.' },
      { no: '02', title: 'Çifte değerlendirme', text: 'Görüntüler iki radyoloji uzmanı tarafından ayrı ayrı okunur ve karşılaştırılır.' },
      { no: '03', title: 'Rapor ve arşiv', text: "Raporunuz çoğu durumda aynı gün hazırlanır; film ve rapor PACS'ta 15 yıl saklanır." },
    ],
    since: {
      'bedri-carsancakli': '2011 – devam ediyor',
      'ergun-deniz': '2019 – devam ediyor',
    },
    summary: {
      'bedri-carsancakli':
        "1992'de İstanbul Tıp Fakültesi'ni, 1996'da Cerrahpaşa Radyoloji Anabilim Dalı'nı tamamladı. 2011'den bu yana İyitem Görüntüleme Merkezi'nde çalışıyor.",
      'ergun-deniz':
        "1995'te Uludağ Üniversitesi Tıp Fakültesi'ni, 2000'de Konya Selçuk Üniversitesi Radyoloji Anabilim Dalı'nı tamamladı. 2019'dan bu yana ekibimizde.",
    },
  },
  en: {
    title: 'Every scan is checked by two separate specialists',
    lead: 'Our radiologists read your examination independently and compare their assessments.',
    stepsTitle: 'How we work',
    steps: [
      { no: '01', title: 'The scan', text: 'Your examination is carried out by our experienced technicians using the appropriate protocol.' },
      { no: '02', title: 'Double reading', text: 'The images are read separately by two radiologists and the readings are compared.' },
      { no: '03', title: 'Report and archive', text: 'In most cases your report is ready the same day; images and report are kept in PACS for 15 years.' },
    ],
    since: {
      'bedri-carsancakli': '2011 – present',
      'ergun-deniz': '2019 – present',
    },
    summary: {
      'bedri-carsancakli':
        'Graduated from Istanbul Faculty of Medicine in 1992 and completed radiology training at Cerrahpaşa in 1996. Has worked at İyitem Imaging Centre since 2011.',
      'ergun-deniz':
        'Graduated from Uludağ University Faculty of Medicine in 1995 and completed radiology training at Selçuk University, Konya, in 2000. Part of our team since 2019.',
    },
  },
  ar: {
    title: 'كل تصوير يمرّ على أخصائيَّين منفصلين',
    lead: 'يقرأ أطباء الأشعة لدينا فحصك كلٌّ على حدة ثم يقارنون تقييماتهم.',
    stepsTitle: 'كيف نعمل؟',
    steps: [
      { no: '01', title: 'التصوير', text: 'يُجري فحصك فنيّونا ذوو الخبرة وفق البروتوكول المناسب.' },
      { no: '02', title: 'القراءة المزدوجة', text: 'يقرأ طبيبا أشعة الصور كلٌّ على حدة وتُقارن قراءتاهما.' },
      { no: '03', title: 'التقرير والأرشيف', text: 'يكون تقريرك جاهزًا في اليوم نفسه غالبًا، وتُحفظ الصور والتقرير في نظام PACS لمدة 15 سنة.' },
    ],
    since: {
      'bedri-carsancakli': '2011 – حتى الآن',
      'ergun-deniz': '2019 – حتى الآن',
    },
    summary: {
      'bedri-carsancakli':
        'تخرّج في كلية الطب بإسطنبول عام 1992، وأتمّ اختصاص الأشعة في جراح باشا عام 1996. يعمل في مركز إييتم للتصوير منذ عام 2011.',
      'ergun-deniz':
        'تخرّج في كلية الطب بجامعة أولوداغ عام 1995، وأتمّ اختصاص الأشعة في جامعة سلجوق بقونية عام 2000. ضمن فريقنا منذ عام 2019.',
    },
  },
};

// -------------------------------------------------------------- online report --
type ReportCopy = {
  title: string;
  lead: string;
  portals: { key: 'patient' | 'doctor'; tag: string; title: string; desc: string; cta: string }[];
  warning: string;
  stepsTitle: string;
  steps: Numbered[];
  faq: { q: string; a: string }[];
  supportTitle: string;
  supportBody: string;
};

export const REPORT_PAGE: Partial<Record<Locale, ReportCopy>> = {
  tr: {
    title: 'Online Film-Rapor',
    lead: 'Film ve raporlarınız PACS sisteminde arşivlenir; hasta veya doktor girişiyle her yerden ulaşabilirsiniz.',
    portals: [
      {
        key: 'patient',
        tag: 'Hasta girişi',
        title: 'Hasta Online Film-Rapor',
        desc: 'Kendi tetkikinizin görüntü ve raporuna ulaşmak için hasta girişini kullanın.',
        cta: 'Giriş yap',
      },
      {
        key: 'doctor',
        tag: 'Doktor girişi',
        title: 'Doktor Online Film-Rapor',
        desc: 'Hekimler, hastalarının tetkiklerini kendi kullanıcı bilgileriyle görüntüleyebilir.',
        cta: 'Giriş yap',
      },
    ],
    warning:
      'Giriş bilgilerinizi yalnızca açılan PACS ekranına girin. İyitem hiçbir zaman e-posta veya telefonla şifrenizi istemez.',
    stepsTitle: 'Üç adımda raporunuz',
    steps: [
      { no: '01', title: 'Girişi seçin', text: 'Hasta ya da doktor girişine tıklayın; PACS sistemi yeni sekmede açılır.' },
      { no: '02', title: 'Bilgilerinizi girin', text: 'PACS ekranında istenen kimlik ve erişim bilgilerini doldurun.' },
      { no: '03', title: 'Görüntüleyin ve paylaşın', text: 'Filmlerinizi inceleyin, raporunuzu indirin veya hekiminize iletin.' },
    ],
    faq: [
      { q: 'Raporum ne zaman hazır olur?', a: 'Tetkikler çoğu durumda aynı gün raporlanır ve PACS sistemine yüklenir. Özellikli çekimlerde (MR spektroskopi, multiparametrik prostat MR gibi) raporlama bir iş günü sürebilir.' },
      { q: 'Giriş için hangi bilgiler gerekiyor?', a: 'Açılan PACS ekranında genellikle T.C. kimlik numaranız ve merkezimizin size verdiği erişim bilgisi istenir. Bilgileriniz yalnızca PACS sisteminde doğrulanır.' },
      { q: 'Filmlerimi indirebilir miyim?', a: 'Evet. PACS görüntüleyicisinden görüntülerinizi inceleyebilir, raporunuzu PDF olarak indirebilir ve hekiminizle paylaşabilirsiniz.' },
      { q: 'Görüntülerim ne kadar süre saklanıyor?', a: 'Çekilen filmler ve raporlar merkezimizin PACS sisteminde en az 15 yıl boyunca kayıtlı tutulur.' },
      { q: 'Doktor girişi hastalardan farklı mı?', a: 'Evet. Hekimler kendi kullanıcı bilgileriyle doktor girişinden bağlanır ve kendilerine gönderilen hastaların tetkiklerini görüntüleyebilir.' },
    ],
    supportTitle: 'Giriş yapamıyor musunuz?',
    supportBody: 'Çağrı merkezimizi arayın; erişim bilgilerinizi telefonda doğrulayıp yardımcı olalım.',
  },
  en: {
    title: 'Online Images & Reports',
    lead: 'Your images and reports are archived in the PACS system; you can reach them from anywhere through the patient or physician login.',
    portals: [
      {
        key: 'patient',
        tag: 'Patient login',
        title: 'Patient Online Images & Report',
        desc: 'Use the patient login to view the images and report of your own examination.',
        cta: 'Log in',
      },
      {
        key: 'doctor',
        tag: 'Physician login',
        title: 'Physician Online Images & Report',
        desc: 'Physicians can view their patients’ examinations with their own user credentials.',
        cta: 'Log in',
      },
    ],
    warning:
      'Enter your login details only on the PACS screen that opens. İyitem will never ask for your password by email or phone.',
    stepsTitle: 'Your report in three steps',
    steps: [
      { no: '01', title: 'Choose a login', text: 'Click the patient or physician login; the PACS system opens in a new tab.' },
      { no: '02', title: 'Enter your details', text: 'Fill in the identity and access details requested on the PACS screen.' },
      { no: '03', title: 'View and share', text: 'Review your images, download your report or send it to your doctor.' },
    ],
    faq: [
      { q: 'When will my report be ready?', a: 'In most cases examinations are reported the same day and uploaded to PACS. For specialised scans (such as MR spectroscopy or multiparametric prostate MRI) reporting may take one working day.' },
      { q: 'What do I need to log in?', a: 'The PACS screen usually asks for your Turkish ID number and the access details our centre gave you. Your details are checked only by the PACS system.' },
      { q: 'Can I download my images?', a: 'Yes. In the PACS viewer you can review your images, download your report as a PDF and share it with your doctor.' },
      { q: 'How long are my images kept?', a: 'Images and reports are kept in our centre’s PACS system for at least 15 years.' },
      { q: 'Is the physician login different from the patient login?', a: 'Yes. Physicians connect through the physician login with their own credentials and can view the examinations of patients referred to them.' },
    ],
    supportTitle: 'Can’t log in?',
    supportBody: 'Call our call centre; we will verify your access details by phone and help you.',
  },
  ar: {
    title: 'الصور والتقارير عبر الإنترنت',
    lead: 'تُحفظ صورك وتقاريرك في نظام PACS، ويمكنك الوصول إليها من أي مكان عبر دخول المريض أو الطبيب.',
    portals: [
      {
        key: 'patient',
        tag: 'دخول المريض',
        title: 'صور وتقارير المريض عبر الإنترنت',
        desc: 'استخدم دخول المريض للاطلاع على صور فحصك وتقريره.',
        cta: 'تسجيل الدخول',
      },
      {
        key: 'doctor',
        tag: 'دخول الطبيب',
        title: 'صور وتقارير الطبيب عبر الإنترنت',
        desc: 'يمكن للأطباء الاطلاع على فحوص مرضاهم ببيانات المستخدم الخاصة بهم.',
        cta: 'تسجيل الدخول',
      },
    ],
    warning:
      'أدخل بيانات الدخول في شاشة PACS التي تُفتح فقط. لن تطلب منك إييتم كلمة المرور أبدًا عبر البريد الإلكتروني أو الهاتف.',
    stepsTitle: 'تقريرك في ثلاث خطوات',
    steps: [
      { no: '01', title: 'اختر الدخول', text: 'انقر على دخول المريض أو الطبيب، فيُفتح نظام PACS في علامة تبويب جديدة.' },
      { no: '02', title: 'أدخل بياناتك', text: 'املأ بيانات الهوية والوصول المطلوبة في شاشة PACS.' },
      { no: '03', title: 'اطّلع وشارك', text: 'راجع صورك ونزّل تقريرك أو أرسله إلى طبيبك.' },
    ],
    faq: [
      { q: 'متى يكون تقريري جاهزًا؟', a: 'تُعدّ تقارير الفحوص في اليوم نفسه غالبًا وتُرفع إلى نظام PACS. أما الفحوص التخصصية (مثل مطيافية الرنين المغناطيسي أو رنين البروستاتا متعدد المعايير) فقد يستغرق تقريرها يوم عمل واحدًا.' },
      { q: 'ما البيانات المطلوبة لتسجيل الدخول؟', a: 'تطلب شاشة PACS عادةً رقم الهوية التركية وبيانات الوصول التي أعطاك إياها مركزنا. ويتحقق نظام PACS وحده من بياناتك.' },
      { q: 'هل يمكنني تنزيل صوري؟', a: 'نعم. يمكنك من عارض PACS مراجعة صورك وتنزيل تقريرك بصيغة PDF ومشاركته مع طبيبك.' },
      { q: 'كم مدة حفظ صوري؟', a: 'تُحفظ الصور والتقارير في نظام PACS في مركزنا مدة 15 سنة على الأقل.' },
      { q: 'هل يختلف دخول الطبيب عن دخول المريض؟', a: 'نعم. يدخل الأطباء عبر دخول الطبيب ببياناتهم الخاصة، ويمكنهم الاطلاع على فحوص المرضى المحالين إليهم.' },
    ],
    supportTitle: 'لا تستطيع تسجيل الدخول؟',
    supportBody: 'اتصل بمركز الاتصال لدينا، وسنتحقق من بيانات وصولك هاتفيًا ونساعدك.',
  },
};

// ------------------------------------------------------------------ gallery --
const GALLERY_SRC = Array.from({ length: 12 }, (_, i) => `/assets/gal/${i + 1}.webp`);

type GalleryCopy = {
  title: string;
  lead: string;
  countLabel: string;
  photos: { src: string; caption: string; cat: string }[];
};

const gallery = (rows: [string, string][]) => rows.map(([caption, cat], i) => ({ src: GALLERY_SRC[i], caption, cat }));

export const GALLERY_PAGE: Partial<Record<Locale, GalleryCopy>> = {
  tr: {
    title: 'Merkezimizden kareler',
    lead: 'Çekim odalarımız, cihazlarımız ve hasta hazırlık alanlarımız.',
    countLabel: 'fotoğraf',
    photos: gallery([
      ['Boy grafisi çekim odası', 'Röntgen'],
      ['MR hazırlık alanı', 'MR'],
      ['Floroskopi ünitesi', 'Röntgen'],
      ['Bilgisayarlı tomografi odası', 'BT'],
      ['Dental tomografi çekimi', 'Röntgen'],
      ['Kemik dansitometri ölçümü', 'Röntgen'],
      ['Doppler ultrasonografi', 'Ultrason'],
      ['Panoramik röntgen', 'Röntgen'],
      ['Dijital röntgen ünitesi', 'Röntgen'],
      ['Dansitometri hasta hazırlığı', 'Röntgen'],
      ['Skolyoz grafisi çekimi', 'Röntgen'],
      ['Mamografi ünitesi', 'Kadın sağlığı'],
    ]),
  },
  en: {
    title: 'Inside our centre',
    lead: 'Our scanning rooms, equipment and patient preparation areas.',
    countLabel: 'photos',
    photos: gallery([
      ['Full-length X-ray room', 'X-ray'],
      ['MRI preparation area', 'MRI'],
      ['Fluoroscopy unit', 'X-ray'],
      ['Computed tomography room', 'CT'],
      ['Dental CT scan', 'X-ray'],
      ['Bone densitometry measurement', 'X-ray'],
      ['Doppler ultrasound', 'Ultrasound'],
      ['Panoramic X-ray', 'X-ray'],
      ['Digital X-ray unit', 'X-ray'],
      ['Densitometry patient preparation', 'X-ray'],
      ['Scoliosis X-ray', 'X-ray'],
      ['Mammography unit', 'Women’s health'],
    ]),
  },
  ar: {
    title: 'لقطات من مركزنا',
    lead: 'غرف التصوير والأجهزة ومناطق تحضير المرضى لدينا.',
    countLabel: 'صورة',
    photos: gallery([
      ['غرفة تصوير الطول الكامل', 'أشعة سينية'],
      ['منطقة التحضير للرنين المغناطيسي', 'رنين مغناطيسي'],
      ['وحدة التنظير الفلوري', 'أشعة سينية'],
      ['غرفة التصوير المقطعي المحوسب', 'تصوير مقطعي'],
      ['التصوير المقطعي للأسنان', 'أشعة سينية'],
      ['قياس كثافة العظام', 'أشعة سينية'],
      ['الموجات فوق الصوتية دوبلر', 'موجات فوق صوتية'],
      ['الأشعة البانورامية', 'أشعة سينية'],
      ['وحدة الأشعة السينية الرقمية', 'أشعة سينية'],
      ['تحضير المريض لقياس الكثافة', 'أشعة سينية'],
      ['تصوير الجنف', 'أشعة سينية'],
      ['وحدة تصوير الثدي', 'صحة المرأة'],
    ]),
  },
};

// ------------------------------------------------------------------ contact --
type ContactCopy = {
  title: string;
  lead: string;
  channels: { label: string; value: string; note: string; href: string }[];
  transitTitle: string;
  transitBody: string;
};

const CHANNEL_VALUES = [
  { value: '0212 632 00 00', href: 'tel:+902126320000' },
  { value: '+90 530 237 75 59', href: 'https://wa.me/905302377559' },
  { value: 'iyitem@iyitem.com', href: 'mailto:iyitem@iyitem.com' },
  { value: '0212 589 19 57', href: 'tel:+902125891957' },
];

const channels = (rows: [string, string][]) =>
  rows.map(([label, note], i) => ({ label, note, ...CHANNEL_VALUES[i] }));

export const CONTACT_PAGE: Partial<Record<Locale, ContactCopy>> = {
  tr: {
    title: 'Bize ulaşın',
    lead: 'Randevu, tetkik sonucu veya bilgi almak için aşağıdaki kanallardan bize yazabilirsiniz.',
    channels: channels([
      ['Çağrı merkezi', 'Randevu ve bilgi için'],
      ['WhatsApp', 'Mesajla randevu'],
      ['E-posta', 'Kurumsal yazışma'],
      ['Faks', 'Evrak gönderimi'],
    ]),
    transitTitle: 'Nasıl gelmelisiniz?',
    transitBody:
      'Haritadan yol tarifi alabilir, tetkikinize göre yapmanız gereken hazırlıkları "Nasıl Gelmelisiniz?" sayfasında bulabilirsiniz.',
  },
  en: {
    title: 'Get in touch',
    lead: 'Write to us through any of the channels below for an appointment, a result or information.',
    channels: channels([
      ['Call centre', 'Appointments and information'],
      ['WhatsApp', 'Book by message'],
      ['Email', 'Correspondence'],
      ['Fax', 'Sending documents'],
    ]),
    transitTitle: 'How to get here',
    transitBody:
      'Get directions from the map, and see the "How to Get Here" page for the preparation your examination needs.',
  },
  ar: {
    title: 'تواصل معنا',
    lead: 'راسلنا عبر أي من القنوات أدناه لحجز موعد أو الاستفسار عن نتيجة فحص أو للحصول على معلومات.',
    channels: channels([
      ['مركز الاتصال', 'للمواعيد والمعلومات'],
      ['واتساب', 'الحجز برسالة'],
      ['البريد الإلكتروني', 'المراسلات الرسمية'],
      ['الفاكس', 'إرسال المستندات'],
    ]),
    transitTitle: 'كيف تصل إلينا؟',
    transitBody:
      'يمكنك الحصول على الاتجاهات من الخريطة، وتجد التحضيرات اللازمة لفحصك في صفحة «كيف تصل إلينا؟».',
  },
};

// ------------------------------------------------------------- how to come --
/**
 * Only the preparation the old site actually documented (MR and HSG, from
 * its FAQ and service pages). Anything else is answered by the call centre.
 */
export const DIRECTIONS_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  prepTitle: string;
  prep: { title: string; text: string }[];
  prepNote: string;
}>> = {
  tr: {
    title: 'Nasıl gelmelisiniz?',
    lead: 'Adresimiz, yol tarifi ve tetkikinize göre yapmanız gereken hazırlıklar.',
    prepTitle: 'Tetkikinize göre yapmanız gerekenler',
    prep: [
      {
        title: 'MR (Manyetik Rezonans)',
        text: 'MR çekimi öncesi genelde bir hazırlık gerekmez; açlık ya da tokluk önemli değildir. Damar yolundan kontrast verilecekse, nadiren görülen bulantı ve kusmaya karşı 2–3 saat açlık gerekir. Üst batına yönelik MR çekimlerinde safra kesesinin kasılmasını engellemek için 3–4 saat açlık gerekir.',
      },
      {
        title: 'MR sırasında',
        text: 'MR cihazı büyük bir mıknatıs olduğundan çekim sırasında üzerinizde metal kalmamalıdır. Çekim boyunca, normal nefes alıp verme dışında hareketsiz kalmanız gerekir.',
      },
      {
        title: 'HSG (Histerosalpingografi)',
        text: 'HSG çekimi adet başlangıcından sonraki 8. ile 11. günler arasında yapılır. Adet sonrasından çekime kadar cinsel ilişkiye girilmemesi istenir.',
      },
    ],
    prepNote: 'Diğer tetkikler için hazırlık bilgisini randevu sırasında çağrı merkezimizden alabilirsiniz.',
  },
  en: {
    title: 'How to get here',
    lead: 'Our address, directions and the preparation your examination needs.',
    prepTitle: 'Preparing for your examination',
    prep: [
      {
        title: 'MRI (Magnetic Resonance)',
        text: 'An MRI scan usually needs no preparation, and it does not matter whether you have eaten. If contrast is to be given through a vein, 2–3 hours of fasting is needed as a precaution against the rare nausea and vomiting. For upper-abdominal MRI, 3–4 hours of fasting is needed so that the gallbladder does not contract.',
      },
      {
        title: 'During the MRI',
        text: 'The MRI scanner is a large magnet, so no metal may remain on you during the scan. You need to stay still throughout, apart from normal breathing.',
      },
      {
        title: 'HSG (Hysterosalpingography)',
        text: 'HSG is performed between the 8th and 11th day after the start of your period. You are asked not to have sexual intercourse between the end of your period and the examination.',
      },
    ],
    prepNote: 'For other examinations, our call centre will tell you about preparation when you book.',
  },
  ar: {
    title: 'كيف تصل إلينا؟',
    lead: 'عنواننا والاتجاهات والتحضيرات اللازمة بحسب فحصك.',
    prepTitle: 'ما يلزمك بحسب فحصك',
    prep: [
      {
        title: 'الرنين المغناطيسي (MR)',
        text: 'لا يحتاج تصوير الرنين المغناطيسي عادةً إلى تحضير، ولا يهم إن كنت صائمًا أو لا. إذا كانت مادة التباين ستُعطى عبر الوريد فيلزم صيام 2–3 ساعات احتياطًا من الغثيان والقيء النادرين. وفي تصوير الرنين لأعلى البطن يلزم صيام 3–4 ساعات لمنع انقباض المرارة.',
      },
      {
        title: 'أثناء الرنين المغناطيسي',
        text: 'جهاز الرنين مغناطيس كبير، لذا يجب ألا يبقى عليك أي معدن أثناء التصوير. ويجب أن تبقى ساكنًا طوال التصوير باستثناء التنفس الطبيعي.',
      },
      {
        title: 'تصوير الرحم والبوقين (HSG)',
        text: 'يُجرى تصوير HSG بين اليوم الثامن والحادي عشر من بداية الدورة الشهرية. ويُطلب عدم الجماع من انتهاء الدورة حتى موعد التصوير.',
      },
    ],
    prepNote: 'للفحوص الأخرى، يزوّدك مركز الاتصال بمعلومات التحضير عند حجز الموعد.',
  },
};

// ----------------------------------------------------------------- check-up --
/**
 * The old site names four programmes and asks visitors to call for details;
 * it lists no contents, durations or prices, so neither do we.
 */
export const CHECKUP_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  intro: string;
  packagesTitle: string;
  packages: { title: string }[];
  packageCta: string;
  priceNote: string;
}>> = {
  tr: {
    title: 'Check-Up',
    lead: 'Hastalıklar, erken dönemde bulgu vermeyebilir. Sağlığınızın korunması ve tedavi için erken teşhis önemlidir.',
    intro:
      'Erken teşhis için, ehil ellerde Check-Up yaptırmak en akıllıca yoldur. Check-Up programımızda, laboratuvar destekli görüntüleme merkezi olmanın ayrıcalığıyla size farklı alternatifler sunuyoruz.',
    packagesTitle: 'Check-Up programlarımız',
    packages: [
      { title: 'Ekonomik Check-Up' },
      { title: 'Standart Check-Up' },
      { title: 'Full Check-Up' },
      { title: 'VIP Check-Up' },
    ],
    packageCta: 'Bilgi al',
    priceNote: 'Check-Up programları için merkezimizden detaylı bilgi alabilirsiniz.',
  },
  en: {
    title: 'Check-Up',
    lead: 'Diseases may show no signs in their early stages. Early diagnosis matters for protecting your health and for treatment.',
    intro:
      'Having a check-up in capable hands is the wisest route to early diagnosis. As a laboratory-supported imaging centre, we can offer you a choice of check-up programmes.',
    packagesTitle: 'Our check-up programmes',
    packages: [
      { title: 'Economy Check-Up' },
      { title: 'Standard Check-Up' },
      { title: 'Full Check-Up' },
      { title: 'VIP Check-Up' },
    ],
    packageCta: 'Ask for details',
    priceNote: 'Contact our centre for detailed information on the check-up programmes.',
  },
  ar: {
    title: 'الفحص الشامل',
    lead: 'قد لا تظهر أعراض الأمراض في مراحلها المبكرة. والتشخيص المبكر مهم للحفاظ على صحتك وللعلاج.',
    intro:
      'إجراء فحص شامل على أيدٍ خبيرة هو الطريق الأذكى إلى التشخيص المبكر. وبصفتنا مركز تصوير مدعومًا بالمختبر، نقدّم لك خيارات مختلفة من برامج الفحص الشامل.',
    packagesTitle: 'برامج الفحص الشامل لدينا',
    packages: [
      { title: 'الفحص الشامل الاقتصادي' },
      { title: 'الفحص الشامل القياسي' },
      { title: 'الفحص الشامل الكامل' },
      { title: 'الفحص الشامل VIP' },
    ],
    packageCta: 'اطلب المعلومات',
    priceNote: 'يمكنك الحصول على معلومات مفصّلة عن برامج الفحص الشامل من مركزنا.',
  },
};

// --------------------------------------------------------------- 3 Tesla MR --
type TeslaCopy = {
  title: string;
  lead: string;
  facts: Fact[];
  whyTitle: string;
  whyBody: string;
  advancedTitle: string;
  advanced: { title: string; text: string }[];
  comfortTitle: string;
  comfortBody: string;
  flowTitle: string;
  flow: { no: string; text: string }[];
};

export const TESLA_PAGE: Partial<Record<Locale, TeslaCopy>> = {
  tr: {
    title: '3 Tesla MR',
    lead: 'Siemens Magnetom Vida ile daha detaylı görüntü, daha kısa çekim ve daha konforlu bir deneyim.',
    facts: [
      { value: '3 Tesla', label: 'Siemens Magnetom Vida (2022 model)' },
      { value: '70 cm', label: 'Geniş tüp çapı' },
      { value: '4×', label: 'Yapay zeka ile hızlanan sekanslar' },
      { value: '250 kg', label: 'Taşıma kapasitesi' },
    ],
    whyTitle: 'Neden 3 Tesla?',
    whyBody:
      'Yüksek manyetik alan gücü, sekans sürelerini kısaltırken kesit kalınlığını azaltır ve görüntü netliğini artırır. Anatomi çok daha ayrıntılı değerlendirilebilir; MR spektroskopi çok daha küçük alanlardan yapılabilir, difüzyon tabanlı incelemeler ince kesitlerle gerçekleştirilebilir.',
    advancedTitle: 'İleri incelemeler',
    advanced: [
      { title: 'MR Nörografi', text: 'Periferik sinirlerin yüksek çözünürlükle görüntülenmesi.' },
      { title: 'Fonksiyonel MR', text: 'Beyin fonksiyonlarının haritalanması.' },
      { title: 'MR Spektroskopi', text: 'Küçük alanlardan doku metabolizması analizi.' },
      { title: 'MR Traktografi', text: 'Beyaz cevher yollarının üç boyutlu gösterimi.' },
      { title: 'Multiparametrik Prostat MR', text: 'İnce kesitli, difüzyon destekli prostat değerlendirmesi.' },
      { title: 'Kardiyak MR', text: 'Kalp kası ve fonksiyon değerlendirmesi.' },
      { title: 'MR Enterografi', text: 'İnce bağırsakların kontrastlı incelenmesi.' },
      { title: 'Tüm Vücut MR', text: 'Tarama amaçlı, hızlı tüm vücut protokolü.' },
    ],
    comfortTitle: 'Hasta konforu',
    comfortBody:
      '70 cm’lik geniş tüp çapı, kilolu ve klostrofobi yaşayan hastalar için belirgin fark yaratır. Çekim sırasında televizyon seyredebilir veya müzik dinleyebilirsiniz; gerektiğinde “Sessiz MR” özelliğiyle cihaz sesi belirgin biçimde azaltılır.',
    flowTitle: 'Çekimden rapora',
    flow: [
      { no: '01', text: 'Randevu saatinde gelir, metal içeren eşyalarınızı bırakıp forma geçersiniz.' },
      { no: '02', text: 'Çekim bölgesine göre 10–45 dakika süren sekanslar alınır; hareketsiz kalmanız yeterli.' },
      { no: '03', text: 'Görüntüler iki radyoloji uzmanı tarafından değerlendirilir.' },
      { no: '04', text: 'Raporunuz çoğu durumda aynı gün hazırlanır ve online erişiminize açılır.' },
    ],
  },
  en: {
    title: '3 Tesla MRI',
    lead: 'More detailed images, shorter scans and a more comfortable experience with the Siemens Magnetom Vida.',
    facts: [
      { value: '3 Tesla', label: 'Siemens Magnetom Vida (2022 model)' },
      { value: '70 cm', label: 'Wide bore' },
      { value: '4×', label: 'AI-accelerated sequences' },
      { value: '250 kg', label: 'Table capacity' },
    ],
    whyTitle: 'Why 3 Tesla?',
    whyBody:
      'A higher magnetic field shortens sequence times while reducing slice thickness and sharpening the image. Anatomy can be assessed in far greater detail; MR spectroscopy can be performed on much smaller areas, and diffusion-based examinations can be done with thin slices.',
    advancedTitle: 'Advanced examinations',
    advanced: [
      { title: 'MR Neurography', text: 'High-resolution imaging of the peripheral nerves.' },
      { title: 'Functional MRI', text: 'Mapping of brain function.' },
      { title: 'MR Spectroscopy', text: 'Analysis of tissue metabolism in small areas.' },
      { title: 'MR Tractography', text: 'Three-dimensional display of the white-matter tracts.' },
      { title: 'Multiparametric Prostate MRI', text: 'Thin-slice, diffusion-supported assessment of the prostate.' },
      { title: 'Cardiac MRI', text: 'Assessment of the heart muscle and its function.' },
      { title: 'MR Enterography', text: 'Contrast examination of the small intestine.' },
      { title: 'Whole-Body MRI', text: 'A fast whole-body protocol for screening.' },
    ],
    comfortTitle: 'Patient comfort',
    comfortBody:
      'The 70 cm wide bore makes a clear difference for patients who are overweight or claustrophobic. You can watch television or listen to music during the scan, and when needed the “Silent MRI” feature reduces the scanner noise considerably.',
    flowTitle: 'From scan to report',
    flow: [
      { no: '01', text: 'You arrive at your appointment time, leave anything containing metal and change into a gown.' },
      { no: '02', text: 'Sequences lasting 10–45 minutes are acquired depending on the area scanned; all you need to do is stay still.' },
      { no: '03', text: 'The images are assessed by two radiologists.' },
      { no: '04', text: 'In most cases your report is ready the same day and opened to you online.' },
    ],
  },
  ar: {
    title: 'الرنين المغناطيسي 3 تسلا',
    lead: 'صور أكثر تفصيلًا وتصوير أقصر وتجربة أكثر راحة مع جهاز Siemens Magnetom Vida.',
    facts: [
      { value: '3 تسلا', label: 'Siemens Magnetom Vida (طراز 2022)' },
      { value: '70 سم', label: 'قطر نفق واسع' },
      { value: '4×', label: 'تسلسلات مسرَّعة بالذكاء الاصطناعي' },
      { value: '250 كغ', label: 'قدرة تحمّل الطاولة' },
    ],
    whyTitle: 'لماذا 3 تسلا؟',
    whyBody:
      'تُقصّر قوة المجال المغناطيسي العالية زمن التسلسلات وتقلّل سماكة المقاطع وتزيد وضوح الصورة. فيمكن تقييم التشريح بتفصيل أكبر بكثير، وإجراء مطيافية الرنين على مناطق أصغر بكثير، وإجراء الفحوص القائمة على الانتشار بمقاطع رقيقة.',
    advancedTitle: 'فحوص متقدمة',
    advanced: [
      { title: 'تصوير الأعصاب بالرنين', text: 'تصوير الأعصاب الطرفية بدقة عالية.' },
      { title: 'الرنين الوظيفي', text: 'رسم خرائط وظائف الدماغ.' },
      { title: 'مطيافية الرنين', text: 'تحليل استقلاب الأنسجة في مناطق صغيرة.' },
      { title: 'تتبّع الألياف بالرنين', text: 'عرض ثلاثي الأبعاد لمسارات المادة البيضاء.' },
      { title: 'رنين البروستاتا متعدد المعايير', text: 'تقييم البروستاتا بمقاطع رقيقة مدعومة بالانتشار.' },
      { title: 'رنين القلب', text: 'تقييم عضلة القلب ووظيفتها.' },
      { title: 'تصوير الأمعاء بالرنين', text: 'فحص الأمعاء الدقيقة بمادة التباين.' },
      { title: 'رنين الجسم كاملًا', text: 'بروتوكول سريع للجسم كاملًا لغرض الكشف.' },
    ],
    comfortTitle: 'راحة المريض',
    comfortBody:
      'يُحدث قطر النفق الواسع البالغ 70 سم فرقًا واضحًا للمرضى ذوي الوزن الزائد ومن يعانون رهاب الأماكن المغلقة. يمكنك مشاهدة التلفاز أو الاستماع إلى الموسيقى أثناء التصوير، وعند الحاجة تخفّض ميزة «الرنين الصامت» صوت الجهاز بشكل ملحوظ.',
    flowTitle: 'من التصوير إلى التقرير',
    flow: [
      { no: '01', text: 'تحضر في موعدك، وتترك الأغراض التي تحتوي على معدن وترتدي الرداء.' },
      { no: '02', text: 'تُلتقط تسلسلات تستغرق 10–45 دقيقة بحسب منطقة التصوير، ويكفي أن تبقى ساكنًا.' },
      { no: '03', text: 'يقيّم الصور طبيبا أشعة.' },
      { no: '04', text: 'يكون تقريرك جاهزًا في اليوم نفسه غالبًا ويُتاح لك إلكترونيًا.' },
    ],
  },
};

// --------------------------------------------------------------- 404 / misc --
export const NOTFOUND_LINKS: Partial<Record<Locale, { title: string; desc: string; href: string }[]>> = {
  tr: [
    { title: 'Hizmetlerimiz', desc: '15 görüntüleme hizmetinin tamamı', href: '/hizmetlerimiz/' },
    { title: 'Online Randevu', desc: 'Formu doldurun, sizi arayalım', href: '/iletisim/#randevu' },
    { title: 'Online Film-Rapor', desc: 'Hasta ve doktor girişi', href: '/online-hizmetler/online-rapor/' },
    { title: 'Cihazlarımız', desc: '3 Tesla MR, 128 kesit BT ve diğerleri', href: '/cihazlarimiz/' },
    { title: 'Sıkça Sorulan Sorular', desc: 'Hazırlık, süre ve rapor süreci', href: '/sikca-sorulan-sorular/' },
    { title: 'İletişim', desc: 'Adres, harita ve çalışma saatleri', href: '/iletisim/' },
  ],
};

// ------------------------------------------------------- patient rights tabs --
type RightsCopy = {
  title: string;
  lead: string;
  tabRights: string;
  tabKvkk: string;
  unitTitle: string;
  unitBody: string;
  controllerTitle: string;
  docs: { title: string; href: string }[];
};

const KVKK_PDFS = [
  '/media/2022/11/iyitem_KVKK_politikasi.pdf',
  '/media/2022/11/iyitem_imha_saklama_politikasi.pdf',
  '/media/2022/11/iyitem_veri_sahibi_basvuru_formu.pdf',
];

const docs = (titles: string[]) => titles.map((title, i) => ({ title, href: KVKK_PDFS[i] }));

export const RIGHTS_PAGE: Partial<Record<Locale, RightsCopy>> = {
  tr: {
    title: 'Hasta Hakları ve KVKK',
    lead: 'Haklarınız ve kişisel verilerinizin nasıl işlendiği hakkında bilmeniz gerekenler.',
    tabRights: 'Hasta Hakları',
    tabKvkk: 'KVKK Aydınlatma Metni',
    unitTitle: 'Hasta hakları birimi',
    unitBody:
      'Görüş, öneri ve şikâyetlerinizi çağrı merkezimize iletebilir veya Dilek ve Öneriler formunu doldurabilirsiniz. Başvurularınız değerlendirilip size geri dönüş yapılır.',
    controllerTitle: 'Veri sorumlusu',
    docs: docs([
      'İyitem Kişisel Verilerin Korunması ve İşlenmesi Politikası',
      'Kişisel Veri Saklama ve İmha Politikası',
      'Veri Sahibi Başvuru Formu',
    ]),
  },
  en: {
    title: 'Patient Rights and Data Protection',
    lead: 'What you should know about your rights and how your personal data is processed.',
    tabRights: 'Patient Rights',
    tabKvkk: 'KVKK Privacy Notice',
    unitTitle: 'Patient rights unit',
    unitBody:
      'You can pass your views, suggestions and complaints to our call centre or fill in the Suggestions form. Your application is reviewed and we get back to you.',
    controllerTitle: 'Data controller',
    docs: docs([
      'İyitem Personal Data Protection and Processing Policy (Turkish)',
      'Personal Data Retention and Destruction Policy (Turkish)',
      'Data Subject Application Form (Turkish)',
    ]),
  },
  ar: {
    title: 'حقوق المرضى وحماية البيانات',
    lead: 'ما ينبغي أن تعرفه عن حقوقك وكيفية معالجة بياناتك الشخصية.',
    tabRights: 'حقوق المرضى',
    tabKvkk: 'إشعار حماية البيانات (KVKK)',
    unitTitle: 'وحدة حقوق المرضى',
    unitBody:
      'يمكنك إبلاغ مركز الاتصال لدينا بآرائك واقتراحاتك وشكاواك، أو تعبئة نموذج الاقتراحات. تُدرس طلباتك ونعود إليك بالرد.',
    controllerTitle: 'المسؤول عن البيانات',
    docs: docs([
      'سياسة إييتم لحماية البيانات الشخصية ومعالجتها (بالتركية)',
      'سياسة حفظ البيانات الشخصية وإتلافها (بالتركية)',
      'نموذج طلب صاحب البيانات (بالتركية)',
    ]),
  },
};

// ------------------------------------------------------------------ feedback --
type FeedbackCopy = {
  title: string;
  lead: string;
  kinds: string[];
  units: string[];
  stepsTitle: string;
  steps: Numbered[];
  urgentTitle: string;
  urgentBody: string;
};

export const FEEDBACK_PAGE: Partial<Record<Locale, FeedbackCopy>> = {
  tr: {
    title: 'Dilek ve Önerileriniz',
    lead: 'Düşünceleriniz bizim için çok değerli. Birkaç dakikanızı ayırarak size daha iyi bir hizmet sunmamıza yardımcı olabilirsiniz.',
    kinds: ['Öneri', 'Teşekkür', 'Şikâyet', 'Bilgi talebi'],
    units: ['Genel', 'Randevu / çağrı merkezi', 'Karşılama ve kayıt', 'Çekim (teknisyen)', 'Raporlama', 'Faturalandırma'],
    stepsTitle: 'Geri bildirim nasıl işleniyor?',
    steps: [
      { no: '01', title: 'Kayıt', text: 'Formunuz hasta hakları birimine iletilir ve kayıt altına alınır.' },
      { no: '02', title: 'Değerlendirme', text: 'İlgili birim sorumlusuyla birlikte değerlendirilir.' },
      { no: '03', title: 'Geri dönüş', text: 'İletişim bilgisi bıraktıysanız sonucu size bildiririz.' },
    ],
    urgentTitle: 'Acele eden bir durum mu var?',
    urgentBody: 'Çağrı merkezimizi arayın; randevu ve tetkik sonucuyla ilgili konularda telefonda daha hızlı yardımcı olabiliriz.',
  },
  en: {
    title: 'Suggestions and Feedback',
    lead: 'Your thoughts matter to us. Taking a few minutes helps us serve you better.',
    kinds: ['Suggestion', 'Thanks', 'Complaint', 'Request for information'],
    units: ['General', 'Appointments / call centre', 'Reception and registration', 'Scanning (technician)', 'Reporting', 'Billing'],
    stepsTitle: 'How is feedback handled?',
    steps: [
      { no: '01', title: 'Recorded', text: 'Your form is passed to the patient rights unit and recorded.' },
      { no: '02', title: 'Reviewed', text: 'It is reviewed together with the head of the unit concerned.' },
      { no: '03', title: 'Reply', text: 'If you left contact details, we let you know the outcome.' },
    ],
    urgentTitle: 'Is it urgent?',
    urgentBody: 'Call our call centre; for appointments and results we can help you faster by phone.',
  },
  ar: {
    title: 'اقتراحاتكم وملاحظاتكم',
    lead: 'آراؤكم قيّمة جدًا لنا. خصّصوا بضع دقائق لتساعدونا على تقديم خدمة أفضل لكم.',
    kinds: ['اقتراح', 'شكر', 'شكوى', 'طلب معلومات'],
    units: ['عام', 'المواعيد / مركز الاتصال', 'الاستقبال والتسجيل', 'التصوير (الفني)', 'إعداد التقارير', 'الفوترة'],
    stepsTitle: 'كيف تُعالَج الملاحظات؟',
    steps: [
      { no: '01', title: 'التسجيل', text: 'يُحال نموذجك إلى وحدة حقوق المرضى ويُسجَّل.' },
      { no: '02', title: 'الدراسة', text: 'يُدرس بالتعاون مع مسؤول الوحدة المعنية.' },
      { no: '03', title: 'الرد', text: 'إذا تركت بيانات للتواصل، نُعلمك بالنتيجة.' },
    ],
    urgentTitle: 'هل الأمر مستعجل؟',
    urgentBody: 'اتصل بمركز الاتصال لدينا؛ يمكننا مساعدتك هاتفيًا بشكل أسرع في ما يخص المواعيد ونتائج الفحوص.',
  },
};
