'use client';

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white/80 px-6 py-2 backdrop-blur-md md:px-20">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image src={logo} alt="Logo" className="flex p-4" width={200} height={100} />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end gap-8">
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            className="text-sm font-semibold text-neutral-dark transition-colors hover:text-primary"
            href="/"
          >
            Ana Sayfa
          </Link>
          <Link
            className="text-sm font-semibold text-neutral-dark transition-colors hover:text-primary"
            href="/#services"
          >
            Hizmetlerimiz
          </Link>
          <Link
            className="text-sm font-semibold text-neutral-dark transition-colors hover:text-primary"
            href="/#faq"
          >
            SSS
          </Link>
          <Link
            className="text-sm font-semibold text-neutral-dark transition-colors hover:text-primary"
            href="/iletisim"
          >
            İletişim
          </Link>
        </nav>
        <a
          href="https://bagis.ugurlar.org"
          className="flex h-10 min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary px-6 text-sm font-bold text-neutral-dark shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
        >
          <span className="truncate">Bağış Yap</span>
        </a>
      </div>
    </header>
  );
}
