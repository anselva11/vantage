import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import ResearchDetail from './pages/ResearchDetail';
import Markets from './pages/Markets';
import Consulting from './pages/Consulting';
import About from './pages/About';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Team from './pages/Team';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children, hideNavFooter = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/research" element={<Layout><Research /></Layout>} />
        <Route path="/research/:id" element={<Layout><ResearchDetail /></Layout>} />
        <Route path="/markets" element={<Layout><Markets /></Layout>} />
        <Route path="/consulting" element={<Layout><Consulting /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/team" element={<Layout><Team /></Layout>} />
        <Route path="/insights" element={<Layout><Insights /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        
        {/* Auth & Dashboards - Hide default nav/footer for app feel */}
        <Route path="/login" element={<Layout hideNavFooter><Login /></Layout>} />
        <Route path="/dashboard" element={<Layout hideNavFooter><Dashboard /></Layout>} />
        <Route path="/admin" element={<Layout hideNavFooter><Admin /></Layout>} />
      </Routes>
    </>
  );
}

export default App;
