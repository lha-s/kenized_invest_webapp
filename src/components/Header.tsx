import React from 'react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">🚗 FleetBlock</span>
          </div>
          <nav className="flex space-x-4">
            <a href="#investments" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Fleet Investments
            </a>
            <a href="#how-it-works" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Connect Wallet
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}