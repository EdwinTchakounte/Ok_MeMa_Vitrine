import React from 'react';
import { Phone, Mail, MapPin, BookOpen, Heart, Star, Tv, Users, Crown } from 'lucide-react';

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
    <div className="max-w-6xl mx-auto">
      {/* Header Section - Ultra Clean */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-sm text-blue-600 mb-8">
          <Tv className="w-4 h-4" />
          <span>Télévision Réveil</span>
        </div>
        
        <div className="space-y-2 mb-8">
          <p className="text-blue-500 text-sm font-medium tracking-wide uppercase">
            Mission d'Évangélisation Apostolique
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
            Apôtre Jean Yves <span className="font-medium">Mboueme</span>
          </h1>
        </div>
        
        <p className="text-lg text-blue-600 max-w-2xl mx-auto leading-relaxed">
          Accompagnement spirituel et transformation personnelle
        </p>
      </div>

      {/* Main Content - Minimal Layout */}
      <div className="grid lg:grid-cols-5 gap-12">
        
        {/* Content Area */}
        <div className="lg:col-span-3 space-y-12">
          
          {/* Expertises - Clean Grid */}
          <section>
            <h2 className="text-xl font-medium text-blue-900 mb-8">Domaines d'expertise</h2>
            <div className="grid gap-6">
              {expertises.map((expertise, index) => {
                const IconComponent = expertise.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-6 bg-white border border-blue-100 rounded-lg hover:border-blue-200 hover:bg-blue-50/30 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-slate-800 font-medium">{expertise.name}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Transfiguration - Elegant List */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Crown className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-medium text-blue-900">Thèmes de Transfiguration</h2>
            </div>
            <div className="space-y-3">
              {transfigurations.map((theme, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-lg hover:bg-blue-100/50 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-700">{theme}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar - Contact */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-blue-100 rounded-xl p-8 sticky top-8">
            <h3 className="text-lg font-medium text-blue-900 mb-8">Contact</h3>
            
            <div className="space-y-8">
              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-600">Téléphone</span>
                </div>
                <div className="space-y-1 text-slate-900">
                  <p className="font-medium">+237 673 07 16 00</p>
                  <p className="font-medium">+237 694 63 76 67</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-600">Email</span>
                </div>
                <a 
                  href="mailto:apotrejeanyvesmboueme@gmail.com" 
                  className="text-slate-900 font-medium hover:text-blue-700 transition-colors break-all"
                >
                  apotrejeanyvesmboueme@gmail.com
                </a>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-600">Adresse</span>
                </div>
                <div className="text-slate-900 space-y-1">
                  <p className="font-medium">Dschang</p>
                  <p className="text-sm text-slate-600">Immeuble Azimenda</p>
                  <p className="text-sm text-slate-600">Derrière Hôtel le Mbouoh</p>
                </div>
              </div>
            </div>

            {/* CTA - Minimal */}
            <a 
              href="https://wa.me/237673071600?text=Bonjour%20Apôtre%20Jean%20Yves%20Mboueme,%20je%20souhaiterais%20prendre%20rendez-vous%20avec%20vous."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
            >
              Prendre rendez-vous
            </a>

            {/* Organization - Subtle */}
            <div className="mt-8 pt-6 border-t border-blue-100 text-center">
              <div className="flex items-center justify-center gap-2 text-blue-500">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">MEA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApostleProfile;