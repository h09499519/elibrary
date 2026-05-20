/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, ArrowRight, BookOpen, GraduationCap, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import HeaderInfo from '../components/HeaderInfo';

const categories = [
  {
    title: 'E-LIBRARY',
    description: 'Kho sách điện tử đa dạng thể loại từ văn học đến kỹ năng chuyên môn.',
    path: '/e-library',
    icon: BookOpen,
    color: 'bg-blue-900',
  },
  {
    title: 'E-LEARNING',
    description: 'Hệ thống khóa học trực tuyến chất lượng cao, cập nhật xu hướng công nghệ.',
    path: '/e-learning',
    icon: GraduationCap,
    color: 'bg-orange-600',
  },
  {
    title: 'E-MAGAZINE',
    description: 'Tạp chí số định kỳ với những kiến thức chuyên sâu và hấp dẫn.',
    path: '/e-magazine',
    icon: Newspaper,
    color: 'bg-emerald-700',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image / Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000")' }}
        >
          <div className="absolute inset-0 bg-black/60 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl px-4 text-center">
          <HeaderInfo isHome />
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-[0.2em]"
          >
            Elite Library
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Khám phá kho tàng tri thức vô tận. Nơi hội tụ của những đầu sách, khóa học và tạp chí hàng đầu.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Tìm kiếm sách, khóa học, tạp chí..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 md:py-5 pr-16 bg-white/95 backdrop-blur-sm rounded-full text-charcoal shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent/20 transition-all text-lg"
              />
              <button className="absolute right-2 p-3 bg-accent text-white rounded-full hover:bg-orange-600 transition-colors shadow-lg">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories / Featured Sections */}
      <section className="py-20 px-4 bg-background-cream dark:bg-primary/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative overflow-hidden bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-black/5 dark:border-white/5"
                >
                  <div className={`h-2.5 w-full ${cat.color}`}></div>
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-xl ${cat.color} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary dark:text-white mb-4 uppercase tracking-wider">{cat.title}</h3>
                    <p className="text-gray-800 dark:text-gray-100 mb-8 leading-relaxed">
                      {cat.description}
                    </p>
                    <Link
                      to={cat.path}
                      className="inline-flex items-center text-accent font-bold hover:translate-x-2 transition-transform uppercase tracking-widest text-sm"
                    >
                      Khám phá ngay <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-widest">Bạn cần trợ giúp?</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc về cách sử dụng hệ thống và quyền truy cập học liệu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/guide"
              className="px-8 py-4 bg-accent text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg uppercase tracking-widest"
            >
              Xem hướng dẫn
            </Link>
            <Link
              to="/about-us"
              className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all uppercase tracking-widest"
            >
              Về chúng tôi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
