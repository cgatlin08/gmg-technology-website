import Link from 'next/link'

export default function About() {
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
                <Link href="/" className="text-gray-400 hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all hover:scale-105">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all hover:scale-105">
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 font-bold text-sm">OUR STORY</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-6">
              <span className="text-white">
                We Build
              </span>
              <br />
              <span className="text-primary-400">
                Golf Tech.
              </span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              No corporate BS. No legacy code. Just products that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-10">
            <h2 className="text-4xl font-black text-white mb-8">The Real Talk</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Golf tech has been stuck in 2010. We&apos;re here to change that.
              </p>
              <p>
                <strong className="text-white">Weekend Warrior</strong> started because we were tired of using garbage apps 
                that couldn&apos;t handle a simple Wolf game. So we built our own. Now it&apos;s the most comprehensive golf 
                game management platform out there. <span className="text-primary-400 font-semibold">8+ game formats. Advanced betting. 
                Real-time leaderboards. It just works.</span>
              </p>
              <p>
                Then courses started asking us for help. They were paying $500/month for software that looked like it was 
                built in 2005. So we built <strong className="text-white">Club Pro GMS</strong> — a modern operations platform with 
                <strong className="text-white">Assistant Pro</strong>, your AI assistant that answers the phone and books tee times. <span className="text-accent-400 font-semibold">Voice booking and SMS confirmations. Yeah, we did that.</span>
              </p>
              <p>
                We&apos;re not here to be another golf tech company. We&apos;re here to be <span className="text-white font-bold">the</span> golf tech company. 
                The one that ships fast, builds better, and doesn&apos;t make excuses.
              </p>
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
                  <div className="w-32 h-32 bg-primary-500 rounded-2xl flex items-center justify-center text-4xl font-black text-white transform group-hover:scale-110 transition-transform">
                    CG
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary-400 rounded-full border-4 border-dark-card animate-pulse"></div>
                </div>
                <h3 className="text-4xl font-black text-white mb-2">Chris Gatlin</h3>
                <p className="text-primary-400 font-bold text-xl">Founder & CEO</p>
              </div>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  The guy who codes. Full-stack developer, product strategist, and the reason this company exists. 
                  <span className="text-white font-semibold"> Ships fast. Builds better.</span>
                </p>
                <p>
                  Chris leads the technical direction of both Weekend Warrior and Club Pro GMS. When he&apos;s not coding, 
                  he&apos;s probably on the course testing new features. <span className="text-primary-400">Or thinking about them.</span>
                </p>
                <p>
                  A former high school and college golfer, Chris brings a player&apos;s perspective to every product. He graduated from 
                  <span className="text-white font-semibold"> Southeastern Oklahoma State University</span> with a <span className="text-white font-semibold">BS in Computer Information Systems</span>.
                </p>
                <div className="pt-4 border-t border-dark-border">
                  <p className="text-sm text-gray-500 font-semibold">FUN FACT:</p>
                  <p className="text-gray-300">Built the first Weekend Warrior prototype in 3 weeks. Still runs on that code.</p>
                </div>
              </div>
            </div>

            {/* Taylor Mobley */}
            <div className="group bg-dark-card border border-dark-border rounded-2xl p-10 hover:border-primary-500 transition-all hover:shadow-2xl hover:shadow-primary-500/20">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <div className="w-32 h-32 bg-primary-600 rounded-2xl flex items-center justify-center text-4xl font-black text-white transform group-hover:scale-110 transition-transform">
                    TM
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-primary-400 rounded-full border-4 border-dark-card animate-pulse"></div>
                </div>
                <h3 className="text-4xl font-black text-white mb-2">Taylor Mobley</h3>
                <p className="text-primary-400 font-bold text-xl">Co-Founder</p>
              </div>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  The strategic mind. System architect, UX wizard, and the one who makes sure we don&apos;t build garbage. 
                  <span className="text-white font-semibold"> Scales right. Thinks bigger.</span>
                </p>
                <p>
                  Taylor brings the vision and execution that turns good ideas into great products. When the architecture 
                  needs to scale, Taylor&apos;s the one who makes it happen. <span className="text-accent-400">Without breaking things.</span>
                </p>
                <p>
                  A <span className="text-white font-semibold">Baylor University</span> graduate, Taylor spent several years in the golf business before co-founding GMG Technology.
                </p>
                <div className="pt-4 border-t border-dark-border">
                  <p className="text-sm text-gray-500 font-semibold">FUN FACT:</p>
                  <p className="text-gray-300">Designed the Club Pro GMS architecture in one whiteboard session. Still using it.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founders photo - Taylor (left), Chris (right) */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="aspect-[2/1] w-full overflow-hidden rounded-2xl border border-dark-border">
              <img
                src="/founders.png"
                alt="Taylor Mobley (left) and Chris Gatlin (right), founders of GMG Technology"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-3">Taylor (left) and Chris (right)</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 font-bold text-sm">WHAT WE STAND FOR</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="text-white">
                No BS.
              </span>
              <br />
              <span className="text-primary-400">
                Just Results.
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-card border border-dark-border rounded-2xl p-10 text-center hover:border-primary-500 transition-all group">
              <div className="bg-primary-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform">
                <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Ship Fast</h3>
              <p className="text-gray-400 text-lg">
                We don&apos;t wait for perfect. We ship, learn, and iterate. 
                <span className="text-white font-semibold"> Speed wins.</span>
              </p>
            </div>
            
            <div className="bg-dark-card border border-dark-border rounded-2xl p-10 text-center hover:border-primary-500 transition-all group">
              <div className="bg-primary-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform">
                <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Build Better</h3>
              <p className="text-gray-400 text-lg">
                Quality isn&apos;t optional. We build products we&apos;d actually want to use. 
                <span className="text-white font-semibold"> No compromises.</span>
              </p>
            </div>
            
            <div className="bg-dark-card border border-dark-border rounded-2xl p-10 text-center hover:border-primary-500 transition-all group">
              <div className="bg-primary-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform">
                <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Stay Real</h3>
              <p className="text-gray-400 text-lg">
                No corporate speak. No fake promises. Just honest products that solve real problems. 
                <span className="text-white font-semibold"> That&apos;s it.</span>
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
            Let&apos;s Build Something
          </h2>
          <p className="text-2xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Ready to see what we&apos;re building? 
            <span className="text-primary-400 font-bold"> Let&apos;s talk.</span>
          </p>
          <div className="flex justify-center space-x-6 flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-10 py-5 bg-primary-500 text-white rounded-full text-lg font-black hover:bg-primary-400 hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="px-10 py-5 bg-dark-card border-2 border-dark-border text-white rounded-full text-lg font-bold hover:border-primary-500 transition-all transform hover:scale-105"
            >
              See Products
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
            <p>&copy; {new Date().getFullYear()} GMG Technology. Built with ❤️ and way too much coffee.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
