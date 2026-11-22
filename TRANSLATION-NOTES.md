# Çeviri notları — EN / AR

## Yenileme sonrası durum (2026 tasarımı)

Tasarım yenilemesiyle birlikte **yeni sayfalar** eklendi: Check-up, Nasıl
Gelmelisiniz, 3 Tesla MR, Arama, Hasta Hakları/KVKK sekmeleri ve her sayfanın
banner metinleri. Bu yeni metinler şu an **yalnızca Türkçe**
([src/i18n/copy-pages.ts](src/i18n/copy-pages.ts)); EN ve AR bu sayfalarda
Türkçeye düşüyor, site kırılmıyor.

Çevrilmiş olanlar: arayüz sözlüğü ([ui.ts](src/i18n/ui.ts), 3 dil), anasayfa
metinleri ([copy.ts](src/i18n/copy.ts), 3 dil), hizmet/cihaz kart özetleri ve
tüm koleksiyon içerikleri (15 tetkik, 7 cihaz, 2 doktor, 3 blog, 15 sayfa).

Kalan iş: `copy-pages.ts` içindeki `en` ve `ar` anahtarlarını doldurmak.
Yapı hazır — `pick()` otomatik olarak dolu olanı kullanır.

## Eski sitedeki durum

Eski WordPress kurulumunda `/en/` ve `/ar/` alt siteleri **boştu**. İkisi de `medisch`
temasının kurulum demo içeriğiyle duruyordu: "John Henry", "Kiano Barker" gibi sahte
doktorlar, "Implant Dentistry", "Pricing & Plans", "Home Dentist" gibi diş kliniği
sayfaları. Arapça sitede 53 yayınlanmış içeriğin **hiçbirinde tek bir Arapça karakter
yoktu**.

Dolayısıyla çevrilecek bir EN/AR metni yoktu. Bu klasördeki tüm İngilizce ve Arapça
içerik, **Türkçe aslından bu yeniden yazım sırasında çevrildi** ve klinik onayı
beklemektedir.

## Onay bekleyen içerik

Taslak dosyaların frontmatter'ında `draftTranslation: true` var ve sayfada sarı bir
uyarı şeridi gösteriliyor. Listeyi görmek için:

```bash
grep -rl "draftTranslation: true" src/content/en src/content/ar
```

Onaylanan sayfada bu alanı `false` yapın; uyarı kalkar.

## Onaylarken özellikle bakılması gerekenler

Metinler tıbbi içerik taşıdığı için bir hekimin gözden geçirmesi gerekir. Riskli
noktalar:

1. **Kontrendikasyon listeleri.** MR sayfasındaki "Kimler MR inceleme yaptıramaz?"
   maddesi kalp pili, metalik kalp kapağı, gebelik ve protez konularını sayıyor.
   Burada bir çeviri kayması doğrudan hasta güvenliği sorunudur.
2. **Radyasyon dozu ifadeleri.** "0.02 milisievert", "yılda 50 milisievert",
   "30-50 kat daha az radyasyon" gibi sayılar birebir korundu; birimlerin doğru
   aktarıldığı teyit edilmeli.
3. **Kilo ve süre sınırları.** 120 kg / 250 kg, 70 cm tüp çapı, 10–45 dakika,
   8–11. gün (HSG) gibi değerler.
4. **Cihaz ve marka adları.** Siemens Magnetom Vida, GE Revolution Maxima,
   Canon i800, GMM Opera T, KaVo OP 300, Fujifilm Amulet, DMS — bunlar ürün adıdır,
   çevrilmedi. Türkçe metinde "Optima 360" ve "Vida" karışık geçiyordu; başlıklarda
   Vida esas alındı, slug (`mr-3-tesla-siemens-optima-360`) eski URL uyumu için
   olduğu gibi bırakıldı.
5. **Tetkik adlarının yerel karşılıkları.** Örneğin "Boy Grafisi (Ortoröntgenogram)"
   İngilizceye "Full-Length Leg X-ray" olarak çevrildi; klinik hangi terimi
   kullanmak istiyorsa ona göre düzeltilmeli.

## KVKK sayfası

`kvkk.md` bir hukuki metindir. EN ve AR sürümlerinin başına **"resmî olmayan çeviri,
bağlayıcı olan Türkçe metindir"** notu eklendi. Bağlı PDF'ler yalnızca Türkçedir ve
öyle etiketlendi. Bu metnin hukuki bir çeviri olarak kullanılması gerekiyorsa
yeminli tercüme yaptırılmalıdır.

## Çevrilmeyen, bilinçli bırakılanlar

- **Slug'lar Türkçe kaldı.** `/en/hizmetlerimiz/mr-manyetik-rezonans-goruntuleme/`
  gibi. Böylece üç dil aynı URL yapısını paylaşıyor, `hreflang` eşleşmesi basit
  kalıyor ve eski bağlantılar korunuyor. Dil başına slug istenirse frontmatter'daki
  `slug` alanı ayrıştırılabilir, ama rota üretimi de güncellenmeli.
- **Doktor adları.** İngilizcede Türkçe yazımıyla ("Bedri Çarsancaklı"), Arapçada
  okunuşla verildi. Arapça yazımları hekimlerin kendilerine teyit ettirilmeli.
- **Hasta yorumu.** Ana sayfadaki "Yıldız Ahmetoğlu" imzalı yorum, bir hastanın
  gerçek sözü olduğu için EN/AR'de anlamı korunarak aktarıldı; imza değiştirilmedi.
  Gerçek bir kişiye ait olduğundan, yayından önce bu kişinin çeviri metne de rızası
  olduğundan emin olun.
- **Boş sayfalar.** Cihaz sayfaları, iki blog yazısı ve Girişimsel Radyoloji Türkçede
  de boş olduğu için üç dilde de yalnızca başlık taşıyor.
