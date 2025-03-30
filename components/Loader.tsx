'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const phrases = [
  'Defining rigging equipment...',
  'Drafting the lifting plan...',
  'Preparing offshore operation...',
];

const finalMessage = 'Site ready. Lift approved.';

const Loader = () => {
  const [index, setIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < phrases.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(() => setShowFinal(true), 1000); // Espera 1s e mostra "final"
        return prev;
      });
    }, 1000);

    // Esconde o loader 2s depois de mostrar o finalMessage
    const totalTime = phrases.length * 1000 + 3000;
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, totalTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={showFinal ? 'final' : index}
              className="text-white text-2xl md:text-4xl font-semibold text-center px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {showFinal ? finalMessage : phrases[index]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
