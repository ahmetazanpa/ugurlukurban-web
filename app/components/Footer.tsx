import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/5 bg-background-dark px-6 pb-8 pt-16 text-white md:px-20"
    >
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        <div className="col-span-1">
          <div className="mb-6 flex items-center gap-3">
            <Image src={logo} alt="Logo" className="flex items-stretch" width={75} height={45} />
          </div>
          <p className="mb-6 text-sm leading-relaxed text-slate-400">
            İslami hassasiyetlere uygun, dürüst ve şeffaf hizmet
            anlayışımızla kurban emanetlerinizi ihtiyaç sahiplerine
            ulaştırıyoruz.
          </p>
          <div className="flex gap-4">
            <a
              className="flex size-10 items-center justify-center rounded-full bg-slate-700 transition-all hover:bg-primary hover:text-neutral-dark text-sm"
              href="https://www.instagram.com/ugurlukurban"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              className="flex size-10 items-center justify-center rounded-full bg-slate-700 transition-all hover:bg-primary hover:text-neutral-dark text-sm"
              href="https://wa.me/905550710579"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-6 w-fit border-b border-primary pb-1 text-lg font-bold text-white">
            Hızlı Bağlantılar
          </h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li>
              <Link
                className="transition-colors hover:text-primary"
                href="/"
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-primary"
                href="/#services"
              >
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <a
                className="transition-colors hover:text-primary"
                href="https://bagis.ugurlar.org"
              >
                Bağış Yap
              </a>
            </li>
            <li>
              <Link
                className="transition-colors hover:text-primary"
                href="/iletisim"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 w-fit border-b border-primary pb-1 text-lg font-bold text-white">
            İletişim Bilgileri
          </h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>
              <a href="https://maps.app.goo.gl/ixsSUYutBQf7QPSE8" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                <span>
                  Oruçoğlu, Oruçoğlu Yolu :75, 34983, 34104
                  <br />
                  Şile, İstanbul
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                call
              </span>
              <span>+90 (555) 071 05 79</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>
              <span>ugurlukurban@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent-gold">
            Bize Ulaşın
          </h4>
          <p className="mb-4 text-xs text-slate-400">
            Görüş, öneri ve şikayetleriniz için iletişim sayfamızı ziyaret edin.
          </p>
          <Link
            href="/iletisim"
            className="flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-bold text-neutral-dark transition-all hover:bg-primary/90"
          >
            <span className="material-symbols-outlined text-base">mail</span>
            İletişim Formu
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 text-center text-xs text-slate-500">
        <p>
          © 2026 Kurban Kesim Hizmetleri. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
