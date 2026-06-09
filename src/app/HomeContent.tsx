'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Zap, Search, ShieldCheck, Monitor, MapPin, Megaphone, Store, ArrowRight } from 'lucide-react';
import { MeshGradient } from '@/components/MeshGradient';
import { MagneticButton } from '@/components/MagneticButton';

export default function HomeContent() {
  const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // 80ms as per guide
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative section-padding pt-40 md:pt-48 bg-white dark:bg-soft-black overflow-hidden min-h-[90vh] flex items-center">
        <MeshGradient />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className="text-5xl md:text-7xl font-bold leading-[1.1] text-obsidian dark:text-off-white mb-6"
              >
                Your Business Deserves a <span className="text-teal-accent">Premium Web Presence</span>
              </motion.h1>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className="text-xl md:text-2xl text-text-secondary dark:text-text-dark mb-10 max-w-2xl"
              >
                Strategic web consulting, local SEO, and digital marketing for businesses ready to grow.
              </motion.p>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] } 
                  }
                }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <MagneticButton>
                  <Link href="/contact" className="btn-primary flex items-center">
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/services" className="btn-secondary flex items-center">
                    See Our Work
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="relative lg:h-[600px] w-full"
            >
              <div className="absolute inset-0 bg-teal-accent/10 rounded-3xl blur-3xl -z-10 translate-x-12 translate-y-12 animate-pulse"></div>
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/hero-visual.png`} 
                alt="SWC Digital Excellence" 
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-off-white dark:bg-charcoal/30">
        <div className="container-custom">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-obsidian dark:text-off-white"
          >
            Why Local Businesses Choose SWC
          </motion.h2>
          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Zap, title: "Performance That Converts", desc: "We build websites engineered for speed, mobile-first design, and conversion optimization — so every visitor becomes a customer." },
              { icon: Search, title: "Visibility That Scales", desc: "Our local SEO strategies put your business in front of the customers searching for you — right when it matters most." },
              { icon: ShieldCheck, title: "Partnership That Endures", desc: "We don&apos;t disappear after launch. We provide ongoing management, deployment, and optimization to ensure continued success." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="glass-card group p-8 rounded-xl"
              >
                <div className="w-14 h-14 bg-teal-accent/10 rounded-2xl flex items-center justify-center mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-obsidian dark:text-off-white">{item.title}</h3>
                <p className="text-text-secondary dark:text-text-dark">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white dark:bg-soft-black">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-obsidian dark:text-off-white mb-4">What We Do</h2>
              <p className="text-xl text-text-secondary dark:text-text-dark max-w-2xl">
                Comprehensive digital solutions tailored for your business needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/services" className="btn-ghost p-0 hover:bg-transparent group inline-flex items-center">
                View all services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { id: "web-design", icon: Monitor, title: "Website Design & Development", desc: "Custom, high-performance websites built to convert visitors into customers. Mobile-first. SEO-optimized. Launch-ready." },
              { id: "seo", icon: MapPin, title: "Local SEO Services", desc: "Dominate local search results with proven strategies that put your business front and center when customers search." },
              { id: "marketing", icon: Megaphone, title: "Digital Marketing", desc: "Strategic campaigns that reach your audience, build brand awareness, and drive measurable growth." },
              { id: "gbp", icon: Store, title: "Google Business Profile Management", desc: "Optimize and manage your GBP to attract more local customers and build lasting credibility online." }
            ].map((service) => (
              <motion.div 
                key={service.id}
                variants={cardVariants}
                className="glass-card group p-8 rounded-xl hover:border-teal-accent/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="w-6 h-6 text-teal-accent" />
                  <h4 className="text-xl font-bold text-obsidian dark:text-off-white">{service.title}</h4>
                </div>
                <p className="text-text-secondary dark:text-text-dark mb-6">{service.desc}</p>
                <Link href={`/services#${service.id}`} className="text-teal-accent font-medium hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-charcoal text-off-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-12">Trusted by Local Businesses</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
            {[
              "Transparent Process", "Results-Driven Approach", "Ongoing Support", "Proven Local Expertise"
            ].map((text, i) => (
              <motion.span 
                key={text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-lg font-medium flex items-center gap-2"
              >
                <Zap className="w-5 h-5 text-teal-accent" /> {text}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-teal-accent text-obsidian relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="container-custom text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Elevate Your Online Presence?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium opacity-90"
          >
            Let&apos;s build a digital presence that works as hard as you do.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <MagneticButton>
              <Link href="/contact" className="bg-obsidian text-off-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-soft-black transition-all shadow-xl inline-flex items-center">
                Get Your Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
