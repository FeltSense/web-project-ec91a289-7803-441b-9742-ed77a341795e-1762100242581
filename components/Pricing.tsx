export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Join the SoulCanvas Community
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        One simple price. Lifetime access to the premier Bleach fan art community.
      </p>
    </div>
    
    <div className="max-w-md mx-auto">
      <div className="bg-white border-2 border-blue-600 rounded-xl shadow-lg p-10 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
            LIFETIME ACCESS
          </span>
        </div>
        
        <div className="text-center mb-8 mt-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">SoulCanvas Membership</h3>
          <div className="mb-2">
            <span className="text-5xl font-bold text-slate-900">$29</span>
          </div>
          <p className="text-gray-600 font-medium">One-time payment • No recurring fees</p>
        </div>
        
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">
            Everything Included:
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Access to curated gallery of stunning Bleach fan artwork</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Monthly artist spotlights and recognition features</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Active community discussions and forums access</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Easy artwork submission process for your creations</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Inclusive and welcoming community environment</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Regular updates and exclusive community events</span>
            </li>
          </ul>
        </div>
        
        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
          className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Get Lifetime Access - $29
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-6">
          Secure payment powered by Stripe • Instant access
        </p>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          Join hundreds of Bleach fans celebrating incredible artwork
        </p>
      </div>
    </div>
  </div>
</section>
  );
}