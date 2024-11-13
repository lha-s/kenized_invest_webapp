import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InvestModal } from './InvestModal';
import { DetailModal } from './DetailModal';
import { Fleet } from '../data/fleets';

interface FleetCardProps {
  fleet: Fleet;
}

export function FleetCard({ fleet }: FleetCardProps) {
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  
  const progressPercentage = ((fleet.totalTokens - fleet.availableTokens) / fleet.totalTokens) * 100;
  
  return (
    <>
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative aspect-[16/9]">
          <img
            src={fleet.image}
            alt={fleet.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {fleet.fleetSize} vehicles
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">{fleet.name}</h3>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Total Value</p>
              <p className="text-lg font-bold text-gray-900">
                ${fleet.totalValue.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Token Price</p>
              <p className="text-lg font-bold text-blue-600">
                ${fleet.tokenPrice}
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Expected Return</span>
              <span className="text-sm font-medium text-green-600">
                {fleet.expectedReturn.min}% - {fleet.expectedReturn.max}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="mt-1 flex justify-between text-xs text-gray-500">
              <span>{fleet.availableTokens.toLocaleString()} tokens available</span>
              <span>{fleet.totalTokens.toLocaleString()} total</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={() => setIsDetailModalOpen(true)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              Details
            </button>
            <button
              onClick={() => setIsInvestModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                />
              </svg>
              Invest
            </button>
          </div>
        </div>
      </motion.div>

      <InvestModal
        isOpen={isInvestModalOpen}
        onClose={() => setIsInvestModalOpen(false)}
        fleet={fleet}
      />

      <DetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        fleet={fleet}
      />
    </>
  );
} 