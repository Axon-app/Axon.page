import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll('.scroll-target');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);
};

export const useInteractiveCard = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.interactive-card');
    
    const handleMouseMove = (e: MouseEvent, card: Element) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const { width, height } = rect;
      const rotateX = (y / height - 0.5) * -15;
      const rotateY = (x / width - 0.5) * 15;
      (card as HTMLElement).style.transform = 
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = (card: Element) => {
      (card as HTMLElement).style.transform = 
        'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    cards.forEach((card) => {
      const mouseMoveHandler = (e: MouseEvent) => handleMouseMove(e, card);
      const mouseLeaveHandler = () => handleMouseLeave(card);
      
      card.addEventListener('mousemove', mouseMoveHandler as EventListener);
      card.addEventListener('mouseleave', mouseLeaveHandler);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
};

export const useParticleCanvas = (canvasRef: React.RefObject<HTMLCanvasElement | null>) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particlesArray = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = (Math.random() * 0.4) - 0.2;
        const directionY = (Math.random() * 0.4) - 0.2;
        const color = 'rgba(56, 189, 248, 0.5)';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance = 
            (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);
          
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx!.strokeStyle = `rgba(167, 139, 250, ${opacityValue})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [canvasRef]);
};
