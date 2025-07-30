// App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import {
  Calculator, Bitcoin, DollarSign, TrendingUp, Download, RefreshCw,
  Zap, Shield, Globe, Target, ArrowRight, BarChart3, Wallet, Users, Clock
} from 'lucide-react';

const VALID_DEAL_IDS = ['ATLGRU-60K', 'ATLGRU-12-07-UBS-17025']; // Expandable

const App = () => {
  const [dealID, setDealID] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);

  const handleAccess = () => {
    if (VALID_DEAL_IDS.includes(dealID.trim().toUpperCase())) {
      setAccessGranted(true);
    } else {
      alert('Invalid Deal ID. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {!accessGranted ? (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
            <Shield className="w-10 h-10 text-green-400 mb-4 mx-auto" />
            <h1 className="text-2xl font-bold mb-4">Enter Deal ID</h1>
            <input
              value={dealID}
              onChange={(e) => setDealID(e.target.value)}
              placeholder="e.g., ATLGRU-60K"
              className="w-full px-4 py-3 text-black rounded-xl text-center"
            />
            <button
              onClick={handleAccess}
              className="mt-4 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-xl font-semibold"
            >
              Access Calculator
            </button>
          </div>
        </div>
      ) : (
        <BTCTrancheCalculator />
      )}
    </div>
  );
};

export default App;

// ⬇️ Import BTCTrancheCalculator from a separate file or inline (as you've already written it)
// You can copy/paste the full BTCTrancheCalculator component you’ve refined earlier in the same file or separate it

// Optional Vercel Config (vercel.json)
// {
//   "rewrites": [
//     { "source": "/(.*)", "destination": "/index.html" }
//   ]
// }

// Optional package.json additions:
// "scripts": {
//   "dev": "vite",
//   "build": "vite build",
//   "preview": "vite preview"
// },
// then deploy with Vercel CLI or GitHub push.
