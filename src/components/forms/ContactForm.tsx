"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground font-body block mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
          required
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground font-body block mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
          required
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground font-body block mb-2">Subject</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
          required
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground font-body block mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
          required
        />
      </div>
      <button type="submit" className="gold-btn px-8 py-3 rounded text-sm flex items-center gap-2">
        <Send size={16} /> Send Message
      </button>
    </form>
  );
}
