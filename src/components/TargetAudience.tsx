import React from 'react';
import { motion } from 'motion/react';
import { Target, AlertCircle, Sparkles, Sliders, Play, TrendingUp, Cpu, HeartHandshake } from 'lucide-react';

export default function TargetAudience() {
  const scenarios = [
    {
      icon: AlertCircle,
      title: 'Projetos Críticos Parados',
      desc: 'Sua empresa possui lançamentos importantes parados ou com ritmo de lentidão que já preocupa o conselho.'
    },
    {
      icon: Cpu,
      title: 'Liderança no Operacional',
      desc: 'Os diretores e fundadores gastam mais tempo cobrando o time e revisando planilhas do que planejando a expansão.'
    },
    {
      icon: Sliders,
      title: 'Rotina de Urgências',
      desc: 'O time convive com retrabalho recorrente, replanejamentos semanais e incêndios diários para apagar.'
    },
    {
      icon: Play,
      title: 'Iniciativas que Não Saem do Papel',
      desc: 'Dificuldade crônica em colocar novos produtos, canais comerciais ou frentes de inovação em operação real.'
    },
    {
      icon: TrendingUp,
      title: 'Recuperação com a Mesma Estrutura',
      desc: 'Deseja otimizar o fluxo de entrega atual sem a necessidade de inflar a folha de pagamento ou contratar softwares complexos.'
    },
    {
      icon: HeartHandshake,
      title: 'Esforço sem Conversão',
      desc: 'Precisa traduzir o suor de equipes altamente qualificadas em resultados financeiros tangíveis e previsíveis.'
    }
  ];

  return (
    <section id="para-quem" className="py-20 md:py-28 bg-[#FBFBFA] relative overflow-hidden">
      
      {/* Decorative vertical blueprint lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-200/50 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-px h-full bg-slate-250/20"></div>
        <div className="w-px h-full bg-slate-250/30 hidden md:block"></div>
        <div className="w-px h-full bg-slate-250/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-[15px] leading-[24px] tracking-widest text-[#C5A059] font-bold uppercase block">
            DIAGNÓSTICO CORPORATIVO / PERFIL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-800 tracking-tight leading-tight">
            Para quem faz sentido nosso trabalho de consultoria?
          </h2>
          <p className="text-navy-600 text-sm sm:text-base md:text-lg">
            Essa intervenção é altamente recomendada para empresas de tecnologia, telecomunicação, indústrias e holdings que se identificam com um ou mais destes cenários de execução cotidiana:
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between group hover:border-gold-500/25 transition-all shadow-sm hover:shadow"
              >
                <div className="space-y-4">
                  <div className="p-2.5 bg-slate-50 text-navy-800 rounded-xl w-fit group-hover:bg-[#C5A059]/10 group-hover:text-[#C5A059] transition-all border border-slate-100">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-navy-800 tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100/50 flex items-center gap-1 text-[14px] font-mono font-bold text-navy-500 group-hover:text-[#C5A059] transition-colors">
                  <span>Requer Intervenção</span>
                  <span>⚡</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
