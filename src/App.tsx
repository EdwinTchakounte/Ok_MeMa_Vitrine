import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Meditations from './components/Meditations';
import Media from './components/Media';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { LanguageProvider } from './contexts/LanguageContext';
import { supabase } from './lib/supabase';
import ApostleProfile from './components/Testimonila';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize app
    const init = async () => {
      try {
        // You can add initialization logic here
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-golden border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-lato">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ApostleProfile />
          
          <Meditations />
          <Media />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  );
}

export default App;