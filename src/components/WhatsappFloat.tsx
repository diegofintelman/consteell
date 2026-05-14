import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

export function WhatsappFloat() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const threshold = isHome ? window.innerHeight * 0.85 : 300;
    const onScroll = () => setShow(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <a
      href="https://wa.me/5515998151587"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      title="Falar pelo WhatsApp"
      className={`group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0a0e1a] shadow-2xl transition-all duration-500 animate-pulse-soft hover:scale-110 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 whitespace-nowrap bg-[#0a0e1a] border border-[#2d3748] px-3 py-1.5 text-xs uppercase tracking-widest text-[#c8d0dc] opacity-0 transition-opacity group-hover:opacity-100">
        Falar pelo WhatsApp
      </span>
    </a>
  );
}
