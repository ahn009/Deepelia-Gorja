"use client";

import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/15">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src="/assets/images/logo.jpeg"
              alt="Author Deepi Logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all"
              priority
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-primary rounded-full flex items-center justify-center">
              <BookOpen size={8} className="text-primary-foreground" />
            </div>
          </div>
          <div>
            <span className="font-display text-lg text-primary font-bold tracking-wide group-hover:text-gold-light transition-colors">Deepi</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">Journey Beyond Borders</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              className={`text-xs uppercase tracking-wider px-3 py-2 rounded-md font-body transition-all duration-200 ${
                pathname === link.path
                  ? "text-primary bg-primary/10 font-bold"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#" className="gold-btn px-5 py-2 rounded-md text-xs">Buy Book</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary p-1.5 rounded-md hover:bg-primary/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background/95 backdrop-blur-xl border-t border-primary/10 px-4 pb-5 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm uppercase tracking-wider font-body transition-colors border-b border-border/30 last:border-0 ${
                pathname === link.path
                  ? "text-primary font-bold"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="#" className="gold-btn px-6 py-2.5 rounded-md text-sm mt-4 block text-center">Buy Book</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
