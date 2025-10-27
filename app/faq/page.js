'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is NeuroDrive?",
      answer: "NeuroDrive is a proprietary adaptogenic cognitive support formula delivered as sublingual drops. It contains a synthetic adaptogenic amino derivative complex (500mg per serving) designed to support motivation, mental drive, and sustained energy throughout your day. Our formula works with your brain's natural neurochemistry rather than forcing artificial stimulation."
    },
    {
      question: "What's in the formula?",
      answer: "NeuroDrive contains a proprietary adaptogenic amino derivative blend dissolved in pharmaceutical-grade MCT oil for optimal absorption. The primary active ingredient is bromantane derivative (80mg/ml concentration), a synthetic actoprotector compound that supports natural dopamine pathways. Each 30ml bottle contains 2400mg of active compound. See full ingredient list on product label."
    },
    {
      question: "Is it legal and safe?",
      answer: "Yes. NeuroDrive is positioned as a dietary supplement for research and personal cognitive optimization use. The formula has decades of safety research behind it and is non-addictive with a favorable safety profile when used as directed. It's legal in most countries as a supplement. Note: The active compound is on the WADA prohibited list for competitive athletes."
    },
    {
      question: "How do I use NeuroDrive Sublingual Drops?",
      answer: "Shake the bottle well. Place 2-4 drops under your tongue (sublingual), hold for 60-90 seconds, then swallow. Start with 2 drops to assess tolerance. Most users find 2-4 drops (approximately 80-160mg) optimal. Take in the morning or early afternoon on an empty stomach for best results. The sublingual delivery ensures rapid absorption."
    },
    {
      question: "When will I feel the effects?",
      answer: "Most users notice effects within 20-40 minutes when taken sublingually. The full effect builds over the first week of use. Some report immediate benefits on day one, while others experience gradual improvement over 3-7 days as the compound accumulates and optimizes neurotransmitter systems."
    },
    {
      question: "How long do the effects last?",
      answer: "Effects typically last 8-12 hours, with many users reporting sustained mental energy throughout their workday. Unlike caffeine or other stimulants, there's no sharp decline or crash. The compound provides stable cognitive support with a smooth offset."
    },
    {
      question: "Can I take it every day?",
      answer: "Yes, NeuroDrive can be used daily. Many users cycle it (5 days on, 2 days off) or use it on work days only. There's no evidence of physical dependence or withdrawal. Some prefer daily use for consistent benefits, others use it strategically for demanding periods. Listen to your body and adjust accordingly."
    },
    {
      question: "Will I build tolerance?",
      answer: "Unlike traditional stimulants, NeuroDrive's adaptogenic mechanism doesn't cause significant tolerance buildup. It works by enhancing your brain's natural dopamine production rather than depleting neurotransmitter stores. Most users maintain effectiveness over months of use. Taking occasional breaks (1-2 days per week) can help maintain peak efficacy."
    },
    {
      question: "Are there any side effects?",
      answer: "NeuroDrive is generally well-tolerated. Rare side effects may include mild headaches (usually resolved with hydration), difficulty falling asleep if taken too late in the day, or mild digestive discomfort. Starting with a low dose (2 drops) helps minimize any adjustment period. Do not use if you have bipolar disorder without medical supervision."
    },
    {
      question: "How is this different from coffee or energy drinks?",
      answer: "Coffee provides a quick energy spike by blocking adenosine receptors, often followed by jitters and crashes. NeuroDrive works differently — it supports your brain's ability to produce dopamine naturally, providing calm, sustained energy without anxiety or crashes. It's stimulating and calming simultaneously, giving you focused drive rather than jittery overstimulation."
    },
    {
      question: "How is this different from Modafinil or prescription stimulants?",
      answer: "Modafinil is a powerful wakefulness agent that requires a prescription in most countries and can be too strong for daily use. NeuroDrive is milder, legal, over-the-counter, and provides motivation + focus without the overstimulation. It's designed for daily cognitive optimization rather than treating sleep disorders or ADHD."
    },
    {
      question: "Why sublingual drops vs capsules?",
      answer: "Sublingual drops offer several advantages: (1) Faster absorption through mucous membranes (20-40min onset vs 60-90min for capsules), (2) Flexible dosing — you control the exact amount drop by drop, (3) Higher bioavailability than oral capsules, (4) Bypasses first-pass liver metabolism, (5) Convenient and portable. Sublingual delivery is the preferred method for this compound."
    },
    {
      question: "What's the concentration and dosing?",
      answer: "NeuroDrive Sublingual Drops contain 80mg/ml of proprietary adaptogenic amino derivative complex dissolved in MCT oil. Each 30ml bottle contains approximately 2400mg total. Each drop delivers approximately 20mg (depending on dropper), so 2-4 drops gives you a 40-160mg dosing range. Start low and adjust based on your response."
    },
    {
      question: "How should I store it?",
      answer: "Store in a cool, dry place away from direct sunlight. Room temperature is fine. Refrigeration is not necessary but may extend shelf life. Shake well before each use as some settling is normal with oil-based formulations. Keep tightly sealed when not in use."
    },
    {
      question: "Can I combine it with other nootropics?",
      answer: "NeuroDrive stacks well with many nootropics. Popular combinations include: choline sources (Alpha-GPC, CDP-Choline), racetams (Phenylpiracetam, Noopept), L-Tyrosine, or adaptogens like Rhodiola. Avoid combining with strong stimulants initially. Always start conservatively when stacking supplements."
    },
    {
      question: "What if it doesn't work for me?",
      answer: "We offer a 14-day money-back guarantee. Approximately 10-20% of users may be non-responders due to individual biochemistry. If you don't experience benefits within 7 days of use at the recommended dose (2-4 drops daily), contact us for a full refund. Your satisfaction is guaranteed."
    },
    {
      question: "Is there scientific research on the formula?",
      answer: "Yes, the primary active compound (bromantane derivative) has been studied extensively since the 1980s. Research shows it supports dopamine and serotonin production, reduces anxiety, improves physical performance, and enhances cognitive function. It has been clinically studied for treating asthenia and has safety data from decades of use in various populations."
    },
    {
      question: "Who should NOT use NeuroDrive?",
      answer: "Avoid if you: (1) Are pregnant or breastfeeding, (2) Have bipolar disorder or psychotic conditions (can trigger hypomania), (3) Are under 18 years old, (4) Are taking MAO inhibitors, (5) Have severe cardiovascular conditions. Consult a healthcare provider if you have any medical conditions or take prescription medications."
    },
    {
      question: "How long does one bottle last?",
      answer: "A 30ml bottle lasts 15-30 days depending on your dosage. At the standard dose of 2-4 drops per day, expect approximately 15-25 days per bottle. Conservative users (2 drops daily) can extend it to a month, while those using higher doses may use it faster."
    },
    {
      question: "Is this a pharmaceutical drug or supplement?",
      answer: "NeuroDrive is formulated and marketed as a dietary supplement for cognitive support, not as a pharmaceutical drug. It is intended for research and personal optimization use. It is not intended to diagnose, treat, cure, or prevent any disease. The statements about this product have not been evaluated by the FDA."
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
            Everything you need to know about NeuroDrive Sublingual Drops
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
