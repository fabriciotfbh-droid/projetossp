import React from 'react';
import { motion } from 'motion/react';
import { Check, Compass, Grid, ArrowUpDown, ChevronRight, Activity, Cpu, Sparkles } from 'lucide-react';

export default function Services() {
  const offerings = [
    {
      title: 'Identificação dos gargalos reais de execução',
      desc: 'Mapeamento técnico de fluxo para localizar onde os projetos perdem tração de forma silenciosa ou crônica.'
    },
    {
      title: 'Reorganização pragmática de prioridades e fluxo',
      desc: 'Remodelagem do portfólio, limpando o ruído operacional para focar a energia do time nas entregas com maior impacto na receita.'
    },
    {
      title: 'Redução drástica da dependência da diretoria no tático',
      desc: 'Sistematização de checkpoints e responsabilidades para blindar o tempo estratégico dos tomadores de decisão.'
    },
    {
      title: 'Recuperação imediata de entregas paradas',
      desc: 'Intervenção pontual e robusta para restabelecer o fôlego de projetos travados há meses ou anos.'
    },
    {
      title: 'Transformação de iniciativas travadas em resultado de negócio',
      desc: 'Conversão física de marcos de projeto em geradores de faturamento ativo no mercado.'
    },
    {
      title: 'Restabelecimento de previsibilidade estratégica total',
      desc: 'Devolução de controle tático sobre prazos, dependências críticas e expectativas de crescimento futuro.'
    }
  ];

  return (
    <section id="entrega" className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden custom-grid-dark">
      {/* Visual background accents */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Headline - Left sticky side */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span className="font-mono text-[15px] tracking-widest text-gold-500 font-bold uppercase block">
              NOSSA INTEGRAÇÃO / O QUE ENTREGAMOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Estrutura para <span className="text-[#C5A059]">tirar projetos do caos</span> e colocar a execução em fluxo.
            </h2>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
              Nossa atuação é desenhada sob medida para ambientes corporativos complexos, onde o problema de gargalo já deixou de ser pontual e passou a afetar a saúde financeira direta do negócio.
            </p>
            
            {/* Dark callout badge */}
            <div className="p-5 bg-navy-900 border border-slate-800 rounded-2xl border-l-4 border-l-gold-500 space-y-2">
              <span className="text-[14px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Foco no Fluxo</span>
              <p className="text-[14px] text-slate-300 leading-relaxed font-semibold">
                &ldquo;Não se trata de simplesmente acompanhar cronograma através de planilhas. Trata-se de restabelecer a verdadeira capacidade de entrega onde o sistema perdeu tração corporativa.&rdquo;
              </p>
            </div>
          </div>

          {/* List items - Right side */}
          <div className="lg:col-span-7 space-y-4">
            {offerings.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-navy-900/60 hover:bg-navy-900 border border-slate-800/80 hover:border-gold-500/35 p-6 rounded-2xl transition-all group flex gap-4"
              >
                {/* Visual number tag */}
                <div className="font-mono text-sm text-gold-500 font-bold bg-navy-950 border border-slate-800 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                  0{index + 1}
                </div>
                <div className="space-y-1.5 pt-0.5">
                  <h3 className="text-[15px] font-bold text-white group-hover:text-gold-200 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
