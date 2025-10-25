'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is Bromantane?",
      answer: "Bromantane is a unique actoprotector and anxiolytic stimulant developed in Russia in the 1980s. It increases dopamine production naturally by upregulating tyrosine hydroxylase, providing mental energy and motivation without the typical stimulant side effects. It's been used by athletes, military personnel, and now biohackers for cognitive enhancement."
    },
    {
      question: "Is it legal and safe?",
      answer: "Yes. Bromantane is legal in most countries as a dietary supplement. It was approved as a pharmaceutical in Russia for treating asthenia (chronic fatigue) and has decades of safety data. It's non-addictive and has a favorable safety profile when used as directed. However, it was banned in competitive sports (WADA) due to its performance-enhancing effects."
    },
    {
      question: "How do I use NORA Bromantane Spray?",
      answer: "Shake the bottle well. Spray 1-3 sprays under your tongue (sublingual), hold for 60-90 seconds, then swallow. Start with 1 spray to assess tolerance. Most users find 2-3 sprays (approximately 80-120mg) optimal. Take in the morning or early afternoon on an empty stomach for best results."
    },
    {
      question: "When will I feel the effects?",
      answer: "Most users notice effects within 15-30 minutes when taken sublingually. The full effect builds over the first week of use. Some report immediate benefits on day one, while others experience gradual improvement over 3-7 days as the compound accumulates and optimizes neurotransmitter systems."
    },
    {
      question: "How long do the effects last?",
      answer: "Effects typically last 6-10 hours, with many users reporting sustained mental energy throughout their workday. Unlike caffeine or other stimulants, there's no sharp decline or crash. The compound has a half-life of around 11 hours, providing stable coverage."
    },
    {
      question: "Can I take it every day?",
      answer: "Yes, bromantane can be used daily. Many users cycle it (5 days on, 2 days off) or use it on work days only. There's no evidence of physical dependence or withdrawal. Some prefer daily use for consistent benefits, others use it strategically for demanding periods."
    },
    {
      question: "Will I build tolerance?",
      answer: "Unlike traditional stimulants, bromantane doesn't cause significant tolerance buildup. It works by enhancing your brain's natural dopamine production rather than depleting neurotransmitter stores. Most users maintain effectiveness over months of use. Taking occasional breaks (1-2 days per week) can help maintain peak efficacy."
    },
    {
      question: "Are there any side effects?",
      answer: "Bromantane is generally well-tolerated. Rare side effects may include mild headaches (usually resolved with hydration), difficulty falling asleep if taken too late in the day, or mild digestive discomfort. Starting with a low dose (1 spray) helps minimize any adjustment period. Do not use if you have bipolar disorder without medical supervision."
    },
    {
      question: "How is this different from coffee or energy drinks?",
      answer: "Coffee provides a quick energy spike by blocking adenosine receptors, often followed by jitters and crashes. Bromantane works differently — it increases your brain's ability to produce dopamine naturally, providing calm, sustained energy without anxiety or crashes. It's stimulating and calming simultaneously."
    },
    {
      question: "How is this different from Modafinil?",
      answer: "Modafinil is a powerful wakefulness agent that works through multiple mechanisms and requires a prescription in most countries. It can be too strong for daily use and may cause side effects like insomnia or anxiety. Bromantane is milder, legal, over-the-counter, and provides motivation + focus without the overstimulation."
    },
    {
      question: "Why MCT oil spray vs capsules?",
      answer: "Sublingual MCT spray offers several advantages: (1) Faster absorption through mucous membranes, (2) Flexible dosing — you control the exact amount, (3) Higher bioavailability than oral capsules, (4) Bypasses first-pass liver metabolism, (5) Convenient and portable. Capsules offer fixed doses and slower onset."
    },
    {
      question: "What's the concentration?",
      answer: "Our NORA Bromantane Spray contains 80mg/ml of pharmaceutical-grade bromantane dissolved in MCT oil. Each 30ml bottle contains approximately 2400mg total. Each spray delivers approximately 40mg (depending on spray mechanism), so 1-3 sprays gives you 40-120mg dosing range."
    },
    {
      question: "How should I store it?",
      answer: "Store in a cool, dry place away from direct sunlight. Room temperature is fine. Refrigeration is not necessary but may extend shelf life. Shake well before each use as some settling is normal with oil-based formulations."
    },
    {
      question: "Can I combine it with other nootropics?",
      answer: "Bromantane stacks well with many nootropics. Popular combinations include: choline sources (Alpha-GPC, CDP-Choline), racetams (Phenylpiracetam, Noopept), L-Tyrosine, or adaptogens. Avoid combining with strong stimulants initially. Always start conservatively when stacking."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "We offer a 14-day money-back guarantee. Approximately 10-20% of users may be non-responders due to individual biochemistry. If you don't experience benefits within 7 days of use at the recommended dose (2-3 sprays daily), contact us for a full refund. Your satisfaction is guaranteed."
    },
    {
      question: "Is there scientific research on Bromantane?",
      answer: "Yes, bromantane has been studied extensively since the 1980s. Research shows it increases dopamine and serotonin production, reduces anxiety, improves physical performance, and enhances cognitive function. It's been clinically approved in Russia for treating asthenia and has safety data from decades of use."
    },
    {
      question: "Who should NOT use Bromantane?",
      answer: "Avoid if you: (1) Are pregnant or breastfeeding, (2) Have bipolar disorder or psychotic conditions (can trigger hypomania), (3) Are under 18 years old, (4) Are taking MAO inhibitors, (5) Have severe cardiovascular conditions. Consult a healthcare provider if you have any medical conditions or take prescription medications."
    },
    {
      question: "How long does one bottle last?",
      answer: "A 30ml bottle lasts 10-30 days depending on your dosage. At the standard dose of 2-3 sprays per day, expect approximately 15-20 days per bottle. Heavy users (3+ sprays daily) may use it faster, while conservative users (1-2 sprays) can extend it to a month."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-4 text-primary">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-xl text-gray-600 mb-12">
            Everything you need to know about NORA Bromantane Spray
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-lg text-gray-800">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Still Have Questions?
            </h3>
            <p className="mb-6">
              Our team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
