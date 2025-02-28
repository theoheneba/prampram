import React from 'react';
import { Palmtree as PalmTree, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <PalmTree className="w-8 h-8 text-emerald-600" />
        </motion.div>
        <motion.div
          animate={{ x: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute -bottom-2 left-0"
        >
          <Waves className="w-8 h-8 text-blue-500 opacity-70" />
        </motion.div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-blue-500 to-yellow-600 bg-clip-text text-transparent">
        Prampram.com
      </span>
    </div>
  );
}