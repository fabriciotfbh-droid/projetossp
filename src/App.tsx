import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExecutiveFocus from './components/ExecutiveFocus';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import DiagnosticDeliverables from './components/DiagnosticDeliverables';
import Results from './components/Results';
import Positioning from './components/Positioning';
import History from './components/History';
import TargetAudience from './components/TargetAudience';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-800 antialiased font-sans">
      {/* Header Navigation */}
      <Header />

      {/* Main content elements flow */}
      <main>
        {/* Section 1 — Hero & Prova Objetiva */}
        <Hero />

        {/* New Section — Foco Executivo (Personas) */}
        <ExecutiveFocus />

        {/* Section 2 — Dor real */}
        <PainPoints />

        {/* Section 3 — O que entregamos */}
        <Services />

        {/* New Section — Entregáveis do Diagnóstico */}
        <DiagnosticDeliverables />

        {/* Sections 4 & 5 — Resultados & Custo da Liderança (Includes Simulator) */}
        <Results />

        {/* Section 6 — Posicionamento */}
        <Positioning />

        {/* Section 7 — História e legitimidade */}
        <History />

        {/* Section 8 — Para quem faz sentido */}
        <TargetAudience />

        {/* Section 9 — CTA final & Footer */}
        <CTA />
      </main>
    </div>
  );
}
