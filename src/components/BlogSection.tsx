import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types';

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 'composable-architectures',
      title: 'El Futuro es Composable: Arquitecturas Modernas',
      description: 'Descubre cómo las arquitecturas composables están revolucionando la forma en que construimos aplicaciones web.',
      image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=Tech',
      category: 'Desarrollo Web',
      categoryColor: 'sky',
      readMoreColor: 'text-sky-300 hover:text-sky-200',
    },
    {
      id: 'color-psychology',
      title: 'Psicología del Color en el Diseño de Interfaces',
      description: 'Aprende a usar el color de manera efectiva para evocar emociones y mejorar la experiencia del usuario.',
      image: 'https://placehold.co/600x400/3b0764/ffffff?text=Design',
      category: 'Diseño UI/UX',
      categoryColor: 'purple',
      readMoreColor: 'text-purple-300 hover:text-purple-200',
      delay: 150,
    },
    {
      id: 'serverless-vs-containers',
      title: 'Serverless vs. Contenedores: ¿Cuál elegir?',
      description: 'Analizamos las ventajas y desventajas de cada enfoque para ayudarte a decidir la mejor arquitectura para tu app.',
      image: 'https://placehold.co/600x400/1e3a8a/ffffff?text=Cloud',
      category: 'Cloud & DevOps',
      categoryColor: 'sky',
      readMoreColor: 'text-sky-300 hover:text-sky-200',
      delay: 300,
    },
  ];

  const getCategoryColor = (color: 'sky' | 'purple') => {
    return color === 'sky' ? 'text-sky-400' : 'text-purple-400';
  };

  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-target">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-100">
            Nuestro Blog & Insights
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Compartimos nuestro conocimiento y las últimas tendencias del mundo tecnológico.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="glass-card overflow-hidden scroll-target group"
              style={{ transitionDelay: post.delay ? `${post.delay}ms` : '0ms' }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <p className={`text-sm mb-2 ${getCategoryColor(post.categoryColor)}`}>
                  {post.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-slate-400 mb-4">
                  {post.description}
                </p>
                <a
                  href="#"
                  className={`font-semibold ${post.readMoreColor} inline-flex items-center`}
                >
                  Leer más 
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
