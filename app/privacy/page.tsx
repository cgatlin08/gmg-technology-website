import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <nav className="fixed top-0 w-full bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <img src="/GMG-TechnologyLogo.png" alt="GMG Technology" className="h-12 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-400 hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all">Home</Link>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all">About</Link>
                <Link href="/products" className="text-gray-400 hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all">Products</Link>
                <Link href="/contact" className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary-400 transition-all">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.06),transparent_50%)]" />
        </div>
        <article className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-10">
            <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
            <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-400">
              <p>
                GMG Technology (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This policy describes how we collect, use, and protect information when you use our website and our products, including <a href="https://weekendwarriorgolf.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Weekend Warrior</a> and <a href="https://clubprogms.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Club Pro GMS</a>.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Information We Collect</h2>
              <p>We may collect information you provide directly (e.g., name, email, phone number when you contact us or sign up for a product), information from your use of our services (e.g., device type, usage data), and information from cookies or similar technologies used on our website.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">How We Use Your Information</h2>
              <p>We use this information to provide, maintain, and improve our products and services; to communicate with you; to process transactions; and to comply with legal obligations. We do not sell your personal information to third parties.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Data Security</h2>
              <p>We implement reasonable technical and organizational measures to protect your data. No method of transmission over the internet is 100% secure; we encourage you to use strong credentials and keep them confidential.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Third-Party Services</h2>
              <p>Our products may integrate with or link to third-party services (e.g., payment processors, cloud infrastructure). Their use of your data is governed by their own privacy policies.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Your Rights</h2>
              <p>Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights or ask questions, contact us at <Link href="/contact" className="text-primary-400 hover:text-primary-300">our contact page</Link>.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Changes</h2>
              <p>We may update this policy from time to time. We will post the updated policy on this page and update the &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the updated policy.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Contact</h2>
              <p>For privacy-related questions or requests, contact GMG Technology via <Link href="/contact" className="text-primary-400 hover:text-primary-300">Contact</Link>.</p>
            </div>

            <div className="mt-10 pt-6 border-t border-dark-border">
              <Link href="/" className="text-primary-400 hover:text-primary-300 font-semibold">← Back to home</Link>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-dark-bg border-t border-dark-border py-12 relative z-10">
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
