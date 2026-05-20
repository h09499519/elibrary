import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Menu, 
  ArrowRight, 
  Smile, 
  TrendingUp, 
  Book, 
  X, 
  Target, 
  ChevronRight, 
  BookOpen, 
  User, 
  ExternalLink,
  Mail,
  Phone,
  Facebook,
  Library as LibraryIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

// MOCK DATA for Navigator (matching your HTML)
const STUDY_SPACE_DATA = [
    { genre: "Chương trình Tiên tiến", branch: "Môn Đại Cương", title: "Tài liệu học tập", author: "FBA Elite", link: "#" },
    { genre: "Chương trình Tiên tiến", branch: "Môn Chuyên Ngành", title: "Tài liệu học tập", author: "FBA Elite", link: "#" },
    { genre: "Chương trình Tiên tiến", branch: "Môn Cơ sở", title: "Tài liệu học tập", author: "FBA Elite", link: "#" },
    { genre: "Chương trình Chất lượng cao", branch: "Môn Đại Cương", title: "Tài liệu học tập", author: "FBA Elite", link: "#" },
    { genre: "Chương trình Chất lượng cao", branch: "Môn Chuyên Ngành", title: "Tài liệu học tập", author: "FBA Elite", link: "#" },
    { genre: "Chương trình Chất lượng cao", branch: "Môn Cơ Sở", title: "Tài liệu học tập", author: "FBA Elite", link: "#" },
    { genre: "Chương trình Chất lượng cao", branch: "Giáo trình 23 24", title: "Tài liệu học tập", author: "FBA Elite", link: "#" },
    { genre: "Chương trình Tiêu chuẩn", branch: "Môn Đại Cương", title: "Tài liệu học tập", author: "FBA Elite", link: "#" },
    { genre: "Chương trình Tiêu chuẩn", branch: "Môn Chuyên ngành", title: "Tài liệu học tập", author: "FBA Elite", link: "#" },
    { genre: "Chương trình Tiêu chuẩn", branch: "Môn Cơ sở", title: "Tài liệu học tập", author: "FBA Elite", link: "#" },
    { genre: "Quản trị khách sạn", branch: null, title: null, author: null, link: "#" },
];

const DEFAULT_DATA = [
    {id: "TS02", genre: "Commercial", branch: "Marketing", title: "Bí quyết làm Content Marketing hiệu quả", author: "Anh Đình Phú", link: "#"},
    {id: "TS03", genre: "Commercial", branch: "Marketing", title: "Xây dựng nội dung Fanpage hiệu quả và khác biệt", author: "Anh Đình Phú", link: "#"},
    {id: "TS12", genre: "Commercial", branch: "Kinh doanh", title: "Introduction to Business", author: "Eliter", link: "#"},
    {id: "TS18", genre: "Administration", branch: "HR", title: "Sách 200 employee engagement ideas for HR and Managers", author: "Chị Linh Bùi", link: "#"},
    {id: "TS20", genre: "Career Essens", branch: "Soft Skills", title: "Effective Communication", author: "Elite Advisor", link: "#"},
    {id: "TS21", genre: "Operation", branch: "Logistics", title: "Supply Chain Basics", author: "Manager A", link: "#"},
    {id: "TS22", genre: "Administration", branch: "Finance", title: "Corporate Finance 101", author: "Finance Mentor", link: "#"},
    {id: "TS23", genre: "Operation", branch: "Production", title: "Lean Manufacturing Guide", author: "Ops Expert", link: "#"}
];

// Helper to group data
const groupData = (items: any[]) => {
    const h: any = {};
    items.forEach(it => {
        if(!h[it.genre]) h[it.genre] = {};
        if (it.branch) {
            if(!h[it.genre][it.branch]) h[it.genre][it.branch] = [];
            h[it.genre][it.branch].push(it);
        }
    });
    return h;
};

const ELibrary: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [currentSelectedGenre, setCurrentSelectedGenre] = useState<string | null>(null);
  const [currentSelectedBranch, setCurrentSelectedBranch] = useState<string | null>(null);
  const [view, setView] = useState<'selection' | 'documents'>('selection');
  const [hierarchy, setHierarchy] = useState<any>({});

  const openNavigator = (title: string) => {
    const upperTitle = title.toUpperCase();
    setModalTitle(upperTitle);
    
    // Set dynamic data
    if (upperTitle === "ELITER'S STUDY SPACE") {
        setHierarchy(groupData(STUDY_SPACE_DATA));
    } else {
        setHierarchy(groupData(DEFAULT_DATA));
    }
    
    setIsModalOpen(true);
  };

  const closeNavigator = () => {
    setIsModalOpen(false);
    setView('selection');
    setCurrentSelectedGenre(null);
    setCurrentSelectedBranch(null);
  };

  const selectGenre = (genre: string) => {
    setCurrentSelectedGenre(genre);
    setCurrentSelectedBranch(null);
  };

  const selectBranch = (branch: string) => {
    setCurrentSelectedBranch(branch);
    setView('documents');
  };

  const backToSelection = () => {
    setView('selection');
  };

  return (
    <div className="bg-warm-white min-h-screen font-sans antialiased text-charcoal">
      {/* MAIN CONTENT */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Header Section */}
          <header className="mb-32 text-center max-w-3xl mx-auto relative group pt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10"
            />
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 0.8 }}
              className="text-accent font-bold uppercase text-xs mb-6 block"
            >
              Elite Library
            </motion.span>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-black text-primary mb-8 uppercase tracking-tighter"
            >
              E-Library
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 w-24 bg-accent mx-auto mb-10 rounded-full shadow-lg shadow-accent/20"
            />
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              Khám phá kho tàng tài liệu có chọn lọc tại <span className="text-primary font-bold">Elite Library</span>, hỗ trợ đa dạng nhu cầu phát triển tri thức và học hỏi kinh nghiệm thực tế.
            </p>
          </header>

          {/* Library Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Book Card 1 */}
            <div className="group flex flex-col bg-white rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100/50">
              <div className="relative aspect-[1/1.2] overflow-hidden rounded-t-[40px]">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Eliter's Study Space" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-20">
                  <div className="absolute top-[18px] right-[-28px] bg-[#FF4D00] text-white py-1.5 w-[140px] text-center rotate-45 text-[11px] font-black tracking-widest shadow-lg">HOT</div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 bg-[#FFF2E9] text-accent rounded-xl">Learning</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 bg-[#FFF2E9] text-accent rounded-xl">Focus</span>
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">Eliter's Study Space</h3>
                <button onClick={() => openNavigator("Eliter's Study Space")} className="mt-auto flex items-center justify-center gap-4 w-full px-8 py-5 bg-[#FFF2E9] text-accent hover:bg-accent hover:text-white text-[14px] font-black rounded-[24px] transition-all duration-300 uppercase tracking-[0.1em] shadow-xl shadow-primary/5 hover:shadow-lg">
                  <span>Khám phá</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Book Card 2 */}
            <div className="group flex flex-col bg-white rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100/50">
              <div className="relative aspect-[1/1.2] overflow-hidden rounded-t-[40px]">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600" alt="Eliter's Experience" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 bg-[#FFF2E9] text-accent rounded-xl">Life</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 bg-[#FFF2E9] text-accent rounded-xl">Sharing</span>
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">Eliter's Experience</h3>
                <Link to="/share-library" className="mt-auto flex items-center justify-center gap-4 w-full px-8 py-5 bg-[#FEF9C3] text-[#A16207] hover:bg-[#A16207] hover:text-white text-[14px] font-black rounded-[24px] transition-all duration-300 uppercase tracking-[0.1em] shadow-xl shadow-primary/5 hover:shadow-lg">
                  <span>Chia sẻ</span>
                  <Smile className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Book Card 3 */}
            <div className="group flex flex-col bg-white rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100/50">
              <div className="relative aspect-[1/1.2] overflow-hidden rounded-t-[40px]">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" alt="Eliter's Skills" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 bg-[#FFF2E9] text-accent rounded-xl">Technical</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 bg-[#FFF2E9] text-accent rounded-xl">Soft Skills</span>
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">Eliter's Skills</h3>
                <Link to="/development" className="mt-auto flex items-center justify-center gap-4 w-full px-8 py-5 bg-[#DCFCE7] text-[#15803D] hover:bg-[#15803D] hover:text-white text-[14px] font-black rounded-[24px] transition-all duration-300 uppercase tracking-[0.1em] shadow-xl shadow-primary/5 hover:shadow-lg">
                  <span>Phát triển</span>
                  <TrendingUp className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Book Card 4 */}
            <div className="group flex flex-col bg-white rounded-[40px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100/50">
              <div className="relative aspect-[1/1.2] overflow-hidden rounded-t-[40px]">
                <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=600" alt="Eliter's Book" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 bg-[#FFF2E9] text-accent rounded-xl">Wisdom</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 bg-[#FFF2E9] text-accent rounded-xl">Insight</span>
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-3 leading-tight group-hover:text-accent transition-colors">Eliter's Book</h3>
                <button onClick={() => openNavigator("Eliter's Book")} className="mt-auto flex items-center justify-center gap-4 w-full px-8 py-5 bg-[#F3E8FF] text-[#7E22CE] hover:bg-[#7E22CE] hover:text-white text-[14px] font-black rounded-[24px] transition-all duration-300 uppercase tracking-[0.1em] shadow-xl shadow-primary/5 hover:shadow-lg">
                  <span>Lật sách</span>
                  <Book className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* NAVIGATOR MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FDFCFB]/98 backdrop-blur-3xl p-4 md:p-8 overflow-hidden"
          >
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="absolute top-8 right-8 z-[110]">
              <button onClick={closeNavigator} className="p-4 bg-primary/5 hover:bg-accent rounded-full transition-all text-primary hover:text-white border border-primary/10 group shadow-2xl">
                <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            <div className="w-full max-w-7xl h-full flex flex-col relative z-[105]">
              {view === 'selection' ? (
                <div className="flex-1 flex flex-col justify-center items-center h-full">
                  <div className="text-center mb-12">
                    <div className="inline-block px-6 py-2 rounded-full border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.3em] mb-6">
                      {modalTitle} EXPLORER
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-primary mb-4 tracking-tighter leading-tight uppercase">
                      PHÂN LOẠI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40">TÀI LIỆU</span>
                    </h1>
                    <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">Chọn một danh mục chính để khám phá các nhánh tài liệu tương ứng.</p>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8 w-full items-stretch justify-center max-h-[65vh] overflow-hidden">
                    {/* Genres List */}
                    <div className="flex flex-col gap-4 w-full lg:w-1/3">
                      <div className="text-primary/30 text-xs font-black uppercase tracking-widest mb-2 px-2">
                        {modalTitle === "ELITER'S STUDY SPACE" ? "CHỌN CHƯƠNG TRÌNH" : "CHỌN THỂ LOẠI"}
                      </div>
                      <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                        {Object.keys(hierarchy).map(genre => (
                          <button 
                            key={genre}
                            onClick={() => selectGenre(genre)}
                            className={`relative w-full text-left p-6 rounded-[24px] transition-all duration-300 border ${
                              currentSelectedGenre === genre 
                                ? "bg-accent border-accent scale-[1.02] shadow-xl shadow-accent/20" 
                                : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={`text-lg font-black tracking-tight ${currentSelectedGenre === genre ? 'text-white' : 'text-primary'}`}>{genre}</span>
                              <Target className={`w-5 h-5 ${currentSelectedGenre === genre ? 'text-white/80' : 'text-primary/20'}`} />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Branches Grid */}
                    <div className="flex-1 w-full lg:w-2/3 flex flex-col overflow-hidden">
                      <div className="text-primary/30 text-xs font-black uppercase tracking-widest mb-4 px-2">NHÁNH TÀI LIỆU</div>
                      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {currentSelectedGenre ? (
                          <>
                            {Object.keys(hierarchy[currentSelectedGenre]).length > 0 ? (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-12">
                                {Object.keys(hierarchy[currentSelectedGenre]).map((branch, idx) => (
                                  <motion.button 
                                    key={branch}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                                    onClick={() => selectBranch(branch)}
                                    className="group p-6 bg-white border border-gray-100 rounded-[32px] text-primary text-left hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-xl"
                                  >
                                    <div className="flex flex-col h-full justify-between gap-6">
                                      <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                                        <ChevronRight className="w-5 h-5 text-accent group-hover:text-white" />
                                      </div>
                                      <span className="text-xl font-black leading-tight">{branch}</span>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            ) : (
                              <div className="h-full flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-[40px] p-20">
                                <Smile className="w-16 h-16 mb-4 text-accent/20" />
                                <p className="text-xl font-black uppercase tracking-widest text-center">Tạm thời chưa có nhánh nào</p>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="h-full flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-[40px] p-20">
                            <ArrowRight className="w-16 h-16 mb-4 xl:rotate-0 rotate-90" />
                            <p className="text-xl font-black uppercase tracking-widest text-center">
                                Chọn một {modalTitle === "ELITER'S STUDY SPACE" ? "chương trình" : "thể loại"} phía bên trái
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col h-full overflow-hidden">
                  <div className="flex items-center justify-between mb-16 px-4">
                    <button onClick={backToSelection} className="flex items-center gap-4 px-10 py-5 bg-gray-100 hover:bg-accent text-primary hover:text-white rounded-[24px] font-black text-lg transition-all border border-gray-200 group shadow-lg">
                      <ArrowRight className="w-6 h-6 group-hover:-translate-x-1 transition-transform rotate-180" />
                      <span>QUAY LẠI</span>
                    </button>
                    <div className="text-right">
                      <div className="text-accent font-black text-sm uppercase tracking-[0.4em] mb-2">{currentSelectedGenre}</div>
                      <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tighter">{currentSelectedBranch}</h2>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto pr-6 custom-scrollbar pb-20 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                      {currentSelectedGenre && currentSelectedBranch && hierarchy[currentSelectedGenre][currentSelectedBranch].map((doc: any) => (
                        <div key={doc.id} className="group bg-white rounded-[48px] p-10 flex flex-col justify-between hover:translate-y-[-10px] transition-all duration-500 shadow-2xl border-b-[12px] border-transparent hover:border-accent">
                          <div>
                            <div className="flex justify-between items-start mb-8">
                              <div className="w-16 h-16 bg-blue-50 rounded-[20px] flex items-center justify-center text-primary">
                                <BookOpen className="w-8 h-8" />
                              </div>
                              <div className="px-5 py-2 bg-gray-50 rounded-full text-[10px] font-black text-gray-600 uppercase tracking-widest border border-gray-100">
                                {doc.id}
                              </div>
                            </div>
                            <h3 className="text-3xl font-black text-primary mb-4 leading-[1.1] group-hover:text-accent transition-colors line-clamp-2">{doc.title}</h3>
                            <div className="flex items-center gap-3 text-gray-600 font-bold mb-10">
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-600" />
                              </div>
                              <span className="text-sm tracking-tight">{doc.author}</span>
                            </div>
                          </div>
                          <a href={doc.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 w-full py-6 bg-primary text-white rounded-[24px] font-black text-xl hover:bg-accent transition-all shadow-2xl active:scale-95">
                            <span>TRUY CẬP</span>
                            <ExternalLink className="w-6 h-6" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-primary text-white py-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase text-accent tracking-[0.2em] mb-6 flex items-center">
              <span className="w-8 h-px bg-accent mr-3"></span> [GUIDE]
            </h3>
            <p className="text-gray-300 font-medium mb-6">Hãy liên lạc với chúng tớ qua:</p>
            <div className="space-y-5">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-white/5 p-2.5 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white">Email: vanntt61.fbaelite@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-white/5 p-2.5 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white">Phone: 0359756996</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-accent p-2.5 rounded-full shadow-lg shadow-accent/20">
                  <Facebook className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-gray-300 font-medium hover:text-accent font-bold">FB: thao.van.592368</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-black uppercase text-accent tracking-[0.2em] mb-6 flex items-center">
                <span className="w-8 h-px bg-accent mr-3"></span> [LƯU TRỮ]
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold text-gray-300">Sách</span>
                <span className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold text-gray-300">Khóa học</span>
                <span className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold text-gray-300">Tạp chí</span>
                <span className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold text-gray-300">Tài liệu</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase text-accent tracking-[0.2em] mb-6 flex items-center">
                <span className="w-8 h-px bg-accent mr-3"></span> [ĐÓNG GÓP]
              </h3>
              <a href="#" className="text-gray-200 hover:text-accent font-bold text-lg block group">
                Form gửi tài liệu vào Elite Library
                <LibraryIcon className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            </div>
          </div>

          {/* Team Branding */}
          <div className="flex flex-col items-center justify-center text-center space-y-10">
            <div className="w-64 p-4 bg-white/5 rounded-[32px] border border-white/10 hover:border-accent/30 transition-all duration-500">
              <img src="/anh home/logotrang.png" alt="FBA Elite Logo" className="w-full h-auto object-contain" />
            </div>
            <div className="space-y-3">
              <p className="text-white/40 font-black tracking-[0.3em] uppercase text-[10px]">A product by</p>
              <p className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-none">
                L&D Team - <span className="text-accent underline decoration-2 underline-offset-8">FBA Elite</span>
              </p>
              <p className="text-accent font-black text-xs tracking-[0.4em] mt-4">TERM XII</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 ELITE LIBRARY • CRAFTED WITH PASSION BY ELITERS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ELibrary;
