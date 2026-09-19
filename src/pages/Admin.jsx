import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Bell, User, LogOut, FileText, Users, Database, Settings, Activity, Plus, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { allResearch } from '../data/researchData';

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Research');

  return (
    <div className="flex h-screen bg-offWhite overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className={`bg-nearBlack text-white w-64 flex-shrink-0 flex flex-col transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full absolute h-full z-20'}`}>
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link to="/" className="text-xl font-bold tracking-widest uppercase">VANTAGE <span className="text-xs text-gray ml-2">ADMIN</span></Link>
        </div>
        <nav className="flex-grow py-6 px-4 space-y-1 overflow-y-auto">
          {[
            { name: 'Overview', icon: <Activity size={18} /> },
            { name: 'Research', icon: <FileText size={18} /> },
            { name: 'Users', icon: <Users size={18} /> },
            { name: 'Market Data', icon: <Database size={18} /> },
            { name: 'Economic Data', icon: <Database size={18} /> },
            { name: 'Settings', icon: <Settings size={18} /> },
          ].map((item, i) => (
            <button 
              key={i} 
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors ${activeTab === item.name ? 'bg-white/10 text-white' : 'text-gray hover:bg-white/5 hover:text-white'}`}
            >
              {item.icon}
              {item.name}
            </button>
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
            <h2 className="text-lg font-bold tracking-tight hidden sm:block">{activeTab} Management</h2>
          </div>
          <div className="flex items-center gap-6 text-nearBlack">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Administrator</span>
              <div className="w-8 h-8 rounded-full bg-nearBlack text-white flex items-center justify-center">
                <User size={16} />
              </div>
            </div>
          </div>
        </header>

        {/* Admin Content */}
        <div className="flex-grow overflow-auto p-6 md:p-8">
          
          {activeTab === 'Research' && (
            <div className="bg-white border border-border flex flex-col">
              <div className="p-6 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search reports..." 
                    className="w-full pl-9 pr-4 py-2 bg-offWhite border border-border rounded text-sm focus:outline-none focus:border-nearBlack transition-colors"
                  />
                </div>
                <button className="flex items-center gap-2 bg-nearBlack text-white px-4 py-2 rounded text-sm font-semibold hover:bg-black transition-colors whitespace-nowrap">
                  <Plus size={16} /> Add Report
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-gray bg-offWhite/50">
                      <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Title</th>
                      <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Category</th>
                      <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Date</th>
                      <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Status</th>
                      <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allResearch.map((report, index) => (
                      <tr key={index} className="border-b border-border last:border-b-0 hover:bg-offWhite/30 transition-colors">
                        <td className="px-6 py-4 font-semibold max-w-xs truncate">{report.title}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-offWhite border border-border text-xs font-semibold tracking-wider uppercase">
                            {report.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray">{report.date}</td>
                        <td className="px-6 py-4">
                          <span className="text-green-500 font-medium">Published</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-3 text-gray">
                            <button className="hover:text-nearBlack"><Edit size={16} /></button>
                            <button className="hover:text-red-500"><Trash2 size={16} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 border-t border-border flex justify-between items-center text-sm text-gray">
                <div>Showing 1 to {allResearch.length} of {allResearch.length} entries</div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border border-border bg-white hover:bg-offWhite disabled:opacity-50" disabled>Prev</button>
                  <button className="px-3 py-1 border border-border bg-nearBlack text-white">1</button>
                  <button className="px-3 py-1 border border-border bg-white hover:bg-offWhite disabled:opacity-50" disabled>Next</button>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'Research' && (
            <div className="bg-white border border-border p-12 text-center text-gray flex flex-col items-center justify-center min-h-[400px]">
              <Settings size={48} className="mb-4 text-gray/50" />
              <h3 className="text-xl font-bold text-nearBlack mb-2">{activeTab} Management</h3>
              <p>This module is currently under development. Mock UI for {activeTab} will be available soon.</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Admin;
