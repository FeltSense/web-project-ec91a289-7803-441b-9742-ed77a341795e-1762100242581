export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Discover the SoulCanvas Experience
      </h2>
      <p className="text-lg text-slate-600">
        A premium platform dedicated to celebrating Bleach fan artistry through curated galleries, community engagement, and artist recognition.
      </p>
    </div>

    {/* Split Panels Layout */}
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Panel - Featured Services */}
      <div className="space-y-8">
        {/* Service 1 */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Curated Gallery Collection
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Explore a professionally curated selection of stunning Bleach fan artwork, featuring the finest pieces from talented artists worldwide. Each piece is carefully selected for quality and creativity.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Monthly Artist Spotlights
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Celebrating exceptional talent through our monthly artist recognition program. Featured artists receive dedicated showcase space and community-wide visibility for their outstanding contributions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Featured Services */}
      <div className="space-y-8 lg:pt-12">
        {/* Service 3 */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Active Community Forums
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Engage with fellow Bleach enthusiasts in our vibrant discussion forums. Share insights, provide feedback, and connect with artists and fans in a respectful, moderated environment.
              </p>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Streamlined Submission Process
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Share your Bleach artwork effortlessly with our intuitive submission system. Simple upload process, clear guidelines, and prompt review ensure your work reaches the community quickly and professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center space-x-2 text-slate-600">
        <span className="text-sm font-medium">Join our growing community of artists and enthusiasts</span>
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </div>
  </div>
</section>
  );
}