export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Trusted by Creative Professionals
      </h2>
      <p className="text-lg text-slate-600">
        See what our clients say about their SoulCanvas experience
      </p>
    </div>

    <div className="relative">
      {/* Testimonial Card */}
      <div className="bg-slate-50 rounded-lg p-12 shadow-sm border border-slate-200">
        <div className="flex items-start mb-6">
          <svg className="w-10 h-10 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        
        <blockquote className="mb-8">
          <p className="text-xl text-slate-700 leading-relaxed">
            SoulCanvas transformed how I manage my creative projects. The intuitive interface and powerful features helped me streamline my workflow and deliver exceptional results to my clients. It's become an indispensable tool in my daily work.
          </p>
        </blockquote>

        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-lg mr-4">
            SM
          </div>
          <div>
            <div className="font-semibold text-slate-900">Sarah Mitchell</div>
            <div className="text-slate-600">Creative Director, Lumina Studios</div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button 
          className="w-12 h-12 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          <button className="w-2.5 h-2.5 rounded-full bg-blue-600" aria-label="Testimonial 1"></button>
          <button className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400" aria-label="Testimonial 2"></button>
          <button className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400" aria-label="Testimonial 3"></button>
          <button className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400" aria-label="Testimonial 4"></button>
        </div>

        <button 
          className="w-12 h-12 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hidden testimonials for carousel rotation */}
      <div className="hidden">
        <div className="testimonial-item">
          <p className="text-xl text-slate-700 leading-relaxed">
            The level of customization and control SoulCanvas offers is remarkable. I've been able to create exactly what I envisioned without any technical limitations. The support team is also incredibly responsive and helpful.
          </p>
          <div className="font-semibold text-slate-900">Marcus Chen</div>
          <div className="text-slate-600">Founder, Apex Design Co.</div>
        </div>

        <div className="testimonial-item">
          <p className="text-xl text-slate-700 leading-relaxed">
            After trying multiple platforms, SoulCanvas stands out for its reliability and performance. Our team collaboration has improved significantly, and we've cut our project turnaround time by 40%. Highly recommend for any creative team.
          </p>
          <div className="font-semibold text-slate-900">Jennifer Rodriguez</div>
          <div className="text-slate-600">Head of Operations, Catalyst Agency</div>
        </div>

        <div className="testimonial-item">
          <p className="text-xl text-slate-700 leading-relaxed">
            SoulCanvas has been a game-changer for my freelance business. The professional templates and seamless client presentation features have helped me win more projects and maintain long-term relationships with my clients.
          </p>
          <div className="font-semibold text-slate-900">David Thompson</div>
          <div className="text-slate-600">Independent Creative Consultant</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}