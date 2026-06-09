import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 bg-obsidian text-off-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight mb-6 block">
              SWC<span className="text-teal-accent">.</span>
            </Link>
            <p className="text-text-dark/60 max-w-sm mb-6">
              Web design, local SEO, and digital marketing for businesses that mean business.
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
  );
}
