import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, AlertCircle, ArrowUpRight, CheckCircle2, TrendingUp, Clock, Landmark } from 'lucide-react';

export default function CostCalculator() {
  const [delayedProjects, setDelayedProjects] = useState<number>(3);
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(1200000); // R$ 1.2M default
  const [directorHours, setDirectorHours] = useState<number>(3); // 3h daily
  const [hourlyRate, setHourlyRate] = useState<number>(220); // R$ 220/hour default

  // Calculations
  const totalHoursSixMonths = directorHours * 20 * 6; // 20 working days/month * 6 months
  const strategicLossValue = totalHoursSixMonths * hourlyRate;
  
  // Based on the case where 1 project recovered generated 10% revenue in 12 months.
  // Let's assume unlocking delayed projects can recover 5% - 15% of annual revenue.
  // We conservative calculate 8% of annual revenue unlocked.
  const annualRevenue = monthlyRevenue * 12;
  const potentialRevenueRecovered = (annualRevenue * 0.08) * (delayedProjects / 4 + 0.5);

  const formattedHours = totalHoursSixMonths.toLocaleString('pt-BR');
  const formattedLoss = strategicLossValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const formattedRevenueRecovered = potentialRevenueRecovered.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  return (
    <div className="bg-navy-900 border border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden custom-grid-dark shadow-2xl" id="cost-calculator">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-navy-500/10 rounded-full blur-3xl pointer-events-none font-mono"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-[15px] text-gold-500 uppercase tracking-widest block font-semibold">Simulador de Perda</span>
            <h3 className="text-[24px] font-bold text-white tracking-tight">O Custo Silencioso da Execução Travada</h3>
          </div>
        </div>

        <p className="text-navy-300 text-[18px] mb-8 leading-relaxed">
          Projetos parados drenam a diretoria e represam faturamento. Calcule abaixo o quanto a sua empresa está absorvendo de custo silencioso mensalmente.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls - Left */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Control 1: Delayed Projects */}
            <div className="bg-navy-950/50 p-4 rounded-2xl border border-slate-800/60">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <span className="text-[15px]">Projetos parados ou lentos</span>
                  <span className="font-mono text-xs text-navy-400">({delayedProjects})</span>
                </label>
                <span className="font-mono text-[15px] font-semibold text-gold-500">{delayedProjects} {delayedProjects === 1 ? 'projeto' : 'projetos'}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="15" 
                step="1"
                value={delayedProjects}
                onChange={(e) => setDelayedProjects(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between font-mono text-[13px] text-slate-500 mt-1">
                <span>1 projeto</span>
                <span>15 projetos</span>
              </div>
            </div>

            {/* Control 2: Monthly Revenue */}
            <div className="bg-navy-950/50 p-4 rounded-2xl border border-slate-800/60">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[15px] font-medium text-slate-300">Faturamento Mensal da Empresa</label>
                <span className="font-mono text-[15px] font-semibold text-white">
                  {monthlyRevenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                </span>
              </div>
              <input 
                type="range" 
                min="100000" 
                max="10000000" 
                step="100000"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between font-mono text-[13px] text-slate-500 mt-1">
                <span>R$ 100k</span>
                <span>R$ 10M</span>
              </div>
            </div>

            {/* Control 3: Director micro-management hours */}
            <div className="bg-navy-950/50 p-4 rounded-2xl border border-slate-800/60">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[15px] font-medium text-slate-300">
                  Horas diárias da liderança dedicadas a apagar incêndios
                </label>
                <span className="font-mono text-[15px] font-semibold text-gold-500">{directorHours}h / dia</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="8" 
                step="1"
                value={directorHours}
                onChange={(e) => setDirectorHours(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between font-mono text-[13px] text-slate-500 mt-1">
                <span>1h diária</span>
                <span>8h (tempo integral)</span>
              </div>
            </div>

            {/* Control 4: Average Liderança Hour Cost */}
            <div className="bg-navy-950/50 p-4 rounded-2xl border border-slate-800/60">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[15px] font-medium text-slate-300">Custo estimado da hora executiva</label>
                <span className="font-mono text-[15px] font-semibold text-white">R$ {hourlyRate}/h</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="500" 
                step="20"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between font-mono text-[13px] text-slate-500 mt-1">
                <span>R$ 100/h</span>
                <span>R$ 500/h</span>
              </div>
            </div>

          </div>

          {/* Results Display - Right */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-navy-950 border border-slate-850 p-6 rounded-2xl relative">
            <div className="space-y-6">
              
              {/* Output 1: Lost Capability */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-rose-500" />
                  <span className="text-[14px] font-mono uppercase text-rose-400 font-bold tracking-wider">Perda de Capacidade Executiva</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white tracking-tight">{formattedHours}h</span>
                  <span className="text-[14px] text-slate-400">perdidas em 6 meses</span>
                </div>
                <p className="text-[14px] text-slate-400 mt-1 leading-relaxed">
                  Tempo consumido por diretores arbitrando prioridades, revisitando problemas resolvidos ou operando no dia a dia.
                </p>
              </div>

              {/* Output 2: Financial waste */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 mb-1">
                  <Landmark className="w-4 h-4 text-rose-500" />
                  <span className="text-[14px] font-mono uppercase text-rose-400 font-bold tracking-wider">Custo Oportunidade Silencioso</span>
                </div>
                <div className="text-2xl font-bold text-rose-500 tracking-tight">
                  {formattedLoss}
                </div>
                <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[14px]">Dinheiro gasto pagando diretoria para operar.</span>
                </p>
              </div>

              {/* Output 3: Revenue unlocked */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="text-[14px] font-mono uppercase text-emerald-400 font-bold tracking-wider">Receita Potencial Represada</span>
                </div>
                <div className="text-2xl font-bold text-emerald-400 tracking-tight">
                  ~ {formattedRevenueRecovered}
                </div>
                <p className="text-[14px] text-slate-400 mt-1 leading-relaxed">
                  Estimativa conservadora de receita latente sob maior previsibilidade e liberação de canais de entrega em 12 meses. Aplicado fator de escala padrão sobre o volume de projetos parados.
                </p>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <a 
                href={`https://wa.me/5531983938585?text=${encodeURIComponent(
                  `Olá! Fiz a simulação no site e vi que estamos perdendo cerca de ${formattedHours}h de foco da diretoria em 6 meses, um impacto de ${formattedLoss}. Gostaria de entender como a Smart Partner pode nos ajudar a recuperar essa previsibilidade.`
                )}`}
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 px-4 bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-navy-950 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group text-sm"
              >
                <span className="text-[15px]">Destravar minha capacidade agora</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <span className="text-[13px] text-slate-500 text-center block mt-2 font-mono">
                Diagnóstico inicial grátis de gargalos operacionais
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
