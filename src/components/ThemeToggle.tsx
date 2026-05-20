import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div 
      onClick={() => setIsDark(!isDark)} 
      className="relative w-16 h-8 rounded-full p-1 transition-all duration-500 cursor-pointer overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] flex items-center bg-sky-400 dark:bg-slate-900 border border-sky-300 dark:border-slate-700 group ring-offset-2 focus:ring-2 focus:ring-accent outline-none"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* Stars for Dark Mode */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-4 left-6 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
        <div className="absolute top-2 right-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-150"></div>
        <div className="absolute top-5 right-6 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-300"></div>
      </div>
      
      {/* Clouds for Light Mode */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-4 left-5 w-4 h-2 bg-white/60 rounded-full animate-bounce duration-[3000ms]"></div>
        <div className="absolute top-2 right-4 w-5 h-2 bg-white/40 rounded-full animate-bounce duration-[4000ms]"></div>
      </div>

      {/* Handle (Sun/Moon) */}
      <motion.div 
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative w-6 h-6 rounded-full shadow-lg flex items-center justify-center ${isDark ? 'bg-slate-200' : 'bg-yellow-400'}`}
      >
        {isDark ? (
          <div className="w-4 h-4 rounded-full bg-slate-300 relative overflow-hidden">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-slate-400/40 rounded-full"></div>
            <div className="absolute bottom-1 right-1.5 w-1 h-1 bg-slate-400/40 rounded-full"></div>
          </div>
        ) : (
          <div className="w-5 h-5 rounded-full bg-yellow-300 blur-[0.5px]"></div>
        )}
      </motion.div>
    </div>
  );
}
