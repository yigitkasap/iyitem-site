# iyitem-site

İyitem Görüntüleme Merkezi (iyitem.com) sitesi — Astro 5 + Tailwind 4.

İçerik, 15.09.2026 tarihli WordPress yedeğinden çıkarıldı; sunum katmanı
`design_handoff_iyitem_website` paketindeki 21 sayfalık yenileme tasarımına göre
kodlandı.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ içine statik çıktı
npm run preview
npm run check    # tip kontrolü
```

Çıktı tamamen statiktir; herhangi bir statik hostinge atılabilir. PHP/MySQL gerekmez.

## Yapı

```
src/
  content/<dil>/<tür>/<slug>.md   tr | en | ar  ×  departments, devices, doctors, blog, pages
  components/                     ortak bileşenler (Header, Footer, Hero, Accordion…)
  components/pages/               21 sayfa bileşeni
  pages/[...path].astro           TÜM rotalar burada üretilir
  i18n/ui.ts                      arayüz metinleri (3 dil)
  i18n/copy.ts                    anasayfa metinleri (3 dil)
  i18n/copy-pages.ts              iç sayfa metinleri (3 dil)
  lib/site.ts                     iletişim, menü, portal ve sabitler
  lib/routes.ts                   rota tabloları
  styles/global.css               tasarım token'ları
public/assets/                    tasarım varlıkları (logo, hero, svc-*, dev-*, gal/*)
public/media/                     WordPress yedeğinden gelen makale görselleri + KVKK PDF'leri
```

### Tasarım token'ları

Renk, tipografi, ölçü ve gölge değerleri [global.css](src/styles/global.css)
içinde `@theme` bloğunda toplanmıştır ve devir paketindeki tablodan birebir
alınmıştır. Bir değeri değiştirmeden önce oraya bakın.

| | |
|---|---|
| Marka kırmızısı | `#e0231b` (hover `#b31812` / koyu zeminde `#f2372f`) |
| Mürekkep | `#16222e` · hero `#0f1a24` |
| Zeminler | `#f5f4f1` · `#f7f6f4` |
| Tipografi | Plus Jakarta Sans (400–800) + IBM Plex Mono (400/500) |
| Sayfa | 1280px / 20px padding |

Kırılma noktaları CSS media query'ye çevrildi (prototipte JS ile ölçülüyordu):
`≥1300px` tam menü, `<1300px` hamburger, `<1000px` tek kolon, `<900px` mobil alt
bar, `<820px` yatay kartlar tek kolon, carousel `<700px` 1 / `<1080px` 2 / üstü 3.

### Rotalar

`/` · `/hakkimizda/` · `/hizmetlerimiz/` + `[slug]` (15) · `/doktorlarimiz/` +
`[slug]` (2) · `/cihazlarimiz/` + `[slug]` (7) · `/online-hizmetler/online-rapor/`
· `/galeri/` · `/blog/` + `[slug]` (3) · `/iletisim/` · `/sikca-sorulan-sorular/`
· `/hasta-haklari/` (`#kvkk` ikinci sekmeyi açar) · `/nasil-gelmelisiniz/` ·
`/dilek-ve-onerileriniz/` · `/check-up/` · `/3-tesla-mr/` · `/arama/` · 404.

Her rota üç dilde üretilir: TR kökte, EN `/en/…`, AR `/ar/…` (RTL). Toplam **130 sayfa**.

### Dil ve içerik

Türkçe kaynak dildir: hangi sayfaların var olduğunu Türkçe içerik belirler. Bir
sayfanın çevirisi yoksa o dilde Türkçesi gösterilir — sayfa bazında, koleksiyon
bazında değil. Yeni bir tetkik eklemek için `src/content/tr/departments/` içine
bir `.md` koymak yeterli; menü, liste, kenar çubuğu ve arama indeksi kendiliğinden
güncellenir.

Frontmatter alanları: `title`, `slug`, `lead`, `cover`, `order`,
`appointmentForm`, `gallery`, `draftTranslation`, `category`, `summary`, `brand`,
`specialty`, `education`, `interests`. Gövde sonundaki `<!--faq-->` bloğu JSON'dur
ve akordeona dönüşür.

## Formlar

Site statik olduğu için formlar iki yoldan birini kullanır:

- **`PUBLIC_FORM_ENDPOINT` tanımlıysa** form oraya POST eder (Formspree, Worker…).
  Randevu formundaki T.C. kimlik alanı yalnızca bu durumda görünür.
- **Tanımlı değilse** form doldurulan bilgileri WhatsApp mesajına çevirir
  (`+90 530 237 75 59`). T.C. kimlik alanı gösterilmez; numara randevuda alınır.

`.env`:

```
PUBLIC_FORM_ENDPOINT=https://...
```

İstemci tarafı doğrulama hazır: TR telefon formatı, **11 haneli T.C. kimlik
algoritması** (checksum), e-posta ve zorunlu KVKK onayı. Honeypot alanı mevcut;
production'da ayrıca hCaptcha/reCAPTCHA ve merkeze e-posta bildirimi eklenmeli.

> **KVKK uyarısı:** Uç tanımlanınca randevu formu **T.C. Kimlik Numarası** toplar
> (eski sitedeki form da topluyordu). Seçilecek form servisinin veri işleyici
> sözleşmesi kapsamında olması ve yurt dışına aktarımın KVKK m.9'a uygun olması
> gerekir. WhatsApp yolunda tetkik bilgisi ve mesaj WhatsApp üzerinden gider.

## İçerik kaynağı (Kasım 2026)

Yenileme tasarımındaki taslak metinler, canlı eski site **www.iyitem.com**
ile karşılaştırılıp ona göre düzeltildi:

- **Adres** her yerde **No:5**, **e-posta** her yerde **iyitem@iyitem.com**
  (KVKK aydınlatma metni dahil; klinik onayı, Kasım 2026).
- **KVKK metni** eski siteyle aynı; eski metindeki kırık
  `/kisisel-verilerin-korunmasi` adresi, ilgili PDF'lere bağlantıyla değiştirildi.
- **Check-up:** eski sitede yalnızca dört program adı var (Ekonomik, Standart,
  Full, VIP) ve "detaylı bilgi için merkezimizi arayın" deniyor. Tasarımdaki
  uydurma paket içerikleri, süreler ve SSS kaldırıldı.
- **Nasıl Gelmelisiniz:** eski sitede bu sayfa yok. Hazırlık tablosunda yalnızca
  eski SSS ve hizmet sayfalarında yazan MR ve HSG hazırlığı kaldı; metro/tramvay
  tarifi ve "yanınızda getirin" listesi kaynaksız olduğu için çıkarıldı.
- **Hasta yorumları:** eski sitede tek yorum var (Yıldız Ahmetoğlu); tasarımda
  yazılan diğer üç yorum kaldırıldı.
- **Cihaz sayfaları:** eski sitedeki cihaz sayfaları tema demo metniyle doluydu.
  Gövde, özet ve özellik etiketleri eski sitenin hizmet sayfalarında o cihaz
  için yazılan cümlelerden kuruldu.

## Notlar

- **Online Rapor portalları** (`46.196.245.76`) İyitem'in değil, PACS sağlayıcısının
  sorumluluğunda; site yalnızca bağlantı verir. Adresler `PORTALS` üzerinden yönetiliyor.
- **EN/AR çevirileri** yayında (Kasım 2026'da taslaktan çıkarıldı). Bkz.
  [TRANSLATION-NOTES.md](TRANSLATION-NOTES.md).
- **BT cihazının adı** sitedeki haliyle bırakıldı.

## Yayına alırken

`public/.htaccess` (Apache / LiteSpeed, Hostinger) şunları yapar:

- `http` ve `www`'suz istekleri `https://www.iyitem.com`'a yönlendirir.
- Eski WordPress sitemap'indeki **78 adresin tamamını** karşılar: 54'ü yeni
  sayfasına 301 ile gider (`/department/…` → `/hizmetlerimiz/…`, `/doctor/…` →
  `/doktorlarimiz/…`, `/services/…` → `/cihazlarimiz/…`, kökteki blog yazıları →
  `/blog/…`, `/online-randevu/`, `/online-rapor/`, `/kvkk/` …). Temanın demo
  içerikleri (`/events/…`, `/cms-header-top/…`) 410 döner.
- `/wp-content/uploads/…` görsellerini ve PDF'lerini `/media/…` altındaki
  karşılıklarına yönlendirir.
- Google Search Console doğrulaması için `google3c596ada7e66641b.html` korunur.

Hosting Netlify ya da Cloudflare Pages olursa bu kuralların `_redirects`
dosyasına çevrilmesi gerekir.
