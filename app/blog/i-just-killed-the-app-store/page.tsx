import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'I Just Killed the App Store — How I Bypassed Apple in One Session',
  description:
    'I was up late thinking about why I was waiting weeks for Apple to approve bug fixes. By morning, I had moved my entire mobile experience to the browser. Here\'s what happened.',
  openGraph: {
    title: 'I Just Killed the App Store — How I Bypassed Apple in One Session',
    description:
      'I was up late thinking about why I was waiting weeks for Apple to approve bug fixes. By morning, I had moved my entire mobile experience to the browser.',
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
            I Just Killed the App Store
          </h1>

          <div className="space-y-6 text-gray-400 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3 [&_strong]:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary-500/40 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-300">

            <h2>The late night</h2>
            <p>
              It was past midnight. I should have been asleep, but I was staring at my phone, refreshing
              the App Store Connect dashboard for the third time that day. Still &quot;In Review.&quot; A bug fix.
              Three lines of code. And I was on day four of waiting for a human at Apple to look at it
              and press approve.
            </p>
            <p>
              I&apos;d been here before. Every engineer who ships to the App Store has. You fix something on
              Monday, submit it, and your users don&apos;t get it until the following week — if you&apos;re lucky.
              If Apple has questions about your metadata, or your screenshots, or whether your description
              accurately reflects your in-app purchase flow, add another week. Maybe two.
            </p>
            <p>
              But this time it hit different. Because the night before, I&apos;d been documenting my
              methodology — what I call the <strong>AI Full-Stack Methodology</strong>. The whole
              premise is that AI compresses every phase of building software: architecture in minutes,
              infrastructure in a session, code in hours. I&apos;d mapped out six phases where AI collapses
              the timeline. And then I looked at my App Store submission, sitting in a queue, waiting for
              a person I&apos;d never meet to give me permission to ship my own code.
            </p>
            <p>
              That was the moment. Not a grand epiphany. More like finally seeing something that had been
              obvious all along: <strong>I had optimized every phase of my pipeline except the one that
              mattered most — getting the product to users.</strong>
            </p>

            <h2>The question I couldn&apos;t shake</h2>
            <p>
              I kept turning it over: why am I building at the speed of AI but shipping at the speed of
              Apple? My architecture sessions take 20 minutes. My infrastructure deploys in one sitting.
              I can write, test, and push a feature in a single session. But then I hand the build to
              Apple and... wait. Days. Sometimes weeks.
            </p>
            <p>
              The App Store made sense in 2008. Browsers couldn&apos;t do what native apps could. You needed
              access to the camera, GPS, push notifications, the home screen. The App Store was the
              distribution channel because it was the only distribution channel.
            </p>
            <p>
              But it&apos;s 2026 now. Browsers support push notifications on iOS. PWAs can go full-screen
              from the home screen. The Geolocation API works in Safari. My app is fundamentally a UI
              layer that talks to Supabase — real-time data, authentication, edge functions. None of
              that requires a native binary. None of it requires Apple&apos;s permission.
            </p>
            <p>
              I couldn&apos;t shake the question: <strong>what if I just... didn&apos;t need them anymore?</strong>
            </p>

            <h2>What I built (the product)</h2>
            <p>
              Some context. I build <strong>Weekend Warrior Golf</strong> — an app for organizing weekend
              golf games. Real users, real money tracking, real games being scored on actual golf courses.
              Stroke play, Wolf, Skins, Best Ball, Match Play, Stableford, Chicago, Scramble — eight
              formats, each with side games, live leaderboards, team drafts, league standings. It&apos;s not
              a toy project. People use it every Saturday.
            </p>
            <p>
              The app was Flutter for iOS and Android, Next.js for the website, and Supabase for
              everything backend — auth, Postgres, real-time subscriptions, edge functions. The website
              already had some functional pages — game management, scorecard, leagues — but they were
              designed for desktop. On a phone, the sidebar ate the whole screen and half the pages had
              desktop-only padding.
            </p>

            <h2>The session</h2>
            <p>
              By morning I&apos;d made the decision. I sat down with Cursor and started.
            </p>
            <p>
              The first thing I did was rip out the desktop-only sidebar on mobile and replace it with
              what my Flutter app already had: a <strong>bottom tab bar</strong>. Home, Games, Tee Off
              (the big green &quot;+&quot; in the center), Leagues, Profile. Same pattern, same mental model.
              Everything else — admin pages, stats, reports, settings — went into a hamburger slide-out
              menu. Desktop kept the sidebar exactly as it was.
            </p>
            <p>
              Then I built the <strong>Home Hub</strong> — the page users see after login. In the Flutter
              app, this shows your active games, recently completed rounds, game management counts,
              leagues, and a big &quot;Tee Off&quot; button. I built the same thing on the web, hitting the same
              Supabase tables, showing the same colored cards per game type (Wolf is orange, Best Ball
              is green, Skins is gold). Same data, same feel, different rendering engine.
            </p>
            <p>
              Next was the game builder. The Flutter app defaults your home course from your profile,
              lets you search clubs by name or city, auto-selects the course if there&apos;s only one, and
              lets you apply saved templates. The web version had a flat dropdown of every course in the
              database. I replaced it with the same club-first search flow — home club pre-loaded,
              searchable, with saved template support.
            </p>
            <p>
              Then I went through every authenticated page — games list, game detail, scorecard, players,
              results, stats, reports, profile, leagues — and made them mobile-first. Padding, typography,
              touch targets, the works. The scorecard already scrolled horizontally for 18 holes, but
              the 3-putt and OTF toggle buttons were hidden behind hover states that don&apos;t exist on
              touch screens. Fixed.
            </p>
            <p>
              Finally, PWA support. Manifest file, iOS meta tags, viewport configuration, safe area
              insets for the notch. &quot;Add to Home Screen&quot; in Safari gives you a full-screen app icon
              with no browser chrome. To the user, it looks and feels like a native app.
            </p>
            <p>
              Push to GitHub. Vercel deploys. Live.
            </p>
            <p>
              <strong>The whole thing took one session.</strong>
            </p>

            <h2>What changed</h2>
            <p>
              Before yesterday, my deployment pipeline looked like this:
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
              game logic. The only thing I removed from the equation was Apple&apos;s permission.
            </p>

            <h2>The 7th phase</h2>
            <p>
              That late night, when I was staring at my methodology document and my App Store dashboard
              at the same time, I realized something was missing from the framework. I had six phases:
              Architecture, Infrastructure, Database, Application, Product, Process. But I didn&apos;t have
              one for how the product actually reaches users.
            </p>
            <p>
              So I added a seventh: <strong>Distribution</strong>.
            </p>
            <p>
              Distribution is a first-class engineering decision, not something you accept as a given.
              If your stack is API-first and your client is a view layer, you get to choose where that
              view layer runs. The browser is a view layer you control completely — no gatekeepers, no
              revenue share, no review queue.
            </p>
            <blockquote>
              <p>
                The App Store is the last human-approval bottleneck in an AI-accelerated pipeline.
                I removed it.
              </p>
            </blockquote>

            <h2>What I&apos;m not saying</h2>
            <p>
              I&apos;m not saying native apps are dead. I&apos;m not saying the App Store is evil. I&apos;m saying
              that for my use case — a data-driven app where 95% of the functionality is API calls
              and UI — there&apos;s no technical reason to gate every update behind a third party&apos;s
              approval process. The native app can stay on the store for users who prefer it. But the
              web is now the primary distribution channel. The one I control. The one that ships when
              I ship.
            </p>

            <h2>What this means for builders</h2>
            <p>
              If you&apos;re a solo engineer or a small team, and you&apos;re building on a modern stack —
              Supabase, Firebase, any API-first backend — ask yourself: does your app actually need
              to be native? Or have you just never questioned the assumption?
            </p>
            <p>
              The gap between &quot;web app on a phone&quot; and &quot;native app&quot; has mostly closed. PWAs support
              push notifications, offline storage, home screen icons, and full-screen mode on iOS.
              The browser isn&apos;t a compromise anymore. It&apos;s a choice. And it&apos;s a choice that gives you
              back control of your entire pipeline.
            </p>
            <p>
              Build and ship. That&apos;s the methodology. Every phase — from architecture to the user&apos;s
              screen — should be under your control. And now, for the first time, it can be.
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
