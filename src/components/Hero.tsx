import React from 'react';
import { Download, Play, ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-100 rounded-full blur-2xl animate-drift"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-slate-100 rounded-full blur-3xl animate-drift-reverse" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-300 rounded-full animate-twinkle opacity-60"></div>
        <div className="absolute top-3/5 right-1/5 w-1 h-1 bg-slate-400 rounded-full animate-twinkle opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-blue-200 rounded-full animate-twinkle opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-slate-300 rounded-full animate-twinkle opacity-30" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-2/3 right-1/3 w-2 h-2 bg-blue-100 rounded-full animate-twinkle opacity-45" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Lines */}
        <div className="absolute top-1/3 left-1/4 w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-slide-horizontal opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent animate-slide-horizontal-reverse opacity-15" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-0.5 h-20 bg-gradient-to-b from-transparent via-blue-100 to-transparent animate-slide-vertical opacity-10" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Minimal Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <Sparkles className="w-4 h-4 text-blue-300 opacity-40 animate-spin-slow" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-pulse" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-3 h-3 text-slate-400 opacity-30 animate-spin-slow" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-pulse" style={{ animationDelay: '4s' }}>
          <Sparkles className="w-4 h-4 text-blue-200 opacity-35 animate-spin-slow" />
        </div>
        
        {/* Additional Sparkles */}
        <div className="absolute top-1/6 right-1/6 animate-pulse" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-2 h-2 text-blue-400 opacity-25 animate-spin-slow" />
        </div>
        <div className="absolute bottom-1/6 left-1/6 animate-pulse" style={{ animationDelay: '5s' }}>
          <Sparkles className="w-3 h-3 text-slate-300 opacity-20 animate-spin-slow" />
        </div>
      </div>

      {/* Subtle Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute bottom-0 left-0 w-[200%] h-full bg-gradient-to-r from-blue-500 via-slate-400 to-blue-500 animate-wave"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[60vh] gap-8">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-16 space-y-6">
            <div className="animate-fadeInUp">
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-[1.1] tracking-tight">
                Méditation Matinale
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-lg md:text-xl lg:text-2xl font-light text-slate-600 mb-6 leading-relaxed">
                {t('hero.subtitle')}
              </h2>
              
              {/* Decorative Line */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-slate-300 mx-auto lg:mx-0 mb-8 rounded-full"></div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://drive.google.com/file/d/16teXJzvh0QUE-iW2qBveW39bsPizLj6i/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-800 text-white px-8 py-4 rounded-2xl font-medium text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Download className="w-4 h-4 group-hover:animate-pulse" />
                  <span>{t('hero.download')}</span>
                </a>
                
                <button 
                  onClick={() => window.open('https://youtu.be/amLQqwG48VM', '_blank')}
                  className="group bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-2xl font-medium text-base shadow-lg hover:shadow-xl border border-slate-200/50 hover:border-blue-300 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Play className="w-4 h-4 group-hover:text-blue-500" />
                  <span>{t('hero.watch')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Apostle Photo */}
          <div className="flex-1 lg:pl-8">
            <div className="relative">
              {/* Main Photo Container */}
              <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200/50 transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="pasteur.jpg"
                  alt="Apôtre Jean Yves Mboueme"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Play Button */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
              
              {/* Floating MEMA Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-slate-100">
                <span className="text-slate-700 font-medium text-sm tracking-wide">MEMA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-slate-400 hover:text-blue-500 transition-colors duration-300 p-4 bg-white/60 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md border border-slate-100/50"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;