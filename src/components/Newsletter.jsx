export default function Newsletter() {
  return (
    <section id="newsletter" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 to-slate-900" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-sky-500/30 rounded-full blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl" />
          <div className="relative">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Stay informed</h2>
              <p className="mt-3 text-sky-100/90">Sign up to receive updates on our programs, events, and impact stories.</p>
            </div>
            <form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-lg bg-slate-900/70 border border-white/10 px-4 py-3 text-white placeholder-sky-200/60 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
              <button className="rounded-lg bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-sky-600/30 transition">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-sky-200/70">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
