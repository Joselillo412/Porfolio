import { useState } from 'react';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Terminal, ExternalLink, ArrowRight, Zap, Award } from 'lucide-react';

export default function Hero() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section 
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#09090b]"
    >
      {/* Decorative gradient meshes */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-10 top-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: INTRO TEXT */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase" id="badge-disponibilidad">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponible para Incorporación Inmediata
            </div>

            {/* Display Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400 tracking-tight leading-none text-white">
                Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink block sm:inline">{personalInfo.name}</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-zinc-350 font-display">
                {personalInfo.title}
              </p>
            </div>

            {/* Tagline / Subtitle */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base md:text-lg text-zinc-400 leading-relaxed font-light">
              {personalInfo.tagline}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-6 py-3.5 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent-blue/15 hover:shadow-accent-purple/20 flex items-center gap-2 group active:scale-95"
                id="hero-cta-projects"
              >
                Ver Proyectos Destacados
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3.5 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold rounded-xl border border-zinc-800 transition-all flex items-center gap-2 active:scale-95"
                id="hero-cta-contact"
              >
                Hablemos
              </a>
            </div>

            {/* Micro Quick Info Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/60 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 bg-zinc-900/40 rounded-xl border border-zinc-800/50">
                <span className="block text-2xl font-display font-bold text-accent-blue">2+</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-semibold">Años de Código</span>
              </div>
              <div className="p-3 bg-zinc-900/40 rounded-xl border border-zinc-800/50">
                <span className="block text-2xl font-display font-bold text-accent-purple">FP Dual</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-semibold">NTT Data</span>
              </div>
              <div className="p-3 bg-zinc-900/40 rounded-xl border border-zinc-800/50">
                <span className="block text-2xl font-display font-bold text-accent-pink">BEM</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-semibold">Metodología</span>
              </div>
              <div className="p-3 bg-zinc-900/40 rounded-xl border border-zinc-800/50">
                <span className="block text-2xl font-display font-bold text-emerald-400">100%</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-semibold">Código Limpio</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-POLISHED PROFILE CARD WITH CV METRICS */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bento-card p-6 shadow-2xl relative group overflow-hidden" id="card-hero-profile">
              
              {/* Card light reflection */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl pointer-events-none" />

              {/* Avatar Illustration */}
              <div className="relative mb-6 flex justify-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-accent-blue via-accent-pink to-accent-purple p-[2px] shadow-xl shadow-accent-blue/5">
                  <div className="w-full h-full rounded-2xl bg-[#09090b] flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Visual coding elements background */}
                    <div className="absolute inset-0 opacity-10 flex flex-wrap gap-1 p-2 font-mono text-[6px] text-zinc-400 select-none">
                      {`<div>`} {`<React>`} {`const [state, setState] = useState()`} {`class="block__element--modifier"`} {`</div>`}
                    </div>
                    
                    {/* Visual AvatarInitials */}
                    <span className="text-4xl font-display font-extrabold text-white z-10">
                      JB
                    </span>
                    <span className="text-xs font-mono text-accent-blue font-semibold tracking-widest mt-1 z-10 uppercase">
                      Vico
                    </span>
                  </div>
                </div>

                {/* Sub-badge indicating specialized in Frontend */}
                <span className="absolute -bottom-2 px-3 py-1 bg-[#18181b] border border-zinc-800 text-accent-blue font-mono font-bold text-[10px] tracking-wide uppercase rounded-full shadow-md flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-accent-pink" />
                  Frontend Specialist
                </span>
              </div>

              {/* Basic CV reference info */}
              <div className="text-center space-y-1 mb-6">
                <h3 className="text-xl font-display font-semibold text-white">Jose Buendia Vico</h3>
                <p className="text-xs font-mono text-zinc-400 font-medium">Desarrollador Web Full-Stack</p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-accent-pink" />
                  <span>Jaén, España</span>
                </div>
              </div>

              {/* Interactive clipboard contact deck */}
              <div className="space-y-2 text-sm bg-black/40 p-3.5 rounded-xl border border-zinc-800/80">
                {/* Email item */}
                <div className="flex items-center justify-between group/item">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent-blue shrink-0" />
                    <span className="text-zinc-350 font-mono text-xs select-all truncate max-w-[180px]">
                      {personalInfo.email}
                    </span>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-1 px-1.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white text-[10px] transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                    title="Copiar email"
                  >
                    {copiedText === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedText === 'email' ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center justify-between group/item pt-2 border-t border-zinc-800/50">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent-purple shrink-0" />
                    <span className="text-zinc-350 font-mono text-xs">
                      {personalInfo.phone}
                    </span>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-1 px-1.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white text-[10px] transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                    title="Copiar teléfono"
                  >
                    {copiedText === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedText === 'phone' ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels in Hero card */}
              <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-zinc-800/60">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-zinc-400 hover:text-accent-blue transition-colors bg-zinc-800/30 hover:bg-accent-blue/5 rounded-lg border border-transparent hover:border-accent-blue/20"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors bg-zinc-800/30 hover:bg-white/5 rounded-lg border border-transparent hover:border-zinc-700"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
