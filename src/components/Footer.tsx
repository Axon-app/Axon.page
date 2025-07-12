import React, { useState } from 'react';
import { Twitter, Linkedin, Github, Instagram, Dribbble, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Dribbble, href: '#', label: 'Dribbble' },
  ];

  const navigationLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#portafolio', label: 'Portafolio' },
    { href: '#tecnologias', label: 'Tecnologías' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#blog', label: 'Blog' },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacidad' },
    { href: '/terms', label: 'Términos' },
  ];

  return (
    <footer className="bg-slate-900/60 footer-gradient-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter inline-block mb-4">
              Axon<span className="gradient-text">.page</span>
            </a>
            <p className="text-slate-400 mb-6 max-w-xs">
              Creando el software del mañana, hoy. Impulsamos la innovación a través de 
              código de calidad y diseño centrado en el usuario.
            </p>
            <div className="flex space-x-3 text-slate-400">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="footer-social-icon"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-2 gap-8">
            <div>
              <h4 className="font-bold text-white mb-4 tracking-wider">Explorar</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-sky-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-sky-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-white mb-4 tracking-wider">Suscríbete</h4>
              <p className="text-slate-400 mb-4 text-sm">
                Recibe las últimas noticias y artículos directamente en tu bandeja de entrada.
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-l-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  required
                />
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-bold p-2 rounded-r-lg transition-colors"
                  aria-label="Suscribirse"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; 2025 Axon.page. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
