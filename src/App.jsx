import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import AboutSection from './components/AboutSection';
import QualityTimeline from './components/QualityTimeline';
import BrewingTimer from './components/BrewingTimer';
import WholesaleQuote from './components/WholesaleQuote';
import SwotStrategy from './components/SwotStrategy';
import TeaSommelier from './components/TeaSommelier';
import Footer from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quoteProduct, setQuoteProduct] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showBrewingModal, setShowBrewingModal] = useState(false);
  const [showSwotModal, setShowSwotModal] = useState(false);
  const [showSommelierModal, setShowSommelierModal] = useState(false);

  const handleOpenQuote = (product = null) => {
    setQuoteProduct(product);
    setShowQuoteModal(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f7f0] flex flex-col font-sans selection:bg-amber-400 selection:text-emerald-950">
      
      {/* Navigation Bar */}
      <Header 
        onOpenQuote={() => handleOpenQuote(null)}
        onOpenBrewing={() => setShowBrewingModal(true)}
        onOpenSwot={() => setShowSwotModal(true)}
        onOpenSommelier={() => setShowSommelierModal(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero 
          onOpenQuote={() => handleOpenQuote(null)}
          onOpenBrewing={() => setShowBrewingModal(true)}
          onOpenSommelier={() => setShowSommelierModal(true)}
        />

        <ProductCatalog 
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenQuote={(product) => handleOpenQuote(product)}
        />

        <AboutSection 
          onOpenSwot={() => setShowSwotModal(true)}
        />

        <QualityTimeline />
      </main>

      {/* Footer */}
      <Footer 
        onOpenQuote={() => handleOpenQuote(null)}
        onOpenBrewing={() => setShowBrewingModal(true)}
      />

      {/* Modals */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRequestQuote={(product) => {
            setSelectedProduct(null);
            handleOpenQuote(product);
          }}
        />
      )}

      {showQuoteModal && (
        <WholesaleQuote 
          defaultProduct={quoteProduct}
          onClose={() => setShowQuoteModal(false)}
        />
      )}

      {showBrewingModal && (
        <BrewingTimer 
          onClose={() => setShowBrewingModal(false)}
        />
      )}

      {showSwotModal && (
        <SwotStrategy 
          onClose={() => setShowSwotModal(false)}
        />
      )}

      {showSommelierModal && (
        <TeaSommelier 
          onClose={() => setShowSommelierModal(false)}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenQuote={(product) => handleOpenQuote(product)}
        />
      )}

    </div>
  );
}
