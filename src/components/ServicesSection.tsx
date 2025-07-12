import React from 'react';
import { Code2, Smartphone, CloudCog, BrainCircuit, LifeBuoy, BarChart3 } from 'lucide-react';
import type { Service } from '../types';

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 'web-development',
      icon: 'Code2',
      title: 'Desarrollo Web Full-Stack',
      description: 'Desde APIs robustas en el backend hasta interfaces dinámicas en el frontend, lo cubrimos todo.',
      color: 'sky',
    },
    {
      id: 'mobile-development',
      icon: 'Smartphone',
      title: 'Aplicaciones Móviles Nativas',
      description: 'Creamos aplicaciones para iOS y Android de alto rendimiento para una experiencia de usuario superior.',
      color: 'purple',
      delay: 150,
    },
    {
      id: 'cloud-architecture',
      icon: 'CloudCog',
      title: 'Arquitectura en la Nube',
      description: 'Diseñamos y gestionamos infraestructuras seguras y escalables en AWS, Google Cloud y Azure.',
      color: 'sky',
      delay: 300,
    },
    {
      id: 'tech-consulting',
      icon: 'BrainCircuit',
      title: 'Consultoría Tecnológica',
      description: 'Te ayudamos a navegar el paisaje tecnológico y a tomar decisiones estratégicas para tu negocio.',
      color: 'purple',
    },
    {
      id: 'maintenance',
      icon: 'LifeBuoy',
      title: 'Mantenimiento y Soporte',
      description: 'Ofrecemos planes de soporte continuo para asegurar que tus aplicaciones funcionen sin problemas.',
      color: 'sky',
      delay: 150,
    },
    {
      id: 'data-analytics',
      icon: 'BarChart3',
      title: 'Análisis de Datos & IA',
      description: 'Transformamos tus datos en insights valiosos y construimos soluciones de inteligencia artificial.',
      color: 'purple',
      delay: 300,
    },
  ];

  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-12 w-12 mx-auto mb-6" };
    
    switch (iconName) {
      case 'Code2': return <Code2 {...iconProps} />;
      case 'Smartphone': return <Smartphone {...iconProps} />;
      case 'CloudCog': return <CloudCog {...iconProps} />;
      case 'BrainCircuit': return <BrainCircuit {...iconProps} />;
      case 'LifeBuoy': return <LifeBuoy {...iconProps} />;
      case 'BarChart3': return <BarChart3 {...iconProps} />;
      default: return <Code2 {...iconProps} />;
    }
  };

  const getIconColor = (color: 'sky' | 'purple') => {
    return color === 'sky' ? 'text-sky-400' : 'text-purple-400';
  };

  return (
    <section id="servicios" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-target">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-100">
            Un Ecosistema de Soluciones
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Nuestra experiencia a tu servicio para crear productos digitales de impacto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`glass-card p-8 text-center scroll-target interactive-card ${getIconColor(service.color)}`}
              style={{ transitionDelay: service.delay ? `${service.delay}ms` : '0ms' }}
            >
              <div className={getIconColor(service.color)}>
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
