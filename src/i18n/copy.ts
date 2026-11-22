import type { Locale } from '@/lib/site';

/**
 * Page-level marketing copy from the 2026 redesign.
 *
 * Turkish is taken verbatim from the handoff prototypes. English and Arabic are
 * translations made during the rebuild and are marked draft in
 * TRANSLATION-NOTES.md — they carry no clinical claims the Turkish does not.
 */

type Slide = { tag: string; title: string; body: string };
type Stat = { value: string; label: string };
type Quote = { text: string; name: string; meta: string };

export type HomeCopy = {
  slides: Slide[];
  brandsLabel: string;
  about: { title: string; body: string; stats: Stat[]; imageAlt: string };
  services: { title: string };
  doctors: { label: string; title: string; body: string };
  reportCard: { title: string; body: string };
  quotesLabel: string;
  quotes: Quote[];
  postsTitle: string;
  appointment: { label: string; title: string; body: string };
};

export const HOME: Record<Locale, HomeCopy> = {
  tr: {
    slides: [
      {
        tag: 'Konforlu çekim',
        title: 'Geniş tüp çapı, daha rahat bir MR deneyimi',
        body: "3 Tesla Vida'nın geniş açıklığı sayesinde kilolu ve klostrofobi yaşayan hastalarımız çekimi daha rahat tamamlıyor.",
      },
      {
        tag: 'Hızlı sonuç',
        title: 'Kısa çekim süresi, aynı gün raporunuz',
        body: 'Yüksek alan gücü sekans sürelerini kısaltıyor; tetkikiniz aynı gün raporlanıp online erişiminize açılıyor.',
      },
      {
        tag: '30 yıllık deneyim',
        title: 'İki radyoloji uzmanının çifte kontrolü',
        body: "Her görüntüleme, kendi alanında uzman iki hekim tarafından ayrı ayrı değerlendirilir. 1995'ten bu yana değişmeyen standardımız.",
      },
    ],
    brandsLabel: 'Cihaz altyapımız',
    about: {
      title: "İyi hizmeti uygun fiyata, 1995'ten beri aynı özenle",
      body: 'Siemens 3 Tesla Vida MR, GE 128 kesit Revolution Maxima BT, Canon i800 Doppler ultrasonografi, GMM floroskopili dijital röntgen, DMS kemik dansitometri ve Kavo dental tomografi cihazlarımızla; iki radyoloji uzmanımızın çifte kontrolünde güvenilir hizmet veriyoruz.',
      stats: [
        { value: '1995', label: 'kuruluş' },
        { value: '3 Tesla', label: 'Siemens MR' },
        { value: '2 uzman', label: 'çifte kontrol' },
      ],
      imageAlt: 'İyitem Görüntüleme Merkezi ekibi',
    },
    services: { title: 'Tüm görüntüleme ihtiyaçlarınız için kapsamlı çözümler' },
    doctors: {
      label: 'Çifte kontrol',
      title: 'Her görüntüleme, iki ayrı radyoloji uzmanı tarafından değerlendirilir',
      body: 'Tüm hastalarımızın görüntüleri deneyimli doktorlarımız tarafından özenle raporlanır. İki ayrı uzman tarafından yapılan çifte kontrol, standardımızdır.',
    },
    reportCard: {
      title: 'Raporunuza her yerden ulaşın',
      body: 'Film ve raporlarınız PACS sisteminde arşivlenir; hasta veya doktor girişiyle görüntüleyebilirsiniz.',
    },
    quotesLabel: 'Hasta yorumları',
    quotes: [
      {
        text: 'Tecrübeli doktorları, güler yüzlü ekibiyle içeri girer girmez özel hissettiren bir kurum. İlgileri için ayrıca teşekkür ederim.',
        name: 'Yıldız Ahmetoğlu',
        meta: 'MR · Google yorumu',
      },
      {
        text: 'Randevu saatinde içeri alındım, çekim 15 dakikada bitti ve raporum aynı gün elimdeydi. Doktoruma hemen iletebildim.',
        name: 'Murat K.',
        meta: 'BT · Google yorumu',
      },
      {
        text: 'Klostrofobim olduğu için çok tedirgindim. Teknisyen hanım her aşamayı anlattı, geniş cihazda hiç sıkıntı yaşamadım.',
        name: 'Elif S.',
        meta: 'MR · Google yorumu',
      },
      {
        text: 'Annemin kemik ölçümü için gittik. Yaşlı hastaya gösterilen sabır ve ilgi gerçekten örnek olacak düzeydeydi.',
        name: 'Hakan Demirtaş',
        meta: 'Kemik dansitometri · Google yorumu',
      },
    ],
    postsTitle: 'Son Makaleler',
    appointment: {
      label: 'Online randevu',
      title: 'Randevunuzu iki dakikada oluşturun',
      body: 'Formu gönderin, uygun saati telefonda birlikte belirleyelim. Acele eden durumlar için doğrudan arayabilirsiniz.',
    },
  },

  en: {
    slides: [
      {
        tag: 'A comfortable scan',
        title: 'A wider bore, a more comfortable MRI',
        body: "The Vida 3 Tesla's wide opening lets patients who are heavier or claustrophobic get through the scan far more comfortably.",
      },
      {
        tag: 'Fast results',
        title: 'Short scans, your report the same day',
        body: 'High field strength shortens sequence times; your examination is reported the same day and opened to you online.',
      },
      {
        tag: '30 years of experience',
        title: 'Double-checked by two radiologists',
        body: 'Every scan is assessed separately by two specialist physicians — a standard that has not changed since 1995.',
      },
    ],
    brandsLabel: 'Our equipment',
    about: {
      title: 'Good care at a fair price, with the same attention since 1995',
      body: 'With our Siemens 3 Tesla Vida MRI, GE 128-slice Revolution Maxima CT, Canon i800 Doppler ultrasound, GMM digital X-ray with fluoroscopy, DMS bone densitometry and KaVo dental CT, we deliver care you can rely on — double-checked by our two radiologists.',
      stats: [
        { value: '1995', label: 'founded' },
        { value: '3 Tesla', label: 'Siemens MRI' },
        { value: '2 specialists', label: 'double check' },
      ],
      imageAlt: 'The İyitem Imaging Centre team',
    },
    services: { title: 'Comprehensive solutions for all your imaging needs' },
    doctors: {
      label: 'Double check',
      title: 'Every scan is assessed by two separate radiologists',
      body: "Every patient's images are reported with care by our experienced physicians. A double check by two separate specialists is our standard.",
    },
    reportCard: {
      title: 'Reach your report from anywhere',
      body: 'Your images and reports are archived in the PACS system and can be viewed through the patient or physician login.',
    },
    quotesLabel: 'Patient reviews',
    quotes: [
      {
        text: 'Experienced doctors and a welcoming team — a place that makes you feel looked after the moment you walk in. Thank you for your care.',
        name: 'Yıldız Ahmetoğlu',
        meta: 'MRI · Google review',
      },
      {
        text: 'I was taken in at my appointment time, the scan was over in 15 minutes and I had my report the same day. I could send it straight to my doctor.',
        name: 'Murat K.',
        meta: 'CT · Google review',
      },
      {
        text: 'I was very anxious because of my claustrophobia. The technician explained every step, and I had no trouble at all in the wide scanner.',
        name: 'Elif S.',
        meta: 'MRI · Google review',
      },
      {
        text: 'We went for my mother’s bone density scan. The patience and attention shown to an elderly patient were genuinely exemplary.',
        name: 'Hakan Demirtaş',
        meta: 'Bone densitometry · Google review',
      },
    ],
    postsTitle: 'Latest Articles',
    appointment: {
      label: 'Online appointment',
      title: 'Book your appointment in two minutes',
      body: 'Send the form and we will agree a suitable time with you by phone. For anything urgent, call us directly.',
    },
  },

  ar: {
    slides: [
      {
        tag: 'فحص مريح',
        title: 'نفق أوسع وتجربة رنين مغناطيسي أكثر راحة',
        body: 'يتيح الاتساع الكبير في جهاز فيدا 3 تسلا للمرضى ذوي الوزن الزائد والمصابين برهاب الأماكن المغلقة إتمام الفحص براحة أكبر بكثير.',
      },
      {
        tag: 'نتائج سريعة',
        title: 'فحص قصير وتقريرك في اليوم نفسه',
        body: 'تختصر شدة المجال العالية مدة التسلسلات؛ ويُعدّ تقرير فحصك في اليوم نفسه ويُتاح لك إلكترونيًا.',
      },
      {
        tag: 'خبرة 30 عامًا',
        title: 'فحص مزدوج من طبيبَي أشعة',
        body: 'يُقيَّم كل فحص تصويري على حدة من طبيبين متخصصين — معيار لم يتغيّر منذ عام 1995.',
      },
    ],
    brandsLabel: 'بنيتنا التقنية',
    about: {
      title: 'خدمة جيدة بسعر مناسب، وبالعناية نفسها منذ 1995',
      body: 'بأجهزتنا: سيمنس فيدا 3 تسلا للرنين المغناطيسي، وجنرال إلكتريك ريفولوشن ماكسيما بـ128 شريحة للتصوير المقطعي، وكانون i800 لتصوير دوبلر، وجهاز GMM للأشعة الرقمية المزوّد بالتنظير الفلوري، وDMS لقياس كثافة العظام، وكافو للتصوير المقطعي للأسنان؛ نقدّم خدمة جديرة بالثقة تحت الفحص المزدوج لطبيبَي الأشعة لدينا.',
      stats: [
        { value: '1995', label: 'سنة التأسيس' },
        { value: '3 تسلا', label: 'رنين سيمنس' },
        { value: 'طبيبان', label: 'فحص مزدوج' },
      ],
      imageAlt: 'فريق مركز إيتيم للتصوير',
    },
    services: { title: 'حلول شاملة لجميع احتياجاتكم من التصوير الطبي' },
    doctors: {
      label: 'الفحص المزدوج',
      title: 'يُقيَّم كل فحص تصويري من طبيبَي أشعة منفصلين',
      body: 'تُقرأ صور جميع مرضانا بعناية على يد أطبائنا ذوي الخبرة. والفحص المزدوج من طبيبين منفصلين هو معيارنا.',
    },
    reportCard: {
      title: 'اطّلع على تقريرك من أي مكان',
      body: 'تُحفظ صورك وتقاريرك في نظام PACS، ويمكن الاطلاع عليها عبر دخول المريض أو الطبيب.',
    },
    quotesLabel: 'آراء المرضى',
    quotes: [
      {
        text: 'أطباء ذوو خبرة وفريق لطيف — مكان يشعرك بالعناية منذ لحظة دخولك. شكرًا لكم على اهتمامكم.',
        name: 'يلدز أحمد أوغلو',
        meta: 'رنين مغناطيسي · تقييم غوغل',
      },
      {
        text: 'دخلت في موعدي تمامًا، وانتهى الفحص خلال 15 دقيقة، وتسلّمت تقريري في اليوم نفسه فأرسلته فورًا إلى طبيبي.',
        name: 'مراد ك.',
        meta: 'تصوير مقطعي · تقييم غوغل',
      },
      {
        text: 'كنت قلقة جدًا بسبب رهاب الأماكن المغلقة. شرحت لي الفنية كل خطوة، ولم أواجه أي صعوبة في الجهاز الواسع.',
        name: 'أليف س.',
        meta: 'رنين مغناطيسي · تقييم غوغل',
      },
      {
        text: 'ذهبنا لقياس كثافة عظام والدتي. كان الصبر والاهتمام تجاه مريضة مسنّة مثاليًا بحق.',
        name: 'هاكان دميرتاش',
        meta: 'قياس كثافة العظام · تقييم غوغل',
      },
    ],
    postsTitle: 'أحدث المقالات',
    appointment: {
      label: 'حجز موعد إلكتروني',
      title: 'احجز موعدك في دقيقتين',
      body: 'أرسل النموذج وسنتفق معك هاتفيًا على الوقت المناسب. وللحالات المستعجلة يمكنك الاتصال بنا مباشرة.',
    },
  },
};
