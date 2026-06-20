import { useState } from 'react';
import { experiences } from '../data';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, Terminal, ChevronDown, ChevronUp } from 'lucide-react';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-[#09090b]">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#6366f1] uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
            Experiencia Laboral
          </h2>
          <p className="mt-2 text-3xl font-display font-bold text-white tracking-tight">
            Mi Recorrido Profesional
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Experiencia técnica estructurada. Haz clic sobre cada puesto para ver en profundidad las responsabilidades, metodologías aplicadas y los logros técnicos alcanzados.
          </p>
        </div>

        {/* TIMELINE COMPONENT */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l border-zinc-800">
          
          {experiences.map((exp, index) => {
            const isLatest = index === 0;
            const isExpanded = expandedId === exp.id;

            return (
              <article 
                key={exp.id} 
                className="mb-12 relative group"
                id={`exp-card-${exp.id}`}
              >
                {/* Visual Bullet dot on timeline border */}
                <div 
                  className={`absolute left-0 top-0 transform -translate-x-[31px] sm:-translate-x-[47px] w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isExpanded 
                      ? 'bg-gradient-to-r from-accent-purple to-accent-blue scale-110 shadow-lg shadow-accent-purple/30 text-white' 
                      : 'bg-[#09090b] border-2 border-zinc-700 text-zinc-500 hover:border-zinc-400 group-hover:scale-105'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Outer Glow Card framing */}
                <div 
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-zinc-900/80 border-accent-blue/20 shadow-xl' 
                      : 'bento-card hover:bg-zinc-900/40'
                  }`}
                >
                  
                  {/* HEADER AREA */}
                  <header 
                    onClick={() => toggleExpand(exp.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-accent-blue font-bold tracking-wide uppercase">
                          <Building className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>
                        {isLatest && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Última Experiencia (FP Dual)
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mt-1 group-hover:text-accent-blue transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400">
                        <span className="flex items-center gap-1.5 font-bold text-zinc-300">
                          <Calendar className="w-3.5 h-3.5 text-accent-pink" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-zinc-500 mt-0.5 sm:mt-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Expand Chevron helper */}
                      <button className="p-1.5 rounded-lg bg-black/60 border border-zinc-800 hover:border-zinc-700 text-zinc-400 group-hover:text-white transition-colors cursor-pointer">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </header>

                  {/* COLLAPSIBLE ACCORDION BODY */}
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isExpanded ? 'max-h-[800px] mt-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-zinc-800/60 space-y-4">
                      {/* Detailed Bullet Achievements list */}
                      <div className="space-y-3.5">
                        {exp.description.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" />
                            <p className="text-sm text-zinc-300 leading-relaxed font-light">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Experience applied Tech Pills */}
                      <div className="pt-4 mt-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2 font-bold">
                          Tecnologías y Enfoques Aplicados:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-black text-zinc-300 border border-zinc-800 hover:border-accent-purple/30 hover:text-white transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
