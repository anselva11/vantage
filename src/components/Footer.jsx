import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-nearBlack text-white pt-20 pb-10 border-t border-nearBlack">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold tracking-widest uppercase mb-4">VANTAGE</h2>
            <p className="text-gray text-sm leading-relaxed max-w-xs">
              Financial Research & Consulting
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wide uppercase text-gray">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/research" className="hover:text-gray transition-colors">Research</Link></li>
              <li><Link to="/markets" className="hover:text-gray transition-colors">Markets</Link></li>
              <li><Link to="/consulting" className="hover:text-gray transition-colors">Consulting</Link></li>
              <li><Link to="/insights" className="hover:text-gray transition-colors">Insights</Link></li>
              <li><Link to="/about" className="hover:text-gray transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-gray transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wide uppercase text-gray">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="#" className="hover:text-gray transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gray transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-gray transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-6 tracking-wide uppercase text-gray">Contact</h4>
            <ul className="space-y-4 text-sm text-gray">
              <li>info@vantage.com</li>
              <li>085150956644</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray/30 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-xs text-gray max-w-3xl">
            Information provided by VANTAGE is for informational and research purposes only and does not constitute investment advice or a recommendation to buy or sell any security.
          </p>
          <p className="text-xs text-gray whitespace-nowrap">
            &copy; 2026 VANTAGE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
