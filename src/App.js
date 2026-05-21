import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('all');

  // Dữ liệu dự án từ CV của bạn
  const projects = [
    {
      title: "HRM System (Human Resource Management)",
      tech: ["Node.js", "NestJS", "MongoDB", "JWT", "TypeScript"],
      desc: "Phát triển kiến trúc backend mở rộng cho hệ thống quản lý nhân sự. Tích hợp xác thực bảo mật qua JWT & Guard middlewares, xây dựng các lớp validate dữ liệu nghiêm ngặt.",
      github: "https://github.com/DuckHau",
      type: "backend"
    },
    {
      title: "TechShop Electronics Mobile App API",
      tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Postman"],
      desc: "Xây dựng hệ thống RESTful API mạnh mẽ cho ứng dụng di động thương mại điện tử. Thiết kế data model tối ưu và thực hiện kiểm thử tự động end-to-end bằng Postman.",
      github: "https://github.com/DuckHau",
      type: "backend"
    },
    {
      title: "TechShop Electronics E-Commerce Website",
      tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
      desc: "Đóng góp vào kiến trúc full-stack, tối ưu hóa các câu lệnh truy vấn phức tạp qua Mongoose để xử lý bộ lọc sản phẩm, xác thực người dùng và quy trình thanh toán an toàn.",
      github: "https://github.com/DuckHau",
      type: "fullstack"
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.type === activeTab);

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans antialiased selection:bg-teal-500 selection:text-slate-900">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            &lt;DUC HAU /&gt;
          </div>
          <nav className="flex space-x-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">Giới Thiệu</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Kỹ Năng</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Kinh Nghiệm</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Dự Án</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold tracking-wide uppercase border border-teal-500/20">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Sẵn sàng làm việc
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, Tôi là <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Tiêu Trọng Đức Hậu</span>
          </h1>
          <p className="text-xl text-slate-400 font-medium">
            Backend Developer / Software Engineering Graduate
          </p>
          <p className="text-slate-400 leading-relaxed max-w-xl">
            Tốt nghiệp chuyên ngành Kỹ thuật Phần mềm, chuyên sâu về phát triển hệ thống Backend. Có kinh nghiệm thực chiến trong việc xây dựng, tối ưu hóa các RESTful API hiệu năng cao bằng <span className="text-teal-400">Node.js, NestJS, và TypeScript</span>. Đã từng tham gia quản lý cơ sở dữ liệu quy mô lớn và tích hợp giải pháp lưu trữ hiện đại trong kỳ thực tập thực tế.
          </p>
          
          {/* CONTACT INFO */}
          <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-400">
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
              <span>📧</span> phqtquin3@gmail.com
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
              <span>📞</span> 0703 625 820
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50">
              <span>📍</span> Quận 8, TP. Hồ Chí Minh
            </div>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/DuckHau" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl transition-all border border-slate-700 flex items-center gap-2 shadow-lg shadow-slate-950/50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48.01-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.024 2.747-1.024.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub Profile
            </a>
            <a href="#projects" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-teal-500/20">
              Xem Dự Án
            </a>
          </div>
        </div>
        
        {/* BIG TECH ICON ARTWORK */}
        <div className="hidden md:block relative">
          <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 absolute -inset-4 blur-2xl -z-10 animate-pulse"></div>
          <div className="w-64 h-64 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center p-8 text-center space-y-4 shadow-2xl">
            <span className="text-6xl animate-bounce">🚀</span>
            <div className="font-mono text-teal-400 text-lg">&lt;Backend Tech&gt;</div>
            <div className="text-xs text-slate-500 font-mono">Node.js • NestJS • TypeScript • MongoDB • SQL</div>
          </div>
        </div>
      </section>

      <hr className="border-slate-800 max-w-6xl mx-auto" />

      {/* CORE COMPETENCIES (SKILLS) */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Năng Lực Cốt Lõi</h2>
          <p className="text-slate-400">Hệ sinh thái công nghệ chuyên sâu được tích lũy qua quá trình đào tạo bài bản và thực tập thực tế.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold mb-4 group-hover:bg-teal-500 group-hover:text-slate-900 transition-all">📂</div>
            <h3 className="font-semibold text-lg mb-2 text-slate-200">Ngôn Ngữ</h3>
            <p className="text-sm text-slate-400 leading-relaxed">TypeScript, JavaScript, C#, HTML/CSS, SQL</p>
          </div>

          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-4 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all">⚙️</div>
            <h3 className="font-semibold text-lg mb-2 text-slate-200">Backend Frameworks</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Node.js, NestJS, Express.js, RESTful API</p>
          </div>

          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-4 group-hover:bg-blue-500 group-hover:text-slate-900 transition-all">🗄️</div>
            <h3 className="font-semibold text-lg mb-2 text-slate-200">Cơ Sở Dữ Liệu</h3>
            <p className="text-sm text-slate-400 leading-relaxed">MongoDB (Mongoose ODM), SQL Server, MySQL (Tối ưu hóa Database Index)</p>
          </div>

          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/80 transition-all group">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-4 group-hover:bg-purple-500 group-hover:text-slate-900 transition-all">🛠️</div>
            <h3 className="font-semibold text-lg mb-2 text-slate-200">Công Cụ & Quy Trình</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Git/GitHub, Postman, Swagger, MinIO Object Storage, Figma, Jira, StarUML</p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section id="experience" className="bg-slate-950/40 border-y border-slate-800/60 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Kinh Nghiệm Làm Việc</h2>
            <p className="text-slate-400">Hành trình làm việc thực tế tại doanh nghiệp</p>
          </div>

          <div className="relative border-l border-slate-800 pl-6 ml-4 space-y-12">
            <div className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-[31px] top-1 bg-teal-400 w-4 h-4 rounded-full border-4 border-slate-900 ring-4 ring-teal-500/10"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-200">Quoc Bao Company</h3>
                  <p className="text-teal-400 font-medium text-sm">Backend Developer Intern</p>
                </div>
                <span className="text-xs font-mono bg-slate-800 px-3 py-1 rounded-full text-slate-400 border border-slate-700 self-start sm:self-center">
                  09/2024 - 12/2024
                </span>
              </div>
              
              <ul className="space-y-3 text-slate-400 text-sm list-disc pl-4 marker:text-teal-400">
                <li>Thiết kế và phát triển các module cốt lõi như Contact và Form sử dụng <strong className="text-slate-300">NestJS</strong> để xây dựng hệ thống RESTful API hiệu năng cao xử lý các logic nghiệp vụ phức tạp.</li>
                <li>Triển khai cơ sở hạ tầng lưu trữ tệp tập trung tích hợp <strong className="text-slate-300">MinIO Object Storage</strong> kết hợp tối ưu hóa schema MongoDB giúp quản lý và truy xuất dữ liệu phi cấu trúc hiệu quả.</li>
                <li>Tích hợp tài liệu hướng dẫn API tự động với <strong className="text-slate-300">Swagger</strong>, giúp chuẩn hóa dữ liệu request/response đầu vào/đầu ra và giảm thiểu 25% chu kỳ thời gian chuyển giao giữa dev và tester.</li>
                <li>Tối ưu hóa hiệu năng truy vấn API thông qua việc cải tiến cấu trúc code và cấu hình database index nhằm nâng cao trải nghiệm người dùng cuối.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KEY PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Dự Án Tiêu Biểu</h2>
            <p className="text-slate-400">Các sản phẩm phần mềm tôi từng thiết kế kiến trúc và triển khai</p>
          </div>
          
          {/* Tabs Filter */}
          <div className="flex bg-slate-800/80 p-1 rounded-xl border border-slate-700 self-start">
            <button onClick={() => setActiveTab('all')} className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'all' ? 'bg-teal-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'}`}>Tất cả</button>
            <button onClick={() => setActiveTab('backend')} className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'backend' ? 'bg-teal-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'}`}>Pure Backend</button>
            <button onClick={() => setActiveTab('fullstack')} className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === 'fullstack' ? 'bg-teal-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'}`}>Full-Stack</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="bg-slate-800/30 rounded-2xl border border-slate-800 overflow-hidden flex flex-col hover:translate-y-[-4px] transition-all duration-300 hover:border-slate-700">
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-slate-200 line-clamp-1 group-hover:text-teal-400">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700/60">{t}</span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pt-2">{project.desc}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-xs font-medium text-teal-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors">
                    <span>🔗</span> Xem Source Code GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION & LANGUAGES */}
      <section className="bg-slate-950/40 border-t border-slate-800 py-16">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-200 flex items-center gap-2">
              <span>🎓</span> Học Vấn & Chứng Chỉ
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <span className="text-xs font-mono text-teal-400">10/2021 - 07/2025</span>
                <h4 className="font-bold text-slate-300 mt-1">Đại học Ngoại ngữ - Tin học TP.HCM (HUFLIT)</h4>
                <p className="text-sm text-slate-400">Cử nhân Kỹ thuật Phần mềm</p>
              </div>
              <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                <span className="text-xs font-mono text-teal-400">Năm cấp: 2024</span>
                <h4 className="font-bold text-slate-300 mt-1">Chứng chỉ Tiếng Anh Quốc tế TOEIC 620</h4>
                <p className="text-sm text-slate-400">Cấp bởi Tổ chức IIG Việt Nam</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-200 flex items-center gap-2">
              <span>🗣️</span> Khả Năng Ngoại Ngữ
            </h3>
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 h-[calc(100%-3.5rem)] flex items-center">
              <p className="text-slate-400 text-sm leading-relaxed">
                Thành thạo trong việc khai thác tài liệu kỹ thuật bằng <strong className="text-teal-400">Tiếng Anh</strong>, viết comment trong mã nguồn rõ ràng, nghiên cứu các mô hình thiết kế kiến trúc hệ thống (architecture design research) và giao tiếp tốt trong môi trường làm việc chuyên nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 text-center py-8 text-xs text-slate-500 font-mono">
        &copy; 2026 Designed & Built by Tieu Trong Duc Hau. Powered by React & Tailwind CSS.
      </footer>

    </div>
  );
}

export default App;
