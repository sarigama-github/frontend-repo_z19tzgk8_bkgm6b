export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 grid place-items-center text-white font-bold">N</div>
              <div>
                <div className="text-white font-semibold leading-tight">Nepal Fertility Care Center</div>
                <div className="text-xs text-sky-200/80 tracking-wide">NFCC • Since 1988</div>
              </div>
            </div>
            <p className="mt-4 text-sky-200/80 max-w-sm">A non-profit organization dedicated to family planning, sexual and reproductive health, and community well-being across Nepal.</p>
          </div>

          <div>
            <div className="text-white font-semibold">About</div>
            <ul className="mt-3 space-y-2 text-sky-200/80">
              <li><a href="#about" className="hover:text-white">Who we are</a></li>
              <li><a href="#programs" className="hover:text-white">Programs</a></li>
              <li><a href="#impact" className="hover:text-white">Impact</a></li>
              <li><a href="#clinics" className="hover:text-white">Clinics</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold">Resources</div>
            <ul className="mt-3 space-y-2 text-sky-200/80">
              <li><a href="#news" className="hover:text-white">News & Events</a></li>
              <li><a href="#newsletter" className="hover:text-white">Newsletter</a></li>
              <li><a href="#" className="hover:text-white">Annual reports</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sky-200/80">
              <li>Kathmandu, Nepal</li>
              <li><a href="tel:+977-1-0000000" className="hover:text-white">+977-1-0000000</a></li>
              <li><a href="mailto:info@nfc.org.np" className="hover:text-white">info@nfc.org.np</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sky-200/70">© {new Date().getFullYear()} Nepal Fertility Care Center. All rights reserved.</p>
          <div className="text-sky-200/70">Designed for a modern, inclusive web.</div>
        </div>
      </div>
    </footer>
  )
}
