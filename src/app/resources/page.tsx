import Link from 'next/link';
import { BookOpen, Search, ArrowRight, Mail, GraduationCap } from 'lucide-react';

export default function ResourcesPage() {
  const featuredResources = [
    {
      title: "The Local Business Website Checklist",
      description: "A comprehensive guide ensuring your website is optimized for performance, SEO, and conversions.",
      link: "#",
      type: "Checklist"
    },
    {
      title: "Google Business Profile Optimization Guide",
      description: "Step-by-step instructions to get the most out of your GBP.",
      link: "#",
      type: "Guide"
    },
    {
      title: "SEO Fundamentals for Local Businesses",
      description: "Everything you need to know about local SEO basics.",
      link: "#",
      type: "Course"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding pt-40 md:pt-48 bg-white dark:bg-soft-black">
        <div className="container-custom text-center animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-obsidian dark:text-off-white mb-6">
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary dark:text-text-dark mb-10 max-w-3xl mx-auto">
            Tools, insights, and guidance to help you succeed online.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-off-white dark:bg-charcoal/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card group hover:border-teal-accent/30">
              <div className="w-14 h-14 bg-teal-accent/10 rounded-2xl flex items-center justify-center mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-obsidian dark:text-off-white">For Business Owners</h2>
              <p className="text-lg text-text-secondary dark:text-text-dark leading-relaxed">
                Practical guides and tips to understand web design, SEO, and digital marketing — no technical jargon.
              </p>
            </div>
            <div className="card group hover:border-teal-accent/30">
              <div className="w-14 h-14 bg-teal-accent/10 rounded-2xl flex items-center justify-center mb-6 text-teal-accent group-hover:bg-teal-accent group-hover:text-obsidian transition-all">
                <BookOpen className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-obsidian dark:text-off-white">For Ongoing Clients</h2>
              <p className="text-lg text-text-secondary dark:text-text-dark leading-relaxed">
                Quick references, documentation, and support materials for our current partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding bg-white dark:bg-soft-black">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-obsidian dark:text-off-white mb-4">Featured Resources</h2>
              <p className="text-xl text-text-secondary dark:text-text-dark max-w-2xl">
                The latest insights to help your business grow.
              </p>
            </div>
            <div className="relative w-full md:w-auto">
               <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full md:w-80 pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-charcoal/50 focus:ring-2 focus:ring-teal-accent focus:bg-white outline-none transition-all"
               />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="card group hover:shadow-2xl transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                   <span className="px-3 py-1 bg-teal-accent/10 text-teal-accent text-xs font-bold uppercase tracking-widest rounded-full">
                    {resource.type}
                   </span>
                   <BookOpen className="w-5 h-5 text-text-secondary group-hover:text-teal-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-obsidian dark:text-off-white group-hover:text-teal-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-text-secondary dark:text-text-dark mb-8">
                  {resource.description}
                </p>
                <Link href={resource.link} className="btn-secondary w-full justify-center group-hover:bg-teal-accent group-hover:text-obsidian">
                  View Guide <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-charcoal text-off-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-teal-accent to-teal-hover text-obsidian p-12 md:p-20 rounded-[3rem] relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Ahead of the Curve</h2>
                <p className="text-xl opacity-90 font-medium">
                  Get our best tips, strategies, and updates delivered straight to your inbox. No spam, just valuable insights.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white px-6 py-5 rounded-2xl border-none shadow-inner focus:ring-4 focus:ring-obsidian/10 outline-none text-lg"
                  required 
                />
                <button type="submit" className="bg-obsidian text-off-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-soft-black transition-all hover:scale-105 active:scale-95 shadow-xl">
                  Subscribe
                </button>
              </form>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-obsidian/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
