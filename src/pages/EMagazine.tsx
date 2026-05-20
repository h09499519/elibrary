/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronRight, Target, ArrowRight, X, ExternalLink } from 'lucide-react';

export default function EMagazine() {
  const magazineIssues = [
    { id: 1, number: 'Số 1', color: '#EEE888', title: 'Summer and Beer Party for Eliters', link: 'https://sites.google.com/view/elitelibraryyy/e-magazine/s%E1%BB%91-1-eee888?authuser=0' },
    { id: 2, number: 'Số 2', color: '#666666', title: 'E-Ma - Amazing adventure', link: 'https://sites.google.com/view/elitelibraryyy/e-magazine/s%E1%BB%91-2-666666?authuser=0' },
    { id: 3, number: 'Số 3', color: '#FBA189', title: 'Phỏng vấn độc quyền tân chủ tịch FBA Elite term IX', link: 'https://sites.google.com/view/elitelibraryyy/e-magazine/s%E1%BB%91-3-fba189?authuser=0' },
    { id: 4, number: 'Số 4', color: '#9E2023', title: 'X-mas is coming!!!', link: 'https://sites.google.com/view/elitelibraryyy/e-magazine/s%E1%BB%91-4-9e2023?authuser=0' },
    { id: 5, number: 'Số 5', color: '#FBA23E', title: 'Đi thật xa là để trở về', link: 'https://sites.google.com/view/elitelibraryyy/e-magazine/s%E1%BB%91-5-fba23e?authuser=0' },
    { id: 6, number: 'Số 6', color: '#EE9966', title: 'Come back and go on', link: 'https://sites.google.com/view/elitelibraryyy/e-magazine/s%E1%BB%91-6-ee9966?authuser=0' },
  ];

  return (
    <div className="py-20 animate-fade-in bg-[#f8f7f4] dark:bg-transparent min-h-screen overflow-x-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <header className="mb-32 text-center max-w-3xl mx-auto relative group">
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
            className="text-6xl md:text-8xl font-black text-primary dark:text-white mb-8 uppercase tracking-tighter"
          >
            E-Magazine
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 w-24 bg-accent mx-auto mb-8"
          />
          <p className="text-xl text-black dark:text-gray-400 leading-relaxed font-medium transition-colors">
            Nơi lưu giữ những câu chuyện, cảm xúc và những dấu ấn đặc biệt của cộng đồng Eliter qua từng trang nội san.
          </p>
        </header>

        <div className="mb-20">
          <div className="relative overflow-hidden rounded-[50px] group shadow-2xl border-[12px] border-white dark:border-slate-800 bg-gray-100 dark:bg-slate-800">
            <img 
              src="./anh mag/magbia.png" 
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" 
              alt="Elite Magazine Cover" 
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-center justify-center p-8 md:p-16 z-20 overflow-y-auto">
              <div className="max-w-4xl text-center space-y-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
                  <span className="text-accent font-black">Elite Magazine - Nội san Elite</span> ra mắt ngày <span className="font-bold underline decoration-accent/50 decoration-4">31/07/2022</span>, phát hành định kỳ vào mỗi cuối tháng, được sáng lập và thực hiện bởi ban <span className="font-bold text-white">Nhân Sự - FBA Elite nhiệm kỳ VIII</span>. Ra đời với mục đích gắn kết các thế hệ Eliters, tạo cơ hội để các thành viên bày tỏ tâm tư, tình cảm, suy nghĩ hoặc thể hiện khả năng văn chương của mình. Elite Magazine hứa hẹn sẽ là nơi cung cấp những thông tin mới lạ dưới nhiều góc nhìn đa dạng, là nơi phơi bày "góc khuất" thú vị trong quá trình cùng nhau hoạt động dưới mái nhà E, hay chỉ đơn giản là nơi để các bạn trút bầu tâm sự và tìm kiếm một tâm hồn đồng điệu. Đặc biệt, được chắp bút và hoàn thiện bởi chính các Eliters, vậy nên Elite Magazine sẽ chính là tiếng nói mang đậm phong cách cá nhân của từng thành viên FBA Elite.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 mb-20 text-center">
          <h2 className="text-7xl md:text-9xl font-black text-primary dark:text-white/20 uppercase tracking-tighter opacity-100 dark:opacity-40 select-none mb-12" style={{ fontFamily: 'Georgia, serif' }}>MỤC LỤC</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {magazineIssues.map((issue) => (
                <motion.div
                    key={issue.id}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onClick={() => window.open(issue.link, '_blank')}
                    className="cursor-pointer group relative bg-white dark:bg-slate-800 p-10 rounded-[48px] shadow-xl border border-gray-100 dark:border-white/5 transition-all overflow-hidden flex flex-col h-full items-center justify-center text-center"
                >
                    <div 
                        className="absolute top-0 left-0 w-2 h-full opacity-80 group-hover:w-full group-hover:opacity-10 transition-all duration-500"
                        style={{ backgroundColor: issue.color }}
                    />
                    <div className="relative z-10 flex flex-col items-center justify-center w-full">
                        <div className="mb-6">
                            <span 
                                className="inline-block px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
                                style={{ backgroundColor: issue.color + '33', color: issue.color }}
                            >
                                {issue.number}
                            </span>
                        </div>
                        <h3 className={`w-full text-xl md:text-2xl font-black text-primary dark:text-white leading-relaxed uppercase group-hover:text-accent transition-colors flex items-center justify-center min-h-[5rem] lg:min-h-[6rem] px-2 ${ (issue.id === 5 || issue.id === 6) ? 'whitespace-nowrap' : '' }`}>
                            {issue.title}
                        </h3>
                        <div className="mt-8 flex items-center gap-3 text-gray-700 dark:text-gray-200 group-hover:text-accent transition-colors">
                            <span className="text-xs font-black uppercase tracking-widest">Đọc ngay</span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

