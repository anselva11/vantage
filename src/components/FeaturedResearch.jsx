import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { featuredResearch } from '../data/researchData';
import { ArrowRight } from 'lucide-react';
import imgPlaceholder from '../assets/2.png';

const FeaturedResearch = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              Featured Research
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/research" className="inline-flex items-center text-sm font-semibold hover:text-gray transition-colors border-b border-nearBlack hover:border-gray pb-1">
              View All Publications <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredResearch.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/research/${report.id}`} className="block border border-border bg-white h-full pb-6">
                <div className="aspect-[4/3] bg-offWhite mb-6 overflow-hidden relative border-b border-border">
                  {report.image ? (
                    <img src={imgPlaceholder} alt={report.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-black via-transparent to-transparent group-hover:scale-105 transition-transform duration-700"></div>
                  )}
                </div>
                <div className="px-6 flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-offWhite text-nearBlack text-xs font-semibold tracking-wider uppercase border border-border/50">
                    {report.category}
                  </span>
                  <span className="text-xs text-gray font-medium uppercase tracking-wider">{report.date}</span>
                </div>
                <h3 className="px-6 text-xl font-bold mb-3 group-hover:text-gray transition-colors leading-snug">{report.title}</h3>
                <p className="px-6 text-gray text-sm leading-relaxed mb-6 line-clamp-2">{report.summary}</p>
                <span className="px-6 text-sm font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform mt-auto">
                  Read Research <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResearch;
