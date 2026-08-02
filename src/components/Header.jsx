import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Award, Menu, X, ShoppingBag, ChevronDown, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Header({ onOpenQuote, onOpenBrewing, onOpenSwot, onOpenSommelier }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const toolsDropdownRef = useRef(null);

  // Handle scroll events: scroll progress, shrink header, scrollspy section detection
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      setIsScrolled(window.scrollY > 30);

      // ScrollSpy logic for active navigation highlighting
      const sections = [
        { id: 'processing', offset: 200 },
        { id: 'about', offset: 200 },
        { id: 'products', offset: 200 }
      ];

      let currentSection = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= section.offset && rect.bottom >= 100) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu or dropdown on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setToolsDropdownOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(e.target)) {
        setToolsDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none">
      
      {/* Animated Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-emerald-400 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(243,211,122,0.8)]"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Modern Compact Announcement & Contact Bar */}
      <div className="bg-[#020b06]/95 backdrop-blur-md text-emerald-100 border-b border-amber-900/30 text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium tracking-wide">
          
          {/* Left: Certifications & Location with Live Status Indicator */}
          <div className="flex items-center space-x-3 sm:space-x-5 shrink-0 whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold text-xs sm:text-sm whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">SL Tea Board Reg: MF 0109 • </span>ISO 22000 Certified
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-300/80 text-xs whitespace-nowrap">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              Malabe, Sri Lanka
            </span>
          </div>

          {/* Right: Direct Tap Contacts */}
          <div className="flex items-center space-x-3 shrink-0 text-xs whitespace-nowrap">
            <a 
              href="tel:0761266365" 
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-all py-1 px-2.5 rounded-full bg-emerald-950/80 border border-amber-500/30 hover:border-amber-400 whitespace-nowrap font-bold"
              aria-label="Call DICTA Tea"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap">0761266365</span>
            </a>
            <a 
              href="mailto:dictapremiumtea@gmail.com" 
              className="hidden sm:flex items-center gap-1.5 text-emerald-200 hover:text-amber-300 transition-colors whitespace-nowrap font-medium"
              aria-label="Email DICTA Tea"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap">Email</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'glass-header py-2.5 shadow-2xl' 
            : 'bg-[#04140b]/90 backdrop-blur-xl py-3.5 border-b border-amber-900/40'
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
          
          {/* Brand Logo & Prominent Title */}
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-xl p-1 shrink-0 transition-transform active:scale-95"
            aria-label="DICTA Premium Tea Home"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-amber-400 shadow-[0_0_15px_rgba(201,154,44,0.4)] group-hover:scale-105 group-hover:border-amber-300 transition-all bg-white flex items-center justify-center shrink-0">
              <img 
                src="/assets/logo.jpg" 
                alt="DICTA Tea Logo" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
            <div className="leading-tight whitespace-nowrap">
              <span className="text-lg sm:text-xl lg:text-2xl font-black tracking-wider text-white font-cinzel block leading-none whitespace-nowrap">
                DICTA <span className="gold-shimmer-text">TEA</span>
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-widest text-emerald-300 uppercase font-extrabold block mt-1 whitespace-nowrap">
                Pure Ceylon <span className="hidden lg:inline">• Excellence</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Big Clean Text, No Icons in Front) */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 text-sm lg:text-base font-extrabold uppercase tracking-wider text-emerald-100 whitespace-nowrap">
            
            {/* Story */}
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                activeSection === 'about' 
                  ? 'nav-pill-active text-amber-300 font-black shadow-md' 
                  : 'nav-pill-hover hover:text-amber-300'
              }`}
            >
              <span className="whitespace-nowrap">Story</span>
            </a>

            {/* Teas */}
            <a 
              href="#products" 
              onClick={(e) => handleNavClick(e, 'products')}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                activeSection === 'products' 
                  ? 'nav-pill-active text-amber-300 font-black shadow-md' 
                  : 'nav-pill-hover hover:text-amber-300'
              }`}
            >
              <span className="whitespace-nowrap">Teas</span>
            </a>

            {/* Quality */}
            <a 
              href="#processing" 
              onClick={(e) => handleNavClick(e, 'processing')}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                activeSection === 'processing' 
                  ? 'nav-pill-active text-amber-300 font-black shadow-md' 
                  : 'nav-pill-hover hover:text-amber-300'
              }`}
            >
              <span className="whitespace-nowrap">Quality</span>
            </a>

            {/* Expanded Feature Links on Large Screens (>= 1280px) */}
            <div className="hidden xl:flex items-center space-x-3 whitespace-nowrap">
              {/* Matcher */}
              <button 
                onClick={onOpenSommelier} 
                className="px-4 py-2 rounded-full bg-amber-950/50 border border-amber-500/50 text-amber-300 hover:text-white hover:bg-amber-900/70 hover:border-amber-300 transition-all cursor-pointer font-black whitespace-nowrap shadow-sm hover:scale-105 active:scale-95"
              >
                <span className="whitespace-nowrap">Matcher</span>
              </button>

              {/* Timer */}
              <button 
                onClick={onOpenBrewing} 
                className="px-4 py-2 rounded-full nav-pill-hover hover:text-amber-300 cursor-pointer font-extrabold whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Timer</span>
              </button>

              {/* Strategy */}
              <button 
                onClick={onOpenSwot} 
                className="px-4 py-2 rounded-full nav-pill-hover hover:text-amber-300 cursor-pointer font-extrabold whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Strategy</span>
              </button>
            </div>

            {/* Compact Tools Dropdown for Medium Laptops (1024px to 1279px) */}
            <div className="relative xl:hidden" ref={toolsDropdownRef}>
              <button
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-950/60 border border-amber-500/50 text-amber-300 hover:bg-amber-900/80 font-black text-sm lg:text-base transition-all whitespace-nowrap shadow-sm active:scale-95"
              >
                <span className="whitespace-nowrap">Tools</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {toolsDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-[#04140b]/95 border border-amber-500/50 rounded-2xl shadow-2xl py-2 z-50 animate-dropdown text-sm font-bold text-emerald-100 backdrop-blur-2xl">
                  <button 
                    onClick={() => { setToolsDropdownOpen(false); onOpenSommelier(); }}
                    className="w-full px-4 py-3 hover:bg-amber-950/80 text-amber-300 font-extrabold hover:text-white text-left transition-colors whitespace-nowrap"
                  >
                    <span className="whitespace-nowrap">Tea Matcher</span>
                  </button>
                  <button 
                    onClick={() => { setToolsDropdownOpen(false); onOpenBrewing(); }}
                    className="w-full px-4 py-3 hover:bg-emerald-900/50 hover:text-amber-300 text-left transition-colors whitespace-nowrap font-bold"
                  >
                    <span className="whitespace-nowrap">Brewing Timer</span>
                  </button>
                  <button 
                    onClick={() => { setToolsDropdownOpen(false); onOpenSwot(); }}
                    className="w-full px-4 py-3 hover:bg-emerald-900/50 hover:text-amber-300 text-left transition-colors whitespace-nowrap font-bold"
                  >
                    <span className="whitespace-nowrap">Strategy & SWOT</span>
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Desktop Right CTA Button (Big Bold Text) */}
          <div className="hidden lg:flex items-center shrink-0">
            <button 
              onClick={onOpenQuote}
              className="btn-gold-luxury text-sm lg:text-base py-2.5 px-6 flex items-center gap-2 shadow-[0_0_22px_rgba(201,154,44,0.4)] hover:shadow-[0_0_32px_rgba(201,154,44,0.65)] whitespace-nowrap font-black transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Quote</span>
            </button>
          </div>

          {/* Mobile & Tablet Header Action Area (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            
            {/* Quick Quote Button for Mobile/Tablet */}
            <button
              onClick={onOpenQuote}
              className="btn-gold-luxury text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5 shadow-md whitespace-nowrap font-extrabold transition-transform active:scale-95"
              aria-label="Request Wholesale Quote"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Quote</span>
            </button>

            {/* Accessible Animated Hamburger Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-emerald-100 hover:text-amber-400 p-2.5 rounded-xl bg-emerald-950/80 border border-amber-500/30 hover:border-amber-400 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 shrink-0 active:scale-95"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </nav>

      {/* Slide-In Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          
          {/* Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-md animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Right Sliding Glass Drawer Panel */}
          <div 
            className="relative w-full max-w-xs sm:max-w-sm bg-[#04140b]/95 backdrop-blur-2xl border-l border-amber-500/30 flex flex-col justify-between p-5 sm:p-6 shadow-2xl z-10 animate-slide-right overflow-y-auto text-emerald-100"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Drawer Top Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-amber-900/40">
                <div className="flex items-center gap-3">
                  <img src="/assets/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full border border-amber-400 shrink-0 shadow-md" />
                  <div className="whitespace-nowrap">
                    <span className="font-cinzel text-xl font-black text-white block leading-none whitespace-nowrap">DICTA TEA</span>
                    <span className="text-[11px] text-amber-300 font-extrabold tracking-wider uppercase block mt-1 whitespace-nowrap">Pure Ceylon</span>
                  </div>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-emerald-300 hover:text-amber-400 hover:bg-emerald-900/50 rounded-full transition-colors shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Navigation Links (Clean Big Text) */}
              <div className="py-5 space-y-2">
                <p className="text-xs font-black uppercase tracking-widest text-amber-400/80 px-2 mb-2 whitespace-nowrap">Navigation</p>
                
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-extrabold transition-all whitespace-nowrap ${
                    activeSection === 'about' ? 'nav-pill-active font-black border-l-4 border-amber-400' : 'hover:bg-emerald-900/40 hover:text-white'
                  }`}
                >
                  <span className="whitespace-nowrap">Story</span>
                  <ChevronRight className="w-5 h-5 text-emerald-400/60 shrink-0" />
                </a>

                <a 
                  href="#products" 
                  onClick={(e) => handleNavClick(e, 'products')}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-extrabold transition-all whitespace-nowrap ${
                    activeSection === 'products' ? 'nav-pill-active font-black border-l-4 border-amber-400' : 'hover:bg-emerald-900/40 hover:text-white'
                  }`}
                >
                  <span className="whitespace-nowrap">Teas</span>
                  <ChevronRight className="w-5 h-5 text-emerald-400/60 shrink-0" />
                </a>

                <a 
                  href="#processing" 
                  onClick={(e) => handleNavClick(e, 'processing')}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-extrabold transition-all whitespace-nowrap ${
                    activeSection === 'processing' ? 'nav-pill-active font-black border-l-4 border-amber-400' : 'hover:bg-emerald-900/40 hover:text-white'
                  }`}
                >
                  <span className="whitespace-nowrap">Quality</span>
                  <ChevronRight className="w-5 h-5 text-emerald-400/60 shrink-0" />
                </a>
              </div>

              {/* Interactive Tools Section */}
              <div className="py-4 border-t border-amber-900/30 space-y-2">
                <p className="text-xs font-black uppercase tracking-widest text-amber-400/80 px-2 mb-2 whitespace-nowrap">Interactive Tools</p>
                
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenSommelier(); }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-black text-amber-300 bg-amber-950/60 border border-amber-500/50 hover:bg-amber-900/70 transition-all whitespace-nowrap active:scale-95 shadow-sm"
                >
                  <span className="whitespace-nowrap">Matcher</span>
                  <span className="text-[10px] bg-amber-400 text-black px-2 py-0.5 rounded-md font-black whitespace-nowrap shadow-sm">NEW</span>
                </button>

                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenBrewing(); }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-extrabold text-emerald-100 hover:bg-emerald-900/40 hover:text-white transition-all whitespace-nowrap active:scale-95"
                >
                  <span className="whitespace-nowrap">Timer</span>
                  <ChevronRight className="w-5 h-5 text-emerald-400/60 shrink-0" />
                </button>

                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenSwot(); }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-extrabold text-emerald-100 hover:bg-emerald-900/40 hover:text-white transition-all whitespace-nowrap active:scale-95"
                >
                  <span className="whitespace-nowrap">Strategy</span>
                  <ChevronRight className="w-5 h-5 text-emerald-400/60 shrink-0" />
                </button>
              </div>

            </div>

            {/* Drawer Bottom Quick Action & Direct Contact */}
            <div className="pt-4 border-t border-amber-900/40 space-y-3">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
                className="w-full btn-gold-luxury flex items-center justify-center gap-2 text-sm py-3.5 shadow-[0_0_22px_rgba(201,154,44,0.45)] whitespace-nowrap font-black active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Request Wholesale Quote</span>
              </button>

              <div className="pt-1 grid grid-cols-2 gap-2 text-center text-xs">
                <a 
                  href="tel:0761266365" 
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-200 hover:text-amber-300 font-extrabold whitespace-nowrap active:scale-95"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="whitespace-nowrap">Call Direct</span>
                </a>
                <a 
                  href="mailto:dictapremiumtea@gmail.com" 
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-200 hover:text-amber-300 font-extrabold whitespace-nowrap active:scale-95"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="whitespace-nowrap">Email Us</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-400/80 pt-1 font-semibold whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="whitespace-nowrap">ISO 22000 Certified • Sri Lanka</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
