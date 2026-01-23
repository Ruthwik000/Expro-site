import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-mono text-white mb-6 uppercase tracking-tight">
              About ExPro
            </h1>
            <p className="text-xl text-gray-500 font-mono">
              A privacy-first toolkit built for developers, learners, and productivity enthusiasts
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom pb-20">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Mission */}
          <section ref={el => sectionsRef.current[0] = el} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-700">
            <h2 className="text-4xl font-black font-mono text-white mb-6 uppercase tracking-tight">Our Mission</h2>
            <p className="text-lg text-gray-400 font-mono mb-4 leading-relaxed">
              ExPro was created to solve a simple problem: developers and learners need powerful tools without sacrificing privacy. We believe productivity tools should enhance your workflow, not track your every move.
            </p>
            <p className="text-lg text-gray-400 font-mono leading-relaxed">
              Our mission is to provide a comprehensive toolkit that respects your privacy, stores data locally, and gives you complete control over your browsing experience.
            </p>
          </section>

          {/* Why ExPro */}
          <section ref={el => sectionsRef.current[1] = el}>
            <h2 className="text-4xl font-black font-mono text-white mb-8 text-center uppercase tracking-tight">Why We Built ExPro</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h3 className="text-xl font-bold font-mono text-white mb-3 uppercase tracking-tight group-hover:text-blue-400 transition-colors duration-300">Privacy First</h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  Your data belongs to you. We don't collect, track, or sell your information. Everything stays on your device.
                </p>
              </div>
              <div className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h3 className="text-xl font-bold font-mono text-white mb-3 uppercase tracking-tight group-hover:text-blue-400 transition-colors duration-300">Developer Focused</h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  Built by developers, for developers. Tools that actually solve real problems in your daily workflow.
                </p>
              </div>
              <div className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-bold font-mono text-white mb-3 uppercase tracking-tight group-hover:text-blue-400 transition-colors duration-300">Productivity Driven</h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  Features designed to eliminate distractions and help you focus on what matters most.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section ref={el => sectionsRef.current[2] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 md:p-12">
            <h2 className="text-4xl font-black font-mono text-white mb-8 text-center uppercase tracking-tight">Our Core Values</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold font-mono text-white mb-2 uppercase tracking-tight">Transparency</h3>
                <p className="text-gray-400 font-mono leading-relaxed">
                  We're open about what data we collect (minimal), how we use it (for features only), and where it's stored (locally on your device).
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold font-mono text-white mb-2 uppercase tracking-tight">User Control</h3>
                <p className="text-gray-400 font-mono leading-relaxed">
                  You decide which features to use, when to use them, and can delete all data at any time. No lock-in, no hidden settings.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold font-mono text-white mb-2 uppercase tracking-tight">No Dark Patterns</h3>
                <p className="text-gray-400 font-mono leading-relaxed">
                  We don't use manipulative design, hidden fees, or deceptive practices. What you see is what you get.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold font-mono text-white mb-2 uppercase tracking-tight">Continuous Improvement</h3>
                <p className="text-gray-400 font-mono leading-relaxed">
                  We listen to user feedback and continuously improve ExPro based on real needs and use cases.
                </p>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section ref={el => sectionsRef.current[3] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 md:p-12">
            <h2 className="text-4xl font-black font-mono text-white mb-8 text-center uppercase tracking-tight">Built With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-mono text-blue-400 mb-4 uppercase tracking-tight">Core Technologies</h3>
                <ul className="space-y-3">
                  <li className="text-gray-400 font-mono flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Chrome Extension APIs</span>
                  </li>
                  <li className="text-gray-400 font-mono flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>JavaScript / React</span>
                  </li>
                  <li className="text-gray-400 font-mono flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Local Storage APIs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold font-mono text-blue-400 mb-4 uppercase tracking-tight">AI Integration</h3>
                <ul className="space-y-3">
                  <li className="text-gray-400 font-mono flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Groq API (AI features)</span>
                  </li>
                  <li className="text-gray-400 font-mono flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Roboflow API (Focus Detection)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section ref={el => sectionsRef.current[4] = el} className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 md:p-16 text-center border border-gray-700 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gray-600 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gray-600 rounded-br-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black font-mono text-white mb-4 uppercase tracking-tight">
                Join the ExPro Community
              </h2>
              <p className="text-xl text-gray-400 mb-8 font-mono">
                Experience a better way to browse with privacy-first productivity tools
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-10 py-5 text-base font-bold font-mono text-black bg-gray-300 hover:bg-white rounded-md shadow-lg shadow-gray-500/20 hover:shadow-gray-400/30 transform hover:-translate-y-1 transition-all duration-200 uppercase tracking-[0.15em]"
                >
                  Install Extension
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-10 py-5 text-base font-bold font-mono text-white bg-transparent border-2 border-gray-600 hover:border-white rounded-md transform hover:-translate-y-1 transition-all duration-200 uppercase tracking-[0.15em]"
                >
                  Get in Touch
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
