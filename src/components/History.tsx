import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Info, FileText, Bookmark, Users } from 'lucide-react';

export default function History() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden custom-grid">
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-100 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-px h-full bg-slate-100/50"></div>
        <div className="w-px h-full bg-slate-100/50 hidden md:block"></div>
        <div className="w-px h-full bg-slate-100/50"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="space-y-8 text-center sm:text-left">
          
          <div className="space-y-3">
            <span className="font-mono text-[15px] leading-[24px] tracking-widest text-[#C5A059] font-bold uppercase block text-left">
              ORIGEM & LEGITIMIDADE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-800 tracking-tight leading-tight text-left">
              A experiência veio da linha de frente, não da teoria.
            </h2>
          </div>

          <div className="bg-slate-50 border border-slate-150 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
            <p className="text-navy-700 text-[18px] leading-relaxed font-normal">
              A origem desse trabalho está na vivência direta de ambientes em que a empresa tinha demanda comercial aquecida, equipe técnica qualificada e intenção de crescer, mas a <strong>execução diária simplesmente não sustentava a ambição operacional.</strong>
            </p>
            
            <p className="text-navy-700 text-[18px] leading-relaxed font-normal">
              O ponto de ruptura foi claro: a diretoria se encontrava conduzindo e cobrando os projetos em praticamente todas as frentes porque a estrutura não conseguia de fato proteger o fluxo de entrega final.
            </p>

            {/* Split typographic block */}
            <div className="border-y border-slate-200 py-6 my-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <span className="text-[15px] font-mono font-bold text-[#C5A059] uppercase block">SINTOMA 01</span>
                <span className="text-lg font-extrabold text-navy-800">Havia portfólio travado</span>
              </div>
              <div className="space-y-1 border-t sm:border-t-0 sm:border-x border-slate-200 pt-4 sm:pt-0">
                <span className="text-[15px] font-mono font-bold text-[#C5A059] uppercase block">SINTOMA 02</span>
                <span className="text-lg font-extrabold text-navy-800">Havia produto parado</span>
              </div>
              <div className="space-y-1 border-t sm:border-t-0 pt-4 sm:pt-0">
                <span className="text-[15px] font-mono font-bold text-[#C5A059] uppercase block">SINTOMA 03</span>
                <span className="text-lg font-extrabold text-navy-800">Havia esforço sem sistema</span>
              </div>
            </div>

            <p className="text-navy-800 text-[18px] leading-relaxed font-semibold">
              Foi exatamente do diagnóstico dessa vivência latente que nasceu uma atuação estratégica focada estritamente em gerenciar, destravar e devolver o controle da operação para o nível executivo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
