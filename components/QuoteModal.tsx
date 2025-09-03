'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, CheckCircle } from 'lucide-react'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSuccess, setIsSuccess] = useState(false)

  const handlePhoneCall = (phoneNumber: string) => {
    // Track the call attempt
    setIsSuccess(true)
    setTimeout(() => {
      onClose()
      setIsSuccess(false)
    }, 2000)
  }

  const resetModal = () => {
    setIsSuccess(false)
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Call Initiated!</h3>
                  <p className="text-gray-600">
                    Your phone should be dialing now. We'll provide your personalized solar quote.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h2>
                    <p className="text-gray-600">
                      Call us directly for a personalized solar quote for Pakistan
                    </p>
                  </div>

                  <div className="space-y-4">
                    <motion.a
                      href="tel:03007960565"
                      onClick={() => handlePhoneCall('03007960565')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-yellow-400 to-blue-600 text-white py-4 rounded-lg font-bold flex items-center justify-center space-x-3 hover:shadow-lg transition-shadow duration-200"
                    >
                      <Phone className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-sm opacity-90">Call M Rizwan Ali</div>
                        <div className="text-lg">03007960565</div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:03019272576"
                      onClick={() => handlePhoneCall('03019272576')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 rounded-lg font-bold flex items-center justify-center space-x-3 hover:shadow-lg transition-shadow duration-200"
                    >
                      <Phone className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-sm opacity-90">Call M Haris (Office Manager)</div>
                        <div className="text-lg">03019272576</div>
                      </div>
                    </motion.a>
                  </div>

                  <div className="mt-6 text-center text-xs text-gray-500">
                    <p>✓ Free consultation ✓ No obligation ✓ Pakistan-wide service</p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
