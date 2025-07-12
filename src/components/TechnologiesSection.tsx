import React from 'react';

const TechnologiesSection: React.FC = () => {
  const frontendTechnologies = [
    {
      name: 'React',
      icon: (
        <svg className="w-16 h-16" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
    },
    {
      name: 'Vue.js',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg">
          <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#42b883"/>
          <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#42b883"/>
          <path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495e"/>
        </svg>
      ),
    },
    {
      name: 'Next.js',
      icon: (
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">N</span>
        </div>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <div className="w-16 h-16 bg-sky-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">T</span>
        </div>
      ),
    },
  ];

  const backendTechnologies = [
    {
      name: 'Node.js',
      icon: (
        <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">N</span>
        </div>
      ),
    },
    {
      name: 'Python',
      icon: (
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">P</span>
        </div>
      ),
    },
    {
      name: 'PostgreSQL',
      icon: (
        <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">PG</span>
        </div>
      ),
    },
    {
      name: 'MongoDB',
      icon: (
        <div className="w-16 h-16 bg-green-700 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">M</span>
        </div>
      ),
    },
  ];

  return (
    <section id="tecnologias" className="py-20 lg:py-32 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-target">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-100">
            Tecnologías que Dominamos
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Utilizamos un stack tecnológico moderno y robusto para construir soluciones de alto impacto.
          </p>
        </div>
        
        <div className="space-y-12 scroll-target">
          <div>
            <h3 className="text-center text-xl font-semibold text-sky-400 mb-8 tracking-widest">
              FRONTEND
            </h3>
            <div className="flex justify-center flex-wrap gap-8 md:gap-12 items-center">
              {frontendTechnologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="tech-logo flex flex-col items-center space-y-2"
                  title={tech.name}
                >
                  {tech.icon}
                  <span className="text-sm text-slate-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-center text-xl font-semibold text-purple-400 mb-8 tracking-widest">
              BACKEND & DATABASES
            </h3>
            <div className="flex justify-center flex-wrap gap-8 md:gap-12 items-center">
              {backendTechnologies.map((tech) => (
                <div 
                  key={tech.name}
                  className="tech-logo flex flex-col items-center space-y-2"
                  title={tech.name}
                >
                  {tech.icon}
                  <span className="text-sm text-slate-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
