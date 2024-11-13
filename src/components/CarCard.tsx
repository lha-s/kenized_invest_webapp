import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookingModal } from './BookingModal';

interface CarCardProps {
  car: {
    id: number;
    name: string;
    image: string;
    pricePerMinute: number;
    available: boolean;
  };
}

export function CarCard({ car }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative aspect-[16/9]">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              car.available 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {car.available ? 'Available' : 'Rented'}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
          <div className="mt-1 flex items-baseline gap-x-2">
            <span className="text-2xl font-bold text-blue-600">
              ${car.pricePerMinute.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">/minute</span>
          </div>
          
          <button
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            Book Now
          </button>
        </div>
      </motion.div>

      <BookingModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        car={car}
      />
    </>
  );
}