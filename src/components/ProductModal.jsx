import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, ShoppingBag, Send } from 'lucide-react';

export default function ProductModal({ product, onClose, onRequestQuote }) {
  if (!product) return null;

  const [selectedPack, setSelectedPack] = useState(product.packaging[0] || '');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-amber-400/30 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Image Section */}
        <div className="md:w-1/2 relative bg-[#071f13]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071f13] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="badge-ceylon mb-2">Sri Lankan Origin</span>
            <h3 className="text-2xl font-bold font-serif text-amber-300">{product.name}</h3>
            <p className="text-xs text-emerald-200">{product.tagline}</p>
          </div>
        </div>

        {/* Right Details & Inquiry Form */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">Product Specification</span>
            <p className="text-gray-700 text-sm mt-2 leading-relaxed">{product.description}</p>
          </div>

          {/* Key Health & Taste Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950 mb-2">Key Highlights & Benefits</h4>
            <div className="grid grid-cols-1 gap-1.5">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Packaging Formats Available */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950 mb-2">Available Package Formats</h4>
            <div className="flex flex-wrap gap-2">
              {product.packaging.map((pack) => (
                <button
                  key={pack}
                  onClick={() => setSelectedPack(pack)}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all ${selectedPack === pack ? 'bg-[#071f13] text-amber-300 border-[#071f13]' : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-emerald-700'}`}
                >
                  {pack}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Inquiry Form */}
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-2xl text-center text-emerald-900 animate-fade-in space-y-1">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
              <div className="font-bold text-sm">Sample & Quote Inquiry Sent!</div>
              <div className="text-xs text-emerald-700">Our export & wholesale manager will contact dictapremiumtea@gmail.com shortly.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmitInquiry} className="space-y-3 pt-2 border-t border-gray-100">
              <div className="text-xs font-bold text-gray-800">Quick B2B Sample Request ({selectedPack}):</div>
              <input 
                type="text" 
                required 
                placeholder="Your Business / Hotel / Store Name" 
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-emerald-700"
              />
              <input 
                type="email" 
                required 
                placeholder="Contact Email / Phone" 
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:border-emerald-700"
              />
              <button 
                type="submit" 
                className="w-full btn-gold py-2.5 text-xs flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Direct Request
              </button>
            </form>
          )}

          {/* Trust Badges */}
          <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-100">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> ISO 22000 Standard</span>
            <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-amber-600" /> Domestic & Export</span>
          </div>
        </div>

      </div>
    </div>
  );
}
