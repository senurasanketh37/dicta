import React, { useState } from 'react';
import { Eye, ShoppingBag, Sparkles, Filter, Leaf, Check } from 'lucide-react';

export const productsData = [
  {
    id: 'black-tea',
    name: 'Dicta Premium Black Tea',
    category: 'Black Tea',
    image: '/assets/black_tea.jpg',
    tagline: 'Strong, Full-Bodied Ceylon Heritage',
    description: 'Our signature Sri Lankan black tea with a deep amber liquor, captivating aroma, and robust flavor profile. Carefully processed to preserve natural antioxidants.',
    benefits: ['Natural Energy Boost', 'Rich in Polyphenols', 'Heart Health Support', 'Perfect Morning Brew'],
    packaging: ['25g', '50g', '100g', '200g', '400g', '1kg', '25 Bags', '50 Bags', '100 Bags']
  },
  {
    id: 'green-tea',
    name: 'Dicta Pure Ceylon Green Tea',
    category: 'Green Tea',
    image: '/assets/green_tea.jpg',
    tagline: 'Pure Detox & Antioxidant Protection',
    description: 'Unfermented tender leaf buds plucked from high-altitude Sri Lankan estates. Smooth vegetal flavor with clean finishing notes.',
    benefits: ['High EGCG Antioxidants', 'Metabolism Boost', 'Gentle Detoxification', 'Zero Calories'],
    packaging: ['25g', '50g', '100g', '200g', '400g', '1kg', '25 Bags', '50 Bags']
  },
  {
    id: 'mint-tea',
    name: 'Dicta Fresh Mint Tea',
    category: 'Flavored Tea',
    image: '/assets/mint_tea.jpg',
    tagline: 'Cooling & Digestive Refreshment',
    description: 'A soothing infusion of Ceylon tea leaves blended with natural peppermint leaves. Delivers a cooling sensation and digestive comfort after meals.',
    benefits: ['Soothes Digestion', 'Cooling & Invigorating', 'Relieves Stress', 'Fresh Breath'],
    packaging: ['50g', '100g', '200g', '25 Bags', '50 Bags']
  },
  {
    id: 'cinnamon-tea',
    name: 'Dicta Ceylon Cinnamon Tea',
    category: 'Flavored Tea',
    image: '/assets/cinnamon_tea.jpg',
    tagline: 'Authentic Pure Ceylon Cinnamon Bark',
    description: 'Crafted with genuine Ceylon Cinnamon (Cinnamomum verum). A delicate sweet spice warmth combined with premium black tea leaves.',
    benefits: ['Immunity Balance', 'Blood Sugar Support', 'Warm Sweet Aroma', '100% True Cinnamon'],
    packaging: ['50g', '100g', '200g', '25 Bags', '50 Bags']
  },
  {
    id: 'ginger-tea',
    name: 'Dicta Zesty Ginger Tea',
    category: 'Flavored Tea',
    image: '/assets/ginger_tea.jpg',
    tagline: 'Warm Spicy Throat & Immune Relief',
    description: 'Premium Ceylon black tea combined with sun-dried natural ginger root pieces. Delivers a comforting spicy kick that warms the body.',
    benefits: ['Soothes Sore Throat', 'Nausea Relief', 'Warming Immunity', 'Circulation Support'],
    packaging: ['50g', '100g', '200g', '25 Bags', '50 Bags']
  },
  {
    id: 'lemon-tea',
    name: 'Dicta Citrus Lemon Tea',
    category: 'Flavored Tea',
    image: '/assets/lemon_tea.jpg',
    tagline: 'Tangy Vitamin C Refreshment',
    description: 'Zesty lemon oil and natural citrus zest paired with brisk Ceylon black tea. Delightfully refreshing served hot or iced with honey.',
    benefits: ['Rich Vitamin C Boost', 'Invigorating Taste', 'Great Iced Tea Base', 'Natural Hydration'],
    packaging: ['50g', '100g', '200g', '25 Bags', '50 Bags']
  },
  {
    id: 'white-tea',
    name: 'Dicta Reserve White & Medical Tea',
    category: 'White & Herbal',
    image: '/assets/white_tea.jpg',
    tagline: 'Rare Hand-Picked Silver Buds',
    description: 'The pinnacle of Sri Lankan tea craftsmanship. Hand-plucked velvet buds dried naturally under sunlight. Subtle honey-floral notes.',
    benefits: ['Highest Antioxidants', 'Anti-Aging Properties', 'Ultra-Low Caffeine', 'Rare Reserve Quality'],
    packaging: ['50g Foil', '100g Tin Pack', '200g Luxury Tin']
  },
  {
    id: 'herbal-tea',
    name: 'Dicta Traditional Herbal Tea',
    category: 'White & Herbal',
    image: '/assets/herbal_tea.jpg',
    tagline: 'Ayurvedic Wellness & Botanical Vitality',
    description: 'Formulated with Sri Lanka’s revered medicinal herbs and spices. Free from artificial chemicals, designed for holistic everyday health.',
    benefits: ['Stress Relief', 'Natural Wellness', 'No Added Sugar', 'Traditional Sri Lankan Recipe'],
    packaging: ['50g', '100g', '200g', '25 Bags', '50 Bags']
  },
  {
    id: 'strawberry-tea',
    name: 'Dicta Wild Strawberry Tea',
    category: 'Flavored Tea',
    image: '/assets/strawberry_tea.jpg',
    tagline: 'Luscious Sweet Berry Infusion',
    description: 'Decadent natural strawberry aroma infused into rich black tea leaves. A sweet berry indulgence that delights the senses.',
    benefits: ['Naturally Sweet Aroma', 'Kid & Family Favorite', 'Delicious Hot or Iced', 'Low Calorie Treat'],
    packaging: ['50g', '100g', '200g', '25 Bags', '50 Bags']
  },
  {
    id: 'loose-leaf',
    name: 'Dicta Loose-Leaf Ceylon Reserve',
    category: 'Loose Leaf',
    image: '/assets/loose_leaf.jpg',
    tagline: 'Whole Un-cut Leaf Connoisseur Pack',
    description: 'Unbroken whole Ceylon tea leaves preserved in foil vacuum packs. Delivers full leaf expansion and supreme clarity in every teapot.',
    benefits: ['Full Leaf Expansion', 'Pure Unblended Origin', 'Maximum Aroma Release', 'Foil Vacuum Freshness'],
    packaging: ['100g Pack', '200g Pack', '400g Pack', '1kg Wholesale Bag']
  }
];

export default function ProductCatalog({ onSelectProduct, onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Black Tea', 'Green Tea', 'Flavored Tea', 'White & Herbal', 'Loose Leaf'];

  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#f9f7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            Pure Ceylon Tea Portfolio
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#071f13]">
            Explore Our Premium <span className="text-[#c99a2c]">Tea Collections</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base">
            Every product is manufactured with modern processing technology adhering to ISO 22000 Food Safety Standards and packaged for maximum freshness.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Product Image Header */}
              <div className="relative h-64 overflow-hidden bg-emerald-950/5">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#071f13]/90 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md border border-amber-400/30">
                  {product.category}
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 text-emerald-950 text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm shadow">
                  Pure Ceylon
                </div>
              </div>

              {/* Product Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-serif text-[#071f13] group-hover:text-emerald-800 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-amber-700 mt-1">
                    {product.tagline}
                  </p>

                  <p className="text-gray-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Benefits List Preview */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {product.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Packaging Sizes */}
                <div className="text-[11px] text-gray-500 pt-2 flex flex-wrap gap-1">
                  <span className="font-semibold text-gray-700">Sizes:</span>
                  {product.packaging.slice(0, 4).join(', ')}...
                </div>

                {/* Card Actions */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-emerald-900/30 text-emerald-950 font-bold text-xs hover:bg-emerald-900 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>

                  <button
                    onClick={() => onOpenQuote(product)}
                    className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Quote
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
