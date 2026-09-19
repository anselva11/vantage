import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { marketData, marketPerformanceData } from '../data/marketData';
import { economicIndicators } from '../data/economicData';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Markets = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [chartFilter, setChartFilter] = useState('1M');

  const tabs = ['Overview', 'Equities', 'Forex', 'Commodities', 'Crypto', 'Bonds', 'Economic Data'];
  const chartFilters = ['1D', '1W', '1M', '3M', '6M', '1Y', '5Y'];

  return (
    <div className="pt-32 pb-24 bg-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-6 text-gray">Market Intelligence</h2>
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap border-l-2 lg:border-l-2 lg:border-b-0 border-b-2 ${
                    activeTab === tab 
                      ? 'border-nearBlack text-nearBlack bg-white lg:bg-transparent lg:pl-6' 
                      : 'border-transparent text-gray hover:text-nearBlack hover:border-border lg:pl-4'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeTab}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-3xl font-bold mb-8 tracking-tight">{activeTab}</h1>

            {activeTab === 'Overview' && (
              <>
                {/* Market Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {marketData.map((item, index) => (
                    <div key={item.symbol} className="bg-white p-6 border border-border flex flex-col justify-between">
                      <div className="text-sm text-gray font-medium mb-2">{item.symbol}</div>
                      <div className="text-xl font-bold mb-1">
                        {item.currency === '%' ? '' : item.currency === 'USD' ? '$' : ''}
                        {item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        {item.currency === '%' ? '%' : ''}
                      </div>
                      <div className={`text-xs font-semibold flex items-center ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.change >= 0 ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                        {Math.abs(item.change)}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Chart */}
                <div className="bg-white border border-border p-8 mb-12">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-bold tracking-tight">Market Performance</h3>
                    <div className="flex gap-2">
                      {chartFilters.map(filter => (
                        <button 
                          key={filter}
                          onClick={() => setChartFilter(filter)}
                          className={`text-xs font-semibold px-3 py-1 rounded transition-colors ${chartFilter === filter ? 'bg-nearBlack text-white' : 'text-gray hover:bg-offWhite'}`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={marketPerformanceData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B6B6B' }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B6B6B' }} domain={['auto', 'auto']} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '12px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Line type="monotone" dataKey="sp500" name="S&P 500" stroke="#111111" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="nasdaq" name="NASDAQ" stroke="#6B6B6B" strokeWidth={2} dot={false} strokeDasharray="5 5" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Economic Data' && (
              <>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-lg font-bold tracking-tight">Economic Indicators</h3>
                  <select className="bg-white border border-border px-4 py-2 text-sm focus:outline-none">
                    <option>Global</option>
                    <option>United States</option>
                    <option>China</option>
                    <option>Japan</option>
                    <option>Singapore</option>
                    <option>Indonesia</option>
                  </select>
                </div>
                
                <div className="bg-white border border-border overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border text-gray bg-offWhite/50">
                        <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Indicator</th>
                        <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Current</th>
                        <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Previous</th>
                        <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {economicIndicators.map((ind, index) => (
                        <tr key={index} className="border-b border-border last:border-b-0 hover:bg-offWhite/30 transition-colors">
                          <td className="px-6 py-4 font-semibold">{ind.name}</td>
                          <td className="px-6 py-4">{ind.value}</td>
                          <td className="px-6 py-4 text-gray">{ind.previous}</td>
                          <td className="px-6 py-4">
                            {ind.status === 'up' && <ArrowUpRight size={16} className="text-green-500" />}
                            {ind.status === 'down' && <ArrowDownRight size={16} className="text-red-500" />}
                            {ind.status === 'neutral' && <span className="text-gray">-</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            
            {/* Fallback for other tabs */}
            {activeTab !== 'Overview' && activeTab !== 'Economic Data' && (
              <div className="bg-white border border-border p-12 text-center text-gray">
                Data for {activeTab} is currently being updated.
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Markets;
