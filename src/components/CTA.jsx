export default function CTA() {
  return (
    <section id="contact" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-sky-600/20 to-blue-700/20 p-8 md:p-12">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-sky-500/30 rounded-full blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Partner with NFCC</h2>
            <p className="mt-3 text-sky-100/90 max-w-2xl">Join us in advancing reproductive health and rights in Nepal. Collaborate on programs, support outreach, or refer clients to our services.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-100 transition">Become a partner</a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white border border-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition">Refer a client</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
