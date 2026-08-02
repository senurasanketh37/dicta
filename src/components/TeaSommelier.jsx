import React, { useState } from 'react';
import { Sparkles, Compass, CheckCircle2, ArrowRight, RotateCcw, ShoppingBag, X } from 'lucide-react';
import { productsData } from './ProductCatalog';

export default function TeaSommelier({ onClose, onSelectProduct, onOpenQuote }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    time: '',
    flavor: '',
    benefit: ''
  });

  const times = [
    { label: 'Morning Kickstart', val: 'morning', icon: '🌅', desc: 'Need strong energy & focus for the day ahead' },
    { label: 'Afternoon Refreshment', val: 'afternoon', icon: '☀️', desc: 'Crisp, aromatic boost during work or leisure' },
    { label: 'Evening Relaxation', val: 'evening', icon: '🌙', desc: 'Gentle, low-caffeine or herbal soothing blend' },
    { label: 'Post-Meal & Detox', val: 'detox', icon: '🍃', desc: 'Support digestion and natural body balance' }
  ];

  const flavors = [
    { label: 'Robust & Full-Bodied', val: 'robust', icon: '☕', desc: 'Deep malt, amber liquor & traditional intensity' },
    { label: 'Light, Floral & Delicate', val: 'delicate', icon: '🌸', desc: 'Subtle sweet notes & clean smooth finish' },
    { label: 'Zesty Citrus & Mint', val: 'citrus', icon: '🍋', desc: 'Cooling peppermint or vibrant lemon twist' },
    { label: 'Warm Spice & Cinnamon', val: 'spice', icon: '🪵', desc: 'Comforting Ceylon cinnamon or spicy ginger' }
  ];

  const benefits = [
    { label: 'Natural Vitality & Energy', val: 'energy', icon: '⚡' },
    { label: 'Digestive & Throat Care', val: 'digestion', icon: '🌿' },
    { label: 'Immunity & Metabolism', val: 'immunity', icon: '🛡️' },
    { label: 'Pure Detox & Antioxidants', val: 'antioxidant', icon: '✨' }
  ];

  const getMatch = () => {
    if (answers.flavor === 'robust' || answers.time === 'morning') return productsData.find(p => p.id === 'black-tea');
    if (answers.flavor === 'delicate') return productsData.find(p => p.id === 'white-tea');
    if (answers.flavor === 'citrus' && answers.benefit === 'digestion') return productsData.find(p => p.id === 'mint-tea');
    if (answers.flavor === 'citrus') return productsData.find(p => p.id === 'lemon-tea');
    if (answers.flavor === 'spice' && answers.benefit === 'immunity') return productsData.find(p => p.id === 'cinnamon-tea');
    if (answers.flavor === 'spice') return productsData.find(p => p.id === 'ginger-tea');
    if (answers.benefit === 'antioxidant') return productsData.find(p => p.id === 'green-tea');
    if (answers.benefit === 'digestion') return productsData.find(p => p.id === 'herbal-tea');
    return productsData[0];
  };

  const match = getMatch();

  return (
    <div className="modal-overlay animate-fade-in">
      <div className="bg-[#04140b] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative border-2 border-amber-400/50 shadow-2xl overflow-hidden">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-emerald-300 hover:text-white p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/40">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Interactive Tea Matcher</span>
            <h3 className="text-xl font-bold font-serif text-white">Find Your Perfect Dicta Ceylon Blend</h3>
          </div>
        </div>

        {/* Step Progress Bar */}
        {step <= 3 && (
          <div className="mb-6 flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? 'bg-amber-400' : 'bg-emerald-950'}`}
              />
            ))}
          </div>
        )}

        {/* Step 1: Time */}
        {step === 1 && (
          <div className="space-y-4 animate-slide-up">
            <h4 className="text-sm font-bold text-amber-300">Question 1 of 3: When do you usually enjoy your tea?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {times.map((t) => (
                <button
                  key={t.val}
                  onClick={() => {
                    setAnswers({ ...answers, time: t.val });
                    setStep(2);
                  }}
                  className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-800/80 hover:border-amber-400 text-left transition-all hover:scale-[1.02] group"
                >
                  <div className="text-2xl mb-1">{t.icon}</div>
                  <div className="font-bold text-sm text-white group-hover:text-amber-300">{t.label}</div>
                  <div className="text-xs text-emerald-200/70 mt-1">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Flavor */}
        {step === 2 && (
          <div className="space-y-4 animate-slide-up">
            <h4 className="text-sm font-bold text-amber-300">Question 2 of 3: Which flavor notes appeal to you most?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {flavors.map((f) => (
                <button
                  key={f.val}
                  onClick={() => {
                    setAnswers({ ...answers, flavor: f.val });
                    setStep(3);
                  }}
                  className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-800/80 hover:border-amber-400 text-left transition-all hover:scale-[1.02] group"
                >
                  <div className="text-2xl mb-1">{f.icon}</div>
                  <div className="font-bold text-sm text-white group-hover:text-amber-300">{f.label}</div>
                  <div className="text-xs text-emerald-200/70 mt-1">{f.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Benefit */}
        {step === 3 && (
          <div className="space-y-4 animate-slide-up">
            <h4 className="text-sm font-bold text-amber-300">Question 3 of 3: What is your primary wellness goal?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <button
                  key={b.val}
                  onClick={() => {
                    setAnswers({ ...answers, benefit: b.val });
                    setStep(4);
                  }}
                  className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-800/80 hover:border-amber-400 text-left transition-all hover:scale-[1.02] group flex items-center gap-3"
                >
                  <div className="text-3xl">{b.icon}</div>
                  <div className="font-bold text-sm text-white group-hover:text-amber-300">{b.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Result Match */}
        {step === 4 && (
          <div className="space-y-6 animate-slide-up text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/40">
              <Sparkles className="w-3.5 h-3.5" /> Perfect Blend Match Found
            </div>

            <div className="bg-[#072414] rounded-3xl p-6 border border-amber-400/40 flex flex-col sm:flex-row items-center gap-6 text-left">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border border-amber-400/30 shrink-0">
                <img src={match.image} alt={match.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">{match.category}</span>
                <h4 className="text-2xl font-bold font-serif text-white">{match.name}</h4>
                <p className="text-xs text-emerald-100/90 leading-relaxed">{match.description}</p>
                <div className="text-xs font-semibold text-amber-400 pt-1">
                  ✦ Recommended Packaging: {match.packaging.slice(0, 3).join(', ')}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button 
                onClick={() => {
                  onClose();
                  onSelectProduct(match);
                }}
                className="btn-gold-luxury text-xs flex items-center gap-2"
              >
                View Full Product Details
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => {
                  onClose();
                  onOpenQuote(match);
                }}
                className="btn-outline-luxury text-xs flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Request Sample & Quote
              </button>

              <button 
                onClick={() => {
                  setStep(1);
                  setAnswers({ time: '', flavor: '', benefit: '' });
                }}
                className="p-3 rounded-full bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800"
                title="Restart Quiz"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
