import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary-dark text-white section-padding overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-light rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Product Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                NORA
              </span>
            </div>

            <h1 className="mb-6 leading-tight">
              Mental Endurance of the{' '}
              <span className="text-gradient">New Generation</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              Focus. Energy. Mental Stamina.{' '}
              <span className="text-accent font-bold">Without Crashes.</span>
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Bromantane MCT Spray — the transmission for your brain, not another energy drink
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/checkout" 
                className="btn-primary text-lg group"
              >
                <span>Get Your Bottle Now</span>
                <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a 
                href="#how-it-works" 
                className="bg-white/10 backdrop-blur-sm border-2 border-accent hover:bg-accent/20 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Learn More
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '8+', label: 'Hours of Focus' },
                { value: '0', label: 'Crashes or Jitters' },
                { value: '100%', label: 'Legal & Safe' },
                { value: '30ml', label: 'Per Bottle' }
              ].map((stat, idx) => (
                <div key={idx} className="card-hover bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-accent/20">
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

    

      {/* Problem Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12 text-primary">
              Tired of the Productivity Rollercoaster?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Coffee ☕</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>❌ Jitters and anxiety</li>
                  <li>❌ Afternoon crashes</li>
                  <li>❌ Tolerance builds fast</li>
                  <li>❌ Heart racing</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Modafinil 💊</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>❌ Too strong, overstimulating</li>
                  <li>❌ Sleep disruption</li>
                  <li>❌ Requires prescription</li>
                  <li>❌ Side effects</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8 p-6 bg-white rounded-lg shadow-md">
              <p className="text-lg text-gray-700">
                You need <span className="font-bold text-primary">stable mental performance</span> without the downsides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-6 text-primary">
              Introducing NORA Bromantane Spray
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12">
              The secret dopamine tool developed for Soviet special forces, now available in a convenient MCT spray
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-3">Calm Focus</h3>
                <p className="text-gray-100">
                  Stimulating and calming at the same time. Crystal-clear thinking without anxiety.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent to-orange-600 text-white p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Sustained Energy</h3>
                <p className="text-gray-100">
                  8+ hours of steady motivation and drive. No peaks, no crashes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-xl text-center">
                <div className="text-5xl mb-4">💪</div>
                <h3 className="text-xl font-semibold mb-3">Mental Stamina</h3>
                <p className="text-gray-100">
                  Reduces mental fatigue. Keep going when others burn out.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary text-center">
                How Does Bromantane Work?
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-accent font-bold text-2xl mr-4">1.</span>
                  <p>
                    <strong>Upregulates dopamine production</strong> by increasing tyrosine hydroxylase activity — you make more dopamine naturally, not just release what you have
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-accent font-bold text-2xl mr-4">2.</span>
                  <p>
                    <strong>Acts as an anxiolytic stimulant</strong> — unique combination of energy + calm. No jitters, no fear, just confidence
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-accent font-bold text-2xl mr-4">3.</span>
                  <p>
                    <strong>Restores mental adaptability</strong> without depleting neurotransmitter stores. It's restoration, not forced stimulation
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-accent">
                <p className="text-sm text-gray-600 italic">
                  "Bromantane to me seems like the ultimate 'balancer' of the neurotransmitters."
                  <span className="block mt-2 font-semibold">— Reddit Nootropics Community</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">
              What You'll Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">✨ Instant Motivation Boost</h4>
                <p className="text-gray-200">
                  Feel that internal drive to actually do things. Start acting on your tasks within 20 minutes.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">🎯 Laser Focus</h4>
                <p className="text-gray-200">
                  Goodbye brain fog. Say hello to clear, sustained concentration throughout your workday.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">😌 Calm Drive</h4>
                <p className="text-gray-200">
                  Energy + cold mind = peak performance. Anxiolytic effect keeps you collected and confident.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">🔋 No Crashes</h4>
                <p className="text-gray-200">
                  Steady, all-day effect. Even when you stop — no withdrawal, no "crash", you just feel great.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">💯 Non-Addictive</h4>
                <p className="text-gray-200">
                  Take daily or cycle. No dependency, no tolerance buildup. It's sustainable long-term.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">⚙️ Flexible Dosing</h4>
                <p className="text-gray-200">
                  1 spray for mild boost, 2-3 for full effect. Find your perfect dose with precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12 text-primary">
            What Biohackers Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-accent mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Made me feel upbeat and motivated, moving from zero progress to getting things done. Absolutely works extremely well."
              </p>
              <p className="text-sm text-gray-500">— u/Recursatron, Reddit</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-accent mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Bromantane is the dopamine free lunch. Calm steady flow of energy and motivation, charisma at its max."
              </p>
              <p className="text-sm text-gray-500">— r/Nootropics Community</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-accent mb-2">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Stimulating and calming at the same time. Makes you feel normal — unsleepy, unafraid, confident."
              </p>
              <p className="text-sm text-gray-500">— Longecity Forum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why MCT Spray */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-center mb-8 text-primary">
            Why MCT Spray?
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Not all bromantane is created equal. Form matters.
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="text-3xl mr-4">🚀</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Fast Sublingual Absorption</h3>
                <p className="text-gray-600">
                  MCT oil enables rapid absorption through the mucous membrane. Effects kick in within 15-30 minutes, faster than capsules.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="text-3xl mr-4">🎯</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Precise Dosing</h3>
                <p className="text-gray-600">
                  Unlike powder (requires scales) or fixed-dose capsules, spray lets you fine-tune your dose. Start with 1 spray, adjust as needed.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="text-3xl mr-4">💧</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Better Bioavailability</h3>
                <p className="text-gray-600">
                  Bromantane has ~27% oral bioavailability. MCT oil-based sublingual delivery bypasses first-pass metabolism for superior absorption.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="text-3xl mr-4">👌</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Convenient & Portable</h3>
                <p className="text-gray-600">
                  Pocket-sized bottle. Take it anywhere. 2 sprays under the tongue, wait 60 seconds, swallow. That's it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent to-orange-600 text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="mb-6">
            Ready to Unlock Your Mental Potential?
          </h2>
          <p className="text-xl mb-8">
            Don't leave your productivity to chance. Join the biohackers who've discovered the bromantane advantage.
          </p>
          <Link href="/checkout" className="inline-block bg-white text-accent hover:bg-gray-100 font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Get NORA Bromantane Spray Now
          </Link>
          <p className="mt-6 text-sm text-gray-100">
            ✓ 14-Day Money-Back Guarantee  ✓ Secure Payment  ✓ Fast Shipping
          </p>
        </div>
      </section>
    </div>
  )
}
