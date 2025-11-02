export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
  {/* Gradient Wave Background */}
  <div className="absolute inset-0 opacity-30">
    <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="url(#wave-gradient)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
    </svg>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 py-16">
    {/* Main Footer Content */}
    <div className="grid md:grid-cols-5 gap-12 mb-12">
      {/* Brand Column */}
      <div className="md:col-span-2">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">SoulCanvas</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">Transforming creative visions into reality with professional design solutions that inspire and engage.</p>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors">
            <span className="text-gray-300 hover:text-white text-sm">in</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors">
            <span className="text-gray-300 hover:text-white text-sm">tw</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors">
            <span className="text-gray-300 hover:text-white text-sm">fb</span>
          </a>
        </div>
      </div>

      {/* Services Column */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Brand Design</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Digital Strategy</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Consulting</a></li>
        </ul>
      </div>

      {/* Company Column */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Resources Column */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
    </div>

    {/* Wave Divider */}
    <div className="relative h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-8"></div>

    {/* Bottom Bar */}
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p className="text-gray-400 text-sm">&copy; 2025 SoulCanvas. All rights reserved.</p>
      <div className="flex space-x-6 text-sm">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
      </div>
    </div>
  </div>
</footer>
  );
}