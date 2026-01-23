import React from 'react';
import { Link } from 'react-router-dom';
import { CpuArchitecture } from '../components/ui/CpuArchitecture';

const Home = () => {
  const features = [
    {
      category: 'Developer Tools',
      icon: '⚡',
      items: ['Auto Clear Cache', 'Cookie Editor', 'SEO Checker', 'Font Finder', 'Color Picker', 'GitHub AI Agent']
    },
    {
      category: 'Learning Tools',
      icon: '📚',
      items: ['Ad Blocker', 'Speed Improver', 'Learning AI Agent']
    },
    {
      category: 'Productivity Tools',
      icon: '🎯',
      items: ['YouTube Focus Mode', 'Focus Detection', 'Nuclear Mode']
    },
    {
      category: 'Tab Manager',
      icon: '📑',
      items: ['Save Tab Groups', 'Restore Sessions']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Animated Stars Background */}
        <div className="absolute inset-0">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - CPU Animation */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-4xl">
                <CpuArchitecture 
                  width="100%" 
                  height="800px"
                  text="ExPro"
                  className="text-gray-500"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-gray-700 rounded-full mb-10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-400"></span>
                </span>
                <span className="text-sm font-mono text-gray-500 uppercase tracking-[0.2em] font-medium">Chrome Extension</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] font-mono tracking-tight">
                <span className="block text-white">DEVELOPER &</span>
                <span className="block text-white">
                  PRODUCTIVITY
                </span>
                <span className="block text-white">TOOLKIT</span>
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl font-mono leading-relaxed tracking-wide">
                Powerful tools for developers who refuse to compromise on privacy. Build faster. Focus harder. Own your data.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold font-mono text-black bg-gray-300 hover:bg-white rounded-md shadow-lg shadow-gray-500/20 hover:shadow-gray-400/30 transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-[0.15em]"
                >
                  ADD TO CHROME
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold font-mono text-gray-300 bg-transparent border-2 border-gray-700 hover:border-gray-600 hover:text-white rounded-md hover:bg-gray-900/30 transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-[0.15em]"
                >
                  VIEW FEATURES
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black font-mono text-white mb-2 tracking-tight">20+</div>
                  <div className="text-xs font-mono text-gray-600 uppercase tracking-[0.2em]">Features</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black font-mono text-white mb-2 tracking-tight">100%</div>
                  <div className="text-xs font-mono text-gray-600 uppercase tracking-[0.2em]">Private</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black font-mono text-white mb-2 tracking-tight">0</div>
                  <div className="text-xs font-mono text-gray-600 uppercase tracking-[0.2em]">Tracking</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black font-mono text-white mb-2 tracking-tight">FREE</div>
                  <div className="text-xs font-mono text-gray-600 uppercase tracking-[0.2em]">Forever</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Placeholder */}
      <section className="container-custom pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🖼️</div>
              <p className="text-gray-500 font-medium">Extension Screenshot / Demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="bg-black py-20 md:py-32">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-mono text-white mb-4">Everything You Need</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-mono">
              Four powerful categories of tools designed to enhance your browsing experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold font-mono text-white mb-6">{feature.category}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start font-mono">
                      <span className="text-gray-500 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/features" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold font-mono text-black bg-gray-300 hover:bg-white rounded-md shadow-lg shadow-gray-500/20 hover:shadow-gray-400/30 transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-[0.15em]"
            >
              View All Features
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container-custom py-20">
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Built with Privacy in Mind</h2>
            <p className="text-lg text-gray-700 mb-8">
              ExPro stores all data locally on your device. We don't collect, track, or sell your information. Your API keys and preferences stay with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/privacy" className="btn-secondary">
                Read Privacy Policy
              </Link>
              <Link to="/security" className="btn-secondary">
                Security & Permissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom py-20">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to boost your productivity?</h2>
          <p className="text-xl mb-8 opacity-90">
            Install ExPro today and experience a better way to browse
          </p>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-colors duration-200"
          >
            Install from Chrome Web Store
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
