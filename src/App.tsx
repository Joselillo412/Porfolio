import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsGrid from './components/SkillsGrid';
import ProjectShowcase from './components/ProjectShowcase';
import BemTool from './components/BemTool';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { personalInfo, experiences, educations, skillsData } from './data';
import { Mail, Phone, MapPin, Building, Calendar, Info, Check } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] selection:bg-accent-blue/30 selection:text-white">
      
      {/* ================= SCREEN PORTFOLIO VIEW ================= */}
      <div className="print:hidden">
        {/* Navigation line */}
        <Header />

        {/* Hero header block */}
        <Hero />

        {/* Bio Tab block */}
        <main>
          <Bio />

          {/* Interactive experience timeline */}
          <ExperienceTimeline />

          {/* Tech stack categorization overview */}
          <SkillsGrid />

          {/* Core active front-end projects */}
          <ProjectShowcase />

          {/* Unique interactive BEM validator & Sass Compiler widget */}
          <BemTool />

          {/* Contact coordinates & interactive forms */}
          <ContactForm />
        </main>

        {/* Dynamic closing footer line */}
        <Footer />
      </div>

      {/* ================= PRINT PORTFOLIO / PDF CV VIEW ================= */}
      {/* This section will be completely hidden on normal screen, but displays neatly on print/PDF export */}
      <div className="hidden print:block print:bg-white print:text-slate-900 print:p-8 min-h-screen font-sans">
        
        {/* Print Header */}
        <div className="border-b-4 border-slate-900 pb-5 mb-6 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-slate-600 font-mono tracking-wide mt-1">
              {personalInfo.title}
            </p>
          </div>
          <div className="text-right text-xs font-mono text-slate-600 space-y-0.5">
            <p className="flex items-center justify-end gap-1">
              <span className="font-bold">Email:</span> {personalInfo.email}
            </p>
            <p className="flex items-center justify-end gap-1">
              <span className="font-bold">Móvil:</span> {personalInfo.phone}
            </p>
            <p className="flex items-center justify-end gap-1">
              <span className="font-bold font-sans">Ubicación:</span> {personalInfo.location}
            </p>
          </div>
        </div>

        {/* Print Body: 2 Columns */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Printable columns LEFT: Reference side logs */}
          <div className="col-span-4 space-y-6 border-r border-slate-200 pr-4">
            
            {/* References Location */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase pb-1 border-b border-slate-200">
                Referencias / Contacto
              </h2>
              <ul className="text-xs space-y-1.5 text-slate-700">
                <li><strong>País:</strong> España</li>
                <li><strong>Ciudad:</strong> Jaén Capital</li>
                <li><strong>LinkedIn:</strong> linkedin.com/in/jose-buendia-vico</li>
                <li><strong>GitHub:</strong> github.com/josebuendia</li>
              </ul>
            </div>

            {/* Technologies list */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase pb-1 border-b border-slate-200">
                Tecnologías
              </h2>
              <div className="flex flex-wrap gap-1">
                {skillsData.frontend.map(s => (
                  <span key={s.name} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[10px] font-mono rounded text-slate-800">
                    {s.name}
                  </span>
                ))}
                {skillsData.backend.map(s => (
                  <span key={s.name} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[10px] font-mono rounded text-slate-800">
                    {s.name}
                  </span>
                ))}
                {skillsData.tools.map(s => (
                  <span key={s.name} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[10px] font-mono rounded text-slate-800">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Education printable list */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase pb-1 border-b border-slate-200">
                Educación
              </h2>
              <div className="space-y-3">
                {educations.map((edu) => (
                  <div key={edu.id} className="space-y-0.5">
                    <span className="text-[10px] font-mono text-slate-400 block font-bold">{edu.period}</span>
                    <h3 className="text-xs font-bold text-slate-800 leading-tight">{edu.degree}</h3>
                    <p className="text-[10px] text-slate-500">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages printable list */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase pb-1 border-b border-slate-200">
                Idiomas
              </h2>
              <ul className="text-xs space-y-1 text-slate-700">
                {personalInfo.languages.map(lang => (
                  <li key={lang.name}>
                    <strong>{lang.name}:</strong> {lang.level}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Printable columns RIGHT: Dynamic Narrative block */}
          <div className="col-span-8 space-y-6">
            
            {/* Bio */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase pb-1 border-b border-slate-200">
                Sobre Mí
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed font-light">
                {personalInfo.aboutMe} {personalInfo.detailedBio}
              </p>
            </div>

            {/* Experiences timeline details */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase pb-1 border-b border-slate-200">
                Experiencia Laboral
              </h2>
              
              <div className="space-y-5">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 uppercase">
                          {exp.role} — <span className="text-slate-500 font-semibold">{exp.company}</span>
                        </h3>
                        <p className="text-[10px] font-mono text-slate-400">{exp.location}</p>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 font-bold bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="list-disc list-inside space-y-1 pl-1">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="text-[10px] text-slate-600 leading-relaxed font-light">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* PDF Footer credits */}
        <div className="mt-12 pt-4 border-t border-slate-200 text-center text-[10px] font-mono text-slate-400">
          Curriculum Vitae exportado desde mi Portfolio Digital interactivo.
        </div>

      </div>

    </div>
  );
}
