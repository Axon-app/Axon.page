import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Sobre Nosotros' },
    { href: '#portafolio', label: 'Portafolio' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#blog', label: 'Blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-950/80 backdrop-blur-sm' : ''
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter">
            Axon<span className="gradient-text">.page</span>
          </a>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-sky-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg transition-transform hover:scale-105"
            >
              Hablemos
            </a>
          </nav>
          
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-950/95 z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-2xl text-slate-300 hover:text-sky-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={closeMenu}
              className="mt-6 text-2xl bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg"
            >
              Hablemos
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
