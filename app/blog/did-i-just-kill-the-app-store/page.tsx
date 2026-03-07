import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Did I Just Kill the App Store?',
  description:
    'I was waiting on Apple to approve an in-app purchase. I asked myself why I was doing this — it went against everything I stand for. So I applied my methodology and moved the entire experience to the browser.',
  openGraph: {
    title: 'Did I Just Kill the App Store?',
    description:
      'I was waiting on Apple to approve an in-app purchase. I asked myself why I was doing this. So I applied my methodology and moved everything to the browser.',
  },
}

export default function KilledTheAppStorePost() {
  const publishedDate = 'March 6, 2026'

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
                <Link href="/blog" className="text-white hover:text-primary-400 px-3 py-2 text-sm font-semibold transition-all hover:scale-105">Blog</Link>
                <Link href="/contact" className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/50 transition-all transform hover:scale-105">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 pt-32 pb-24">
        <Link href="/blog" className="inline-block text-sm text-gray-500 hover:text-primary-400 mb-8 transition-colors">
          &larr; Blog
        </Link>

        <article>
          <time className="text-sm text-gray-500">{publishedDate}</time>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-8">
            Did I Just Kill the App Store?
          </h1>

          <div className="space-y-6 text-gray-400 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3 [&_strong]:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary-500/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-300">

            <h2>The wait that broke something</h2>
            <p>
              I was waiting for Apple to approve an in-app purchase. Not a new feature. Not a redesign.
              An IAP. The kind of thing that should be routine — configure, submit, done. But it wasn&apos;t
              done. It was sitting in a queue, waiting for a human I&apos;d never meet to review it on a
              timeline I couldn&apos;t control.
            </p>
            <p>
              And while I was waiting, something clicked. Not a new thought — more like one I&apos;d been
              suppressing. I asked myself: <strong>why am I doing this?</strong>
            </p>
            <p>
              This goes against everything I stand for. I build to innovate. I build to ship fast. I
              build because the speed between idea and product should be as short as humanly possible.
              And here I was, sitting idle, waiting for permission to monetize my own app from a company
              that takes 30% of it for the privilege.
            </p>
            <p>
              I couldn&apos;t innovate. I couldn&apos;t ship. I was stuck in someone else&apos;s pipeline. And I
              realized: <strong>I needed a different avenue entirely.</strong>
            </p>

            <h2>The methodology I&apos;d just built</h2>
            <p>
              The timing wasn&apos;t an accident. The night before, I&apos;d been documenting what I call the
              <strong> AI Full-Stack Methodology</strong> — a framework for how I use AI across every
              phase of building software. Not just code generation. Architecture, infrastructure,
              database, application, product, and process. Six phases where AI compresses the timeline
              from weeks to sessions.
            </p>
            <p>
              I&apos;d just finished writing it down. I was proud of it. And then I looked at my App Store
              dashboard and realized the framework had a blind spot. I had optimized every phase of
              building — but I hadn&apos;t touched the phase that actually gets the product to users.
              Distribution was still running on someone else&apos;s clock.
            </p>
            <p>
              So I did what the methodology is built for. I asked the question the framework demands:
              <strong> what&apos;s the constraint, and can I engineer around it?</strong>
            </p>

            <h2>Why do you even need an iOS app anymore?</h2>
            <p>
              That was the question. And once I said it out loud, I couldn&apos;t unsay it.
            </p>
            <p>
              The App Store made sense in 2008. Browsers couldn&apos;t do what native apps could. You needed
              access to the camera, GPS, push notifications, the home screen. The App Store was the
              distribution channel because it was the only distribution channel.
            </p>
            <p>
              But it&apos;s 2026. Browsers support push notifications on iOS. PWAs can go full-screen from
              the home screen. The Geolocation API works in Safari. My app is fundamentally a UI layer
              that talks to Supabase — real-time data, authentication, edge functions. None of that
              requires a native binary. None of it requires Apple&apos;s approval. None of it requires
              their IAP system or their 30% cut.
            </p>
            <p>
              The answer was obvious: <strong>just build it in the browser. Make it run just like
              the app.</strong> Same features, same feel, same data — but delivered through a channel
              I control completely. And with my methodology, I knew exactly how to do it in a single
              session.
            </p>

            <h2>The product</h2>
            <p>
              Some context. I build <strong>Weekend Warrior Golf</strong> — an app for organizing weekend
              golf games. Real users, real money tracking, real games being scored on actual golf courses.
              Stroke play, Wolf, Skins, Best Ball, Match Play, Stableford, Chicago, Scramble — eight
              formats, each with side games, live leaderboards, team drafts, league standings. It&apos;s not
              a toy project. People use it every Saturday.
            </p>
            <p>
              The stack was Flutter for iOS and Android, Next.js for the website, and Supabase for
              everything backend — auth, Postgres, real-time subscriptions, edge functions. The website
              already had functional pages — game management, scorecard, leagues — but they were built
              for desktop. On a phone, the sidebar ate the whole screen and half the pages had
              desktop-only padding.
            </p>

            <h2>Applying the methodology</h2>
            <p>
              Here&apos;s how the AI Full-Stack Methodology turned this from a frustration into a shipped
              product in one session.
            </p>

            <p>
              <strong>Phase 1 — Architecture.</strong> I started by mapping the gap between the Flutter
              app and the web app. What did mobile users need that the website didn&apos;t have? Bottom tab
              navigation, a home hub, mobile-first game builder, touch-friendly scorecard, PWA support.
              AI helped me audit every authenticated page and plan the migration in minutes, not hours.
            </p>

            <p>
              <strong>Phase 2 — Infrastructure.</strong> The infrastructure was already in place —
              Supabase handles auth, database, real-time, and edge functions. Vercel handles deployment.
              No new servers, no new services. The web app hits the exact same backend the Flutter app
              does. One API, two clients.
            </p>

            <p>
              <strong>Phase 3 — Database.</strong> Zero changes. The schema, the RLS policies, the
              real-time subscriptions — all of it already existed because the Flutter app and the web
              app share the same Supabase project. This is the payoff of building API-first from day one.
            </p>

            <p>
              <strong>Phase 4 — Application.</strong> This was the session. I sat down with Cursor and
              started building. Ripped out the desktop sidebar on mobile, replaced it with a bottom tab
              bar matching the Flutter app — Home, Games, Tee Off, Leagues, Profile. Built the Home Hub
              with the same colored cards per game type. Rebuilt the game builder with club-first search
              and saved templates. Went through every page — scorecard, players, results, stats,
              profile — and made them mobile-first. Added PWA support: manifest, iOS meta tags, viewport
              config, safe area insets. &quot;Add to Home Screen&quot; gives you a full-screen app icon with no
              browser chrome.
            </p>

            <p>
              <strong>Phase 5 — Product.</strong> The product decision was the catalyst. Subscriptions
              and purchases would happen on the web, on my terms, with no 30% cut and no review queue.
              Users get the same experience. I get control of my own revenue.
            </p>

            <p>
              <strong>Phase 6 — Process.</strong> Push to GitHub. Vercel deploys in 60 seconds. Live.
              No build archive. No App Store Connect. No waiting. The process is: write, test, push, ship.
            </p>

            <p>
              <strong>The whole thing took one session.</strong>
            </p>

            <h2>What changed</h2>

            <div className="rounded-xl overflow-hidden border border-dark-border my-6">
              <img
                src="/vercel-vs-appstore.png"
                alt="Left: Vercel deployments showing Ready in 55 seconds. Right: App Store Connect showing Waiting for Review."
                className="w-full"
              />
              <p className="text-xs text-gray-500 px-4 py-2 bg-dark-card">
                Left: Vercel deploys in under a minute. Right: Apple&apos;s App Store — still waiting.
              </p>
            </div>

            <p>
              Before, my deployment pipeline looked like this:
            </p>
            <ul>
              <li>Write code (hours)</li>
              <li>Test (minutes)</li>
              <li>Build iOS binary (minutes)</li>
              <li>Upload to App Store Connect (minutes)</li>
              <li>Wait for Apple review (<strong>days to weeks</strong>)</li>
              <li>User gets update (whenever Apple decides)</li>
            </ul>
            <p>
              Now it looks like this:
            </p>
            <ul>
              <li>Write code (hours)</li>
              <li>Test (minutes)</li>
              <li>Push to GitHub (<strong>seconds</strong>)</li>
              <li>Vercel deploys (<strong>60 seconds</strong>)</li>
              <li>User has it (<strong>immediately</strong>)</li>
            </ul>
            <p>
              Same backend. Same features. Same Supabase queries, same real-time leaderboard, same
              game logic. The only thing I removed was the gatekeeper.
            </p>

            <h2>The 7th phase: Distribution</h2>
            <p>
              That night, staring at my methodology document and my App Store dashboard at the same
              time, I realized the framework was missing something. I had six phases. But I didn&apos;t have
              one for how the product actually reaches users.
            </p>
            <p>
              So I added a seventh: <strong>Distribution</strong>.
            </p>
            <p>
              Distribution is a first-class engineering decision, not something you accept as a given.
              If your stack is API-first and your client is a view layer, you get to choose where that
              view layer runs. The browser is a view layer you control completely — no gatekeepers, no
              revenue share, no review queue, no IAP tax.
            </p>
            <blockquote>
              <p>
                The App Store is the last human-approval bottleneck in an AI-accelerated pipeline.
                I removed it.
              </p>
            </blockquote>

            <h2>How I got here</h2>
            <p>
              This didn&apos;t come from reading a blog post or watching a conference talk. It came from
              building. Months of building a real product with real users, using AI across every phase,
              and documenting what worked.
            </p>
            <p>
              The methodology came first — born from the daily practice of using AI to architect systems,
              provision infrastructure, design schemas, write code, and ship features. I wrote it down
              because I noticed patterns: the same approach kept working across wildly different problems.
              Plan with AI, execute with AI, validate as a human. Six phases, one loop.
            </p>
            <p>
              Then the IAP wait happened, and the methodology told me exactly what to do. It wasn&apos;t
              rage. It wasn&apos;t impulse. It was the framework doing what frameworks do — showing you
              the answer when you ask the right question. The question was: <strong>what&apos;s the
              bottleneck?</strong> The answer was: <strong>the App Store.</strong> The solution was:
              <strong> remove it.</strong>
            </p>

            <h2>The question every builder needs to ask</h2>
            <p>
              If you&apos;re a solo engineer or small team on a modern stack — Supabase, Firebase, any
              API-first backend — ask yourself one question:
            </p>
            <p>
              <strong>Does your app actually need to be native? Or have you just never questioned the assumption?</strong>
            </p>
            <p>
              The gap between a web app on a phone and a native app has mostly closed. PWAs support
              push notifications, offline storage, home screen icons, and full-screen mode on iOS.
              The browser isn&apos;t a compromise anymore. It&apos;s a choice.
            </p>
            <p>
              And it&apos;s a choice that gives you back full control of your pipeline — from architecture
              to revenue. No gatekeeper. No revenue share. No review queue. No waiting for permission
              to ship your own product.
            </p>
            <blockquote>
              <p>
                The App Store is the last human-approval bottleneck in an AI-accelerated pipeline.
              </p>
            </blockquote>
            <p>
              I removed it. You can too.
            </p>

            <p className="rounded-xl bg-dark-card border border-dark-border p-6 text-gray-300 italic mt-10">
              This post is part of the AI Full-Stack Methodology series.
              Read the intro: {' '}
              <Link href="/blog/ai-full-stack-methodology" className="text-primary-400 hover:text-primary-300">
                AI Full-Stack: One Engineer, AI in Every Phase
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-500">
              — CG, March 6, 2026. Written at the end of a long night and a very good morning.
            </p>
          </div>
        </article>
      </main>

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
                <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
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
