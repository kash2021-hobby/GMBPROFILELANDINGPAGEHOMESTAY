import { useState } from 'react';
import {
  MapPin,
  Phone,
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  MessageCircle,
  BarChart3,
  Award,
  Search,
  Zap,
  Shield,
  Target,
  PlayCircle
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    email: '',
    businessName: '',
    location: ''
  });

  const scrollToForm = () => {
    document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToResults = () => {
    document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const message = `Hi! I'm interested in Google Business Profile optimization.

Name: ${formData.fullName}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
Business: ${formData.businessName}
Location: ${formData.location}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/916000683808?text=${encodedMessage}`, '_blank');

    alert('Thank you! You will be redirected to WhatsApp. Please send the pre-filled message to complete your request.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/ltabai logo.jpg" alt="LTAB Logo" className="h-12 w-12 mr-3 rounded-full" />
            <span className="text-2xl font-bold text-gray-900">LTAB</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToHome}
              className="text-gray-700 font-semibold hover:text-blue-600 transition-all"
            >
              Home
            </button>
            <button
              onClick={scrollToResults}
              className="text-gray-700 font-semibold hover:text-blue-600 transition-all"
            >
              Results
            </button>
            <button
              onClick={scrollToForm}
              className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-all"
            >
              Get Free Audit
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Why pay third-party platforms?<br />
              <span className="text-green-400">When you can get unlimited customers for FREE from Google.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
              We help local homestay businesses like yours get found by more customers on Google, drive more direct bookings every day, and never pay a single penny in commission again.
            </p>
          </div>

          {/* Feature Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="bg-white text-blue-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <Search className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg">More Customers Find You on Google</h3>
            </button>

            <button className="bg-white text-blue-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg">5x More Bookings</h3>
            </button>

            <button className="bg-white text-blue-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <Shield className="w-12 h-12 mx-auto mb-4 text-red-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg">Eliminate Third-Party Platforms</h3>
            </button>

            <button className="bg-white text-blue-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-500 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg">10x More Google Reviews</h3>
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Section - Third Party vs Google */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Stop Losing Money to Third-Party Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See why smart homestay owners are getting more customers from Google business Profile than third party platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Third Party Platforms (Problems) */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border-4 border-red-300 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                ❌ Third-Party Platforms
              </div>

              <div className="mt-8 space-y-6">
                {/* Problem 1 - Heavy Commission */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Heavy Commissions</h3>
                      <p className="text-gray-700">Pay <span className="font-bold text-red-600">15-25% commission</span> on every booking. If your room is ₹2,000, you lose ₹300-500 per booking!</p>
                    </div>
                  </div>
                </div>

                {/* Problem 2 - Higher Prices */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Lose Customers to High Prices</h3>
                      <p className="text-gray-700">You increase prices to cover commissions. Customers see <span className="font-bold text-red-600">inflated rates</span> and book elsewhere!</p>
                    </div>
                  </div>
                </div>

                {/* Problem 3 - Payment Delays */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Delayed Payments</h3>
                      <p className="text-gray-700">Wait <span className="font-bold text-red-600">7-30 days</span> to receive your money. Your cash flow suffers!</p>
                    </div>
                  </div>
                </div>

                {/* Problem 4 - No Direct Communication */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Limited Customer Contact</h3>
                      <p className="text-gray-700"><span className="font-bold text-red-600">Platform controls</span> all communication. Hard to build relationships and repeat customers!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Google Business Profile (Solutions) */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-4 border-green-300 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                ✅ Google Business Profile
              </div>

              <div className="mt-8 space-y-6">
                {/* Solution 1 - Zero Commission */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">ZERO Commission</h3>
                      <p className="text-gray-700"><span className="font-bold text-green-600">100% of your earnings</span> stay with you. No sharing profits with anyone!</p>
                    </div>
                  </div>
                </div>

                {/* Solution 2 - Best Prices */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Win More Customers</h3>
                      <p className="text-gray-700">Offer <span className="font-bold text-green-600">genuine competitive prices</span>. Customers get the best deal directly from you!</p>
                    </div>
                  </div>
                </div>

                {/* Solution 3 - Instant Payments */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Payments</h3>
                      <p className="text-gray-700">Receive money <span className="font-bold text-green-600">directly and immediately</span> from customers. Better cash flow!</p>
                    </div>
                  </div>
                </div>

                {/* Solution 4 - Direct Communication */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Customer Connection</h3>
                      <p className="text-gray-700"><span className="font-bold text-green-600">Talk directly via phone or WhatsApp.</span> Build loyalty and repeat bookings!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Summary Visual */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">The Smart Choice is Clear</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">0%</div>
                <div className="text-xl">Commission on Google</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
                <div className="text-xl">Your Profits Stay Yours</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">24/7</div>
                <div className="text-xl">Direct Customer Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Video Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            See How We Transform Local Homestays into Direct Booking Machines
          </h2>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-blue-800 aspect-video flex items-center justify-center cursor-pointer group hover:shadow-3xl transition-shadow">
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
            <PlayCircle className="w-24 h-24 text-white relative z-10 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get Your FREE Google Business Audit Now
          </h2>
          <button
            onClick={scrollToForm}
            className="bg-white text-green-600 px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start My Free Audit
          </button>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-bold mb-4">
              YOUR TRANSFORMATION JOURNEY
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Improve Your Business in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch your homestay transform from struggling to thriving in just 2-3 weeks
            </p>
          </div>

          {/* Desktop Timeline Connection */}
          <div className="hidden md:block absolute top-64 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-blue-400 to-green-400 mx-auto" style={{ width: '80%', left: '10%' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative items-start">
            {/* Before - Step 1 */}
            <div className="group relative h-full">
              <div className="bg-gradient-to-br from-red-50 via-red-50 to-red-100 rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-red-200 hover:border-red-300 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Step Badge */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-red-500 to-red-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                      BEFORE
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-10 mb-4 flex justify-center">
                  <div className="bg-red-200 p-4 rounded-2xl group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-12 h-12 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-red-900 mb-4">Before Using Our Services</h3>

                <div className="bg-white/80 backdrop-blur rounded-2xl p-4 space-y-3 flex-grow">
                  <div className="flex items-start bg-red-50 p-3 rounded-xl">
                    <div className="bg-red-200 p-2 rounded-lg mr-2 flex-shrink-0">
                      <Phone className="w-4 h-4 text-red-700" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 text-sm">Only 1–2 calls per day</p>
                      <p className="text-xs text-gray-600">Phone barely rings</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-red-50 p-3 rounded-xl">
                    <div className="bg-red-200 p-2 rounded-lg mr-2 flex-shrink-0">
                      <Star className="w-4 h-4 text-red-700" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 text-sm">Just 5–8 Google reviews</p>
                      <p className="text-xs text-gray-600">Low credibility</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-red-50 p-3 rounded-xl">
                    <div className="bg-red-200 p-2 rounded-lg mr-2 flex-shrink-0">
                      <MapPin className="w-4 h-4 text-red-700" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 text-sm">Hidden on Google Maps</p>
                      <p className="text-xs text-gray-600">Customers can't find you</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-red-50 p-3 rounded-xl">
                    <div className="text-2xl mr-2">😰</div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 text-sm">Worried about future</p>
                      <p className="text-xs text-gray-600">Business uncertainty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* During - Step 2 */}
            <div className="group relative h-full">
              <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-blue-300 hover:border-blue-400 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Step Badge */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl border-4 border-white group-hover:scale-110 transition-transform duration-300 animate-pulse">
                      2
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                      DURING
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-10 mb-4 flex justify-center">
                  <div className="bg-blue-200 p-4 rounded-2xl group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Smart Work</h3>

                <div className="bg-white/80 backdrop-blur rounded-2xl p-4 space-y-2 flex-grow">
                  <div className="flex items-center bg-blue-50 p-2 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 text-left text-sm">Profile Optimization</span>
                  </div>

                  <div className="flex items-center bg-blue-50 p-2 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 text-left text-sm">Photos & Details</span>
                  </div>

                  <div className="flex items-center bg-blue-50 p-2 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 text-left text-sm">Review Collection</span>
                  </div>

                  <div className="flex items-center bg-blue-50 p-2 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 text-left text-sm">SEO Ranking Boost</span>
                  </div>

                  <div className="flex items-center bg-blue-50 p-2 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 text-left text-sm">Performance Tracking</span>
                  </div>

                  <div className="mt-4 pt-4 border-t-2 border-blue-300">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center shadow-lg">
                      <Zap className="w-5 h-5 mr-2 animate-pulse" />
                      Just 2–3 weeks!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After - Step 3 */}
            <div className="group relative h-full">
              <div className="bg-gradient-to-br from-green-50 via-green-50 to-green-100 rounded-3xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-green-300 hover:border-green-400 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Step Badge */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-green-500 to-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                      AFTER
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-10 mb-4 flex justify-center">
                  <div className="bg-green-200 p-4 rounded-2xl group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-12 h-12 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-green-900 mb-4">After Using Our Services</h3>

                <div className="bg-white/80 backdrop-blur rounded-2xl p-4 space-y-3 flex-grow">
                  <div className="flex items-start bg-green-50 p-3 rounded-xl border-2 border-green-300">
                    <div className="bg-green-200 p-2 rounded-lg mr-2 flex-shrink-0">
                      <Phone className="w-4 h-4 text-green-700" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 text-sm">15–20 calls daily</p>
                      <p className="text-xs font-bold text-green-600">+900% INCREASE!</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-3 rounded-xl border-2 border-green-300">
                    <div className="bg-green-200 p-2 rounded-lg mr-2 flex-shrink-0">
                      <Star className="w-4 h-4 text-green-700 fill-green-700" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 text-sm">100+ Google reviews</p>
                      <p className="text-xs font-bold text-green-600">+1200% GROWTH!</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-3 rounded-xl border-2 border-green-300">
                    <div className="bg-green-200 p-2 rounded-lg mr-2 flex-shrink-0">
                      <MapPin className="w-4 h-4 text-green-700" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 text-sm">#1 on Google Maps</p>
                      <p className="text-xs font-bold text-green-600">TOP POSITION!</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-green-50 p-3 rounded-xl border-2 border-green-300">
                    <div className="text-2xl mr-2">🎉</div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 text-sm">Business is booming!</p>
                      <p className="text-xs font-bold text-green-600">UNSTOPPABLE!</p>
                    </div>
                  </div>
                </div>

                {/* Success Badge */}
                <div className="mt-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded-xl font-bold text-sm shadow-lg">
                  ✨ Your Success Story Awaits!
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl animate-pulse">
              🚀 Your transformation starts in just 2-3 weeks!
            </div>
          </div>
        </div>
      </section>

      {/* Transformation CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            This Could Be YOUR Story!
          </h2>
          <button
            onClick={scrollToForm}
            className="bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start My Transformation Now
          </button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            What We Actually Do For You To Get More Google Reviews & Calls
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analyse Your Google Business Page</h3>
                <p className="text-gray-600">We audit your current profile and identify optimization opportunities.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Track Your Progress Daily</h3>
                <p className="text-gray-600">Real-time monitoring of your rankings, reviews, and customer engagement.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get Smart Tips Daily</h3>
                <p className="text-gray-600">Expert recommendations to continuously improve your online presence.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get More 5-Star Reviews</h3>
                <p className="text-gray-600">Proven strategies to collect authentic reviews from happy customers.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Show Up Top on Google Maps</h3>
                <p className="text-gray-600">Local SEO optimization to rank #1 in your area for relevant searches.</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">We Do Everything For You</h3>
                <p className="text-gray-600">Hands-off solution - you focus on guests while we handle Google.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Why 1000+ Businesses Choose LTAB
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Increase Local Visibility</h3>
              <p className="text-gray-700">Dominate local search results and be found by customers actively looking for homestays.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Improve Customer Engagement</h3>
              <p className="text-gray-700">Connect directly with potential guests through optimized profiles and instant responses.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-yellow-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Boost Online Reviews</h3>
              <p className="text-gray-700">Build trust with 100+ authentic 5-star reviews that attract more bookings.</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Drive More Business Growth</h3>
              <p className="text-gray-700">Increase revenue with 5x more direct bookings - no commissions, just profit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section id="results-section" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Proven Results From Real Homestays
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Client Success Story #{item}</p>
                    <p className="text-sm text-gray-500 mt-2">Screenshot Coming Soon</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="ml-2 font-bold text-gray-900">100+ Reviews</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span className="ml-2 font-bold text-gray-900">20+ Calls/Day</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Ranking #1 on Google Maps</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section id="audit-form" className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Claim Your Free Google Business Audit Today
            </h2>
            <p className="text-xl text-blue-100">
              We'll optimize your Google Profile and show you how to beat third-party platforms.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-900 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-gray-900 font-semibold mb-2">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-gray-900 font-semibold mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                  placeholder="Your Homestay Name"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-gray-900 font-semibold mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                  placeholder="City, State"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Get My Free Audit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/ltabai logo.jpg" alt="LTAB Logo" className="h-16 w-16 mr-3 rounded-full" />
                <h3 className="text-2xl font-bold text-green-400">LTAB</h3>
              </div>
              <p className="text-gray-400">Local Travel Accommodation Boosters</p>
              <p className="text-gray-400 mt-2">Helping homestays get direct bookings through Google.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#audit-form" className="hover:text-green-400 transition-colors">Free Audit</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Success Stories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <MessageCircle className="w-5 h-5 mr-3 text-green-400" />
                  <a href="https://wa.me/916000683808" className="hover:text-green-400 transition-colors">WhatsApp: 6000683808</a>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3 text-green-400" />
                  <a href="mailto:Contactus@blueantdigitech.com" className="hover:text-green-400 transition-colors">Email: Contactus@blueantdigitech.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p className="mb-2">© 2025 LTAB - Local Travel Accommodation Boosters. All rights reserved.</p>
            <p className="text-xs">
              Disclaimer: We are not affiliated with Google. We help businesses optimize their profiles for better visibility.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      <button
        onClick={scrollToForm}
        className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-green-700 hover:scale-110 transition-all duration-300 font-bold z-50 flex items-center"
      >
        <Zap className="w-5 h-5 mr-2" />
        Free Audit
      </button>
    </div>
  );
}

export default App;