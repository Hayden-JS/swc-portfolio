import Link from 'next/link';
import Image from 'next/image';
import { Zap, Search, ShieldCheck, Monitor, MapPin, Megaphone, Store, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding pt-40 md:pt-48 bg-white dark:bg-soft-black overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl animate-in fade-in slide-in-from-left duration-1000">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-obsidian dark:text-off-white mb-6">
                Your Website. Your Growth. <br className="hidden md:block" />
                <span className="text-teal-accent">Your Future.</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary dark:text-text-dark mb-10 max-w-2xl">
                Schwarz Web Consulting delivers high-performance websites, strategic SEO, and digital marketing that actually drives real business results for local companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  See Our Work
                </Link>
              </div>
            </div>
            <div className="relative lg:h-[600px] w-full animate-in fade-in slide-in-from-right duration-1000">
              <div className="absolute inset-0 bg-teal-accent/10 rounded-3xl blur-3xl -z-10 translate-x-12 translate-y-12"></div>
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/hero-visual.png`} 
                alt="SWC Digital Excellence" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-off-white dark:bg-charcoal/30">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-obsidian dark:text-off-white">
            Why Local Businesses Choose SWC
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-14 h-14 bg-teal-accent/10 rounded-2xl flex items-center justify-center mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all duration-300">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-obsidian dark:text-off-white">Performance That Converts</h3>
              <p className="text-text-secondary dark:text-text-dark">
                We build websites engineered for speed, mobile-first design, and conversion optimization — so every visitor becomes a customer.
              </p>
            </div>
            <div className="card group">
              <div className="w-14 h-14 bg-teal-accent/10 rounded-2xl flex items-center justify-center mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all duration-300">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-obsidian dark:text-off-white">Visibility That Scales</h3>
              <p className="text-text-secondary dark:text-text-dark">
                Our local SEO strategies put your business in front of the customers searching for you — right when it matters most.
              </p>
            </div>
            <div className="card group">
              <div className="w-14 h-14 bg-teal-accent/10 rounded-2xl flex items-center justify-center mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-obsidian dark:text-off-white">Partnership That Endures</h3>
              <p className="text-text-secondary dark:text-text-dark">
                We don't disappear after launch. We provide ongoing management, deployment, and optimization to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white dark:bg-soft-black">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-obsidian dark:text-off-white mb-4">What We Do</h2>
              <p className="text-xl text-text-secondary dark:text-text-dark max-w-2xl">
                Comprehensive digital solutions tailored for your business needs.
              </p>
            </div>
            <Link href="/services" className="btn-ghost p-0 hover:bg-transparent">
              View all services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card group hover:border-teal-accent/50">
              <div className="flex items-center gap-4 mb-4">
                <Monitor className="w-6 h-6 text-teal-accent" />
                <h4 className="text-xl font-bold text-obsidian dark:text-off-white">Website Design & Development</h4>
              </div>
              <p className="text-text-secondary dark:text-text-dark mb-6">
                Custom, high-performance websites built to convert visitors into customers. Mobile-first. SEO-optimized. Launch-ready.
              </p>
              <Link href="/services#web-design" className="text-teal-accent font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="card group hover:border-teal-accent/50">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-teal-accent" />
                <h4 className="text-xl font-bold text-obsidian dark:text-off-white">Local SEO Services</h4>
              </div>
              <p className="text-text-secondary dark:text-text-dark mb-6">
                Dominate local search results with proven strategies that put your business front and center when customers search.
              </p>
              <Link href="/services#seo" className="text-teal-accent font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="card group hover:border-teal-accent/50">
              <div className="flex items-center gap-4 mb-4">
                <Megaphone className="w-6 h-6 text-teal-accent" />
                <h4 className="text-xl font-bold text-obsidian dark:text-off-white">Digital Marketing</h4>
              </div>
              <p className="text-text-secondary dark:text-text-dark mb-6">
                Strategic campaigns that reach your audience, build brand awareness, and drive measurable growth.
              </p>
              <Link href="/services#marketing" className="text-teal-accent font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="card group hover:border-teal-accent/50">
              <div className="flex items-center gap-4 mb-4">
                <Store className="w-6 h-6 text-teal-accent" />
                <h4 className="text-xl font-bold text-obsidian dark:text-off-white">Google Business Profile Management</h4>
              </div>
              <p className="text-text-secondary dark:text-text-dark mb-6">
                Optimize and manage your GBP to attract more local customers and build lasting credibility online.
              </p>
              <Link href="/services#gbp" className="text-teal-accent font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-charcoal text-off-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Local Businesses</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
            <span className="text-lg font-medium flex items-center gap-2"><Zap className="w-5 h-5 text-teal-accent" /> Transparent Process</span>
            <span className="text-lg font-medium flex items-center gap-2"><Zap className="w-5 h-5 text-teal-accent" /> Results-Driven Approach</span>
            <span className="text-lg font-medium flex items-center gap-2"><Zap className="w-5 h-5 text-teal-accent" /> Ongoing Support</span>
            <span className="text-lg font-medium flex items-center gap-2"><Zap className="w-5 h-5 text-teal-accent" /> Proven Local Expertise</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-teal-accent text-obsidian relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Online Presence?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium opacity-90">
            Let's build a digital presence that works as hard as you do.
          </p>
          <Link href="/contact" className="bg-obsidian text-off-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-soft-black transition-all hover:scale-105 shadow-xl inline-flex items-center">
            Get Your Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 bg-obsidian text-off-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-2xl font-bold tracking-tight mb-6 block">
                SWC<span className="text-teal-accent">.</span>
              </Link>
              <p className="text-text-dark/60 max-w-sm mb-6">
                Schwarz Web Consulting provides high-level digital strategy and implementation for local businesses looking to grow.
              </p>
              <a href="mailto:hello@schwarzwebconsulting.com" className="text-teal-accent hover:underline">
                hello@schwarzwebconsulting.com
              </a>
            </div>
            <div>
              <h5 className="font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4 text-text-dark/60">
                <li><Link href="/" className="hover:text-teal-accent">Home</Link></li>
                <li><Link href="/about" className="hover:text-teal-accent">About</Link></li>
                <li><Link href="/services" className="hover:text-teal-accent">Services</Link></li>
                <li><Link href="/resources" className="hover:text-teal-accent">Resources</Link></li>
                <li><Link href="/contact" className="hover:text-teal-accent">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Connect</h5>
              <ul className="space-y-4 text-text-dark/60">
                <li><a href="#" className="hover:text-teal-accent">LinkedIn</a></li>
                <li><a href="#" className="hover:text-teal-accent">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-text-dark/40 text-sm">
            <p>© 2024 Schwarz Web Consulting. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-off-white">Privacy Policy</a>
              <a href="#" className="hover:text-off-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
