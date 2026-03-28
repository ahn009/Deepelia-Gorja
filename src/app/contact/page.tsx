import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether it's a speaking engagement, media inquiry, or just a hello — I'd love to hear from you.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-display text-4xl md:text-6xl text-center gold-gradient-text mb-4">Contact</h1>
            <p className="text-center text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Whether it&apos;s a speaking engagement, media inquiry, or just a hello — I&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl text-primary mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="navy-card rounded-lg p-5 flex items-start gap-4">
                      <Mail size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Professional Email</p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary font-body hover:underline">{CONTACT_EMAIL}</a>
                      </div>
                    </div>
                    <div className="navy-card rounded-lg p-5 flex items-start gap-4">
                      <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">General & Media Inquiries</p>
                        <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="text-primary font-body hover:underline">{CONTACT_PHONE}</a>
                      </div>
                    </div>
                    <div className="navy-card rounded-lg p-5 flex items-start gap-4">
                      <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</p>
                        <p className="text-foreground font-body">Houston, Texas, USA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-lg text-primary mb-4">Connect on Social Media</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, label: "Facebook" },
                      { icon: Instagram, label: "Instagram" },
                      { icon: Twitter, label: "Twitter/X" },
                      { icon: Linkedin, label: "LinkedIn" },
                      { icon: Youtube, label: "YouTube" },
                    ].map(({ icon: Icon, label }) => (
                      <a key={label} href="#" aria-label={label} className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="navy-card rounded-lg p-5">
                  <h3 className="font-display text-lg text-primary mb-2">Book Deepika for Speaking</h3>
                  <p className="text-foreground/80 font-body text-sm leading-relaxed">
                    Available for TEDx events, corporate keynotes, community talks, book clubs, and literary festivals. Reach out to discuss your event!
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="font-display text-2xl text-primary mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
