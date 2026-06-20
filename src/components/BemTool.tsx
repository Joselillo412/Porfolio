import { useState, useEffect } from 'react';
import { Copy, Check, Sparkles, AlertCircle, Info, FileCode2, Terminal } from 'lucide-react';

interface BemNode {
  name: string;
  elements: {
    [name: string]: {
      modifiers: string[];
    }
  };
}

export default function BemTool() {
  const [inputText, setInputText] = useState('card card__title card__title--active card__btn card__btn--disabled');
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    errors: string[];
    sassCode: string;
  }>({ isValid: true, errors: [], sassCode: '' });
  const [copied, setCopied] = useState(false);

  const presets = [
    {
      title: "Tarjeta Informativa (Card)",
      code: "card card__title card__title--active card__btn card__btn--disabled"
    },
    {
      title: "Barra de Navegación (Navbar)",
      code: "navbar navbar__logo navbar__menu navbar__menu-item navbar__menu-item--premium"
    },
    {
      title: "Formulario de Registro (Form)",
      code: "signup-form signup-form__input signup-form__input--error signup-form__submit-button"
    }
  ];

  const handlePresetClick = (v: string) => {
    setInputText(v);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(validationResult.sassCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const classes = inputText.split(/\s+/).filter(Boolean);
    const errors: string[] = [];
    const tree: { [block: string]: BemNode } = {};

    // Standard BEM validation regex
    // Block: [a-z0-9]+(-[a-z0-9]+)*
    // Element: __[a-z0-9]+(-[a-z0-9]+)*
    // Modifier: --[a-z0-9]+(-[a-z0-9]+)*
    // Allow single/multiple dashes
    const bemRegex = /^[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$/;

    classes.forEach(cls => {
      if (!bemRegex.test(cls)) {
        errors.push(`"${cls}" no cumple con la regla BEM en minúsculas y guiones.`);
        return;
      }

      // Parse Block, Element, Modifier
      let block = '';
      let element = '';
      let modifier = '';

      if (cls.includes('__')) {
        const parts = cls.split('__');
        block = parts[0];
        const rest = parts[1];
        if (rest.includes('--')) {
          const modParts = rest.split('--');
          element = modParts[0];
          modifier = modParts[1];
        } else {
          element = rest;
        }
      } else if (cls.includes('--')) {
        const parts = cls.split('--');
        block = parts[0];
        modifier = parts[1];
      } else {
        block = cls;
      }

      // Build Tree
      if (!tree[block]) {
        tree[block] = { name: block, elements: {} };
      }

      if (element) {
        if (!tree[block].elements[element]) {
          tree[block].elements[element] = { modifiers: [] };
        }
        if (modifier && !tree[block].elements[element].modifiers.includes(modifier)) {
          tree[block].elements[element].modifiers.push(modifier);
        }
      } else if (modifier) {
        // block modifier
        if (!tree[block].elements['']) {
          tree[block].elements[''] = { modifiers: [] };
        }
        if (!tree[block].elements[''].modifiers.includes(modifier)) {
          tree[block].elements[''].modifiers.push(modifier);
        }
      }
    });

    // Generate SCSS Code
    let scss = '';
    Object.keys(tree).forEach(blockKey => {
      const bNode = tree[blockKey];
      scss += `// Estructura Bloque BEM: .${bNode.name}\n`;
      scss += `.${bNode.name} {\n`;
      scss += `  /* Estilos del Bloque principal */\n`;
      scss += `  display: block;\n\n`;

      // Render Block Modifier if any (under empty elements key)
      if (bNode.elements['']) {
        bNode.elements[''].modifiers.forEach(mod => {
          scss += `  &--${mod} {\n`;
          scss += `    /* Modificador del bloque */\n`;
          scss += `  }\n`;
        });
      }

      // Render Elements
      Object.keys(bNode.elements).forEach(eleKey => {
        if (eleKey === '') return; // already handled block modifiers
        const eNode = bNode.elements[eleKey];
        scss += `  &__${eleKey} {\n`;
        scss += `    /* Estilos del Elemento */\n`;
        
        // Render Modifiers
        eNode.modifiers.forEach(mod => {
          scss += `    &--${mod} {\n`;
          scss += `      /* Modificador del elemento */\n`;
          scss += `    }\n`;
        });

        scss += `  }\n`;
      });

      scss += `}\n\n`;
    });

    setValidationResult({
      isValid: errors.length === 0 && classes.length > 0,
      errors,
      sassCode: classes.length > 0 ? scss.trim() : '// Escribe nombres de clases válidos'
    });

  }, [inputText]);

  return (
    <section id="bem-tool" className="py-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#6366f1] uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
            Sandbox Front-End Exclusivo
          </h2>
          <p className="mt-2 text-3xl font-display font-bold text-white tracking-tight">
            Validador BEM y Generador de Sass
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            Una herramienta diseñada por mí para asegurar que el código HTML de tu equipo respete las jerarquías CSS semánticas de forma estricta, traduciendo directamente a bloques SCSS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="grid-bem-tool">
          
          {/* INPUT FORM PANEL (6 cols) */}
          <div className="lg:col-span-6 bento-card p-6 flex flex-col justify-between">
            <div>
              <header className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-accent-blue" />
                <h3 className="font-display font-semibold text-white text-base">Clases de Entrada HTML</h3>
              </header>

              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Ingresa nombres de clases separados por espacios. Por ejemplo, siguiendo el formato estándar de <strong className="text-accent-blue">clase__elemento--modificador</strong>.
              </p>

              {/* TextInput area */}
              <div className="mb-6">
                <textarea 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full h-28 p-4 bg-[#09090b] text-sm font-mono text-zinc-200 placeholder-zinc-600 rounded-xl border border-zinc-800 focus:outline-none focus:border-accent-purple transition-colors resize-none"
                  placeholder="ej: navigation navigation__item navigation__item--selected"
                  id="textarea-bem-input"
                />
              </div>

              {/* Presets helpers */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono font-bold text-zinc-550 uppercase tracking-wider block">Ejemplos Rápidos:</span>
                <div className="flex flex-col gap-2">
                  {presets.map((pre, idx) => (
                    <button 
                      key={idx}
                      onClick={() => handlePresetClick(pre.code)}
                      className="text-left px-3 py-2 rounded-lg bg-black/40 hover:bg-black/90 border border-zinc-850 hover:border-zinc-800 text-zinc-400 hover:text-white text-xs transition-colors flex items-center justify-between cursor-pointer group"
                    >
                      <span className="font-medium">{pre.title}</span>
                      <span className="text-[10px] font-mono text-zinc-600 group-hover:text-accent-purple transition-colors truncate max-w-[200px] sm:max-w-none">
                        {pre.code.substring(0, 30)}...
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Validation diagnostic bar */}
            <div className="pt-4 border-t border-zinc-800">
              {inputText.trim() === '' ? (
                <div className="text-zinc-500 text-xs font-mono flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  <span>Esperando nombres de clases...</span>
                </div>
              ) : validationResult.isValid ? (
                <div className="text-emerald-400 text-xs font-semibold flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>¡Estructura BEM válida detectada! El código Sass está listo.</span>
                </div>
              ) : (
                <div className="bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl space-y-1.5">
                  <div className="text-rose-400 text-xs font-bold flex items-center gap-1.5 leading-none">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Inconsistencia BEM Encontrada:</span>
                  </div>
                  <ul className="text-[11px] text-zinc-450 font-mono list-disc list-inside space-y-1 pl-1">
                    {validationResult.errors.map((err, idx) => (
                      <li key={idx} className="leading-tight">{err}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* SASS CODE OUTPUT PANEL (6 cols) */}
          <div className="lg:col-span-6 bento-card flex flex-col justify-between overflow-hidden relative shadow-2xl">
            
            {/* Header copy section */}
            <div className="px-5 py-4 bg-black/80 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-accent-pink" />
                <span className="text-xs font-mono font-bold text-zinc-300">nested-styles.scss</span>
              </div>

              <button 
                onClick={copyCode}
                disabled={!inputText.trim() || validationResult.sassCode === ''}
                className="px-3 py-1.5 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-medium transition-all flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                id="btn-copy-scss"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '¡Copiado!' : 'Copiar Sass'}</span>
              </button>
            </div>

            {/* Code presentation output */}
            <div className="p-5 flex-1 font-mono text-xs text-zinc-300 overflow-auto bg-black/40 min-h-[300px] leading-relaxed">
              <pre className="whitespace-pre">{validationResult.sassCode}</pre>
            </div>

            {/* Micro details panel info footer */}
            <div className="px-5 py-3.5 bg-black/20 border-t border-zinc-850/60 flex items-center justify-between text-[11px] text-zinc-550">
              <span className="font-sans">Traducido reactivamente mediante modularización</span>
              <span className="font-mono text-accent-blue font-bold uppercase tracking-wider">React 19 Core</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
