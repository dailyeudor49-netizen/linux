import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-emerald-200">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-700">Premium Electronics • Fast Delivery</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Smart Living
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Discover premium home electronics with fast European delivery and flexible payment options
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transform hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Started
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/shipping"
                  className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-emerald-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Modern smart home interior"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Fast Delivery', value: '24-48h' },
              { label: 'Return Period', value: '30 Days' },
              { label: 'Warranty', value: '2 Years' },
              { label: 'Payment', value: 'COD' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 transition-colors text-center shadow-sm">
                <div className="text-3xl font-bold text-emerald-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium electronics for modern living
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Climate Control',
                desc: 'Air conditioners & portable units',
                image: 'https://images.unsplash.com/photo-1631545806609-7c0f4a5b2b63?w=400&q=80'
              },
              {
                name: 'Heating Solutions',
                desc: 'Heaters & ventilation fans',
                image: 'https://images.unsplash.com/photo-1545259742-24f940e60811?w=400&q=80'
              },
              {
                name: 'Kitchen Essentials',
                desc: 'Blenders, mixers & appliances',
                image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80'
              },
              {
                name: 'Smart Devices',
                desc: 'Vacuums, humidifiers & more',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'
              },
            ].map((category, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-white border-2 border-gray-100 hover:border-emerald-200 transition-all hover:shadow-xl h-80">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Happy family in modern home"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Why TechVibe</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Your Trusted Partner for Home Electronics
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We curate premium products that blend innovation, reliability, and value.
                With rapid EU-wide delivery and convenient cash-on-delivery options, upgrading your home has never been easier.
              </p>
              <div className="space-y-6">
                {[
                  { num: '15k+', label: 'Happy Customers' },
                  { num: '28', label: 'EU Countries' },
                  { num: '99%', label: 'Satisfaction Rate' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-emerald-600">{stat.num}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{stat.label}</div>
                      <div className="text-sm text-gray-500">And growing every day</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features with Images */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Our Promise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Why Customers Love Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lightning Fast Delivery',
                desc: '24-48h delivery across Europe with real-time tracking',
                image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80'
              },
              {
                title: 'Premium Quality',
                desc: '2-year warranty on all products with dedicated support',
                image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&q=80'
              },
              {
                title: 'Flexible Payment',
                desc: 'Cash on delivery available in most EU countries',
                image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&q=80'
              },
            ].map((feature, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials with Photos */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Best purchase I've made this year! The air conditioner arrived in perfect condition and works flawlessly.",
                author: "Maria S.",
                location: "Milan, Italy",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
              },
              {
                quote: "Fast delivery, great prices, and excellent customer service. Highly recommend TechVibe!",
                author: "John D.",
                location: "Berlin, Germany",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex gap-1 text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl h-[400px] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80"
              alt="Modern home interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 to-teal-600/95"></div>

            <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Upgrade Your Home?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl">
                Get in touch with our team for personalized product recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                >
                  Contact Us
                </Link>
                <Link
                  href="/shipping"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold border-2 border-white/30 rounded-xl hover:bg-white/20 transition-all"
                >
                  Shipping Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
