import React from 'react';
import { ShieldCheck, Leaf, Sparkles, ArrowRight, Clock, Award, CheckCircle2, Compass, PhoneCall } from 'lucide-react';

export default function Hero({ onOpenQuote, onOpenBrewing, onOpenSommelier }) {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#04140b] text-white">
      
      {/* Background Image Layer with Parallax Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
        <img 
          src="/assets/tea_estate.jpg" 
          alt="Sri Lankan Tea Plantation" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Luxury Dark Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04140b]/95 via-[#072414]/90 to-[#04140b] z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Gold Leaf Particle Accents */}
      <div className="absolute top-20 right-1/4 text-amber-400/20 text-4xl animate-float pointer-events-none">🍃</div>
      <div className="absolute bottom-32 left-10 text-amber-300/20 text-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }}>✨</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Gold Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-amber-400" />
              100% Eco-Friendly Pure Sri Lankan Tea
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif leading-[1.1] text-white">
              Natural Tea Flavor For Your <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Refreshing Day From Us</span>
            </h1>

            {/* Description */}
            <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Elevate your senses with <strong>DICTA Premium Tea (PVT) Limited</strong> — Sri Lanka’s authentic Ceylon tea producer. Manufactured under ISO 22000 food safety standards with pure natural aroma and eco-friendly packaging for local and export markets.
            </p>

            {/* Brand Promise Banner */}
            <div className="p-4 rounded-2xl glass-card-dark border-l-4 border-l-amber-400 max-w-xl mx-auto lg:mx-0 flex items-center gap-3.5 text-left shadow-2xl">
              <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">Our Guarantee</span>
                <p className="text-white text-sm font-semibold italic">
                  "Every cup, pure Sri Lankan Excellence."
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#products" 
                className="btn-gold-luxury flex items-center gap-2 text-sm sm:text-base"
              >
                Explore Collections
                <ArrowRight className="w-4 h-4" />
              </a>

              <button 
                onClick={onOpenSommelier}
                className="px-6 py-3.5 rounded-full bg-amber-400/15 hover:bg-amber-400/25 text-amber-300 border border-amber-400/40 text-sm font-bold flex items-center gap-2 transition-all hover:scale-105"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                Find Your Blend Quiz
              </button>

              <button 
                onClick={onOpenQuote}
                className="btn-outline-luxury text-sm sm:text-base"
              >
                Request B2B Quote
              </button>
            </div>

            {/* Key Value Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-900/60 text-center sm:text-left">
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-amber-400 block">100%</span>
                <span className="text-[11px] text-emerald-200/80 uppercase tracking-wider font-semibold">Pure Ceylon Tea</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-amber-400 block">ISO 22000</span>
                <span className="text-[11px] text-emerald-200/80 uppercase tracking-wider font-semibold">Food Safety Standard</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-amber-400 block">10+</span>
                <span className="text-[11px] text-emerald-200/80 uppercase tracking-wider font-semibold">Tea Varieties</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Stack */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Golden Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-emerald-500/10 to-transparent blur-2xl pointer-events-none" />

              {/* Main Presentation Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-[#072414] animate-slide-up">
                
                {/* Image Banner */}
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img 
                    src="/assets/products_banner.jpg" 
                    alt="DICTA Premium Tea Products" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#072414] via-transparent to-transparent opacity-90" />
                  
                  {/* Floating Ceylon Badge */}
                  <div className="absolute top-4 right-4 bg-[#04140b]/90 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/40 backdrop-blur-md">
                    Reg: MF 0109
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-amber-400 font-bold uppercase tracking-wider">Malabe, Sri Lanka</span>
                    <span className="text-emerald-300 font-medium">Inc: PV 00234567</span>
                  </div>

                  <h3 className="text-xl font-bold font-serif text-white">
                    Dicta Premium Black & Green Tea Series
                  </h3>

                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    Processed from fresh Sri Lankan tea leaves using state-of-the-art technology adhering to ISO 22000 standards.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-emerald-900/80 text-xs">
                    <div className="flex items-center gap-2 text-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Packets: 25g, 50g, 100g, 200g, 400g & 1kg</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Tea Bags: Packs of 25, 50 & 100 Count</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Leaf Pill */}
              <div className="absolute -bottom-6 -left-6 bg-white text-emerald-950 p-4 rounded-2xl shadow-2xl border-2 border-amber-400/50 hidden sm:flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                  <Leaf className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-emerald-900">Natural Taste & Aroma</div>
                  <div className="text-[11px] text-emerald-700">Zero Artificial Additives</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
