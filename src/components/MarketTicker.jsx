import React from 'react';
import { marketData } from '../data/marketData';

const MarketTicker = () => {
  return (
    <div className="w-full bg-nearBlack border-b border-gray/20 overflow-hidden py-2 text-white text-sm">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Render twice for seamless loop */}
        {[...marketData, ...marketData].map((item, index) => (
          <div key={index} className="inline-flex items-center px-8 border-r border-gray/20 last:border-r-0">
            <span className="font-semibold text-gray mr-3">{item.symbol}</span>
            <span className="mr-3 font-medium">
              {item.currency === '%' ? '' : item.currency === 'USD' ? '$' : ''}
              {item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              {item.currency === '%' ? '%' : ''}
            </span>
            <span className={`font-medium ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {item.change > 0 ? '+' : ''}{item.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketTicker;
