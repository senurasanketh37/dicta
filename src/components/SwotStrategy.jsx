import React, { useState } from 'react';
import { X, TrendingUp, ShieldAlert, Zap, AlertTriangle, Target, Lightbulb } from 'lucide-react';

export default function SwotStrategy({ onClose }) {
  const [activeTab, setActiveTab] = useState('swot');

  const swotData = {
    strengths: [
      'High Quality and Clearly Certified Ceylon Tea Products (ISO 22000)',
      'Attractive, 100% Eco-Friendly and Premium Safe Packaging',
      'Wide Variety of Products (Black, Green, Mint, Cinnamon, Ginger, Lemon, White & Herbal)',
      'Unwavering Focus on Customer Satisfaction & Product Purity'
    ],
    weaknesses: [
      'Dependence on local raw tea leaf growers & suppliers',
      'Small production capacity during early factory scaling phase',
      'Limited early export trade experience',
      'Initial capital allocation and cash flow pressure'
    ],
    opportunities: [
      'Expand direct distribution via Social Media and E-Commerce channels',
      'Strategic partnership opportunities with Supermarket chains, Hotels, and Cafes',
      'Surging global consumer demand for Herbal Tea, Organic Tea & Ceylon Spices',
      'Entry into high-margin foreign export trade markets'
    ],
    threats: [
      'Strong market competition from long-established tea brand players',
      'Rising packaging material expenses and inland transport costs',
      'Climate change and unpredictable weather affecting tea leaf harvests',
      'Changes in economic stability and inflation pressures'
    ]
  };

  const marketingPillars = [
    { title: 'Target Market Strategy', desc: 'Focus on domestic consumers, supermarkets, HoReCa (Hotels, Restaurants, Cafes), offices & institutions, wholesale distributors, and export markets.' },
    { title: 'Product Strategy', desc: 'Processing fresh tea leaves with modern technology, ISO 22000 food safety adherence, offering loose-leaf and 25-100 tea bag packs.' },
    { title: 'Pricing & Value Strategy', desc: 'Competitive tiered pricing with premium positioning emphasizing pure 100% Sri Lankan origin.' },
    { title: 'Promotion & Branding Strategy', desc: 'Digital social media campaigns, eco-friendly branding promise "Every cup, pure Sri Lankan Excellence", B2B sampling.' }
  ];

  return (
    <div className="modal-overlay animate-fade-in">
      <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-amber-400/40 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#071f13] text-white p-6 relative border-b border-amber-400/30">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-300 hover:text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif text-amber-300">DICTA Strategic Business Plan & SWOT Analysis</h3>
              <p className="text-xs text-emerald-200">Stakeholder Insights & Market Positioning Strategy</p>
            </div>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="flex border-b border-gray-200 px-6 pt-3 bg-gray-50 text-xs font-bold gap-6">
          <button 
            onClick={() => setActiveTab('swot')}
            className={`pb-3 transition-colors ${activeTab === 'swot' ? 'text-[#071f13] border-b-2 border-[#071f13]' : 'text-gray-500 hover:text-gray-900'}`}
          >
            SWOT Analysis Matrix
          </button>
          <button 
            onClick={() => setActiveTab('marketing')}
            className={`pb-3 transition-colors ${activeTab === 'marketing' ? 'text-[#071f13] border-b-2 border-[#071f13]' : 'text-gray-500 hover:text-gray-900'}`}
          >
            Marketing Strategy Framework
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {activeTab === 'swot' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              
              {/* Strengths */}
              <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-900 font-bold font-serif text-base mb-3">
                  <Zap className="w-5 h-5 text-emerald-700" />
                  Strengths (Internal)
                </div>
                <ul className="space-y-2 text-xs text-emerald-950">
                  {swotData.strengths.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-900 font-bold font-serif text-base mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-700" />
                  Weaknesses (Internal)
                </div>
                <ul className="space-y-2 text-xs text-amber-950">
                  {swotData.weaknesses.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opportunities */}
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
                <div className="flex items-center gap-2 text-blue-900 font-bold font-serif text-base mb-3">
                  <Lightbulb className="w-5 h-5 text-blue-700" />
                  Opportunities (External)
                </div>
                <ul className="space-y-2 text-xs text-blue-950">
                  {swotData.opportunities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Threats */}
              <div className="bg-rose-50 rounded-2xl p-5 border border-rose-200">
                <div className="flex items-center gap-2 text-rose-900 font-bold font-serif text-base mb-3">
                  <ShieldAlert className="w-5 h-5 text-rose-700" />
                  Threats (External)
                </div>
                <ul className="space-y-2 text-xs text-rose-950">
                  {swotData.threats.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-700 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {marketingPillars.map((p, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
                    <div className="flex items-center gap-2 text-sm font-bold font-serif text-[#071f13]">
                      <Target className="w-4 h-4 text-amber-600" />
                      {p.title}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
