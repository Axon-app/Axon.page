import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.opacity = '1';
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-slate-950 z-50 flex justify-center items-center transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="text-2xl md:text-4xl font-black tracking-tighter animate-pulse-custom">
        Axon<span className="gradient-text">.page</span>
      </div>
    </div>
  );
};

export default Preloader;
