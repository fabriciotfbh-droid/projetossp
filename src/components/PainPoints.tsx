import React from 'react';
import { motion } from 'motion/react';
import { Clock, TrendingDown, RefreshCw, Users, ShieldAlert, Ban, Info, ShieldX } from 'lucide-react';

export default function PainPoints() {
  const points = [
    {
      icon: TrendingDown,
      title: 'Receita represada',
      desc: 'O faturamento não entra porque o produto ou canal estratégico não entra em operação conforme o planejado.'
    },
    {
      icon: Clock,
      title: 'Decisões críticas atrasadas',
      desc: 'Enquanto o projeto não anda, a liderança fica paralisada sem conseguir dar os próximos passos estratégicos.'
    },
    {
      icon: RefreshCw,
      title: 'Retrabalho recorrente',
      desc: 'A energia é dissipada em ciclos infinitos de replanejamento, reuniões longas e correção de falhas previsíveis.'
    },
    {
      icon: Users,
      title: 'Times ocupados, mas sem rendimento',
      desc: 'As equipes estão sobrecarregadas, fazendo hora extra de forma exaustiva, porém sem converter esse esforço em entregas de valor real.'
    },
    {
      icon: ShieldAlert,
      title: 'Liderança sugada pela rotina',
      desc: 'Diretores e gerentes de alto escalão são puxados diariamente para arbitrar problemas táticos ou operacionais simples.'
    },
    {
      icon: Ban,
      title: 'Crescimento travado',
      desc: 'A ambição e expansão da empresa perdem tração simplesmente pela escassez de previsibilidade executiva no dia a dia.'
    }
  ];

  return (
    <section id="problema" className="py-20 md:py-28 bg-[#FBFBFA] relative overflow-hidden">
      
      {/* Decorative vertical blueprint lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-200/50 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-px h-full bg-slate-250/20"></div>
        <div className="w-px h-full bg-slate-250/30 hidden md:block"></div>
        <div className="w-px h-full bg-slate-250/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-[15px] tracking-widest text-[#C5A059] font-bold uppercase block">
            A REALIDADE DA OPERAÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-800 tracking-tight leading-tight">
            O problema não é a falta de esforço.<br/>
            É o <span className="text-navy-400 font-bold">custo silencioso</span> da execução travada.
          </h2>
          <p className="text-navy-600 text-base sm:text-lg leading-relaxed pt-2">
            Na maioria das empresas, projetos não ficam parados por falta de intenção. Ficam parados porque a execução perdeu fluxo, a prioridade mudou vezes demais, a liderança foi puxada para o detalhe e a operação passou a consumir energia sem converter isso em entrega.
          </p>
        </div>

        {/* Bento Grid layout style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white border border-slate-200 hover:border-[#C5A059]/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-slate-50 text-navy-800 group-hover:bg-[#C5A059]/10 group-hover:text-[#C5A059] rounded-xl w-fit transition-colors mb-5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 group-hover:text-navy-950 transition-colors mb-2 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed font-normal">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent warning quote block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 md:p-8 bg-rose-50 border border-rose-100 rounded-2xl flex flex-col items-center justify-center text-center gap-3 max-w-2xl mx-auto"
        >
          <div className="space-y-2 text-center w-full">
            <h4 className="text-sm font-bold text-rose-950 uppercase tracking-wider font-mono">RUPTURA DE RITMO</h4>
            <p className="text-sm md:text-base font-semibold text-rose-900 leading-relaxed">
              &ldquo;Quando isso se instala, a empresa continua se movendo, mas deixa de avançar.&rdquo;
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
