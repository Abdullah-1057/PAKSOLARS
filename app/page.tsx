'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { Sun, Battery, Zap, Activity, Shield, Users, Eye, Leaf, ChevronLeft, ChevronRight, Calculator, Mail, MapPin, Clock, Truck, CheckCircle, ArrowRight, Star, Phone } from 'lucide-react'
import PageTransitionWrapper from '@/components/PageTransitionWrapper'
import QuoteModal from '@/components/QuoteModal'
import { formatPKR } from '@/config/pricing-punjab'

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
      subtitle: "High Efficiency",
      description: "Premium quality panels with 25-year warranty",
      badge: "Most Popular",
      icon: Sun
    },
    {
      title: "Complete Systems",
      subtitle: "Installation Included",
      description: "Full solar system with professional installation",
      badge: "Best Value",
      icon: Battery
    },
    {
      title: "Inverters",
      subtitle: "Grid-Tie Ready",
      description: "High-efficiency inverters with smart monitoring",
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
            Our Solar Solutions - ہمارے سولر حل
          </h2>
          <p className="text-lg text-gray-600">
            Premium solar products with transparent pricing
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
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="text-sm text-blue-600 font-medium">
                  Contact us for pricing
                </div>
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
      description: "Lahore, Karachi, Islamabad, Faisalabad, Rawalpindi..."
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
      features: ["25-Year Warranty", "Weather Resistant", "22% Efficiency"]
    },
    {
      icon: Battery,
      title: "Solar Batteries",
      description: "Store excess energy for use during nighttime or power outages",
      features: ["15-Year Lifespan", "Fast Charging", "Smart Management"]
    },
    {
      icon: Zap,
      title: "Inverters",
      description: "Convert DC power from panels into AC power for your home",
      features: ["Grid-Tie Ready", "97% Efficiency", "10-Year Warranty"]
    },
    {
      icon: Activity,
      title: "Smart Meters",
      description: "Monitor your energy production and consumption in real-time",
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
                <div className="text-sm font-medium text-blue-600">Contact for pricing</div>
                <div className="text-xs text-gray-500">Custom quotes available</div>
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
      image: "/images/sectors/residential-sector.png"
    },
    {
      id: 2,
      title: "Commercial Solar Array",
      location: "Industrial Area, Faisalabad, Pakistan",
      capacity: "250 kW",
      image: "/placeholder-opzrl.png"
    },
    {
      id: 3,
      title: "Community Solar Farm",
      location: "Sahiwal, Pakistan",
      capacity: "2.5 MW",
      image: "/large-solar-farm.png"
    },
    {
      id: 4,
      title: "School Solar Project",
      location: "Government School, Multan, Pakistan",
      capacity: "150 kW",
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
                          Contact for Quote
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
  // User input states for all pricing
  const [panelPricePerWatt, setPanelPricePerWatt] = useState(45) // PKR per watt
  const [wattsPerPanel, setWattsPerPanel] = useState(550) // watts per panel
  const [numberOfPanels, setNumberOfPanels] = useState(9) // number of panels
  const [installationFeePerWatt, setInstallationFeePerWatt] = useState(15) // PKR per watt
  const [inverterPrice, setInverterPrice] = useState(125000) // PKR fixed price
  const [batteryPrice, setBatteryPrice] = useState(350000) // PKR fixed price
  const [materialCost, setMaterialCost] = useState(25000) // PKR for cables, mounting, etc.
  const [gstRate, setGstRate] = useState(17) // percentage
  const [deliveryFee, setDeliveryFee] = useState(5000) // PKR
  const [electricityRate, setElectricityRate] = useState(25) // PKR per unit
  // Removed sunHoursPerDay as we now use fixed calculation: 1kW = 100 units per month
  const [unitPrice, setUnitPrice] = useState(25) // PKR per unit for savings calculation
  
  // Calculate system size from panels
  const systemSize = Math.max(0, (numberOfPanels * wattsPerPanel) / 1000) // kW
  
  // Calculate costs with safety checks
  const panelCost = Math.max(0, numberOfPanels * wattsPerPanel * panelPricePerWatt)
  const installationCost = Math.max(0, systemSize * 1000 * installationFeePerWatt)
  const subtotal = Math.max(0, panelCost + installationCost + inverterPrice + batteryPrice + materialCost + deliveryFee)
  const gstAmount = Math.max(0, (subtotal * gstRate) / 100)
  const totalCost = Math.max(0, subtotal + gstAmount)
  
  // Calculate savings with safety checks - More accurate calculation
  // 1kW system typically generates ~100 units per month (based on 4.5 sun hours)
  const monthlyUnitsGenerated = Math.max(0, systemSize * 100) // 1kW = 100 units per month
  const monthlySavings = Math.max(0, monthlyUnitsGenerated * unitPrice)
  const yearlySavings = Math.max(0, monthlySavings * 12)
  const paybackPeriod = (totalCost > 0 && yearlySavings > 0) ? (totalCost / yearlySavings) : 0

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
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#003049] mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Solar System Configuration
              </h3>
              
              {/* Panel Configuration */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Panel Configuration</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Panel Price per Watt (PKR)
                    </label>
                    <input
                      type="number"
                      value={panelPricePerWatt}
                      onChange={(e) => setPanelPricePerWatt(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Watts per Panel
                    </label>
                    <input
                      type="number"
                      value={wattsPerPanel}
                      onChange={(e) => setWattsPerPanel(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      min="0"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Panels
                    </label>
                    <input
                      type="number"
                      value={numberOfPanels}
                      onChange={(e) => setNumberOfPanels(Math.max(1, Number(e.target.value) || 1))}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      min="1"
                    />
                  </div>
                </div>
                <div className="mt-2 text-sm text-blue-600">
                  Total System Size: <strong>{systemSize.toFixed(2)} kW</strong>
                </div>
              </div>

              {/* Installation & Equipment */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Installation & Equipment</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Installation Fee per Watt (PKR)
                    </label>
                    <input
                      type="number"
                      value={installationFeePerWatt}
                      onChange={(e) => setInstallationFeePerWatt(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Inverter Price (PKR) - Fixed Price
                    </label>
                    <input
                      type="number"
                      value={inverterPrice}
                      onChange={(e) => setInverterPrice(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Battery Price (PKR) - Fixed Price
                    </label>
                    <input
                      type="number"
                      value={batteryPrice}
                      onChange={(e) => setBatteryPrice(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                      min="0"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Material Cost (PKR) - Cables, Mounting, etc.
                    </label>
                    <input
                      type="number"
                      value={materialCost}
                      onChange={(e) => setMaterialCost(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Costs */}
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">Additional Costs</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GST Rate (%)
                    </label>
                    <input
                      type="number"
                      value={gstRate}
                      onChange={(e) => setGstRate(Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                      min="0"
                      max="100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Fee (PKR)
                    </label>
                    <input
                      type="number"
                      value={deliveryFee}
                      onChange={(e) => setDeliveryFee(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              {/* Savings Calculation */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Savings Calculation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Unit Price (PKR) - For Savings Calculation
                    </label>
                    <input
                      type="number"
                      value={unitPrice}
                      onChange={(e) => setUnitPrice(Math.max(0, Number(e.target.value) || 0))}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                      min="0"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      Note: 1kW system generates ~100 units per month
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#003049] mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Cost Breakdown & Savings
              </h3>
              
              {/* System Cost Breakdown */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3">Cost Breakdown</h4>
                <div className="flex justify-between text-sm">
                  <span>Solar Panels ({numberOfPanels} × {wattsPerPanel}W):</span>
                  <span className="font-medium">{formatPKR(panelCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Installation ({systemSize.toFixed(2)} kW):</span>
                  <span className="font-medium">{formatPKR(installationCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Inverter (Fixed Price):</span>
                  <span className="font-medium">{formatPKR(inverterPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Battery (Fixed Price):</span>
                  <span className="font-medium">{formatPKR(batteryPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Material Cost:</span>
                  <span className="font-medium">{formatPKR(materialCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee:</span>
                  <span className="font-medium">{formatPKR(deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span className="font-medium">{formatPKR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>GST ({gstRate}%):</span>
                  <span className="font-medium">{formatPKR(gstAmount)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total System Cost:</span>
                  <span className="text-blue-600">{formatPKR(totalCost)}</span>
                </div>
              </div>

              {/* System Specifications */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">System Specifications</h4>
                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>Total Panels: <strong>{numberOfPanels}</strong></div>
                  <div>System Size: <strong>{systemSize.toFixed(2)} kW</strong></div>
                  <div>Panel Power: <strong>{wattsPerPanel}W each</strong></div>
                  <div>Battery: <strong>Included</strong></div>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <div className="text-sm text-green-800">
                    <strong>Note:</strong> 1kW system generates ~100 units per month ({systemSize.toFixed(2)}kW = {monthlyUnitsGenerated.toFixed(0)} units)
                  </div>
                </div>
              </div>

              {/* Savings Breakdown */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Savings Projection</h4>
                <motion.div
                  className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200"
                >
                  <div className="text-2xl font-bold text-green-600">
                    {formatPKR(monthlySavings)}/month
                  </div>
                  <div className="text-sm text-gray-600">Monthly Savings</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {monthlyUnitsGenerated.toFixed(0)} units × {unitPrice} PKR
                  </div>
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
                    {paybackPeriod.toFixed(1)} years
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
            Contact us for your free quote today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.a
              href="tel:03007960565"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(253, 186, 33, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FDBA21] text-[#003049] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call M Rizwan Ali: 03007960565
            </motion.a>
            
            <motion.a
              href="tel:03019272576"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#003049] transition-all duration-200 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call M Haris: 03019272576
            </motion.a>
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
