const logos = [
  {
    name: 'UNFPA',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/UNFPA_logo_orange.svg'
  },
  {
    name: 'USAID',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/USAID-Identity.svg'
  },
  {
    name: 'WHO',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/WHO_logo.svg'
  },
  {
    name: 'DFID',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/UKaid-identity.svg'
  }
]

export default function DonorLogos() {
  return (
    <section className="relative py-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 to-slate-950" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sky-200/80 text-sm tracking-wide uppercase">Supported by</p>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {logos.map(l => (
            <div key={l.name} className="flex items-center justify-center opacity-80 hover:opacity-100 transition">
              <img src={l.url} alt={`${l.name} logo`} className="h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
