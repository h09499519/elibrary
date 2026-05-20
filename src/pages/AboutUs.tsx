/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Target, Users, BookOpen } from 'lucide-react';

const steps = [
  {
    title: 'ĐĂNG KÝ',
    description: 'Tạo tài khoản và xác thực thông tin thành viên để bắt đầu hành trình khám phá tri thức.',
    icon: Users,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: 'KÍCH HOẠT',
    description: 'Kích hoạt thẻ thư viện Elite để mở khóa toàn bộ quyền truy cập vào các học liệu cao cấp.',
    icon: Shield,
    color: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    title: 'TRẢI NGHIỆM',
    description: 'Duyệt tìm đầu sách, tham gia khóa học và đọc tạp chí ngay trên mọi thiết bị cá nhân.',
    icon: BookOpen,
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  },
  {
    title: 'PHÁT TRIỂN',
    description: 'Đánh giá tiến độ học tập và tích lũy chứng chỉ từ các khóa học chuyên sâu.',
    icon: Target,
    color: 'bg-purple-50',
    iconColor: 'text-purple-600'
  }
];

export default function AboutUs() {
  return (
    <div className="py-20 bg-background-warm dark:bg-primary/20 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center max-w-3xl mx-auto relative overflow-hidden">
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
            Về Chúng Tôi
          </motion.span>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black text-primary dark:text-white mb-8 uppercase tracking-tighter"
          >
            Về Chúng Tôi
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 w-24 bg-accent mx-auto mb-8"
          />
          <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed font-semibold">
            Elite Library không chỉ là một thư viện số, mà là một hệ sinh thái tri thức hiện đại, giúp kết nối người học với những nguồn tài nguyên giáo dục uy tín và chất lượng nhất.
          </p>
        </header>

        {/* Induction Process Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-primary dark:text-gray-300 mb-12 text-center uppercase tracking-widest">Quy Trình Hoạt Động</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-10 rounded-[30px] shadow-xl dark:shadow-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-white/5 text-center group"
                >
                  <div className={`w-20 h-20 mx-auto mb-8 rounded-full ${step.color} dark:bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`w-10 h-10 ${step.iconColor} dark:text-accent`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white mb-4 tracking-wider uppercase">
                    {idx + 1}. {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary dark:bg-slate-900 p-12 rounded-[30px] text-white border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-6 text-accent uppercase tracking-widest">TẦM NHÌN</h3>
            <p className="text-gray-300 leading-relaxed italic">
              "Trở thành thư viện số hàng đầu khu vực, xóa bỏ rào cản tiếp cận tri thức và truyền cảm hứng học tập suốt đời cho cộng đồng."
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-12 rounded-[30px] border-2 border-primary/5 dark:border-white/5 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary dark:text-accent uppercase tracking-widest">SỨ MỆNH</h3>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
              Cung cấp các học liệu số tiên tiến, tích hợp công nghệ hiện đại để mang lại trải nghiệm học tập tối ưu, linh hoạt và cá nhân hóa cho mọi thành viên.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
