import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CpuArchitecture } from '../components/ui/CpuArchitecture';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const featuresRef = useRef(null);
  const trustRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Feature cards animation
    const featureCards = featuresRef.current?.querySelectorAll('.feature-card');
    if (featureCards) {
      gsap.fromTo(
        featureCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Trust section animation
    if (trustRef.current) {
      gsap.fromTo(
        trustRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: trustRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // CTA section animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  const features = [
    {
      category: 'DEVELOPER TOOLS',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      items: ['Auto Clear Cache', 'Cookie Editor', 'SEO Checker', 'Font Finder', 'Color Picker', 'GitHub AI Agent']
    },
    {
      category: 'LEARNING TOOLS',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      items: ['Ad Blocker', 'Speed Improver', 'Learning AI Agent']
    },
    {
      category: 'PRODUCTIVITY TOOLS',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      items: ['YouTube Focus Mode', 'Focus Detection', 'Nuclear Mode']
    },
    {
      category: 'TAB MANAGER',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
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

      {/* Features Overview */}
      <section ref={featuresRef} className="bg-black py-20 md:py-32 relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-mono text-white mb-4 uppercase tracking-tight">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-mono">
              Four powerful categories of tools designed to enhance your browsing experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card group relative bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
              >
                {/* Blue glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-500"></div>
                
                {/* Icon container */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all duration-500 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-black font-mono text-white mb-4 md:mb-6 uppercase tracking-wider group-hover:text-blue-400 transition-colors duration-300">
                    {feature.category}
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-gray-500 font-mono group-hover:text-gray-400 transition-colors duration-300 flex items-center">
                        <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-blue-500 mr-3 transition-colors duration-300"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/0 to-transparent group-hover:from-blue-500/10 transition-all duration-500 rounded-br-2xl"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link 
              to="/features" 
              className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold font-mono text-white bg-transparent border-2 border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 rounded-md transition-all duration-300 uppercase tracking-[0.15em]"
            >
              View All Features
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section ref={trustRef} className="bg-gradient-to-b from-black to-gray-900 py-20 md:py-32">
        <div className="container-custom">
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-12 md:p-16 overflow-hidden">
            {/* Animated lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-700 mb-8">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black font-mono text-white mb-6 uppercase tracking-tight">
                Built with Privacy in Mind
              </h2>
              <p className="text-lg text-gray-400 mb-8 font-mono leading-relaxed">
                ExPro stores all data locally on your device. We don't collect, track, or sell your information. Your API keys and preferences stay with you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/privacy" 
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold font-mono text-gray-300 bg-transparent border-2 border-gray-700 hover:border-gray-600 hover:text-white rounded-md hover:bg-gray-900/30 transition-all duration-200 uppercase tracking-wider"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/security" 
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold font-mono text-gray-300 bg-transparent border-2 border-gray-700 hover:border-gray-600 hover:text-white rounded-md hover:bg-gray-900/30 transition-all duration-200 uppercase tracking-wider"
                >
                  Security & Permissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="bg-gray-900 py-20 md:py-32">
        <div className="container-custom">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 md:p-16 text-center border border-gray-700 overflow-hidden">
            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gray-600 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gray-600 rounded-br-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black font-mono text-white mb-4 uppercase tracking-tight">
                Ready to boost your productivity?
              </h2>
              <p className="text-xl text-gray-400 mb-8 font-mono">
                Install ExPro today and experience a better way to browse
              </p>
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 text-base font-bold font-mono text-black bg-gray-300 hover:bg-white rounded-md shadow-lg shadow-gray-500/20 hover:shadow-gray-400/30 transform hover:-translate-y-1 transition-all duration-200 uppercase tracking-[0.15em]"
              >
                Install from Chrome Web Store
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
