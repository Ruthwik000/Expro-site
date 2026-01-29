import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-500 font-mono">Last Updated: January 23, 2025</p>
          </div>
        </div>
      </section>

      <div className="container-custom pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <section ref={el => sectionsRef.current[0] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">Introduction</h2>
            <p className="text-gray-400 font-mono leading-relaxed mb-4">
              This Privacy Policy explains how we collect, use, and protect information when you use our Chrome extension ("the Extension").
            </p>
            <p className="text-gray-400 font-mono leading-relaxed">
              By using the Extension, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section ref={el => sectionsRef.current[1] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-6 uppercase tracking-tight">1. Information We Collect</h2>
            
            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3">1.1 User-Provided API Keys</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>The Extension allows users to provide their own API keys (e.g., for Large Language Models)</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>API keys are used only to process user requests and generate responses</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">We do not store, sell, share, log, or use API keys for our own benefit</strong></span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>API keys remain under the user's control</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3 mt-6">1.2 User Queries and AI Responses</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Queries entered by the user are sent to the selected AI service only to generate answers requested by the user</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>We do not use this data for advertising, profiling, or resale</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3 mt-6">1.3 Focus Detection Feature</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">The focus detection feature does not collect, record, store, or transmit user footage</strong></span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>It does not access or store camera images or video</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>The feature only detects the presence of mobile devices for focus-related functionality and does not identify individuals</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3 mt-6">1.4 Browser Features</h3>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">The Extension provides tools such as:</p>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>GitHub agent</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Learning agent</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Color picker</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Font picker</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Ad blocker</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Cache clearing</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Cookie editing</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Nuclear mode (site blocking except whitelisted sites)</span>
              </li>
            </ul>
            <p className="text-gray-400 font-mono mt-4 leading-relaxed">
              These features operate locally in the user's browser and do not collect personal data unless explicitly required for functionality.
            </p>
          </section>

          <section ref={el => sectionsRef.current[2] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">2. Information We Do Not Collect</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">We do not collect:</p>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Personal identification information (name, email, address)</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Browsing history for tracking or advertising</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Video or image footage</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Login credentials</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Financial information</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[3] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">3. Use of AI and Limitations</h2>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>The Extension uses AI and Large Language Models to generate responses</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>AI-generated content may be inaccurate, incomplete, or incorrect</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Users should independently verify important information</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>The Extension is provided for informational and productivity purposes only</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[4] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">4. Ad Blocking Disclaimer</h2>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>The ad blocker feature does not block ads on all websites</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Ads may not be blocked on certain platforms, including YouTube</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Ad blocking effectiveness depends on site behavior and browser limitations</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[5] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">5. Data Security</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">
              We take reasonable measures to protect user data. However:
            </p>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>No system is completely secure</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Users are responsible for safeguarding their API keys and browser environment</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[6] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">6. Third-Party Services</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">
              The Extension may interact with third-party APIs or services at the user's request.
            </p>
            <p className="text-gray-400 font-mono leading-relaxed">
              We are not responsible for the privacy practices of third-party services.
            </p>
          </section>

          <section ref={el => sectionsRef.current[7] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-400 font-mono leading-relaxed">
              We may update this Privacy Policy from time to time. Updates will be reflected by changing the "Last updated" date.
            </p>
          </section>

          <section ref={el => sectionsRef.current[8] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">8. Contact</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <p className="text-gray-400 font-mono">
              Email: <a href="mailto:privacy@expro.dev" className="text-blue-400 hover:text-blue-300 underline">privacy@expro.dev</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
