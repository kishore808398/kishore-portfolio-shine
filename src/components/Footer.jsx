
import React from 'react';
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="text-2xl font-bold mb-4">Kishore</div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Kishore0752"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors hover:scale-110 transform duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kishore-regana-kishore-69901b352/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors hover:scale-110 transform duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 mb-8 text-sm">
            <button
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Kishore, All rights reserved. 
              <span className="flex items-center">
                Made with <Heart size={16} className="text-red-500 mx-1" /> and React
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
