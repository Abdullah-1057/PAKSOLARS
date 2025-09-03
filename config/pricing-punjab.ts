// Centralized pricing configuration for Punjab, Pakistan
export const punjabPricing = {
  // Solar Panel Prices (per watt in PKR)
  solarPanels: {
    monocrystalline: {
      pricePerWatt: 85, // PKR per watt
      efficiency: 22,
      warranty: 25
    },
    polycrystalline: {
      pricePerWatt: 75, // PKR per watt
      efficiency: 18,
      warranty: 25
    },
    bifacial: {
      pricePerWatt: 95, // PKR per watt
      efficiency: 24,
      warranty: 25
    }
  },

  // Battery Prices (per kWh in PKR)
  batteries: {
    lithium: {
      pricePerKwh: 45000, // PKR per kWh
      lifespan: 15,
      warranty: 10
    },
    leadAcid: {
      pricePerKwh: 25000, // PKR per kWh
      lifespan: 5,
      warranty: 2
    }
  },

  // Inverter Prices (per kW in PKR)
  inverters: {
    string: {
      pricePerKw: 18000, // PKR per kW
      efficiency: 97,
      warranty: 10
    },
    microInverter: {
      pricePerKw: 25000, // PKR per kW
      efficiency: 95,
      warranty: 15
    }
  },

  // Installation and other costs
  installation: {
    laborCostPerKw: 8000, // PKR per kW
    structureCostPerKw: 12000, // PKR per kW
    wiringCostPerKw: 5000, // PKR per kW
  },

  // Taxes and fees
  taxes: {
    gst: 0.17, // 17% GST
    customDuty: 0.05, // 5% custom duty on imported components
  },

  // Delivery costs by city
  delivery: {
    lahore: 2500,
    karachi: 4500,
    islamabad: 3000,
    faisalabad: 3500,
    rawalpindi: 3000,
    multan: 4000,
    gujranwala: 3200,
    sialkot: 3800,
    bahawalpur: 4200,
    sargodha: 3600,
    default: 5000 // For other cities
  },

  // Electricity rates (per unit in PKR)
  electricityRates: {
    residential: {
      tier1: 16.48, // 0-100 units
      tier2: 22.95, // 101-200 units
      tier3: 27.14, // 201-300 units
      tier4: 32.03, // 301-700 units
      tier5: 35.24, // Above 700 units
    },
    commercial: 28.50,
    industrial: 24.78
  },

  // Cities served in Punjab
  citiesServed: [
    'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 
    'Sialkot', 'Bahawalpur', 'Sargodha', 'Sheikhupura', 'Jhang',
    'Kasur', 'Okara', 'Sahiwal', 'Gujrat', 'Wah Cantonment'
  ]
}

// Utility functions for pricing
export const formatPKR = (amount: number): string => {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return '₨0'
  }
  
  // Simple formatting without Intl to avoid SSR issues
  const formatted = Math.round(amount).toLocaleString('en-US')
  return `₨${formatted}`
}

export const calculateSystemCost = (
  systemSizeKw: number,
  panelType: keyof typeof punjabPricing.solarPanels = 'monocrystalline',
  batteryKwh: number = 0,
  batteryType: keyof typeof punjabPricing.batteries = 'lithium',
  inverterType: keyof typeof punjabPricing.inverters = 'string',
  city: string = 'lahore'
) => {
  const panelCost = systemSizeKw * 1000 * punjabPricing.solarPanels[panelType].pricePerWatt
  const batteryCost = batteryKwh * punjabPricing.batteries[batteryType].pricePerKwh
  const inverterCost = systemSizeKw * punjabPricing.inverters[inverterType].pricePerKw
  const installationCost = systemSizeKw * (
    punjabPricing.installation.laborCostPerKw +
    punjabPricing.installation.structureCostPerKw +
    punjabPricing.installation.wiringCostPerKw
  )

  const subtotal = panelCost + batteryCost + inverterCost + installationCost
  const gstAmount = subtotal * punjabPricing.taxes.gst
  const customDutyAmount = (panelCost + inverterCost) * punjabPricing.taxes.customDuty
  
  const cityKey = city.toLowerCase() as keyof typeof punjabPricing.delivery
  const deliveryCost = punjabPricing.delivery[cityKey] || punjabPricing.delivery.default

  const total = subtotal + gstAmount + customDutyAmount + deliveryCost

  return {
    panelCost,
    batteryCost,
    inverterCost,
    installationCost,
    subtotal,
    gstAmount,
    customDutyAmount,
    deliveryCost,
    total
  }
}
