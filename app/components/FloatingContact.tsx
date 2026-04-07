'use client';

import { useState } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Sosyal Medya İconları — Açıldığında yukarı doğru çıkar */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-300 ${
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/ugurlukurban"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white shadow-lg shadow-pink-500/30 transition-all duration-200 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/40"
          title="Instagram"
        >
          <i className="fa-brands fa-instagram text-xl"></i>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/905550710579"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg shadow-green-500/30 transition-all duration-200 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40"
          title="WhatsApp"
        >
          <i className="fa-brands fa-whatsapp text-xl"></i>
        </a>
      </div>

      {/* Ana İletişim Butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex size-16 items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen
            ? 'bg-slate-700 text-white shadow-slate-700/30 rotate-45'
            : 'bg-primary text-neutral-dark shadow-primary/30 animate-bounce-slow'
        }`}
        title="İletişim"
      >
        <span className="material-symbols-outlined text-3xl transition-transform duration-300">
          {isOpen ? 'close' : 'call'}
        </span>
      </button>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-bounce-slow:hover {
          animation: none;
        }
      `}</style>
    </div>
  );
}
