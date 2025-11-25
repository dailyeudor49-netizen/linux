import Link from 'next/link';

export const metadata = {
  title: 'Shipping & Returns - TechVibe',
  description: 'Learn about our European shipping and return policy',
};

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Shipping & Returns</span>
        </nav>

        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Delivery Info</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2 mb-6">
            Shipping & Returns
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fast delivery across Europe with hassle-free returns
          </p>
        </div>

        <div className="space-y-12">
          {/* Shipping Section */}
          <section className="bg-white rounded-3xl border-2 border-gray-100 p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Shipping Information</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">European Wide Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  We ship to all European Union countries and selected European nations.
                  Our reliable courier service ensures your products arrive safely and quickly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Fast Express Delivery</h4>
                    <p className="text-lg text-gray-700">Approximately 24-48 hours</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  We use express courier service to deliver to all European countries
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Options</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: 'Cash on Delivery', desc: 'Pay when you receive (COD fees may apply)', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
                    { title: 'Bank Transfer', desc: 'Get payment instructions via email', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
                    { title: 'Online Payment', desc: 'Secure payment gateway', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                  ].map((option, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={option.icon} />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{option.title}</h4>
                      <p className="text-sm text-gray-600">{option.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Processing Time</h3>
                <p className="text-gray-600 leading-relaxed">
                  Orders are typically processed within 1-2 business days. During peak periods, processing may take up to 3 business days.
                  You'll receive a confirmation email with tracking information once your order ships.
                </p>
              </div>
            </div>
          </section>

          {/* Returns Section */}
          <section className="bg-white rounded-3xl border-2 border-gray-100 p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Return Policy</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">30-Day Return Period</h3>
                <p className="text-gray-600 leading-relaxed">
                  We offer a 30-day return policy from delivery date. If you're not satisfied, return it for a full refund or exchange.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Return Requirements</h3>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <ul className="space-y-3">
                    {[
                      'Items must be unused and in original condition',
                      'Original packaging with all accessories and documentation',
                      'All tags and labels must be attached',
                      'Proof of purchase required',
                    ].map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Return</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Contact Us', desc: 'Email us with your order number and reason for return' },
                    { step: '2', title: 'Get Authorization', desc: 'Receive return instructions and authorization number' },
                    { step: '3', title: 'Pack Item', desc: 'Carefully pack in original packaging with all accessories' },
                    { step: '4', title: 'Ship Return', desc: 'Send using tracked shipping to provided address' },
                    { step: '5', title: 'Get Refund', desc: 'Receive refund within 7-10 business days after inspection' },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Free Return Shipping</h3>
                <p className="text-gray-700">
                  We provide prepaid return labels for defective items, wrong items, or items not matching the description.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-3xl border-2 border-gray-100 p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                { q: 'When will my refund be processed?', a: 'Refunds are processed within 7-10 business days after we receive and inspect your return.' },
                { q: 'Can I return after 30 days?', a: 'Returns after 30 days are evaluated case-by-case. Please contact us to discuss your situation.' },
                { q: 'Is COD available in my country?', a: 'Cash on Delivery is available in most European countries. Available payment methods are shown during checkout.' },
                { q: 'Do you ship outside Europe?', a: 'Currently we only ship to European countries. We\'re working to expand our reach in the future.' },
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our customer support team is here to help
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
