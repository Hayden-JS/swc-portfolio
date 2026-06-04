'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Heart, Award, Users, BarChart, ArrowRight, Shield } from 'lucide-react';
import { MeshGradient } from '@/components/MeshGradient';
import { MagneticButton } from '@/components/MagneticButton';

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative section-padding pt-40 md:pt-48 bg-white dark:bg-soft-black overflow-hidden min-h-[60vh] flex items-center">
        <MeshGradient className="opacity-50" />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-obsidian dark:text-off-white mb-6">
              About Schwarz Web Consulting
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary dark:text-text-dark mb-10 max-w-3xl mx-auto">
              We help local businesses grow through strategic web design, SEO, and digital marketing — with a focus on real results, not just rankings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-off-white dark:bg-charcoal/30 relative overflow-hidden">
        <div className="container-custom max-w-4xl relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-8 text-obsidian dark:text-off-white"
          >
            Our Story
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            className="space-y-6 text-lg text-text-secondary dark:text-text-dark leading-relaxed"
          >
            <motion.p variants={itemVariants}>
              Schwarz Web Consulting was founded on a simple belief: local businesses deserve the same quality web presence as enterprise companies — without the enterprise price tag.
            </motion.p>
            <motion.p variants={itemVariants}>
              We saw too many small businesses struggling with slow, outdated websites that didn&apos;t convert, invisible search rankings, and digital marketing that drained budgets without delivering returns.
            </motion.p>
            <motion.p variants={itemVariants}>
              We built SWC to be different. A partner who actually understands local markets, delivers measurable results, and treats every client like they matter — because they do.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-white dark:bg-soft-black">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-obsidian dark:text-off-white"
          >
            How We Work
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { icon: BarChart, title: "Strategy First", desc: "Every project starts with understanding your business goals, target audience, and competitive landscape — so we build something that actually works for you." },
              { icon: Users, title: "Transparent Process", desc: "No hidden fees, no surprises, no jargon. We keep you informed at every step with clear communication and honest timelines." },
              { icon: Award, title: "Results-Focused", desc: "We measure success by your outcomes — leads generated, traffic grown, conversions achieved — not by vanity metrics." },
              { icon: Heart, title: "Ongoing Partnership", desc: "Our job doesn&apos;t end at launch. We provide ongoing management, updates, and optimization to ensure continued growth." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-8 rounded-xl group transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-accent/10 rounded-xl flex items-center justify-center text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-obsidian dark:text-off-white">{item.title}</h3>
                </div>
                <p className="text-text-secondary dark:text-text-dark">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-charcoal text-off-white">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            What We Stand For
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Honest advice, transparent pricing, realistic expectations." },
              { icon: Award, title: "Excellence", desc: "Every pixel, every line of code, every strategy — done right." },
              { icon: Users, title: "Partnership", desc: "Your success is our success." },
              { icon: BarChart, title: "Results", desc: "We do what works, not what's easy." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-teal-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-text-dark/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-teal-accent text-obsidian overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <MagneticButton>
              <Link href="/contact" className="bg-obsidian text-off-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-soft-black transition-all shadow-xl inline-flex items-center mt-6">
                Get Your Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
