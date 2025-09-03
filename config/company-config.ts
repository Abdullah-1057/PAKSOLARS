// Centralized company configuration
// Update this file to change company details across the entire website

export const companyConfig = {
  // Company Information
  name: "PAK SOLARS",
  tagline: "Leading Pakistan's clean energy revolution",
  description: "Premium solar solutions for a brighter, sustainable future",
  
  // Contact Information
  contact: {
    location: "Lahore, Punjab, Pakistan",
    phone: {
      primary: "03007960565",
      primaryName: "M Rizwan Ali",
      secondary: "03019272576", 
      secondaryName: "M Haris (Office Manager)"
    },
    email: {
      primary: "info@paksolars.com",
      secondary: "support@paksolars.com"
    },
    workingHours: [
      "Mon - Fri: 8 AM - 6 PM",
      "Sat: 9 AM - 4 PM", 
      "Sun: Closed"
    ]
  },

  // Leadership Team
  leadership: [
    {
      name: "Muhammad Rizwan Ali",
      position: "Director",
      phone: "03007960565"
    },
    {
      name: "Muhammad Inaam Ur Rehman", 
      position: "Director",
      phone: "03007960565"
    },
    {
      name: "Rana Imran Zafar",
      position: "Finance Consultant", 
      phone: "03007960565"
    }
  ],

  // Service Areas
  serviceAreas: [
    "Lahore", "Karachi", "Islamabad", "Faisalabad", 
    "Rawalpindi", "Multan", "Peshawar", "Quetta"
  ],

  // Default Calculator Settings (can be overridden by user)
  defaultCalculator: {
    // Default prices (user can change these)
    panelPricePerWatt: 45, // PKR per watt
    wattsPerPanel: 550, // watts per panel
    installationFeePerWatt: 15, // PKR per watt
    inverterPricePerKw: 25000, // PKR per kW
    batteryPricePerKwh: 35000, // PKR per kWh
    gstRate: 17, // percentage
    deliveryFee: 5000, // PKR
    
    // System defaults
    defaultSystemSize: 5, // kW
    defaultMonthlyBill: 15000, // PKR
    averageSunHours: 4.5, // hours per day
    electricityRate: 25 // PKR per unit
  },

  // Social Media Links
  socialMedia: {
    facebook: "#",
    twitter: "#", 
    instagram: "#",
    linkedin: "#"
  },

  // Company Features
  features: [
    {
      icon: "Shield",
      title: "25-Year Panel Warranty",
      description: "Industry-leading warranty coverage for peace of mind"
    },
    {
      icon: "Users", 
      title: "Certified Installers",
      description: "NABCEP certified professionals with years of experience"
    },
    {
      icon: "Eye",
      title: "Real-Time Monitoring", 
      description: "Track your system's performance 24/7 with our mobile app"
    },
    {
      icon: "Leaf",
      title: "Eco-Friendly Solutions",
      description: "Reduce your carbon footprint and help save the planet"
    }
  ],

  // Trust Metrics
  trustMetrics: [
    {
      icon: "MapPin",
      title: "15+ Cities",
      subtitle: "Across Pakistan",
      description: "Lahore, Karachi, Islamabad, Faisalabad..."
    },
    {
      icon: "Truck",
      title: "2-3 Days", 
      subtitle: "Delivery Time",
      description: "Fast delivery to major Pakistan cities"
    },
    {
      icon: "Clock",
      title: "24/7 Support",
      subtitle: "Customer Service", 
      description: "Urdu & English support available"
    },
    {
      icon: "Shield",
      title: "25 Years",
      subtitle: "Panel Warranty",
      description: "Industry-leading warranty coverage"
    }
  ]
}

// Helper function to get formatted phone numbers
export const getFormattedContact = () => {
  return {
    primary: `${companyConfig.contact.phone.primaryName}: ${companyConfig.contact.phone.primary}`,
    secondary: `${companyConfig.contact.phone.secondaryName}: ${companyConfig.contact.phone.secondary}`
  }
}

// Helper function to get leadership info
export const getLeadershipInfo = () => {
  return companyConfig.leadership.map(leader => 
    `— ${leader.name}, ${leader.position}`
  ).join('\n')
}
