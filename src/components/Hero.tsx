import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative bg-blue-600 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-blue-600 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block">Invest in Premium</span>
                <span className="block text-blue-200">Car Fleets</span>
              </motion.h1>
              <motion.p 
                className="mt-3 text-base text-blue-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Own a piece of premium car fleets through blockchain technology. 
                Earn passive income from rental revenues and benefit from fleet appreciation.
              </motion.p>
              <motion.div 
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="rounded-md shadow">
                  <a
                    href="#investments"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                  >
                    View Investments
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#how-it-works"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
                  >
                    How It Works
                  </a>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}