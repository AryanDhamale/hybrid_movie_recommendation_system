import { Heart, Globe, Sparkles, Coffee } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" w-full bg-white border-t border-gray-200 mt-20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col items-center space-y-4">
          {/* Name */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Tejas Dhamale
          </h3>

          {/* Creative Tags */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-gray-700 rounded-full hover:bg-red-100 transition-all border border-red-200">
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>Made with love</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-gray-700 rounded-full hover:bg-blue-100 transition-all border border-blue-200">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Crafted on Earth</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 text-gray-700 rounded-full hover:bg-yellow-100 transition-all border border-yellow-200">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span>Powered by creativity</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-gray-700 rounded-full hover:bg-amber-100 transition-all border border-amber-200">
              <Coffee className="w-4 h-4 text-amber-600" />
              <span>Fueled by coffee</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            © {currentYear} • All rights reserved
          </p>

          {/* Fun Quote */}
          <p className="text-xs text-gray-500 italic max-w-md text-center">
            "Building digital experiences, one pixel at a time ✨"
          </p>
        </div>
      </div>
    </footer>
  );
}