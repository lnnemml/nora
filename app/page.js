import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - з затримками анімацій */}
      <section className="relative bg-white section-padding overflow-hidden molecular-grid">
        {/* Декоративні елементи */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Наукова бирка */}
            <div className="text-center mb-6 sm:mb-8 animate-fade-in">
              <span className="badge text-xs sm:text-sm">
                <svg className="w-3 h-3 mr-1.5 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Pharmaceutical-Grade Nootropic
              </span>
            </div>

            <h1 className="text-center mb-4 sm:mb-6 leading-tight text-primary animate-fade-in-up px-4" style={{animationDelay: '0.1s'}}>
              Cognitive Enhancement
              <br />
              <span className="text-gradient-green">Without Compromise</span>
            </h1>
            
            <p className="text-center text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-700 max-w-3xl mx-auto animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
              NORA delivers <strong className="text-accent">sustained focus</strong>, 
              <strong className="text-accent"> motivation</strong>, and 
              <strong className="text-accent"> mental stamina</strong> — 
              backed by decades of research.
            </p>
            
            <p className="text-center text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 animate-fade-in-up px-4" style={{animationDelay: '0.3s'}}>
              Bromantane MCT Spray: Precision-engineered cognitive support for high performers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up px-4" style={{animationDelay: '0.4s'}}>
              <Link 
                href="/checkout" 
                className="btn-primary btn-ripple text-base group inline-flex items-center justify-center"
              >
                <span>Start Your Trial</span>
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
                View Research
              </a>
            </div>
            
            {/* Наукові показники - з stagger анімацією */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {[
                { value: '8h', label: 'Duration', icon: '⏱' },
                { value: '0', label: 'Crashes', icon: '📊' },
                { value: '99.4%', label: 'Purity', icon: '🔬' },
                { value: '30ml', label: 'Volume', icon: '💧' }
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
          </div>
        </div>
      </section>

      {/* Problem Section - чітке порівняння */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-4 text-primary">
              Traditional Stimulants Fall Short
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Most cognitive enhancers create more problems than they solve
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
                  <h3 className="text-xl font-semibold text-gray-900">Modafinil</h3>
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
                    <span>Prescription required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">✗</span>
                    <span>Side effects</span>
                  </li>
                </ul>
              </div>

              <div className="card-scientific border-l-4 border-accent bg-gradient-to-br from-white to-accent/5">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">✓</div>
                  <h3 className="text-xl font-semibold text-primary">NORA</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm font-medium">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Calm focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>8+ hour duration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Non-addictive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Zero crashes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-xl border-2 border-accent/20">
              <p className="text-xl text-gray-800 font-medium">
                You need <span className="text-accent font-bold">reliable cognitive enhancement</span> 
                <br className="hidden md:block" />
                without the downsides of traditional stimulants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - наукове пояснення */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge mb-4">Mechanism of Action</span>
              <h2 className="mb-6 text-primary">
                How Bromantane Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Developed by Soviet scientists for special forces, bromantane is a unique actoprotector 
                that enhances dopamine production without depleting neurotransmitter stores
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="card-scientific text-center group hover:shadow-glow-green">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Calm Focus</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Anxiolytic stimulant properties create a unique state of alert calmness. 
                  Crystal-clear thinking without anxiety or overstimulation.
                </p>
              </div>

              <div className="card-scientific text-center group hover:shadow-glow-green">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Sustained Energy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  8+ hours of steady motivation and drive. No peaks, no crashes, 
                  just consistent mental performance throughout your day.
                </p>
              </div>

              <div className="card-scientific text-center group hover:shadow-glow-green">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-3xl">💪</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Mental Stamina</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reduces mental fatigue and increases work capacity. 
                  Keep going when others burn out.
                </p>
              </div>
            </div>

            {/* Механізм дії - детально */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-semibold mb-8 text-primary text-center">
                Scientific Mechanism
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-2">Dopamine Upregulation</h4>
                    <p className="text-gray-700">
                      Increases tyrosine hydroxylase activity — you <em>produce</em> more dopamine naturally, 
                      rather than just releasing existing stores. This prevents depletion and maintains long-term efficacy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary mb-2">Anxiolytic Stimulation</h4>
                    <p className="text-gray-700">
                      Unique dual action: provides mental energy while simultaneously reducing anxiety. 
                      No jitters, no fear — just focused confidence and calm determination.
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
                      Works as an actoprotector to restore mental adaptability without forcing stimulation. 
                      Supports your brain's natural capacity rather than overriding it.
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
                      "Bromantane to me seems like the ultimate 'balancer' of the neurotransmitters."
                    </p>
                    <p className="text-sm font-medium text-gray-600">— Reddit r/Nootropics Community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - сітка переваг */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-4 text-primary">
              Clinical Benefits
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Documented effects from decades of research and real-world use
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '✨',
                  title: 'Instant Motivation',
                  desc: 'Feel internal drive to act within 20 minutes. Start executing on tasks immediately.'
                },
                {
                  icon: '🎯',
                  title: 'Laser Focus',
                  desc: 'Eliminate brain fog. Sustained concentration throughout your entire workday.'
                },
                {
                  icon: '😌',
                  title: 'Calm Drive',
                  desc: 'Energy plus cold mind equals peak performance. Anxiolytic effect maintains composure.'
                },
                {
                  icon: '🔋',
                  title: 'Zero Crashes',
                  desc: 'Steady all-day effect. No withdrawal, no rebound fatigue when effects wear off.'
                },
                {
                  icon: '💯',
                  title: 'Non-Addictive',
                  desc: 'Take daily or cycle. No dependency, no tolerance buildup. Sustainable long-term.'
                },
                {
                  icon: '⚙️',
                  title: 'Precise Dosing',
                  desc: '1 spray for mild boost, 2-3 for full effect. Fine-tune your optimal dose.'
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

      {/* Testimonials - чисті відгуки */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4 text-primary">
            Biohacker Reviews
          </h2>
          <p className="text-center text-gray-600 mb-12">Real experiences from the nootropics community</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                rating: 5,
                text: "Made me feel upbeat and motivated, moving from zero progress to getting things done. Absolutely works extremely well.",
                author: "u/Recursatron",
                source: "Reddit"
              },
              {
                rating: 5,
                text: "Bromantane is the dopamine free lunch. Calm steady flow of energy and motivation, charisma at its max.",
                author: "r/Nootropics",
                source: "Community"
              },
              {
                rating: 5,
                text: "Stimulating and calming at the same time. Makes you feel normal — unsleepy, unafraid, confident.",
                author: "Longecity",
                source: "Forum"
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
                <p className="text-sm text-gray-500 font-medium">— {review.author}, {review.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MCT Spray - технічні переваги */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-center mb-4 text-primary">
            Superior Delivery System
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            MCT oil sublingual spray offers significant advantages over capsules and powders
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Rapid Absorption',
                desc: 'Sublingual MCT delivery enables effects within 15-30 minutes. Bypasses first-pass metabolism for superior bioavailability (~27% oral → enhanced sublingual).'
              },
              {
                icon: '🎯',
                title: 'Precision Dosing',
                desc: 'Fine-tune your dose with spray accuracy. No scales needed. Start with 1 spray (40mg), adjust as needed. Impossible with fixed-dose capsules.'
              },
              {
                icon: '💧',
                title: 'Enhanced Bioavailability',
                desc: 'MCT oil carrier improves absorption. Sublingual administration bypasses hepatic first-pass metabolism, delivering more active compound to your system.'
              },
              {
                icon: '👌',
                title: 'Ultimate Convenience',
                desc: 'Pocket-sized. 2 sprays under tongue, hold 60 seconds, swallow. Take anywhere, anytime. No water, no pills, no preparation.'
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
            <h3 className="text-xl font-semibold text-primary mb-3">Pharmaceutical Grade</h3>
            <p className="text-gray-700 mb-2">99.4% purity · Third-party tested · GMP certified</p>
            <p className="text-sm text-gray-500 font-mono">80mg/ml concentration · 2400mg total bromantane per 30ml bottle</p>
          </div>
        </div>
      </section>

      {/* CTA Section - чистий та прямий */}
      <section className="section-padding bg-white border-t-2 border-accent/20">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-primary">
            Experience Cognitive Enhancement
            <br />
            <span className="text-gradient-green">Without Compromise</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Join the biohackers, developers, and high performers who've discovered 
            the bromantane advantage. Risk-free trial with 14-day money-back guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/checkout" className="btn-primary text-lg inline-flex items-center justify-center">
              <span>Get NORA Now</span>
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
