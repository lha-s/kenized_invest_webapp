import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FleetCard } from './components/FleetCard';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { FLEET_INVESTMENTS } from './data/fleets'; // {{ edit_1 }}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <main>
        <section className="py-16 bg-white" id="investments">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Fleet Investments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FLEET_INVESTMENTS.map((fleet) => (
                <FleetCard key={fleet.id} fleet={fleet} />
              ))}
            </div>
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;