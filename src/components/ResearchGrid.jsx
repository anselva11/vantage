import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const researchAreas = [
  {
    num: "01",
    title: "Equity Research",
    desc: "Company fundamentals, valuation, earnings, competitive positioning and financial outlook.",
  },
  {
    num: "02",
    title: "Macro Research",
    desc: "Economic growth, inflation, interest rates, currencies and global macro trends.",
  },
  {
    num: "03",
    title: "Industry Research",
    desc: "Industry structure, market size, competition and growth opportunities.",
  },
  {
    num: "04",
    title: "Market Intelligence",
    desc: "Cross-asset market analysis covering equities, commodities, currencies and digital assets.",
  }
];

const ResearchGrid = () => {
  return (
    <section className="py-24 bg-offWhite">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Research & Intelligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray text-lg max-w-2xl"
          >
            Evidence-based research across markets, industries, companies, and macroeconomic trends.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to="/research" className="block group bg-white p-10 border border-border hover:border-nearBlack transition-all duration-300 hover:-translate-y-1 relative h-full">
                <div className="text-gray text-sm font-medium mb-6">{area.num}</div>
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray leading-relaxed mb-8">{area.desc}</p>
                <div className="absolute top-10 right-10 text-gray group-hover:text-nearBlack group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchGrid;
