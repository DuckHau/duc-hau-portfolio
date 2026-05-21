import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState('');
  const canvasRef = useRef(null);

  // 1. 🌟 NEXT-GEN SMOOTH SCROLL (LENIS ENGINE VIA CDN)
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

  // 2. 🌟 DIGITAL INTERACTION NETWORKING EFFECT (CANVAS BACKGROUND)
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

  // 3. 🌟 RADAR MOUSE LIGHTING TRACKING
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 4. 🌟 CYBER TERMINAL TYPING EFFECT
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
      
      {/* BACKGROUND GRAPH CANVAS */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-50" />

      {/* NEON AMBIENT RATIO GLOW */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(550px at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.07), transparent 85%)`
        }}
      />

      {/* STYLISH NAV BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#020617]/75 border-b border-slate-900/80 flex items-center justify-between px-8 h-20">
        <div className="text-lg font-black tracking-widest bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent hover:tracking-[0.2em] transition-all duration-500 cursor-pointer">
          //DUC_HAU_
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

      {/* HERO HEROICS */}
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

          {/* TERMINAL BOX DISPLAY */}
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
          
          {/* PROFILE DATA MATRIX */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-400 pt-2">
            <div className="bg-slate-950/40 px-4 py-3 rounded-lg border border-slate-900 hover:border-teal-500/20 hover:bg-slate-950/80 transition-all duration-300">
              <span className="text-teal-500 font-bold">CR_EMAIL //</span> phqtquin3@gmail.com
            </div>
            <div className="bg-slate-950/40 px-4 py-3 rounded-lg border border-slate-900 hover:border-teal-500/20 hover:bg-slate-950/80 transition-all duration-300">
              <span className="text-teal-500 font-bold">CR_PHONE //</span> 0703 625 820
            </div>
            <div className="bg-slate-950/40 px-4 py-3 rounded-lg border border-slate-900 hover:border-teal-500/20 hover:bg-slate-950/80 transition-all duration-300 sm:col-span-2">
              <span className="text-teal-500 font-bold">CR_GEOLOCATION //</span> District 8, Ho Chi Minh City, VN
            </div>
          </div>

          {/* CODE INTERACTIVE CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://github.com/DuckHau" target="_blank" rel="noreferrer" className="bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs tracking-widest font-bold px-6 py-3.5 rounded-lg border border-slate-800 hover:border-slate-700 hover:scale-[1.02] active:scale-95 duration-300 flex items-center gap-2 shadow-xl">
              [ GIT_HUB ]
            </a>
            <a href="#projects" className="bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-500 hover:opacity-90 text-slate-950 text-xs tracking-widest font-black px-6 py-3.5 rounded-lg hover:scale-[1.02] active:scale-95 duration-300 shadow-lg shadow-teal-500/10">
              INITIALIZE_PROJECTS ➔
            </a>
          </div>
        </div>
        
        {/* INTERACTIVE NEON FLOATING ENGINE */}
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

      {/* SKILLS ARCHITECTURE MATRIX */}
      <section id="skills" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl font-black tracking-[0.1em] mb-3 bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent uppercase">01 // CORE_COMPETENCIES</h2>
          <div className="h-[1px] w-12 bg-teal-500/60 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "LANGUAGES", desc: "TypeScript, JavaScript, C#, HTML/CSS, SQL" },
            { tag: "BACKEND_FRAMEWORKS", desc: "Node.js, NestJS, Express.js, RESTful API Engineering" },
            { tag: "DATABASES_STORE", desc: "MongoDB (Mongoose ODM), SQL Server, MySQL (Database Index Optimization)" },
            { tag: "INFRA_METHODOLOGIES", desc: "Git/GitHub, Postman, Swagger UI, MinIO Object Storage, Figma, Jira, StarUML" }
          ].map((skill, index) => (
            <div key={index} className="bg-slate-950/40 p-6 rounded-xl border border-slate-900 hover:border-teal-500/20 hover:-translate-y-1.5 transition-all duration-300 group shadow-xl backdrop-blur-sm">
              <div className="text-[10px] font-bold text-teal-400 tracking-wider mb-3 group-hover:text-cyan-300 transition-colors">
                ⚡ SYS_MODULE: 0{index + 1}
              </div>
              <h3 className="font-bold text-sm mb-4 text-slate-200 uppercase tracking-wide">{skill.tag}</h3>
              <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-900 pt-3">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRACKABLE EXPERIENCE RECORD */}
      <section id="experience" className="relative z-10 bg-slate-950/20 border-y border-slate-900 py-24 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black tracking-[0.1em] uppercase">02 // WORK_CHRONOLOGY</h2>
          </div>

          <div className="relative border-l-2 border-slate-900 pl-8 ml-2 space-y-16">
            <div className="relative group">
              <span className="absolute -left-[42px] top-1 bg-slate-950 w-4 h-4 rounded-full border border-teal-500 group-hover:bg-teal-400 transition-colors duration-300 shadow-[0_0_8px_rgba(45,212,191,0.4)]"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">Quoc Bao Company</h3>
                  <p className="text-teal-400 font-bold text-xs mt-1">Backend Developer Intern</p>
                </div>
                <span className="text-[10px] font-bold bg-slate-900 px-3 py-1.5 rounded text-slate-400 border border-slate-800 uppercase tracking-widest">
                  09/2024 - 12/2024
                </span>
              </div>
              
              <ul className="space-y-3.5 text-xs text-slate-400 pl-0 list-none">
                {[
                  "Designed and developed core Contact and Form modules using NestJS to build high-performance RESTful APIs capable of handling complex business logic safely.",
                  "Implemented centralized file storage infrastructure using MinIO Object Storage combined with optimized MongoDB schemas to manage and retrieve unstructured data efficiently.",
                  "Integrated automated API documentation using Swagger, which standardized request/response payloads and reduced dev-to-test cycle time by 25%.",
                  "Optimized API query performance through structural code enhancements and database index configurations to scale end-user experience metrics."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start hover:text-slate-200 transition-colors duration-200">
                    <span className="text-teal-500 font-bold">//</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PROJECTS SHIELD ARRAY */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-black tracking-[0.1em] uppercase">03 // KEY_PRODUCTIONS</h2>
            <p className="text-slate-500 text-xs mt-2">Filter production logs below</p>
          </div>
          
          {/* DYNAMIC NAV TABS */}
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-900">
            {['all', 'backend', 'fullstack'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`px-4 py-2 rounded text-[10px] font-bold tracking-widest transition-all duration-300 ${activeTab === tab ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-slate-200'}`}
              >
                {tab === 'all' ? 'SHOW_ALL' : tab === 'backend' ? 'PURE_BACKEND' : 'FULL_STACK'}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS LAYOUT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.title} 
              className="bg-slate-950/50 rounded-xl border border-slate-900 overflow-hidden flex flex-col hover:border-teal-500/30 hover:-translate-y-1.5 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-base text-slate-200 group-hover:text-teal-400 transition-colors line-clamp-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-bold bg-slate-900 text-teal-400 px-2 py-0.5 rounded border border-slate-800/60">{t}</span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-4">{project.desc}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-[10px] font-bold text-teal-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors tracking-wider uppercase">
                    📁 VERIFY_SOURCE ➔
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHOLASTIC & ACCOMPLISHMENTS LOGS */}
      <section className="relative z-10 bg-slate-950/20 border-t border-slate-900 py-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-base font-bold tracking-wider mb-6 text-slate-200 uppercase">
              04 // ACADEMIC_TRACKS
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-900 hover:border-teal-500/10 transition-colors">
                <span className="text-[10px] font-bold text-teal-400">10/2021 - 07/2025</span>
                <h4 className="font-bold text-slate-200 mt-2 text-sm">Ho Chi Minh City University of Foreign Studies - Information Technology (HUFLIT)</h4>
                <p className="text-xs text-slate-400 mt-1">Bachelor of Software Engineering</p>
              </div>
              <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-900 hover:border-teal-500/10 transition-colors">
                <span className="text-[10px] font-bold text-teal-400">ISSUED: 2024</span>
                <h4 className="font-bold text-slate-200 mt-2 text-sm">TOEIC 620 International English Certificate</h4>
                <p className="text-xs text-slate-400 mt-1">Issued by IIG Vietnam</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold tracking-wider mb-6 text-slate-200 uppercase">
              05 // LINGUISTIC_CAPABILITIES
            </h3>
            <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-900 h-[calc(100%-3rem)] flex items-center hover:border-teal-500/10 transition-colors">
              <p className="text-xs text-slate-400 leading-relaxed">
                Proficient in utilizing technical English systems for engineering documentation, robust codebase commenting setups, structural architectural design research workflows, and fluidly collaborating within international agile professional environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMMUTABLE TERMINAL FOOTER */}
      <footer className="relative z-10 border-t border-slate-900/60 text-center py-8 text-[10px] text-slate-600 tracking-[0.2em] uppercase">
        &copy; 2026 TIEU TRONG DUC HAU // CORE.OPTIMAL_RUN_CONFIRMED
      </footer>

    </div>
  );
}

export default App;
