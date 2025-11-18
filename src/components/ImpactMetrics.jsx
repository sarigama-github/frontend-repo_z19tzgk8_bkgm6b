import { HeartPulse, Users, Baby, Stethoscope } from 'lucide-react'

const stats = [
  { icon: Users, label: 'People Reached', value: '500,000+', desc: 'through programs and outreach' },
  { icon: HeartPulse, label: 'Health Services Delivered', value: '1.2M+', desc: 'cumulative visits and services' },
  { icon: Baby, label: 'Family Planning Support', value: '200k+', desc: 'counselling & methods provided' },
  { icon: Stethoscope, label: 'Clinics & Camps', value: '2,500+', desc: 'conducted across Nepal' },
]

export default function ImpactMetrics() {
  return (
    <section id="impact" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Our Impact</h2>
          <p className="mt-3 text-sky-100/90">A snapshot of how our work advances health and well-being nationwide.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, label, value, desc }) => (
            <div key={label} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-sky-500/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 grid place-items-center text-white shadow-lg shadow-sky-600/30">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white text-2xl font-bold leading-tight">{value}</div>
                  <div className="text-sky-200/80 text-xs">{label}</div>
                </div>
              </div>
              <div className="mt-3 text-sky-100/80 text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
