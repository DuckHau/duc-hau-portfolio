import React, { useState, useEffect } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 🌟 Hiệu ứng luồng sáng đuổi theo con trỏ chuột
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dữ liệu dự án từ CV [cite: 20, 25, 29]
  const projects = [
    {
      title: "HRM System (Human Resource Management)",
      tech: ["Node.js", "NestJS", "MongoDB", "JWT", "TypeScript"],
      desc: "Phát triển kiến trúc backend mở rộng cho hệ thống quản lý nhân sự. Tích hợp xác thực bảo mật qua JWT & Guard middlewares, xây dựng các lớp validate dữ liệu nghiêm ngặt[cite: 22, 23, 24].",
      github: "https://github.com/DuckHau", // [cite: 6]
      type: "backend"
    },
    {
      title: "TechShop Electronics Mobile App API",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Postman"],
      desc: "Xây dựng hệ thống RESTful API mạnh mẽ cho ứng dụng di động thương mại điện tử. Thiết kế data model tối ưu và thực hiện kiểm thử tự động end-to-end bằng Postman[cite: 27, 28].",
      github: "https://github.com/DuckHau", // [cite: 6]
      type: "backend"
    },
    {
      title: "TechShop Electronics E-Commerce Website",
      tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
      desc: "Đóng góp vào kiến trúc full-stack, tối ưu hóa các câu lệnh truy vấn phức tạp qua Mongoose để xử lý bộ lọc sản phẩm, xác thực người dùng và quy trình thanh toán an toàn[cite: 31, 32].",
      github: "https://github.com/DuckHau", // [cite: 6]
      type: "fullstack"
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.type === activeTab);

  return (
    <div className="bg-[#0b1329] text-slate-100 min-h-screen font-sans antialiased relative overflow-hidden selection:bg-teal-500 selection:text-slate-900 scroll-smooth">
      
      {/* 🌟 EFFECT 1: Glow Spotlight Background (Luồng sáng đuổi theo chuột) */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.05), transparent 80%)`
        }}
      />

      {/* 🌟 EFFECT 2: Ambient Glowing Orbs (Các khối cầu Neon mờ ảo ở background) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-20">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-teal-500 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-cyan-500 rounded-full blur-[150px] animate-pulse duration-10000"></div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-[#0b1329]/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-mono font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            &lt;DUC HAU /&gt; {/* [cite: 1] */}
          </div>
          <nav className="flex space-x-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors duration-300 relative group py-1">
              Giới Thiệu
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="hover:text-teal-400 transition-colors duration-300 relative group py-1">
              Kỹ Năng
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#experience" className="hover:text-teal-400 transition-colors duration-300 relative group py-1">
              Kinh Nghiệm
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="hover:text-teal-400 transition-colors duration-300 relative group py-1">
              Dự Án
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="about" className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl space-y-6 transform translate-y-0 transition-all duration-700">
          
          {/* 🌟 EFFECT 3: Bouncing & Pulsing Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-wide uppercase border border-teal-500/20 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            Sẵn sàng làm việc
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            Hi, Tôi là <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              Tiêu Trọng Đức Hậu {/* [cite: 1] */}
            </span>
          </h1>

          <p className="text-xl text-slate-400 font-mono font-medium flex items-center gap-2">
            <span className="text-teal-400 animate-pulse">💻</span> Backend Developer {/* [cite: 4] */}
          </p>

          <p className="text-slate-400 leading-relaxed max-w-xl text-base">
            Tốt nghiệp chuyên ngành Kỹ thuật Phần mềm, chuyên sâu về phát triển hệ thống Backend[cite: 7]. Có kinh nghiệm thực chiến trong việc xây dựng, tối ưu hóa các RESTful API hiệu năng cao bằng <span className="text-teal-400 font-semibold">Node.js, NestJS, và TypeScript</span>[cite: 7]. Đã từng quản lý cơ sở dữ liệu quy mô lớn và tích hợp giải pháp lưu trữ hiện đại trong kỳ thực tập[cite: 8].
          </p>
          
          {/* CONTACT INFO */}
          <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-400">
            <div className="flex items-center gap-2 bg-slate-800/30 px-4 py-2 rounded-xl border border-slate-700/30 hover:border-teal-500/30 hover:bg-slate-800/60 transition-all duration-300">
              <span>📧</span> phqtquin3@gmail.com {/* [cite: 2] */}
            </div>
            <div className="flex items-center gap-2 bg-slate-800/30 px-4 py-2 rounded-xl border border-slate-700/30 hover:border-teal-500/30 hover:bg-slate-800/60 transition-all duration-300">
              <span>📞</span> 0703 625 820 {/* [cite: 2] */}
            </div>
            <div className="flex items-center gap-2 bg-slate-800/30 px-4 py-2 rounded-xl border border-slate-700/30 hover:border-teal-500/30 hover:bg-slate-800/60 transition-all duration-300">
              <span>📍</span> Quận 8, TP. HCM {/* [cite: 5] */}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/DuckHau" target="_blank" rel="noreferrer" className="bg-slate-800/80 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl transition-all border border-slate-700 flex items-center gap-2 hover:scale-105 duration-300 shadow-xl">
              <span>🐙</span> GitHub Profile {/* [cite: 6] */}
            </a>
            <a href="#projects" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 duration-300 shadow-lg shadow-teal-500/20 flex items-center gap-2">
              Xem Dự Án ➔
            </a>
          </div>
        </div>
        
        {/* INTERACTIVE TECH FLOATING BOX */}
        <div className="hidden md:block relative animate-pulse duration-4000">
          <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 absolute -inset-4 blur-2xl"></div>
          <div className="w-64 h-64 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center p-8 text-center space-y-4 shadow-2xl relative z-10 hover:border-teal-500/40 hover:scale-105 transition-all duration-500 group">
            <div className="text-5xl group-hover:rotate-12 transition-transform duration-300">⚡</div>
            <div className="font-mono text-teal-400 text-lg font-bold tracking-wider">&lt;BACKEND&gt;</div>
            <div className="text-xs text-slate-400 font-mono space-y-1">
              <p className="bg-slate-800/60 px-2 py-0.5 rounded">Node.js • NestJS</p>
              <p className="bg-slate-800/60 px-2 py-0.5 rounded">TypeScript</p>
              <p className="bg-slate-800/60 px-2 py-0.5 rounded">MongoDB • SQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE COMPETENCIES (SKILLS) */}
      <section id="skills" className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Năng Lực Cốt Lõi</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full animate-width"></div>
        </div>
        
        {/* 🌟 EFFECT 4: Smooth Hover Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Skill 1 */}
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 hover:border-teal-500/40 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-slate-900 transition-all duration-300 font-bold">
              📝
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-200">Ngôn Ngữ</h3>
            <p className="text-sm text-slate-400 leading-relaxed">TypeScript, JavaScript, C#, HTML/CSS, SQL [cite: 11]</p>
          </div>

          {/* Skill 2 */}
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all duration-300 font-bold">
              ⚙️
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-200">Backend Frameworks</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Node.js, NestJS, Express.js, RESTful API [cite: 11]</p>
          </div>

          {/* Skill 3 */}
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-slate-900 transition-all duration-300 font-bold">
              🗄️
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-200">Cơ Sở Dữ Liệu</h3>
            <p className="text-sm text-slate-400 leading-relaxed">MongoDB (Mongoose ODM), SQL Server, MySQL (Tối ưu hóa Index) [cite: 11]</p>
          </div>

          {/* Skill 4 */}
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 hover:border-purple-500/40 hover:-translate-y-2 transition-all duration-300 group shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-slate-900 transition-all duration-300 font-bold">
              🛠️
            </div>
            <h3 className="font-bold text-lg mb-2 text-slate-200">Công Cụ</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Git/GitHub, Postman, Swagger, MinIO Storage, Figma, Jira [cite: 11]</p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section id="experience" className="relative z-10 bg-slate-950/20 border-y border-slate-800/50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
              💼 Kinh Nghiệm Làm Việc
            </h2>
          </div>

          {/* 🌟 EFFECT 5: Modern Indicator Timeline */}
          <div className="relative border-l-2 border-slate-800 pl-6 ml-4 space-y-12">
            <div className="relative group">
              {/* Timeline Point với hiệu ứng radar phát sáng nhẹ */}
              <span className="absolute -left-[33px] top-1 bg-teal-400 w-4 h-4 rounded-full ring-4 ring-teal-500/20 group-hover:scale-120 transition-transform duration-300"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-teal-400 transition-colors duration-300">Quoc Bao Company [cite: 13]</h3>
                  <p className="text-teal-400 font-mono font-medium text-sm">Backend Developer Intern [cite: 13]</p>
                </div>
                <span className="text-xs font-mono bg-slate-800 px-3 py-1 rounded-full text-slate-400 border border-slate-700/60 self-start sm:self-center">
                  09/2024 - 12/2024 [cite: 14]
                </span>
              </div>
              
              <ul className="space-y-3 text-slate-400 text-sm list-none pl-0">
                {[
                  "Thiết kế và phát triển các module cốt lõi Contact & Form bằng NestJS tạo ra RESTful API hiệu năng cao[cite: 15].",
                  "Triển khai hạ tầng lưu trữ tập trung qua MinIO Object Storage & tối ưu schema MongoDB[cite: 16].",
                  "Tích hợp tài liệu tự động Swagger, chuẩn hóa payload giúp giảm 25% chu kỳ dev-to-test[cite: 17].",
                  "Cải tiến cấu trúc mã nguồn và database index cấu hình giúp tối ưu hóa tốc độ truy vấn API[cite: 18]."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start hover:text-slate-200 transition-colors duration-200">
                    <span className="text-teal-400 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KEY PROJECTS */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Dự Án Tiêu Biểu</h2>
            <p className="text-slate-400">Các kiến trúc hệ thống backend thực tế tôi đã xây dựng</p>
          </div>
          
          {/* Tabs Filter Buttons */}
          <div className="flex bg-slate-900/90 p-1 rounded-xl border border-slate-800 self-start">
            {['all', 'backend', 'fullstack'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${activeTab === tab ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold shadow-md scale-105' : 'text-slate-400 hover:text-slate-200'}`}
              >
                {tab === 'all' ? 'Tất cả' : tab === 'backend' ? 'Pure Backend' : 'Full-Stack'}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID DISPLAY */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {filteredProjects.map((project) => (
            <div 
              key={project.title} 
              className="bg-slate-900/50 rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col hover:border-teal-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/10 transition-all duration-300 group"
            >
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-slate-200 group-hover:text-teal-400 transition-colors duration-300 line-clamp-1">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono bg-slate-800 text-teal-400 px-2 py-0.5 rounded border border-slate-700/40">{t}</span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pt-1 line-clamp-4">{project.desc}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-xs font-mono text-teal-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors group/link">
                    <span>🐙</span> Link Github ➔
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION & LANGUAGE ACCOMPLISHMENTS */}
      <section className="relative z-10 bg-slate-950/20 border-t border-slate-800/60 py-16">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-200 flex items-center gap-2">
              🎓 Học Vấn & Chứng Chỉ
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 hover:border-teal-500/20 transition-all duration-300">
                <span className="text-xs font-mono text-teal-400">10/2021 - 07/2025 [cite: 36]</span>
                <h4 className="font-bold text-slate-200 mt-1">Đại học Ngoại ngữ - Tin học TP.HCM (HUFLIT) [cite: 33]</h4>
                <p className="text-sm text-slate-400">Cử nhân Kỹ thuật Phần mềm [cite: 34]</p>
              </div>
              <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 hover:border-teal-500/20 transition-all duration-300">
                <span className="text-xs font-mono text-teal-400">Năm cấp: 2024 [cite: 37]</span>
                <h4 className="font-bold text-slate-200 mt-1">Chứng chỉ Tiếng Anh TOEIC 620 [cite: 35]</h4>
                <p className="text-sm text-slate-400">Cấp bởi Tổ chức IIG Việt Nam [cite: 35]</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-200 flex items-center gap-2">
              🏅 Khả Năng Ngoại Ngữ
            </h3>
            <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 h-[calc(100%-3.5rem)] flex items-center hover:border-teal-500/20 transition-all duration-300">
              <p className="text-slate-400 text-sm leading-relaxed">
                Thành thạo trong việc nghiên cứu tài liệu kỹ thuật bằng <strong className="text-teal-400">Tiếng Anh</strong>, ghi chú thích mã nguồn rõ ràng, nghiên cứu các mô hình thiết kế cấu trúc hệ thống (architecture design research) và phối hợp nhịp nhàng trong môi trường làm việc quốc tế chuyên nghiệp[cite: 38].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/80 text-center py-8 text-xs text-slate-500 font-mono">
        &copy; 2026 Designed & Built by Tieu Trong Duc Hau. Pure React & Tailwind CSS.
      </footer>

    </div>
  );
}

export default App;
