import React, { Fragment } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import { motion } from 'framer-motion';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  fleet: {
    id: number;
    name: string;
    image: string;
    totalValue: number;
    tokenPrice: number;
    expectedReturn: {
      min: number;
      max: number;
    };
    availableTokens: number;
    totalTokens: number;
    incomeStartDate: string;
    fleetSize: number;
    monthlyRevenue: number;
  };
}

export function DetailModal({ isOpen, onClose, fleet }: DetailModalProps) {
  const tabs = ['HIGHLIGHTS', 'FINANCIALS', 'DETAILS', 'BLOCKCHAIN', 'OFFERING'];

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
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                <div className="relative aspect-[16/9]">
                  <img
                    src={fleet.image}
                    alt={fleet.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      TOTAL INVESTMENT: ${fleet.totalValue.toLocaleString()}
                    </h2>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                      REGISTER / SIGN IN
                    </button>
                    <p className="mt-2 text-sm text-gray-600">
                      REGISTER AND SIGN IN TO START BUILDING YOUR PORTFOLIO!
                    </p>
                    <div className="mt-4">
                      <span className="text-blue-600 font-medium">STOCK: {fleet.availableTokens}</span>
                      <p className="text-sm text-gray-600">Max purchase: {Math.min(100, fleet.availableTokens)}</p>
                    </div>
                  </div>

                  <Tab.Group>
                    <Tab.List className="flex space-x-2 rounded-xl bg-gray-100 p-1">
                      {tabs.map((tab) => (
                        <Tab
                          key={tab}
                          className={({ selected }) =>
                            `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                            ${selected
                              ? 'bg-white text-blue-600 shadow'
                              : 'text-gray-700 hover:bg-white/[0.12] hover:text-blue-600'
                            }`
                          }
                        >
                          {tab}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="mt-6">
                      <Tab.Panel className="rounded-xl bg-white p-3">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">FLEET HIGHLIGHTS</h3>
                            <dl className="space-y-4">
                              <div>
                                <dt className="text-sm text-gray-500">Token Type</dt>
                                <dd className="text-sm font-medium text-gray-900">Standard Equity</dd>
                              </div>
                              <div>
                                <dt className="text-sm text-gray-500">Expected Income</dt>
                                <dd className="text-sm font-medium text-green-600">
                                  {fleet.expectedReturn.min}% - {fleet.expectedReturn.max}%
                                </dd>
                              </div>
                              <div>
                                <dt className="text-sm text-gray-500">Income Start Date</dt>
                                <dd className="text-sm font-medium text-gray-900">{fleet.incomeStartDate}</dd>
                              </div>
                              <div>
                                <dt className="text-sm text-gray-500">Income per Token</dt>
                                <dd className="text-sm font-medium text-gray-900">
                                  ${(fleet.monthlyRevenue / fleet.totalTokens * 12).toFixed(2)}/year
                                </dd>
                              </div>
                            </dl>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 mb-4">FLEET DETAILS</h3>
                            <dl className="space-y-4">
                              <div>
                                <dt className="text-sm text-gray-500">Fleet Size</dt>
                                <dd className="text-sm font-medium text-gray-900">{fleet.fleetSize} vehicles</dd>
                              </div>
                              <div>
                                <dt className="text-sm text-gray-500">Monthly Revenue</dt>
                                <dd className="text-sm font-medium text-gray-900">
                                  ${fleet.monthlyRevenue.toLocaleString()}
                                </dd>
                              </div>
                              <div>
                                <dt className="text-sm text-gray-500">Token Price</dt>
                                <dd className="text-sm font-medium text-gray-900">${fleet.tokenPrice}</dd>
                              </div>
                              <div>
                                <dt className="text-sm text-gray-500">Total Tokens</dt>
                                <dd className="text-sm font-medium text-gray-900">{fleet.totalTokens.toLocaleString()}</dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </Tab.Panel>
                      {/* Add other tab panels as needed */}
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 