import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.meditations': 'Méditations',
    'nav.media': 'Médias',
    
    // Hero Section
    'hero.title': 'MEMA',
    'hero.subtitle': 'Mission d\'Evangilisation Apostolique',
    'hero.motto': 'Éveiller les esprits, nourrir les âmes',
    'hero.download': 'Télécharger MEMA',
    'hero.watch': 'Regarder la méditation',
    
    // About Section
    'about.title': 'À propos de MEMA',
    'about.mission': 'Notre Mission',
    'about.missionText': 'MEMA est dédiée à l\'éveil spirituel et aux méditations apostoliques. Nous proposons des enseignements quotidiens pour nourrir l\'âme et éveiller les esprits à travers la parole divine.',
    'about.apostle': 'Apôtre Jean Yves Mboueme',
    'about.apostleText': 'Serviteur de Dieu passionné, l\'Apôtre Jean Yves Mboueme guide MEMA dans sa mission d\'évangélisation et d\'enseignement spirituel à travers les méditations quotidiennes.',
    
    // Meditations Section
    'meditations.title': 'Méditations Quotidiennes',
    'meditations.subtitle': 'Nourrissez votre âme avec nos enseignements spirituels',
    'meditations.watch': 'Regarder',
    'meditations.read': 'Lire plus',
    
    // Media Section
    'media.title': 'Médias & Réseaux Sociaux',
    'media.subtitle': 'Suivez-nous sur toutes nos plateformes',
    'media.follow': 'Suivre',
    
    // Donations Section
    'donations.title': 'Dons & Dépôts',
    'donations.subtitle': 'Soutenez la mission de MEMA',
    'donations.amount': 'Montant',
    'donations.currency': 'Devise',
    'donations.donate': 'Faire un don',
    'donations.secure': 'Paiement sécurisé par Lygos',
    
    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous sommes là pour vous accompagner',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.whatsapp': 'WhatsApp',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.links': 'Liens rapides',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.meditations': 'Meditations',
    'nav.media': 'Media',
    
    // Hero Section
    'hero.title': 'MEMA',
    'hero.subtitle': 'Apostolic Evangilization Mission',
    'hero.motto': 'Awakening minds, nourishing souls',
    'hero.download': 'Download MEMA',
    'hero.watch': 'Watch meditation',
    
    // About Section
    'about.title': 'About MEMA',
    'about.mission': 'Our Mission',
    'about.missionText': 'MEMA is dedicated to spiritual awakening and apostolic meditations. We offer daily teachings to nourish the soul and awaken minds through the divine word.',
    'about.apostle': 'Apostle Jean Yves Mboueme',
    'about.apostleText': 'A passionate servant of God, Apostle Jean Yves Mboueme guides MEMA in its mission of evangelization and spiritual teaching through daily meditations.',
    
    // Meditations Section
    'meditations.title': 'Daily Meditations',
    'meditations.subtitle': 'Nourish your soul with our spiritual teachings',
    'meditations.watch': 'Watch',
    'meditations.read': 'Read more',
    
    // Media Section
    'media.title': 'Media & Social Networks',
    'media.subtitle': 'Follow us on all our platforms',
    'media.follow': 'Follow',
    
    // Donations Section
    'donations.title': 'Donations & Deposits',
    'donations.subtitle': 'Support MEMA\'s mission',
    'donations.amount': 'Amount',
    'donations.currency': 'Currency',
    'donations.donate': 'Donate',
    'donations.secure': 'Secure payment by Lygos',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to accompany you',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.whatsapp': 'WhatsApp',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.links': 'Quick links',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}