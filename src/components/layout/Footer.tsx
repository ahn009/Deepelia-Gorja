"use client";

import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, ArrowUp, Heart } from "lucide-react";
import Link from "next/link";
import { navLinks, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-primary/15">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <h3 className="font-display text-2xl gold-gradient-text mb-3">Deepika Gorji</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Author, Speaker & Lifelong Learner. Sharing stories of resilience from India to Iraq to Canada to the USA.
              </p>
              <p className="font-accent italic text-primary text-lg">&quot;Survive. Learn. Move On.&quot;</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Explore</h4>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link key={link.label} href={link.path} className="text-foreground/70 hover:text-primary font-body text-sm py-1 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">Contact</h4>
              <div className="space-y-3">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground/70 hover:text-primary font-body text-sm flex items-center gap-2 transition-colors">
                  <Mail size={14} className="text-primary" /> {CONTACT_EMAIL}
                </a>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="text-foreground/70 hover:text-primary font-body text-sm flex items-center gap-2 transition-colors">
                  <Phone size={14} className="text-primary" /> {CONTACT_PHONE}
                </a>
              </div>

              <div className="flex gap-2.5 mt-5">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter/X" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Youtube, label: "YouTube" },
                ].map(({ icon: Icon, label }) => (
                  <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-primary/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-6" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs font-body">
              © {new Date().getFullYear()} Deepika Gorji. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground text-xs font-body">
              <span className="flex items-center gap-1">Made with <Heart size={12} className="text-primary" /> for storytellers</span>
              <button onClick={scrollToTop} aria-label="Scroll to top" className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
