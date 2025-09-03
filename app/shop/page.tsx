'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, ShoppingCart, Star, Award, Zap, Battery, Sun, Activity, MapPin, Truck } from 'lucide-react'
import PageTransitionWrapper from '@/components/PageTransitionWrapper'
import QuoteModal from '@/components/QuoteModal'
import { formatPKR } from '@/config/pricing-punjab'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBrand, setSelectedBrand] = useState('all')

  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const products = [
    {
      id: 1,
      name: "Premium Monocrystalline Solar Panel 400W",
      category: "panel",
      brand: "Jinko Solar",
      rating: 4.9,
      reviews: 156,
      badge: "Best Seller",
      image: "/placeholder.svg?height=300&width=300",
      features: ["25-Year Warranty", "22% Efficiency", "Weather Resistant"],
      deliveryNote: "Free delivery in Lahore, Faisalabad, Multan"
    },
    {
      id: 2,
      name: "Lithium Solar Battery 10kWh",
      category: "battery",
      brand: "BYD",
      rating: 4.8,
      reviews: 89,
      badge: "Premium",
      image: "/placeholder.svg?height=300&width=300",
      features: ["15-Year Lifespan", "10-Year Warranty", "App Control"],
      deliveryNote: "Installation included in major Pakistan cities"
    },
    {
      id: 3,
      name: "String Inverter 5kW",
      category: "inverter",
      brand: "Growatt",
      rating: 4.7,
      reviews: 234,
      image: "/placeholder.svg?height=300&width=300",
      features: ["Grid-Tie Ready", "97% Efficiency", "10-Year Warranty"],
      deliveryNote: "2-3 days delivery across Pakistan"
    },
    {
      id: 4,
      name: "Smart Energy Monitor Pro",
      category: "meter",
      brand: "Eastron",
      rating: 4.6,
      reviews: 178,
      badge: "New",
      image: "/placeholder.svg?height=300&width=300",
      features: ["Real-Time Data", "Mobile App", "WiFi Connectivity"],
      deliveryNote: "Same day delivery in Lahore"
    },
    {
      id: 5,
      name: "Polycrystalline Solar Panel 350W",
      category: "panel",
      brand: "Canadian Solar",
      rating: 4.8,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=300",
      features: ["25-Year Warranty", "18% Efficiency", "Hail Resistant"],
      deliveryNote: "Available in all Pakistan cities"
    },
    {
      id: 6,
      name: "Lead Acid Battery Bank 200Ah",
      category: "battery",
      brand: "Exide",
      rating: 4.4,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=300",
      features: ["5-Year Lifespan", "2-Year Warranty", "Deep Cycle"],
      deliveryNote: "Heavy item - truck delivery required"
    },
    {
      id: 7,
      name: "Micro Inverter 300W",
      category: "inverter",
      brand: "Enphase",
      rating: 4.5,
      reviews: 145,
      image: "/placeholder.svg?height=300&width=300",
      features: ["Module-Level MPPT", "25-Year Warranty", "Monitoring"],
      deliveryNote: "Express delivery available"
    },
    {
      id: 8,
      name: "Basic Energy Meter",
      category: "meter",
      brand: "Local",
      rating: 4.2,
      reviews: 92,
      image: "/placeholder.svg?height=300&width=300",
      features: ["LCD Display", "kWh Measurement", "Easy Installation"],
      deliveryNote: "Budget-friendly option"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', icon: Sun },
    { id: 'panel', name: 'Solar Panels', icon: Sun },
    { id: 'battery', name: 'Batteries', icon: Battery },
    { id: 'inverter', name: 'Inverters', icon: Zap },
    { id: 'meter', name: 'Smart Meters', icon: Activity }
  ]

  const brands = ['all', 'Jinko Solar', 'BYD', 'Growatt', 'Eastron', 'Canadian Solar', 'Exide', 'Enphase', 'Local']

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory
    const brandMatch = selectedBrand === 'all' || product.brand === selectedBrand
    return categoryMatch && brandMatch
  })

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller': return 'bg-green-500'
      case 'Premium': return 'bg-purple-500'
      case 'New': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <PageTransitionWrapper>
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Solar Shop - سولر شاپ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium solar equipment with fast delivery across Pakistan
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden w-full flex items-center justify-center space-x-2 bg-white p-4 rounded-lg shadow-md mb-4"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>

              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className={`${isFilterOpen ? 'block' : 'hidden'} lg:block bg-white p-6 rounded-lg shadow-md space-y-6`}
                >
                  {/* Category Filter */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#003049]">Category</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <motion.button
                          key={category.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                            selectedCategory === category.id
                              ? 'bg-gradient-to-r from-yellow-400 to-blue-600 text-white'
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <category.icon className="w-5 h-5" />
                          <span>{category.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#003049]">Brand</h3>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand === 'all' ? 'All Brands' : brand}
                        </option>
                      ))}
                    </select>
                  </div>


                </motion.div>
              </AnimatePresence>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-xl shadow-md overflow-hidden group"
                    >
                      <div className="relative">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.badge && (
                          <div className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                            {product.badge}
                          </div>
                        )}
                        <div className="absolute top-3 right-3 flex space-x-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-[#003049] mb-2 line-clamp-2">{product.name}</h3>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-sm text-gray-500">{product.rating}</span>
                          <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                        </div>

                        <ul className="space-y-1 mb-4">
                          {product.features.map((feature) => (
                            <li key={feature} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* Delivery Note */}
                        <div className="flex items-center text-xs text-blue-600 mb-4 bg-blue-50 p-2 rounded">
                          <Truck className="w-3 h-3 mr-1" />
                          {product.deliveryNote}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-blue-600">Contact for Pricing</span>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsQuoteModalOpen(true)}
                          className="w-full bg-gradient-to-r from-yellow-400 to-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow duration-200"
                        >
                          <ShoppingCart className="w-5 h-5" />
                          <span>Get Quote</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredProducts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-gray-400 mb-4">
                    <ShoppingCart className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                  <p className="text-gray-500">Try adjusting your filters to see more products</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </PageTransitionWrapper>
  )
}
