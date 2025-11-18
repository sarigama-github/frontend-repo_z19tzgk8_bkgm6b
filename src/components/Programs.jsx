import { Stethoscope, Baby, GraduationCap, Microscope, ShieldCheck, HandHeart } from 'lucide-react'

const programs = [
  {
    icon: Stethoscope,
    title: 'Clinical Services',
    desc: 'Family planning, SRH counseling, and quality reproductive health services provided with compassion and privacy.',
  },
  {
    icon: Baby,
    title: 'Adolescent SRH',
    desc: 'Comprehensive education and youth-friendly services promoting informed choices for adolescents.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Capacity',
    desc: 'Building skills for health professionals and community workers through accredited programs.',
  },
  {
    icon: Microscope,
    title: 'Research & Advocacy',
    desc: 'Evidence-based initiatives to influence policy and improve reproductive health outcomes.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Ensuring high standards of care across all service points through robust QA systems.',
  },
  {
    icon: HandHeart,
    title: 'Community Outreach',
    desc: 'Mobile camps and community networks expanding access in rural and underserved areas.',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Focus Areas</h2>
          <p className="mt-3 text-sky-100/90">Programs that advance reproductive health and empower communities across Nepal.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/7.5 transition relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-sky-500/10 blur-2xl group-hover:bg-sky-500/20 transition"></div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 grid place-items-center text-white shadow-lg shadow-sky-600/30">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-sky-100/80 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
