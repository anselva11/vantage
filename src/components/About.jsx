import React from 'react';
import { motion } from 'framer-motion';

const HomeAbout = () => {
  return (
    <section className="py-24 bg-white text-nearBlack">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight"
            >
              Independent Research.<br />
              Clearer Perspective.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray text-lg leading-relaxed max-w-lg"
            >
              VANTAGE provides financial research, market intelligence, and strategic advisory services designed for investors, companies, and decision-makers navigating complex markets.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4 border-t border-border pt-12 md:border-t-0 md:pt-0">
            {[
              { num: "10+", label: "Research Areas" },
              { num: "25+", label: "Market Indicators" },
              { num: "360°", label: "Financial Intelligence" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                className="flex flex-col border-l border-border pl-6"
              >
                <span className="text-4xl md:text-5xl font-light mb-2">{stat.num}</span>
                <span className="text-sm font-medium text-gray uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
