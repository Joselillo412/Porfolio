import { useState, FormEvent } from 'react';
import { personalInfo } from '../data';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clipboard, Copy, Check, Award, Calendar } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setValidationError("Por favor completa los campos requeridos (Nombre, Email, Mensaje).");
      return;
    }
    setValidationError(null);

    // Capture message to local storage representational log
    const existingMsgs = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    const newMsg = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || 'Propuesta de Trabajo / Contacto',
      message,
      date: new Date().toLocaleDateString()
    };
    existingMsgs.push(newMsg);
    localStorage.setItem('portfolio_messages', JSON.stringify(existingMsgs));

    setIsSubmitted(true);
  };

  const copyContact = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setValidationError(null);
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#09090b]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#6366f1] uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
            Vías de Comunicación
          </h2>
          <p className="mt-2 text-3xl font-display font-bold text-white tracking-tight">
            ¿Hablamos? Contáctame
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Envíame una propuesta de trabajo, solicita mi CV extendido en formato digital o agenda una cita técnica de forma instantánea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: CONTACT DETAILS (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bento-card p-6 sm:p-8 space-y-6">
              <header className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-accent-blue/10 border border-accent-blue/20 text-accent-blue font-mono text-[10px] font-bold uppercase">
                  Datos Oficiales
                </span>
                <h3 className="text-xl font-display font-extrabold text-white">Jose Buendia Vico</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  Puedes usar estos accesos directos de copiado rápido o interacturar vía mail directo y llamada telefónica.
                </p>
              </header>

              <div className="space-y-4">
                {/* Email container row */}
                <div className="p-4 bg-black/40 hover:bg-black/80 border border-zinc-850 hover:border-zinc-800 rounded-xl transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-accent-blue/5 text-accent-blue border border-accent-blue/10 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-550 font-mono font-bold uppercase block tracking-wide">Correo Electrónico</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-mono text-zinc-300 hover:text-white transition-colors">{personalInfo.email}</a>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyContact(personalInfo.email, 'email')}
                    className="p-1.5 rounded bg-zinc-850 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all cursor-pointer"
                  >
                    {copiedLabel === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone container row */}
                <div className="p-4 bg-black/40 hover:bg-black/80 border border-zinc-850 hover:border-zinc-800 rounded-xl transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-accent-purple/5 text-accent-purple border border-accent-purple/10 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-550 font-mono font-bold uppercase block tracking-wide">Móvil / WhatsApp</span>
                      <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-sm font-mono text-zinc-300 hover:text-white transition-colors">{personalInfo.phone}</a>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyContact(personalInfo.phone, 'phone')}
                    className="p-1.5 rounded bg-zinc-850 hover:bg-[#18181b] text-zinc-400 hover:text-white transition-all cursor-pointer"
                  >
                    {copiedLabel === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location container row */}
                <div className="p-4 bg-black/40 hover:bg-black/85 border border-zinc-850 rounded-xl flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accent-pink/5 text-accent-pink border border-accent-pink/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-550 font-mono font-bold uppercase block tracking-wide">Ubicación Actual</span>
                    <span className="text-sm font-medium text-zinc-300">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick pre-agreed commitments for recruiter convenience */}
            <div className="bento-card p-5 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-semibold text-white text-sm mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-accent-purple" />
                  Compromiso de Reclutamiento
                </h4>
                <ul className="text-xs text-zinc-400 font-light space-y-2">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    Incorporación temporal o permanente inmediata (FP Terminado)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    Dispuesto a realizar prueba técnica previa de React/HTML CSS
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    Pasaporte europeo activo. Listo para movilidad laboral
                  </li>
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-550 font-mono">
                <span>Última Actualización</span>
                <span className="font-medium text-zinc-400">Junio 2026</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM INPUTS (7 cols) */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-center">
            
            {validationError && (
              <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs rounded-xl font-mono animate-fadeIn">
                ⚠️ {validationError}
              </div>
            )}

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" id="form-contact-deck">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wide flex items-center gap-1">
                      Nombre Completo <span className="text-accent-pink">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre o empresa..." 
                      className="w-full px-4 py-3 bg-[#09090b] text-sm text-zinc-200 placeholder-zinc-650 rounded-xl border border-zinc-805 focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wide flex items-center gap-1">
                      Correo Electrónico <span className="text-accent-pink">*</span>
                    </label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ejemplo@correo.com" 
                      className="w-full px-4 py-3 bg-[#09090b] text-sm text-zinc-200 placeholder-zinc-650 rounded-xl border border-zinc-805 focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wide">Asunto</label>
                  <input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="ej: Oferta de empleo frontend / Solicitud entrevista" 
                    className="w-full px-4 py-3 bg-[#09090b] text-sm text-zinc-200 placeholder-zinc-650 rounded-xl border border-zinc-805 focus:outline-none focus:border-accent-blue transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wide flex items-center gap-1">
                    Mensaje / Propuesta de Empleo <span className="text-accent-pink">*</span>
                  </label>
                  <textarea 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Escribe aquí los detalles del puesto, la propuesta técnica o cualquier consulta..." 
                    className="w-full px-4 py-3 bg-[#09090b] text-sm text-zinc-200 placeholder-zinc-650 rounded-xl border border-zinc-805 focus:outline-none focus:border-accent-blue transition-colors resize-none"
                    id="textarea-contact-msg"
                  />
                </div>

                {/* Submit trigger button */}
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold text-xs sm:text-sm rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-accent-purple/10 active:scale-[0.98]"
                  id="btn-submit-contact"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Propuesta de Contacto</span>
                </button>
              </form>
            ) : (
              <div className="space-y-6 text-center py-6 animate-fadeIn" id="contact-success-panel">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-bounce" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-white">¡Propuesta Registrada con Éxito!</h3>
                  <p className="text-sm text-zinc-405 max-w-md mx-auto leading-relaxed">
                    Muchas gracias <strong className="text-accent-blue">{name}</strong>. Tu consulta ha quedado almacenada de manera transparente en el storage local del portfolio.
                  </p>
                </div>

                <div className="bg-black/60 border border-zinc-850 p-4 rounded-xl text-left max-w-md mx-auto space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between items-center border-b border-zinc-850 pb-1.5">
                    <span className="font-bold text-zinc-300 uppercase">Detalles enviados:</span>
                    <span className="text-accent-blue">ID: {Date.now().toString().slice(-6)}</span>
                  </div>
                  <p><strong>Remitente:</strong> {name} ({email})</p>
                  <p><strong>Asunto:</strong> {subject || 'Contacto general'}</p>
                  <p className="line-clamp-2"><strong>Mensaje:</strong> {message}</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-xs mx-auto">
                  <button 
                    onClick={handleResetForm}
                    className="px-6 py-2.5 bg-[#18181b] border border-zinc-700 hover:bg-zinc-800 text-zinc-300 rounded-xl text-xs font-semibold cursor-pointer active:scale-95"
                  >
                    Enviar otro mensaje
                  </button>
                  <a 
                    href="#hero"
                    className="px-6 py-2.5 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-xl text-xs font-semibold cursor-pointer text-center active:scale-95"
                  >
                    Volver al inicio
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
