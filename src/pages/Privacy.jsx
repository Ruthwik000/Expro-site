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
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">Our Commitment to Privacy</h2>
            <p className="text-gray-400 font-mono leading-relaxed">
              ExPro is built with privacy as a core principle. We believe your data belongs to you. This policy explains what data we collect, how we use it, and your rights regarding your information.
            </p>
          </section>

          <section ref={el => sectionsRef.current[1] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-6 uppercase tracking-tight">What Data We Collect</h2>
            
            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3">Data Stored Locally</h3>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">ExPro stores the following data locally on your device using Chrome's storage API:</p>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">API Keys:</strong> Your Groq API and Roboflow API keys for AI-powered features</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">User Preferences:</strong> Extension settings, feature toggles, and customization options</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Tab Data:</strong> Saved tab groups and session information for Tab Manager features</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Cookies:</strong> Cookie data accessed through the Cookie Editor feature</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Cache Data:</strong> Temporary cache information for the Auto Clear Cache feature</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3 mt-6">Camera/Webcam Usage</h3>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">
              The Focus Detection feature uses your device camera to detect when you're looking away from the screen. This feature:
            </p>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Only activates when you explicitly enable Focus Detection</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Processes video frames locally on your device</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Does not record, store, or transmit any video or images</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Uses the Roboflow API for real-time face detection processing</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Can be disabled at any time through extension settings</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[2] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">How We Use Your Data</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">All data collected is used solely for feature functionality:</p>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">API Keys:</strong> Used to authenticate requests to Groq and Roboflow services for AI features</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Preferences:</strong> Used to customize your extension experience</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Tab Data:</strong> Used to save and restore your browsing sessions</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Cookies:</strong> Accessed only when you use the Cookie Editor tool</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Camera Data:</strong> Processed in real-time for focus detection, never stored</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[3] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">Where Data Is Stored</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">
              All data is stored locally on your device using:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">chrome.storage.local:</strong> For device-specific data</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">chrome.storage.sync:</strong> For preferences you want synced across devices (optional)</span>
              </li>
            </ul>
            <p className="text-gray-400 font-mono leading-relaxed">
              We do not have access to your stored data. It remains on your device and is never transmitted to our servers.
            </p>
          </section>

          <section ref={el => sectionsRef.current[4] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-6 uppercase tracking-tight">Third-Party Services</h2>
            
            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3">Groq API</h3>
            <p className="text-gray-400 font-mono mb-6 leading-relaxed">
              When you use AI-powered features (GitHub AI Agent, Learning AI Agent), your queries are sent to Groq's API for processing. Please review <a href="https://groq.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Groq's Privacy Policy</a> for details on how they handle data.
            </p>

            <h3 className="text-xl font-bold font-mono text-blue-400 mb-3">Roboflow API</h3>
            <p className="text-gray-400 font-mono leading-relaxed">
              The Focus Detection feature sends video frames to Roboflow's API for face detection processing. No video is stored. Please review <a href="https://roboflow.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Roboflow's Privacy Policy</a> for details.
            </p>
          </section>

          <section ref={el => sectionsRef.current[5] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">What We Don't Do</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">ExPro does not:</p>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Collect personal information (name, email, phone number)</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Track your browsing history</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Use analytics or tracking tools</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Display advertisements</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Sell or share your data with third parties</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Store your camera footage or images</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span>Access your data remotely</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[6] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">Your Rights</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">You have complete control over your data:</p>
            <ul className="space-y-3">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Access:</strong> All your data is stored locally and accessible through Chrome's developer tools</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Delete:</strong> Clear all extension data through the extension settings or by uninstalling</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Export:</strong> Export your settings and tab groups through the extension interface</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Disable Features:</strong> Turn off any feature, including camera access, at any time</span>
              </li>
            </ul>
          </section>

          <section ref={el => sectionsRef.current[7] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">Data Deletion</h2>
            <p className="text-gray-400 font-mono leading-relaxed">
              When you uninstall ExPro, all locally stored data is automatically removed from your device. You can also manually clear data through the extension settings at any time.
            </p>
          </section>

          <section ref={el => sectionsRef.current[8] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">Children's Privacy</h2>
            <p className="text-gray-400 font-mono leading-relaxed">
              ExPro is not directed at children under 13. We do not knowingly collect data from children.
            </p>
          </section>

          <section ref={el => sectionsRef.current[9] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">Changes to This Policy</h2>
            <p className="text-gray-400 font-mono leading-relaxed">
              We may update this privacy policy to reflect changes in our practices or legal requirements. We will notify users of significant changes through the extension or on this website. Continued use of ExPro after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section ref={el => sectionsRef.current[10] = el} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-3xl font-black font-mono text-white mb-4 uppercase tracking-tight">Contact Us</h2>
            <p className="text-gray-400 font-mono mb-4 leading-relaxed">
              If you have questions about this privacy policy or how we handle data, please contact us:
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
