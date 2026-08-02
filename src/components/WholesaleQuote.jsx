import React, { useState } from 'react';
import { X, Calculator, Send, CheckCircle2, Building, Globe, ShoppingCart, ShieldCheck } from 'lucide-react';
import { productsData } from './ProductCatalog';

export default function WholesaleQuote({ defaultProduct, onClose }) {
  const [selectedTea, setSelectedTea] = useState(defaultProduct ? defaultProduct.id : 'black-tea');
  const [packagingType, setPackagingType] = useState('100g');
  const [quantity, setQuantity] = useState(100);
  const [businessType, setBusinessType] = useState('Supermarket');
  const [businessName, setBusinessName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const activeTeaObj = productsData.find(p => p.id === selectedTea) || productsData[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-amber-400/40 max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-[#071f13] text-white p-6 relative border-b border-amber-400/30">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-emerald-300 hover:text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif text-amber-300">B2B Wholesale & Export Inquiry Builder</h3>
              <p className="text-xs text-emerald-200">Domestic Supermarkets, Hotels, Cafes & Global Export Distribution</p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-serif text-[#071f13]">Inquiry Submitted Successfully!</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you for contacting <strong>DICTA Premium Tea (PVT) Limited</strong>. Our business development team will review your estimated request of <strong>{quantity} units</strong> of <strong>{activeTeaObj.name} ({packagingType})</strong> and dispatch custom wholesale pricing to <strong>{contactEmail}</strong>.
              </p>
              <div className="pt-4">
                <button onClick={onClose} className="btn-gold text-xs">
                  Done & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Tea Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">1. Select Ceylon Tea Blend</label>
                <select 
                  value={selectedTea}
                  onChange={(e) => setSelectedTea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold focus:border-emerald-700 focus:outline-none bg-white"
                >
                  {productsData.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Packaging & Order Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">2. Packaging Size / Format</label>
                  <select 
                    value={packagingType}
                    onChange={(e) => setPackagingType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold focus:border-emerald-700 focus:outline-none bg-white"
                  >
                    {activeTeaObj.packaging.map((pack) => (
                      <option key={pack} value={pack}>{pack}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">3. Estimated Order Volume (Units)</label>
                  <input 
                    type="number" 
                    min="25" 
                    step="25" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold focus:border-emerald-700 focus:outline-none"
                  />
                </div>
              </div>

              {/* Step 3: Business Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">Business Category</label>
                  <select 
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold focus:border-emerald-700 focus:outline-none bg-white"
                  >
                    <option value="Supermarket">Supermarket & Retail Chain</option>
                    <option value="Hotel & Resort">Hotel, Restaurant & Cafe (HoReCa)</option>
                    <option value="Wholesale Distributor">Wholesale Distributor</option>
                    <option value="Office & Institution">Office / Corporate Institution</option>
                    <option value="Export Trade">International Export Buyer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">Company / Store Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Ceylon Star Supermarket"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold focus:border-emerald-700 focus:outline-none"
                  />
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">Work Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="purchasing@company.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold focus:border-emerald-700 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block">Phone / WhatsApp Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="0761266365 / International Code"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold focus:border-emerald-700 focus:outline-none"
                  />
                </div>
              </div>

              {/* Order Summary Box */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider">Requested Summary</div>
                  <div className="text-sm font-bold text-emerald-900 mt-0.5">
                    {quantity} Units × {activeTeaObj.name} ({packagingType})
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  Custom B2B Tier
                </span>
              </div>

              <button 
                type="submit" 
                className="w-full btn-gold py-3 text-sm font-bold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Official Wholesale Quote Request
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
