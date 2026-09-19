import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted", formData);
    alert("Thank you for your inquiry. A member of our team will contact you shortly.");
    setFormData({
      fullName: '', company: '', email: '', phone: '', service: '', message: ''
    });
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight"
            >
              Let’s Talk About Your Next Decision.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray leading-relaxed mb-12 max-w-md"
            >
              Connect with our advisory team to discuss how VANTAGE can support your strategic objectives.
            </motion.p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-semibold mb-2 tracking-widest uppercase text-gray">Global Headquarters</h4>
                <p className="text-nearBlack font-medium">
                  Jakarta<br />
                  Indonesia
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold mb-2 tracking-widest uppercase text-gray">Contact</h4>
                <p className="text-nearBlack font-medium">
                  info@vantage.com<br />
                  085150956644
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold mb-2 tracking-widest uppercase text-gray">Business Hours</h4>
                <p className="text-nearBlack font-medium">
                  Monday – Friday<br />
                  8:00 AM – 6:00 PM EST
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-offWhite p-8 md:p-12 border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-border px-4 py-3 focus:outline-none focus:border-nearBlack transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray uppercase tracking-wider mb-2">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white border border-border px-4 py-3 focus:outline-none focus:border-nearBlack transition-colors text-sm"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-border px-4 py-3 focus:outline-none focus:border-nearBlack transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray uppercase tracking-wider mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-border px-4 py-3 focus:outline-none focus:border-nearBlack transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray uppercase tracking-wider mb-2">Service</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white border border-border px-4 py-3 focus:outline-none focus:border-nearBlack transition-colors text-sm appearance-none"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Research">Research</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Financial Modeling">Financial Modeling</option>
                  <option value="Valuation">Valuation</option>
                  <option value="Data & Analytics">Data & Analytics</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-white border border-border px-4 py-3 focus:outline-none focus:border-nearBlack transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-nearBlack text-white font-semibold py-4 hover:bg-black transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
