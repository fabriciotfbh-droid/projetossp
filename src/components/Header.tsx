import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowUpRight, MessageSquareCode } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Problema', href: '#problema' },
    { label: 'Nossa Entrega', href: '#entrega' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`} id="main-header">
      {/* Premium Top Golden Accent Line to highlight the identity & anchor the header */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#AA7C11] via-[#C5A059] to-[#AA7C11] z-50" />
      
      {/* Premium Bottom Golden Accent Line to highlight the identity & anchor the header */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#AA7C11] via-[#C5A059] to-[#AA7C11] z-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo with interactive glowing highlight state */}
          <a href="#hero" className="flex items-center p-1.5 rounded-xl transition-all duration-300 hover:bg-slate-50/60 hover:shadow-sm">
            <Logo size="sm" showText={true} light={false} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg md:hidden text-navy-800 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 p-6 md:hidden border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-5 py-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-navy-800 hover:text-gold-600 transition-colors py-1.5 border-b border-slate-50"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-6 mt-4">
              <a 
                href="https://wa.me/5531983938585?text=Ol%C3%A1%2C%20quero%20entender%20como%20destravar%20projetos%20cr%C3%ADticos%20e%20recuperar%20previsibilidade%20na%20execu%C3%A7%C3%A3o%20da%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 hover:bg-slate-100 font-bold text-navy-800 rounded-xl border border-slate-200"
              >
                <MessageSquareCode className="w-5 h-5 text-gold-500" />
                <span>Conversar no WhatsApp</span>
              </a>
              <a 
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-navy-800 hover:bg-navy-900 font-bold text-white rounded-xl shadow-lg"
              >
                <span>Destravar meus projetos</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
