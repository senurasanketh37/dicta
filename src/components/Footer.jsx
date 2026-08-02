import React from 'react';
import { Phone, Mail, MapPin, Printer, ShieldCheck, Award, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenQuote, onOpenBrewing }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#05170d] text-white pt-16 pb-8 border-t border-amber-900/30 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-950">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-amber-400 overflow-hidden bg-white p-0.5">
                <img src="/assets/logo.jpg" alt="DICTA Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-xl font-bold font-serif text-white tracking-wide">
                DICTA <span className="text-amber-400">PREMIUM TEA</span>
              </span>
            </div>

            <p className="text-xs text-emerald-200/80 leading-relaxed font-light">
              DICTA Premium Tea (PVT) Limited is a leading Sri Lankan tea processing enterprise dedicated to producing pure Ceylon black tea, green tea, herbal blends, and natural flavored teas crafted under ISO 22000 quality standards.
            </p>

            <div className="space-y-1 text-xs text-amber-300 font-semibold">
              <div>Company Inc. No: <span className="text-white">PV 00234567</span></div>
              <div>SL Tea Brand Reg No: <span className="text-white">MF 0109</span></div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-serif text-amber-300 uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-emerald-200/90 font-medium">
              <li><a href="#about" className="hover:text-amber-300 transition-colors">Our Story & Heritage</a></li>
              <li><a href="#products" className="hover:text-amber-300 transition-colors">Tea Collections & Packs</a></li>
              <li><a href="#processing" className="hover:text-amber-300 transition-colors">Processing & ISO Standards</a></li>
              <li><button onClick={onOpenBrewing} className="hover:text-amber-300 transition-colors text-left">Tea Brewing Guide & Timer</button></li>
              <li><button onClick={onOpenQuote} className="hover:text-amber-300 transition-colors text-left">B2B Wholesale & Export Inquiry</button></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-sm font-bold font-serif text-amber-300 uppercase tracking-wider">Headquarters & Factory</h4>
            <div className="space-y-2 text-xs text-emerald-100">
              
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>818/A, Athurugiriya Road, Malabe, Western Province, Sri Lanka</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:0761266365" className="hover:text-amber-300">0761266365</a>
              </div>

              <div className="flex items-center gap-2.5">
                <Printer className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fax: +94 112 74 35 42</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:dictapremiumtea@gmail.com" className="hover:text-amber-300">dictapremiumtea@gmail.com</a>
              </div>

            </div>

            {/* Quality Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="badge-ceylon text-[10px]">Pure Ceylon Tea</span>
              <span className="badge-ceylon text-[10px]">ISO 22000 Standard</span>
              <span className="badge-ceylon text-[10px]">100% Eco Packaging</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <div>
            © {new Date().getFullYear()} DICTA PREMIUM TEA (PVT) LIMITED. All Rights Reserved. Pure Sri Lankan Excellence.
          </div>

          <button 
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-emerald-900/80 hover:bg-amber-500 text-white flex items-center justify-center transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
