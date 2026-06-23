import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, CheckCircle2, DollarSign, CalendarCheck, HelpCircle } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
    shapeRendering="geometricPrecision"
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.77.46 3.42 1.27 4.97L2 22l5.12-1.23C8.61 21.56 10.26 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.46 0-2.83-.38-4.04-1.04l-.29-.16-3 1 .74-2.88-.18-.3A7.94 7.94 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
    <path d="M16.48 13.85c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.55.12-.17.24-.65.79-.8 1-.15.15-.3.17-.54.05-1-.5-1.78-1.11-2.45-2.28-.15-.26-.02-.4.11-.53.12-.11.27-.3.4-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.12-.55-1.33-.76-1.83-.2-.48-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
  </svg>
);

export default function Hero() {
  const stats = [
    {
      metric: '9 de 17',
      label: 'Projetos Destravados',
      desc: 'Imediatamente e sem investimento adicional de infraestrutura.'
    },
    {
      metric: '6 entregues',
      label: 'Projetos Antigos',
      desc: 'Projetos críticos e adormecidos finalizados em até 6 meses.'
    },
    {
      metric: '4 meses',
      label: 'Tempo de Recuperação',
      desc: 'De 1 produto parado há 2 anos, reestruturado e lançado ao mercado.'
    },
    {
      metric: '+10% receita',
      label: 'Impacto Comercial',
      desc: 'Gerado nos 12 meses seguintes ao lançamento desse produto.'
    }
  ];

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden custom-grid">
      {/* Decorative Blur Spheres - Vibe Dribbble Prodmast */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-navy-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-100/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid lines element for tactile design layout */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-100 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-px h-full bg-slate-100/50"></div>
        <div className="w-px h-full bg-slate-100/50 hidden md:block"></div>
        <div className="w-px h-full bg-slate-100/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Content - Left 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Top Container: Badge + WhatsApp CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 flex-wrap">
              {/* Visual badge */}
              <motion.div 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-start sm:items-center gap-2 px-3.5 py-2 sm:py-1.5 bg-navy-50 border border-navy-200/50 text-navy-800 rounded-2xl sm:rounded-full text-[13px] sm:text-[14px] font-mono font-bold uppercase tracking-wider text-left sm:text-center"
              >
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse mt-1.5 sm:mt-0 shrink-0"></span>
                <span className="leading-tight">Consultoria Estratégica em Projetos</span>
              </motion.div>

              {/* Top CTA Button directly next to it */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex"
              >
                <motion.a 
                  href="https://wa.me/5531983938585?text=Ol%C3%A1%2C%20quero%20entender%20como%20destravar%20projetos%20cr%C3%ADticos%20e%20recuperar%20previsibilidade%20na%20execu%C3%A7%C3%A3o%20da%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-gradient-to-r from-[#25D366] to-[#1eaf4c] hover:from-[#20ba56] hover:to-[#1a9f43] text-white font-black text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap transition-all duration-300 relative border border-[#25D366]"
                  style={{
                    boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 4px 14px rgba(37, 211, 102, 0.4), 0 0 0 0px rgba(37, 211, 102, 0.5)",
                      "0 4px 20px rgba(37, 211, 102, 0.5), 0 0 0 8px rgba(37, 211, 102, 0)",
                      "0 4px 14px rgba(37, 211, 102, 0.4), 0 0 0 0px rgba(37, 211, 102, 0)"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth={0.2} />
                  <span>Quero destravar meus projetos</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </motion.div>
            </div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-800 tracking-tight leading-[1.15] flex flex-col gap-3"
            >
              <span className="block text-navy-800 font-extrabold">
                Projetos travados <span className="text-navy-400">não impactam apenas prazo.</span>
              </span>
              <span className="block text-navy-800 font-bold">
                A receita atrasa, a diretoria vira operação e o crescimento não acontece.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-navy-600 font-normal leading-relaxed max-w-2xl"
            >
              Ajudamos empresas a destravar projetos críticos, recuperar entregas paradas e devolver previsibilidade para a liderança, <strong>sem depender, necessariamente, de mais investimento</strong> para começar.
            </motion.p>

            {/* CTA + Microcopy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 pt-2"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a 
                  href="https://wa.me/5531983938585?text=Ol%C3%A1%2C%20quero%20destravar%20meus%20projetos." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-navy-50 hover:bg-navy-100 text-navy-800 font-bold text-base rounded-xl transition-all text-center flex items-center justify-center gap-2 group border border-navy-100"
                >
                  <span>Quero destravar meus projetos</span>
                  <ArrowUpRight className="w-5 h-5 text-navy-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-navy-500 font-mono">
                <span className="text-[13px] font-bold">Diagnóstico inicial para identificar gargalos, prioridades e impacto no negócio.</span>
              </div>
            </motion.div>

          </div>

          {/* Graphical/Metrics Panel - Right 5 columns */}
          <div className="lg:col-span-5 relative" id="hero-metrics">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-navy-800 text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden custom-grid-dark border-2 border-gold-500/10"
            >
              {/* Dynamic top header */}
              <div className="flex justify-between items-center pb-4 border-b border-light-navy/10">
                <span className="font-mono text-[15px] tracking-widest text-gold-300 font-semibold uppercase">PROVA DE EXECUÇÃO</span>
                <span className="text-[15px] font-mono font-bold text-[#e9c37b] bg-[#0b2540] px-2.5 py-0.5 rounded border border-[#0b2540] shadow-sm">CASE REAL STUDY</span>
              </div>

              {/* Stat elements block */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 bg-navy-900 border border-slate-800/80 rounded-2xl relative group hover:border-gold-500/30 transition-all text-center sm:text-left">
                    <span className="block font-mono text-[20px] sm:text-2xl font-extrabold text-gold-500 tracking-tight leading-none mb-1 group-hover:scale-105 transition-transform origin-center sm:origin-left">
                      {stat.metric}
                    </span>
                    <span className="block text-[15px] font-bold text-white mb-2 tracking-tight">
                      {stat.label}
                    </span>
                    <span className="block text-[14px] text-slate-400 leading-normal font-normal">
                      {stat.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom detail card */}
              <div className="p-4 bg-gold-500 text-navy-950 rounded-2xl flex items-center justify-center text-center">
                <p className="text-[15px] font-semibold leading-relaxed w-full">
                  Trata-se de restabelecer a capacidade de entrega e previsibilidade onde o sistema perdeu tração.
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
