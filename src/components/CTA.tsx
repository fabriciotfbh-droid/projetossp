import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, ChevronUp, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

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

export default function CTA() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Como funciona o diagnóstico estratégico gratuito?',
      a: 'É uma reunião técnica de 45 minutos direta com nossos consultores seniores. Nós mapeamos as frentes de maior travamento na sua operação hoje, avaliamos o impacto financeiro silenciado e apresentamos caminhos táticos que você pode aplicar de imediato.'
    },
    {
      q: 'A Smart Partner exige a contratação de novos softwares?',
      a: 'Não. Nós não vendemos nem lucramos com ferramentas. Nossa filosofia de fluxo intervém sob a estrutura física e as ferramentas de cooperação corporativa que seu time já utiliza diariamente.'
    },
    {
      q: 'Qual é o tempo estimado para encontrarmos os primeiros destravamentos?',
      a: 'Com nossa metodologia de intervenção, as primeiras definições de prioridade e desobstruções acontecem já na primeira quinzena. No nosso caso referencial, o portfólio estratégico ganhou tração imediata.'
    },
    {
      q: 'A consultoria serve para qualquer tamanho de empresa?',
      a: 'Nosso escopo é desenhado prioritariamente para médias e grandes corporações, indústrias, holdings e frentes de tecnologia ou telecomunicações que possuem portfólios densos de projetos e sofrem com a sobrecarga da diretoria.'
    }
  ];

  return (
    <div id="contato">
      
      {/* FAQ Accordion Section */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden custom-grid">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-100 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-8">
          <div className="w-px h-full bg-slate-100/50"></div>
          <div className="w-px h-full bg-slate-100/50 hidden md:block"></div>
          <div className="w-px h-full bg-slate-100/50"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-left max-w-2xl mr-auto mb-16 space-y-3">
            <span className="font-mono text-[15px] leading-[24px] tracking-widest text-[#C5A059] font-bold uppercase block text-left">
              DÚVIDAS FREQUENTES / FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-800 tracking-tight text-left">
              Perguntas sobre o método de aceleração
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-slate-50 border border-slate-200/60 rounded-2xl overflow-hidden transition-all"
                >
                  <button 
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-navy-800 hover:text-[#C5A059] transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#C5A059] shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="p-6 pt-0 text-sm sm:text-base text-navy-600 font-normal leading-relaxed border-t border-slate-200/20">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Main Final CTA Banner Section */}
      <section className="py-20 md:py-28 bg-[#040F1D] text-white relative overflow-hidden custom-grid-dark">
        {/* Glowing visual effect */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-left space-y-8">
          
          <div className="max-w-3xl mr-auto space-y-4 text-left">
            <span className="font-mono text-[15px] leading-[24px] tracking-widest text-[#C5A059] font-bold uppercase block text-left font-bold">
              DIAGNÓSTICO E CONTATO IMEDIATO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-left">
              Se a sua empresa tem projetos travados, <span className="text-[#C5A059]">o custo já está maior do que parece</span>.
            </h2>
            <p className="text-slate-300 text-[18px] leading-relaxed max-w-2xl mr-auto text-left font-normal animate-none">
              Cada mês de execução desorganizada prolonga o atraso, posterga faturamento líquido relevante e empurra cada vez mais a sua liderança para o nível operacional que não deveria pertencer a ela.
            </p>
          </div>

          <div className="pt-4 max-w-md mr-auto text-left space-y-4">
            <motion.a 
              href="https://wa.me/5531983938585?text=Ol%C3%A1%2C%20quero%20entender%20como%20destravar%20projetos%20cr%C3%ADticos%20e%20recuperar%20previsibilidade%20na%20execu%C3%A7%C3%A3o%20da%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4.5 bg-gradient-to-r from-[#25D366] to-[#1eaf4c] hover:from-[#20ba56] hover:to-[#1a9f43] text-white font-extrabold text-base rounded-xl transition-all duration-300 group cursor-pointer border border-[#25D366] relative"
              style={{
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)"
              }}
              animate={{
                boxShadow: [
                  "0 6px 20px rgba(37, 211, 102, 0.4), 0 0 0 0px rgba(37, 211, 102, 0.5)",
                  "0 6px 26px rgba(37, 211, 102, 0.55), 0 0 0 10px rgba(37, 211, 102, 0)",
                  "0 6px 20px rgba(37, 211, 102, 0.4), 0 0 0 0px rgba(37, 211, 102, 0)"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth={0.2} />
              <span>Quero destravar meus projetos</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>

            <div className="flex justify-start items-center gap-1.5 text-[14px] text-slate-400 font-mono">
              <span>Conversa inicial para avaliar gargalos, impacto e prioridades de intervenção.</span>
            </div>
          </div>

        </div>
      </section>

      {/* Modern Professional Brand Footer */}
      <footer className="bg-navy-950 border-t border-slate-900 text-slate-400 py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
            
            {/* Logo area */}
            <div className="md:col-span-5 space-y-4">
              <Logo size="sm" showText={true} light={true} />
              <p className="text-[13px] text-slate-500 leading-relaxed max-w-sm">
                Recuperando previsibilidade, protegendo o effort estratégico da sua liderança e acelerando a entrada de faturamento latente.
              </p>
            </div>

            {/* Quick Navigation links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Acesso Rápido</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#problema" className="hover:text-[#C5A059] transition-colors">O Problema</a></li>
                <li><a href="#entrega" className="hover:text-[#C5A059] transition-colors">O Que Entregamos</a></li>
                <li><a href="#resultados" className="hover:text-[#C5A059] transition-colors">Case de Sucesso</a></li>
                <li><a href="#para-quem" className="hover:text-[#C5A059] transition-colors">Para Quem Serve</a></li>
              </ul>
            </div>

            {/* Contact details */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Contato Oficial</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <a href="https://wa.me/5531983938585" className="hover:text-white transition-colors">+55 (31) 98393-8585</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Belo Horizonte - MG, Brasil</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5A059] font-mono font-bold">LinkedIn:</span>
                  <a href="https://www.linkedin.com/company/smart-partner-consulting" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Smart Partner Consulting</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Smart Partner Consulting. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1.5">
              <span>Projetado com altíssimo padrão de engenharia</span>
              <span className="text-[#C5A059]">✦</span>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
