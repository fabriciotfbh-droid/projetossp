import React from 'react';
import { motion } from 'motion/react';
import { Map, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

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

export default function DiagnosticDeliverables() {
  const deliverables = [
    {
      num: "01",
      title: "Mapa do gargalo real",
      desc: "Um diagnóstico objetivo de onde o projeto travou — com base nas informações que você trouxer. Não uma lista de possibilidades: uma hipótese clara do gargalo principal.",
      icon: Map,
      borderColor: "border-amber-500",
      textColor: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      num: "02",
      title: "Estimativa do custo do atraso",
      desc: "Um cálculo simples do quanto o projeto parado está custando por mês — seja em receita represada, custo de equipe, ou impacto na operação. Você sai sabendo o número real.",
      icon: Calculator,
      borderColor: "border-rose-500",
      textColor: "text-rose-500",
      bgColor: "bg-rose-50"
    },
    {
      num: "03",
      title: "Próximo passo desbloqueador",
      desc: "Uma ação concreta que você pode executar na semana seguinte — independente de contratar a Smart Partner. Se fizer sentido avançar juntos, a gente conversa. Se não fizer, você já tem o passo.",
      icon: ArrowRight,
      borderColor: "border-[#C5A059]",
      textColor: "text-[#C5A059]",
      bgColor: "bg-[#C5A059]/10"
    }
  ];

  return (
    <section id="diagnostico" className="py-20 md:py-28 bg-[#fafaf9] relative border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16">
          <div className="text-left max-w-3xl space-y-4">
            <span className="font-mono text-[18px] tracking-widest text-[#C5A059] font-bold uppercase block mb-4">
              Sessão de Diagnóstico
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Na sessão de diagnóstico, você sai com <span className="text-[#C5A059]">3 entregáveis concretos</span>, mesmo que não avancemos juntos.
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="shrink-0 pt-2 flex justify-start md:justify-end"
          >
            <motion.a 
              href="https://wa.me/5531983938585?text=Ol%C3%A1%2C%20quero%20destravar%20meus%20projetos." 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-gradient-to-r from-[#25D366] to-[#1eaf4c] hover:from-[#20ba56] hover:to-[#1a9f43] text-white font-black text-[15px] rounded-full flex items-center justify-center gap-2.5 group cursor-pointer whitespace-nowrap transition-all duration-300 relative border border-[#25D366]"
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
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col h-full relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Decorative Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${item.bgColor} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${item.textColor}`} />
                  </div>
                  <span className={`font-mono text-3xl font-bold opacity-20 ${item.textColor}`}>
                    {item.num}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
                
                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-5 h-5 ${item.textColor}`} />
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-widest font-mono">
                      Entregável Garantido
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}