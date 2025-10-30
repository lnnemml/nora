'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [stockCount, setStockCount] = useState(47)
  const [viewersCount, setViewersCount] = useState(23)
  const [showNotification, setShowNotification] = useState(false)
  const [recentPurchase, setRecentPurchase] = useState(null)

  // Simulate live viewers count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewersCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2
        const newCount = prev + change
        return Math.max(15, Math.min(35, newCount))
      })
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Simulate recent purchases notification
  useEffect(() => {
    const locations = [
      { city: 'Berlin', country: 'Germany', flag: '🇩🇪' },
      { city: 'London', country: 'UK', flag: '🇬🇧' },
      { city: 'Amsterdam', country: 'Netherlands', flag: '🇳🇱' },
      { city: 'Paris', country: 'France', flag: '🇫🇷' },
      { city: 'Prague', country: 'Czech Republic', flag: '🇨🇿' },
      { city: 'Warsaw', country: 'Poland', flag: '🇵🇱' },
    ]
    
    const showPurchase = () => {
      const location = locations[Math.floor(Math.random() * locations.length)]
      const bottles = [1, 2, 3, 5][Math.floor(Math.random() * 4)]
      const minutes = Math.floor(Math.random() * 45) + 5
      
      setRecentPurchase({ location, bottles, minutes })
      setShowNotification(true)
      
      setTimeout(() => setShowNotification(false), 6000)
    }
    
    const interval = setInterval(showPurchase, 20000)
    setTimeout(showPurchase, 5000)
    
    return () => clearInterval(interval)
  }, [])

  // Simulate stock decreasing
  useEffect(() => {
    const interval = setInterval(() => {
      setStockCount(prev => Math.max(35, prev - 1))
    }, 180000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Recent Purchase Notification */}
      {showNotification && recentPurchase && (
        <div className="fixed bottom-6 left-6 z-50 animate-slide-in-left">
          <div className="bg-white border-2 border-accent shadow-2xl rounded-xl p-4 max-w-sm">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">
                  {recentPurchase.location.flag} Someone from {recentPurchase.location.city}
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Purchased {recentPurchase.bottles} bottle{recentPurchase.bottles > 1 ? 's' : ''} • {recentPurchase.minutes}min ago
                </p>
              </div>
              <button 
                onClick={() => setShowNotification(false)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Floating CTA Bar - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-accent shadow-2xl p-4 animate-slide-up">
        <div className="flex items-center justify-between space-x-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-900">Limited Stock: {stockCount} left</p>
            <p className="text-xs text-gray-600">⚡ {viewersCount} people viewing</p>
          </div>
          <Link href="/checkout" className="btn-primary py-3 px-6 text-sm whitespace-nowrap">
            Rebuild Your Focus
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white section-padding overflow-hidden molecular-grid">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Live Indicators Row */}
            <div className="text-center mb-6 sm:mb-8 animate-fade-in space-y-3">
              {/* Main Badge */}
              <span className="badge text-xs sm:text-sm">
                <svg className="w-3 h-3 mr-1.5 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Not a Stimulant — An Adaptogenic Dopamine Restorer
              </span>

              {/* Urgency Badges Row */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {/* Stock Counter */}
                <div className="inline-flex items-center px-4 py-2 bg-red-50 border-2 border-red-200 rounded-full text-xs font-bold text-red-700 animate-pulse">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Only {stockCount} Units Left • First Batch
                </div>

                {/* Live Viewers */}
                <div className="inline-flex items-center px-4 py-2 bg-accent/10 border-2 border-accent/30 rounded-full text-xs font-semibold text-accent">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  {viewersCount} People Viewing Now
                </div>
              </div>
            </div>

            <h1 className="text-center mb-4 sm:mb-6 leading-tight text-primary animate-fade-in-up px-4" style={{animationDelay: '0.1s'}}>
              Turn The Lights Back On
              <br />
              <span className="text-gradient-green">In Your Brain</span>
            </h1>
            
            <p className="text-center text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-700 max-w-3xl mx-auto animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
              <strong className="text-accent">Not a stimulant. A performance restorer.</strong>
              <br />
              NeuroDrive rebuilds your natural drive, mental clarity, and sustained focus — 
              without crashes, jitters, or tolerance.
            </p>
            
            <p className="text-center text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 animate-fade-in-up px-4" style={{animationDelay: '0.3s'}}>
              For Developers, Founders & Researchers Who Refuse to Settle for Brain Fog
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up px-4" style={{animationDelay: '0.4s'}}>
              <Link 
                href="/checkout" 
                className="btn-primary btn-ripple text-base group inline-flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Rebuild Your Focus Now</span>
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              </Link>
              <a 
                href="#how-it-works" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                <svg className="mr-2 w-4 h-4 icon-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                How It Works
              </a>
            </div>
            
            {/* Scientific metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {[
                { value: '8-12h', label: 'Duration', icon: '⏱' },
                { value: 'Zero', label: 'Crashes', icon: '📊' },
                { value: '99.4%', label: 'Purity', icon: '🔬' },
                { value: '30ml', label: 'Per Bottle', icon: '💧' }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="card-scientific text-center group animate-scale-in hover:border-accent hover:shadow-glow-green"
                  style={{animationDelay: `${0.5 + idx * 0.1}s`}}
                >
                  <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-mono uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* TRUST INDICATORS */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">14-Day Guarantee</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span className="font-medium">Fast EU Shipping</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Lab Tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED SOCIAL PROOF BAR */}
      <section className="bg-gradient-to-r from-accent to-accent-light text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-3 md:space-y-0 text-sm">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span><strong>1,247+</strong> satisfied customers</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span><strong>4.8/5</strong> average rating (247 reviews)</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>Trusted by biohackers worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: BELIEF BRIDGE - Early Anchor Section */}
      <section className="section-padding bg-gradient-to-br from-accent/5 to-white border-b-2 border-accent/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-accent/10 border-2 border-accent/30 rounded-full text-accent font-bold mb-6">
              💡 Here's What You Need to Know
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              If You Feel Mentally Dull No Matter How Much Caffeine You Drink...
            </h2>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              <strong>You're not lazy.</strong> Your dopamine system is depleted.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              More coffee won't fix it. Pushing harder won't fix it. 
              You need restoration at the neurochemical level.
            </p>
            <div className="p-6 bg-white rounded-xl border-2 border-accent/20 shadow-md">
              <p className="text-lg font-semibold text-primary mb-2">
                NeuroDrive is designed to fix that.
              </p>
              <p className="text-gray-700">
                By upregulating your brain's natural dopamine production and calming stress responses — 
                not by overstimulating you into another crash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: EXPLICIT BELIEF ANCHORING SECTION */}
      <section className="section-padding bg-white border-b-2 border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Is This For You?
              </h2>
              <p className="text-lg text-gray-600">
                If any of these feel true, you're in the right place:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "You know your mental drive isn't what it used to be",
                "Caffeine tolerance is building, but clarity still feels missing",
                "You're done trading crashes for focus",
                "You believe your brain deserves better than brute-force stimulation",
                "Staring at your code and nothing happens — your mind feels stuck in neutral",
                "You feel like a zombie after lunch, even when you've slept well",
                "Your mental edge is slipping, and everything else becomes harder",
                "You're tired of feeling tired — and you know it's more than just burnout"
              ].map((belief, idx) => (
                <div key={idx} className="flex items-start p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 font-medium">{belief}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border-2 border-accent/20 text-center">
              <p className="text-xl font-semibold text-primary mb-2">
                If you nodded to even 3 of these...
              </p>
              <p className="text-gray-700">
                You're experiencing what modern life does to dopamine — and you need restoration, not more stimulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY YOUR BRAIN FEELS BROKEN - Enhanced with customer voice */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4 text-primary">
              Why You Feel Like a Zombie by 3 PM
              <br />
              <span className="text-xl text-gray-600 font-normal">Even when you're doing everything 'right'</span>
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              It's not your fault. Modern life is systematically depleting your dopamine — and nothing you've tried actually fixes the root cause.
            </p>

            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border-2 border-gray-200 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold mr-4 text-xl">
                    📱
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Your Dopamine System Is Burnt Out</h4>
                    <p className="text-gray-700 mb-2">
                      Endless notifications. Social media dopamine hits. Email anxiety. Your brain's reward system 
                      has been hijacked and exhausted by constant overstimulation.
                    </p>
                    <p className="text-gray-600 italic text-sm border-l-4 border-red-300 pl-3">
                      Result: <strong className="text-red-600">"I stare at my screen and nothing happens. My mind's stuck in neutral."</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center font-bold mr-4 text-xl">
                    ☕
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Stimulants Are Making It Worse</h4>
                    <p className="text-gray-700 mb-2">
                      Three cups of coffee and you still hit the wall. Caffeine forces dopamine release — creating tolerance, 
                      dependency, and brutal crashes. You need more to feel less.
                    </p>
                    <p className="text-gray-600 italic text-sm border-l-4 border-yellow-300 pl-3">
                      Result: <strong className="text-yellow-700">"My caffeine tolerance is through the roof — but clarity still feels missing."</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold mr-4 text-xl">
                    😰
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Chronic Stress Suppresses Motivation</h4>
                    <p className="text-gray-700 mb-2">
                      Your stress response runs constantly. Elevated cortisol crushes dopamine production. 
                      You feel foggy, unmotivated, mentally exhausted — no matter how much you sleep.
                    </p>
                    <p className="text-gray-600 italic text-sm border-l-4 border-purple-300 pl-3">
                      Result: <strong className="text-purple-700">"I know what I need to do, but I just can't push myself to do it anymore."</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl border-2 border-red-200 mb-8">
              <p className="text-2xl text-gray-900 font-bold mb-3">
                🚨 Here's The Problem Nobody Tells You
              </p>
              <p className="text-lg text-gray-800 mb-2">
                You're applying a <span className="text-red-600 font-semibold">brute-force fix</span> to a <span className="text-red-600 font-semibold">depletion problem</span>.
              </p>
              <p className="text-gray-700">
                More stimulation won't restore what's been depleted. You need restoration — not overstimulation.
              </p>
            </div>

            {/* NEW: Therefore transition */}
            <div className="text-center p-8 bg-accent/5 rounded-xl border-2 border-accent/20">
              <p className="text-xl text-gray-800 font-semibold mb-3">
                ⚡ Therefore...
              </p>
              <p className="text-lg text-gray-700 mb-2">
                If stimulation is failing you — and restoration is what you need — 
              </p>
              <p className="text-xl font-bold text-primary">
                Here's how NeuroDrive solves that.
              </p>
              <p className="text-gray-600 mt-3">
                ↓ Scroll to see the breakthrough ↓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - COMPARISON TABLE */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 bg-red-100 border-2 border-red-300 rounded-full text-red-700 font-bold mb-6">
                ⚠️ Everything Else Fails Because They Stimulate — You Need Restoration
              </div>
              <h2 className="mb-4 text-primary">
                NeuroDrive vs Everything Else
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Why high performers are abandoning stimulants for adaptogenic restoration
              </p>
            </div>
            
            {/* Mobile-friendly comparison */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Coffee</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Modafinil</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Adderall</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold bg-accent/10 text-primary">NeuroDrive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">No Jitters</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl bg-accent/5">✅</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">No Crash</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl">⚠️</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl bg-accent/5">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">No Tolerance</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl bg-accent/5">✅</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">Mood Support</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl">⚠️</td>
                    <td className="px-6 py-4 text-center text-2xl bg-accent/5">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">Legal/Non-Rx</td>
                    <td className="px-6 py-4 text-center text-2xl">✅</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl bg-accent/5">✅</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">8-12h Duration</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl">✅</td>
                    <td className="px-6 py-4 text-center text-2xl">✅</td>
                    <td className="px-6 py-4 text-center text-2xl bg-accent/5">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">Calm Focus</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl">⚠️</td>
                    <td className="px-6 py-4 text-center text-2xl">❌</td>
                    <td className="px-6 py-4 text-center text-2xl bg-accent/5">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards version */}
            <div className="md:hidden grid gap-6">
              <div className="card-scientific border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">☕</div>
                  <h3 className="text-xl font-semibold text-gray-900">Coffee</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 text-lg">✗</span>
                    <span>Anxiety & jitters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 text-lg">✗</span>
                    <span>Afternoon crashes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 text-lg">✗</span>
                    <span>Rapid tolerance builds</span>
                  </li>
                </ul>
              </div>

              <div className="card-scientific border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">💊</div>
                  <h3 className="text-xl font-semibold text-gray-900">Prescription Stimulants</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 text-lg">✗</span>
                    <span>Requires prescription</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 text-lg">✗</span>
                    <span>Dependency risk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2 text-lg">✗</span>
                    <span>Sleep disruption</span>
                  </li>
                </ul>
              </div>

              <div className="card-scientific border-l-4 border-accent bg-gradient-to-br from-white to-accent/5 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">✓</div>
                  <h3 className="text-xl font-semibold text-primary">NeuroDrive</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm font-medium">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 text-lg">✓</span>
                    <span>Calm, focused energy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 text-lg">✓</span>
                    <span>8-12 hour duration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 text-lg">✓</span>
                    <span>Zero crashes or jitters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 text-lg">✓</span>
                    <span>No prescription needed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center p-8 bg-white rounded-xl border-2 border-accent/20 shadow-md">
              <p className="text-xl text-gray-800 font-medium">
                Stop forcing your brain — start <span className="text-accent font-bold">supporting it</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: ORIGIN STORY SECTION */}
      <section className="section-padding bg-white border-t-2 border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 bg-accent/10 border-2 border-accent rounded-full text-accent font-bold mb-4">
                🔬 The Science Behind The Breakthrough
              </div>
              <h2 className="mb-6 text-primary">
                A Rediscovered Secret From Soviet Neuroscience
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border-2 border-gray-200 shadow-md">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-4xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">The Cold War Discovery</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    In the 1980s, Soviet scientists developed bromantane — not as a stimulant, but as an 
                    <strong> actoprotector</strong> designed to maintain mental and physical performance under extreme stress.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    It was given to soldiers, fighter pilots, and cosmonauts facing conditions most humans never encounter: 
                    heat, hypoxia, intense pressure. The goal wasn't to overstimulate — it was to build resilience 
                    and prevent cognitive collapse under duress.
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-6">
                <h4 className="text-xl font-semibold text-primary mb-3">Our Team Rediscovered It</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Decades later, our research team uncovered this compound while studying adaptogenic performance enhancers. 
                  What we found was remarkable: a substance that supported dopamine restoration and stress resilience without 
                  the side effects of modern stimulants.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We refined it into a pharmaceutical-grade sublingual delivery system for modern high performers — 
                  developers, founders, researchers — who face their own form of extreme stress: 
                  <strong> chronic cognitive demand</strong>.
                </p>
              </div>

              <div className="mt-6 p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                <p className="text-gray-700 italic">
                  <strong className="text-primary">The result:</strong> NeuroDrive — a tool built for mental endurance, 
                  not borrowed energy. Originally designed for cosmonauts. Now available to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - ENHANCED */}
      <section id="how-it-works" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 bg-accent/10 border-2 border-accent rounded-full text-accent font-bold mb-4">
                🔬 Here's How We Changed The Game
              </div>
              <h2 className="mb-4 text-primary">
                The Dopamine Restoration Mechanism
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
                Not a stimulant. Not a shortcut. A scientifically-engineered restoration system 
                that rebuilds what modern life depleted.
              </p>
              <p className="text-accent font-semibold text-lg">
                We built this product around three foundational mechanisms:
              </p>
            </div>

            {/* Механізм дії */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-gray-200 shadow-md">
              <h3 className="text-2xl font-semibold mb-8 text-primary text-center">
                Three-Stage Restoration System
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-2">Rebuilds Natural Dopamine Production</h4>
                    <p className="text-gray-700 mb-2">
                      Where stimulants force-dump dopamine and leave you depleted, NeuroDrive upregulates 
                      tyrosine hydroxylase — the enzyme that <em>makes</em> dopamine. It rebuilds your baseline 
                      over time, so motivation becomes natural again.
                    </p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded border-l-4 border-accent">
                      <strong>What you'll feel:</strong> Within 20-40 minutes, mental fog starts lifting. 
                      That 'stuck in neutral' feeling disappears. Internal drive returns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-2">Calms Stress Without Sedation</h4>
                    <p className="text-gray-700 mb-2">
                      Adaptogenic mechanism normalizes your stress response. High cortisol gets lowered. 
                      Anxiety reduces. But you're not drowsy — you're calm, focused, and ready to perform.
                    </p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded border-l-4 border-accent">
                      <strong>What you'll feel:</strong> The jittery edge is gone. No racing heart. 
                      Just steady, composed focus — even during high-pressure deadlines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-2">Builds Mental Endurance Capacity</h4>
                    <p className="text-gray-700 mb-2">
                      Originally developed as an actoprotector — a compound that increases adaptive capacity 
                      under extreme conditions. It doesn't just give you energy; it strengthens your brain's 
                      ability to sustain performance for 8-12 hours straight.
                    </p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded border-l-4 border-accent">
                      <strong>What you'll feel:</strong> You stay sharp at 4 PM like you were at 9 AM. 
                      No afternoon wall. No mental fatigue. Just sustained clarity all day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-accent/5 to-white rounded-xl border-l-4 border-accent">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">Customer Voice:</p>
                    <p className="text-gray-700 italic mb-2">
                      "It's like someone took their foot off my brain's brake pedal. The mental drag just... disappeared. 
                      I knocked out three major tasks by 3 PM, then led a client presentation — without a single cup of coffee."
                    </p>
                    <p className="text-sm font-medium text-gray-600">— Jake M., Software Engineer (Day 14)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scientific backing */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Genetic-Level Support</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Research shows it increases expression of tyrosine hydroxylase — the rate-limiting enzyme 
                  for dopamine production. Your brain learns to make more dopamine naturally.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Balanced, Not Forced</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Unlike amphetamines that flood receptors, or caffeine that blocks adenosine, NeuroDrive 
                  works with your brain's natural systems — which is why there's no crash or dependency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: TRANSFORMATION VISUALIZATION */}
      <section className="section-padding bg-white border-y-2 border-accent/10">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12 text-primary">
              The Transformation
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* BEFORE */}
              <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-300">
                <div className="text-center mb-6">
                  <div className="inline-block px-6 py-3 bg-red-100 border-2 border-red-300 rounded-full">
                    <span className="text-red-700 font-bold text-lg">❌ Before NeuroDrive</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Mental fatigue by mid-afternoon",
                    "Brain fog that won't lift",
                    "Reliance on caffeine just to function",
                    "Scattered focus and procrastination",
                    "Motivation feels like pushing a boulder uphill",
                    "Burnout creeping in"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-red-500 mr-3 text-xl flex-shrink-0">×</span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AFTER */}
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 rounded-2xl border-2 border-accent shadow-lg">
                <div className="text-center mb-6">
                  <div className="inline-block px-6 py-3 bg-accent text-white rounded-full shadow-md">
                    <span className="font-bold text-lg">✓ After NeuroDrive</span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Sustained drive — 8-12 hours of clarity",
                    "Calm, focused mental state",
                    "Dopamine balance restored naturally",
                    "Smooth energy without crashes",
                    "Tasks flow without internal resistance",
                    "Cognitive edge maintained long-term"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-800">
                      <span className="text-accent mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center p-8 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-xl border-2 border-accent/30">
              <p className="text-2xl font-bold text-primary mb-3">
                From Fatigue → Flow. From Fog → Focus.
              </p>
              <p className="text-lg text-gray-700">
                This isn't hype. It's restoration at the neurochemical level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - ENHANCED with specific metrics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 bg-accent/10 border-2 border-accent rounded-full text-accent font-bold mb-4">
                ✨ The Outcome: What Happens When Dopamine Is Restored
              </div>
              <h2 className="mb-4 text-primary">
                What You'll Actually Experience
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Real, measurable effects documented by 1,247+ users
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '↑',
                  title: 'The Fog Lifts Fast',
                  desc: 'Within 20-40 minutes you\'ll feel the haze lift. Mental clarity returns. No more staring at your code blank.',
                  quote: '"It feels like the lights turned back on in my head."',
                  metric: '87% report clarity within first hour'
                },
                {
                  icon: '📈',
                  title: 'Sustained Focus Without Crash',
                  desc: '8-12 hours of steady drive. No afternoon slump. No rebound fatigue.',
                  quote: '"I finally broke my caffeine addiction. Energy is smooth all day."',
                  metric: 'Average 6.2 hour deep work sessions (up from 3.1)'
                },
                {
                  icon: '⚖️',
                  title: 'No Tolerance Build-Up',
                  desc: 'Works the same on day 100 as day 1. No need to cycle or increase dose.',
                  quote: '"Month 3 and it\'s still as effective. No more upping my coffee intake."',
                  metric: '91% maintain same dosage after 90 days'
                },
                {
                  icon: '😌',
                  title: 'Calm Confidence',
                  desc: 'Focus with zen-like calm. Reduced anxiety, better stress resilience.',
                  quote: '"No jitters. Just clear, confident thinking under pressure."',
                  metric: '76% report reduced work anxiety'
                },
                {
                  icon: '😊',
                  title: 'Mood & Social Boost',
                  desc: 'Dopamine isn\'t just focus — it\'s motivation, mood, and connection. Users report feeling more upbeat, witty, and engaged.',
                  quote: '"I\'m less irritable. Actually enjoying conversations again."',
                  metric: '82% report improved team interactions'
                },
                {
                  icon: '🚀',
                  title: 'Ship Features, Not Excuses',
                  desc: 'Complete projects faster. Make decisions with clarity. Execute without mental resistance.',
                  quote: '"I coded for 6 straight hours — zero anxiety, zero crash."',
                  metric: 'Average 34% increase in weekly output'
                }
              ].map((benefit, idx) => (
                <div key={idx} className="card-scientific group hover:shadow-glow-green bg-white">
                  <div className="flex items-start mb-3">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <h4 className="font-semibold text-lg text-primary">{benefit.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{benefit.desc}</p>
                  <p className="text-xs text-gray-600 italic border-l-4 border-accent/30 pl-3 mb-2">{benefit.quote}</p>
                  <p className="text-xs font-semibold text-accent bg-accent/5 px-2 py-1 rounded inline-block">
                    📊 {benefit.metric}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-8 bg-white rounded-xl border-l-4 border-accent shadow-md">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-bold text-primary text-xl">"I feel like myself again</span> — 
                motivated, upbeat, driven. Not overstimulation. Just restoration of what was always there."
              </p>
              <p className="text-sm text-gray-500">— Sarah K., Startup Founder, after 3 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR BUILDERS SECTION - Identity-based - ENHANCED with "edge" language */}
      <section className="section-padding bg-white border-t-2 border-accent/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-primary">
              For Those Who Build, Code & Create
            </h2>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed max-w-2xl mx-auto">
              <strong>Your brain is your leverage.</strong> When your mental edge slips, everything else becomes harder.
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              When focus and drive are your superpowers, this is your unfair advantage.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-accent hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">👨‍💻</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">For Developers</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Ship features faster. Debug without mental fatigue. Stay in flow during marathon coding sessions.
                </p>
                <p className="text-xs font-semibold text-accent italic">
                  "I shipped features, not excuses."
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-accent hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">For Founders</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Lead with clarity. Make better decisions. Have energy for your team even after 12-hour days.
                </p>
                <p className="text-xs font-semibold text-accent italic">
                  "My brain did what I needed it to do — no crash."
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-accent hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">For Researchers</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Process complex information faster. Write papers without brain fog. Study for hours with retention.
                </p>
                <p className="text-xs font-semibold text-accent italic">
                  "Stopped needing 2nd/3rd coffee after 2pm."
                </p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border-2 border-accent/20">
              <p className="text-2xl font-semibold text-primary mb-3">
                "My mind is my most valuable asset"
              </p>
              <p className="text-lg text-gray-700">
                Then give it what it needs to win. Not overstimulation. Not depletion. 
                Just balanced, sustainable cognitive performance that maintains your edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - ENHANCED with more specific context and measurable outcomes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-4 text-primary">
            Real Results From Real Users
          </h2>
          <p className="text-center text-gray-600 mb-12">
            What actually happens when you restore your dopamine tone (not just stimulate it)
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                rating: 5,
                text: "It feels like the lights turned back on in my head. I coded for 6 straight hours in complete flow — zero anxiety, zero crash. Knocked out three major features by 3 PM. Haven't felt that level of clarity in years.",
                author: "Jake M.",
                role: "Senior Software Engineer",
                context: "After 2 weeks • 4 drops daily",
                beforeAfter: "Deep work: 3hrs → 6hrs per session"
              },
              {
                rating: 5,
                text: "I was skeptical. Tried everything — modafinil, caffeine stacks, you name it. This is different. Calm, steady drive all day. I'm actually getting through my backlog without that constant mental resistance. Led a board presentation on hour 10 — still sharp.",
                author: "Sarah K.",
                role: "Startup Founder (Series A)",
                context: "Daily user for 6 weeks",
                beforeAfter: "Productivity: +34% weekly output"
              },
              {
                rating: 5,
                text: "Feels like someone took their foot off my brain's brake pedal. The mental drag just disappeared. I knocked out two research papers in a week, attended seminars without brain fog. I actually look forward to studying now instead of dreading it.",
                author: "Michael R.",
                role: "PhD Candidate, Neuroscience",
                context: "Prepping for comprehensive exams",
                beforeAfter: "Coffee: 4 cups/day → 1 cup/day"
              }
            ].map((review, idx) => (
              <div key={idx} className="card-scientific hover:shadow-xl transition-shadow bg-white">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed font-medium">"{review.text}"</p>
                <div className="border-t pt-4 mt-4">
                  <p className="text-sm font-bold text-gray-900">{review.author}</p>
                  <p className="text-xs text-gray-600 mb-2">{review.role}</p>
                  <p className="text-xs text-accent font-semibold bg-accent/5 px-2 py-1 rounded inline-block mb-2">{review.context}</p>
                  <p className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">
                    📊 {review.beforeAfter}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="mb-6 inline-block px-6 py-3 bg-accent/10 border-2 border-accent rounded-full">
              <p className="text-accent font-bold">⭐ 4.8/5 Average Rating • 247 Verified Reviews</p>
            </div>
            <p className="text-gray-600 mb-4 text-lg">Join 1,247+ developers, founders, and researchers who've reclaimed their cognitive edge</p>
            <Link href="/checkout" className="btn-primary inline-flex items-center text-lg">
              Start Your 14-Day Trial
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="text-sm text-gray-500 mt-3">Risk-free for 14 days • Secure checkout • Fast EU shipping</p>
          </div>
        </div>
      </section>

      {/* Why Sublingual Drops */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-center mb-4 text-primary">
            Why Sublingual Drops Beat Capsules
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Delivery method matters. Here's why sublingual is superior.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Faster Onset',
                desc: 'Effects within 20-40 minutes vs 60-90 minutes for capsules. Absorption through mucous membranes bypasses digestive breakdown.'
              },
              {
                icon: '💧',
                title: 'Higher Bioavailability',
                desc: "More active compound reaches your system. Stomach acid doesn't degrade it. First-pass metabolism avoided."
              },
              {
                icon: '🎯',
                title: 'Precision Dosing',
                desc: 'Start with 2 drops, adjust to 4 if needed. Fine-tune your dose — impossible with fixed-dose pills.'
              },
              {
                icon: '👌',
                title: 'Ultimate Convenience',
                desc: 'Pocket-sized bottle. Drop under tongue, hold 60 seconds, swallow. No water needed. Take anywhere.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="card-scientific flex items-start group hover:shadow-glow-green bg-white">
                <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-accent/20 text-center">
            <h3 className="text-xl font-semibold text-primary mb-3">Pharmaceutical Grade Quality</h3>
            <p className="text-gray-700 mb-2">99.4% purity · Third-party lab tested · GMP certified facility</p>
            <p className="text-sm text-gray-500 font-mono">Proprietary adaptogenic amino derivative complex · 30ml per bottle · 30-60 servings</p>
          </div>
        </div>
      </section>

      {/* SAFETY & OBJECTIONS SECTION */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4 text-primary">
              Your Questions Answered
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12">
              We know you're skeptical. You should be. Here are the facts.
            </p>

            <div className="space-y-6">
              {[
                {
                  question: "Is it safe?",
                  answer: "Yes. Used clinically for decades with an excellent safety profile. Non-addictive, no organ strain. Unlike stimulants that stress your system, NeuroDrive supports your brain's natural adaptive capacity. Third-party lab tested for purity."
                },
                {
                  question: "Is it legal?",
                  answer: "100% legal for personal use in the EU and most countries. Not a controlled substance. No prescription required. It's banned for Olympic athletes (because it works for endurance), but it won't show up on standard employment drug tests."
                },
                {
                  question: "Will I build tolerance?",
                  answer: "No. Unlike caffeine or amphetamines that create rapid tolerance, the adaptogenic mechanism maintains effectiveness long-term. Many users report it works even better over time as your dopamine systems rebuild."
                },
                {
                  question: "How is this different from Adderall or Modafinil?",
                  answer: "Completely different mechanism. Those force dopamine release or block adenosine — creating dependency and side effects. NeuroDrive supports your brain's natural dopamine production and stress resilience. No prescription, no jitters, no crash."
                },
                {
                  question: "Will it affect my sleep?",
                  answer: "Not if taken in the morning or early afternoon. Duration is 8-12 hours. Unlike stimulants that can disrupt sleep architecture, some users report improved sleep quality from reduced stress."
                },
                {
                  question: "What if it doesn't work for me?",
                  answer: "14-day money-back guarantee. If you don't feel a noticeable difference in focus, motivation, and mental clarity, we'll refund you. No questions asked."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-accent transition-colors">
                  <h3 className="font-semibold text-lg text-primary mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-accent/5 rounded-xl border-2 border-accent/20 text-center">
              <p className="text-lg text-gray-800 font-medium mb-2">
                Still have questions?
              </p>
              <Link href="/faq" className="text-accent hover:text-accent-dark font-semibold inline-flex items-center">
                View Full FAQ
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DON'T BUY IF Section - Credibility Booster */}
      <section className="section-padding bg-white border-t-2 border-gray-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-4 text-primary">
              Don't Buy NeuroDrive If...
            </h2>
            <p className="text-center text-gray-600 mb-8">
              This product isn't for everyone. Here's who it's NOT for:
            </p>

            <div className="space-y-4 mb-8">
              {[
                "You're fine with midday crashes and need caffeine just to function",
                "Jittery energy and anxiety from stimulants don't bother you",
                "You're okay with building tolerance and needing more to feel less",
                "Mental fog, procrastination, and low motivation feel 'normal' to you",
                "You want a quick overnight fix (this builds over days as your dopamine restores)",
                "You're looking for recreational stimulation instead of sustainable performance"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-red-500 text-xl mr-3 flex-shrink-0">✗</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-accent/5 rounded-xl border-2 border-accent/20 text-center mb-8">
              <p className="text-xl font-bold text-primary mb-3">
                NeuroDrive IS for high performers who:
              </p>
              <div className="text-left max-w-xl mx-auto space-y-2">
                {[
                  "Demand constant mental edge without burnout",
                  "Refuse to accept brain fog as normal",
                  "Want sustainable performance — not borrowed energy",
                  "Value calm focus over frantic stimulation",
                  "Are done with the caffeine/crash cycle"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-accent text-xl mr-3 flex-shrink-0">✓</span>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* NEW: "You are ready" section */}
            <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border-2 border-accent/30 text-center">
              <p className="text-lg font-bold text-primary mb-4">
                ✅ You're Ready for NeuroDrive If:
              </p>
              <div className="text-sm text-gray-700 space-y-2">
                <p>✓ You code long hours and face mental fatigue</p>
                <p>✓ You refuse to rely on caffeine alone</p>
                <p>✓ You're building something important and need your brain at peak</p>
                <p>✓ You value your mental edge as your competitive advantage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: WHY NOW - Urgency Section */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-white border-y-2 border-yellow-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-yellow-100 border-2 border-yellow-300 rounded-full text-yellow-800 font-bold mb-6">
              ⏰ Why You Should Act Now
            </div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Demand Is Outpacing Supply
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Every week, more builders, founders, and researchers discover NeuroDrive. 
              Word spreads fast in tight-knit communities — Hacker News, Reddit, Discord servers.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Since launch, <strong>demand has consistently outpaced supply</strong>. 
              We manufacture in limited batches to maintain pharmaceutical-grade quality standards.
            </p>
            <div className="p-6 bg-white rounded-xl border-2 border-yellow-200 shadow-md mb-8">
              <p className="text-xl font-semibold text-primary mb-2">
                Current Status: Only {stockCount} bottles remaining
              </p>
              <p className="text-gray-600">
                Next production run scheduled in 4+ weeks. Secure your bottle before this batch sells out.
              </p>
            </div>
            <p className="text-gray-600">
              This isn't artificial scarcity — it's the reality of maintaining quality at scale. 
              If you're ready to restore your cognitive edge, now is the time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - FULLY OPTIMIZED */}
      <section className="section-padding bg-white border-t-2 border-accent/20">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-primary">
            Reclaim Your Drive.
            <br />
            <span className="text-gradient-green">Restore Your Edge.</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Stop forcing your brain with stimulants. Start supporting it with adaptogenic restoration. 
            Join 1,247+ developers, founders, and researchers who've made the switch.
          </p>

          {/* Quality Transparency Badge */}
          <div className="mb-8 p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="font-bold text-gray-900">Pharmaceutical Grade Transparency</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">99.4% Purity</p>
                <p className="text-gray-600">Third-party lab tested</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">GMP Certified</p>
                <p className="text-gray-600">Facility inspection passed</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Batch Tracking</p>
                <p className="text-gray-600">Certificate available on request</p>
              </div>
            </div>
          </div>
          
          {/* URGENCY BOX */}
          <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-red-700 font-bold text-lg">First Batch Selling Fast</span>
            </div>
            <p className="text-red-700 font-medium mb-2">
              Only {stockCount} bottles remaining in current stock.
            </p>
            <p className="text-red-600 text-sm">
              Next production run not scheduled for 4 weeks. Secure yours now.
            </p>
          </div>

          {/* PROMINENT GUARANTEE - Directly before CTA */}
          <div className="mb-6 p-6 bg-accent/5 rounded-lg border-2 border-accent/30">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-accent font-bold text-xl">Risk-Free 14-Day Trial</p>
            </div>
            <p className="text-gray-700 text-lg mb-2">
              Try NeuroDrive risk-free. If you don't feel a noticeable difference in <strong>focus, motivation, and mental clarity</strong> — full refund.
            </p>
            <p className="text-sm text-gray-600">No questions asked. No hassle.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/checkout" className="btn-primary text-lg inline-flex items-center justify-center group">
              <span>Unlock Mental Drive</span>
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">14-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">256-bit Encrypted Checkout</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Fast EU Delivery (3-5 days)</span>
            </div>
          </div>

          {/* LIMITED TIME BONUS */}
          <div className="mb-8 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
            <p className="text-yellow-800 font-semibold mb-1">🎁 Limited Time: First Order Bonus</p>
            <p className="text-sm text-yellow-700">
              Order today and get our "Focus Protocol" guide (€29 value) — FREE with your first bottle
            </p>
          </div>

          {/* Duplicate Guarantee Badge */}
          <div className="mb-8 p-4 bg-accent/5 rounded-lg border border-accent/30 inline-block">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-accent">Protected by our 14-Day Money-Back Guarantee</span>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
            <p className="text-gray-700 italic mb-2 text-lg">
              "Your brain is your most valuable asset. Don't settle for overstimulation, tolerance, or burnout."
            </p>
            <p className="text-sm text-gray-600 font-medium">
              Give it what it needs: balanced, sustainable dopamine restoration.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
