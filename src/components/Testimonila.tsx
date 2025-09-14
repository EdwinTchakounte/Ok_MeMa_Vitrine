import React from 'react';
import { Phone, Mail, MapPin, BookOpen, Heart, Star, Tv, Users, Crown, ArrowRight, CheckCircle, Zap, Target } from 'lucide-react';

const ApostleProfile = () => {
  const expertises = [
    { name: 'Consultant conjugal', icon: Heart, level: 95 },
    { name: 'Conseiller spirituel', icon: Star, level: 98 },
    { name: 'Écrivain', icon: BookOpen, level: 90 }
  ];

  const transfigurations = [
    { name: 'Transfiguration Divine', icon: Crown, status: 'active' },
    { name: 'Transfiguration spirituelle', icon: Zap, status: 'active' }, 
    { name: 'Transfiguration sociale', icon: Users, status: 'progress' },
    { name: 'Transfiguration financière', icon: Target, status: 'progress' }
  ];

  const getStatusIcon = (status: string) => {
    return status === 'active' ? CheckCircle : ArrowRight;
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'text-emerald-500' : 'text-blue-500';
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header - Ultra Modern */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full text-sm text-slate-600 mb-8">
          <Tv className="w-4 h-4" />
          <span className="font-medium">Télévision Réveil</span>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        </div>
        
        <div className="space-y-4 mb-8">
          <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
            Mission d'Évangélisation Apostolique
          </p>
          <h1 className="text-5xl md:text-6xl font-extralight text-slate-900 tracking-tight">
            Apôtre Jean Yves
            <br />
            <span className="font-light bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Mboueme
            </span>
          </h1>
        </div>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
          Accompagnement spirituel et transformation personnelle
        </p>
      </div>

      {/* Main Grid - Modern Layout */}
      <div className="grid lg:grid-cols-3 gap-16">
        
        {/* Left Column - Expertises */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* Expertises avec barres de progression */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-0.5 bg-gradient-to-r from-slate-300 to-transparent"></div>
              <h2 className="text-2xl font-light text-slate-900">Expertises</h2>
            </div>
            
            <div className="space-y-8">
              {expertises.map((expertise, index) => {
                const IconComponent = expertise.icon;
                return (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                          <IconComponent className="w-5 h-5 text-slate-600" />
                        </div>
                        <span className="text-lg font-medium text-slate-800">{expertise.name}</span>
                      </div>
                    </div>
                    
                    {/* Barre de progression moderne */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-slate-400 to-slate-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${expertise.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Transfigurations avec statuts */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-0.5 bg-gradient-to-r from-slate-300 to-transparent"></div>
              <h2 className="text-2xl font-light text-slate-900">Thèmes de Transfiguration</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {transfigurations.map((theme, index) => {
                const IconComponent = theme.icon;
                const StatusIcon = getStatusIcon(theme.status);
                return (
                  <div 
                    key={index}
                    className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                        <IconComponent className="w-6 h-6 text-slate-600" />
                      </div>
                      <StatusIcon className={`w-5 h-5 ${getStatusColor(theme.status)}`} />
                    </div>
                    
                    <h3 className="text-slate-800 font-medium mb-2">{theme.name}</h3>
                    
                    {/* Indicateur de statut */}
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${theme.status === 'active' ? 'bg-emerald-400' : 'bg-blue-400'}`}></div>
                      <span className="text-sm text-slate-500 capitalize">
                        {theme.status === 'active' ? 'Actif' : 'En cours'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right Column - Contact Card */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sticky top-8 shadow-sm">
            
            {/* Header Contact */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-light text-slate-900">Contact</h3>
            </div>
            
            {/* Contact Info - Modern Cards */}
            <div className="space-y-6 mb-8">
              
              {/* Téléphones */}
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">Téléphone</span>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-slate-900">+237 673 07 16 00</p>
                  <p className="font-medium text-slate-900">+237 694 63 76 67</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-4 h-4 text-slate-500" />
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
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">Adresse</span>
                </div>
                <div className="text-slate-900 space-y-1">
                  <p className="font-medium">Dschang</p>
                  <p className="text-sm text-slate-600">Immeuble Azimenda</p>
                  <p className="text-sm text-slate-600">Derrière Hôtel le Mbouoh</p>
                </div>
              </div>
            </div>

            {/* CTA Button - Modern */}
            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group">
            <a
                href="https://wa.me/237673071600"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full justify-center"
            >
                <span>Prendre rendez-vous</span>
            </a>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Footer - MEA Badge */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
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