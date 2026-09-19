import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const headline = "Clarity Behind\nEvery Financial Decision.";
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background Data Elements / Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        {/* Subtle moving line */}
        <motion.div 
          className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight whitespace-pre-line leading-[1.1]">
            {headline.split(" ").map((word, index) => (
              <motion.span variants={child} key={index} className="inline-block mr-3 md:mr-4">
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            variants={child}
            className="text-lg md:text-xl text-gray mb-12 max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Independent research, financial intelligence, and strategic advisory built to turn complex financial data into actionable insight.
          </motion.p>
          
          <motion.div variants={child} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/research" 
              className="px-8 py-4 bg-white text-nearBlack font-medium text-sm hover:bg-offWhite transition-colors w-full sm:w-auto text-center"
            >
              Explore Research
            </Link>
            <Link 
              to="/consulting" 
              className="px-8 py-4 bg-transparent text-white border border-white font-medium text-sm hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
