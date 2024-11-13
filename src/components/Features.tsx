import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Fractional Ownership',
    description: 'Own a piece of premium car fleets through blockchain-based tokens.',
    icon: '🔗',
  },
  {
    title: 'Passive Income',
    description: 'Earn monthly returns from fleet rental operations and appreciation.',
    icon: '💰',
  },
  {
    title: 'Transparent Returns',
    description: 'Track your earnings and fleet performance in real-time.',
    icon: '📊',
  },
  {
    title: 'Instant Liquidity',
    description: 'Trade your fleet tokens anytime through our marketplace.',
    icon: '⚡️',
  },
];

export function Features() {
  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Invest in car fleets with blockchain technology
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}