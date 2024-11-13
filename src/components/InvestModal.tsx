import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

interface InvestModalProps {
  isOpen: boolean;
  onClose: () => void;
  fleet: {
    name: string;
    tokenPrice: number;
    availableTokens: number;
  };
}

export function InvestModal({ isOpen, onClose, fleet }: InvestModalProps) {
  const [tokenAmount, setTokenAmount] = useState(1);
  const [loading, setLoading] = useState(false);

  const maxTokens = Math.min(100, fleet.availableTokens);
  const totalInvestment = tokenAmount * fleet.tokenPrice;

  const handleInvestment = async () => {
    setLoading(true);
    // Simulate blockchain transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.success(`Successfully invested in ${tokenAmount} tokens of ${fleet.name}!`);
    setLoading(false);
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-xl font-semibold text-gray-900">
                  Invest in {fleet.name}
                </Dialog.Title>

                <div className="mt-6">
                  <label className="text-sm font-medium text-gray-700">
                    Number of Tokens
                  </label>
                  <div className="mt-2">
                    <input
                      type="range"
                      min="1"
                      max={maxTokens}
                      value={tokenAmount}
                      onChange={(e) => setTokenAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm font-medium text-gray-900">
                        {tokenAmount} tokens
                      </span>
                      <span className="text-sm font-medium text-blue-600">
                        ${totalInvestment.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Price per token</span>
                      <span className="font-medium">${fleet.tokenPrice}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-700">Number of tokens</span>
                      <span className="font-medium">{tokenAmount}</span>
                    </div>
                    <div className="border-t border-gray-200 mt-2 pt-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Total Investment</span>
                        <span className="font-bold text-blue-600">
                          ${totalInvestment.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                      onClick={handleInvestment}
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Confirm Investment'}
                    </motion.button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 