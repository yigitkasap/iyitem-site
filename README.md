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
  i18n/copy-pages.ts              iç sayfa metinleri (TR; EN/AR TR'ye düşer)
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

## Formlar — kurulum gerekiyor

Site statik olduğu için formlar bir dış uca POST eder. Uç tanımlanmadan **form
gönderimi devre dışıdır** ve yerinde kurulum uyarısı gösterilir; böylece bir hasta
talebi sessizce kaybolmaz.

`.env` dosyası oluşturun:

```
PUBLIC_FORM_ENDPOINT=https://...
```

İstemci tarafı doğrulama hazır: TR telefon formatı, **11 haneli T.C. kimlik
algoritması** (checksum), e-posta ve zorunlu KVKK onayı. Honeypot alanı mevcut;
production'da ayrıca hCaptcha/reCAPTCHA ve merkeze e-posta bildirimi eklenmeli.

> **KVKK uyarısı:** Randevu formu **T.C. Kimlik Numarası** topluyor (tasarımda öyle).
> Bu kimlik verisidir; seçilecek form servisinin veri işleyici sözleşmesi kapsamında
> olması ve yurt dışına aktarımın KVKK m.9'a uygun olması gerekir. Bu alanın gerçekten
> gerekli olup olmadığını klinikle teyit etmenizi öneririm.

## Açık konular

1. **Adres.** Tasarım **No:5** kullanıyor; eski sitede anasayfa "No:7", footer "No:5",
   KVKK tescil kaydı "No:5/1" yazıyordu. `site.ts` içinde No:5 olarak kodlandı —
   klinikten teyit alınmalı. (KVKK künyesi tescil kaydına uygun olarak No:5/1 kalıyor.)
2. **İki e-posta.** Genel `iyitem@iyitem.com`, KVKK künyesinde `iyitem@hotmail.com`.
   Kurumsal bir KVKK adresi önerilir.
3. **Sosyal medya bağlantıları** footer'da `#` olarak duruyor — gerçek hesap
   adresleri [site.ts](src/lib/site.ts) `SOCIAL` içine girilmeli.
4. **Taslak metinler** (klinik onayı bekliyor): Check-up paket içerikleri, Nasıl
   Gelmelisiniz hazırlık tablosu, cihaz açıklamaları, hasta yorumları (4 yorumdan
   3'ü tasarımda yeni yazılmış).
5. **Online Rapor portalları** hâlâ IP adresine bağlı (`46.196.245.76`), HTTPS yok.
   Bir alan adı ve sertifika önerilir. Adresler `PORTALS` üzerinden yönetiliyor.
6. **EN/AR çevirileri.** Bkz. [TRANSLATION-NOTES.md](TRANSLATION-NOTES.md).

## Yayına alırken

Eski WordPress URL'lerinden 301 yönlendirmesi kurun:

```
/department/:slug/   →  /hizmetlerimiz/:slug/
/online-rapor/       →  /online-hizmetler/online-rapor/
/hakkimizda/galeri   →  /galeri/
```
