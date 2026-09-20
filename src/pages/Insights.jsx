import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allResearch } from '../data/researchData';
import { Search } from 'lucide-react';

const Insights = () => {
  return (
    <div className="pt-32 pb-24 bg-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Insights & Commentary
          </motion.h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 gap-6">
            <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto hide-scrollbar">
              {['All', 'Markets', 'Economics', 'Companies', 'Industries', 'Strategy'].map((category, index) => (
                <button 
                  key={category} 
                  className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors border ${
                    index === 0 ? 'bg-nearBlack text-white border-nearBlack' : 'bg-transparent text-gray border-border hover:border-nearBlack hover:text-nearBlack'
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
                placeholder="Search insights..." 
                className="w-full pl-10 pr-4 py-2 border border-border rounded-full text-sm focus:outline-none focus:border-nearBlack transition-colors bg-white"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {allResearch.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col sm:flex-row gap-6"
            >
              <div className="w-full sm:w-1/3 aspect-[4/3] bg-white border border-border relative overflow-hidden flex-shrink-0">
                 {post.image ? (
                   <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 ) : (
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-transparent to-transparent group-hover:scale-105 transition-transform duration-700"></div>
                 )}
              </div>
              <div className="flex flex-col flex-grow py-2">
                <div className="flex gap-3 text-xs font-semibold uppercase tracking-wider text-gray mb-3">
                  <span className="text-nearBlack">{post.category}</span>
                  <span>&bull;</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray transition-colors leading-snug">{post.title}</h3>
                <p className="text-gray text-sm leading-relaxed mb-4 line-clamp-2">{post.summary}</p>
                <Link to={`/research/${post.id}`} className="text-sm font-semibold mt-auto inline-flex items-center hover:text-gray transition-colors">
                  Read More
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
