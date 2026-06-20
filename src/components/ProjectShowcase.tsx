import { useState } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import { ExternalLink, Github, ZoomIn, Check, Sparkles, Code, FolderGit, Layout, Cpu, Layers } from 'lucide-react';

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showPrivWarning, setShowPrivWarning] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'fullstack' | 'tool'>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'frontend': return <Layout className="w-4 h-4" />;
      case 'fullstack': return <Cpu className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    setShowPrivWarning(null);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#09090b]">
      
      {/* Background grids */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#6366f1] uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
            Portafolio Destacado
          </h2>
          <p className="mt-2 text-3xl font-display font-bold text-white tracking-tight">
            Proyectos de Ingeniería Front-End
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Una colección selecta de aplicaciones reales y herramientas donde aplico código semántico, arquitecturas React modulares y maquetación CSS/Sass estructurada.
          </p>
        </div>

        {/* TABS FILTERS */}
        <div className="flex items-center justify-center gap-2 mb-10 text-xs sm:text-sm font-semibold">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer border ${activeCategory === 'all' ? 'bg-[#18181b] text-white border-zinc-700' : 'text-zinc-400 border-transparent hover:text-white'}`}
          >
            Todos ({projects.length})
          </button>
          <button 
            onClick={() => setActiveCategory('frontend')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 border ${activeCategory === 'frontend' ? 'bg-accent-blue/10 text-accent-blue border-accent-blue/30' : 'text-zinc-400 border-transparent hover:text-white'}`}
          >
            <Layout className="w-3.5 h-3.5" />
            Frontend ({projects.filter(p=>p.category==='frontend').length})
          </button>
          <button 
            onClick={() => setActiveCategory('fullstack')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 border ${activeCategory === 'fullstack' ? 'bg-accent-purple/10 text-accent-purple border-accent-purple/30' : 'text-zinc-400 border-transparent hover:text-white'}`}
          >
            <Cpu className="w-3.5 h-3.5" />
            Full-Stack ({projects.filter(p=>p.category==='fullstack').length})
          </button>
          <button 
            onClick={() => setActiveCategory('tool')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 border ${activeCategory === 'tool' ? 'bg-accent-pink/10 text-accent-pink border-accent-pink/30' : 'text-zinc-400 border-transparent hover:text-white'}`}
          >
            <Layers className="w-3.5 h-3.5" />
            Herramientas ({projects.filter(p=>p.category==='tool').length})
          </button>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              className="group bento-card p-5 sm:p-6 shadow-xl relative overflow-hidden flex flex-col justify-between"
              id={`project-card-${project.id}`}
            >
              {/* Card visual elements */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2.5 rounded-xl bg-black text-accent-blue border border-zinc-800 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(project.category)}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-450 font-bold block">
                      {project.role}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-black border border-zinc-800 rounded-lg text-[10px] font-mono text-accent-purple font-bold uppercase">
                    {project.difficulty || 'Intermedio'}
                  </span>
                </div>

                <h3 className="text-xl font-display font-extrabold text-white group-hover:text-accent-blue transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Bullet achievements */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono text-zinc-550 font-bold uppercase block tracking-wider">Logros destacados:</span>
                  {project.highlights.slice(0, 2).map((light, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{light}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag bar + Trigger action */}
              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-black border border-zinc-800 text-[10px] font-mono text-zinc-400">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-black border border-zinc-800 text-[10px] font-mono text-zinc-500 font-bold">
                      +{project.tech.length - 4} más
                    </span>
                  )}
                </div>

                {/* Grid link bar */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-accent-blue hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    id={`btn-open-proj-modal-${project.id}`}
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>Ver Detalles Ampliados</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      title="Explorar Repositorio" 
                      className="p-2 rounded-lg bg-black border border-zinc-800 hover:bg-zinc-850 text-zinc-400 hover:text-white transition-all cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      title="Probar Demo Funcional" 
                      className="p-2 rounded-lg bg-accent-blue/10 border border-accent-blue/20 hover:bg-accent-blue text-accent-blue hover:text-white transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* MODAL VIEW OVERVIEW DETAIL */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#09090b]/90 backdrop-blur-md flex items-center justify-center p-4">
            <div 
              className="bg-[#18181b] border border-zinc-800 w-full max-w-2xl rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-zoomIn"
              id="project-detail-modal"
            >
              {/* Close button */}
              <button 
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                id="btn-close-proj-modal"
              >
                &times; Cerrar
              </button>

              {/* Core info header */}
              <div className="mb-6 space-y-2 pr-8">
                <span className="inline-block px-2.5 py-1 bg-accent-pink/15 text-accent-pink border border-accent-pink/20 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider">
                  {selectedProject.category.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-accent-blue font-mono font-bold">{selectedProject.role}</p>
              </div>

              {/* Descriptions & highlights */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2">Sinopsis del Proyecto:</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light font-sans">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key achievements detail list */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-3">Enfoques Técnicos Cruciales:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.highlights.map((light, idx) => (
                      <div key={idx} className="p-3 bg-black/45 border border-zinc-800 rounded-xl flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-xs text-zinc-300 font-light">{light}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warning Message block */}
                {showPrivWarning === selectedProject.id && (
                  <div className="p-4 bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs rounded-xl font-mono leading-relaxed animate-fadeIn">
                    ⚠️ <strong>Repositorio Privado</strong>: Este código forma parte de sistemas e intranets propiedad de NTT Data o clientes institucionales. Para salvaguardar la propiedad intelectual, el código fuente privado no es de libre acceso público, pero se facilitará un recorrido estructurado y código descargable representativo bajo demanda formal durante fases de entrevista laboral.
                  </div>
                )}

                {/* Tech list tag list */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-3">Tecnologías Utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-black text-zinc-200 text-xs font-mono rounded-lg border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Simulated action links */}
                <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => {
                      setShowPrivWarning(selectedProject.id);
                    }}
                    className="flex-1 py-3 bg-black hover:bg-zinc-800 text-zinc-350 hover:text-white border border-zinc-800 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Github className="w-4 h-4" />
                    <span>Ver Código en GitHub (Privado)</span>
                  </button>
                  <a 
                    href="#contact"
                    onClick={() => { setSelectedProject(null); setShowPrivWarning(null); }}
                    className="flex-1 py-3 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center active:scale-95"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Solicitar Demo en Vivo / Entrevista</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
