import React, { useRef } from 'react';
import { useParticleCanvas } from '../hooks/useAnimations';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useParticleCanvas(canvasRef);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-tight text-slate-100">
          Construimos el <span className="gradient-text">Futuro</span> del Software
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-400 mb-10">
          Soluciones de software innovadoras, eficientes y escalables que convierten tus desafíos en oportunidades.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#contacto" 
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 text-lg shadow-lg shadow-sky-500/20"
          >
            Empezar un Proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
