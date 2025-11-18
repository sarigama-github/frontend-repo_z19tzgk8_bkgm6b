import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Highlights from './components/Highlights'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-sky-50">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(29,78,216,0.10),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(2,132,199,0.10),transparent_40%)]" />

      <Navbar />
      <Hero />
      <Programs />
      <Highlights />
      <CTA />

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sky-200/70 text-sm">© {new Date().getFullYear()} Nepal Fertility Care Center. All rights reserved.</p>
          <div className="text-sky-200/70 text-sm">Designed for a modern, inclusive web.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
