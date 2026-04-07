'use client';

import { useState } from 'react';

export default function IletisimPage() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactLoading, setContactLoading] = useState(false);
  const [contactStatus, setContactStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    setContactStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          subject: contactSubject,
          message: contactMessage,
        }),
      });
      if (res.ok) {
        setContactStatus('success');
        setContactName('');
        setContactEmail('');
        setContactSubject('');
        setContactMessage('');
        setTimeout(() => setContactStatus('idle'), 5000);
      } else {
        setContactStatus('error');
      }
    } catch {
      setContactStatus('error');
    } finally {
      setContactLoading(false);
    }
  };

  return (
    <section className="px-6 py-16 md:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Başlık */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <div className="h-1 w-10 rounded-full bg-accent-gold" />
            <span className="text-sm font-bold uppercase tracking-widest text-accent-gold">
              İletişim
            </span>
            <div className="h-1 w-10 rounded-full bg-accent-gold" />
          </div>
          <h1 className="mb-4 text-3xl font-black text-neutral-dark md:text-5xl">
            Bizimle İletişime Geçin
          </h1>
          <p className="mx-auto max-w-2xl text-neutral-muted">
            Görüş, öneri ve şikayetlerinizi aşağıdaki formu doldurarak bize iletebilirsiniz.
            En kısa sürede sizinle iletişime geçeceğiz.
          </p>
        </div>

        {/* İçerik — Sol: Form, Sağ: Bilgi Kartı */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Sol — Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg md:p-10">
              <h2 className="mb-6 text-xl font-bold text-neutral-dark">
                <span className="material-symbols-outlined mr-2 align-middle text-primary">edit_note</span>
                Dilek & Şikayet Formu
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                      Adınız Soyadınız *
                    </label>
                    <input
                      className="w-full rounded-xl border border-slate-200 bg-background-light px-4 py-3 text-sm text-neutral-dark placeholder-slate-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Adınız Soyadınız"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                      E-posta Adresiniz *
                    </label>
                    <input
                      className="w-full rounded-xl border border-slate-200 bg-background-light px-4 py-3 text-sm text-neutral-dark placeholder-slate-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="ornek@email.com"
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                    Konu
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-background-light px-4 py-3 text-sm text-neutral-dark placeholder-slate-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Mesajınızın konusu"
                    type="text"
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-muted">
                    Mesajınız *
                  </label>
                  <textarea
                    className="w-full rounded-xl border border-slate-200 bg-background-light px-4 py-3 text-sm text-neutral-dark placeholder-slate-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Mesajınızı buraya yazın..."
                    rows={6}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={contactLoading}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-bold text-neutral-dark shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] disabled:opacity-50"
                >
                  {contactLoading ? (
                    <span className="animate-spin material-symbols-outlined text-lg">progress_activity</span>
                  ) : (
                    <span className="material-symbols-outlined text-lg">send</span>
                  )}
                  {contactLoading ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                </button>
                {contactStatus === 'success' && (
                  <div className="flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.
                  </div>
                )}
                {contactStatus === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    <span className="material-symbols-outlined text-red-500">error</span>
                    Bir hata oluştu. Lütfen tekrar deneyin.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Sağ — İletişim Bilgileri Kartı */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-lg md:p-10">
              <h2 className="mb-8 text-xl font-bold text-neutral-dark">
                <span className="material-symbols-outlined mr-2 align-middle text-primary">contact_support</span>
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                {/* Telefon */}
                <a href="tel:+905550710579" className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-background-light p-4 transition-all hover:border-primary/20 hover:shadow-md">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-neutral-dark">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-dark">Telefon</h3>
                    <p className="text-sm text-neutral-muted">+90 (555) 071 05 79</p>
                    <p className="mt-1 text-xs text-slate-400">Hafta içi: 09:00 - 18:00</p>
                  </div>
                </a>



                {/* Adres */}
                <div className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-background-light p-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-dark">Adres</h3>
                    <p className="text-sm text-neutral-muted">
                      Oruçoğlu, Oruçoğlu Yolu :75, 34983, 34104
                    </p>
                    <p className="text-sm text-neutral-muted">Şile, İstanbul</p>
                  </div>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className="mt-8 border-t border-slate-100 pt-8">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent-gold">
                  Sosyal Medya
                </h3>
                <div className="flex gap-3">
                  <a
                    className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                    href="https://www.instagram.com/ugurlukurban"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram text-lg"></i>
                  </a>
                  <a
                    className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                    href="https://wa.me/905550710579"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
