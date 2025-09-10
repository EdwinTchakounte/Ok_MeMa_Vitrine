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
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <img src="logo.png" alt="MEMA Logo" className="h-8 w-8 object-contain" />
              <span className="text-2xl font-poppins font-bold text-navy">
                MEMA
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-6">
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

          {/* Desktop Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Desktop Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center space-x-1.5 px-2.5 py-1.5 bg-golden/10 hover:bg-golden/20 rounded-lg transition-colors duration-200"
            >
              <Globe className="w-4 h-4 text-golden" />
              <span className="text-sm font-inter font-medium text-golden uppercase">
                {language}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-700 hover:text-golden transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-slate-100">
              {/* Mobile Language Toggle - Centered */}
              <div className="flex justify-center py-3 border-b border-slate-100 mb-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 px-4 py-2 bg-golden/10 hover:bg-golden/20 rounded-lg transition-colors duration-200"
                >
                  <Globe className="w-4 h-4 text-golden" />
                  <span className="text-sm font-inter font-medium text-golden uppercase">
                    {language === 'fr' ? 'Français' : 'English'}
                  </span>
                </button>
              </div>
              
              {/* Mobile Navigation Links */}
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