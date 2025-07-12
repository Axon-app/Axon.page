import React from 'react';
import { Twitter, Linkedin, Github, Dribbble } from 'lucide-react';
import type { TeamMember } from '../types';

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 'jane-smith',
      name: 'Jane Smith',
      role: 'CEO & Fundadora',
      image: 'https://placehold.co/200x200/a78bfa/020617?text=JS',
      borderColor: 'border-purple-500',
      socialLinks: [
        { platform: 'Twitter', url: '#', icon: 'Twitter' },
        { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
      ],
    },
    {
      id: 'mark-doe',
      name: 'Mark Doe',
      role: 'CTO & Arquitecto Principal',
      image: 'https://placehold.co/200x200/38bdf8/020617?text=MD',
      borderColor: 'border-sky-500',
      socialLinks: [
        { platform: 'GitHub', url: '#', icon: 'Github' },
        { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
      ],
      delay: 150,
    },
    {
      id: 'linda-shaw',
      name: 'Linda Shaw',
      role: 'Directora de Diseño UI/UX',
      image: 'https://placehold.co/200x200/a78bfa/020617?text=LS',
      borderColor: 'border-purple-500',
      socialLinks: [
        { platform: 'Dribbble', url: '#', icon: 'Dribbble' },
        { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
      ],
      delay: 300,
    },
    {
      id: 'kevin-park',
      name: 'Kevin Park',
      role: 'Líder de Ingeniería Móvil',
      image: 'https://placehold.co/200x200/38bdf8/020617?text=KP',
      borderColor: 'border-sky-500',
      socialLinks: [
        { platform: 'GitHub', url: '#', icon: 'Github' },
        { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
      ],
      delay: 450,
    },
  ];

  const getSocialIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5" };
    
    switch (iconName) {
      case 'Twitter': return <Twitter {...iconProps} />;
      case 'Linkedin': return <Linkedin {...iconProps} />;
      case 'Github': return <Github {...iconProps} />;
      case 'Dribbble': return <Dribbble {...iconProps} />;
      default: return <Linkedin {...iconProps} />;
    }
  };

  const getRoleColor = (role: string) => {
    return role.includes('CEO') || role.includes('Diseño') ? 'text-purple-400' : 'text-sky-400';
  };

  const getHoverColor = (role: string) => {
    return role.includes('CEO') || role.includes('Diseño') ? 'hover:text-purple-300' : 'hover:text-sky-300';
  };

  return (
    <section id="equipo" className="py-20 lg:py-32 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-target">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-100">
            Conoce a Nuestro Equipo
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Las mentes creativas y técnicas detrás de nuestro éxito.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="text-center scroll-target interactive-card glass-card p-6"
              style={{ transitionDelay: member.delay ? `${member.delay}ms` : '0ms' }}
            >
              <img
                src={member.image}
                alt={`Foto de ${member.name}`}
                className={`w-32 h-32 rounded-full mx-auto mb-4 border-4 ${member.borderColor}`}
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className={`font-medium mb-3 ${getRoleColor(member.role)}`}>
                {member.role}
              </p>
              <div className="flex justify-center space-x-4 text-slate-400">
                {member.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    className={getHoverColor(member.role)}
                    aria-label={`${member.name} en ${link.platform}`}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
