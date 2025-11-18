import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'News & Events', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="relative z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 shadow-lg shadow-sky-600/30 grid place-items-center text-white font-bold">
              N
            </div>
            <div>
              <div className="text-white font-semibold leading-tight">Nepal Fertility Care Center</div>
              <div className="text-xs text-sky-200/80 tracking-wide">NFCC • Since 1988</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sky-100/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+977-1-0000000" className="inline-flex items-center gap-2 text-sm text-white/90 bg-white/10 hover:bg-white/15 px-3 py-2 rounded-lg border border-white/10 transition">
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg shadow-lg shadow-sky-600/30 transition">
              <Mail className="w-4 h-4" />
              Get Involved
            </a>
          </div>

          <button className="md:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-sky-50/90 py-2">
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3">
              <a href="tel:+977-1-0000000" className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-white/90 bg-white/10 hover:bg-white/15 px-3 py-2 rounded-lg border border-white/10 transition">
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-2 text-sm bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-lg shadow-lg shadow-sky-600/30 transition">
                <Mail className="w-4 h-4" />
                Get Involved
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
