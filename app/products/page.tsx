import Link from 'next/link'

export default function Products() {
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
                <Link href="/products" className="text-white hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all hover:scale-105">Products</Link>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 font-bold text-sm">WHAT WE BUILD</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6">
              <span className="text-white">Two Products.</span>
              <br />
              <span className="text-primary-400">One Mission.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weekend Warrior */}
            <div className="group relative bg-dark-card border border-dark-border rounded-2xl p-10 hover:border-primary-500 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-1">Weekend Warrior</h2>
                  <p className="text-primary-400 font-bold">Golf league & group management • B2C</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Full-stack platform for competitive golfers: web dashboard plus iOS & Android apps. Manage groups, leagues, and tournaments with live scoring and 8+ game formats.
              </p>
              <div className="flex items-center justify-between">
                <span className="px-4 py-2 bg-primary-500/20 rounded-full text-primary-400 font-bold text-sm">$59.99 / $24.99 per year</span>
                <a href="https://weekendwarriorgolf.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 text-sm font-bold transition-colors">
                  weekendwarriorgolf.com →
                </a>
              </div>
            </div>

            {/* Club Pro GMS */}
            <div id="club-pro" className="group relative bg-dark-card border border-dark-border rounded-2xl p-10 hover:border-primary-500 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-1">Club Pro GMS</h2>
                  <p className="text-primary-400 font-bold">Course management • B2B</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                The operations platform for golf courses. Tee sheet, member management, pricing rules, and tournaments — powered by <strong className="text-white">Assistant Pro</strong>, your AI voice booking assistant that answers the phone and books tee times 24/7.
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>Assistant Pro — phone booking & SMS confirmations</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>Tee book & block times</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>Tournament management (Weekend Warrior integration)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>Member management & analytics</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="px-4 py-2 bg-primary-500/20 rounded-full text-primary-400 font-bold text-sm">B2B SaaS • Web</span>
                <a href="https://clubprogms.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 text-sm font-bold transition-colors">
                  clubprogms.com →
                </a>
              </div>
            </div>
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
