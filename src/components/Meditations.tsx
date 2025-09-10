import React, { useState, useEffect } from 'react';
import { Play, Calendar, Clock, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getMeditations, type Meditation } from '../lib/supabase';

const Meditations: React.FC = () => {
  const { language, t } = useLanguage();
  const [meditations, setMeditations] = useState<Meditation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeditations = async () => {
      try {
        const data = await getMeditations();
        setMeditations(data);
      } catch (error) {
        console.error('Error loading meditations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeditations();
  }, []);

  // Fallback meditations avec les liens fournis et bannières YouTube
  const fallbackMeditations = [
    {
      id: '1',
      title_fr: 'Méditation Contemplative - Paix Intérieure',
      title_en: 'Contemplative Meditation - Inner Peace',
      content_fr: 'Une méditation profonde pour cultiver la paix intérieure et renforcer votre connexion spirituelle. Trouvez la sérénité en Dieu.',
      content_en: 'A deep meditation to cultivate inner peace and strengthen your spiritual connection. Find serenity in God.',
      youtube_url: 'https://youtu.be/p2PA9OtB0cE',
      thumbnail_url: 'https://img.youtube.com/vi/p2PA9OtB0cE/maxresdefault.jpg',
      date: '2024-01-23',
      duration: '45 min',
      category_fr: 'Méditation',
      category_en: 'Meditation',
      created_at: '2024-01-23T06:00:00Z'
    },
    {
      id: '2',
      title_fr: 'La Transformation Spirituelle - Réveil de l\'Âme',
      title_en: 'Spiritual Transformation - Soul Awakening',
      content_fr: 'Découvrez les clés de la transformation spirituelle profonde. Un enseignement puissant sur le réveil de votre âme.',
      content_en: 'Discover the keys to deep spiritual transformation. A powerful teaching on awakening your soul.',
      youtube_url: 'https://youtu.be/4XqlnD_CN6M',
      thumbnail_url: 'https://img.youtube.com/vi/4XqlnD_CN6M/maxresdefault.jpg',
      date: '2024-01-22',
      duration: '38 min',
      category_fr: 'Transformation',
      category_en: 'Transformation',
      created_at: '2024-01-22T06:00:00Z'
    }
  ];

  const displayMeditations = meditations.length > 0 ? meditations.slice(0, 2) : fallbackMeditations;

  const handleYouTubeRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewAllTeachings = () => {
    window.open('https://www.youtube.com/@YourChannel', '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <section id="meditations" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-400 font-inter text-sm">
              {language === 'fr' ? 'Chargement des enseignements...' : 'Loading teachings...'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="meditations" className="py-24 bg-slate-900 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header - Design épuré */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-300 font-inter font-medium text-sm">
              {language === 'fr' ? 'Derniers Posts' : 'Latest Posts'}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-poppins font-light text-white mb-6 leading-tight">
            {t('meditations.title')}
          </h2>
          
          <p className="text-lg font-inter text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t('meditations.subtitle')}
          </p>
          
          {/* Separator épuré */}
          <div className="flex items-center justify-center mt-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
            <div className="w-1 h-1 bg-blue-400/70 rounded-full mx-4"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
          </div>
        </div>

        {/* Meditations Grid - Design épuré */}
        <div className="grid lg:grid-cols-2 gap-8">
          {displayMeditations.map((meditation, index) => (
            <div
              key={meditation.id}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card épurée */}
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/30 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 transform hover:-translate-y-1">
                
                {/* Bannière YouTube */}
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <img
                    src={meditation.thumbnail_url}
                    alt={language === 'fr' ? meditation.title_fr : meditation.title_en}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback si l'image ne charge pas
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${meditation.youtube_url.split('/').pop()}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Overlay gradient épuré */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* Play Button YouTube Style */}
                  <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={() => handleYouTubeRedirect(meditation.youtube_url)}
                      className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                      aria-label={`Regarder ${language === 'fr' ? meditation.title_fr : meditation.title_en}`}
                    >
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </button>
                  </div>
                  
                  {/* Badges épurés */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <div className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-inter font-medium">
                      {language === 'fr' ? meditation.category_fr : meditation.category_en}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-slate-900/80 backdrop-blur-sm text-slate-200 px-3 py-1 rounded-lg text-xs font-inter flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {meditation.duration}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <div className="bg-slate-900/80 backdrop-blur-sm text-slate-300 px-3 py-1 rounded-lg text-xs font-inter flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(meditation.date).toLocaleDateString(language, { 
                        day: 'numeric', 
                        month: 'short'
                      })}
                    </div>
                  </div>
                </div>

                {/* Content épuré */}
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-medium text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                    {language === 'fr' ? meditation.title_fr : meditation.title_en}
                  </h3>
                  
                  <p className="text-slate-400 font-inter leading-relaxed mb-6 text-sm">
                    {language === 'fr' ? meditation.content_fr : meditation.content_en}
                  </p>
                  
                  {/* Actions épurées */}
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => handleYouTubeRedirect(meditation.youtube_url)}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-inter font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >
                      <Play className="w-4 h-4" fill="currentColor" />
                      <span>{t('meditations.watch')}</span>
                    </button>
                    
                    <button 
                      onClick={() => handleYouTubeRedirect(meditation.youtube_url)}
                      className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors duration-300 group/discover"
                    >
                      <span className="text-sm font-inter">
                        {language === 'fr' ? 'Découvrir' : 'Discover'}
                      </span>
                      <ExternalLink className="w-4 h-4 group-hover/discover:translate-x-0.5 group-hover/discover:-translate-y-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action épuré */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/30">
            <div className="max-w-xl mx-auto">
              <h3 className="text-2xl font-poppins font-medium text-white mb-4">
                {language === 'fr' 
                  ? 'Transformez votre vie spirituelle' 
                  : 'Transform your spiritual life'
                }
              </h3>
              
              <p className="text-slate-400 font-inter leading-relaxed mb-6">
                {language === 'fr' 
                  ? 'Découvrez tous nos enseignements et méditations pour nourrir votre âme.'
                  : 'Discover all our teachings and meditations to nourish your soul.'
                }
              </p>
              
              <button 
                onClick={handleViewAllTeachings}
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span>
                  {language === 'fr' ? 'Voir tous les enseignements' : 'View all teachings'}
                </span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meditations;