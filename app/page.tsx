'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [selectedType, setSelectedType] = useState('buyuk');
  const [selectedKurban, setSelectedKurban] = useState<{ title: string; description: string; image: string } | null>(null);
  const [showPaymentConfirm, setShowPaymentConfirm] = useState(false);
  const reviewSliderRef = useRef<HTMLDivElement>(null);

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewSliderRef.current) {
      const scrollAmount = 340;
      reviewSliderRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleWhatsAppClick = (grupName: string, grupPrice: string) => {
    const hayvanTipi = selectedType === 'kucuk' ? 'Küçük Baş' : 'Büyük Baş';
    const message = `${hayvanTipi} -- ${grupName} (${grupPrice}) satın almak istiyorum`;
    const phoneNumber = '905550710579';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getHisseGruplari = () => {
    if (selectedType === 'kucuk') {
      return [
        {
          name: "1. Grup",
          subtitle: "Ekonomik & Bereketli",
          price: "18.000 - 22.000 ₺",
          features: ["Hijyenik Kesim", "Pay Dağıtımı", "Video Gönderimi"],
          popular: false,
        },
        {
          name: "2. Grup",
          subtitle: "Standart & Kalite",
          price: "22.000 - 27.000 ₺",
          features: [
            "Standart Hisse Ağırlığı",
            "Adrese Teslimat (Opsiyonel)",
            "Profesyonel Parçalama",
          ],
          popular: true,
        },
        {
          name: "3. Grup",
          subtitle: "Premium & Konfor",
          price: "27.000+ ₺",
          features: [
            "Maksimum Hisse Ağırlığı",
            "Özel Paketleme",
            "Anlık Bilgilendirme",
          ],
          popular: false,
        },
      ];
    } else {
      return [
        {
          name: "1. Grup",
          subtitle: "Ekonomik & Bereketli",
          price: "28.000 - 36.000 ₺",
          features: ["Hijyenik Kesim", "Pay Dağıtımı", "Video Gönderimi"],
          popular: false,
        },
        {
          name: "2. Grup",
          subtitle: "Standart & Kalite",
          price: "36.000 - 42.000 ₺",
          features: [
            "Standart Hisse Ağırlığı",
            "Adrese Teslimat (Opsiyonel)",
            "Profesyonel Parçalama",
          ],
          popular: true,
        },
        {
          name: "3. Grup",
          subtitle: "Premium & Konfor",
          price: "42.000 - 48.000 ₺",
          features: [
            "Maksimum Hisse Ağırlığı",
            "Özel Paketleme",
            "Anlık Bilgilendirme",
          ],
          popular: false,
        },
      ];
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="p-4 md:p-10 lg:px-20">
        <div className="relative flex min-h-[560px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-neutral-dark p-8 text-center">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAelny3POafZB1mBrqu1BV4UhGxSxD8FRDzYoGvUHKtjCQyzdJQjZDRcDmOAzyPusJSxtSSNbFHvfnXDKhUrHM3D-GHIpf9KX-1KSzwr7PoXA-fQjMLtcS4ykZ3C-LPYPzLvt63giGo8DGxO5iUTh_ND35fwfVrgOek9ChsWDctr0qCDCmWErPvmf7XqQ0XONf3j9y6aO5YMHAlg5dJnKiuoTOELlCKXYX8HoiZffrVb-vB0Q2CVXXXYdGqsEimbmqy8tLxr__vnQ')",
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
          <div className="relative z-20 max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/20 px-4 py-1 text-sm font-bold uppercase tracking-widest text-white">
              İslami Usullere Uygun
            </span>
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Kurban İbadetinizi{" "}
              <span className="text-primary">Güvenle</span> Yerine Getirin
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg font-normal leading-relaxed text-slate-200 md:text-xl">
              İslami usullere uygun, hijyenik ve modern tesislerde kurban
              kesim ve bağış hizmeti ile emanetiniz emin ellerde.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#hisse-gruplari"
                onClick={(e) => { e.preventDefault(); document.getElementById('hisse-gruplari')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="flex h-14 min-w-[200px] cursor-pointer items-center justify-center rounded-full bg-primary px-8 text-lg font-bold text-neutral-dark shadow-xl shadow-primary/30 transition-all hover:bg-primary/90">
                Hisselerimiz
              </a>
              <a href='/#services'
                className="flex h-14 min-w-[200px] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                Hizmetlerimizi İncele
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hisse Grupları Section */}
      <section id="hisse-gruplari" className="bg-background-dark px-6 py-20 text-white md:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold uppercase tracking-[0.2em] text-accent-gold">
              Kurban Bayramı
            </h2>
            <h3 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Hisse Grupları
            </h3>
            <p className="mx-auto max-w-2xl text-slate-400">
              Kurban Bayramı için belirlenen hisse gruplarımızla bütçenize
              en uygun seçeneği belirleyin.
            </p>
          </div>

          {/* Hayvan Tipi Seçim Butonları */}
          <div className="flex gap-4 mb-12 justify-center">
            <button
              onClick={() => setSelectedType('buyuk')}
              className={`flex-1 max-w-xs py-3 px-8 rounded-xl font-bold text-lg transition-all ${selectedType === 'buyuk'
                ? 'bg-gradient-to-r from-orange-100 to-orange-600 text-neutral-dark shadow-lg'
                : 'bg-slate-800 text-white border border-slate-700 hover:border-orange-500'
                }`}
            >
              Büyük Baş
            </button>
            <button
              onClick={() => setSelectedType('kucuk')}
              className={`flex-1 max-w-xs py-3 px-8 rounded-xl font-bold text-lg transition-all ${selectedType === 'kucuk'
                ? 'bg-gradient-to-r from-orange-100 to-orange-600 text-neutral-dark shadow-lg'
                : 'bg-slate-800 text-white border border-slate-700 hover:border-orange-500'
                }`}
            >
              Küçük Baş
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {getHisseGruplari().map((grup) => (
              <div
                key={grup.name}
                className={
                  grup.popular
                    ? "relative z-10 scale-105 overflow-hidden rounded-3xl border-2 border-[#11d473] bg-slate-900 p-8 shadow-2xl shadow-[#11d473]/10"
                    : "group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-[#11d473]/30"
                }
              >
                {grup.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-xl bg-[#11d473] px-4 py-1 text-[10px] font-black uppercase tracking-tighter text-neutral-dark">
                    Popüler Seçim
                  </div>
                )}
                <div className="mb-8">
                  <h4 className="mb-2 text-xl font-bold text-white">
                    {grup.name}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {grup.subtitle}
                  </p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-black text-[#11d473]">
                    {grup.price}
                  </span>
                  <span className="ml-2 text-sm text-slate-400">
                    / Hisse
                  </span>
                </div>
                <ul className="mb-10 space-y-4">
                  {grup.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="material-symbols-outlined text-lg text-[#11d473]">
                        check_circle
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleWhatsAppClick(grup.name, grup.price)}
                  className={
                    grup.popular
                      ? "w-full rounded-xl bg-[#11d473] py-4 font-bold text-neutral-dark transition-all hover:bg-[#11d473]/90"
                      : "w-full rounded-xl border border-[#11d473]/50 py-4 font-bold text-[#11d473] transition-all hover:bg-[#11d473] hover:text-neutral-dark"
                  }
                >
                  Seç ve Gönder
                </button>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Kurban Türleri Section */}
      <section className="px-6 py-16 md:px-20" id="services">
        <div className="mb-12 flex flex-col">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-1 w-10 rounded-full bg-accent-gold" />
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold">
              Kurban Seçenekleri
            </span>
          </div>
          <h2 className="text-3xl font-black text-neutral-dark md:text-4xl">
            Kurban Türleri
          </h2>
        </div>
        {/* Mobile Slider - Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {kurbanTurleri.map((item) => (
            <div
              key={item.title}
              onClick={() => setSelectedKurban(item)}
              className="cursor-pointer group flex flex-col rounded-2xl border border-primary/5 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl"
            >
              <div
                className="mb-6 aspect-square w-full overflow-hidden rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <h3 className="mb-2 text-xl font-bold text-neutral-dark transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-muted">
                {item.description}
              </p>
              <div className="mt-auto flex items-center pt-4 text-sm font-bold text-primary">
                İncele{" "}
                <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Slider */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide">
          {kurbanTurleri.map((item) => (
            <div
              key={item.title}
              onClick={() => setSelectedKurban(item)}
              className="cursor-pointer flex-shrink-0 w-72 snap-center group flex flex-col rounded-2xl border border-primary/5 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl"
            >
              <div
                className="mb-6 aspect-square w-full overflow-hidden rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <h3 className="mb-2 text-xl font-bold text-neutral-dark transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-muted">
                {item.description}
              </p>
              <div className="mt-auto flex items-center pt-4 text-sm font-bold text-primary">
                İncele{" "}
                <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SSS Section */}
      <section
        className="bg-white px-6 py-20 md:px-20"
        id="faq"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-black text-neutral-dark">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-neutral-muted">
              Merak ettiğiniz tüm soruların cevapları burada.
            </p>
          </div>
          <div className="space-y-4">
            {sssData.map((item) => (
              <div
                key={item.question}
                className="group cursor-pointer rounded-2xl border border-primary/10 bg-background-light p-6 transition-all hover:border-primary/30"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-neutral-dark">
                    {item.question}
                  </h4>
                  {/* <span className="material-symbols-outlined text-primary">
                    expand_more
                  </span> */}
                </div>
                <div className="mt-4 text-sm leading-relaxed text-neutral-muted">
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları Section */}
      <section className="bg-background-light px-6 py-20 md:px-20" id="yorumlar">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="text-center md:text-left">
              <div className="mb-3 flex items-center justify-center md:justify-start gap-2">

              </div>
              <h2 className="mb-4 text-3xl font-black text-neutral-dark md:text-4xl">
                Hissedarlarımız Ne Diyor?
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <span className="text-lg font-bold text-neutral-dark">5.0</span>
                <span className="text-sm text-neutral-muted">({yorumlarData.length} yorum)</span>
              </div>
            </div>
            {/* Ok Butonları */}
            <div className="mt-6 md:mt-0 flex items-center justify-center md:justify-end gap-3">
              <button
                onClick={() => scrollReviews('left')}
                className="flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-neutral-dark shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-neutral-dark hover:shadow-md active:scale-95"
                aria-label="Önceki yorum"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={() => scrollReviews('right')}
                className="flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-neutral-dark shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-neutral-dark hover:shadow-md active:scale-95"
                aria-label="Sonraki yorum"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Yatay Slider */}
          <div
            ref={reviewSliderRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {yorumlarData.map((yorum) => (
              <div
                key={yorum.name}
                className="group relative flex-shrink-0 w-[320px] overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl"
              >
                <div className="absolute right-4 top-4 opacity-10 transition-opacity group-hover:opacity-20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 font-bold text-primary">
                    {yorum.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-dark">{yorum.name}</h4>
                    <p className="text-[11px] text-slate-400">{yorum.date}</p>
                  </div>
                </div>
                <div className="mb-3 flex text-yellow-400">
                  {[...Array(yorum.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-neutral-muted">
                  &ldquo;{yorum.comment}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Google Maps Link */}
          <div className="mt-10 text-center">
            <a
              href="https://maps.app.goo.gl/PPR2PqB1Ec8ShH2Q7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm transition-all hover:bg-primary hover:text-neutral-dark hover:shadow-md"
            >
              <span className="material-symbols-outlined text-lg">map</span>
              Google'daki Tüm Yorumları Gör
            </a>
          </div>
        </div>
      </section>

      {/* Kurban Türü Modal */}
      {selectedKurban && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedKurban(null)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Üst Görsel */}
            <div
              className="h-48 w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${selectedKurban.image}')` }}
            >
              <div className="flex h-full w-full items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-black text-white">{selectedKurban.title}</h3>
              </div>
            </div>

            {/* Kapat Butonu */}
            <button
              onClick={() => setSelectedKurban(null)}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* İçerik */}
            <div className="p-6">
              <p className="mb-6 text-sm leading-relaxed text-neutral-muted">
                {selectedKurban.description}
              </p>

              {/* Butonlar */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText('14000');
                    setShowPaymentConfirm(true);
                  }}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-neutral-dark shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl"
                >
                  <span className="material-symbols-outlined text-lg">payment</span>
                  Ödeme Yap — 14.000 ₺
                </button>
                <a
                  href={`https://wa.me/905550710579?text=${encodeURIComponent(`${selectedKurban.title} hakkında bilgi almak istiyorum`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] bg-[#25D366]/10 text-sm font-bold text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ödeme Onay Modalı */}
      {showPaymentConfirm && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowPaymentConfirm(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-3xl text-primary">content_paste</span>
              </div>
            </div>
            <h3 className="mb-2 text-center text-lg font-bold text-neutral-dark">
              Tutar Kopyalandı!
            </h3>
            <p className="mb-6 text-center text-sm text-neutral-muted">
              Bağış tutarı <span className="font-bold text-primary">14.000 ₺</span> panoya kopyalandı.
              Açılacak sayfada &quot;Bağış Tutarı&quot; alanına yapıştırın.
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setShowPaymentConfirm(false);
                  window.open('https://bagis.ugurlar.org', '_blank');
                }}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-neutral-dark shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
              >
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                Ödemeye Geç
              </button>
              <button
                onClick={() => setShowPaymentConfirm(false)}
                className="flex h-10 items-center justify-center rounded-xl text-sm font-semibold text-neutral-muted transition-all hover:bg-slate-100"
              >
                Vazgeç
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const kurbanTurleri = [
  {
    title: "VACİP KURBAN",
    description: "Kurban Bayramı günlerinde kesilen kurban.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkVaqlJizfXPBEhOpKv0tFP-CtIAyYDMPbutg5wSln2qL2O7mL-vZUvl9SAnzHZ-F0hOLpDY-HBCDBENqgjNzDLLQBxC4VsBbz3LLwFyoMMf5JCLhTP1VtrvIbMonzTFwg7S7CNvPPvfFrMZeZp54jiFWGUwCwb8k5d2OBfdKokpl-yApEvDepjAT-d49HOhChhDPsQodCgGNhej6tzt8rZqS6eJBAL21faoCffY_cbCdKApSVNiv-AAONWgrjKdwbENiyPAIQgA",
  },
  {
    title: "NAFİLE KURBAN",
    description: "Allah rızası için kesilen kurban.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXGscGXPkfTzSBIEoFZPisaSzCBUoq8q_GMF2OjLGTbqa0DFIu7GA1r8v2Cts5qc7n2WLe5Evoy5SmMUn6gol9msAZtgbd5PsG8_aAiLetXVtx4W8V4SST-UAlXZVgPEm5LkKV7oVcVcmRnlYcfZUQTqHAs33f0s8TZ4yJjK0EY7VURXklHMEdgFu-jdgf6Fv4nFHpW8n3c8R0uL8kwhofP5pTkVJcNbLPKno590dTnfNmBMYR5nterrEU694RZeqrUDKADU8wqw",
  },
  {
    title: "ŞİFA KURBAN",
    description: "Hastalardan kurtulma niyetiyle kesilen kurban.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbOqHufqt-xjQuG37N3UtHGyMmK9iJ32dOoUC9d90lmLrQhl-YqclpPMwLIXqTUKFRzNkBJs3KPNmwNRseLLvcW751cD89Fs0JrptAeF10Pv7m3sclUaVr3pK__EzNKViJmawI2Xjw90ifMoHskRZ9QwbVjEUt6_025IRXh3SQUuDJX4dcl0RXiQQPcC2oe35GrnSwQJgSeprEgBV-RJHoVuT0t9GovhalPVNHE2ey4FDA9d4TaOvemXC55Y3S44clvKwVGQ4uYw",
  },

  {
    title: "ADAK KURBAN",
    description: "Niyetinizin gerçekleşmesi için vaat edilen kurban.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDkYsLWueVfNfYgDDQcPRdI1q-7__xoiBpwFFxIxSInS90PWopgvDRXdMlV_bHD42cR02SSJURgrTR2cHBEI65MTY0V_69xP4zpWmzxxtTdd5zpK6k-o8V3w9qcsR6u73Y6EY7yvmqmKEnAR1j7j0rRJ3F2r4jnyzRmgwJ1UaSw1_s9VjPiiiaBH0nJrJV9WztsfNcDSP_2_VYQFzo9IdsEeHnUh8TfUVBmgEE43hv7AhN0YRAjj2-nxmz4OwmNj6-WgsmyMnPDA",
  },
  {
    title: "AKİKA KURBAN",
    description: "Yeni doğan çocuk için şükür kurbanı.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDDDIGVWIjuEtb9fNWzgrxwG_CYVmWWOwFd2coADQpWLn8aQdgZG2WOQexdu6lEcnOgFVfGPp0vZcCAabDKFrpoLRwI_RA4S21J9UeNo1Q2K_UohiwoQVhxP7vC-iUSCEU9uVuFrZug4a957gudRM4NblX85MMFs36MaoeZQagZFNCSLPlIpxVS_2-5pvXX31Z3jefWdxGarpIDtbAtjkxJpmtZSw6ZLhsuWhhRaQO3zYLk289jYyXWEKjFLlgHy3PJinESJgdBw",
  },

];



const sssData = [
  {
    question: "Kesimler nasıl yapılıyor?",
    answer:
      "Kesimlerimiz İslami usullere tam uygun olarak, uzman kasaplarımız tarafından, modern ve hijyenik tesislerimizde gerçekleştirilir. Her kesim başında vekaletiniz alınarak tekbirler eşliğinde işlem tamamlanır.",
  },
  {
    question: "Bağışlar nereye gidiyor?",
    answer:
      "Yapılan kurban bağışları, ilim talebelerine titizlikle ulaştırılmaktadır. Tüm süreç şeffaf bir şekilde yönetilir.",
  },
  {
    question: "Hisse grupları neye göre belirleniyor?",
    answer:
      "Hisse grupları, kurbanlık hayvanın cinsine, ağırlığına ve sunulan ek hizmetlere (parçalama, paketleme, teslimat hızı) göre farklı kategorilere ayrılmaktadır.",
  },
];

const yorumlarData = [
  {
    name: "Hüsnü Yüksel",
    rating: 5,
    date: "11 ay önce",
    comment: "Çok güzel ve hijyenik bir ortamda kesim yapıldı. Herkese tavsiye ederim.",
  },
  {
    name: "Ayman Nashu",
    rating: 5,
    date: "11 ay önce",
    comment: "Profesyonel ekip, güvenilir hizmet. Teşekkürler Uğurlu Kurban!",
  },
  {
    name: "Ahmet Ölmez",
    rating: 5,
    date: "11 ay önce",
    comment: "İslami usullere uygun, temiz ve düzenli bir kesimhane. Memnun kaldık.",
  },
  {
    name: "Fatih Madani",
    rating: 5,
    date: "11 ay önce",
    comment: "Kurbanımız özenle kesildi ve paketlendi. Çok memnunuz.",
  },
  {
    name: "Ali Imran",
    rating: 5,
    date: "11 ay önce",
    comment: "Hizmet kalitesi üst düzey. Zamanında ve eksiksiz teslimat.",
  },
  {
    name: "Sefa Çevik",
    rating: 5,
    date: "11 ay önce",
    comment: "Her yıl tercih ediyoruz. Güvenilir ve kaliteli hizmet.",
  },
  {
    name: "Muhammed Başdağ",
    rating: 5,
    date: "11 ay önce",
    comment: "Ekip çok ilgili ve profesyonel. Kesinlikle tavsiye ediyorum.",
  },
  {
    name: "Veli",
    rating: 5,
    date: "11 ay önce",
    comment: "Temiz, hijyenik ve güvenilir. Kurban ibadetimiz huzurla tamamlandı.",
  },
  {
    name: "Дәуірхан Аметов",
    rating: 5,
    date: "11 ay önce",
    comment: "Harika bir deneyimdi. Çok teşekkür ederiz.",
  },
];
