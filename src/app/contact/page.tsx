import Link from 'next/link';
import { BookOpen, Users, ArrowRight, CheckCircle, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const faqs = [
    {
      q: "What types of businesses do you work with?",
      a: "We specialize in serving local businesses across various industries. If you serve a local market, we're likely a great fit."
    },
    {
      q: "How long does a typical project take?",
      a: "Most website projects are completed within 4-8 weeks. SEO and digital marketing are ongoing engagements with results typically visible within 3-6 months."
    },
    {
      q: "Do you offer ongoing support after my project is complete?",
      a: "Absolutely. Ongoing management and support is a core part of what we offer — we don't disappear after launch."
    },
    {
      q: "How much does a website cost?",
      a: "Every project is custom. We provide detailed proposals after our discovery call so you know exactly what to expect."
    }
  ];

  const steps = [
    { title: "Reach Out", desc: "Send us a message with details about your project or question." },
    { title: "We Respond", desc: "We'll get back to you within 24 hours to schedule a conversation." },
    { title: "Discovery Call", desc: "We learn about your business, goals, and challenges in a free, no-obligation call." },
    { title: "Custom Proposal", desc: "You'll receive a tailored proposal with options that fit your needs and budget." }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding pt-40 md:pt-48 bg-white dark:bg-soft-black">
        <div className="container-custom">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-obsidian dark:text-off-white mb-6">
              Let's Talk
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary dark:text-text-dark mb-10">
              Ready to start your project or have questions? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="section-padding bg-off-white dark:bg-charcoal/10 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white dark:bg-charcoal p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 animate-in fade-in duration-1000 delay-200">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-obsidian dark:text-off-white mb-2">Name*</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-soft-black/50 focus:ring-2 focus:ring-teal-accent focus:bg-white outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-obsidian dark:text-off-white mb-2">Email*</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-soft-black/50 focus:ring-2 focus:ring-teal-accent focus:bg-white outline-none transition-all" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-obsidian dark:text-off-white mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-soft-black/50 focus:ring-2 focus:ring-teal-accent focus:bg-white outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-obsidian dark:text-off-white mb-2">Company</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-soft-black/50 focus:ring-2 focus:ring-teal-accent focus:bg-white outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-obsidian dark:text-off-white mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-soft-black/50 focus:ring-2 focus:ring-teal-accent focus:bg-white outline-none transition-all">
                    <option>Website Design</option>
                    <option>Local SEO</option>
                    <option>Digital Marketing</option>
                    <option>Google Business Profile</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-obsidian dark:text-off-white mb-2">Message*</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-soft-black/50 focus:ring-2 focus:ring-teal-accent focus:bg-white outline-none transition-all" required></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-4 text-lg shadow-xl hover:shadow-teal-accent/20">
                  Send Message <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Info and Alt Contact */}
            <div className="flex flex-col justify-center">
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-obsidian dark:text-off-white mb-8">Alternative Contact Methods</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-teal-accent/10 rounded-2xl flex items-center justify-center text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-obsidian/40 dark:text-off-white/40 uppercase tracking-widest">Email Us</p>
                      <a href="mailto:hello@schwarzwebconsulting.com" className="text-xl text-text-secondary dark:text-text-dark hover:text-teal-accent font-medium">hello@schwarzwebconsulting.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-teal-accent/10 rounded-2xl flex items-center justify-center text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-obsidian/40 dark:text-off-white/40 uppercase tracking-widest">Location</p>
                      <p className="text-xl text-text-secondary dark:text-text-dark font-medium leading-tight">Serving businesses locally — virtual consultations available nationwide.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-obsidian dark:text-off-white mb-8">What to Expect</h3>
                <div className="space-y-8 relative before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800">
                  {steps.map((step, idx) => (
                    <div key={idx} className="relative pl-16 group">
                      <div className="absolute left-0 top-1 w-14 h-14 rounded-2xl bg-white dark:bg-charcoal border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center font-bold text-xl text-teal-accent z-10 group-hover:border-teal-accent transition-colors">
                        {idx + 1}
                      </div>
                      <h5 className="font-bold text-xl text-obsidian dark:text-off-white mb-1">{step.title}</h5>
                      <p className="text-text-secondary dark:text-text-dark">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-soft-black">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-obsidian dark:text-off-white">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-teal-accent/30 transition-all">
                <h4 className="text-xl font-bold text-obsidian dark:text-off-white mb-4 flex items-start gap-3">
                   <CheckCircle className="w-6 h-6 text-teal-accent flex-shrink-0 mt-0.5" />
                   {faq.q}
                </h4>
                <p className="text-lg text-text-secondary dark:text-text-dark pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
