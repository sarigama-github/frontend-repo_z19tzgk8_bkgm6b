import { ArrowRight, HeartPulse, ShieldCheck, UsersRound } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-sky-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-sky-100/90 mb-6">
              <ShieldCheck className="w-4 h-4 text-sky-300" />
              Empowering communities with accessible reproductive health services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Nepal Fertility Care Center
            </h1>
            <p className="mt-5 text-lg text-sky-100/90 max-w-xl">
              A non-profit organization committed to family planning, sexual and reproductive health, and community well-being across Nepal.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#programs" className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-sky-600/30 transition">
                Explore Programs
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-5 py-3 text-sm font-medium border border-white/10 transition">
                Learn More
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <UsersRound className="w-6 h-6 text-sky-300 mx-auto" />
                <div className="mt-2 text-2xl font-bold text-white">500k+</div>
                <div className="text-xs text-sky-200/80">People Reached</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <HeartPulse className="w-6 h-6 text-sky-300 mx-auto" />
                <div className="mt-2 text-2xl font-bold text-white">35+</div>
                <div className="text-xs text-sky-200/80">Years of Service</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-sky-300 mx-auto" />
                <div className="mt-2 text-2xl font-bold text-white">Nationwide</div>
                <div className="text-xs text-sky-200/80">Trusted Network</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 to-blue-600/20 rounded-3xl blur-2xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1565071783280-719b01b299fc?q=80&w=1600&auto=format&fit=crop"
              alt="Community health outreach"
              className="w-full rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
