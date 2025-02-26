import React from 'react';
import { Palmtree as PalmTree, Waves } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <PalmTree className="w-8 h-8 text-emerald-600" />
        <Waves className="w-8 h-8 text-yellow-600 absolute -bottom-2 left-0 opacity-70" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-yellow-600 bg-clip-text text-transparent">
        Prampram.com
      </span>
    </div>
  );
}