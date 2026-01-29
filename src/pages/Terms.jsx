import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Terms = () => {
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
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-500 font-mono">Last Updated: January 23, 2025</p>
          </div>
        </div>
      </section>

      <div className="container-custom pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <section ref={el => sectionsRef.current[0] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">Agreement to Terms</h2>
            <p className="text-gray-400 font-mono leading-relaxed">
              By installing or using this Chrome extension ("the Extension"), you agree to these Terms and Conditions.
            </p>
          </section>

          <section ref={el => sectionsRef.current[1] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">1. Use of the Extension</h2>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>The Extension is provided for personal and educational productivity purposes</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>You agree to use the Extension in compliance with all applicable laws and regulations</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[2] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">2. AI-Generated Content Disclaimer</h2>
            <ul className="space-y-3 mb-4">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>The Extension uses AI and automated systems</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Responses may be incorrect, misleading, or outdated</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>We do not guarantee accuracy, reliability, or completeness</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>You use AI-generated content at your own risk</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[3] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">3. User Responsibility</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">You are responsible for:</p>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Verifying important information</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Managing your API keys</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Ensuring your use of the Extension does not violate third-party terms</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[4] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">4. API Keys</h2>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Users must provide their own API keys where required</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>We do not claim ownership over user API keys</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Misuse or exposure of API keys is the user's responsibility</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[5] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-6 uppercase tracking-tight">5. Feature-Specific Terms</h2>
            
            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3">5.1 Ad Blocker</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Ad blocking is best-effort only</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Ads may still appear on some websites, including YouTube</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3 mt-6">5.2 Nuclear Mode</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Nuclear mode blocks access to all websites except those explicitly whitelisted</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>We are not responsible for data loss, interruptions, or access issues caused by this feature</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3 mt-6">5.3 Browser Controls</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Cache clearing, cookie editing, and similar features may affect website behavior</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Users should use these features with caution</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[6] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">6. No Warranty</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">
              The Extension is provided "as is" and "as available" without warranties of any kind, including:
            </p>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Fitness for a particular purpose</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Accuracy</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Availability</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Security</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[7] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">7. Limitation of Liability</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">
              To the maximum extent permitted by law:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>We are not liable for any direct, indirect, incidental, or consequential damages resulting from use of the Extension</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>This includes loss of data, productivity, or access to websites</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[8] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">8. Termination</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">We reserve the right to:</p>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Modify or discontinue the Extension at any time</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Restrict access if these Terms are violated</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[9] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">9. Changes to Terms</h2>
            <p className="text-gray-400 font-mono leading-relaxed">
              We may update these Terms at any time. Continued use of the Extension means acceptance of the updated Terms.
            </p>
          </section>

          <section ref={el => sectionsRef.current[10] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">10. Contact</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">
              For questions regarding these Terms:
            </p>
            <p className="text-gray-400 font-mono">
              Email: <a href="mailto:legal@expro.dev" className="text-blue-400 hover:text-blue-300 underline">legal@expro.dev</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;
