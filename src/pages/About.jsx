import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-0 bg-white min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex-grow flex flex-col justify-center w-full mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 tracking-tight text-balance max-w-4xl"
        >
          Built Around Better Decisions.
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <p className="text-xl md:text-2xl text-gray leading-relaxed font-medium">
            Financial markets generate enormous amounts of information. Our role is to transform that information into structured intelligence.
          </p>
          <div className="text-gray leading-relaxed space-y-6 text-lg">
            <p>
              VANTAGE was founded on a simple premise: clarity is the most valuable asset in finance. We strip away the noise to provide institutional investors and corporate decision-makers with the pure, unvarnished insights they need to succeed.
            </p>
            <p>
              Our team brings together deep sector expertise, rigorous quantitative analysis, and decades of market experience to deliver research and advisory services that meet the highest institutional standards.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="bg-nearBlack text-white py-32 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray/20 pt-16">
            {['Research', 'Data', 'Analytics', 'Strategy'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="text-sm font-semibold tracking-wider text-gray mb-2">0{index + 1}</div>
                <div className="text-2xl md:text-3xl font-light tracking-tight">{item}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
