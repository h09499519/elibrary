/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Library, Mail, Phone, MapPin, Facebook, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer bg-primary text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-accent p-1.5 rounded-lg">
                <Library className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">Elite Library</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elite Library là nền tảng tri thức tổng hợp, cung cấp nguồn học liệu số phong phú hỗ trợ tối đa cho học tập và nghiên cứu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent uppercase tracking-wider">Khám Phá</h3>
            <ul className="space-y-2">
              <li><Link to="/e-library" className="text-gray-400 hover:text-white transition-colors">E-Library</Link></li>
              <li><Link to="/e-learning" className="text-gray-400 hover:text-white transition-colors">E-Learning</Link></li>
              <li><Link to="/e-magazine" className="text-gray-400 hover:text-white transition-colors">E-Magazine</Link></li>
              <li><Link to="/guide" className="text-gray-400 hover:text-white transition-colors">Trợ giúp</Link></li>
              <li><Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent uppercase tracking-wider">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-sm">123 Street Name, City, Vietnam</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm">0967832371</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm">huyenht63.fbaelite@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent uppercase tracking-wider">Kết Nối</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/huyen.hoangthu.2304" className="bg-white/5 p-2 rounded-full hover:bg-accent transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-accent transition-all duration-300 group">
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-accent transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Elite Library. Phát triển bởi Elite Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
