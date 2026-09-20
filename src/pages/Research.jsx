import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allResearch } from '../data/researchData';
import { ArrowRight, Search } from 'lucide-react';

const Research = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Research & Intelligence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray leading-relaxed"
          >
            In-depth analysis and strategic insights from our global research team.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
            {['All', 'Macro', 'Industry', 'Markets', 'Strategy', 'Equity'].map((category, index) => (
              <button 
                key={category} 
                className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${
                  index === 0 ? 'bg-nearBlack text-white' : 'bg-offWhite text-gray hover:text-nearBlack'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" size={18} />
            <input 
              type="text" 
              placeholder="Search research..." 
              className="w-full pl-10 pr-4 py-2 border border-border rounded-full text-sm focus:outline-none focus:border-nearBlack transition-colors bg-offWhite/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allResearch.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/research/${report.id}`} className="block border border-border bg-white h-full flex flex-col pb-6">
                <div className="aspect-[4/3] bg-offWhite mb-6 overflow-hidden relative border-b border-border">
                  {report.image ? (
                    <img src={report.image} alt={report.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
                <p className="px-6 text-gray text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{report.summary}</p>
                <span className="px-6 text-sm font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform mt-auto">
                  Read Report <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
