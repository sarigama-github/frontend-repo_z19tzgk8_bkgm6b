export default function ClinicsMap() {
  return (
    <section id="clinics" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 to-slate-900" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Clinics & Service Points</h2>
            <p className="mt-3 text-sky-100/90">Find our clinics, mobile camps, and partner facilities across Nepal.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sky-300 hover:text-white transition">Open full map →</a>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src="https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/85.32,27.70,6,0/800x500?access_token=pk.eyJ1IjoibW9kYWwiLCJhIjoiY2t4d3g2b3J1MDI4dzJubW1pY2V2dWJ5aiJ9.-placeholder"
                alt="Map of Nepal with NFCC clinic locations"
                className="w-full h-full object-cover aspect-[16/10] opacity-90"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1502920917128-1aa500764ce7?q=80&w=1600&auto=format&fit=crop' }}
              />
            </div>
          </div>
          <div className="space-y-4">
            {["Kathmandu Clinic", "Pokhara Outreach", "Biratnagar Partner", "Butwal Mobile Camp"].map((name, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">{name}</div>
                <div className="text-sky-200/80 text-sm">Mon–Fri • 9:00–17:00</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
