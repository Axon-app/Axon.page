import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import type { PortfolioProject } from '../types';

const PortfolioSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects: PortfolioProject[] = [
    {
      id: 'fintech-platform',
      title: 'Plataforma de Inversión',
      category: 'Desarrollo Web, Cloud',
      categoryColor: 'text-sky-400',
      description: 'Desarrollamos una solución SaaS completa que simplifica la gestión de carteras de inversión con análisis de datos en tiempo real y una interfaz de usuario intuitiva.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
      projectUrl: '#',
      linkColor: 'text-sky-300 hover:text-sky-200',
    },
    {
      id: 'wellness-app',
      title: 'App de Bienestar Personal',
      category: 'App Móvil, UI/UX',
      categoryColor: 'text-purple-400',
      description: 'Una aplicación móvil para iOS y Android que promueve hábitos saludables a través de la gamificación, seguimiento de metas y contenido personalizado.',
      technologies: ['SwiftUI', 'Kotlin', 'Firebase', 'Figma'],
      projectUrl: '#',
      linkColor: 'text-purple-300 hover:text-purple-200',
    },
  ];

  const toggleProject = (projectId: string) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="portafolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-target">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-100">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explora algunos de los trabajos que nos llenan de orgullo. Haz clic para ver los detalles.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 portfolio-accordion">
          <div 
            className="h-80 rounded-2xl bg-cover bg-center scroll-target"
            style={{
              backgroundImage: "url('https://placehold.co/800x600/0f172a/38bdf8?text=Proyecto+Fintech')"
            }}
          />
          
          <div className="space-y-4 scroll-target">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`portfolio-item ${activeProject === project.id ? 'active' : ''}`}
              >
                <div 
                  className="item-header"
                  onClick={() => toggleProject(project.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className={`text-sm ${project.categoryColor}`}>
                      {project.category}
                    </p>
                  </div>
                  <ChevronDown className="arrow-icon text-slate-400" />
                </div>
                
                <div className="item-content">
                  <p className="text-slate-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.projectUrl}
                    className={`font-semibold ${project.linkColor} inline-flex items-center`}
                  >
                    Ver Proyecto 
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
