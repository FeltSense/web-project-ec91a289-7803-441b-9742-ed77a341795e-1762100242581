export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
  {/* Diagonal Split Container */}
  <div className="relative h-screen">
    {/* Left Side - Image */}
    <div className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-slate-900" style={{ clipPath: 'polygon(0 0, 60% 0, 50% 100%, 0 100%)' }}>
        <img 
          src="https://picsum.photos/1600/1200?grayscale" 
          alt="Curated Bleach fan artwork gallery" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-slate-800/40"></div>
      </div>
    </div>

    {/* Right Side - Content */}
    <div className="relative h-full flex items-center justify-end">
      <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 py-16">
        <div className="max-w-xl ml-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
            <span className="text-sm font-medium text-slate-700">Bleach Fan Art Community</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Where Bleach Artists Showcase Their Soul
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Discover a curated gallery of stunning Bleach fan artwork. Join monthly artist spotlights, engage in active community discussions, and connect with fellow creators in our dedicated forums.
          </p>

          {/* Key Features */}
          <div className="space-y-4 mb-10">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="ml-3 text-slate-700">Curated gallery of stunning Bleach fan artwork</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="ml-3 text-slate-700">Monthly artist spotlights and recognition</p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="ml-3 text-slate-700">Active community discussions and forums</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
              Explore Gallery
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-200 hover:border-slate-300 transition-colors">
              Join Community
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-200">
            <div>
              <div className="text-2xl font-bold text-slate-900">2,500+</div>
              <div className="text-sm text-slate-600">Artworks</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">850+</div>
              <div className="text-sm text-slate-600">Artists</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">12K+</div>
              <div className="text-sm text-slate-600">Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}