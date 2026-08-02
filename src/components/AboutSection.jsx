import React, { useState } from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, Building2, Users, Target, Compass, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ onOpenSwot }) {
  const [activeTab, setActiveTab] = useState('overview');

  const orgMembers = [
    { title: 'Chief Executive Officer (CEO)', role: 'Executive Vision & International Expansion', color: 'from-amber-500 to-amber-700' },
    { title: 'Marketing Manager', role: 'Brand Strategy, Social Media & Export Trade', color: 'from-emerald-600 to-emerald-800' },
    { title: 'Operations Manager', role: 'Factory Production & ISO 22000 Quality Control', color: 'from-teal-600 to-teal-800' },
    { title: 'HR Manager', role: 'Human Resource Strategy & Labor Mandate', color: 'from-green-600 to-green-800' },
    { title: 'Business Development Manager', role: 'Supermarket, Hotel & B2B Distribution', color: 'from-amber-600 to-amber-800' },
    { title: 'Finance Manager', role: 'Capital Allocation & Cash Flow Management', color: 'from-slate-600 to-slate-800' }
  ];

  return (
    <section id="about" className="py-24 bg-[#071f13] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image & Company Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
              <img 
                src="/assets/factory.jpg" 
                alt="DICTA Tea Factory Sri Lanka" 
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071f13] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="badge-ceylon mb-2">Modern State-of-the-Art Factory</span>
                <h3 className="text-xl font-bold font-serif text-white">DICTA Tea Processing & Packaging Facility</h3>
                <p className="text-xs text-emerald-200 mt-1">Located at Malabe, Western Province, Sri Lanka</p>
              </div>
            </div>

            {/* Credential Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl dark-glass-card border border-amber-400/30">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">Company Inc. No</span>
                <span className="text-lg font-bold font-serif text-white block mt-1">PV 00234567</span>
                <span className="text-[11px] text-emerald-200/70">Registrar of Companies SL</span>
              </div>
              <div className="p-4 rounded-2xl dark-glass-card border border-amber-400/30">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">Tea Board Reg No</span>
                <span className="text-lg font-bold font-serif text-white block mt-1">MF 0109</span>
                <span className="text-[11px] text-emerald-200/70">Sri Lanka Tea Board</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information Tabs & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                About DICTA Premium Tea (Pvt) Ltd
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white">
                Purity, Quality & <span className="gold-text-gradient">Heritage</span>
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-emerald-800/80 space-x-6 text-sm font-semibold">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`pb-3 transition-colors ${activeTab === 'overview' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-emerald-300/70 hover:text-white'}`}
              >
                Company Overview
              </button>
              <button 
                onClick={() => setActiveTab('vision')}
                className={`pb-3 transition-colors ${activeTab === 'vision' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-emerald-300/70 hover:text-white'}`}
              >
                Vision & Mission
              </button>
              <button 
                onClick={() => setActiveTab('org')}
                className={`pb-3 transition-colors ${activeTab === 'org' ? 'text-amber-400 border-b-2 border-amber-400' : 'text-emerald-300/70 hover:text-white'}`}
              >
                Organizational Structure
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-4 text-emerald-100/90 text-sm leading-relaxed animate-fade-in">
                <p>
                  DICTA Premium Tea Limited is a successful Sri Lankan tea production enterprise specializing in high-grade Ceylon tea packing and labeling. Our main objective is to provide premium tea products with natural taste, aroma, and uncompromising purity to every customer.
                </p>
                <p>
                  Our comprehensive product range includes Black Tea, Green Tea, Medical & Herbal Teas, and Natural Flavored Teas (Lemon, Ginger, Mint, Strawberry, Cinnamon) offered in both loose-leaf formats and convenient tea bag packs.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>ISO 22000 Food Safety Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Supporting Local Tea Growers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>100% Eco-Friendly Packaging</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Domestic & Global Distribution</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Vision & Mission */}
            {activeTab === 'vision' && (
              <div className="space-y-6 animate-fade-in">
                <div className="p-5 rounded-2xl dark-glass-card border border-amber-400/20">
                  <div className="flex items-center gap-3 text-amber-300 font-bold font-serif text-lg mb-2">
                    <Target className="w-5 h-5 text-amber-400" />
                    Our Vision
                  </div>
                  <p className="text-emerald-100 text-sm leading-relaxed italic">
                    "To become one of the world’s largest tea brands that represents quality, purity, and the rich heritage of Sri Lankan tea."
                  </p>
                </div>

                <div className="p-5 rounded-2xl dark-glass-card border border-amber-400/20">
                  <div className="flex items-center gap-3 text-amber-300 font-bold font-serif text-lg mb-2">
                    <Compass className="w-5 h-5 text-amber-400" />
                    Our Mission
                  </div>
                  <p className="text-emerald-100 text-sm leading-relaxed italic">
                    "Sustain tea production by supporting local tea growers, producing high quality tea, and continuously increasing customer satisfaction worldwide."
                  </p>
                </div>

                {/* Core Values Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">Core Values</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Quality Excellence', 'Innovation', 'Customer Satisfaction', 'Integrity', 'Sustainability'].map((val) => (
                      <span key={val} className="px-3 py-1.5 rounded-xl bg-emerald-900/80 border border-emerald-700 text-emerald-200 text-xs font-semibold">
                        ✦ {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Organizational Chart */}
            {activeTab === 'org' && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-xs text-emerald-200/80">
                  Our professional leadership team ensures rigorous operational standards from farm to cup:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {orgMembers.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800 flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-bold text-xs shrink-0 shadow`}>
                        {m.title.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-300">{m.title}</div>
                        <div className="text-[11px] text-emerald-200/70 mt-0.5">{m.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Button to view SWOT analysis */}
            <div className="pt-4">
              <button 
                onClick={onOpenSwot}
                className="btn-outline-gold text-xs flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                View Strategic SWOT & Marketing Matrix
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
