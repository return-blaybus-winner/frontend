"use client";

import { Heart } from "lucide-react";

export default function ProjectImage() {
  return (
    <div className="relative bg-slate-800 rounded-lg overflow-hidden h-96">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-12"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg transform -rotate-12 translate-x-4 translate-y-4"></div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-6 h-6 bg-yellow-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
        <Heart className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}