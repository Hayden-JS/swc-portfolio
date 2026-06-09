'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Monitor, MapPin, TrendingUp, BadgeCheck } from 'lucide-react';
import { MeshGradient } from '@/components/MeshGradient';
import { MagneticButton } from '@/components/MagneticButton';

export default function ServicesPage() {
  const services = [
    {
      id: "web-design",
      title: "Website Design & Management",
      h2: "Design That Works. Management That's Effortless.",
      icon: Monitor,
      description: "Your website is your digital storefront — and first impressions matter. We build high-performance, conversion-focused websites that represent your brand professionally and turn visitors into customers.",
      includes: [
        "Custom website design tailored to your brand",
        "Mobile-first, responsive development",
        "SEO-optimized structure and content",
        "Fast loading speeds (sub-2-second load times)",
        "Ongoing management & deployment support",
        "SSL security & reliable hosting guidance"
      ],
      for: "Local businesses that need a professional website that actually converts visitors into leads and customers.",
      cta: "Start Your Website Project →",
      image: null
    },
    {
      id: "seo",
      title: "Local SEO Services",
      h2: "Be the Name Locals Trust",
      icon: MapPin,
      description: "When customers search for businesses like yours, you need to be found. Our local SEO strategies put your business front and center in search results — so you attract more customers in your service area.",
      includes: [
        "Local keyword research & strategy",
        "On-page SEO optimization",
        "Google Business Profile optimization",
        "Local citation building & cleanup",
        "Review management strategy",
        "Monthly ranking & traffic reports"
      ],
      for: "Local businesses that want to dominate search results and attract more customers in their geographic area.",
      cta: "Get Found Locally →",
      image: "/assets/seo-visual.png"
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      h2: "Strategy-Led Marketing That Converts",
      icon: TrendingUp,
      description: "Effective digital marketing reaches the right audience with the right message at the right time. We create strategic campaigns that build brand awareness, drive traffic, and generate leads.",
      includes: [
        "Digital strategy development",
        "Campaign setup & management",
        "Audience targeting & segmentation",
        "Ad creative development",
        "Conversion tracking & optimization",
        "Monthly performance reports"
      ],
      for: "Businesses that want to scale their online presence and reach more potential customers through targeted marketing.",
      cta: "Scale Your Marketing →",
      image: "/assets/marketing-visual.png"
    },
    {
      id: "gbp",
      title: "Google Business Profile Management",
      h2: "Your Google Presence, Fully Managed",
      icon: BadgeCheck,
      description: "Your Google Business Profile is often the first thing customers see when they find you online. We optimize and manage your GBP to maximize visibility, credibility, and customer engagement.",
      includes: [
        "GBP setup & optimization",
        "Category & attribute optimization",
        "Business description optimization",
        "Photo & video management",
        "Review response strategy",
        "Posts & updates management",
        "Monthly performance insights"
      ],
      for: "Any local business that wants to maximize their presence on Google and attract more local customers.",
      cta: "Optimize My GBP →",
      image: "/assets/gbp-visual.png"
    }
  ];

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
              Services Built to <span className="text-teal-accent">Scale Your Visibility</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary dark:text-text-dark mb-10 max-w-3xl mx-auto">
              Strategic digital solutions built for local business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-off-white dark:bg-charcoal/10">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id} 
                id={service.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`scroll-mt-32 flex flex-col gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="lg:w-1/2">
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-teal-accent/10 rounded-lg flex items-center justify-center text-teal-accent transition-all">
                          <service.icon className="w-5 h-5" />
                       </div>
                       <span className="text-teal-accent text-sm font-bold uppercase tracking-widest">{service.title}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-obsidian dark:text-off-white">
                      {service.h2}
                    </h2>
                  </div>
                  <p className="text-xl text-text-secondary dark:text-text-dark mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.image && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-[300px] w-full mb-8 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 lg:hidden"
                    >
                       <Image 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${service.image}`} 
                        alt={service.title} 
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  )}

                  <div className="mb-8 p-6 glass-card rounded-2xl">
                    <h4 className="font-bold text-obsidian dark:text-off-white mb-2">Who It&apos;s For:</h4>
                    <p className="text-text-secondary dark:text-text-dark">{service.for}</p>
                  </div>
                  <MagneticButton>
                    <Link href="/contact" className="btn-primary">
                      {service.cta} <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </MagneticButton>
                </div>
                
                <div className="lg:w-1/2 w-full">
                  {service.image ? (
                    <motion.div 
                      initial={{ opacity: 0, x: idx % 2 === 1 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-[500px] w-full hidden lg:block rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl group"
                    >
                      <Image 
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${service.image}`} 
                        alt={service.title} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent"></div>
                      <div className="absolute bottom-8 left-8">
                         <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                           className="bg-white dark:bg-charcoal p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
                         >
                            <h4 className="text-lg font-bold mb-4 text-obsidian dark:text-off-white">What&apos;s Included:</h4>
                            <ul className="space-y-3">
                              {service.includes.slice(0, 3).map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm text-text-secondary dark:text-text-dark">
                                  <Check className="w-5 h-5 text-teal-accent flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                              <li className="text-teal-accent text-sm font-medium">+ and more</li>
                            </ul>
                         </motion.div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-card p-8 md:p-12 rounded-3xl w-full"
                    >
                      <h4 className="text-xl font-bold mb-6 text-obsidian dark:text-off-white">What&apos;s Included:</h4>
                      <ul className="space-y-4">
                        {service.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-text-secondary dark:text-text-dark">
                            <Check className="w-6 h-6 text-teal-accent flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  
                  {/* For mobile view when image is present, still show full list */}
                  {service.image && (
                    <div className="glass-card p-8 mt-8 rounded-3xl w-full lg:hidden">
                      <h4 className="text-xl font-bold mb-6 text-obsidian dark:text-off-white">What&apos;s Included:</h4>
                      <ul className="space-y-4">
                        {service.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-text-secondary dark:text-text-dark">
                            <Check className="w-6 h-6 text-teal-accent flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-charcoal text-off-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-accent/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-text-dark/60 mb-10 max-w-2xl mx-auto">
              Not sure which service is right for you? Let&apos;s talk about your business goals and find the best approach.
            </p>
            <MagneticButton>
              <Link href="/contact" className="btn-primary text-lg">
                Schedule a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
