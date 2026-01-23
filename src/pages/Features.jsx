import React from 'react';

const Features = () => {
  const featureCategories = [
    {
      title: 'Developer Tools',
      description: 'Essential utilities for web developers and engineers',
      icon: '⚡',
      features: [
        {
          name: 'Auto Clear Cache',
          description: 'Quickly clear browser cache with a single click. Useful for testing and development to ensure you\'re seeing the latest version of your code.'
        },
        {
          name: 'Cookie Editor',
          description: 'View, edit, and manage cookies for any website. Essential for debugging authentication issues and testing cookie-based functionality.'
        },
        {
          name: 'SEO Checker',
          description: 'Analyze page SEO elements including meta tags, headings, alt text, and structured data. Get actionable insights to improve search rankings.'
        },
        {
          name: 'Font Finder',
          description: 'Identify fonts used on any webpage. Hover over text to see font family, size, weight, and other typography details.'
        },
        {
          name: 'Color Picker',
          description: 'Extract colors from any element on a webpage. Click to copy hex, RGB, or HSL values instantly.'
        },
        {
          name: 'GitHub AI Agent',
          description: 'AI-powered assistant for GitHub workflows. Get help with repository management, code reviews, and issue tracking. Requires Groq API key.'
        }
      ]
    },
    {
      title: 'Learning Tools',
      description: 'Enhance your learning experience and focus',
      icon: '📚',
      features: [
        {
          name: 'Ad Blocker',
          description: 'Block intrusive advertisements to create a cleaner, distraction-free learning environment. Improves page load times and reduces visual clutter.'
        },
        {
          name: 'Speed Improver',
          description: 'Optimize page loading performance by removing unnecessary scripts and resources. Faster pages mean better learning efficiency.'
        },
        {
          name: 'Learning AI Agent',
          description: 'AI-powered learning companion that helps explain concepts, answer questions, and provide study guidance. Requires Groq API key.'
        }
      ]
    },
    {
      title: 'Productivity Tools',
      description: 'Stay focused and maximize your productivity',
      icon: '🎯',
      features: [
        {
          name: 'YouTube Focus Mode',
          description: 'Remove distracting elements from YouTube including recommended videos, comments, and sidebar suggestions. Watch what you intended without getting sidetracked.'
        },
        {
          name: 'Focus Detection',
          description: 'Uses your camera to detect when you\'re looking away from the screen. Helps maintain focus during work or study sessions. Requires camera permission and Roboflow API key. All processing is done locally.'
        },
        {
          name: 'Nuclear Mode',
          description: 'Block access to distracting websites during focus sessions. Set custom blocklists and time limits to enforce productive work periods.'
        }
      ]
    },
    {
      title: 'Tab Manager',
      description: 'Organize and manage your browsing sessions',
      icon: '📑',
      features: [
        {
          name: 'Save Tab Groups',
          description: 'Save your current tab configuration as a named group. Perfect for organizing different projects, research topics, or workflows.'
        },
        {
          name: 'Restore Sessions',
          description: 'Quickly restore previously saved tab groups. Pick up exactly where you left off without manually reopening tabs.'
        }
      ]
    }
  ];

  return (
    <div className="py-16">
      {/* Hero */}
      <section className="container-custom mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Powerful Features</h1>
          <p className="text-xl text-gray-600">
            Everything you need for development, learning, and productivity in one extension
          </p>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-12 bg-white odd:bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="text-5xl mb-4">{category.icon}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{category.title}</h2>
              <p className="text-lg text-gray-600">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="container-custom py-16">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to experience all these features?</h2>
          <p className="text-lg mb-8 opacity-90">
            Install ExPro and start boosting your productivity today
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

export default Features;
