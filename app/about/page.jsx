'use client'

import { motion } from 'framer-motion'
import { Award, Users, Zap, Globe, CheckCircle, Quote } from 'lucide-react'
import PageTransitionWrapper from '@/components/PageTransitionWrapper'

export default function AboutPage() {
  return (
    <PageTransitionWrapper>
      <div className="min-h-screen pt-16">
        <HeroSection />
        <TimelineSection />
        <FounderSection />
        <CertificationsSection />
        <TestimonialSection />
      </div>
    </PageTransitionWrapper>
  )
}

function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="solar-text-gradient">Who We Are</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            PAK SOLARS has been pioneering clean energy solutions for over a decade, 
            helping thousands of families and businesses transition to sustainable solar power across Pakistan.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function TimelineSection() {
  const milestones = [
    {
      year: "2012",
      title: "Company Founded",
      description: "Started with a vision to make solar energy accessible to everyone"
    },
    {
      year: "2015",
      title: "1,000 Installations",
      description: "Reached our first major milestone of 1,000 successful installations"
    },
    {
      year: "2018",
      title: "Commercial Expansion",
      description: "Expanded into commercial and industrial solar solutions"
    },
    {
      year: "2021",
      title: "10,000 Customers",
      description: "Celebrated serving over 10,000 satisfied customers"
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description: "Leading the industry with cutting-edge solar technology and AI monitoring"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="solar-text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to industry leadership
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-blue-600 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                <div className="flex-1">
                  <div className={`solar-card p-6 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}>
                    <div className="text-2xl font-bold text-[#FDBA21] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-[#003049] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block flex-shrink-0"
                />

                <div className="flex-1 hidden md:block">
                  {/* Empty space for alternating layout */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/founder-solar-office.png"
              alt="Founder"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              <span className="solar-text-gradient">Founder's Vision</span>
            </h2>
            
            <blockquote className="text-lg text-gray-600 italic border-l-4 border-yellow-400 pl-6">
              "We founded PAK SOLARS with a simple belief: everyone deserves access to clean, 
              affordable energy. Solar power isn't just about saving money—it's about creating a 
              sustainable future for our children and grandchildren across Pakistan."
            </blockquote>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>15+ years in renewable energy</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>NABCEP certified solar professional</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Environmental sustainability advocate</span>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <p className="font-semibold text-[#003049]">— Muhammad Rizwan Ali, Director</p>
              <p className="font-semibold text-[#003049]">— Muhammad Inaam Ur Rehman, Director</p>
              <p className="font-semibold text-[#003049]">— Rana Imran Zafar, Finance Consultant</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CertificationsSection() {
  const certifications = [
    { name: "NABCEP Certified", logo: "/nabcep-certification-logo.png" },
    { name: "IEC Approved", logo: "/iec-certification-logo.png" },
    { name: "UL Listed", logo: "/ul-certification-mark.png" },
    { name: "Energy Star", logo: "/energy-star-logo.png" },
  ]

  const partners = [
    { name: "Tesla Energy", logo: "/tesla-energy-logo.png" },
    { name: "SunPower", logo: "/sunpower-logo.png" },
    { name: "Enphase", logo: "/enphase-logo.png" },
    { name: "LG Solar", logo: "/placeholder.svg?height=60&width=120" },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="solar-text-gradient">Certifications & Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders and certified by top organizations
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-[#003049]">Our Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="solar-card p-6 text-center"
                >
                  <img
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.name}
                    className="w-full h-16 object-contain mb-4"
                  />
                  <p className="font-medium text-[#003049]">{cert.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-[#003049]">Our Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="solar-card p-6 text-center"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-12 object-contain mb-4"
                  />
                  <p className="font-medium text-[#003049]">{partner.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Quote className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
            "PAK SOLARS transformed our home and our energy bills. The installation was 
            seamless, the team was professional, and we're now saving over Rs. 15,000 every month. 
            It's amazing to know we're also helping the environment!"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <img
              src="/placeholder.svg?height=60&width=60"
              alt="Customer"
              className="w-15 h-15 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold text-[#003049]">Ahmed & Fatima Khan</p>
              <p className="text-gray-600">Homeowners, Lahore</p>
              <div className="flex text-yellow-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
