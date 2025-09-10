import React from 'react';
import { Heart, Facebook, Youtube, Instagram, Music } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.meditations'), href: '#meditations' },
    { label: t('nav.media'), href: '#media' },
  ];

  const socialLinks = [
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Music, href: '#', color: 'hover:text-gray-700' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
           <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <img src="logo.png" alt="MEMA Logo" className="h-8 w-8 object-contain" />
              <span className="text-2xl font-poppins font-bold text-white">
                MEMA
              </span>
            </a>
            
          </div>
            
            <p className="text-lg font-inter text-slate-300 mb-6 leading-relaxed max-w-md">
              Ministère de l'Éveil et des Méditations Apostoliques
              <br />
              <span className="text-golden italic">"Éveiller les esprits, nourrir les âmes"</span>
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 ${social.color} transition-colors duration-300 hover:bg-slate-700`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">{t('footer.links')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-golden transition-colors duration-300 font-inter"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <p className="text-slate-300 font-inter">
                <span className="block">Email:</span>
                <span className="text-golden">contact@mema-ministere.org</span>
              </p>
              <p className="text-slate-300 font-inter">
                <span className="block">WhatsApp:</span>
                <span className="text-golden">+237 673 071 600</span>
              </p>
              <p className="text-slate-300 font-inter">
                <span className="block">Localisation:</span>
                <span className="text-golden">Dschang - Cameroun</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 font-inter text-sm">
              © 2025 MEMA. {t('footer.rights')}.
            </p>
            <p className="text-slate-400 font-inter text-sm mt-2 md:mt-0">
              Développé avec <Heart className="inline w-4 h-4 text-golden mx-1" /> par l'équipe MEMA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;