import Link from 'next/link'

const academyLinks = [
  'Power BI (Base à Expert)',
  'IA & Transformation Digitale',
  'Power Platform & Fabric',
  'Microsoft Office',
  'Power Up e-Learning',
  'Certification PL-300',
]

const conseilLinks = [
  'BI & IA Maturity Scan',
  'Dashboards Power BI',
  'Power Apps sur mesure',
  'Hyperautomatisation',
  'Migration BI',
  'Proof of Concept',
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 px-6 pt-16 pb-8">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 bg-yellow-400 flex items-center justify-center flex-shrink-0"
                style={{ clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)' }}>
                <span className="text-black font-bold text-xs">B</span>
              </div>
              <span className="text-white font-bold text-base">BridgeX</span>
            </div>
            <p className="text-zinc-600 text-[10px] font-semibold tracking-widest uppercase mb-4">
              Powered by Get Responsive
            </p>
            <p className="text-zinc-400 text-xs leading-relaxed mb-5">
              Relier l&apos;expertise internationale à la réalité locale pour
              renforcer les organisations grâce aux compétences, à la
              stratégie et aux technologies évolutives.
            </p>
            {/* Bridge flag SVG */}
            <svg width="100" height="32" viewBox="0 0 110 38" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="6" width="26" height="20" rx="3" fill="#fff" stroke="#333" strokeWidth="0.5"/>
              <rect x="0" y="6" width="26" height="6.7" rx="2" fill="#AE1C28"/>
              <rect x="0" y="12.7" width="26" height="6.6" fill="#fff"/>
              <rect x="0" y="19.3" width="26" height="6.7" rx="2" fill="#21468B"/>
              <path d="M24,26 Q55,4 86,26" fill="none" stroke="#F5C800" strokeWidth="3" strokeLinecap="round"/>
              <line x1="24" y1="26" x2="86" y2="26" stroke="#F5C800" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="34" y1="26" x2="34" y2="17" stroke="#F5C800" strokeWidth="1.8"/>
              <line x1="45" y1="26" x2="45" y2="11" stroke="#F5C800" strokeWidth="1.8"/>
              <line x1="55" y1="26" x2="55" y2="8" stroke="#F5C800" strokeWidth="1.8"/>
              <line x1="65" y1="26" x2="65" y2="11" stroke="#F5C800" strokeWidth="1.8"/>
              <line x1="76" y1="26" x2="76" y2="17" stroke="#F5C800" strokeWidth="1.8"/>
              <rect x="84" y="6" width="26" height="20" rx="3" fill="#C1272D"/>
              <polygon points="97,10 98.5,14.5 103,14.5 99.3,17.2 100.8,21.7 97,19 93.2,21.7 94.7,17.2 91,14.5 95.5,14.5"
                fill="#006233"/>
            </svg>
          </div>

          {/* Academy links */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
              Academy
            </h4>
            <ul className="space-y-2">
              {academyLinks.map((link, i) => (
                <li key={i}>
                  <Link href="/academy"
                    className="text-zinc-400 text-xs hover:text-yellow-400 transition-colors no-underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conseil links */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
              Conseil
            </h4>
            <ul className="space-y-2">
              {conseilLinks.map((link, i) => (
                <li key={i}>
                  <Link href="/conseil"
                    className="text-zinc-400 text-xs hover:text-yellow-400 transition-colors no-underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-1 text-zinc-400 text-xs leading-loose">
              <p>vraag@get-responsive.com</p>
              <p>a.lghali@get-responsive.com</p>
              <p className="pt-1">+31 (0)85 23 99 899</p>
              <p>+212 648 933 335</p>
              <p className="pt-1">Amersfoort, Pays-Bas</p>
              <p>Casablanca, Maroc</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-zinc-600 text-xs">
            © 2026 BridgeX / Get Responsive BV — Tous droits réservés
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-zinc-600 text-xs hover:text-zinc-400 no-underline transition-colors">
              Conditions générales
            </Link>
            <Link href="#" className="text-zinc-600 text-xs hover:text-zinc-400 no-underline transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}