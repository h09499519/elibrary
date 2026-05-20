import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Search, ExternalLink, Calendar, GraduationCap, Award } from 'lucide-react';

const TEMP_CATEGORIES = [
  "All",
  "Marketing",
  "Business",
  "Economics",
  "Hospitality",
  "Philosophy",
  "Literature",
  "Personal Development"
];

const TEMP_BOOKS = [
  {
    id: 1,
    title: "Purple Cow: Transform Your Business by Being Remarkable",
    author: "Seth Godin",
    year: "2003",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    link: "https://drive.google.com"
  },
  {
    id: 2,
    title: "Zero to One: Notes on Startups, or How to Build the Future",
    author: "Peter Thiel",
    year: "2014",
    category: "Business",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    link: "https://drive.google.com"
  },
  {
    id: 3,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: "2011",
    category: "Economics",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600",
    link: "https://drive.google.com"
  },
  {
    id: 4,
    title: "Setting the Table: The Transforming Power of Hospitality in Business",
    author: "Danny Meyer",
    year: "2006",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600",
    link: "https://drive.google.com"
  },
  {
    id: 5,
    title: "Meditations",
    author: "Marcus Aurelius",
    year: "180 AD",
    category: "Philosophy",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=600",
    link: "https://drive.google.com"
  },
  {
    id: 6,
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    year: "1987",
    category: "Literature",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600",
    link: "https://drive.google.com"
  },
  {
    id: 7,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    year: "1989",
    category: "Personal Development",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
    link: "https://drive.google.com"
  },
  {
    id: 8,
    title: "Contagious: Why Things Catch On",
    author: "Jonah Berger",
    year: "2013",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1491841573190-771a1f40077b?auto=format&fit=crop&q=80&w=600",
    link: "https://drive.google.com"
  },
  {
    id: 9,
    title: "Good to Great: Why Some Companies Make the Leap and Others Don't",
    author: "Jim Collins",
    year: "2001",
    category: "Business",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
    link: "https://drive.google.com"
  }
];

export default function ShareLibrary() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [columns, setColumns] = useState(3);

  const filteredBooks = TEMP_BOOKS.filter(book => {
    const matchesCategory = activeCategory === "All" || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-warm-white min-h-screen font-sans antialiased text-charcoal pb-24">
      {/* Premium minimal background accent */}
      <div className="absolute top-0 left-0 w-full h-[350px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Navigation back */}
        <Link 
          to="/e-library"
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 hover:bg-accent hover:text-white rounded-full transition-all border border-gray-100 font-bold text-sm text-primary shadow-sm hover:shadow-md mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>VỀ E-LIBRARY</span>
        </Link>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-black uppercase text-xs tracking-[0.3em] mb-4 block">
            SHARING TRI THỨC
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-primary uppercase tracking-tighter mb-6 leading-none">
            CHIA SẺ <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">KHO SÁCH</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
            Tủ sách tinh hoa, phong phú được đóng góp và tuyển chọn từ cộng đồng Eliters nhiệt huyết nhất.
          </p>
        </div>

        {/* Simple Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          {/* Scrollable Categories List */}
          <div className="w-full md:w-auto flex overflow-x-auto pb-2 pr-4 -mr-4 scrollbar-none gap-3 select-none">
            {TEMP_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 border shrink-0 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                    : "bg-white border-gray-100 text-primary hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Tìm kiếm sách hoặc tác giả..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pr-12 bg-white rounded-full border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent font-medium text-sm transition-all"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
          </div>
        </div>

        {/* Sleek Minimal Range Slider */}
        <div className="flex justify-end items-center gap-3 mb-8">
          <span className="text-xs font-bold text-gray-400 select-none uppercase tracking-wider">Cột hiển thị:</span>
          <input
            type="range"
            min="2"
            max="5"
            step="1"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            className="w-24 sm:w-32 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent transition-all duration-300"
          />
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 text-accent font-black text-sm">
            {columns}
          </span>
        </div>

        {/* Books Grid Visual Form */}
        {filteredBooks.length > 0 ? (
          <div className={`grid grid-cols-1 ${columns >= 4 ? 'gap-5 md:gap-6' : 'gap-10'} ${
            columns === 2 ? "md:grid-cols-2" :
            columns === 3 ? "md:grid-cols-3" :
            columns === 4 ? "md:grid-cols-4" :
            columns === 5 ? "md:grid-cols-5" : "md:grid-cols-3"
          }`}>
            {filteredBooks.map((book) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`group bg-white rounded-[32px] md:rounded-[40px] flex flex-col justify-between hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 border border-gray-100/50 ${columns >= 4 ? 'p-5' : 'p-8'}`}
              >
                <div>
                  {/* Book cover visual */}
                  <div className={`relative aspect-[4/3] w-full rounded-2xl bg-gray-50 overflow-hidden border border-gray-100 shadow-inner ${columns >= 4 ? 'mb-5' : 'mb-8'}`}>
                    <img 
                      src={book.image} 
                      alt={book.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`bg-black/75 backdrop-blur-md rounded-full text-[10px] font-bold text-accent uppercase tracking-widest ${columns >= 4 ? 'px-3 py-1' : 'px-4 py-1.5'}`}>
                        {book.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-black text-primary leading-tight mb-4 group-hover:text-accent transition-colors line-clamp-2 ${columns >= 4 ? 'text-base' : 'text-xl md:text-2xl'}`}>
                    {book.title}
                  </h3>

                  {/* Author / Contributor details */}
                  <div className={`flex flex-col text-gray-500 font-bold ${columns >= 4 ? 'gap-1.5 mb-5' : 'gap-2 mb-8'}`}>
                    <span className="text-xs uppercase tracking-wider text-primary/80 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-accent" /> Tác giả: {book.author}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Xuất bản: {book.year}
                    </span>
                  </div>
                </div>

                <a 
                  href={book.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center justify-center bg-primary hover:bg-accent text-white font-black transition-all shadow-xl active:scale-95 group/btn ${columns >= 4 ? 'gap-2 w-full py-3.5 rounded-[16px] text-sm' : 'gap-4 w-full py-5 rounded-[24px] text-lg'}`}
                >
                  <span>XEM CHI TIẾT</span>
                  <ExternalLink className={`${columns >= 4 ? 'w-4 h-4' : 'w-5 h-5'} group-hover/btn:translate-x-1 transition-transform`} />
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-gray-400 border border-dashed border-gray-200 rounded-[40px]">
            <p className="text-xl font-bold uppercase tracking-widest">Không có sách phù hợp</p>
          </div>
        )}
      </main>
    </div>
  );
}
