import Link from 'next/link'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/GMG-TechnologyLogo.png"
                  alt="GMG Technology"
                  className="h-12 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-white hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all hover:scale-105">
                  Home
                </Link>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all hover:scale-105">
                  About
                </Link>
                <Link href="/products" className="text-gray-400 hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all hover:scale-105">
                  Products
                </Link>
                <Link href="/contact" className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/50 transition-all transform hover:scale-105">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent_50%)]"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Logo Hero */}
          <div className="flex justify-center mb-10">
            <img
              src="/GMG-TechnologyLogo.png"
              alt="GMG Technology"
              className="h-52 md:h-72 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-dark-border mb-8 animate-float">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-300">Building the future of golf tech</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-tight">
            <span className="text-white">
              Golf. But
            </span>
            <br />
            <span className="text-primary-400">
              Actually Good.
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
            We&apos;re building the tech stack that golf deserves. 
            <span className="text-primary-400 font-semibold"> No BS. Just results.</span>
          </p>

          <div className="flex justify-center space-x-6 flex-wrap gap-4">
            <Link
              href="/products"
              className="group relative px-8 py-4 bg-primary-500 rounded-full text-lg font-bold hover:bg-primary-400 hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
            >
              <span className="relative z-10">Check Our Products</span>
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-dark-card border-2 border-dark-border rounded-full text-lg font-bold hover:border-primary-500 transition-all transform hover:scale-105"
            >
              Meet the Team
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-primary-400 mb-2">2</div>
              <div className="text-sm text-gray-400 font-semibold">PRODUCTS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary-400 mb-2">&infin;</div>
              <div className="text-sm text-gray-400 font-semibold">POTENTIAL</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary-400 mb-2">100%</div>
              <div className="text-sm text-gray-400 font-semibold">BUILT DIFFERENT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 font-bold text-sm">WHAT WE BUILD</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="text-white">
                Two Products.
              </span>
              <br />
              <span className="text-primary-400">
                One Mission.
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weekend Warrior */}
            <div className="group relative bg-dark-card border border-dark-border rounded-2xl p-10 hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mr-4 transform group-hover:rotate-12 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-1">Weekend Warrior</h3>
                  <p className="text-primary-400 font-bold">For Players</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                The golf app that actually gets it. Score rounds, run money games, manage tournaments. 
                <span className="text-white font-semibold"> No compromises.</span>
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  '8+ Game Formats (Wolf, Skins, Chicago, etc.)',
                  'Advanced Betting & Auto-Payouts',
                  'League Management & Tournaments',
                  'SMS Invites & Live Leaderboards'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="px-4 py-2 bg-primary-500/20 rounded-full">
                  <span className="text-primary-400 font-bold text-sm">B2C • iOS & Android</span>
                </div>
                <div className="text-2xl">🏌️</div>
              </div>
            </div>

            {/* Club Pro GMS */}
            <div className="group relative bg-dark-card border border-dark-border rounded-2xl p-10 hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mr-4 transform group-hover:rotate-12 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-1">Club Pro GMS</h3>
                  <p className="text-primary-400 font-bold">For Courses</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                The management system golf courses have been waiting for. 
                <span className="text-white font-semibold"> AI-powered. Modern. Actually works.</span>
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Advanced Tee Book Management',
                  'AI Phone Booking Assistant',
                  'Tournament Management System',
                  'Member Management & Analytics'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="px-4 py-2 bg-primary-500/20 rounded-full">
                  <span className="text-primary-400 font-bold text-sm">B2B SaaS • Web Platform</span>
                </div>
                <div className="text-2xl">⛳</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 bg-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.05),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 font-bold text-sm">THE FOUNDERS</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="text-white">
                Built by Golfers.
              </span>
              <br />
              <span className="text-primary-400">
                For Golfers.
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Chris Gatlin */}
            <div className="group bg-dark-card border border-dark-border rounded-2xl p-10 hover:border-primary-500 transition-all hover:shadow-2xl hover:shadow-primary-500/20">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-primary-500 rounded-2xl flex items-center justify-center text-3xl font-black text-white transform group-hover:scale-110 transition-transform">
                    CG
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-400 rounded-full border-4 border-dark-card animate-pulse"></div>
                </div>
                <h3 className="text-3xl font-black text-white mb-2">Chris Gatlin</h3>
                <p className="text-primary-400 font-bold text-lg">Founder & CEO</p>
              </div>
              <p className="text-gray-400 text-center leading-relaxed">
                The guy who actually codes. Full-stack wizard, product strategist, and the reason this company exists. 
                <span className="text-white font-semibold"> Ships fast. Builds better.</span>
              </p>
            </div>

            {/* Taylor Mobley */}
            <div className="group bg-dark-card border border-dark-border rounded-2xl p-10 hover:border-primary-500 transition-all hover:shadow-2xl hover:shadow-primary-500/20">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-3xl font-black text-white transform group-hover:scale-110 transition-transform">
                    TM
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-400 rounded-full border-4 border-dark-card animate-pulse"></div>
                </div>
                <h3 className="text-3xl font-black text-white mb-2">Taylor Mobley</h3>
                <p className="text-primary-400 font-bold text-lg">Co-Founder</p>
              </div>
              <p className="text-gray-400 text-center leading-relaxed">
                The strategic mind. System architect, UX wizard, and the one who makes sure we don&apos;t build garbage. 
                <span className="text-white font-semibold"> Scales right. Thinks bigger.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-dark-surface border-t border-primary-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-black mb-6 text-white">
            Ready to Level Up?
          </h2>
          <p className="text-2xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Join the golfers and courses already using our platforms. 
            <span className="text-primary-400 font-bold"> No credit card required to start.</span>
          </p>
          <div className="flex justify-center space-x-6 flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-10 py-5 bg-primary-500 text-white rounded-full text-lg font-black hover:bg-primary-400 hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
            >
              Get Started Now
            </Link>
            <Link
              href="/products"
              className="px-10 py-5 bg-dark-card border-2 border-dark-border text-white rounded-full text-lg font-bold hover:border-primary-500 transition-all transform hover:scale-105"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-dark-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/GMG-TechnologyLogo.png"
                alt="GMG Technology"
                className="h-20 w-auto mb-3"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
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
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Weekend Warrior</span></li>
                <li><span className="hover:text-primary-400 transition-colors cursor-pointer">Club Pro GMS</span></li>
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
    </Fragment>
  )
}
