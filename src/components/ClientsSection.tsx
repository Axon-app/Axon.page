import React from 'react';
import type { Client } from '../types';

const ClientsSection: React.FC = () => {
  const clients: Client[] = [
    { name: 'TechCorp', logo: 'https://placehold.co/200x100/020617/cbd5e1?text=TechCorp' },
    { name: 'InnovateX', logo: 'https://placehold.co/200x100/020617/cbd5e1?text=InnovateX' },
    { name: 'Quantum', logo: 'https://placehold.co/200x100/020617/cbd5e1?text=Quantum' },
    { name: 'NextGen', logo: 'https://placehold.co/200x100/020617/cbd5e1?text=NextGen' },
    { name: 'DataDriven', logo: 'https://placehold.co/200x100/020617/cbd5e1?text=DataDriven' },
    { name: 'Solutions', logo: 'https://placehold.co/200x100/020617/cbd5e1?text=Solutions' },
  ];

  // Duplicamos los clientes para el efecto infinito
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clientes" className="py-16">
      <div className="container mx-auto px-6">
        <div className="client-scroller">
          <div className="client-scroller-inner">
            {duplicatedClients.map((client, index) => (
              <img
                key={`${client.name}-${index}`}
                src={client.logo}
                alt={`Logo Cliente ${client.name}`}
                className="h-10 mx-8 opacity-60 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
