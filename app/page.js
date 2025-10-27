import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white section-padding overflow-hidden molecular-grid">
        {/* Декоративні елементи */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Наукова бирка + SCARCITY */}
            <div className="text-center mb-6 sm:mb-8 animate-fade-in space-y-3">
              <span className="badge text-xs sm:text-sm">
                <svg className="w-3 h-3 mr-1.5 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Pharmaceutical-Grade Adaptogenic Formula
              </span>
              {/* SCARCITY BADGE - EmergingEra style */}
              <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-xs font-semibold text-red-700 animate-pulse">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Limited First Batch • Only 47 Units Remaining
              </div>
            </div>

            <h1 className="text-center mb-4 sm:mb-6 leading-tight text-primary animate-fade-in-up px-4" style={{animationDelay: '0.1s'}}>
              Mental Performance
              <br />
              <span className="text-gradient-green">On Demand</span>
            </h1>
            
            <p className="text-center text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-700 max-w-3xl mx-auto animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
              NeuroDrive delivers <strong className="text-accent">sustained focus</strong>, 
              <strong className="text-accent"> natural motivation</strong>, and 
              <strong className="text-accent"> mental endurance</strong> — 
              without the crash.
            </p>
            
            <p className="text-center text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 animate-fade-in-up px-4" style={{animationDelay: '0.3s'}}>
              Sublingual Drops • Adaptogenic Amino Derivative Complex • Rapid Absorption
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up px-4" style={{animationDelay: '0.4s'}}>
              <Link 
                href="/checkout" 
                className="btn-primary btn-ripple text-base group inline-flex items-center justify-center"
              >
                <span>Claim Your Bottle Now</span>
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
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
            
            {/* Наукові показники - з stagger анімацією */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {[
                { value: '8-12h', label: 'Duration', icon: '⏱' },
                { value: 'Zero', label: 'Crashes', icon: '📊' },
                { value: '99.4%', label: 'Purity', icon: '🔬' },
                { value: '30ml', label: 'Per Bottle', icon: '💧' }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="card-scientific text-center group animate-scale-in"
                  style={{animationDelay: `${0.5 + idx * 0.1}s`}}
                >
                  <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform animate-bounce-subtle">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-mono uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* TRUST INDICATORS - EmergingEra style */}
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
                <span className="font-medium">Fast Shipping</span>
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

      {/* SOCIAL PROOF BAR - NEW */}
      <section className="bg-accent text-white py-3">
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span><strong>1,247+</strong> satisfied customers</span>
            </div>
            <div className="hidden md:flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span><strong>4.8/5</strong> average rating</span>
            </div>
            <div className="hidden sm:flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>Trusted by biohackers worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-4 text-primary">
              Traditional Stimulants Fall Short
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Coffee, energy drinks, and prescription stimulants create more problems than they solve
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card-scientific border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">☕</div>
                  <h3 className="text-xl font-semibold text-gray-900">Coffee</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Anxiety & jitters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Afternoon crashes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Rapid tolerance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Heart palpitations</span>
                  </li>
                </ul>
              </div>

              <div className="card-scientific border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">💊</div>
                  <h3 className="text-xl font-semibold text-gray-900">Prescription Stims</h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">✗</span>
                    <span>Overstimulation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">✗</span>
                    <span>Sleep disruption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">✗</span>
                    <span>Requires prescription</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">✗</span>
                    <span>Dependency risk</span>
                  </li>
                </ul>
              </div>

              <div className="card-scientific border-l-4 border-accent bg-gradient-to-br from-white to-accent/5">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">✓</div>
                  <h3 className="text-xl font-semibold text-primary">NeuroDrive</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm font-medium">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Calm, focused energy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>8-12 hour duration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>No prescription needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Zero crashes or jitters</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-xl border-2 border-accent/20">
              <p className="text-xl text-gray-800 font-medium">
                You need <span className="text-accent font-bold">reliable cognitive support</span> 
                <br className="hidden md:block" />
                that works with your brain — not against it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge mb-4">Adaptogenic Mechanism</span>
              <h2 className="mb-6 text-primary">
                How NeuroDrive Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proprietary adaptogenic amino derivative complex supports your brain's natural 
                dopamine production for sustained motivation and focus — without artificial stimulation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="card-scientific text-center group hover:shadow-glow-green">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Supports Focus</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Helps maintain clear thinking and sustained attention throughout your workday. 
                  Crystal-clear mental clarity without overstimulation.
                </p>
              </div>

              <div className="card-scientific text-center group hover:shadow-glow-green">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Promotes Drive</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Supports natural motivation and mental energy for 8-12 hours. 
                  No peaks, no crashes — just consistent performance.
                </p>
              </div>

              <div className="card-scientific text-center group hover:shadow-glow-green">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-3xl">💪</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Boosts Endurance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Helps reduce mental fatigue and supports work capacity. 
                  Stay sharp when others burn out.
                </p>
              </div>
            </div>

            {/* Механізм дії */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-semibold mb-8 text-primary text-center">
                The Adaptogenic Advantage
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-2">Natural Dopamine Support</h4>
                    <p className="text-gray-700">
                      Supports your brain's natural dopamine production pathways rather than forcing artificial release. 
                      This maintains long-term effectiveness without depletion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-2">Balanced Energy Profile</h4>
                    <p className="text-gray-700">
                      Unique adaptogenic properties provide mental energy while supporting calm focus. 
                      No jitters, no anxiety — just focused confidence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-2">Adaptive Restoration</h4>
                    <p className="text-gray-700">
                      Works as an actoprotector to support mental adaptability and stress resilience. 
                      Enhances your brain's natural capacity rather than overriding it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-accent">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-700 italic mb-2">
                      "This feels like the ultimate 'balancer' for my neurotransmitters. Energy without anxiety."
                    </p>
                    <p className="text-sm font-medium text-gray-600">— Verified Customer Review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-4 text-primary">
              What You'll Experience
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Documented benefits from extensive research and thousands of user reports
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '✨',
                  title: 'Natural Motivation',
                  desc: 'Supports internal drive to act within 20-40 minutes. Feel ready to tackle your tasks.'
                },
                {
                  icon: '🎯',
                  title: 'Laser Focus',
                  desc: 'Helps clear brain fog and supports sustained concentration throughout your workday.'
                },
                {
                  icon: '😌',
                  title: 'Calm Drive',
                  desc: 'Energy plus mental clarity equals peak performance. Supports composure under pressure.'
                },
                {
                  icon: '🔋',
                  title: 'Zero Crashes',
                  desc: 'Steady all-day support. No withdrawal or rebound fatigue when effects wear off.'
                },
                {
                  icon: '💯',
                  title: 'Non-Habit Forming',
                  desc: 'Use daily or cycle as needed. Adaptogenic mechanism maintains effectiveness long-term.'
                },
                {
                  icon: '⚙️',
                  title: 'Sublingual Delivery',
                  desc: '2-4 drops under tongue for rapid absorption. Bypasses digestive system for faster effects.'
                }
              ].map((benefit, idx) => (
                <div key={idx} className="card-scientific flex items-start group hover:shadow-glow-green">
                  <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-primary">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4 text-primary">
            What High Performers Say
          </h2>
          <p className="text-center text-gray-600 mb-12">Real experiences from the biohacker community</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                rating: 5,
                text: "Finally found something that actually works. Motivation kicked in within 30 minutes, lasted my entire workday. No jitters, no crash.",
                author: "Alex M.",
                role: "Software Engineer"
              },
              {
                rating: 5,
                text: "This is the dopamine support I've been looking for. Calm, steady flow of energy and drive. I'm getting so much more done.",
                author: "Sarah K.",
                role: "Entrepreneur"
              },
              {
                rating: 5,
                text: "Feels like someone turned on a switch in my brain. Clear thinking, sustained focus, and I actually feel good while working.",
                author: "Michael R.",
                role: "Grad Student"
              }
            ].map((review, idx) => (
              <div key={idx} className="card-scientific">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.author}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sublingual Drops */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-center mb-4 text-primary">
            Why Sublingual Drops?
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Sublingual delivery offers significant advantages over capsules and powders
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Rapid Absorption',
                desc: 'Sublingual delivery allows effects within 20-40 minutes. Bypasses digestive system for faster onset and higher bioavailability.'
              },
              {
                icon: '🎯',
                title: 'Precision Dosing',
                desc: 'Fine-tune your dose with drop accuracy. Start with 2 drops, adjust as needed. Impossible with fixed-dose capsules.'
              },
              {
                icon: '💧',
                title: 'Enhanced Bioavailability',
                desc: 'Absorption through mucous membranes delivers more active compound to your system compared to oral capsules.'
              },
              {
                icon: '👌',
                title: 'Ultimate Convenience',
                desc: 'Pocket-sized bottle. 2-4 drops under tongue, hold 60 seconds, swallow. Take anywhere, anytime. No water needed.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="card-scientific flex items-start group hover:shadow-glow-green">
                <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-primary">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-xl border-2 border-accent/20 text-center">
            <h3 className="text-xl font-semibold text-primary mb-3">Pharmaceutical Grade Quality</h3>
            <p className="text-gray-700 mb-2">99.4% purity · Third-party tested · GMP certified facility</p>
            <p className="text-sm text-gray-500 font-mono">Proprietary adaptogenic amino derivative complex · 30ml per bottle</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white border-t-2 border-accent/20">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-primary">
            Experience Mental Performance
            <br />
            <span className="text-gradient-green">Without The Drawbacks</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Join thousands of biohackers, developers, and high performers who've discovered 
            the NeuroDrive advantage. Risk-free trial with 14-day money-back guarantee.
          </p>
          
          {/* URGENCY BOX - EmergingEra style */}
          <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-red-700 font-bold text-lg">First Batch Selling Fast</span>
            </div>
            <p className="text-red-700 font-medium">Only 47 bottles remaining in current stock. Next production run not scheduled for 4 weeks.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/checkout" className="btn-primary text-lg inline-flex items-center justify-center">
              <span>Get NeuroDrive Now</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/faq" className="btn-secondary text-lg inline-flex items-center justify-center">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View FAQ
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>14-Day Guarantee</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
