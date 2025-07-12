import React from 'react';
import { Lightbulb, ShieldCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-target">
            <img 
              src="https://placehold.co/800x600/1e3a8a/ffffff?text=Equipo+Axon.page" 
              alt="Equipo de Axon.page colaborando" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="scroll-target">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              Nuestra Misión: <span className="gradient-text">Innovar con Propósito</span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-6">
              En Axon.page, somos más que desarrolladores; somos arquitectos de soluciones digitales. 
              Nuestra pasión es transformar ideas complejas en productos de software elegantes, 
              funcionales y escalables que impulsen el crecimiento de nuestros clientes.
            </p>
            
            <p className="text-lg text-slate-400 mb-8">
              Creemos en la colaboración estrecha, la transparencia total y una dedicación 
              inquebrantable a la excelencia técnica. No solo entregamos código, construimos 
              asociaciones duraderas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Lightbulb className="w-8 h-8 text-sky-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Innovación Constante</h4>
                  <p className="text-slate-400">
                    Buscamos y aplicamos las últimas tecnologías para ofrecer soluciones de vanguardia.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ShieldCheck className="w-8 h-8 text-sky-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Calidad Excepcional</h4>
                  <p className="text-slate-400">
                    Nuestro compromiso es con el código limpio, las pruebas rigurosas y un rendimiento impecable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
