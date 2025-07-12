import React, { useState } from 'react';
import { MailOpen, PhoneCall, MapPin, User, AtSign, MessageCircle, ArrowRight } from 'lucide-react';
import type { ContactInfo } from '../types';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo: ContactInfo[] = [
    {
      icon: 'MailOpen',
      title: 'Email',
      value: 'hola@axon.page',
      href: 'mailto:hola@axon.page',
    },
    {
      icon: 'PhoneCall',
      title: 'Teléfono',
      value: '+57 300 123 4567',
      href: 'tel:+573001234567',
    },
    {
      icon: 'MapPin',
      title: 'Ubicación',
      value: 'Bogotá, Colombia',
    },
  ];

  const getContactIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8 text-sky-400 mr-4" };
    
    switch (iconName) {
      case 'MailOpen': return <MailOpen {...iconProps} />;
      case 'PhoneCall': return <PhoneCall {...iconProps} />;
      case 'MapPin': return <MapPin {...iconProps} />;
      default: return <MailOpen {...iconProps} />;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí se manejaría el envío del formulario
  };

  return (
    <section id="contacto" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 glass-card p-8 md:p-12 scroll-target">
          <div className="flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
              <p className="text-slate-400 mb-8">
                Encuéntranos en nuestras oficinas o a través de nuestros canales digitales. 
                Siempre estamos disponibles para una charla.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center">
                    {getContactIcon(info.icon)}
                    <div>
                      <p className="font-semibold">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-300 hover:text-sky-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  required
                />
              </div>
              
              <div className="relative">
                <AtSign className="absolute top-1/2 left-4 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  required
                />
              </div>
              
              <div className="relative">
                <MessageCircle className="absolute top-5 left-4 text-slate-500 w-5 h-5" />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                  required
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="group bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-lg shadow-lg shadow-sky-500/20 w-full flex items-center justify-center"
                >
                  <span>Enviar Mensaje</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
