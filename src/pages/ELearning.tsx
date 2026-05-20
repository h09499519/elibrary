/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { resources } from '../data/resources';
import { PlayCircle, Award, Clock } from 'lucide-react';

export default function ELearning() {
  const courses = resources.filter(r => r.category === 'course');

  return (
    <div className="bg-warm-white dark:bg-primary min-h-screen animate-fade-in pb-20 overflow-x-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
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
            elite library
          </motion.span>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-primary dark:text-white mb-8 uppercase tracking-tighter"
          >
            E-Learning
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 w-24 bg-accent mx-auto mb-8"
          />
          <p className="text-xl text-gray-800 dark:text-gray-100 leading-relaxed font-medium max-w-2xl mx-auto">
            Nâng tầm kỹ năng với hệ thống khóa học trực tuyến từ các chuyên gia hàng đầu tại <span className="text-primary dark:text-accent font-bold">Elite Library</span>.
          </p>
        </header>

        <div className="space-y-12">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch bg-white dark:bg-slate-800 rounded-[50px] shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-500 group overflow-hidden border border-gray-100 dark:border-white/5`}
            >
              <div className="lg:w-[45%] relative aspect-video lg:aspect-auto overflow-hidden bg-gray-50/30 dark:bg-slate-900/50">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                {course.link === 'MAINTENANCE' && (
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-center justify-center p-6 text-center">
                    <div className="bg-accent/90 px-6 py-3 rounded-2xl border border-white/20 shadow-2xl">
                      <span className="text-white font-black uppercase tracking-widest text-sm">Đang bảo trì</span>
                    </div>
                  </div>
                )}
                <div className="absolute top-8 left-8 bg-primary/90 dark:bg-slate-900/90 backdrop-blur-md px-5 py-2 rounded-xl border border-white/20">
                  <span className="text-white font-black italic tracking-tighter text-sm uppercase">Episode {idx + 1}</span>
                </div>
              </div>
              <div className="lg:w-[55%] p-10 lg:p-16 flex flex-col justify-center">
                <h3
                  style={{ fontFamily: 'Georgia, serif' }}
                  className="text-3xl md:text-5xl font-black text-primary dark:text-white mb-6 leading-tight group-hover:text-accent transition-colors"
                >
                  {course.title}
                </h3>
                <Link
                  to={`/e-learning/${course.id}`}
                  className={`inline-block w-full text-center py-5 font-black uppercase tracking-[0.3em] text-sm rounded-2xl transition-all shadow-xl transform hover:scale-[1.02] ${
                    course.link === 'MAINTENANCE' 
                      ? 'bg-gray-400 dark:bg-slate-600 cursor-not-allowed' 
                      : 'bg-primary dark:bg-accent text-white hover:bg-accent dark:hover:bg-accent/80 shadow-primary/20 dark:shadow-accent/20'
                  }`}
                  onClick={(e) => {
                    if (course.link === 'MAINTENANCE') {
                      e.preventDefault();
                      alert('Trang đang bảo trì, vui lòng quay lại sau! ❤️');
                    }
                  }}
                >
                  {course.link === 'MAINTENANCE' ? 'Đang bảo trì' : 'Xem tiếp'}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

