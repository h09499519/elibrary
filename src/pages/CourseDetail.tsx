/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { resources } from '../data/resources';
import { ArrowLeft, Play, Clock, Award, BookOpen, Share2, Lock, Calendar } from 'lucide-react';
import HeaderInfo from '../components/HeaderInfo';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = resources.find(r => r.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-white">
        <div className="text-center">
          <h1 className="text-4xl font-black text-primary mb-4">Không tìm thấy khóa học</h1>
          <Link to="/e-learning" className="text-accent font-bold hover:underline">Quay lại trang E-Learning</Link>
        </div>
      </div>
    );
  }

  const courses = resources.filter(r => r.category === 'course');
  const courseIndex = courses.findIndex(c => c.id === id);
  const courseDates = [
    '20/08/2021',
    '15/01/2022',
    '06/06/2022',
    '',
    '14/06/2023'
  ];
  const courseDate = courseDates[courseIndex];
  const isMC = id === 'course-4';
  let duration = '4 Mins';
  if (id === 'course-3' || id === 'course-4') {
    duration = '5 Mins';
  } else if (id === 'course-5') {
    duration = '8 Mins';
  }

  return (
    <div className="bg-warm-white dark:bg-primary min-h-screen pb-20 overflow-x-hidden transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-primary dark:bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={course.image} className="w-full h-full object-cover" alt={course.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/e-learning" className="inline-flex items-center text-white/70 hover:text-white transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold uppercase tracking-widest text-xs">Back to Courses</span>
            </Link>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: 'Georgia, serif' }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            {course.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 text-white/80 text-sm font-bold uppercase tracking-wider"
          >
            <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-accent" /> {duration}</div>
            {courseDate && (
              <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-accent" /> Date: {courseDate}</div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Course Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white dark:bg-slate-800 p-10 rounded-[40px] shadow-xl shadow-primary/5 border border-gray-100 dark:border-white/5">
              <h2 className="text-3xl font-black text-primary dark:text-white mb-8 uppercase tracking-tight">#E-Learning {courseIndex + 1}</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed italic mb-12">
                {course.description} Khóa học này được thiết kế bởi L&D Team - FBA Elite nhằm cung cấp những kiến thức thực tế và bổ ích nhất cho các Eliter. Chúng mình tin rằng những chia sẻ này sẽ giúp các bạn phát triển bản thân toàn diện hơn.
              </p>
              {isMC ? (
                <div 
                  className="relative aspect-video rounded-3xl flex flex-col items-center justify-center text-center group cursor-pointer transition-all shadow-2xl overflow-hidden"
                  onClick={() => window.open(course.link, '_blank')}
                >
                  <img src={course.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Website Preview" />
                  <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl mb-6 mx-auto group-hover:bg-accent group-hover:text-white transition-all transform group-hover:scale-110">
                      <BookOpen className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight">Truy cập Website</h3>
                  </div>
                </div>
              ) : (
                <div 
                  className="aspect-video bg-gray-900 rounded-3xl flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-2xl"
                  onClick={() => {
                    if (course.link === 'MAINTENANCE') {
                      alert('Trang đang bảo trì, vui lòng quay lại sau! ❤️');
                    } else {
                      window.open(course.link, '_blank');
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={course.image} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Video Preview" />
                  {course.link === 'MAINTENANCE' ? (
                    <div className="relative z-20 text-center px-6">
                      <div className="bg-accent/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 shadow-2xl">
                        <span className="text-white font-black uppercase tracking-widest text-lg">Trang đang bảo trì</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-20 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-accent group-hover:text-white transition-all transform group-hover:scale-110">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <div className="bg-primary dark:bg-slate-900 text-white p-10 rounded-[40px] shadow-2xl shadow-primary/30 relative overflow-hidden transition-colors duration-300 border border-transparent dark:border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 -mr-16 -mt-16 rounded-full"></div>
              <h3 className="text-xl font-black mb-6 uppercase tracking-widest relative z-10">
                Hòm thư góp ý
              </h3>
              <p className="text-white/70 text-sm mb-8 italic relative z-10">
                Chúng mình luôn sẵn sàng lắng nghe những đóng góp từ các bạn!
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfF9xo3KM416ZGv7IhqYnXi9j9M9zTEfQ52-TAWzaSsqBj9XQ/viewform"
                target="_blank"
                className="block w-full text-center py-4 bg-accent hover:bg-white hover:text-primary dark:hover:text-white dark:hover:bg-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all transform active:scale-95 shadow-xl shadow-accent/20"
              >
                Gửi góp ý
              </a>
              <p className="text-white/70 text-[10px] mt-6 text-center italic font-bold">Cảm ơn các bạn rất nhiều! ❤️</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] shadow-xl shadow-primary/5 border border-gray-100 dark:border-white/5 italic">
              <h4 className="font-bold text-primary dark:text-accent mb-4 flex items-center">
                <Share2 className="w-4 h-4 mr-2" /> Chia sẻ tài liệu
              </h4>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Lan tỏa kiến thức đến nhiều Eliters hơn nữa nhé!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

