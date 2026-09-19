import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Download, Bookmark } from 'lucide-react';
import { allResearch } from '../data/researchData';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const mockChartData = [
  { year: '2020', gdp: 3.2, inflation: 2.0 },
  { year: '2021', gdp: 4.1, inflation: 2.5 },
  { year: '2022', gdp: 5.3, inflation: 4.2 },
  { year: '2023', gdp: 5.0, inflation: 3.8 },
  { year: '2024', gdp: 5.1, inflation: 3.1 },
  { year: '2025', gdp: 5.4, inflation: 2.8 },
  { year: '2026', gdp: 5.6, inflation: 2.5 },
];

const ResearchDetail = () => {
  const { id } = useParams();
  const report = allResearch.find(r => r.id === id) || allResearch[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link to="/research" className="inline-flex items-center text-sm font-semibold text-gray hover:text-nearBlack transition-colors mb-12">
          <ArrowLeft size={16} className="mr-2" /> Back to Research
        </Link>
        
        <header className="mb-12 border-b border-border pb-12">
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 bg-nearBlack text-white text-xs font-semibold tracking-wider uppercase">
              {report.category}
            </span>
            <span className="text-sm text-gray font-medium uppercase tracking-wider self-center">
              Published: {report.date}
            </span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight text-balance"
          >
            {report.title}
          </motion.h1>
          
          <div className="flex gap-4 border-t border-border pt-6">
            <button className="p-2 border border-border rounded-full hover:bg-offWhite transition-colors text-gray hover:text-nearBlack">
              <Share2 size={18} />
            </button>
            <button className="p-2 border border-border rounded-full hover:bg-offWhite transition-colors text-gray hover:text-nearBlack">
              <Download size={18} />
            </button>
            <button className="p-2 border border-border rounded-full hover:bg-offWhite transition-colors text-gray hover:text-nearBlack">
              <Bookmark size={18} />
            </button>
          </div>
        </header>

        <article className="prose prose-lg prose-gray max-w-none">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Executive Summary</h2>
          <p className="text-gray leading-relaxed mb-8 text-xl">
            {report.summary} This report provides a detailed examination of the underlying factors driving these trends and offers actionable scenarios for investors.
          </p>

          <div className="my-12 p-8 bg-offWhite border border-border">
            <h3 className="text-lg font-bold mb-6 tracking-tight uppercase text-xs">Economic Projection (2020-2026)</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockChartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#111111" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#111111" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B6B6B' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B6B6B' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="gdp" stroke="#111111" strokeWidth={2} fillOpacity={1} fill="url(#colorGdp)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray mt-4 text-center">Source: VANTAGE Intelligence / World Bank</p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 tracking-tight">Economic Overview</h2>
          <p className="text-gray leading-relaxed mb-6">
            The global macro environment continues to present a complex interplay of disinflationary forces and resilient economic activity in key regions. Our analysis suggests that the divergence in monetary policy paths among major central banks will be the primary driver of cross-asset volatility in the coming quarters.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4 tracking-tight">Inflation & Interest Rates</h2>
          <p className="text-gray leading-relaxed mb-6">
            Core inflation metrics have shown stickiness, particularly in the services sector, prompting a recalibration of interest rate expectations. We project a "higher for longer" regime to persist, which necessitates a strategic reassessment of fixed-income duration and equity valuations.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 tracking-tight">Market Implications</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray leading-relaxed mb-12">
            <li><strong>Equities:</strong> Preference for quality factors and companies with robust pricing power.</li>
            <li><strong>Fixed Income:</strong> Opportunities in the short-end of the yield curve given attractive real yields.</li>
            <li><strong>Currencies:</strong> The US Dollar is expected to maintain its strength relative to emerging market peers, barring a significant deterioration in US economic data.</li>
          </ul>

          <div className="bg-nearBlack text-white p-10 mt-16">
            <h3 className="text-xl font-bold mb-4">Conclusion & Strategic Positioning</h3>
            <p className="text-gray leading-relaxed">
              Navigating this environment requires a dynamic approach to asset allocation. Investors should maintain a defensive posture while capitalizing on tactical opportunities arising from policy divergence and sector-specific dislocations.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ResearchDetail;
