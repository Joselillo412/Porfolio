import { personalInfo } from '../data';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] border-t border-zinc-900 py-12" id="portfolio-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Copyright Info */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="font-display font-black text-white text-lg tracking-tight">
              Jose Buendia Vico
            </span>
            <span className="text-accent-pink text-[10px] font-mono border border-accent-pink/20 px-2 py-0.5 rounded-full bg-accent-pink/5 font-bold">
              Frontend & Fullstack
            </span>
          </div>
          <p className="text-xs text-zinc-500 font-light">
            &copy; {new Date().getFullYear()} Jose Buendia Vico. Todos los derechos reservados.
          </p>
        </div>

        {/* Made with and Scroll to Top triggers */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-xs text-zinc-400 flex items-center gap-1.5 font-light">
            <span>Desarrollado con</span>
            <Heart className="w-3.5 h-3.5 text-accent-pink fill-accent-pink" />
            <span>en React, TS y Tailwind</span>
          </div>

          <button 
            onClick={handleScrollToTop}
            className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer scale-90 sm:scale-100"
            title="Volver Arriba"
            id="btn-scroll-top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-accent-blue" />
            <span>Volver arriba</span>
          </button>
        </div>

        {/* Social connections shortcut footer */}
        <div className="flex items-center gap-4">
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-accent-blue hover:border-accent-blue/30 transition-all text-xs"
            title="Linkedin Profesional"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer" 
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all text-xs"
            title="GitHub Código"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-accent-pink hover:border-accent-pink/30 transition-all text-xs"
            title="Mail Directo"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
