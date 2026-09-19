export const marketData = [
  { symbol: "S&P 500", name: "S&P 500", price: 5824.12, change: 0.45, changeValue: 26.21, currency: "USD" },
  { symbol: "NASDAQ", name: "NASDAQ", price: 18320.45, change: 0.65, changeValue: 118.3, currency: "USD" },
  { symbol: "IDX Composite", name: "Jakarta Composite", price: 7421.3, change: -0.12, changeValue: -8.9, currency: "IDR" },
  { symbol: "GOLD", name: "Gold", price: 2450.25, change: 1.24, changeValue: 30.01, currency: "USD" },
  { symbol: "BRENT", name: "Brent Crude", price: 82.15, change: -0.5, changeValue: -0.41, currency: "USD" },
  { symbol: "BTC", name: "Bitcoin", price: 65124.00, change: 2.1, changeValue: 1340.5, currency: "USD" },
  { symbol: "USD/IDR", name: "US Dollar / Indonesian Rupiah", price: 15450, change: -0.2, changeValue: -30.9, currency: "IDR" },
  { symbol: "10Y US", name: "10Y US Treasury", price: 4.21, change: 0.05, changeValue: 0.05, currency: "%" }
];

export const generateSparkline = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    time: i,
    value: 100 + Math.random() * 20 - 10
  }));
};

export const marketPerformanceData = Array.from({ length: 30 }, (_, i) => ({
  date: `2026-09-${(i + 1).toString().padStart(2, '0')}`,
  sp500: 5500 + i * 10 + Math.random() * 50 - 25,
  nasdaq: 17500 + i * 25 + Math.random() * 100 - 50,
  idx: 7200 + i * 5 + Math.random() * 30 - 15,
}));
