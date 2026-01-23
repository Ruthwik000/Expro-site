import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="py-16">
      <section className="container-custom mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About ExPro</h1>
          <p className="text-xl text-gray-600">
            A privacy-first toolkit built for developers, learners, and productivity enthusiasts
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              ExPro was created to solve a simple problem: developers and learners need powerful tools without sacrificing privacy. We believe productivity tools should enhance your workflow, not track your every move.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to provide a comprehensive toolkit that respects your privacy, stores data locally, and gives you complete control over your browsing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why ExPro */}
      <section className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why We Built ExPro</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600">
                Your data belongs to you. We don't collect, track, or sell your information. Everything stays on your device.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Developer Focused</h3>
              <p className="text-gray-600">
                Built by developers, for developers. Tools that actually solve real problems in your daily workflow.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Productivity Driven</h3>
              <p className="text-gray-600">
                Features designed to eliminate distractions and help you focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container-custom py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-700">
                We're open about what data we collect (minimal), how we use it (for features only), and where it's stored (locally on your device).
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User Control</h3>
              <p className="text-gray-700">
                You decide which features to use, when to use them, and can delete all data at any time. No lock-in, no hidden settings.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Dark Patterns</h3>
              <p className="text-gray-700">
                We don't use manipulative design, hidden fees, or deceptive practices. What you see is what you get.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
              <p className="text-gray-700">
                We listen to user feedback and continuously improve ExPro based on real needs and use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Built With</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Technologies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">•</span>
                    Chrome Extension APIs
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">•</span>
                    JavaScript / React
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">•</span>
                    Local Storage APIs
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Integration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">•</span>
                    Groq API (AI features)
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">•</span>
                    Roboflow API (Focus Detection)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom py-16">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join the ExPro Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Experience a better way to browse with privacy-first productivity tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Install Extension
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
