import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="cta-gradient rounded-2xl p-12 text-center text-white scroll-target">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Iniciar tu Próximo Gran Proyecto?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            No dejes que tu idea se quede en el papel. Hablemos sobre cómo podemos 
            convertirla en una realidad digital exitosa.
          </p>
          <a
            href="#contacto"
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 text-lg shadow-lg"
          >
            Contáctanos Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
