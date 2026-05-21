import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // 📝 CONFIGURATION AREA: THAY LINK THẬT CỦA BẠN VÀO ĐÂY
  const myEmail = "phqtquin3@gmail.com";
  const myLinkedInUrl = "www.linkedin.com/in/duckhau"; 
  const githubProfileUrl = "https://github.com/DuckHau";
  const hrmProjectUrl = "https://github.com/DuckHau/hrm-system"; 
  const mobileApiProjectUrl = "https://github.com/DuckHau/AppTechShop"; 
  const webProjectUrl = "https://github.com/DuckHau/TechShop"; 

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js';
    script.async = true;
    script.onload = () => {
      const Lenis = window.Lenis;
      if (Lenis) {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
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
    const particleCount = 60;
     
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(20, 184, 166, 0.3)';
      ctx.strokeStyle = 'rgba(20, 184, 166, 0.05)';

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
          if (dist < 120) {
            ctx.lineWidth = (120 - dist) / 120 * 0.5;
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

  const projects = [
    {
      title: "HRM System (Human Resource Management)",
      tech: ["Node.js", "NestJS", "MongoDB", "JWT", "TypeScript"],
      desc: "Architected a scalable backend infrastructure for an enterprise-level HRM system featuring comprehensive personnel management. Integrated secure authentication and session management using JWT and custom Guard middlewares to lock down sensitive system endpoints. Enforced strict data validation using TypeScript data transfer layers.",
      github: hrmProjectUrl,
      type: "backend"
    },
    {
      title: "TechShop Electronics Mobile App API",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Postman"],
      desc: "Engineered a robust RESTful API framework tailored for e-commerce mobile configurations. Designed highly optimized data schemas via Mongoose ODM to fluidly process expansive product catalogs. Conducted complete end-to-end automated functional testing using Postman to secure zero-error production deployment.",
      github: mobileApiProjectUrl,
      type: "backend"
    },
    {
      title: "TechShop Electronics E-Commerce Website",
      tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
      desc: "Contributed directly to the core full-stack system layout and developed modular backend microservices to govern dynamic multi-parameter filtering, robust customer profile verification pipelines, and secure transactional checkout workflows. Cleared performance thresholds via systematic query turning.",
      github: webProjectUrl,
      type: "fullstack"
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.type === activeTab);

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen font-sans antialiased relative overflow-x-hidden selection:bg-teal-500 selection:text-slate-900">
      
      
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" />

      {/* GLOW SPOTLIGHT EFFECT */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.08), transparent 85%)`
        }}
      />

    
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#030712]/70 border-b border-slate-900 flex items-center justify-between px-6 h-20 transition-all">
        <div className="text-xl font-mono font-black tracking-widest bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
          &lt;DUC HAU /&gt;
        </div>
        <nav className="flex space-x-8 text-xs uppercase tracking-widest font-semibold text-slate-400">
          {['About', 'Skills', 'Experience', 'Projects'].map((item, i) => (
            <a 
              key={i} 
              href={`#${['about', 'skills', 'experience', 'projects'][i]}`} 
              className="hover:text-teal-400 transition-colors duration-300 relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </header>

     
      <section id="about" className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-20 md:pt-40 md:pb-32 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="max-w-2xl space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-teal-500/5 text-teal-400 text-xs font-mono tracking-widest border border-teal-500/30 shadow-inner shadow-teal-500/10">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            SYSTEM.STATUS: ACTIVE
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            HELLO, I AM <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(20,184,166,0.2)]">
              TIÊU TRỌNG ĐỨC HẬU
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 font-mono font-light tracking-wide flex items-center gap-3">
            <span className="text-teal-400 animate-pulse">&gt;&gt;</span> BACKEND DEVELOPER
          </p>

          <p className="text-slate-400 leading-relaxed max-w-xl text-base md:text-lg border-l-2 border-slate-800 pl-4">
            A Software Engineering graduate specializing in Backend Development with hands-on experience in building and optimizing high-performance RESTful APIs using <span className="text-teal-400 font-bold">Node.js, NestJS, and TypeScript</span>. Possesses a proven capability in managing large-scale database interactions and integrating modern unstructured storage solutions natively during industry tracks.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-400 pt-2">
            <a href={`mailto:${myEmail}`} className="flex items-center gap-3 bg-slate-900/30 px-4 py-3 rounded-xl border border-slate-800/60 hover:border-teal-500/30 hover:bg-slate-900/60 transition-all duration-300">
              <span className="text-teal-500">📥 EMAIL:</span> {myEmail}
            </a>
            <a href={myLinkedInUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-slate-900/30 px-4 py-3 rounded-xl border border-slate-800/60 hover:border-teal-500/30 hover:bg-slate-900/60 transition-all duration-300">
              <span className="text-teal-500">🔗 LINKEDIN:</span> Profile
            </a>
            <div className="flex items-center gap-3 bg-slate-900/30 px-4 py-3 rounded-xl border border-slate-800/60 hover:border-teal-500/30 hover:bg-slate-900/60 transition-all duration-300">
              <span className="text-teal-500">📞 PHONE:</span> 0703 625 820
            </div>
            <div className="flex items-center gap-3 bg-slate-900/30 px-4 py-3 rounded-xl border border-slate-800/60 hover:border-teal-500/30 hover:bg-slate-900/60 transition-all duration-300">
              <span className="text-teal-500">📍 LOCATION:</span> District 8, Ho Chi Minh City, VN
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a href={githubProfileUrl} target="_blank" rel="noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs tracking-widest px-6 py-4 rounded-xl transition-all border border-slate-800 hover:border-slate-700 flex items-center gap-2 hover:scale-[1.02] active:scale-95 duration-300 shadow-xl">
              <span>🐙</span> GITHUB_PROFILE
            </a>
            <a href="#projects" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-mono text-xs tracking-widest font-black px-6 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-95 duration-300 shadow-lg shadow-teal-500/10 flex items-center gap-2">
              RUN_PROJECTS ➔
            </a>
          </div>
        </div>
        

        <div className="hidden md:block relative group">
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-500 absolute -inset-1 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="w-72 h-72 rounded-2xl bg-[#050b18]/95 border border-slate-800/80 flex flex-col items-center justify-center p-8 text-center space-y-6 shadow-2xl relative z-10 group-hover:border-teal-500/30 group-hover:scale-[1.03] transition-all duration-500">
            <div className="text-6xl filter drop-shadow-[0_0_15px_rgba(20,184,166,0.4)] animate-pulse">⚡</div>
            <div className="font-mono text-teal-400 text-base font-black tracking-widest">CORE_STACK</div>
            <div className="text-[11px] text-slate-400 font-mono space-y-1.5 w-full">
              <p className="bg-slate-900/80 py-1.5 rounded-lg border border-slate-800/50">Node.js • NestJS</p>
              <p className="bg-slate-900/80 py-1.5 rounded-lg border border-slate-800/50">TypeScript</p>
              <p className="bg-slate-900/80 py-1.5 rounded-lg border border-slate-800/50">MongoDB • SQL</p>
            </div>
          </div>
        </div>
      </section>


      <section id="skills" className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-4 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent uppercase font-mono">Core Competencies</h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "💻", title: "Languages", desc: "TypeScript, JavaScript, C#, HTML/CSS, SQL" },
            { icon: "⚙️", title: "Frameworks", desc: "Node.js, NestJS, Express.js, RESTful API Development" },
            { icon: "🗄️", title: "Databases", desc: "MongoDB (Mongoose ODM), SQL Server, MySQL (Database Index Optimization)" },
            { icon: "🛠️", title: "Tools & Infra", desc: "Git/GitHub, Postman, Swagger UI, MinIO Object Storage, Figma, Jira, StarUML" }
          ].map((skill, index) => (
            <div key={index} className="bg-[#050b18]/40 p-6 rounded-2xl border border-slate-900 hover:border-teal-500/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-cyan-500 group-hover:text-slate-950 transition-all duration-300 border border-slate-800 group-hover:border-transparent">
                {skill.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 text-slate-200 group-hover:text-teal-400 transition-colors">{skill.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-mono">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="relative z-10 bg-[#040914]/40 border-y border-slate-900 py-24 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-2 font-mono uppercase">💼 Professional Experience</h2>
          </div>

          <div className="relative border-l border-slate-800 pl-8 ml-4 space-y-16">
            <div className="relative group">
              <span className="absolute -left-[41px] top-1 bg-slate-950 w-5 h-5 rounded-full border-2 border-teal-500 group-hover:bg-teal-400 transition-colors duration-300 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-200 group-hover:text-teal-400 transition-colors duration-300">Quoc Bao Company</h3>
                  <p className="text-teal-400 font-mono font-semibold text-sm mt-1">Backend Developer Intern</p>
                </div>
                <span className="text-xs font-mono bg-slate-900 px-4 py-1.5 rounded-md text-slate-400 border border-slate-800 self-start sm:self-center uppercase tracking-wider">
                  09/2024 - 12/2024
                </span>
              </div>
              
              <ul className="space-y-4 text-slate-400 text-sm list-none pl-0 font-mono">
                {[
                  "Designed and developed core Contact and Form modules using NestJS to construct high-performance RESTful APIs capable of handling complex business logic patterns efficiently.",
                  "Deployed centralized system file storage solutions integrating MinIO Object Storage alongside optimized MongoDB models to process unstructured data objects fluidly.",
                  "Integrated automated API engineering documentation routines via Swagger, standardizing incoming request/response validation nodes and cutting dev-to-test iteration delays by 25%.",
                  "Optimized structural API routing loops and fine-tuned relational database configurations to maximize throughput metrics and general user experience responses."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start hover:text-slate-200 transition-colors duration-200">
                    <span className="text-teal-400 font-black">⚡</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-2 font-mono uppercase">Featured Productions</h2>
            <p className="text-slate-400 font-mono text-xs">A collection of custom backend systems and application architectures built natively</p>
          </div>
          
          {/* NAV FILTER TOGGLE BUTTONS */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-900 self-start">
            {['all', 'backend', 'fullstack'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`px-5 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-300 ${activeTab === tab ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md scale-105' : 'text-slate-400 hover:text-slate-200'}`}
              >
                {tab === 'all' ? 'SHOW_ALL' : tab === 'backend' ? 'PURE_BACKEND' : 'FULL_STACK'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.title} 
              className="bg-[#050b18]/40 rounded-2xl border border-slate-950 overflow-hidden flex flex-col hover:border-teal-500/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(20,184,166,0.05)] transition-all duration-300 group backdrop-blur-md"
            >
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-black text-xl text-slate-200 group-hover:text-teal-400 transition-colors duration-300 line-clamp-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono bg-slate-900 text-teal-400 px-2 py-0.5 rounded border border-slate-800/40 font-bold">{t}</span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-mono line-clamp-4">{project.desc}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-xs font-mono font-black text-teal-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors uppercase tracking-wider">
                    <span>🐙</span> REPOSITORY_LINK ➔
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#040914]/40 border-t border-slate-900 py-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-mono font-black mb-6 text-slate-200 flex items-center gap-2 uppercase tracking-wider">
              🎓 Academic Track & Certifications
            </h3>
            <div className="space-y-4 font-mono">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-900 hover:border-teal-500/10 transition-colors">
                <span className="text-xs font-bold text-teal-400">10/2021 - 07/2025</span>
                <h4 className="font-bold text-slate-200 mt-2 text-base">HUFLIT</h4>
                <p className="text-sm text-slate-400 mt-1">Bachelor of Software Engineering</p>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-900 hover:border-teal-500/10 transition-colors">
                <span className="text-xs font-bold text-teal-400">Issued: 2024</span>
                <h4 className="font-bold text-slate-200 mt-2 text-base">TOEIC 620 International</h4>
                <p className="text-sm text-slate-400 mt-1">Issued by IIG Vietnam</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-mono font-black mb-6 text-slate-200 flex items-center gap-2 uppercase tracking-wider">
              🏅 Linguistic Capabilities
            </h3>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 h-[calc(100%-3.5rem)] flex items-center hover:border-teal-500/10 transition-colors">
              <p className="text-slate-400 text-sm font-mono leading-relaxed">
                Proficient in extracting technical English engineering documentation configurations, structuring explicit code block remarks, conducting system design and application architecture analysis research, and collaborating fluidly within global engineering professional workspaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-slate-900 text-center py-8 text-xs text-slate-600 font-mono uppercase tracking-widest">
        &copy; 2026 Designed & Built by Tieu Trong Duc Hau. System status: Optimal.
      </footer>

    </div>
  );
}

export default App;
