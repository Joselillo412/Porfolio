import { useState } from 'react';
import { skillsData } from '../data';
import { Sparkles, Star, Search, ShieldCheck, Cpu, Code2, Sliders, Laptop } from 'lucide-react';

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; level: number; info: string } | null>({
    name: "React",
    level: 90,
    info: "Librería predilecta para la creación de interfaces de usuario. Experiencia extensa desarrollando hooks personalizados, gestión de estados y optimización en migraciones como StaffLink."
  });

  const getSkillStoryText = (name: string): string => {
    switch (name.toLowerCase()) {
      case 'react':
        return "Librería predilecta para la creación de interfaces de usuario. Experiencia extensa desarrollando hooks personalizados, gestión de estados y optimización en migraciones como StaffLink.";
      case 'typescript':
        return "Uso riguroso para asegurar la tipificación estricta en proyectos complejos, evitando bugs en tiempo de compilación y mejorando la legibilidad e IntelliSense en el equipo.";
      case 'sass (scss)':
        return "Preprocesador empleado para estructurar archivos CSS de forma semántica y jerárquica, definiendo variables globales, mixins responsivos y funciones avanzadas.";
      case 'metodología bem':
        return "Estilo de nomenclatura estricto (Block__Element--Modifier) para estructurar el código CSS, garantizando que sea modular, independiente del contexto y libre de colisiones.";
      case 'css grid & flexbox':
        return "Dominio absoluto para maquetaciones responsive avanzadas, fluidas y con soporte completo para navegadores móviles y pantallas ultra-anchas.";
      case 'javascript (es6+)':
        return "Base nativa sólida del desarrollo frontend. Conocimientos avanzados en manipulación del DOM, programación asíncrona (Promesas/Async-Await) y destructuración de datos.";
      case 'html5 semántico':
        return "Garantía de SEO técnico y accesibilidad digital (a11y). Uso estricto de etiquetas semánticas de última generación para facilitar el rastreo de motores de búsqueda.";
      case 'node.js':
        return "Entorno empleado para automatización de tareas con scripts, gestión de paquetes npm y configuración óptima de servidores Mock API en fases de desarrollo.";
      case 'php':
        return "Backend tradicional empleado en el diseño de middlewares ágiles, control de peticiones con Laravel y desarrollo de intranets institucionales personalizadas.";
      case 'laravel':
        return "Framework PHP robusto usado para estructurar sistemas de backend ligeros con enrutamiento limpio, validadores de datos y controladores de seguridad.";
      case 'sql (bbdd relacionales)':
        return "Modelado relacional y redacción de consultas SQL optimizadas (MySQL / PostgreSQL). Integración segura con backends corporativos y control de migraciones.";
      case 'apis restful':
        return "Consumo asíncrono avanzado con fetch/axios. Integración de payloads JSON estructurados y control robusto de errores de red y HTTP status codes.";
      case 'vite':
        return "Bundler y entorno de desarrollo predilecto por su velocidad instantánea basada en ES Modules nativos. Configuración avanzada para builds de producción óptimos.";
      case 'git & github':
        return "Control de versiones diario. Colaboración estructurada con flujos de trabajo basados en GitFlow, ramas ordenadas, Pull Requests descriptivos y resolución de conflictos.";
      case 'liferay (cms)':
        return "Entorno donde integré componentes React modulares reutilizables y plantillas CSS/SASS altamente especificadas durante mi trayectoria en NTT Data.";
      case 'wordpress':
        return "Gestor de contenidos administrado para actualizar y personalizar sitios corporativos, optimizando la carga y asegurando el soporte continuo.";
      default:
        return "Habilidad técnica clave consolidada durante mi formación de grado superior y mi experiencia real de inserción laboral FP Dual.";
    }
  };

  const selectSkillItem = (name: string, level: number) => {
    setSelectedSkill({
      name,
      level,
      info: getSkillStoryText(name)
    });
  };

  const getCategoryColor = (cat: string) => {
    if (cat === 'frontend') return 'text-accent-blue border-accent-blue/20 bg-accent-blue/5';
    if (cat === 'backend') return 'text-accent-purple border-accent-purple/20 bg-accent-purple/5';
    return 'text-accent-pink border-accent-pink/20 bg-accent-pink/5';
  };

  const filteredSkills = [
    ...(activeCategory === 'all' || activeCategory === 'frontend' ? skillsData.frontend.map(s => ({ ...s, cat: 'frontend' })) : []),
    ...(activeCategory === 'all' || activeCategory === 'backend' ? skillsData.backend.map(s => ({ ...s, cat: 'backend' })) : []),
    ...(activeCategory === 'all' || activeCategory === 'tools' ? skillsData.tools.map(s => ({ ...s, cat: 'tools' })) : [])
  ].filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section id="skills" className="py-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#6366f1] uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
            Stack Tecnológico
          </h2>
          <p className="mt-2 text-3xl font-display font-bold text-white tracking-tight">
            Tecnologías y Habilidades Fuertes
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Filtra mis habilidades de manera interactiva. Haz clic en cualquier etiqueta técnica para comprender exactamente qué nivel tengo y cómo aplico ese conocimiento en producción.
          </p>
        </div>

        {/* CONTROLS BAR: SEARCH & TABS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 w-full bg-black/40 p-4 rounded-2xl border border-zinc-850/85">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-semibold">
            <button 
              onClick={() => { setActiveCategory('all'); }}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer border ${activeCategory === 'all' ? 'bg-[#18181b] text-white border-zinc-700' : 'text-zinc-450 border-transparent hover:text-white'}`}
            >
              Todos
            </button>
            <button 
              onClick={() => { setActiveCategory('frontend'); }}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 border ${activeCategory === 'frontend' ? 'bg-accent-blue/10 text-accent-blue border-accent-blue/30' : 'text-zinc-450 border-transparent hover:text-white'}`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Frontend Core
            </button>
            <button 
              onClick={() => { setActiveCategory('backend'); }}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 border ${activeCategory === 'backend' ? 'bg-accent-purple/10 text-accent-purple border-accent-purple/30' : 'text-zinc-450 border-transparent hover:text-white'}`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Backend & BD
            </button>
            <button 
              onClick={() => { setActiveCategory('tools'); }}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 border ${activeCategory === 'tools' ? 'bg-accent-pink/10 text-accent-pink border-accent-pink/30' : 'text-zinc-450 border-transparent hover:text-white'}`}
            >
              <Laptop className="w-3.5 h-3.5" />
              Herramientas
            </button>
          </div>

          {/* Search bar input */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Buscar tecnología..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#09090b] text-sm text-white placeholder-zinc-500 rounded-xl border border-zinc-800 focus:outline-none focus:border-accent-blue transition-all"
            />
          </div>

        </div>

        {/* WORKSTAGE HUB GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: THE SKILLS GRID (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.length === 0 ? (
              <div className="col-span-full py-12 text-center text-zinc-500 text-sm font-mono border border-dashed border-zinc-800 rounded-2xl">
                No se encontraron tecnologías que coincidan con la búsqueda.
              </div>
            ) : (
              filteredSkills.map((skill) => {
                const isSelected = selectedSkill?.name === skill.name;

                return (
                  <div 
                    key={skill.name}
                    onClick={() => selectSkillItem(skill.name, skill.level)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer select-none relative group ${
                      isSelected 
                        ? 'bg-zinc-900/90 border-accent-blue shadow-lg shadow-accent-blue/5' 
                        : 'bento-card hover:bg-zinc-900/40'
                    }`}
                  >
                    {/* Header: Name, level tag, isFavorite star */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display font-bold text-sm text-white group-hover:text-accent-blue transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {skill.favorite && (
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" title="Destacado" />
                        )}
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getCategoryColor(skill.cat)}`}>
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Indicator line */}
                    <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          skill.cat === 'frontend' 
                            ? 'bg-gradient-to-r from-accent-blue to-accent-purple' 
                            : skill.cat === 'backend' 
                              ? 'bg-gradient-to-r from-accent-purple to-accent-pink'
                              : 'bg-gradient-to-r from-accent-pink to-accent-blue'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* RIGHT SIDE: SELECTED SKILL NARRATIVE (4 cols) */}
          <div className="lg:col-span-4 bento-card p-5 sm:p-6 sticky top-24">
            
            {selectedSkill ? (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <h3 className="font-display font-extrabold text-xl text-white">
                    {selectedSkill.name}
                  </h3>
                  <div className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue font-mono font-bold text-xs">
                    Nivel: {selectedSkill.level}%
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-zinc-350 leading-relaxed font-light font-sans">
                    {selectedSkill.info}
                  </p>

                  <div className="text-xs bg-black/60 p-3 rounded-xl border border-zinc-850 space-y-2 text-zinc-400 font-mono">
                    <span className="font-bold text-zinc-300 block mb-1">
                      Especificación de Producción:
                    </span>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Listo para arquitectura FP y DRY</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Optimización móvil exhaustiva</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3.5 bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 text-center block"
                >
                  ¿Quieres ponerme a prueba con {selectedSkill.name}?
                </a>
              </div>
            ) : (
              <div className="py-12 text-center text-zinc-500 text-sm font-mono flex flex-col items-center justify-center space-y-2">
                <Sliders className="w-8 h-8 text-zinc-700 animate-pulse" />
                <span>Haz clic en una tecnología para explorar mi experiencia detallada con ella.</span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
