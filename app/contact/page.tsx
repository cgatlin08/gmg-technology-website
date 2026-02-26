import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/GMG-TechnologyLogo.png"
                alt="GMG Technology"
                className="h-12 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-400 hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all hover:scale-105">Home</Link>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all hover:scale-105">About</Link>
                <Link href="/products" className="text-gray-400 hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all hover:scale-105">Products</Link>
                <Link href="/contact" className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/50 transition-all transform hover:scale-105">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent_50%)]"></div>
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 font-bold text-sm">GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 text-white">
              Let&apos;s talk.
            </h1>
            <p className="text-xl text-gray-400">
              Interested in <Link href="/products" className="text-primary-400 hover:text-primary-300 font-semibold">Weekend Warrior</Link> or <Link href="/products" className="text-primary-400 hover:text-primary-300 font-semibold">Club Pro GMS</Link>? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-2xl p-10">
            <p className="text-gray-400 mb-6">
              Reach out via email for product demos, pricing, or partnerships.
            </p>
            <a
              href="mailto:hello@gmgtechnology.com"
              className="inline-flex items-center px-6 py-4 bg-primary-500 text-white rounded-full font-bold hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              hello@gmgtechnology.com
            </a>
            <p className="text-gray-500 text-sm mt-6">
              We typically respond within 1–2 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-dark-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/GMG-TechnologyLogo.png" alt="GMG Technology" className="h-20 w-auto mb-3" style={{ filter: 'brightness(0) invert(1)' }} />
              <p className="text-gray-500 text-sm">Building golf tech that doesn&apos;t suck.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-white">Company</h5>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="/about" className="hover:text-primary-400 transition-colors">About</Link></li>
                <li><Link href="/products" className="hover:text-primary-400 transition-colors">Products</Link></li>
                <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-white">Products</h5>
              <ul className="space-y-2 text-gray-500">
                <li><a href="https://weekendwarriorgolf.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Weekend Warrior</a></li>
                <li><a href="https://clubprogms.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Club Pro GMS</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-white">Legal</h5>
              <ul className="space-y-2 text-gray-500">
                <li><Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-primary-400 transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-border pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} GMG Technology. Built with passion and way too much coffee.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
