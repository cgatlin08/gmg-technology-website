import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="bg-dark-surface border-b border-dark-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                GMG Technology
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-dark-text hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-dark-muted hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </Link>
                <Link href="/products" className="text-dark-muted hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Products
                </Link>
                <Link href="/contact" className="text-dark-muted hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
              Revolutionizing Golf Technology
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-dark-muted max-w-3xl mx-auto">
              Building innovative platforms that connect golfers, courses, and communities through cutting-edge technology
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg shadow-primary-600/50"
              >
                Explore Products
              </Link>
              <Link
                href="/about"
                className="bg-dark-card border-2 border-primary-600 text-primary-400 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Our Products</h3>
            <p className="text-lg text-dark-muted">Two powerful platforms transforming the golf industry</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Weekend Warrior */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-primary-600 transition-all transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600/20 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white">Weekend Warrior</h4>
              </div>
              <p className="text-dark-muted mb-4">
                The ultimate golf game management app for players. Score rounds, manage betting games, organize tournaments, and connect with your golf group.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-dark-text">
                  <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  8+ Game Formats (Wolf, Skins, Stableford, Chicago)
                </li>
                <li className="flex items-center text-dark-text">
                  <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Advanced Betting & Money Games
                </li>
                <li className="flex items-center text-dark-text">
                  <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  League Management & Tournaments
                </li>
                <li className="flex items-center text-dark-text">
                  <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  SMS Invitations & Live Leaderboards
                </li>
              </ul>
              <div className="text-sm text-primary-400 font-semibold">B2C Mobile App • iOS & Android</div>
            </div>

            {/* Club Pro GMS */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-primary-600 transition-all transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600/20 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white">Club Pro GMS</h4>
              </div>
              <p className="text-dark-muted mb-4">
                Comprehensive golf course management system with AI-powered features. Manage tee times, tournaments, members, and operations all in one platform.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-dark-text">
                  <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Advanced Tee Book Management
                </li>
                <li className="flex items-center text-dark-text">
                  <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI Phone Booking Assistant
                </li>
                <li className="flex items-center text-dark-text">
                  <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tournament Management System
                </li>
                <li className="flex items-center text-dark-text">
                  <svg className="w-5 h-5 text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Member Management & Analytics
                </li>
              </ul>
              <div className="text-sm text-primary-400 font-semibold">B2B SaaS Platform • Web Dashboard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Meet the Founders</h3>
            <p className="text-lg text-dark-muted">Passionate technologists building the future of golf</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chris Gatlin */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
                  CG
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Chris Gatlin</h4>
                  <p className="text-primary-400">Founder & CEO</p>
                </div>
              </div>
              <p className="text-dark-muted">
                Visionary leader and full-stack developer with a passion for creating innovative solutions that solve real-world problems. Chris brings extensive experience in mobile app development, cloud architecture, and product strategy to GMG Technology.
              </p>
            </div>

            {/* Taylor Mobley */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
                  TM
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Taylor Mobley</h4>
                  <p className="text-primary-400">Co-Founder</p>
                </div>
              </div>
              <p className="text-dark-muted">
                Strategic partner and technology enthusiast focused on building scalable platforms that drive business growth. Taylor contributes deep expertise in system architecture, user experience design, and business development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Why Choose GMG Technology?</h3>
            <p className="text-lg text-dark-muted">Innovation, reliability, and excellence in every product</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-dark-card rounded-xl border border-dark-border">
              <div className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Cutting-Edge Technology</h4>
              <p className="text-dark-muted">Built with modern frameworks and AI-powered features that set industry standards</p>
            </div>
            <div className="text-center p-6 bg-dark-card rounded-xl border border-dark-border">
              <div className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Enterprise-Grade Security</h4>
              <p className="text-dark-muted">Bank-level security and compliance for your peace of mind</p>
            </div>
            <div className="text-center p-6 bg-dark-card rounded-xl border border-dark-border">
              <div className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Dedicated Support</h4>
              <p className="text-dark-muted">Expert team committed to your success with responsive support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Golf Experience?</h3>
          <p className="text-xl mb-8 text-primary-100">Join thousands of golfers and courses using our platforms</p>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/products"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-dark-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">GMG Technology</h4>
              <p className="text-dark-muted">Revolutionizing golf through innovative technology solutions.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Company</h5>
              <ul className="space-y-2 text-dark-muted">
                <li><Link href="/about" className="hover:text-primary-400 transition-colors">About</Link></li>
                <li><Link href="/products" className="hover:text-primary-400 transition-colors">Products</Link></li>
                <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Products</h5>
              <ul className="space-y-2 text-dark-muted">
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Weekend Warrior</span></li>
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Club Pro GMS</span></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Legal</h5>
              <ul className="space-y-2 text-dark-muted">
                <li><Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-border mt-8 pt-8 text-center text-dark-muted">
            <p>&copy; {new Date().getFullYear()} GMG Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
