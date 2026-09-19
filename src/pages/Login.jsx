import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@vantage.com') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-offWhite p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="text-3xl font-bold tracking-widest uppercase mb-6 inline-block">
            VANTAGE
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Client Portal</h1>
          <p className="text-gray text-sm mt-2">Sign in to access your intelligence dashboard</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 border border-border shadow-sm"
        >
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-gray uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-offWhite border border-border px-4 py-3 focus:outline-none focus:border-nearBlack transition-colors text-sm"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold text-gray uppercase tracking-wider">Password</label>
                <a href="#" className="text-xs text-gray hover:text-nearBlack transition-colors">Forgot?</a>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-offWhite border border-border px-4 py-3 focus:outline-none focus:border-nearBlack transition-colors text-sm"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-nearBlack text-white font-semibold py-4 hover:bg-black transition-colors"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-8 text-center text-xs text-gray border-t border-border pt-6">
            Protected by institutional grade security.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
