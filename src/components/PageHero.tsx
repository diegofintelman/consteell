import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  crumb: string;
}

export function PageHero({ title, subtitle, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#111827] pt-36 pb-20 clip-diagonal-bottom">
      <div className="absolute inset-0 bg-trellis opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2236] via-transparent to-[#0a0e1a]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8c98a8]"
        >
          <Link to="/" className="hover:text-[#c8d0dc]">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#c8d0dc]">{crumb}</span>
        </nav>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold uppercase tracking-wide text-steel-gradient md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
          {subtitle}
        </p>
        <div className="divider-steel mt-8 w-32" />
      </div>
    </section>
  );
}
