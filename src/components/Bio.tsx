import { useState } from 'react';
import { personalInfo, educations } from '../data';
import { BookOpen, Award, Languages, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

export default function Bio() {
  const [activeTab, setActiveTab] = useState<'bio' | 'education' | 'goals'>('bio');

  return (
    <section id="about" className="py-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#6366f1] uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
            Trayectoria Profesional
          </h2>
          <p className="mt-2 text-3xl font-display font-bold text-white tracking-tight">
            Sobre Mí e Historial Académico
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Un desglose estructurado de mis pasiones, formación oficial en desarrollo web y mis objetivos a corto y largo plazo.
          </p>
        </div>

        {/* METRICS / STATS SUMMARY IN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* TAB SYSTEM: LEFT SIDE (8 cols on desktop) */}
          <div className="lg:col-span-8 bento-card p-6 sm:p-8">
            {/* Tabs Nav */}
            <div className="flex flex-wrap border-b border-zinc-800 pb-3 gap-2">
              <button
                onClick={() => setActiveTab('bio')}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'bio'
                    ? 'bg-gradient-to-r from-accent-purple/15 to-accent-blue/15 text-white border border-accent-blue/30'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40 border border-transparent'
                }`}
                id="btn-tab-bio"
              >
                <Sparkles className="w-4 h-4 text-accent-blue" />
                Biografía
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-accent-purple/15 to-accent-blue/15 text-white border border-accent-blue/30'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40 border border-transparent'
                }`}
                id="btn-tab-education"
              >
                <BookOpen className="w-4 h-4 text-accent-purple" />
                Educación Oficial
              </button>
              <button
                onClick={() => setActiveTab('goals')}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'goals'
                    ? 'bg-gradient-to-r from-accent-purple/15 to-accent-blue/15 text-white border border-accent-blue/30'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40 border border-transparent'
                }`}
                id="btn-tab-goals"
              >
                <Compass className="w-4 h-4 text-accent-pink" />
                Metas y Filosofía
              </button>
            </div>

            {/* Tab content renderer */}
            <div className="mt-8 min-h-[300px] flex flex-col justify-between">
              
              {/* TAB 1: BIOGRAPHY */}
              {activeTab === 'bio' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-4">
                    <p className="text-base text-slate-300 leading-relaxed font-light">
                      {personalInfo.aboutMe}
                    </p>
                    <p className="text-base text-slate-300 leading-relaxed font-light">
                      {personalInfo.detailedBio}
                    </p>
                  </div>

                  <div className="bg-black/60 p-4 rounded-xl border border-zinc-800/60 space-y-3">
                    <h4 className="text-sm font-display font-semibold text-white flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-accent-pink" />
                      Por qué contratarme como Frontend / Full Stack:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-400 font-mono">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Código estructurado y semántico (SEO-Friendly)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Maquetación BEM nativa y Sass modular
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Experiencia real migrando sistemas a React
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Velocidad de aprendizaje y resolución de bugs
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 2: EDUCATION */}
              {activeTab === 'education' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-6">
                    {educations.map((edu, idx) => (
                      <div 
                        key={edu.id} 
                        className={`relative pl-8 transition-all hover:translate-x-1 ${
                          idx !== educations.length - 1 ? 'pb-6 border-l border-slate-850' : ''
                        }`}
                      >
                        {/* Bullet point education timeline */}
                        <div className="absolute left-0 top-1.5 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-accent-purple flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-accent-blue" />
                        </div>

                        <div className="space-y-1">
                          <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                            {edu.period}
                          </span>
                          <h4 className="text-base font-display font-bold text-white">{edu.degree}</h4>
                          <p className="text-xs font-mono text-slate-400">{edu.institution}</p>
                          <p className="text-sm text-slate-400 leading-relaxed font-light mt-1.5">{edu.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: GOALS & PHILOSOPHY */}
              {activeTab === 'goals' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-4">
                    <div className="p-4 bg-black/45 rounded-xl border border-zinc-800/70">
                      <h4 className="text-sm font-display font-bold text-white mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                        Aportación directiva a la empresa:
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed font-light">
                        Mi objetivo inmediato es integrarme en un equipo ágil de desarrollo front-end donde pueda aplicar mis conocimientos avanzados en el ciclo de vida de React, TypeScript y maquetaciones óptimas. Ofrezco proactividad y solidez metodológica adquiridas en NTT Data.
                      </p>
                    </div>

                    <div className="p-4 bg-black/45 rounded-xl border border-zinc-800/70">
                      <h4 className="text-sm font-display font-bold text-white mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
                        Enfoque de Experiencia de Usuario:
                      </h4>
                      <p className="text-sm text-zinc-400 leading-relaxed font-light">
                        Considero que una web debe ser tan accesible y rápida de navegar como sea físicamente posible. Busco eliminar bloqueos de renderizado redundantes, maquetar con layouts flexibles e intuitivos, y entregar interfaces de las cuales me enorgullezca firmar el código.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Languages summary static at bottom of panel */}
              <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-wrap gap-4 text-xs font-mono">
                <span className="text-zinc-500 flex items-center gap-1.5 uppercase font-bold tracking-widest text-[10px]">
                  <Languages className="w-3.5 h-3.5 text-accent-blue" />
                  Idiomas:
                </span>
                {personalInfo.languages.map((lang) => (
                  <span key={lang.name} className="px-2.5 py-1 rounded bg-black border border-zinc-800 text-zinc-300">
                    <strong className="text-accent-blue">{lang.name}:</strong> {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BIO METRIC RIGHT CARDS (4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bento-card p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-pink/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-pink" />
                Resumen de Perfil
              </h3>

              <div className="space-y-4 text-sm font-light">
                <div className="pb-3 border-b border-zinc-800/50">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Nombre Completo</span>
                  <span className="text-white font-medium">Jose Buendia Vico</span>
                </div>
                <div className="pb-3 border-b border-zinc-800/50">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Especialidad</span>
                  <span className="text-white font-medium">React, TypeScript, BEM, Sass</span>
                </div>
                <div className="pb-3 border-b border-zinc-800/50">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Ubicación</span>
                  <span className="text-white font-medium">Jaén, España (Disponibilidad Remoto / Reubicación)</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Idiomas</span>
                  <span className="text-white font-medium">Español, Inglés y Portugués</span>
                </div>
              </div>
            </div>

            <div className="p-[1px] rounded-3xl bg-gradient-to-br from-accent-purple/20 via-pink-500/10 to-accent-blue/20">
              <div className="bg-[#18181b] rounded-[23px] p-5">
                <h4 className="text-sm font-display font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Búsqueda de Empleo Activa
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Interesado en entrar en equipos de desarrollo Front-End modernos en España u Europa. Listo para aportar valor con maquetación ágil, componentes limpios de React y soporte de bugs en producción.
                </p>
                <a 
                  href="#contact" 
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:text-white transition-colors cursor-pointer"
                >
                  Ver vías de contacto rápido &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
