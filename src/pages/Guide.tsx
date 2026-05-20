import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, MessageCircle, Sparkles, Heart, Smile, Star, PartyPopper, PawPrint } from 'lucide-react';

const guideImages = [
  { id: 1, src: '/anh%20guide/gl1.png', title: 'Khám phá Giao diện' },
  { id: 2, src: '/anh%20guide/gl2.png', title: 'Tìm kiếm Tài liệu' },
  { id: 3, src: '/anh%20guide/gl3.png', title: 'Truy cập\nE-Library' },
  { id: 4, src: '/anh%20guide/gl4.png', title: 'Học tập với\nE-Learning' },
  { id: 5, src: '/anh%20guide/gl5.png', title: 'Đọc Tạp chí Số' },
  { id: 6, src: '/anh%20guide/gl6.png', title: 'Hỗ trợ & Đóng góp' },
];

const FloatingIcon = ({ children, className, delay = 0, duration = 3 }: { children: React.ReactNode, className?: string, delay?: number, duration?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-15, 15, -15], rotate: [-10, 10, -10] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute pointer-events-none opacity-40 ${className}`}
  >
    {children}
  </motion.div>
);

export default function Guide() {
  return (
    <div className="py-20 bg-warm-white dark:bg-primary min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="mb-32 text-center max-w-3xl mx-auto relative">
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
            elite library
          </motion.span>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black text-primary dark:text-white mb-8 uppercase tracking-tighter"
          >
            Guide
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 w-24 bg-accent mx-auto mb-8"
          />
          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
            Hướng dẫn chi tiết từng bước để bạn khám phá trọn vẹn <span className="text-primary dark:text-accent font-bold">Elite Library</span>.
          </p>
        </header>

        {/* Guide Images Section */}
        <section className="relative">
          <div className="space-y-40 relative">
            {guideImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-16 lg:gap-24`}
              >
                <div className="w-full lg:w-3/5 relative">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="relative z-10 overflow-hidden rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(11,45,77,0.2)] bg-white dark:bg-slate-800 border border-gray-100 dark:border-white/5 p-3"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-auto rounded-[2.5rem] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className={`absolute -z-10 w-full h-full top-10 ${idx % 2 === 0 ? '-left-10' : '-right-10'} bg-accent/5 rounded-[4rem] blur-2xl`} />
                </div>

                <div className="w-full lg:w-2/5 space-y-8 text-center lg:text-left">
                  <div className="inline-flex flex-col items-center lg:items-start">
                    <span className="text-accent font-black text-8xl opacity-10 leading-none mb-[-2rem] ml-[-0.5rem] select-none">
                      0{image.id}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black text-primary dark:text-white uppercase tracking-tight relative z-10 whitespace-pre-line">
                      {image.title}
                    </h3>
                  </div>
                  <div className="p-1 h-px bg-linear-to-r from-accent to-transparent w-full opacity-30" />
                  <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                    Khám phá những tính năng thông minh và tối ưu hoá quá trình tìm kiếm tri thức của bạn một cách dễ dàng và hiệu quả nhất.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cute Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 p-16 bg-primary dark:bg-slate-900 rounded-[4rem] text-white overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(11,45,77,0.4)] transition-colors duration-300"
        >
          {/* Floating Icons Background */}
          <FloatingIcon className="top-10 left-10" delay={0} duration={4}><Heart className="w-12 h-12 text-pink-300 fill-pink-300/30" /></FloatingIcon>
          <FloatingIcon className="bottom-10 left-1/4" delay={1} duration={5}><Smile className="w-10 h-10 text-yellow-300" /></FloatingIcon>
          <FloatingIcon className="top-1/4 right-1/4" delay={2} duration={6}><Star className="w-8 h-8 text-white fill-white/20" /></FloatingIcon>
          <FloatingIcon className="bottom-20 right-10" delay={0.5} duration={3}><Sparkles className="w-14 h-14 text-accent" /></FloatingIcon>
          <FloatingIcon className="top-1/2 left-20" delay={1.5} duration={4.5}><PartyPopper className="w-10 h-10 text-green-300" /></FloatingIcon>
          <FloatingIcon className="bottom-10 right-1/3" delay={2.5} duration={5.5}><PawPrint className="w-8 h-8 text-blue-300 fill-blue-300/20" /></FloatingIcon>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left space-y-6 max-w-2xl">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-cute leading-tight whitespace-nowrap text-white">
                Bạn còn thắc mắc gì khum ^^
              </h2>
              <p className="text-blue-100/70 text-xl font-medium">
                Còn gì thắc mắc thì đừng ngại liên hệ với chúng tớ nhaaa 😁
              </p>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/huyen.hoangthu.2304"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-12 py-7 bg-white dark:bg-accent text-primary dark:text-white rounded-3xl font-black hover:bg-accent hover:text-white dark:hover:bg-accent/80 transition-all duration-300 uppercase tracking-widest shadow-2xl"
            >
              <MessageCircle className="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform" /> 
              Kết nối ngay
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
