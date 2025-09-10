import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'meditations', 'media'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

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

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'meditations', label: t('nav.meditations') },
    { id: 'media', label: t('nav.media') },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-200/50' 
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100/30'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo Section */}
            <button
              className="group flex items-center space-x-2 sm:space-x-3 focus:outline-none focus:ring-2 focus:ring-golden/20 rounded-xl p-1.5 sm:p-2 -m-1.5 sm:-m-2 transition-all duration-300"
              onClick={() => scrollToSection('home')}
              aria-label="Go to top"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-golden/20 to-transparent rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <img
                  src="logo.png"
                  alt="MEMA Logo"
                  className="relative w-8 h-8 sm:w-10 lg:w-12 sm:h-10 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-golden group-hover:to-amber-600">
                  MEMA
                </span>
                <div className="h-0.5 bg-gradient-to-r from-golden to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1 xl:space-x-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 xl:px-4 py-2 rounded-xl font-medium text-sm xl:text-base transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'text-golden bg-golden/10 shadow-sm'
                        : 'text-slate-700 hover:text-golden hover:bg-slate-50'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r from-golden/20 to-amber-500/20 rounded-xl transition-all duration-300 ${
                      activeSection === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                    }`}></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Language Toggle */}
              <div className="relative group">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-golden/10 to-amber-500/10 hover:from-golden/20 hover:to-amber-500/20 border border-golden/20 rounded-lg sm:rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-golden/10"
                >
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-golden transition-transform duration-300 group-hover:rotate-12" />
                  <span className="text-xs sm:text-sm font-semibold text-golden uppercase tracking-wide">
                    {language}
                  </span>
                  <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-golden/70 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative p-1.5 sm:p-2 text-slate-700 hover:text-golden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-golden/20 rounded-lg sm:rounded-xl group"
                  aria-label="Toggle menu"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                    <span className={`absolute left-0 top-1.5 sm:top-1.5 w-5 sm:w-6 h-0.5 bg-current transform transition-all duration-300 origin-center ${
                      isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}></span>
                    <span className={`absolute left-0 top-2.5 sm:top-3 w-5 sm:w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                    }`}></span>
                    <span className={`absolute left-0 top-3.5 sm:top-4.5 w-5 sm:w-6 h-0.5 bg-current transform transition-all duration-300 origin-center ${
                      isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/98 backdrop-blur-xl border-t border-slate-200/50 shadow-lg">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 space-y-1 sm:space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 transform ${
                    activeSection === item.id
                      ? 'text-golden bg-gradient-to-r from-golden/10 to-amber-500/10 border border-golden/20 shadow-sm'
                      : 'text-slate-700 hover:text-golden hover:bg-slate-50 hover:pl-4 sm:hover:pl-6'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideInUp 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="relative">
                      {item.label}
                      <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-golden to-amber-500 transition-all duration-300 ${
                        activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></div>
                    </span>
                    {activeSection === item.id && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-golden rounded-full animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;