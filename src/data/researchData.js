import img1 from '../assets/1.webp';
import img2 from '../assets/2.png';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';

export const featuredResearch = [
  {
    id: "res-1",
    date: "September 2026",
    category: "MACRO",
    title: "Indonesia Economic Outlook 2026",
    summary: "An in-depth analysis of Indonesia's GDP growth, inflation trajectory, and monetary policy implications for the coming year.",
    image: img1
  },
  {
    id: "res-2",
    date: "August 2026",
    category: "INDUSTRY",
    title: "Consumer Sector Outlook",
    summary: "Evaluating the shifting dynamics in consumer spending, retail margins, and e-commerce penetration across Southeast Asia.",
    image: img2
  },
  {
    id: "res-3",
    date: "July 2026",
    category: "MARKETS",
    title: "Global Markets Quarterly",
    summary: "A comprehensive review of cross-asset performance, highlighting key trends in equities, fixed income, and commodities.",
    image: img3
  }
];

export const allResearch = [
  ...featuredResearch,
  {
    id: "res-4",
    date: "June 2026",
    category: "EQUITY",
    title: "Tech Sector Valuation Multiples",
    summary: "Assessing current software and semiconductor valuations against historical averages and growth projections.",
    image: img4
  },
  {
    id: "res-5",
    date: "May 2026",
    category: "STRATEGY",
    title: "Asset Allocation in a High-Yield Environment",
    summary: "Strategic portfolio adjustments for institutional investors navigating structurally higher interest rates.",
    image: img5
  },
  {
    id: "res-6",
    date: "April 2026",
    category: "MACRO",
    title: "Geopolitical Shifts and Supply Chains",
    summary: "An analysis of how changing geopolitical dynamics are forcing companies to rethink their global supply chains.",
    image: img6
  },
];
