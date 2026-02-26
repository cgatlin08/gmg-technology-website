import Link from 'next/link'

export default function Terms() {
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
            <h1 className="text-4xl font-black text-white mb-2">Terms of Service</h1>
            <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-400">
              <p>
                Welcome to GMG Technology. By using our website or our products — including <a href="https://weekendwarriorgolf.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Weekend Warrior</a> and <a href="https://clubprogms.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Club Pro GMS</a> — you agree to these Terms of Service. If you do not agree, do not use our services.
              </p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Use of Our Services</h2>
              <p>You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You may not misuse our services, attempt to gain unauthorized access to our systems or other accounts, or use our services in any way that could harm us or third parties.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Accounts and Subscriptions</h2>
              <p>Some of our products require an account or paid subscription. You must provide accurate information when signing up. Subscription terms, billing, and cancellation are governed by the specific product terms and, where applicable, the platform through which you subscribed (e.g., App Store, Google Play, or our website).</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Intellectual Property</h2>
              <p>All content, software, designs, and materials provided by GMG Technology are owned by us or our licensors. You may not copy, modify, distribute, or create derivative works without our prior written permission. Our names, logos, and product names are our trademarks.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Disclaimer of Warranties</h2>
              <p>Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or free of harmful components. Your use of our services is at your sole risk.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, GMG Technology and its officers, directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your use of or inability to use our services. Our total liability shall not exceed the amount you paid us in the twelve (12) months preceding the claim, or one hundred U.S. dollars ($100), whichever is greater.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Indemnification</h2>
              <p>You agree to indemnify and hold harmless GMG Technology and its affiliates from any claims, damages, losses, or expenses (including reasonable attorneys&apos; fees) arising from your use of our services or your violation of these terms.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Changes to Terms</h2>
              <p>We may modify these terms at any time. We will post the updated terms on this page and update the &quot;Last updated&quot; date. Material changes may also be communicated via email or in-product notice. Continued use of our services after changes constitutes acceptance of the new terms.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Governing Law</h2>
              <p>These terms are governed by the laws of the United States and the state in which GMG Technology is incorporated, without regard to conflict of law principles. Any disputes shall be resolved in the courts of that jurisdiction.</p>

              <h2 className="text-xl font-bold text-white mt-8 mb-3">Contact</h2>
              <p>For questions about these Terms of Service, contact GMG Technology via <Link href="/contact" className="text-primary-400 hover:text-primary-300">Contact</Link>.</p>
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
