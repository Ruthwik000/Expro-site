import { motion } from 'framer-motion';
import { TypingAnimation } from '@/components/ui/typing-animation';

const Features = () => {
  const featureCategories = [
    {
      title: 'DEVELOPER TOOLS',
      description: 'Essential utilities for web developers and engineers',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        {
          name: 'Auto Clear Cache',
          description: 'Quickly clear browser cache with a single click. Essential for testing and development.'
        },
        {
          name: 'Cookie Editor',
          description: 'View, edit, and manage cookies for any website. Debug authentication issues easily.'
        },
        {
          name: 'SEO Checker',
          description: 'Analyze page SEO elements including meta tags, headings, and structured data.'
        },
        {
          name: 'Font Finder',
          description: 'Identify fonts used on any webpage. See font family, size, weight instantly.'
        },
        {
          name: 'Color Picker',
          description: 'Extract colors from any element. Copy hex, RGB, or HSL values instantly.'
        },
        {
          name: 'GitHub AI Agent',
          description: 'AI-powered assistant for GitHub workflows. Requires Groq API key.'
        }
      ]
    },
    {
      title: 'LEARNING TOOLS',
      description: 'Enhance your learning experience and focus',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: [
        {
          name: 'Ad Blocker',
          description: 'Block intrusive advertisements for a cleaner, distraction-free experience.'
        },
        {
          name: 'Speed Improver',
          description: 'Optimize page loading by removing unnecessary scripts and resources.'
        },
        {
          name: 'Learning AI Agent',
          description: 'AI-powered learning companion. Requires Groq API key.'
        }
      ]
    },
    {
      title: 'PRODUCTIVITY TOOLS',
      description: 'Stay focused and maximize your productivity',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        {
          name: 'YouTube Focus Mode',
          description: 'Remove distracting elements from YouTube. Watch without getting sidetracked.'
        },
        {
          name: 'Focus Detection',
          description: 'Uses camera to detect when you\'re looking away. Requires Roboflow API key.'
        },
        {
          name: 'Nuclear Mode',
          description: 'Block access to distracting websites during focus sessions.'
        }
      ]
    },
    {
      title: 'TAB MANAGER',
      description: 'Organize and manage your browsing sessions',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        {
          name: 'Save Tab Groups',
          description: 'Save your current tab configuration as named groups for different projects.'
        },
        {
          name: 'Restore Sessions',
          description: 'Quickly restore previously saved tab groups. Pick up where you left off.'
        }
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-mono text-white mb-6 uppercase tracking-tight">
              <TypingAnimation 
                text="POWERFUL FEATURES" 
                speed={80}
              />
            </h1>
            <motion.p
              className="text-xl text-gray-500 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <TypingAnimation 
                text="Everything you need for development, learning, and productivity in one extension"
                speed={30}
                delay={2000}
              />
            </motion.p>
          </div>
        </div>
      </section>

      {/* Animated Features Section */}
      <section className="bg-black px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Feature Categories */}
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              {/* Category Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black font-mono text-white mb-2 uppercase tracking-tight">
                    {category.title}
                  </h2>
                  <p className="text-base text-gray-500 font-mono">{category.description}</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="bg-[#1a1a1a] rounded-xl p-8 min-h-[320px] flex flex-col border border-gray-800/50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.1 }}
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {/* Placeholder for GIF/Video */}
                    <div className="flex-1 flex items-center justify-center bg-gray-900/30 rounded-lg mb-6 min-h-[160px] border border-gray-800/30">
                      <span className="text-gray-600 text-sm font-mono">
                        [GIF/Video Placeholder]
                      </span>
                    </div>

                    {/* Feature Info */}
                    <div>
                      <h3 className="font-mono text-lg text-white font-bold mb-2">
                        {feature.name}
                      </h3>
                      <p className="text-gray-500 text-sm font-mono leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
                Ready to experience all these features?
              </h2>
              <p className="text-xl text-gray-400 mb-8 font-mono">
                Install ExPro and start boosting your productivity today
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

export default Features;
