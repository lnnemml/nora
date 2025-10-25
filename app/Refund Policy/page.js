export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h1 className="mb-4 text-primary">
            Refund Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Last Updated: October 25, 2025
          </p>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-primary mb-2">14-Day Money-Back Guarantee</h3>
            <p className="text-gray-700 leading-relaxed">
              We stand behind the quality and effectiveness of NORA Bromantane Spray. If you're not completely satisfied with your purchase, 
              we offer a <strong>14-day money-back guarantee, no questions asked</strong>.
            </p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Return Eligibility</h2>
              <p className="text-gray-700 leading-relaxed">
                To be eligible for a return and refund, the following conditions must be met:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Time Frame:</strong> Return request must be initiated within 14 days of delivery</li>
                <li><strong>Product Condition:</strong> Product can be opened or partially used (we understand you need to try it)</li>
                <li><strong>Proof of Purchase:</strong> Valid order number or receipt required</li>
                <li><strong>Original Packaging:</strong> Product should be returned in its original packaging when possible</li>
                <li><strong>No Abuse:</strong> Product must not show signs of misuse or intentional damage</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Important:</strong> We accept returns of opened bottles. We recognize that individual biochemistry varies, and the product 
                may not work for everyone. Our goal is your satisfaction, not to create barriers to returns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Non-Refundable Items</h2>
              <p className="text-gray-700 leading-relaxed">
                The following items are not eligible for refunds:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Products returned after 14 days from delivery date</li>
                <li>Products showing evidence of tampering or contamination</li>
                <li>Products purchased from unauthorized resellers or third parties</li>
                <li>Shipping fees (unless the return is due to our error or defective product)</li>
                <li>Products damaged due to misuse or negligence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. How to Initiate a Return</h2>
              <p className="text-gray-700 leading-relaxed">
                To request a return and refund, follow these simple steps:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Contact Our Support Team</h4>
                    <p className="text-gray-700 text-sm">
                      Email us at <a href="mailto:support@nora-brain.com" className="text-accent hover:text-accent-hover underline">support@nora-brain.com</a> or 
                      use our <a href="/contact" className="text-accent hover:text-accent-hover underline">contact form</a> with your order number and reason for return (optional).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Receive Return Authorization</h4>
                    <p className="text-gray-700 text-sm">
                      We'll respond within 24 hours with a Return Merchandise Authorization (RMA) number and return shipping instructions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Ship the Product Back</h4>
                    <p className="text-gray-700 text-sm">
                      Package the product securely with your RMA number clearly marked and ship it to the address provided. We recommend using 
                      a trackable shipping method.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Receive Your Refund</h4>
                    <p className="text-gray-700 text-sm">
                      Once we receive and inspect your return, we'll process your refund within 3-5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Return Shipping Costs</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Standard Returns (Personal Preference):</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Customer is responsible for return shipping costs</li>
                <li>We recommend using a trackable shipping method</li>
                <li>Risk of loss during return shipping is borne by the customer until received by us</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                <strong>Returns Due to Our Error or Defect:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>If you received the wrong product, a defective product, or if we made an error, we will cover return shipping costs</li>
                <li>We will provide a prepaid return label</li>
                <li>You will receive a full refund including original shipping fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Refund Processing</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">5.1 Refund Timeline</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Inspection:</strong> 1-2 business days after we receive your return</li>
                <li><strong>Refund Processing:</strong> 3-5 business days after approval</li>
                <li><strong>Bank Processing:</strong> 5-10 business days for the refund to appear in your account (varies by bank)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Total estimated time:</strong> 7-15 business days from when we receive your return to when you see the refund in your account.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-primary mt-6">5.2 Refund Method</h3>
              <p className="text-gray-700 leading-relaxed">
                Refunds will be issued to the original payment method used for the purchase:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Credit/Debit Cards:</strong> Refunded to the original card</li>
                <li><strong>PayPal:</strong> Refunded to your PayPal account</li>
                <li><strong>Other Payment Methods:</strong> Refunded via the same method when possible</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                If the original payment method is no longer available, we will contact you to arrange an alternative refund method.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-primary mt-6">5.3 Refund Amount</h3>
              <p className="text-gray-700 leading-relaxed">
                Your refund will include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Full product price</strong></li>
                <li><strong>Original shipping fees:</strong> Only if the return is due to our error or defective product</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Not included in refund:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Return shipping costs (unless return is due to our error)</li>
                <li>Payment processing fees (these are non-refundable third-party charges)</li>
                <li>Customs duties or import taxes (if applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Exchanges</h2>
              <p className="text-gray-700 leading-relaxed">
                We currently do not offer direct product exchanges. If you wish to exchange your product for a different item:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Request a refund for your original purchase following the return process above</li>
                <li>Place a new order for the desired product once your refund is processed</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mt-4">
                This ensures you receive your preferred product quickly without waiting for the exchange process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Damaged or Defective Products</h2>
              <p className="text-gray-700 leading-relaxed">
                If you receive a damaged or defective product:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Report Immediately:</strong> Contact us within 48 hours of delivery with photos of the damage</li>
                <li><strong>Free Return:</strong> We will provide a prepaid return label at no cost to you</li>
                <li><strong>Replacement or Refund:</strong> You can choose between a replacement product or full refund (including shipping)</li>
                <li><strong>Shipping Damage:</strong> If damage occurred during shipping, we will file a claim with the carrier on your behalf</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Lost or Missing Packages</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">8.1 During Delivery</h3>
              <p className="text-gray-700 leading-relaxed">
                If your package is lost during delivery:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Contact us immediately if tracking shows your package as delivered but you haven't received it</li>
                <li>We will investigate with the shipping carrier</li>
                <li>If the package cannot be located within 7 days, we will send a replacement or issue a full refund</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary mt-6">8.2 During Return Shipment</h3>
              <p className="text-gray-700 leading-relaxed">
                If your return package is lost in transit:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Customer bears the risk of loss until the package is received by us</li>
                <li>We strongly recommend using trackable shipping with insurance</li>
                <li>Save your shipping receipt and tracking number</li>
                <li>If you used our prepaid label, we will handle the carrier investigation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">9. International Returns</h2>
              <p className="text-gray-700 leading-relaxed">
                For international customers returning products:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Return Address:</strong> We will provide an appropriate return address based on your location when possible</li>
                <li><strong>Customs Forms:</strong> Mark the package as "Returned Goods" to avoid customs charges</li>
                <li><strong>Shipping Costs:</strong> International return shipping is customer's responsibility (unless return is due to our error)</li>
                <li><strong>Customs Duties:</strong> We cannot refund customs duties or import taxes paid at the time of delivery</li>
                <li><strong>Processing Time:</strong> International returns may take longer to process due to customs clearance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">10. Cancellations</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">10.1 Before Shipping</h3>
              <p className="text-gray-700 leading-relaxed">
                If you wish to cancel your order before it ships:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Contact us immediately at <a href="mailto:support@nora-brain.com" className="text-accent hover:text-accent-hover underline">support@nora-brain.com</a></li>
                <li>If we haven't shipped your order yet, we will cancel it and issue a full refund</li>
                <li>Refunds typically process within 1-3 business days</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary mt-6">10.2 After Shipping</h3>
              <p className="text-gray-700 leading-relaxed">
                If your order has already shipped:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We cannot cancel the shipment</li>
                <li>You can refuse delivery, and the package will be returned to us</li>
                <li>Alternatively, wait to receive the package and then follow our standard return process</li>
                <li>Refund will be processed once we receive the returned package</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">11. Partial Refunds</h2>
              <p className="text-gray-700 leading-relaxed">
                In some cases, we may offer a partial refund instead of a full refund:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Product returned more than 14 days after delivery (at our discretion)</li>
                <li>Product returned without original packaging (significant damage)</li>
                <li>Product shows signs of excessive use beyond reasonable testing</li>
                <li>Multiple return requests from the same customer (potential abuse of policy)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We will contact you before issuing a partial refund to discuss the situation and find a fair resolution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">12. Refund Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                You can track the status of your refund:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We will send email confirmations at each stage: return received, refund approved, refund processed</li>
                <li>You can contact us anytime for an update on your refund status</li>
                <li>Check your original payment method for the refund (may take 5-10 business days to appear)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">13. Refund Policy Abuse</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to refuse returns or refunds if we detect abuse of our policy, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Excessive returns (more than 3 returns in a 6-month period)</li>
                <li>Evidence of product tampering or contamination</li>
                <li>Fraudulent claims or chargebacks</li>
                <li>Reselling or commercial use of returned products</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We want to maintain our generous return policy for honest customers, which requires protecting it from abuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">14. Questions About Your Return?</h2>
              <p className="text-gray-700 leading-relaxed">
                Our customer support team is here to help with any questions or concerns about returns and refunds:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:support@nora-brain.com" className="text-accent hover:text-accent-hover underline">support@nora-brain.com</a></p>
                <p className="text-gray-700 mb-2"><strong>Contact Form:</strong> <a href="/contact" className="text-accent hover:text-accent-hover underline">www.nora-brain.com/contact</a></p>
                <p className="text-gray-700"><strong>Response Time:</strong> Within 24 hours (usually faster)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">15. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Refund Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. 
                Material changes will be communicated via email to customers who have made purchases.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The policy in effect at the time of your purchase will apply to your order.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-accent/5 border-l-4 border-accent rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-2">Our Commitment to You</h3>
            <p className="text-sm text-gray-700">
              We stand behind NORA Bromantane Spray 100%. If you're not satisfied, we make it easy to get your money back. 
              Your satisfaction and trust are more important to us than any single sale. We're confident in our product's quality and effectiveness, 
              and we want you to feel confident in your purchase too.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
