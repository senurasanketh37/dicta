import React from 'react';
import { ShieldCheck, Leaf, Cpu, PackageCheck, Award, Sparkles } from 'lucide-react';

export default function QualityTimeline() {
  const steps = [
    {
      num: '01',
      title: 'Fresh Leaf Harvest',
      desc: 'Selected tender two-leaves-and-a-bud hand plucked from lush high-altitude Sri Lankan tea plantations by local growers.',
      icon: Leaf
    },
    {
      num: '02',
      title: 'Natural Withering',
      desc: 'Controlled air withering to gently reduce moisture content while concentrating essential fragrant oils and aroma.',
      icon: Sparkles
    },
    {
      num: '03',
      title: 'Precision Rolling & Fermentation',
      desc: 'Modern rolling machinery twists the leaves to release enzymes, followed by oxidation to achieve classic Ceylon golden liquor.',
      icon: Cpu
    },
    {
      num: '04',
      title: 'Drying & ISO Quality Grading',
      desc: 'High-temperature air drying to lock in flavor, followed by strict particle sifting under ISO 22000 hygiene control.',
      icon: ShieldCheck
    },
    {
      num: '05',
      title: 'Eco-Friendly Packaging',
      desc: 'Sealed into 25g - 1kg foil bags and 25-100 tea bag packs adhering to strict health and safety standards for local and export markets.',
      icon: PackageCheck
    }
  ];

  return (
    <section id="processing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            ISO 22000 Food Safety Certified
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#071f13]">
            Production Processing & <span className="text-[#c99a2c]">Quality Control</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base">
            Quality control procedures are rigorously followed at every stage of production to ensure unmatched cleanliness, pristine hygiene, and natural taste.
          </p>
        </div>

        {/* Lifecycle Steps Horizontal / Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div 
                key={index}
                className="bg-[#fcfbf9] rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold font-serif text-amber-500">{step.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-[#071f13] group-hover:text-emerald-800 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Quality Verified
                </div>
              </div>
            );
          })}

        </div>

        {/* Quality Banner */}
        <div className="mt-16 bg-[#071f13] rounded-3xl p-8 border border-amber-400/30 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif text-amber-300">
              Why DICTA Stands Out in Ceylon Tea
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl">
              Our factory uses 100% eco-friendly, Sri Lankan grown tea leaves delivering fresh natural aroma and safe, high-quality packaging trusted across domestic supermarkets, hotels, cafes, and global export destinations.
            </p>
          </div>
          <div className="shrink-0">
            <a href="#contact" className="btn-gold text-xs sm:text-sm flex items-center gap-2">
              Partner With Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
