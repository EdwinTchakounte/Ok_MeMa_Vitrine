import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Heart } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  role: string;
  context: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Chaque matin, ces moments de méditation transforment ma journée. La parole divine résonne en moi avec une force nouvelle, me donnant la paix intérieure et la guidance nécessaire pour affronter les défis quotidiens.",
    role: "Prophète Silas",
    context: "Méditation matinale - Psaume 23"
  },
  {
    id: 2,
    content: "Les méditations matinales ont révolutionné ma relation avec le Très-Haut. Je ressens une connexion profonde qui m'accompagne tout au long de la journée. C'est un moment de pure grâce et de renouvellement spirituel.",
    role: "Frère François",
    context: "Prière de l'aube - Jean 14:27"
  },
  {
    id: 3,
    content: "Depuis que j'ai intégré ces méditations dans ma routine matinale, ma foi s'est approfondie. Chaque enseignement apporte une lumière nouvelle sur ma marche spirituelle et fortifie mon âme pour la journée qui commence.",
    role: "Sœur Sandrine",
    context: "Réflexion matinale - Matthieu 6:33"
  }
];

const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  return (
    <div className="relative bg-black min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-[0.02] rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white opacity-[0.03] rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white opacity-[0.02] rounded-full blur-lg"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white opacity-30 mr-4"></div>
            <Heart className="text-white opacity-60 mr-3" size={24} />
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
              Témoignages de Foi
            </h2>
            <Heart className="text-white opacity-60 ml-3" size={24} />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white opacity-30 ml-4"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Découvrez comment les méditations matinales transforment la vie spirituelle
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-white opacity-40 fill-current" size={16} />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full p-4 hover:bg-opacity-10 transition-all duration-300 group"
          >
            <ChevronLeft className="text-white opacity-70 group-hover:opacity-100" size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-full p-4 hover:bg-opacity-10 transition-all duration-300 group"
          >
            <ChevronRight className="text-white opacity-70 group-hover:opacity-100" size={20} />
          </button>

          {/* Testimonial Content */}
          <div className="mx-8 md:mx-12 bg-white bg-opacity-[0.03] backdrop-blur-sm border border-white border-opacity-10 rounded-3xl">
            <div className="px-12 md:px-20 lg:px-24 py-12">
              <div className="text-center">
                <Quote className="text-white opacity-30 mx-auto mb-8" size={40} />
                
                <div
                  key={currentIndex}
                  className="animate-fade-in"
                >
                  <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-10 font-light italic opacity-90 max-w-5xl mx-auto">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="space-y-3">
                    <div className="w-16 h-[1px] bg-white opacity-20 mx-auto mb-4"></div>
                    <p className="text-white font-light text-lg opacity-80">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-400 text-sm font-light opacity-60">
                      {testimonials[currentIndex].context}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-4 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'bg-white scale-125 opacity-100'
                    : 'bg-white opacity-30 hover:opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-3 text-sm text-gray-500">
            <div className={`w-1.5 h-1.5 rounded-full ${isAutoPlaying ? 'bg-white opacity-60 animate-pulse' : 'bg-white opacity-20'}`}></div>
            <span className="font-light opacity-60">{isAutoPlaying ? 'Lecture automatique' : 'Pause'}</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-[0.05] backdrop-blur-sm border border-white border-opacity-10 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-light mb-3 text-white opacity-90">
              Méditations Matinales
            </h3>
            <p className="text-gray-400 mb-6 font-light text-sm opacity-70">
              Transformez vos matinées avec la parole divine
            </p>
            <button className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white px-8 py-3 rounded-xl font-light hover:bg-opacity-15 transition-all duration-300 text-sm">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;