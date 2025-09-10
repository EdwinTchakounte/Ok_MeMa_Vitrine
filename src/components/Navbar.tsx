import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-poppins font-bold text-navy">
              MEMA
              
            </span>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-golden font-inter font-medium transition-colors duration-200"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-golden font-inter font-medium transition-colors duration-200"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('meditations')}
                className="text-slate-700 hover:text-golden font-inter font-medium transition-colors duration-200"
              >
                {t('nav.meditations')}
              </button>
              <button
                onClick={() => scrollToSection('media')}
                className="text-slate-700 hover:text-golden font-inter font-medium transition-colors duration-200"
              >
                {t('nav.media')}
              </button>
            </div>
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-1 bg-golden/10 hover:bg-golden/20 rounded-lg transition-colors duration-200"
            >
              <Globe className="w-4 h-4 text-golden" />
              <span className="text-sm font-inter font-medium text-golden uppercase">
                {language}
              </span>
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-golden transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-100">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-golden hover:bg-slate-50 rounded-md font-inter font-medium transition-colors duration-200"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-golden hover:bg-slate-50 rounded-md font-inter font-medium transition-colors duration-200"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('meditations')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-golden hover:bg-slate-50 rounded-md font-inter font-medium transition-colors duration-200"
              >
                {t('nav.meditations')}
              </button>
              <button
                onClick={() => scrollToSection('media')}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-golden hover:bg-slate-50 rounded-md font-inter font-medium transition-colors duration-200"
              >
                {t('nav.media')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;