import React from 'react';
import { Youtube, Instagram, Facebook, Music, ExternalLink, Users, Eye, Globe, Video } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Media: React.FC = () => {
  const { t } = useLanguage();

  const socialPlatforms = [
    {
      name: 'YouTube',
      icon: Youtube,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      url: 'https://www.youtube.com/@MEMA-APÔTREJEANYVESMBOUEME',
      followers: '5.2K',
      description: 'Méditations quotidiennes et enseignements',
      verified: true
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600',
      url: 'https://www.instagram.com/apotrejeanyvesmbouememema/',
      followers: '3.8K',
      description: 'Citations inspirantes et moments de prière',
      verified: true
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      url: 'https://web.facebook.com/profile.php?id=61575737505381',
      followers: '7.1K',
      description: 'Communauté et échanges spirituels',
      verified: true
    },
    {
      name: 'TikTok',
      icon: Music,
      color: 'bg-slate-900',
      hoverColor: 'hover:bg-slate-800',
      url: 'https://www.tiktok.com/@aptre.jean.yves.m',
      followers: '2.3K',
      description: 'Messages courts et percutants',
      verified: false
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '18K+',
      label: 'Abonnés Total',
      color: 'text-blue-400'
    },
    {
      icon: Video,
      value: '365',
      label: 'Méditations Publiées',
      color: 'text-green-400'
    },
    {
      icon: Eye,
      value: '1M+',
      label: 'Vues Total',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Pays Touchés',
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="media" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header - Ultra Clean */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-slate-200/50 px-4 py-2 rounded-full mb-8 shadow-sm">
            <Youtube className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-slate-700 font-inter font-medium text-sm">
              Présence Digitale
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-poppins font-light text-slate-900 mb-6 leading-tight">
            {t('media.title')}
          </h2>
          
          <p className="text-lg font-inter text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('media.subtitle')}
          </p>
          
          {/* Minimal Separator */}
          <div className="flex items-center justify-center mt-8">
            <div className="w-16 h-px bg-slate-300"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full mx-4"></div>
            <div className="w-16 h-px bg-slate-300"></div>
          </div>
        </div>

        {/* Featured Video - Minimal Frame */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 max-w-4xl mx-auto">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/amLQqwG48VM?rel=0&modestbranding=1&controls=1"
                title="Méditation MEMA"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Info */}
            <div className="p-6 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-poppins font-medium text-slate-900 mb-1">
                    Méditation Matinale - Éveil Spirituel
                  </h3>
                  <p className="text-sm text-slate-600 font-inter">
                    Une méditation profonde pour éveiller votre esprit
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=amLQqwG48VM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-inter font-medium transition-colors duration-200 text-sm"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Voir sur YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Platforms - Clean Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/50 hover:border-slate-300/50"
              >
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${platform.color} ${platform.hoverColor} rounded-lg mx-auto flex items-center justify-center transition-colors duration-200`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Platform Name */}
                  <div className="flex items-center justify-center space-x-2">
                    <h3 className="font-poppins font-medium text-slate-900">
                      {platform.name}
                    </h3>
                    {platform.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Followers */}
                  <div className="text-xl font-poppins font-semibold text-slate-900">
                    {platform.followers}
                  </div>
                  
                  {/* Description */}
                  <p className="text-xs font-inter text-slate-600 leading-relaxed">
                    {platform.description}
                  </p>
                  
                  {/* Follow Button */}
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-inter font-medium transition-colors duration-200 text-sm w-full justify-center"
                  >
                    <span>{t('media.follow')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section - Minimal Design */}
        <div className="bg-slate-900 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-poppins font-light text-white mb-3">
              Notre Impact Digital
            </h3>
            <p className="text-slate-400 font-inter">
              Ensemble, nous touchons des milliers d'âmes
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-3">
                    <IconComponent className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform duration-200`} />
                  </div>
                  <div className="text-2xl lg:text-3xl font-poppins font-light text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-inter text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50">
            <h3 className="text-xl font-poppins font-medium text-slate-900 mb-4">
              Rejoignez Notre Communauté
            </h3>
            <p className="text-slate-600 font-inter mb-6 max-w-md mx-auto">
              Recevez quotidiennement des méditations et enseignements pour nourrir votre âme
            </p>
            <a
              href="https://www.youtube.com/@MEMA-APÔTREJEANYVESMBOUEME"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-inter font-medium transition-colors duration-200"
            >
              <Youtube className="w-4 h-4" />
              <span>S'abonner maintenant</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;