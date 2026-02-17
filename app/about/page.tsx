import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="bg-dark-surface border-b border-dark-border sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                GMG Technology
              </h1>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-dark-muted hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-dark-text hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
      <section className="bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
              About GMG Technology
            </h1>
            <p className="text-xl text-dark-muted max-w-3xl mx-auto">
              Building the future of golf technology, one innovation at a time
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card border border-dark-border rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-dark-muted leading-relaxed">
              <p>
                GMG Technology was founded with a simple mission: to revolutionize the golf industry through innovative technology solutions. 
                We recognized that golfers and golf courses were using outdated, fragmented systems that didn&apos;t meet their modern needs.
              </p>
              <p>
                Starting with <strong className="text-white">Weekend Warrior</strong>, we built a comprehensive mobile app that brings 
                together scoring, betting games, tournaments, and social features into one seamless experience. The platform supports 
                over 8 different game formats including Wolf, Skins, Stableford, and Chicago, with advanced betting systems and automated 
                payout calculations.
              </p>
              <p>
                Building on that success, we developed <strong className="text-white">Club Pro GMS</strong>, a powerful B2B SaaS platform 
                for golf courses. This enterprise solution includes tee time management, tournament hosting, member management, and 
                industry-first AI-powered features like voice-activated booking assistants.
              </p>
              <p>
                Today, GMG Technology serves thousands of golfers and multiple golf courses, with a vision to become the leading 
                technology platform in the golf industry. Our commitment to innovation, user experience, and customer success drives 
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Founders</h2>
            <p className="text-lg text-dark-muted">The visionaries behind GMG Technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Chris Gatlin */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-primary-600 transition-all">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4">
                  CG
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Chris Gatlin</h3>
                <p className="text-primary-400 font-semibold mb-4">Founder & CEO</p>
              </div>
              <div className="space-y-3 text-dark-muted">
                <p>
                  Chris Gatlin is the visionary founder and CEO of GMG Technology. With a deep passion for both technology and golf, 
                  Chris identified the need for modern solutions in an industry that had been slow to adopt new technologies.
                </p>
                <p>
                  As a full-stack developer and product strategist, Chris leads the technical direction of both Weekend Warrior and 
                  Club Pro GMS. His expertise spans mobile app development, cloud architecture, database design, and AI integration.
                </p>
                <p>
                  Under Chris&apos;s leadership, GMG Technology has grown from a concept to a thriving technology company serving 
                  the golf community with innovative, user-focused products.
                </p>
              </div>
            </div>

            {/* Taylor Mobley */}
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-primary-600 transition-all">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4">
                  TM
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Taylor Mobley</h3>
                <p className="text-primary-400 font-semibold mb-4">Co-Founder</p>
              </div>
              <div className="space-y-3 text-dark-muted">
                <p>
                  Taylor Mobley brings strategic vision and technical expertise to GMG Technology as co-founder. With a focus on 
                  scalable architecture and exceptional user experiences, Taylor plays a crucial role in product development and 
                  business strategy.
                </p>
                <p>
                  Taylor&apos;s background in system design and business development has been instrumental in shaping both the 
                  technical foundation and go-to-market strategies for GMG Technology&apos;s products.
                </p>
                <p>
                  Together with Chris, Taylor helps drive innovation and ensures that GMG Technology continues to deliver 
                  cutting-edge solutions that meet the evolving needs of golfers and golf courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-dark-muted">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center">
              <div className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-dark-muted">
                We constantly push the boundaries of what&apos;s possible, bringing cutting-edge technology to the golf industry.
              </p>
            </div>
            
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center">
              <div className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">User-Centric</h3>
              <p className="text-dark-muted">
                Every feature we build starts with understanding our users&apos; needs and delivering exceptional experiences.
              </p>
            </div>
            
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center">
              <div className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-dark-muted">
                We strive for excellence in everything we do, from code quality to customer support to product design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-4">Join Us on Our Journey</h3>
          <p className="text-xl mb-8 text-primary-100">Be part of the golf technology revolution</p>
          <div className="flex justify-center space-x-4 flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all"
            >
              Explore Products
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

