import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, ShieldCheck, Target, Layers, Zap, HeartCrack } from 'lucide-react';

export default function Positioning() {
  const triggers = [
    { title: 'Portfólio lento', text: 'O portfólio de projetos simplesmente não avança na velocidade comercial que o mercado exige.' },
    { title: 'Custo aditivo do atraso', text: 'O custo de atrasar as entregas está crescendo silenciosamente, corroendo a margem.' },
    { title: 'Diretoria sobrecarregada', text: 'A liderança máxima da empresa está operando e apagando incêndios constantemente.' },
    { title: 'Estrutura limitada', text: 'A estrutura organizacional atual não sustenta o ritmo de crescimento desejado pela diretoria.' },
    { title: 'Inchaço vs. Conversão', text: 'Ter projetos demais e iniciativas demais em aberto não significa necessariamente entrega de valor.' }
  ];

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-[#071625] text-white overflow-hidden relative custom-grid-dark">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Left - Big Headline */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-[15px] tracking-widest text-gold-500 font-bold uppercase block">
              POSICIONAMENTO PRAGMÁTICO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Não vendemos discurso de gestão. <br/>
              <span className="text-gold-500">Intervimos onde a execução trava.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Empresas contratam a <strong>Smart Partner Consulting</strong> quando já perceberam que a theory do gerenciamento de projetos tradicional se distanciou da realidade tática da empresa.
            </p>
            
            <div className="p-6 bg-navy-900 border border-slate-800 rounded-2xl space-y-3">
              <span className="text-[15px] font-mono text-gold-500 font-bold uppercase block">O FOCO DO TRABALHO É SIMPLES</span>
              <div className="grid grid-cols-2 gap-3 text-[14px] font-semibold text-slate-300">
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /> Menos caos</div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /> Menos retrabalho</div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /> Menos dependência</div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /> Mais entrega</div>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /> Mais previsibilidade</div>
              </div>
            </div>
          </div>

          {/* List Right - Grid of triggers */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-[14px] font-bold text-slate-200 mb-2 font-mono uppercase tracking-wider">
              Sinais claros de que é o momento de intervir:
            </h3>

            <div className="space-y-3">
              {triggers.map((trigger, i) => (
                <div 
                  key={i} 
                  className="bg-navy-900/60 border border-slate-800/80 p-5 rounded-2xl flex gap-4 items-start hover:border-gold-500/25 transition-all"
                >
                  <span className="p-1.5 bg-navy-950 text-[#C5A059] border border-slate-800 rounded-lg text-[15px] font-mono font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-[15px] font-extrabold text-white tracking-tight mb-1">
                      {trigger.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {trigger.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
