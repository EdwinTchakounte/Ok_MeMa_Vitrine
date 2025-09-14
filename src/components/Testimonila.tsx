import React from 'react';
import { Phone, Mail, MapPin, BookOpen, Heart, Star, Users, ArrowRight } from 'lucide-react';

const ApostleProfile = () => {
  const expertises = [
    { name: 'Consultant conjugal', icon: Heart },
    { name: 'Conseiller spirituel', icon: Star },
    { name: 'Écrivain', icon: BookOpen }
  ];

  const transfigurations = [
    'Transfiguration Divine',
    'Transfiguration spirituelle', 
    'Transfiguration sociale',
    'Transfiguration financière'
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header - Simplifié et Moderne */}
      <div className="text-center mb-20">
        <div className="space-y-6 mb-8">
          <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
            Mission d'Évangélisation Apostolique
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight leading-tight">
            Accompagnement Spirituel
            <br />
            <span className="font-extralight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              & Transformation Personnelle
            </span>
          </h1>
        </div>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
          Découvrez un chemin vers l'épanouissement spirituel et personnel
        </p>
      </div>

      {/* Main Grid - Layout Moderne */}
      <div className="grid lg:grid-cols-3 gap-16">
        
        {/* Left Column - Contenu Principal */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* Expertises - Simplifié */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-0.5 bg-gradient-to-r from-slate-900 via-slate-400 to-transparent"></div>
              <h2 className="text-3xl font-light text-slate-900 tracking-wide">Domaines d'Expertise</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {expertises.map((expertise, index) => {
                const IconComponent = expertise.icon;
                return (
                  <div key={index} className="group text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-slate-600" />
                    </div>
                    <h3 className="text-lg font-medium text-slate-800">{expertise.name}</h3>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Transfigurations - Ultra Simplifié */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-0.5 bg-gradient-to-r from-slate-900 via-slate-400 to-transparent"></div>
              <h2 className="text-3xl font-light text-slate-900 tracking-wide">Thèmes de Transfiguration</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {transfigurations.map((theme, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                      {theme}
                    </h3>
                    <div className="w-2 h-2 bg-slate-400 rounded-full group-hover:bg-slate-600 transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Contact Card */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sticky top-8 shadow-lg">
            
            {/* Header Contact */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-2xl font-light text-slate-900">Contact</h3>
            </div>
            
            {/* Contact Info - Cartes Modernes */}
            <div className="space-y-6 mb-8">
              
              {/* Téléphones */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">Téléphone</span>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-slate-900">+237 673 07 16 00</p>
                  <p className="font-medium text-slate-900">+237 694 63 76 67</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">Email</span>
                </div>
                <a 
                  href="mailto:apotrejeanyvesmboueme@gmail.com" 
                  className="text-slate-900 font-medium hover:text-slate-700 transition-colors text-sm break-all"
                >
                  apotrejeanyvesmboueme@gmail.com
                </a>
              </div>

              {/* Adresse */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">Adresse</span>
                </div>
                <div className="text-slate-900 space-y-1">
                  <p className="font-medium">Dschang</p>
                  <p className="text-sm text-slate-600">Immeuble Azimenda</p>
                  <p className="text-sm text-slate-600">Derrière Hôtel le Mbouoh</p>
                </div>
              </div>
            </div>

            {/* CTA Button - Moderne */}
            <a
              href="https://wa.me/237673071600"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Footer - MEA Badge */}
            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">MEA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApostleProfile;