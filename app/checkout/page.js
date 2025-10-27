'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Checkout() {
  const [quantity, setQuantity] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    address: '',
    city: '',
    postalCode: '',
    phone: ''
  })

  const pricePerBottle = 34.99 // USD
  const shippingCost = 11.00 // USD
  
  // Bulk pricing logic - EmergingEra style
  const getBulkDiscount = (qty) => {
    if (qty >= 5) return 0.30 // 30% off
    if (qty >= 3) return 0.20 // 20% off
    if (qty >= 2) return 0.10 // 10% off
    return 0
  }

  const discount = getBulkDiscount(quantity)
  const discountedPrice = pricePerBottle * (1 - discount)
  const subtotal = discountedPrice * quantity
  const savings = (pricePerBottle - discountedPrice) * quantity
  const total = subtotal + shippingCost

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement payment processing
    alert('Payment integration coming soon!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center mb-4 text-primary">
            Secure Checkout
          </h1>
          <p className="text-center text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 px-4">
            You're one step away from unlocking your mental potential
          </p>

          {/* URGENCY BAR - EmergingEra style */}
          <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-red-800 font-bold">⚡ First Batch Selling Fast!</p>
                <p className="text-red-700 text-sm">Only 47 bottles remaining • Next production in 4 weeks</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Order Summary - MOVED TO TOP ON MOBILE */}
            <div className="order-1 lg:order-2">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-200 sticky top-24">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-primary">
                  Order Summary
                </h2>

                {/* Product */}
                <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-4xl sm:text-5xl">💧</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg mb-1 text-primary">NeuroDrive Sublingual Drops</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      30ml • Adaptogenic Formula • 99.4% Purity
                    </p>
                    <p className="text-accent font-semibold mt-2 text-sm sm:text-base">
                      ${discountedPrice.toFixed(2)} USD {discount > 0 && <span className="text-xs text-gray-500 line-through ml-1">${pricePerBottle.toFixed(2)}</span>}
                    </p>
                  </div>
                </div>

                {/* Quantity Selector - EmergingEra style */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Quantity
                  </label>
                  
                  {/* Bulk Options */}
                  <div className="space-y-3 mb-4">
                    {[1, 2, 3, 5].map((qty) => {
                      const qtyDiscount = getBulkDiscount(qty)
                      const qtyPrice = pricePerBottle * (1 - qtyDiscount)
                      const isPopular = qty === 3
                      const isBestValue = qty === 5
                      
                      return (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => setQuantity(qty)}
                          className={`w-full p-4 border-2 rounded-lg text-left transition-all relative ${
                            quantity === qty 
                              ? 'border-accent bg-accent/5 shadow-md' 
                              : 'border-gray-200 hover:border-accent/50'
                          }`}
                        >
                          {isPopular && (
                            <span className="absolute -top-2 left-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                              MOST POPULAR
                            </span>
                          )}
                          {isBestValue && (
                            <span className="absolute -top-2 left-4 px-3 py-1 bg-gradient-to-r from-accent to-accent-light text-white text-xs font-bold rounded-full">
                              💎 BEST VALUE
                            </span>
                          )}
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-gray-900">
                                {qty} {qty === 1 ? 'Bottle' : 'Bottles'}
                              </div>
                              <div className="text-sm text-gray-600">
                                ${qtyPrice.toFixed(2)} per bottle
                                {qtyDiscount > 0 && (
                                  <span className="ml-2 text-accent font-semibold">
                                    Save {(qtyDiscount * 100).toFixed(0)}%
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-accent">
                                ${(qtyPrice * qty).toFixed(2)}
                              </div>
                              {qtyDiscount > 0 && (
                                <div className="text-xs text-gray-500 line-through">
                                  ${(pricePerBottle * qty).toFixed(2)}
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Custom Quantity */}
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Custom amount:</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-accent hover:bg-accent/5 transition-all active:scale-95 flex items-center justify-center font-semibold text-gray-700"
                    >
                      −
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-accent hover:bg-accent/5 transition-all active:scale-95 flex items-center justify-center font-semibold text-gray-700"
                    >
                      +
                    </button>
                  </div>

                  {quantity >= 2 && savings > 0 && (
                    <div className="mt-3 flex items-center text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">You're saving ${savings.toFixed(2)} with this order!</span>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({quantity} {quantity === 1 ? 'bottle' : 'bottles'})</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Bulk Discount ({(discount * 100).toFixed(0)}% off)</span>
                      <span className="font-medium">-${savings.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center">
                      International Shipping
                      <svg className="w-4 h-4 ml-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="font-medium">${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl sm:text-2xl font-bold text-primary pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-accent">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Guarantees - EmergingEra style */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">
                      <strong className="font-semibold text-gray-900">14-Day Money-Back Guarantee</strong>
                      <span className="block text-xs text-gray-500 mt-0.5">No questions asked</span>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">
                      <strong className="font-semibold text-gray-900">Secure Payment Processing</strong>
                      <span className="block text-xs text-gray-500 mt-0.5">256-bit SSL encryption</span>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                    <span className="text-gray-700">
                      <strong className="font-semibold text-gray-900">Fast International Shipping</strong>
                      <span className="block text-xs text-gray-500 mt-0.5">7-14 business days worldwide</span>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">
                      <strong className="font-semibold text-gray-900">Premium Quality</strong>
                      <span className="block text-xs text-gray-500 mt-0.5">99.4% purity • Lab tested</span>
                    </span>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 p-4 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-center justify-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Secure Checkout • SSL Protected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-200">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-primary">
                  Shipping Information
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base bg-white"
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="IT">Italy</option>
                      <option value="ES">Spain</option>
                      <option value="NL">Netherlands</option>
                      <option value="BE">Belgium</option>
                      <option value="AT">Austria</option>
                      <option value="CH">Switzerland</option>
                      <option value="SE">Sweden</option>
                      <option value="NO">Norway</option>
                      <option value="DK">Denmark</option>
                      <option value="FI">Finland</option>
                      <option value="PL">Poland</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="IE">Ireland</option>
                      <option value="PT">Portugal</option>
                      <option value="AU">Australia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="SG">Singapore</option>
                      <option value="JP">Japan</option>
                      <option value="KR">South Korea</option>
                      <option value="IL">Israel</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base"
                      placeholder="123 Main Street, Apt 4B"
                    />
                  </div>

                  {/* City and Postal Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base"
                        placeholder="10001"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                    <p className="mt-1.5 text-xs text-gray-500">
                      Include country code (e.g., +1 for US, +44 for UK)
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary btn-ripple text-base sm:text-lg mt-6"
                  >
                    Proceed to Payment
                  </button>

                  <p className="text-xs text-center text-gray-500 mt-4">
                    By completing this purchase you agree to our{' '}
                    <Link href="/terms" className="text-accent hover:text-accent-hover underline">Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="text-accent hover:text-accent-hover underline">Privacy Policy</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
