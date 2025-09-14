import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Heart, Download } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  role: string;
  context: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Ces méditations matinales transforment ma journée. La parole divine me donne paix et guidance pour affronter les défis quotidiens.",
    role: "Prophète Silas",
    context: "Méditation matinale - Psaume 23"
  },
  {
    id: 2,
    content: "Les méditations ont révolutionné ma relation avec le Très-Haut. Une connexion profonde m'accompagne toute la journée.",
    role: "Frère François",
    context: "Prière de l'aube - Jean 14:27"
  },
  {
    id: 3,
    content: "Depuis ces méditations matinales, ma foi s'approfondit. Chaque enseignement fortifie mon âme pour la journée.",
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

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/16teXJzvh0QUE-iW2qBveW39bsPizLj6i/view?usp=drive_link', '_blank');
  };

  return (
    <div className="relative bg-white min-h-[70vh] py-16 px-4 sm:px-6 lg:px-8">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-slate-100 opacity-40 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-50 opacity-50 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-slate-50 opacity-30 rounded-full blur-lg"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-slate-300 mr-4"></div>
            <Heart className="text-slate-600 mr-3" size={24} />
            <h2 className="text-2xl md:text-3xl font-light text-slate-800 tracking-wide">
              Témoignages de Foi
            </h2>
            <Heart className="text-slate-600 ml-3" size={24} />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-slate-300 ml-4"></div>
          </div>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Découvrez comment les méditations matinales transforment la vie spirituelle
          </p>
          <div className="mt-4 flex justify-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-slate-400 fill-current" size={14} />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-200 rounded-full p-3 hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronLeft className="text-slate-600 group-hover:text-slate-800" size={20} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg border border-slate-200 rounded-full p-3 hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronRight className="text-slate-600 group-hover:text-slate-800" size={20} />
          </button>

          {/* Testimonial Content */}
          <div className="mx-6 md:mx-8 bg-white shadow-lg border border-slate-100 rounded-2xl">
            <div className="px-8 md:px-16 lg:px-20 py-8">
              <div className="text-center">
                <Quote className="text-slate-300 mx-auto mb-6" size={32} />
                
                <div
                  key={currentIndex}
                  className="animate-fade-in"
                >
                  <p className="text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 font-light italic max-w-6xl mx-auto">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="space-y-2">
                    <div className="w-12 h-[1px] bg-slate-200 mx-auto mb-3"></div>
                    <p className="text-slate-800 font-medium text-base">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-slate-500 text-sm font-light">
                      {testimonials[currentIndex].context}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'bg-slate-600 scale-125'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center space-x-3 text-sm text-slate-500">
            <div className={`w-1.5 h-1.5 rounded-full ${isAutoPlaying ? 'bg-slate-400 animate-pulse' : 'bg-slate-300'}`}></div>
            <span className="font-light">{isAutoPlaying ? 'Lecture automatique' : 'Pause'}</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-md mx-auto shadow-sm">
            <h3 className="text-lg font-medium mb-2 text-slate-800">
              Méditations Matinales
            </h3>
            <p className="text-slate-600 mb-4 font-light text-sm">
              Transformez vos matinées avec la parole divine
            </p>
            <button 
              onClick={handleDownload}
              className="bg-slate-800 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-slate-700 transition-all duration-300 text-sm flex items-center justify-center space-x-2 mx-auto"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger l'app</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;