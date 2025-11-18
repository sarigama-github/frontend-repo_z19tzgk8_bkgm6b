import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Highlights from './components/Highlights'
import CTA from './components/CTA'
import ImpactMetrics from './components/ImpactMetrics'
import ClinicsMap from './components/ClinicsMap'
import DonorLogos from './components/DonorLogos'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-sky-50">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(29,78,216,0.10),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(2,132,199,0.10),transparent_40%)]" />

      <Navbar />
      <Hero />
      <DonorLogos />
      <Programs />
      <ImpactMetrics />
      <Highlights />
      <ClinicsMap />
      <Newsletter />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
