import { Newspaper, CalendarDays, MapPin, ArrowRight } from 'lucide-react'

const items = [
  {
    type: 'News',
    title: 'NFCC launches new adolescent SRH initiative in Province 2',
    meta: 'Aug 2025 • Kathmandu',
  },
  {
    type: 'Event',
    title: 'Family planning outreach camp serving 2,000+ beneficiaries',
    meta: 'July 2025 • Pokhara',
  },
  {
    type: 'Update',
    title: 'Annual report published: milestones and impact across Nepal',
    meta: 'June 2025 • Nationwide',
  },
]

export default function Highlights() {
  return (
    <section id="news" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 to-slate-900"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">News & Events</h2>
            <p className="mt-3 text-sky-100/90">Stories from the field, program updates, and upcoming activities.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sky-300 hover:text-white transition">
            View all
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <article key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="aspect-[16/9] bg-gradient-to-tr from-sky-600/20 to-blue-700/20" />
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-sky-200/80">
                  {it.type === 'Event' ? <CalendarDays className="w-4 h-4" /> : <Newspaper className="w-4 h-4" />}
                  {it.meta}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">{it.title}</h3>
                <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm text-sky-300 hover:text-white">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
