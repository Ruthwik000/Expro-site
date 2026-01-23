import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
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

  const faqs = [
    {
      category: 'Installation & Setup',
      questions: [
        {
          q: 'How do I install ExPro?',
          a: 'Visit the Chrome Web Store, search for "ExPro", and click "Add to Chrome". The extension will be installed and appear in your browser toolbar.'
        },
        {
          q: 'Which browsers are supported?',
          a: 'ExPro is designed for Google Chrome and Chromium-based browsers (Edge, Brave, Opera). It requires Chrome version 88 or higher.'
        },
        {
          q: 'How do I set up API keys?',
          a: 'Click the ExPro icon in your toolbar, go to Settings, and enter your Groq API key and Roboflow API key in the respective fields. Get your Groq API key from console.groq.com and Roboflow API key from app.roboflow.com.'
        }
      ]
    },
    {
      category: 'Features & Usage',
      questions: [
        {
          q: 'How does the Auto Clear Cache feature work?',
          a: 'Click the ExPro icon and select "Clear Cache". This will immediately clear your browser cache, useful for testing and development.'
        },
        {
          q: 'Can I edit cookies for any website?',
          a: 'Yes, the Cookie Editor allows you to view, edit, add, and delete cookies for any website you visit. Navigate to the site, open ExPro, and select Cookie Editor.'
        },
        {
          q: 'What does the SEO Checker analyze?',
          a: 'The SEO Checker examines meta tags, title tags, heading structure, alt text on images, canonical URLs, and structured data to provide actionable SEO insights.'
        },
        {
          q: 'How do I use Focus Detection?',
          a: 'Enable Focus Detection in settings, grant camera permission when prompted, and enter your Roboflow API key. The feature will alert you when you look away from the screen.'
        },
        {
          q: 'What is Nuclear Mode?',
          a: 'Nuclear Mode blocks access to distracting websites you specify. Set up your blocklist in settings and activate Nuclear Mode when you need to focus.'
        }
      ]
    },
    {
      category: 'Privacy & Security',
      questions: [
        {
          q: 'Is my data safe?',
          a: 'Yes. All data is stored locally on your device using Chrome\'s storage API. We never transmit your data to our servers or third parties (except API calls to Groq and Roboflow when you use AI features).'
        },
        {
          q: 'Why does ExPro need camera permission?',
          a: 'Camera permission is only required for the Focus Detection feature, which detects when you\'re looking away from the screen. Video is processed in real-time and never recorded or stored.'
        },
        {
          q: 'Are my API keys secure?',
          a: 'Your API keys are stored locally in Chrome\'s encrypted storage. They are never transmitted to us. However, you should keep your keys private and never share them.'
        },
        {
          q: 'Does ExPro track my browsing?',
          a: 'No. ExPro does not track your browsing history, collect analytics, or use any tracking tools. We respect your privacy.'
        }
      ]
    },
    {
      category: 'Troubleshooting',
      questions: [
        {
          q: 'The extension isn\'t working. What should I do?',
          a: 'Try these steps: 1) Refresh the page, 2) Restart your browser, 3) Check if the extension is enabled in chrome://extensions, 4) Reinstall the extension if issues persist.'
        },
        {
          q: 'AI features aren\'t responding',
          a: 'Verify that you\'ve entered valid API keys in settings. Check your API key quotas on the Groq and Roboflow dashboards. Ensure you have an active internet connection.'
        },
        {
          q: 'Focus Detection isn\'t working',
          a: 'Ensure you\'ve granted camera permission, entered a valid Roboflow API key, and your camera is not being used by another application. Check browser permissions in chrome://settings/content/camera.'
        },
        {
          q: 'How do I report a bug?',
          a: 'Email us at support@expro.dev with a description of the issue, steps to reproduce, and your browser version. Screenshots are helpful.'
        }
      ]
    },
    {
      category: 'Tab Manager',
      questions: [
        {
          q: 'How do I save tab groups?',
          a: 'Open ExPro, go to Tab Manager, and click "Save Current Tabs". Give your group a name and it will be saved for later restoration.'
        },
        {
          q: 'Can I restore tabs after closing my browser?',
          a: 'Yes. Saved tab groups persist across browser sessions. Open ExPro, go to Tab Manager, and select the group you want to restore.'
        },
        {
          q: 'How many tab groups can I save?',
          a: 'There\'s no hard limit, but performance may vary with very large numbers of saved groups. We recommend keeping it under 50 groups.'
        }
      ]
    },
    {
      category: 'General',
      questions: [
        {
          q: 'Is ExPro free?',
          a: 'Yes, ExPro is completely free to use. However, you\'ll need your own API keys for Groq and Roboflow services, which may have their own pricing.'
        },
        {
          q: 'Can I request new features?',
          a: 'Absolutely! We welcome feature requests. Email us at support@expro.dev with your suggestions.'
        },
        {
          q: 'How do I uninstall ExPro?',
          a: 'Go to chrome://extensions, find ExPro, and click "Remove". All locally stored data will be deleted automatically.'
        }
      ]
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-mono text-white mb-6 uppercase tracking-tight">
              FAQ
            </h1>
            <p className="text-xl text-gray-500 font-mono">
              Find answers to common questions about ExPro
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="container-custom pb-20">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              ref={el => sectionsRef.current[categoryIndex] = el}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-black font-mono text-white mb-8 uppercase tracking-tight border-l-4 border-gray-700 pl-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openIndex === currentIndex;
                  
                  return (
                    <div
                      key={currentIndex}
                      className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleQuestion(currentIndex)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center"
                      >
                        <span className="font-bold font-mono text-white pr-8 group-hover:text-blue-400 transition-colors duration-300">
                          {faq.q}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-all duration-300 flex-shrink-0 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 text-gray-400 font-mono text-sm leading-relaxed border-t border-gray-800/50 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-gray-800/50">
        <div className="container-custom">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 md:p-16 text-center border border-gray-700 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gray-600 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gray-600 rounded-br-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black font-mono text-white mb-4 uppercase tracking-tight">
                Still have questions?
              </h2>
              <p className="text-xl text-gray-400 mb-8 font-mono">
                We're here to help. Reach out to our support team.
              </p>
              <a
                href="mailto:support@expro.dev"
                className="group inline-flex items-center justify-center px-10 py-5 text-base font-bold font-mono text-black bg-gray-300 hover:bg-white rounded-md shadow-lg shadow-gray-500/20 hover:shadow-gray-400/30 transform hover:-translate-y-1 transition-all duration-200 uppercase tracking-[0.15em]"
              >
                Contact Support
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

export default FAQ;
