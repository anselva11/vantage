import React from 'react';
import Hero from '../components/Hero';
import MarketTicker from '../components/MarketTicker';
import About from '../components/About';
import ResearchGrid from '../components/ResearchGrid';
import FeaturedResearch from '../components/FeaturedResearch';

const Home = () => {
  return (
    <>
      <Hero />
      <MarketTicker />
      <About />
      <ResearchGrid />
      <FeaturedResearch />
    </>
  );
};

export default Home;
