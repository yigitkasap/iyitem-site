import type { Locale } from '@/lib/site';

/**
 * Inner-page copy from the 2026 redesign prototypes, Turkish verbatim.
 *
 * Pages added by the redesign (Check-up, Nasıl Gelmelisiniz, 3 Tesla MR…) exist
 * only in Turkish for now; `pick()` falls back to Turkish so every locale still
 * renders. Those strings are the remaining translation task — see
 * TRANSLATION-NOTES.md.
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
export const ABOUT_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  facts: Fact[];
  principlesTitle: string;
  principles: { no: string; text: string }[];
  devicesTitle: string;
  devices: { name: string; note: string }[];
  ctaTitle: string;
  ctaBody: string;
}>> = {
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
      { name: 'Siemens Magnetom Vida', note: '3 Tesla MR' },
      { name: 'GE Revolution Maxima', note: '128 kesit BT' },
      { name: 'Canon i800', note: 'Doppler ultrasonografi' },
      { name: 'GMM Opera T', note: 'Floroskopili dijital röntgen' },
      { name: 'Fuji Amulet', note: 'Dijital mamografi' },
      { name: 'Kavo OP 300 · DMS Stratos', note: 'Dental tomografi · kemik dansitometri' },
    ],
    ctaTitle: 'Tetkikiniz için randevu alın',
    ctaBody: 'Uygun saati telefonda birlikte belirleyelim; acele eden durumlar için doğrudan arayabilirsiniz.',
  },
};

// ------------------------------------------------------------------ devices --
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
      'mr-3-tesla-siemens-optima-360': ['70 cm geniş tüp', 'Sessiz MR modu', 'Yapay zeka destekli kısa sekans'],
      'multislice-bt-ge-elite': ['128 kesit', 'Düşük doz protokolleri', 'Anjiyografik çekimler'],
      'i800-doppler-ultrasonografi-canon': ['Renkli Doppler', 'Yüzeyel doku probları', 'Elastografi'],
      'dijital-rontgen-gmm': ['Floroskopi', 'Tek poz boy grafisi', 'Anında dijital görüntü'],
      'dijital-mammografi-fuji-amulet': ['Düşük doz', 'Yüksek çözünürlük', 'Tarama + tanısal'],
      '3-boyutlu-dental-tomografi-kavo': ['3B dental tomografi', 'Dijital panoramik', 'Düşük doz'],
      'kemik-dansitometri-dms': ['DXA ölçümü', 'Osteoporoz takibi', 'Kısa çekim süresi'],
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
};

// -------------------------------------------------------------- online report --
export const REPORT_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  portals: { key: 'patient' | 'doctor'; tag: string; title: string; desc: string; cta: string }[];
  warning: string;
  stepsTitle: string;
  steps: Numbered[];
  faq: { q: string; a: string }[];
  supportTitle: string;
  supportBody: string;
}>> = {
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
};

// ------------------------------------------------------------------ gallery --
export const GALLERY_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  countLabel: string;
  photos: { src: string; caption: string; cat: string }[];
}>> = {
  tr: {
    title: 'Merkezimizden kareler',
    lead: 'Çekim odalarımız, cihazlarımız ve hasta hazırlık alanlarımız.',
    countLabel: 'fotoğraf',
    photos: [
      { src: '/assets/gal/1.webp', caption: 'Boy grafisi çekim odası', cat: 'Röntgen' },
      { src: '/assets/gal/2.webp', caption: 'MR hazırlık alanı', cat: 'MR' },
      { src: '/assets/gal/3.webp', caption: 'Floroskopi ünitesi', cat: 'Röntgen' },
      { src: '/assets/gal/4.webp', caption: 'Bilgisayarlı tomografi odası', cat: 'BT' },
      { src: '/assets/gal/5.webp', caption: 'Dental tomografi çekimi', cat: 'Röntgen' },
      { src: '/assets/gal/6.webp', caption: 'Kemik dansitometri ölçümü', cat: 'Röntgen' },
      { src: '/assets/gal/7.webp', caption: 'Doppler ultrasonografi', cat: 'Ultrason' },
      { src: '/assets/gal/8.webp', caption: 'Panoramik röntgen', cat: 'Röntgen' },
      { src: '/assets/gal/9.webp', caption: 'Dijital röntgen ünitesi', cat: 'Röntgen' },
      { src: '/assets/gal/10.webp', caption: 'Dansitometri hasta hazırlığı', cat: 'Röntgen' },
      { src: '/assets/gal/11.webp', caption: 'Skolyoz grafisi çekimi', cat: 'Röntgen' },
      { src: '/assets/gal/12.webp', caption: 'Mamografi ünitesi', cat: 'Kadın sağlığı' },
    ],
  },
};

// ------------------------------------------------------------------ contact --
export const CONTACT_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  channels: { label: string; value: string; note: string; href: string }[];
  transitTitle: string;
  transitBody: string;
}>> = {
  tr: {
    title: 'Bize ulaşın',
    lead: 'Randevu, tetkik sonucu veya bilgi almak için aşağıdaki kanallardan bize yazabilirsiniz.',
    channels: [
      { label: 'Çağrı merkezi', value: '0212 632 00 00', note: 'Randevu ve bilgi için', href: 'tel:+902126320000' },
      { label: 'WhatsApp', value: '+90 530 237 75 59', note: 'Mesajla randevu', href: 'https://wa.me/905302377559' },
      { label: 'E-posta', value: 'iyitem@iyitem.com', note: 'Kurumsal yazışma', href: 'mailto:iyitem@iyitem.com' },
      { label: 'Faks', value: '0212 589 19 57', note: 'Evrak gönderimi', href: 'tel:+902125891957' },
    ],
    transitTitle: 'Toplu taşıma ile',
    transitBody:
      'Aksaray metro (M1A/M1B) ve Yusufpaşa tramvay (T1) duraklarından yürüme mesafesindeyiz. Ayrıntılar için "Nasıl Gelmelisiniz?" sayfasına bakabilirsiniz.',
  },
};

// ------------------------------------------------------------- how to come --
export const DIRECTIONS_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  routes: { mode: string; title: string; text: string }[];
  prepTitle: string;
  prep: { title: string; text: string }[];
  bringTitle: string;
  bring: string[];
  draft: boolean;
}>> = {
  tr: {
    title: 'Nasıl gelmelisiniz?',
    lead: 'Ulaşım seçenekleri ve tetkikinize göre yapmanız gereken hazırlıklar.',
    routes: [
      { mode: 'Metro', title: 'Aksaray (M1A/M1B)', text: 'Aksaray metro istasyonundan çıkıp Dr. Adnan Adıvar Caddesi yönünde yaklaşık 8 dakika yürüyerek merkezimize ulaşabilirsiniz.' },
      { mode: 'Tramvay', title: 'Yusufpaşa / Aksaray (T1)', text: 'T1 Kabataş–Bağcılar hattında Yusufpaşa durağında inip Haseki yönüne yürüyebilirsiniz.' },
      { mode: 'Otobüs', title: 'Haseki durağı', text: 'Fatih ve Aksaray üzerinden geçen hatlar Haseki Eğitim ve Araştırma Hastanesi önünde durur; merkezimiz hastanenin yanındadır.' },
      { mode: 'Özel araç', title: 'Otopark', text: 'Cadde üzerinde ve çevre sokaklarda ücretli otopark bulunur; yoğun saatlerde toplu taşımayı öneriyoruz.' },
    ],
    prepTitle: 'Tetkikinize göre yapmanız gerekenler',
    prep: [
      { title: 'MR (Manyetik Rezonans)', text: "Genelde özel hazırlık gerekmez; damardan kontrast verilecekse 2–3 saat açlık istenir. Üst batın MR'da safra kesesinin kasılmaması için 3–4 saat açlık gerekir. Üzerinizde metal takı, saat ve kart bulundurmayın." },
      { title: 'BT (Tomografi)', text: 'Kontrastlı çekimlerde 4 saat açlık ve güncel kreatinin (böbrek) değeri istenir. Çekim 10–15 saniyede tamamlanır.' },
      { title: 'Ultrasonografi', text: 'Batın ultrasonunda 6–8 saat açlık; idrar yolları ve pelvik incelemede dolu mesane gerekir.' },
      { title: 'Mamografi', text: 'Adet döneminin ilk haftasından sonraki günler tercih edilir. Çekim günü deodorant ve pudra kullanmayın.' },
      { title: 'Kemik dansitometri', text: 'Özel hazırlık gerekmez; kalsiyum takviyesi alıyorsanız çekim günü almayınız. Metal düğme/toka içermeyen kıyafet tercih edin.' },
    ],
    bringTitle: 'Yanınızda getirin',
    bring: [
      'Kimlik belgeniz (T.C. kimlik / pasaport)',
      'Doktorunuzun tetkik istem belgesi',
      'Varsa önceki film ve raporlarınız',
      'Kullandığınız ilaçların listesi',
      'Sigorta / kurum bilgileriniz',
    ],
    draft: true,
  },
};

// ----------------------------------------------------------------- check-up --
export const CHECKUP_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  packages: { tag: string; title: string; desc: string; items: string[]; note: string; featured?: boolean }[];
  stepsTitle: string;
  steps: Numbered[];
  faq: { q: string; a: string }[];
  priceNote: string;
  draft: boolean;
}>> = {
  tr: {
    title: 'Check-up paketleri',
    lead: 'Yaşınıza ve risklerinize göre hazırlanmış, tek günde tamamlanan görüntüleme paketleri.',
    packages: [
      {
        tag: 'Temel tarama',
        title: 'Genel Görüntüleme Check-up',
        desc: 'İlk kez check-up yaptıracaklar için temel tarama paketi.',
        items: ['Batın ultrasonografi', 'Akciğer grafisi', 'Tiroid ultrasonografi', 'Radyoloji uzmanı değerlendirmesi'],
        note: 'Yaklaşık süre: 1 saat · Açlık gerekir',
      },
      {
        tag: '40 yaş üstü',
        title: 'Kadın Sağlığı Check-up',
        desc: 'Meme ve kemik sağlığı odaklı, kadınlara yönelik kapsamlı paket.',
        items: ['Dijital mamografi', 'Meme ultrasonografi', 'Kemik dansitometri (DXA)', 'Tiroid ve batın ultrasonografi', 'Çifte kontrollü raporlama'],
        note: 'Yaklaşık süre: 1.5 saat · Adet döneminin ilk haftasından sonra önerilir',
        featured: true,
      },
      {
        tag: '40 yaş üstü',
        title: 'Erkek Sağlığı Check-up',
        desc: 'Prostat ve batın odaklı, ileri görüntülemeyle desteklenen paket.',
        items: ['Multiparametrik prostat MR', 'Batın ultrasonografi', 'Akciğer grafisi', 'Kemik dansitometri (DXA)', 'Çifte kontrollü raporlama'],
        note: 'Yaklaşık süre: 2 saat · MR için 2–3 saat açlık',
      },
      {
        tag: 'İleri düzey',
        title: 'Nöro & Kas-İskelet Check-up',
        desc: 'Baş ağrısı, baş dönmesi ve eklem şikâyetleri olanlar için 3 Tesla MR paketi.',
        items: ['Beyin MR (3 Tesla)', 'Boyun / bel MR', 'İlgili eklem MR', 'Karotis Doppler ultrasonografi', 'Nöroradyoloji değerlendirmesi'],
        note: 'Yaklaşık süre: 2 saat · Metal implant bilgisi gerekir',
      },
    ],
    stepsTitle: 'Check-up gününüz',
    steps: [
      { no: '01', title: 'Ön görüşme', text: 'Şikâyetiniz, yaşınız ve aile öykünüze göre uygun paketi telefonda birlikte belirliyoruz.' },
      { no: '02', title: 'Tetkikler', text: 'Randevu saatinde gelir, tüm görüntülemeleri aynı gün tek merkezde tamamlarsınız.' },
      { no: '03', title: 'Rapor ve yönlendirme', text: 'Raporlarınız iki radyoloji uzmanının kontrolünden geçer, online erişiminize açılır.' },
    ],
    faq: [
      { q: 'Check-up paketleri için sevk veya doktor istemi gerekiyor mu?', a: 'Gerekmiyor; doğrudan randevu alabilirsiniz. Elinizde doktor istemi varsa paketi ona göre uyarlıyoruz.' },
      { q: 'Tüm tetkikler aynı gün bitiyor mu?', a: 'Evet, paketlerdeki görüntülemeler aynı gün planlanır. Yalnızca yoğun ilaçlı MR programlarında ikinci bir gün gerekebilir.' },
      { q: 'Sonuçları kim değerlendiriyor?', a: 'Tüm görüntüler radyoloji uzmanlarımız tarafından raporlanır ve çifte kontrolden geçer. Raporunuzu hekiminizle paylaşabilirsiniz.' },
      { q: 'Paket içeriği değiştirilebilir mi?', a: 'Evet. Şikâyetinize ve hekiminizin isteğine göre paket içeriğini birlikte uyarlayabiliriz.' },
    ],
    priceNote:
      'Paket içerikleri ve güncel fiyat bilgisi için çağrı merkezimizi arayın. İçerikler hekim değerlendirmesine göre uyarlanabilir.',
    draft: true,
  },
};

// --------------------------------------------------------------- 3 Tesla MR --
export const TESLA_PAGE: Partial<Record<Locale, {
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
}>> = {
  tr: {
    title: '3 Tesla MR',
    lead: 'Siemens Magnetom Vida ile daha detaylı görüntü, daha kısa çekim ve daha konforlu bir deneyim.',
    facts: [
      { value: '3 Tesla', label: 'Siemens Magnetom Vida (2022 model)' },
      { value: '70 cm', label: 'Geniş tüp çapı' },
      { value: '4×', label: 'Yapay zekâ ile hızlanan sekanslar' },
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
export const RIGHTS_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  tabRights: string;
  tabKvkk: string;
  unitTitle: string;
  unitBody: string;
  controllerTitle: string;
  docs: { title: string; href: string }[];
}>> = {
  tr: {
    title: 'Hasta Hakları ve KVKK',
    lead: 'Haklarınız ve kişisel verilerinizin nasıl işlendiği hakkında bilmeniz gerekenler.',
    tabRights: 'Hasta Hakları',
    tabKvkk: 'KVKK Aydınlatma Metni',
    unitTitle: 'Hasta hakları birimi',
    unitBody:
      'Görüş, öneri ve şikâyetlerinizi çağrı merkezimize iletebilir veya Dilek ve Öneriler formunu doldurabilirsiniz. Başvurularınız değerlendirilip size geri dönüş yapılır.',
    controllerTitle: 'Veri sorumlusu',
    docs: [
      { title: 'İyitem Kişisel Verilerin Korunması ve İşlenmesi Politikası', href: '/media/2022/11/iyitem_KVKK_politikasi.pdf' },
      { title: 'Kişisel Veri Saklama ve İmha Politikası', href: '/media/2022/11/iyitem_imha_saklama_politikasi.pdf' },
      { title: 'Veri Sahibi Başvuru Formu', href: '/media/2022/11/iyitem_veri_sahibi_basvuru_formu.pdf' },
    ],
  },
};

// ------------------------------------------------------------------ feedback --
export const FEEDBACK_PAGE: Partial<Record<Locale, {
  title: string;
  lead: string;
  kinds: string[];
  units: string[];
  stepsTitle: string;
  steps: Numbered[];
  urgentTitle: string;
  urgentBody: string;
}>> = {
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
};
