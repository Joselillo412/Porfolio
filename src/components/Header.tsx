import { useState, useEffect } from 'react';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Share2, Check } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header 
      id="portfolio-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* LOGO */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#818cf8] flex items-center justify-center font-display font-bold text-white shadow-md shadow-accent-blue/20 group-hover:scale-105 transition-transform">
            JB
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-accent-blue transition-colors">
              Jose Buendia
            </span>
            <span className="text-accent-blue block text-[10px] font-mono leading-none font-semibold tracking-wider uppercase">
              Web Developer
            </span>
          </div>
        </a>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-350">
          <a href="#about" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-blue hover:after:w-full after:transition-all">Sobre Mí</a>
          <a href="#experience" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-blue hover:after:w-full after:transition-all">Experiencia</a>
          <a href="#skills" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-blue hover:after:w-full after:transition-all">Tecnologías</a>
          <a href="#projects" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-blue hover:after:w-full after:transition-all">Proyectos</a>
          <a href="#bem-tool" className="text-accent-blue font-semibold hover:text-white transition-colors relative flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-pink animate-pulse" />
            BEM Tool
          </a>
          <a href="#contact" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-blue hover:after:w-full after:transition-all">Contacto</a>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center space-x-3">
          {/* Print CV */}
          <button 
            onClick={handlePrint}
            title="Imprimir o Guardar como PDF"
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-850 border border-zinc-800 rounded-xl transition-all cursor-pointer text-xs flex items-center gap-1.5 active:scale-95"
            id="btn-print-cv"
          >
            <FileText className="w-4 h-4 text-accent-blue" />
            <span className="hidden sm:inline font-medium">Exportar CV</span>
          </button>

          {/* Contact Direct */}
          <a 
            href="#contact" 
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl transition-all shadow-md shadow-accent-blue/10 active:scale-95 hover:shadow-lg hover:shadow-accent-purple/20"
            id="btn-direct-contact"
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
}
