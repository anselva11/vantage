import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Research', path: '/research' },
    { name: 'Markets', path: '/markets' },
    { name: 'Consulting', path: '/consulting' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
  ];

  const navbarBg = isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm text-nearBlack' : 'bg-transparent text-white';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-widest uppercase">
          VANTAGE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-5 py-2 text-sm font-medium border transition-colors ${
              isScrolled || !isHome
                ? 'border-nearBlack text-nearBlack hover:bg-nearBlack hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-nearBlack'
            }`}
          >
            Contact Us
          </Link>
          <Link to="/login" className="text-sm font-medium hover:opacity-70 transition-opacity">
            Login
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-border shadow-lg md:hidden text-nearBlack flex flex-col"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-6 py-4 border-b border-border/50 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link
                to="/contact"
                className="px-5 py-3 text-center text-sm font-medium border border-nearBlack text-nearBlack hover:bg-nearBlack hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/login"
                className="text-center text-sm font-medium opacity-70"
                onClick={() => setMobileMenuOpen(false)}
              >
                Client Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
