import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1024&h=576&fit=crop",
    title: "Méditations Matinales",
    subtitle: "Commencez votre journée dans la paix",
    description: "Découvrez la sérénité à travers nos méditations guidées quotidiennes"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1024&h=576&fit=crop",
    title: "Parole Divine",
    subtitle: "Nourrissez votre âme",
    description: "Plongez dans les enseignements sacrés qui transforment les cœurs"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1624500/pexels-photo-1624500.jpeg?auto=compress&cs=tinysrgb&w=1024&h=576&fit=crop",
    title: "Communion Spirituelle",
    subtitle: "Unissez-vous dans la prière",
    description: "Rejoignez notre communauté de foi pour des moments de recueillement"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1624504/pexels-photo-1624504.jpeg?auto=compress&cs=tinysrgb&w=1024&h=576&fit=crop",
    title: "Guidance Divine",
    subtitle: "Trouvez votre chemin",
    description: "Laissez la lumière spirituelle éclairer votre parcours de vie"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1624508/pexels-photo-1624508.jpeg?auto=compress&cs=tinysrgb&w=1024&h=576&fit=crop",
    title: "Paix Intérieure",
    subtitle: "Cultivez la sérénité",
    description: "Apprenez à trouver la tranquillité au cœur de votre être"
  }
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? heroSlides.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === heroSlides.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (isLoading) {
    return (
      <div className="relative w-full h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin opacity-60"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Image Container */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={24} />
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div
            key={currentIndex}
            className="animate-fade-in"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-wide">
              {heroSlides[currentIndex].title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light mb-6 tracking-wide">
              {heroSlides[currentIndex].subtitle}
            </p>
            <div className="w-24 h-[1px] bg-white/40 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
              {heroSlides[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-8">
          {/* Progress Dots */}
          <div className="flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-white/30 scale-150 animate-ping"></div>
                )}
              </button>
            ))}
          </div>

          {/* Auto-play Toggle */}
          <button
            onClick={toggleAutoPlay}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 hover:bg-white/20 transition-all duration-300 group"
          >
            {isAutoPlaying ? (
              <Pause className="text-white group-hover:scale-110 transition-transform" size={16} />
            ) : (
              <Play className="text-white group-hover:scale-110 transition-transform" size={16} />
            )}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div
          className="h-full bg-white/60 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentIndex + 1) / heroSlides.length) * 100}%`
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;