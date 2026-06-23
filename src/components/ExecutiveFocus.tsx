import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users, DollarSign, ArrowUpRight } from 'lucide-react';

export default function ExecutiveFocus() {
  const scenarios = [
    {
      num: "01",
      title: "Gargalo Crítico",
      text: "Um projeto crítico parado há meses, sem clareza de quando vai sair do lugar.",
      icon: Clock,
      borderHover: "group-hover:border-amber-500/30",
      numColor: "text-amber-500/20 group-hover:text-amber-500/40"
    },
    {
      num: "02",
      title: "Crise de Escopo da Liderança",
      text: "A sua agenda tomada por problemas operacionais que deveriam ser resolvidos pelos times.",
      icon: Users,
      borderHover: "group-hover:border-[#C5A059]/30",
      numColor: "text-[#C5A059]/20 group-hover:text-[#C5A059]/40"
    },
    {
      num: "03",
      title: "Eficiência de Capital Prejudicada",
      text: "Investimentos aprovados que não se traduzem em resultados, e a pressão do board aumentando.",
      icon: DollarSign,
      borderHover: "group-hover:border-rose-500/30",
      numColor: "text-rose-500/20 group-hover:text-rose-500/40"
    }
  ];

  return (
    <section id="foco-executivo" className="py-20 md:py-28 bg-[#fafaf9] relative overflow-hidden border-t border-slate-100">
      {/* Subtle blueprint grid pattern in background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context, Visual Resonance & Solution Statement */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            {/* Header Content */}
            <div className="space-y-4">
              <span className="font-mono text-[15px] tracking-widest text-[#C5A059] font-bold uppercase block">
                DIRECIONAMENTO EXECUTIVO
              </span>
              
              <h2 className="text-[48px] font-black text-slate-900 tracking-tight leading-[1.12]">
                Se você já viveu algum destes cenários:
              </h2>
            </div>

            {/* Resonance Statement */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="pt-10 pb-6 px-6 md:pt-12 md:pb-8 md:px-8 bg-white border-l-4 border-rose-500 rounded-r-xl shadow-sm border-y border-r border-slate-100 relative"
            >
              <div className="absolute top-4 left-6 md:left-8 font-mono text-[14px] text-slate-400 tracking-widest uppercase font-bold">
                O custo invisível
              </div>
              <p className="text-base md:text-lg font-bold text-slate-850 leading-relaxed">
                &ldquo;O custo invisível não está no orçamento. Está no tempo e energia da liderança consumida pelo operacional.&rdquo;
              </p>
            </motion.div>

            {/* Smart Partner Statement */}
            <div className="space-y-4 pt-2">
              <div className="w-12 h-1 bg-[#C5A059] rounded-full"></div>
              <p className="text-[18px] text-slate-600 leading-relaxed">
                A <strong className="text-slate-900 font-extrabold font-sans">Smart Partner</strong> foi criada para resolver exatamente isso, <span className="font-semibold text-slate-900 underline decoration-[#C5A059] decoration-2 underline-offset-2">sem aumentar headcount</span> e sem depender de mais investimento para começar.
              </p>
            </div>

          </div>

          {/* Right Column: Scenarios List (Dynamic Asymmetric Stack) */}
          <div className="lg:col-span-7 space-y-5">
            {scenarios.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-slate-200/80 hover:border-slate-300 p-6 md:p-8 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.015)] hover:shadow-md transition-all duration-300 group flex items-start gap-5 relative overflow-hidden"
                >
                  {/* Left Side Icon in a specialized ring wrapper */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right Side Info */}
                  <div className="space-y-2 max-w-[85%] relative z-10">
                    <h3 className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                      <span>{item.title}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] inline-block"></span>
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Mini Footer indicator of urgency */}
            <div className="pt-4 px-3 flex items-center justify-between text-[18px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                Identificou-se com estes cenários?
              </span>
              <span className="hidden sm:inline">Desça para ver a solução</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
