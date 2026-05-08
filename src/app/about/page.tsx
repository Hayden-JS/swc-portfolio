import Link from 'next/link';
import { Heart, Award, Users, BarChart, ArrowRight, Check } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding pt-40 md:pt-48 bg-white dark:bg-soft-black">
        <div className="container-custom text-center animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-obsidian dark:text-off-white mb-6">
            About Schwarz Web Consulting
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary dark:text-text-dark mb-10 max-w-3xl mx-auto">
            We help local businesses grow through strategic web design, SEO, and digital marketing — with a focus on real results, not just rankings.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-off-white dark:bg-charcoal/30 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container-custom max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-obsidian dark:text-off-white">Our Story</h2>
          <div className="space-y-6 text-lg text-text-secondary dark:text-text-dark leading-relaxed">
            <p>
              Schwarz Web Consulting was founded on a simple belief: local businesses deserve the same quality web presence as enterprise companies — without the enterprise price tag.
            </p>
            <p>
              We saw too many small businesses struggling with slow, outdated websites that didn't convert, invisible search rankings, and digital marketing that drained budgets without delivering returns.
            </p>
            <p>
              We built SWC to be different. A partner who actually understands local markets, delivers measurable results, and treats every client like they matter — because they do.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-white dark:bg-soft-black">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-obsidian dark:text-off-white">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card group hover:border-teal-accent/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-accent/10 rounded-xl flex items-center justify-center text-teal-accent">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-obsidian dark:text-off-white">Strategy First</h3>
              </div>
              <p className="text-text-secondary dark:text-text-dark">
                Every project starts with understanding your business goals, target audience, and competitive landscape — so we build something that actually works for you.
              </p>
            </div>
            <div className="card group hover:border-teal-accent/30 transition-all">
               <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-accent/10 rounded-xl flex items-center justify-center text-teal-accent">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-obsidian dark:text-off-white">Transparent Process</h3>
              </div>
              <p className="text-text-secondary dark:text-text-dark">
                No hidden fees, no surprises, no jargon. We keep you informed at every step with clear communication and honest timelines.
              </p>
            </div>
            <div className="card group hover:border-teal-accent/30 transition-all">
               <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-accent/10 rounded-xl flex items-center justify-center text-teal-accent">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-obsidian dark:text-off-white">Results-Focused</h3>
              </div>
              <p className="text-text-secondary dark:text-text-dark">
                We measure success by your outcomes — leads generated, traffic grown, conversions achieved — not by vanity metrics.
              </p>
            </div>
            <div className="card group hover:border-teal-accent/30 transition-all">
               <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-teal-accent/10 rounded-xl flex items-center justify-center text-teal-accent">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-obsidian dark:text-off-white">Ongoing Partnership</h3>
              </div>
              <p className="text-text-secondary dark:text-text-dark">
                Our job doesn't end at launch. We provide ongoing management, updates, and optimization to ensure continued growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-charcoal text-off-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Integrity</h4>
              <p className="text-text-dark/60">Honest advice, transparent pricing, realistic expectations.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Excellence</h4>
              <p className="text-text-dark/60">Every pixel, every line of code, every strategy — done right.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Partnership</h4>
              <p className="text-text-dark/60">Your success is our success.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-teal-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all">
                <BarChart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Results</h4>
              <p className="text-text-dark/60">We do what works, not what's easy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-teal-accent text-obsidian">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <Link href="/contact" className="bg-obsidian text-off-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-soft-black transition-all hover:scale-105 shadow-xl inline-flex items-center mt-6">
            Get Your Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}
