import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - TechVibe',
  description: 'Read our terms of service and conditions',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Terms of Service</span>
        </nav>

        <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 md:p-12 shadow-sm">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-12">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using TechVibe, you accept and agree to be bound by these terms.
                If you do not agree, you are not authorized to access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to access our materials for personal, non-commercial use only.
                Under this license you may not:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Modify or copy the materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Use materials for commercial purposes or public display</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Reverse engineer any software</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Remove copyright or proprietary notations</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Products and Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All products and services are subject to availability. We reserve the right to discontinue any product at any time.
                Prices are subject to change without notice.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to limit quantities of any products or services. All product descriptions and pricing are subject to change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Account Registration</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When creating an account, you must provide accurate, complete, and current information.
                Failure to do so may result in immediate account termination.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You are responsible for safeguarding your password and for all activities under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Payment is due at time of purchase. We accept various payment methods including credit cards, debit cards, and cash on delivery.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All payments are processed securely. We do not store your full credit card information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Shipping and Delivery</h2>
              <p className="text-gray-600 leading-relaxed">
                We process and ship orders promptly. Delivery times vary by location and shipping method.
                See our{' '}
                <Link href="/shipping" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                  Shipping & Returns
                </Link>{' '}
                page for details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Returns and Refunds</h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a 30-day return policy on most items. Products must be returned in original condition.
                Visit our{' '}
                <Link href="/shipping" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                  Shipping & Returns
                </Link>{' '}
                page for complete details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                TechVibe and its suppliers shall not be liable for damages arising from use or inability to use our services,
                even if notified of such possibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                TechVibe may revise these terms at any time. By using our services, you agree to be bound by the current version of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                Questions about these terms? Contact us through our{' '}
                <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                  Contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
