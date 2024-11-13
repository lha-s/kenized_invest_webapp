// Define types for better type safety
export interface Fleet {
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
  details: {
    tokenType: string;
    propertyType: string;
    fullAddress: string;
    country: string;
    source: string;
    neighborhood: string;
    constructionYear: number;
    bedroomBath?: string;
    rentalType: string;
    isRented: boolean;
    hasRentSubsidy: boolean;
  };
}

// Car fleet configurations
const nissanFleet: Fleet = {
  id: 1,
  name: 'Nissan Sunny Fleet',
  image: './assets/images/nissan/nissan.png',
  totalValue: 450000,
  tokenPrice: 25,
  expectedReturn: {
    min: 5,
    max: 8
  },
  availableTokens: 9000,
  totalTokens: 18000,
  incomeStartDate: '2024-03-01',
  fleetSize: 15,
  monthlyRevenue: 6750,
  details: {
    tokenType: 'Standard Equity',
    propertyType: 'Economy Fleet',
    fullAddress: 'Dubai, UAE',
    country: 'UAE',
    source: 'FleetBlock',
    neighborhood: 'Dubai Marina',
    constructionYear: 2023,
    rentalType: 'Short Term',
    isRented: false,
    hasRentSubsidy: false
  }
};

const teslaFleet: Fleet = {
  id: 2,
  name: 'Tesla Model 3 Fleet',
  image: './assets/images/tesla/tesla.png',
  totalValue: 1250000,
  tokenPrice: 50,
  expectedReturn: {
    min: 7,
    max: 12
  },
  availableTokens: 12500,
  totalTokens: 25000,
  incomeStartDate: '2024-03-15',
  fleetSize: 10,
  monthlyRevenue: 25000,
  details: {
    tokenType: 'Standard Equity',
    propertyType: 'Electric Premium Fleet',
    fullAddress: 'Los Angeles, USA',
    country: 'USA',
    source: 'FleetBlock',
    neighborhood: 'Beverly Hills',
    constructionYear: 2024,
    rentalType: 'Long Term',
    isRented: false,
    hasRentSubsidy: false
  }
};

const porscheFleet: Fleet = {
  id: 3,
  name: 'Porsche GT3 RS Fleet',
  image: './assets/images/porsche/porsche.png',
  totalValue: 3500000,
  tokenPrice: 100,
  expectedReturn: {
    min: 15,
    max: 25
  },
  availableTokens: 17500,
  totalTokens: 35000,
  incomeStartDate: '2024-04-01',
  fleetSize: 5,
  monthlyRevenue: 87500,
  details: {
    tokenType: 'Standard Equity',
    propertyType: 'Luxury Sport Fleet',
    fullAddress: 'Monaco',
    country: 'Monaco',
    source: 'FleetBlock',
    neighborhood: 'Monte Carlo',
    constructionYear: 2024,
    rentalType: 'Short Term',
    isRented: false,
    hasRentSubsidy: false
  }
};

// Export all fleets as an array
export const FLEET_INVESTMENTS: Fleet[] = [
  nissanFleet,
  teslaFleet,
  porscheFleet
];

// Export individual fleets for direct access if needed
export {
  nissanFleet,
  teslaFleet,
  porscheFleet
}; 