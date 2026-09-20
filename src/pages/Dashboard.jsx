import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { marketData } from '../data/marketData';
import { Search, Bell, User, LogOut, ArrowUpRight, ArrowDownRight, Settings, FileText, PieChart, Activity, BookOpen } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const mockPortfolioData = [
  { month: 'Jan', value: 1.2 },
  { month: 'Feb', value: 1.25 },
  { month: 'Mar', value: 1.3 },
  { month: 'Apr', value: 1.28 },
  { month: 'May', value: 1.35 },
  { month: 'Jun', value: 1.42 },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-offWhite overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className={`bg-nearBlack text-white w-64 flex-shrink-0 flex flex-col transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full absolute h-full z-20'}`}>
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link to="/" className="text-xl font-bold tracking-widest uppercase">VANTAGE</Link>
        </div>
        <nav className="flex-grow py-6 px-4 space-y-1 overflow-y-auto">
          {[
            { name: 'Dashboard', icon: <PieChart size={18} />, path: '/dashboard' },
            { name: 'Market Overview', icon: <Activity size={18} /> },
            { name: 'Research', icon: <BookOpen size={18} />, path: '/research' },
            { name: 'Watchlist', icon: <Activity size={18} /> },
            { name: 'Portfolio', icon: <PieChart size={18} /> },
            { name: 'Economic Data', icon: <Activity size={18} /> },
            { name: 'Reports', icon: <FileText size={18} /> },
            { name: 'Our Team', icon: <User size={18} />, path: '/team' },
            { name: 'Settings', icon: <Settings size={18} /> },
          ].map((item, i) => (
            <Link key={i} to={item.path || '#'} className={`flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors ${i === 0 ? 'bg-white/10 text-white' : 'text-gray hover:bg-white/5 hover:text-white'}`}>
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link to="/" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray hover:text-white transition-colors">
            <LogOut size={18} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-full overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-nearBlack">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div className="relative w-64 hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" size={16} />
              <input 
                type="text" 
                placeholder="Search symbol or keyword..." 
                className="w-full pl-9 pr-4 py-2 bg-offWhite border border-border rounded text-sm focus:outline-none focus:border-nearBlack transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 text-nearBlack">
            <button className="relative text-gray hover:text-nearBlack transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-border">
              <div className="w-8 h-8 rounded-full bg-nearBlack text-white flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="text-sm font-medium hidden sm:block">Client User</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-grow overflow-auto p-6 md:p-8">
          <h1 className="text-2xl font-bold tracking-tight mb-8">Intelligence Overview</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Portfolio Overview */}
            <div className="lg:col-span-2 bg-white border border-border p-6 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-sm font-bold tracking-wider uppercase text-gray mb-1">Portfolio Value</h3>
                  <div className="text-3xl font-bold">$1,420,500.00</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-green-500 flex items-center justify-end">
                    <ArrowUpRight size={16} className="mr-1" /> +$12,450 (0.88%)
                  </div>
                  <div className="text-xs text-gray mt-1">Today</div>
                </div>
              </div>
              <div className="h-64 w-full mt-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockPortfolioData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#111111" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#111111" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B6B6B' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B6B6B' }} tickFormatter={(val) => `$${val}M`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '12px' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`$${value}M`, 'Value']}
                    />
                    <Area type="monotone" dataKey="value" stroke="#111111" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Watchlist */}
            <div className="bg-white border border-border flex flex-col">
              <div className="p-6 border-b border-border flex justify-between items-center">
                <h3 className="text-sm font-bold tracking-wider uppercase">Watchlist</h3>
                <button className="text-xs font-semibold text-gray hover:text-nearBlack">Edit</button>
              </div>
              <div className="overflow-y-auto max-h-80">
                {marketData.slice(0, 6).map((item, index) => (
                  <div key={item.symbol} className="flex justify-between items-center p-4 border-b border-border last:border-b-0 hover:bg-offWhite transition-colors">
                    <div>
                      <div className="font-bold text-sm">{item.symbol}</div>
                      <div className="text-xs text-gray">{item.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">
                        {item.currency === '%' ? '' : item.currency === 'USD' ? '$' : ''}
                        {item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        {item.currency === '%' ? '%' : ''}
                      </div>
                      <div className={`text-xs font-semibold flex items-center justify-end ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.change >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                        {Math.abs(item.change)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
             {/* Latest Research */}
             <div className="bg-white border border-border">
              <div className="p-6 border-b border-border flex justify-between items-center">
                <h3 className="text-sm font-bold tracking-wider uppercase">Latest Research</h3>
                <Link to="/research" className="text-xs font-semibold text-gray hover:text-nearBlack">View All</Link>
              </div>
              <div className="p-6 space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <span className="px-2 py-1 bg-offWhite text-xs font-semibold tracking-wider uppercase">Macro</span>
                      <span className="text-xs text-gray">Today</span>
                    </div>
                    <h4 className="font-bold mb-2 group-hover:text-gray transition-colors">Global Markets: Shifting Dynamics in Q4</h4>
                    <p className="text-sm text-gray line-clamp-2">Our analysts dissect the recent central bank communications and their implications for cross-asset valuations over the next three months.</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white border border-border">
              <div className="p-6 border-b border-border">
                <h3 className="text-sm font-bold tracking-wider uppercase">Recent Activity</h3>
              </div>
              <div className="p-6 space-y-6">
                {[
                  { action: "Downloaded Report", target: "Consumer Sector Outlook 2026", time: "2 hours ago" },
                  { action: "Portfolio Alert", target: "NASDAQ fell below 18,000 support level", time: "5 hours ago" },
                  { action: "Logged In", target: "IP: 192.168.1.1 (New York)", time: "1 day ago" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-nearBlack flex-shrink-0"></div>
                    <div>
                      <div className="font-medium text-sm">{item.action}</div>
                      <div className="text-sm text-gray">{item.target}</div>
                      <div className="text-xs text-gray mt-1">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
