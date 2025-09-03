'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { Sun, Battery, Zap, Activity, Shield, Users, Eye, Leaf, ChevronLeft, ChevronRight, Calculator, Mail, MapPin, Clock, Truck, CheckCircle, ArrowRight, Star } from 'lucide-react'
import PageTransitionWrapper from '@/components/PageTransitionWrapper'
import QuoteModal from '@/components/QuoteModal'
import { punjabPricing, formatPKR, calculateSystemCost } from '@/config/pricing-punjab'

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <PageTransitionWrapper>
      <div className="min-h-screen pt-16">
        <HeroSection onGetQuote={() => setIsQuoteModalOpen(true)} />
        <PriceHighlights />
        <CustomerTrustStrip />
        <HowItWorksSection />
        <OurTechnologies />
        <WhyChoosePak />
        <SolarProjectHighlights />
        <SavingsCalculator onGetQuote={() => setIsQuoteModalOpen(true)} />
        <NewsletterCTA onGetQuote={() => setIsQuoteModalOpen(true)} />
      </div>
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </PageTransitionWrapper>
  )
}

function HeroSection({ onGetQuote }: { onGetQuote: () => void }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 solar-gradient"
      />
      
      {/* Animated Sun Rays */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-48 bg-gradient-to-t from-transparent to-yellow-300"
              style={{
                transform: `rotate(${i * 45}deg)`,
                transformOrigin: '50% 100%',
                top: '50%',
                left: '50%',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Solar Panels */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-20 bg-blue-900 rounded-lg opacity-30 hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-20 w-24 h-16 bg-blue-900 rounded-lg opacity-30 hidden lg:block"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <Sun className="w-12 h-12 text-yellow-300" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            سورج کی طاقت
            <br />
            <span className="text-yellow-300">استعمال کریں</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white/90">
            Harness the Power of the Sun
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Pakistan's leading solar energy solutions. Save money, help the environment, 
            and power your future with clean energy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(253, 186, 33, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetQuote}
            className="bg-[#FDBA21] text-[#003049] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
          >
            Free Quote - مفت قیمت
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#003049] transition-all duration-200"
          >
            Calculate Savings
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function PriceHighlights() {
  const priceHighlights = [
    {
      title: "Solar Panels",
      subtitle: "Monocrystalline",
      price: punjabPricing.solarPanels.monocrystalline.pricePerWatt,
      unit: "per watt",
      badge: "Most Popular",
      icon: Sun
    },
    {
      title: "Complete 5kW System",
      subtitle: "Installation Included",
      price: calculateSystemCost(5).total,
      unit: "total cost",
      badge: "Best Value",
      icon: Battery
    },
    {
      title: "Inverters",
      subtitle: "String Inverter",
      price: punjabPricing.inverters.string.pricePerKw,
      unit: "per kW",
      badge: "Reliable",
      icon: Zap
    }
  ]

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Latest Pakistan Prices - تازہ ترین قیمتیں
          </h2>
          <p className="text-lg text-gray-600">
            Transparent pricing with no hidden costs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {priceHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-blue-50 to-yellow-50 p-6 rounded-2xl border border-blue-100 overflow-hidden"
            >
              {item.badge && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {item.badge}
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {formatPKR(item.price)}
                </div>
                <div className="text-sm text-gray-500">{item.unit}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CustomerTrustStrip() {
  const trustMetrics = [
    {
      icon: MapPin,
      title: "15+ Cities",
      subtitle: "Across Pakistan",
      description: punjabPricing.citiesServed.slice(0, 5).join(", ") + "..."
    },
    {
      icon: Truck,
      title: "2-3 Days",
      subtitle: "Delivery Time",
      description: "Fast delivery to major Pakistan cities"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      subtitle: "Customer Service",
      description: "Urdu & English support available"
    },
    {
      icon: Shield,
      title: "25 Years",
      subtitle: "Panel Warranty",
      description: "Industry-leading warranty coverage"
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{metric.title}</h3>
              <p className="text-sm font-medium text-blue-600 mb-2">{metric.subtitle}</p>
              <p className="text-xs text-gray-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: "Get Quote",
      subtitle: "قیمت حاصل کریں",
      description: "Share your email and get a personalized quote within 24 hours",
      icon: Mail
    },
    {
      step: 2,
      title: "Site Survey",
      subtitle: "سائٹ کا جائزہ",
      description: "Our experts visit your location for free assessment",
      icon: Eye
    },
    {
      step: 3,
      title: "Installation",
      subtitle: "انسٹالیشن",
      description: "Professional installation by certified technicians",
      icon: Users
    },
    {
      step: 4,
      title: "Start Saving",
      subtitle: "بچت شروع کریں",
      description: "Begin saving on your electricity bills immediately",
      icon: CheckCircle
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How It Works - یہ کیسے کام کرتا ہے
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple 4-step process to get solar power for your home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400 to-blue-600 transform -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-blue-600 border-2 border-blue-600">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3">{step.subtitle}</p>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OurTechnologies() {
  const technologies = [
    {
      icon: Sun,
      title: "Solar Panels",
      description: "High-efficiency photovoltaic panels that convert sunlight into clean electricity",
      price: formatPKR(punjabPricing.solarPanels.monocrystalline.pricePerWatt),
      unit: "per watt",
      features: ["25-Year Warranty", "Weather Resistant", "22% Efficiency"]
    },
    {
      icon: Battery,
      title: "Solar Batteries",
      description: "Store excess energy for use during nighttime or power outages",
      price: formatPKR(punjabPricing.batteries.lithium.pricePerKwh),
      unit: "per kWh",
      features: ["15-Year Lifespan", "Fast Charging", "Smart Management"]
    },
    {
      icon: Zap,
      title: "Inverters",
      description: "Convert DC power from panels into AC power for your home",
      price: formatPKR(punjabPricing.inverters.string.pricePerKw),
      unit: "per kW",
      features: ["Grid-Tie Ready", "97% Efficiency", "10-Year Warranty"]
    },
    {
      icon: Activity,
      title: "Smart Meters",
      description: "Monitor your energy production and consumption in real-time",
      price: formatPKR(15000),
      unit: "complete unit",
      features: ["Real-Time Data", "Mobile App", "Usage Analytics"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Technologies - ہماری ٹیکنالوجی
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge solar solutions designed to maximize your energy independence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="solar-card p-6 group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg"
              >
                <tech.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3 text-[#003049]">{tech.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{tech.description}</p>
              
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-600">{tech.price}</div>
                <div className="text-xs text-gray-500">{tech.unit}</div>
              </div>
              
              <ul className="space-y-1">
                {tech.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChoosePak() {
  const features = [
    {
      icon: Shield,
      title: "25-Year Panel Warranty",
      description: "Industry-leading warranty coverage for peace of mind"
    },
    {
      icon: Users,
      title: "Certified Installers",
      description: "NABCEP certified professionals with years of experience"
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "Track your system's performance 24/7 with our mobile app"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Solutions",
      description: "Reduce your carbon footprint and help save the planet"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose PAK SOLARS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering the highest quality solar solutions with unmatched service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.3
              }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3 text-[#003049]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolarProjectHighlights() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const projects = [
    {
      id: 1,
      title: "Residential Solar Installation",
      location: "DHA Lahore, Pakistan",
      capacity: "8.5 kW",
      cost: formatPKR(calculateSystemCost(8.5).total),
      image: "/images/sectors/residential-sector.png"
    },
    {
      id: 2,
      title: "Commercial Solar Array",
      location: "Industrial Area, Faisalabad, Pakistan",
      capacity: "250 kW",
      cost: formatPKR(calculateSystemCost(250).total),
      image: "/placeholder-opzrl.png"
    },
    {
      id: 3,
      title: "Community Solar Farm",
      location: "Sahiwal, Pakistan",
      capacity: "2.5 MW",
      cost: formatPKR(calculateSystemCost(2500).total),
      image: "/large-solar-farm.png"
    },
    {
      id: 4,
      title: "School Solar Project",
      location: "Government School, Multan, Pakistan",
      capacity: "150 kW",
      cost: formatPKR(calculateSystemCost(150).total),
      image: "/placeholder-og1dg.png"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Project Highlights - منصوبے کی خصوصیات
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our successful solar installations across Pakistan
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden rounded-xl"
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {project.capacity}
                        </div>
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.cost}
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-[#003049]">{project.title}</h3>
                      <p className="text-lg text-gray-600">{project.location}</p>
                      <p className="text-gray-600">
                        This installation demonstrates our commitment to providing clean, 
                        renewable energy solutions that reduce environmental impact while 
                        delivering significant cost savings to our clients in Punjab.
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>✓ Professional Installation</span>
                        <span>✓ 25-Year Warranty</span>
                        <span>✓ Monitoring Included</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SavingsCalculator({ onGetQuote }: { onGetQuote: () => void }) {
  const [monthlyBill, setMonthlyBill] = useState(15000) // PKR
  const [systemSize, setSystemSize] = useState(5) // kW
  const [selectedCity, setSelectedCity] = useState('lahore')
  
  // Calculate detailed breakdown
  const systemCost = calculateSystemCost(systemSize, 'monocrystalline', 0, 'lithium', 'string', selectedCity)
  
  // Calculate monthly savings based on electricity rates
  const avgElectricityRate = 25 // PKR per unit
  const monthlyUnitsGenerated = systemSize * 4.5 * 30 // Assuming 4.5 hours of sun per day
  const monthlySavings = monthlyUnitsGenerated * avgElectricityRate
  const yearlySavings = monthlySavings * 12
  const paybackPeriod = Math.round(systemCost.total / yearlySavings)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Solar Calculator - سولر کیلکولیٹر
          </h2>
          <p className="text-xl text-gray-600">
            Calculate your exact savings with Pakistan electricity rates
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="solar-card p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Electric Bill (PKR)
                </label>
                <input
                  type="range"
                  min="5000"
                  max="50000"
                  step="1000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>₨5,000</span>
                  <span className="font-medium text-blue-600">{formatPKR(monthlyBill)}</span>
                  <span>₨50,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  System Size (kW)
                </label>
                <input
                  type="range"
                  min="3"
                  max="20"
                  step="0.5"
                  value={systemSize}
                  onChange={(e) => setSystemSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>3 kW</span>
                  <span className="font-medium text-blue-600">{systemSize} kW</span>
                  <span>20 kW</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {punjabPricing.citiesServed.map((city) => (
                    <option key={city} value={city.toLowerCase()}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#003049] mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Detailed Cost Breakdown
              </h3>
              
              {/* System Cost Breakdown */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Solar Panels ({systemSize} kW):</span>
                  <span className="font-medium">{formatPKR(systemCost.panelCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Inverter:</span>
                  <span className="font-medium">{formatPKR(systemCost.inverterCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Installation:</span>
                  <span className="font-medium">{formatPKR(systemCost.installationCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>GST (17%):</span>
                  <span className="font-medium">{formatPKR(systemCost.gstAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery to {selectedCity}:</span>
                  <span className="font-medium">{formatPKR(systemCost.deliveryCost)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total System Cost:</span>
                  <span className="text-blue-600">{formatPKR(systemCost.total)}</span>
                </div>
              </div>

              {/* Savings Breakdown */}
              <div className="space-y-3">
                <motion.div
                  className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200"
                >
                  <div className="text-2xl font-bold text-green-600">
                    {formatPKR(monthlySavings)}/month
                  </div>
                  <div className="text-sm text-gray-600">Monthly Savings</div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-yellow-50 to-blue-50 p-4 rounded-lg"
                >
                  <div className="text-2xl font-bold text-blue-600">
                    {formatPKR(yearlySavings)}
                  </div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg"
                >
                  <div className="text-2xl font-bold text-purple-600">
                    {paybackPeriod} years
                  </div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onGetQuote}
            className="w-full mt-8 bg-gradient-to-r from-yellow-400 to-blue-600 text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition-shadow duration-200"
          >
            Get Detailed Quote - تفصیلی قیمت حاصل کریں
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function NewsletterCTA({ onGetQuote }: { onGetQuote: () => void }) {
  const [email, setEmail] = useState('')

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 solar-gradient opacity-90" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-32 h-32 opacity-20"
      >
        <Sun className="w-full h-full text-yellow-300" />
      </motion.div>
      
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-24 h-24 opacity-20"
      >
        <Sun className="w-full h-full text-yellow-300" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Go Solar? - سولر کے لیے تیار ہیں؟
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Pakistan families saving money with solar energy. 
            Get your free quote today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(253, 186, 33, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetQuote}
              className="bg-[#FDBA21] text-[#003049] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Get Free Quote - مفت قیمت
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#003049] transition-all duration-200"
            >
              Call Now - ابھی کال کریں
            </motion.button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-white/70">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free Assessment</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Pakistan-wide Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
