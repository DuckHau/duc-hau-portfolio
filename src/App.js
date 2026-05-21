import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js';
    script.async = true;
    script.onload = () => {
      const Lenis = window.Lenis;
      if (Lenis) {
        const lenis = new Lenis({
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          smooth: true,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 75;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(45, 212, 191, 0.25)';
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.03)';

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.lineWidth = (130 - dist) / 130 * 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const message = "Initialize system... Loading credentials... Stack connected.";
    let index = 0;
    const interval = setInterval(() => {
      setTerminalText((prev) => prev + message.charAt(index));
      index++;
      if (index >= message.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "HRM System (Human Resource Management)",
      tech: ["Node.js", "NestJS", "MongoDB", "JWT", "TypeScript"],
      desc: "Architected a scalable backend system for comprehensive personnel record management. Engineered bulletproof authentication layers using JWT and robust custom Guard middlewares to secure sensitive endpoints. Implemented strict type validation pipelines.",
      github: "https://github.com/DuckHau",
      type: "backend"
    },
    {
      title: "TechShop Electronics Mobile App API",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Postman"],
      desc: "Engineered a high-throughput RESTful API framework tailored for e-commerce traffic. Designed complex product data structures via Mongoose ODM and conducted complete automated end-to-end testing cycles using Postman to lock down integration integrity.",
      github: "https://github.com/DuckHau",
      type: "backend"
    },
    {
      title: "TechShop Electronics E-Commerce Website",
      tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
      desc: "Contributed to the structural full-stack engineering, crafting robust APIs to navigate product matrix filtering, continuous authentication sessions, and transaction processing. Leveraged advanced query tuning to clear data processing bottlenecks.",
      github: "https://github.com/DuckHau",
      type: "fullstack"
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.type === activeTab);

  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen font-mono antialiased relative overflow-x-hidden selection:bg-teal-500 selection:text-slate-900">
      
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-50" />

      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(550px at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.07), transparent 85%)`
        }}
      />

      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#020617]/75 border-b border-slate-900/80 flex items-center justify-between px-8 h-20">
        <div className="text-lg font-black tracking-widest bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent hover:tracking-[0.2em] transition-all duration-500 cursor-pointer">
          &lt;DUC HAU /&gt;
        </div>
        <nav className="hidden md:flex space-x-8 text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400">
          {['About', 'Skills', 'Experience', 'Projects'].map((item, i) => (
            <a 
              key={i} 
              href={`#${['about', 'skills', 'experience', 'projects'][i]}`} 
              className="hover:text-teal-400 transition-colors duration-300 relative py-1 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </header>

      <section id="about" className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-32 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl space-y-6">
          
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded bg-teal-500/5 text-teal-400 text-[10px] tracking-[0.2em] font-bold border border-teal-500/20 shadow-lg shadow-teal-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            SYS.STATUS: DISPATCH_READY
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-slate-100">
            ENGINEERING <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(45,212,191,0.15)]">
              HIGH_PERF_BACKEND
            </span>
          </h1>

          <div className="bg-slate-950/80 border border-slate-900 rounded-lg p-4 text-xs font-mono text-slate-400 max-w-lg shadow-2xl relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-teal-500/20 before:to-transparent">
            <div className="flex gap-1.5 pb-2 mb-2 border-b border-slate-900/60">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
            <p className="text-teal-400/90 font-bold mb-1">root@tieu-trong-duc-hau:~$ <span className="text-slate-300 font-normal">{terminalText}</span><span className="animate-ping">|</span></p>
          </div>

          <p className="text-slate-400 leading-relaxed max-w-xl text-sm md:text-base border-l border-slate-800 pl-4">
            A Software Engineering graduate specializing in Backend Development with hands-on experience building and optimizing low-latency RESTful APIs using <strong className="text-teal-400">Node.js, NestJS, and TypeScript</strong>. Proven capability in managing large-scale database interactions and deploying unstructured object storage solutions natively during intensive industry tracks.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-400 pt-2">
            <div className="bg-slate-950/40 px-4 py-3 rounded-lg border border-slate-900 hover:border-teal-500/20 hover:bg-slate-950/80 transition-all duration-300">
              <span className="text-teal-500 font-bold">EMAIL //</span> phqtquin3@gmail.com
            </div>
            <div className="bg-slate-950/40 px-4 py-3 rounded-lg border border-slate-900 hover:border-teal-500/20 hover:bg-slate-950/80 transition-all duration-300">
              <span className="text-teal-500 font-bold">PHONE //</span> 0703 625 820
            </div>
            <div className="bg-slate-950/40 px-4 py-3 rounded-lg border border-slate-900 hover:border-teal-500/20 hover:bg-slate-950/80 transition-all duration-300 sm:col-span-2">
              <span className="text-teal-500 font-bold">GEOLOCATION //</span> District 8, Ho Chi Minh City, VN
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://github.com/DuckHau" target="_blank" rel="noreferrer" className="bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs tracking-widest font-bold px-6 py-3.5 rounded-lg border border-slate-800 hover:border-slate-700 hover:scale-[1.02] active:scale-95 duration-300 flex items-center gap-2 shadow-xl">
              [ GIT_HUB ]
            </a>
            <a href="#projects" className="bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 hover:opacity-90 text-slate-950 text-xs tracking-widest font-black px-6 py-3.5 rounded-lg hover:scale-[1.02] active:scale-95 duration-300 shadow-lg shadow-teal-500/10">
              INITIALIZE_PROJECTS ➔
            </a>
          </div>
        </div>
        
        <div className="hidden md:block relative group">
          <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 absolute -inset-0.5 blur opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
          <div className="w-72 h-72 rounded-xl bg-slate-950 border border-slate-900 flex flex-col items-center justify-center p-8 text-center space-y-6 shadow-2xl relative z-10 group-hover:border-teal-500/30 group-hover:scale-[1.01] transition-all duration-500">
            <div className="text-4xl filter drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]">⚙️</div>
            <div className="text-xs font-bold text-teal-400 tracking-[0.25em] uppercase">SYSTEM_ARCH</div>
            <div className="text-[10px] text-slate-400 space-y-1 w-full font-mono">
              <p className="bg-slate-900/50 py-1.5 rounded border border-slate-900">Node.js // NestJS</p>
              <p className="bg-slate-900/50 py-1.5 rounded border border-slate-900">TypeScript / C#</p>
              <p className="bg-slate-900/50 py-1.5 rounded border border-slate-900">MongoDB // Relational Indexing</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 max-w-6xl mx-auto
