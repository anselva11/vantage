import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ceoImg from '../assets/ceo.png';

const Team = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Meet Our Leadership
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray leading-relaxed"
          >
            Guided by decades of global market experience, our leadership team is dedicated to providing actionable intelligence and strategic foresight.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="bg-offWhite relative overflow-hidden">
              <img 
                src={ceoImg} 
                alt="CEO of Vantage" 
                className="w-full h-auto shadow-md" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white shadow-lg border border-border hidden md:flex items-center justify-center p-6 text-xs text-gray text-center z-10">
              VANTAGE LEADERSHIP
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Ansel</h2>
              <p className="text-sm font-semibold tracking-widest uppercase text-gray">Chief Executive Officer</p>
            </div>

            <div className="prose prose-lg text-gray leading-relaxed mb-10">
              <p className="mb-6">
                "At Vantage, we believe that true market advantage comes from looking beyond the obvious. In an era defined by rapid macroeconomic shifts and complex geopolitical landscapes, our mission is to provide clarity amidst uncertainty."
              </p>
              <p className="mb-6">
                Prior to founding Vantage, I spent over two decades advising global institutions on asset allocation and cross-border investments. My vision for this firm was simple: to build a research powerhouse that bridges the gap between raw data and strategic conviction.
              </p>
              <p>
                Our commitment to our clients is unwavering. We don't just report on the markets; we contextualize them, uncovering the hidden alpha and mitigating risks before they materialize. This dedication to excellence is what defines the Vantage standard.
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm font-semibold tracking-wider uppercase text-nearBlack mb-4">Areas of Expertise</p>
              <div className="flex flex-wrap gap-3">
                {['Global Macro Strategy', 'Cross-Asset Allocation', 'Geopolitical Risk', 'Institutional Advisory'].map((skill) => (
                  <span key={skill} className="px-4 py-2 border border-border text-sm text-gray rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
