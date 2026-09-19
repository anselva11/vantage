import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "Financial Modeling",
    desc: "Build integrated financial models for forecasting, planning and decision-making. Our models are built to institutional standards, ensuring robustness, flexibility, and transparency.",
  },
  {
    num: "02",
    title: "Business Valuation",
    desc: "DCF, comparable company analysis and transaction-based valuation. We provide rigorous, defensible valuation opinions for M&A, capital raising, and strategic planning.",
  },
  {
    num: "03",
    title: "Corporate Finance",
    desc: "Financial strategy, capital planning and fundraising preparation. We advise management teams on optimizing capital structure and navigating complex transactions.",
  },
  {
    num: "04",
    title: "Strategic Advisory",
    desc: "Data-driven analysis to support business and financial decisions. We combine market intelligence with financial rigor to help you chart the optimal path forward.",
  }
];

const processSteps = [
  { step: "01", name: "Understand" },
  { step: "02", name: "Analyze" },
  { step: "03", name: "Model" },
  { step: "04", name: "Strategize" },
  { step: "05", name: "Deliver" },
];

const Consulting = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Strategic Financial Advisory
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray leading-relaxed"
          >
            From financial analysis to strategic decision-making.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-border pt-6"
            >
              <div className="text-sm font-medium text-gray mb-4">{service.num}</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-gray leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-nearBlack text-white p-12 md:p-20 mb-24">
          <h2 className="text-3xl font-bold mb-16 tracking-tight text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gray/30 -translate-y-1/2 z-0"></div>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center bg-nearBlack p-4"
              >
                <div className="w-12 h-12 rounded-full border border-gray flex items-center justify-center text-sm font-medium mb-4 bg-nearBlack">
                  {step.step}
                </div>
                <div className="text-sm font-semibold tracking-wider uppercase text-gray">{step.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 tracking-tight">Ready to optimize your financial strategy?</h2>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/contact" 
            className="inline-block px-8 py-4 bg-nearBlack text-white font-medium text-sm transition-colors hover:bg-black"
          >
            Discuss Your Project
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
