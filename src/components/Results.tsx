import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, ShieldAlert, CheckCircle, ArrowDown, UserX, Lightbulb, TrendingDown, Clock, ShieldCheck, Hourglass } from 'lucide-react';
import CostCalculator from './CostCalculator';

export default function Results() {
  const [activeTab, setActiveTab] = useState<'holding' | 'lideranca'>('holding');

  const caseResults = [
    { label: 'Projetos Antigos Destravados', value: '9 de 17', desc: 'De imediato, sem infraestrutura adicional.' },
    { label: 'Custo de Recuperação de Projetos', value: 'R$ 0', desc: 'Nenhum investimento inicial para começar.' },
    { label: 'Projetos Antigos Entregues', value: '6 projetos', desc: 'Finalizados e ativos em 6 meses de fluxo.' },
    { label: 'Novos Projetos Concluídos', value: '3 novos', desc: 'Novas frentes implementadas no mesmo ciclo.' },
    { label: 'Recuperação de Produto', value: '4 meses', desc: 'Produto parado há 2 anos, reestruturado e lançado.' },
    { label: 'Impacto Comercial Direto', value: '10% de faturamento', desc: 'Representados pelo novo produto em 12 meses.' },
    { label: 'Horas de Diretoria Liberadas', value: '240 horas', desc: 'Retirados da operação direta ao longo de 6 meses.' },
    { label: 'Capacidade Executiva Recuperada', value: 'R$ 52.500', desc: 'Equivalência mínima em valor financeiro direto.' }
  ];

  return (
    <section id="resultados" className="py-20 md:py-28 bg-white relative overflow-hidden custom-grid">
      
      {/* Decorative linear lines to match Dribbble aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-100 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-px h-full bg-slate-100/50"></div>
        <div className="w-px h-full bg-slate-100/50 hidden md:block"></div>
        <div className="w-px h-full bg-slate-100/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mr-auto mb-16 space-y-4">
          <span className="font-mono text-[15px] tracking-widest text-[#C5A059] font-bold uppercase block mb-6">
            MÉTRICAS COLETADAS NA PRÁTICA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-800 tracking-tight leading-tight">
            Resultados que traduzem execução em impacto de negócio.
          </h2>
          <p className="text-navy-600 text-[18px] leading-relaxed font-normal">
            Em uma holding de telecom e tecnologia, a atuação começou com o desafio de estruturar a área de projetos e evoluiu para a frente comercial executiva. Os efeitos foram mensuráveis.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12" id="results-tabs">
          <div className="bg-slate-100/80 border border-slate-200/50 p-1 rounded-2xl flex max-w-md w-full">
            <button 
              onClick={() => setActiveTab('holding')}
              className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeTab === 'holding' 
                  ? 'bg-navy-800 text-white shadow' 
                  : 'text-navy-700 hover:text-navy-950 hover:bg-slate-200/40'
              }`}
            >
              Métricas do Case Real
            </button>
            <button 
              onClick={() => setActiveTab('lideranca')}
              className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeTab === 'lideranca' 
                  ? 'bg-navy-800 text-white shadow' 
                  : 'text-navy-700 hover:text-navy-950 hover:bg-slate-200/40'
              }`}
            >
              Análise: Custo de Liderança
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="min-h-[400px]">
          {activeTab === 'holding' ? (
            <motion.div 
              key="holding-case"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseResults.map((res, index) => (
                  <div key={index} className="bg-slate-50 border border-slate-150 p-6 rounded-2xl space-y-2 hover:border-gold-300 hover:bg-white transition-all">
                    <span className="text-2xl font-black text-navy-850 tracking-tight block">
                      {res.value}
                    </span>
                    <h3 className="text-[15px] font-bold text-navy-700">
                      {res.label}
                    </h3>
                    <p className="text-[14px] text-slate-500 leading-normal font-normal">
                      {res.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-8 bg-gold-50 border border-gold-200/40 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-gold-100 rounded text-[15px] font-mono text-gold-800 font-bold uppercase tracking-wider">
                    SÍNTESE DA ATUAÇÃO
                  </div>
                  <h4 className="text-xl font-bold text-navy-850 tracking-tight">O ganho não foi apenas operacional.</h4>
                  <p className="text-[16px] text-navy-700 leading-relaxed max-w-2xl">
                    A atuação recuperou capacidade financeira ao desbloquear canais estratégicos que geraram diretamente 10% a mais do faturamento corporativo no primeiro ano. O ganho foi completo: <strong>Financeiro, Executivo e Estratégico.</strong>
                  </p>
                </div>
                <a 
                  href="https://wa.me/5531983938585?text=Ol%C3%A1%2C%20quero%20entender%20como%20vcs%20estruturaram%20a%20área%20de%20projetos%20no%2520case%20da%20holding%20de%20telecom%20para%20gerar%2010%25%20de%20faturamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-navy-800 hover:bg-navy-900 text-white font-bold text-sm rounded-xl inline-flex items-center gap-2 tracking-tight transition-all shrink-0 w-full md:w-auto justify-center"
                >
                  <span>Conhecer Estrutura do Case</span>
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="lideranca-leak"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left explanation - 6 columns */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-100 rounded-full text-xs font-mono text-rose-700 font-semibold uppercase tracking-wider">
                    <Hourglass className="w-3.5 h-3.5 text-rose-500 animate-spin" />
                    Central de Destravamento
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-navy-800 tracking-tight leading-tight pt-1">
                    Quando a diretoria precisa carregar projeto no colo, a empresa já está pagando caro.
                  </h3>
                </div>

                <p className="text-navy-600 text-sm leading-relaxed">
                  Um dos sinais mais claros de colapso de execução corporativa é quando a liderança máxima passa a atuar diariamente como "central de destravamento" de tudo. Nesse cenário, o diretor é puxado a realizar comportamentos operacionais caros:
                </p>

                {/* Bullets with customized micro-icons */}
                <div className="space-y-3 pt-2">
                  {[
                    'Revisita temas que já deveriam estar estruturados e resolvidos pelo time.',
                    'Arbitra diariamente prioridades básicas que deveriam estar transparentes por processos.',
                    'Acompanha detalhes minuciosos que deveriam estar estabilizados na operação.',
                    'Absorve ruídos excessivos cotidianos que não deveriam escalar para a mesa executiva.'
                  ].map((bullet, i) => (
                    <div key={i} className="flex gap-3 text-sm font-medium text-navy-700">
                      <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 text-xs font-mono font-bold text-navy-700">
                        {i + 1}
                      </span>
                      <p className="leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl relative">
                  <p className="text-xs text-navy-605 leading-relaxed font-semibold">
                    <strong>Custo de Oportunidade Elevado:</strong> Isso reduz drasticamente a capacidade de decisão estratégica pura, alonga exponencialmente os ciclos de mercado e aumenta drasticamente o custo corporativo. Como reflexo do case holding, a liberação de 240h da diretoria no tático recuperou o equivalente conservador a <strong>R$ 52.500 no período</strong>.
                  </p>
                </div>
              </div>

              {/* Right explanation/visual - 6 columns */}
              <div className="lg:col-span-6">
                <div className="bg-slate-50 border border-slate-200/80 p-6 sm:p-8 rounded-3xl space-y-6 relative overflow-hidden">
                  <div className="flex gap-4 items-center">
                    <span className="text-4xl">📉</span>
                    <div>
                      <h4 className="text-base font-bold text-navy-850">Galo de Vazamento Técnico</h4>
                      <p className="text-xs text-slate-500">O dreno invisível da Diretoria microgerenciando a operação.</p>
                    </div>
                  </div>
                  
                  <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden w-full relative">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs font-mono font-bold">
                    <span className="text-rose-500">80% TEMPO NO OPERACIONAL (RUÍDO)</span>
                    <span className="text-slate-400">20% ESTRATÉGICO</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm">➡️</span>
                    <span className="text-xs font-bold text-navy-700">Com a Smart Partner Consulting, invertemos esse gráfico:</span>
                  </div>

                  <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden w-full relative">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs font-mono font-bold">
                    <span className="text-emerald-500">15% TÁTICO ESSENCIAL</span>
                    <span className="text-navy-800">85% FOCO ESTRATÉGICO E CRESCIMENTO</span>
                  </div>
                </div>
              </div>

            </motion.div>
          )}
        </div>

        {/* Dedicated Calculator Simulator integration block */}
        <div className="mt-20">
          <CostCalculator />
        </div>

      </div>
    </section>
  );
}
