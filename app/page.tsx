'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedType, setSelectedType] = useState('buyuk');

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
                <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/20 px-4 py-1 text-sm font-bold uppercase tracking-widest text-primary">
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
                  <button className="flex h-14 min-w-[200px] cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                    Hizmetlerimizi İncele
                  </button>
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
                  className={`flex-1 max-w-xs py-3 px-8 rounded-xl font-bold text-lg transition-all ${
                    selectedType === 'buyuk'
                      ? 'bg-gradient-to-r from-orange-100 to-orange-600 text-neutral-dark shadow-lg'
                      : 'bg-slate-800 text-white border border-slate-700 hover:border-orange-500'
                  }`}
                >
                  Büyük Baş
                </button>
                <button
                  onClick={() => setSelectedType('kucuk')}
                  className={`flex-1 max-w-xs py-3 px-8 rounded-xl font-bold text-lg transition-all ${
                    selectedType === 'kucuk'
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
                        ? "relative z-10 scale-105 overflow-hidden rounded-3xl border-2 border-primary bg-slate-900 p-8 shadow-2xl shadow-primary/10"
                        : "group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-primary/30"
                    }
                  >
                    {grup.popular && (
                      <div className="absolute right-0 top-0 rounded-bl-xl bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-tighter text-neutral-dark">
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
                      <span className="text-4xl font-black text-primary">
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
                          <span className="material-symbols-outlined text-lg text-primary">
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
                          ? "w-full rounded-xl bg-primary py-4 font-bold text-neutral-dark transition-all hover:bg-primary/90"
                          : "w-full rounded-xl border border-primary/50 py-4 font-bold text-primary transition-all hover:bg-primary hover:text-neutral-dark"
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
                  className="group flex flex-col rounded-2xl border border-primary/5 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl"
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
                  className="flex-shrink-0 w-72 snap-center group flex flex-col rounded-2xl border border-primary/5 bg-white p-6 shadow-sm transition-all hover:border-primary/20 hover:shadow-xl"
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
                      <span className="material-symbols-outlined text-primary">
                        expand_more
                      </span>
                    </div>
                    <div className="mt-4 text-sm leading-relaxed text-neutral-muted">
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
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
