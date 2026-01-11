
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, ArrowRight, Globe, Settings, Twitter, Youtube, Instagram } from 'lucide-react';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import Audit from './pages/Audit';
import Admin from './pages/Admin';
import ChatBot from './components/ChatBot';
import { translations } from './translations';
import { SITE_CONFIG } from './config';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const Logo = () => {
  return (
    <div className="w-10 h-10 bg-[#ff4d00] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg">
      <Play size={22} fill="white" className="rtl:mr-1 ltr:ml-1 text-white" />
    </div>
  );
};

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();
  
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      className="relative flex items-center bg-zinc-900 border border-zinc-800 p-1 rounded-full group hover:border-zinc-700 transition-all shadow-inner overflow-hidden"
    >
      <div className="flex items-center gap-2 px-3 py-1 relative z-10">
        <Globe size={14} className={`${lang === 'ar' ? 'text-[#ff4d00]' : 'text-zinc-400'} transition-colors group-hover:scale-110 duration-300`} />
        <span className="text-[11px] font-black uppercase tracking-tighter text-white">
          {lang === 'en' ? 'AR' : 'EN'}
        </span>
      </div>
      
      <motion.div
        layoutId="activeLang"
        className="absolute inset-0 bg-zinc-800/50 rounded-full"
        initial={false}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4d00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { lang, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.howItWorks, path: '/how-it-works' },
    { name: t.nav.pricing, path: '/pricing' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse group">
            <Logo />
            <span className="text-2xl font-black tracking-tighter text-white uppercase group-hover:text-[#ff4d00] transition-colors">THUMBIFY</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <div className="flex items-center bg-zinc-900/30 border border-zinc-800/50 px-2 py-1.5 rounded-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-1.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                    location.pathname === link.path 
                      ? 'bg-zinc-800 text-white shadow-sm' 
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="h-6 w-px bg-zinc-800 mx-2" />

            <LanguageToggle />

            {/* Link to beta package directly as requested in screenshot update */}
            <Link
              to="/pricing#beta"
              className="bg-[#ff4d00] text-white px-6 py-2.5 rounded-2xl text-sm font-black hover:bg-[#e64500] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_10px_20px_rgba(255,77,0,0.2)]"
            >
              {t.nav.getStarted} <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl text-white active:scale-90 transition-transform"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b] border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-4 text-lg font-bold rounded-2xl transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-zinc-900 text-[#ff4d00]' 
                      : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/pricing#beta"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-[#ff4d00] text-white px-4 py-5 rounded-2xl text-xl font-black shadow-lg"
                >
                  {t.nav.getStarted}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:col-span-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-8 text-start">
              <Logo />
              <span className="text-2xl font-black tracking-tighter text-white uppercase">THUMBIFY</span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-8 text-lg leading-relaxed text-start">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-[#ff4d00] hover:border-[#ff4d00]/30 transition-all cursor-pointer">
                <Twitter size={20} />
              </a>
              <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-[#ff4d00] hover:border-[#ff4d00]/30 transition-all cursor-pointer">
                <Youtube size={20} />
              </a>
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-[#ff4d00] hover:border-[#ff4d00]/30 transition-all cursor-pointer">
                <Instagram size={20} />
              </a>
              <Link to="/admin" className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-600 hover:text-[#ff4d00] hover:border-[#ff4d00]/30 transition-all cursor-pointer">
                <Settings size={20} />
              </Link>
            </div>
          </div>
          <div className="text-start">
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs opacity-50">{t.footer.product}</h4>
            <ul className="space-y-4 text-zinc-400 font-bold">
              <li><Link to="/pricing" className="hover:text-[#ff4d00] transition-colors">{t.nav.pricing}</Link></li>
              <li><Link to="/how-it-works" className="hover:text-[#ff4d00] transition-colors">{t.nav.howItWorks}</Link></li>
              <li><Link to="/contact" className="hover:text-[#ff4d00] transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div className="text-start">
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs opacity-50">{t.footer.company}</h4>
            <ul className="space-y-4 text-zinc-400 font-bold">
              <li><Link to="/admin" className="hover:text-[#ff4d00] transition-colors">Admin Dashboard</Link></li>
              <li><a href="#" className="hover:text-[#ff4d00] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[#ff4d00] transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-900/50 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600 font-medium">
          <p>© 2024 Thumbify Design Inc. {t.footer.rights}</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            Made with <Play size={10} fill="currentColor" className="text-[#ff4d00]" /> for creators
          </p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <Router>
        <div className={`flex flex-col min-h-screen bg-[#09090b] selection:bg-[#ff4d00] selection:text-white ${lang === 'ar' ? 'font-sans' : 'font-inter'}`}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <ChatBot />
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
