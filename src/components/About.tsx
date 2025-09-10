import React from 'react';
import { Heart, Book, Users, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-slate-100/60 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-slate-200/40">
            <Heart className="w-4 h-4 text-slate-600 mr-3" />
            <span className="text-slate-700 font-medium text-sm tracking-wide">Notre Histoire</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6 leading-tight tracking-tight">
            {t('about.title')}
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          
          {/* Mission Section */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-light text-slate-800 mb-6 flex items-center">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                {t('about.mission')}
              </h3>
              <p className="text-lg font-light text-slate-600 leading-relaxed mb-8">
                {t('about.missionText')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center border border-slate-200/50 hover:border-slate-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-slate-200/20 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Book className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-light text-slate-800 mb-2">365+</div>
                <div className="text-sm font-medium text-slate-500 tracking-wide">Méditations</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center border border-slate-200/50 hover:border-slate-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-slate-200/20 group">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-light text-slate-800 mb-2">10K+</div>
                <div className="text-sm font-medium text-slate-500 tracking-wide">Fidèles</div>
              </div>
            </div>
          </div>

          {/* Apostle Section */}
          <div className="bg-white/60 backdrop-blur-sm p-10 rounded-3xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-light text-slate-800 mb-6">
                {t('about.apostle')}
              </h3>
            </div>
            
            <p className="text-base font-light text-slate-600 leading-relaxed text-center">
              {t('about.apostleText')}
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center space-x-3 mt-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.5}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-slate-200/20 hover:-translate-y-1">
            <div className="w-12 h-12 bg-slate-800 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Book className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-light text-slate-800 mb-3">Enseignement</h4>
            <p className="text-slate-600 font-light text-sm leading-relaxed">Méditations quotidiennes pour nourrir l'âme</p>
          </div>

          <div className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-slate-200/20 hover:-translate-y-1">
            <div className="w-12 h-12 bg-slate-800 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-light text-slate-800 mb-3">Communauté</h4>
            <p className="text-slate-600 font-light text-sm leading-relaxed">Une famille spirituelle unie dans la foi</p>
          </div>

          <div className="group text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-slate-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-slate-200/20 hover:-translate-y-1">
            <div className="w-12 h-12 bg-slate-800 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-light text-slate-800 mb-3">Amour</h4>
            <p className="text-slate-600 font-light text-sm leading-relaxed">L'amour divin au centre de tout</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;