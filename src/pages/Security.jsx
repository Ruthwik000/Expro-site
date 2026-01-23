import React from 'react';

const Security = () => {
  const permissions = [
    {
      permission: 'storage',
      icon: '💾',
      why: 'Store your preferences, API keys, and saved tab groups locally on your device',
      details: 'Used to save extension settings, user preferences, API keys (Groq, Roboflow), and tab group data. All data is stored locally using chrome.storage.local and chrome.storage.sync APIs.'
    },
    {
      permission: 'tabs',
      icon: '📑',
      why: 'Manage and organize your browser tabs for the Tab Manager feature',
      details: 'Required to save, restore, and manage tab groups. Allows the extension to read tab URLs and titles to create organized tab groups you can restore later.'
    },
    {
      permission: 'cookies',
      icon: '🍪',
      why: 'Enable the Cookie Editor feature to view and modify cookies',
      details: 'Allows you to view, edit, add, and delete cookies for debugging and testing purposes. Essential for developers working with authentication and session management.'
    },
    {
      permission: 'webNavigation',
      icon: '🧭',
      why: 'Detect page loads and navigation for features like Auto Clear Cache and Speed Improver',
      details: 'Monitors page navigation events to trigger features at the right time, such as clearing cache on page load or optimizing page performance.'
    },
    {
      permission: 'offscreen',
      icon: '📹',
      why: 'Enable camera access for Focus Detection feature',
      details: 'Creates an offscreen document to access your camera for the Focus Detection feature. Video is processed in real-time using the Roboflow API and is never recorded or stored. You can disable this feature at any time.'
    },
    {
      permission: '<all_urls>',
      icon: '🌐',
      why: 'Allow features to work on all websites you visit',
      details: 'Required for features like SEO Checker, Font Finder, Color Picker, Ad Blocker, and YouTube Focus Mode to function on any website. The extension only activates features when you explicitly use them.'
    }
  ];

  return (
    <div className="py-16">
      <section className="container-custom mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Security & Permissions</h1>
          <p className="text-xl text-gray-600">
            Transparency about what permissions we need and why
          </p>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="container-custom mb-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Commitment</h2>
          <p className="text-lg text-gray-700 mb-4">
            ExPro requests only the permissions necessary for its features to function. We believe in transparency and want you to understand exactly why each permission is needed.
          </p>
          <p className="text-lg text-gray-700">
            All data is stored locally on your device. We never transmit your personal data to our servers, and we don't use analytics or tracking tools.
          </p>
        </div>
      </section>

      {/* Permissions Breakdown */}
      <section className="container-custom mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Required Permissions Explained</h2>
          <div className="space-y-6">
            {permissions.map((perm, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="text-4xl mr-4 flex-shrink-0">{perm.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <code className="text-lg font-mono font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded">
                        {perm.permission}
                      </code>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Why we need it:</h3>
                    <p className="text-gray-700 mb-3">{perm.why}</p>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Technical Details:</h4>
                    <p className="text-sm text-gray-600">{perm.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="container-custom mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Security Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Storage Only</h3>
              <p className="text-gray-600">
                All your data is stored locally on your device using Chrome's encrypted storage APIs. We never have access to your data.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🚫</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Tracking</h3>
              <p className="text-gray-600">
                We don't use analytics, tracking pixels, or any telemetry. Your browsing activity is private.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">API Key Security</h3>
              <p className="text-gray-600">
                Your API keys are stored in Chrome's encrypted storage and never transmitted to us. Only you have access.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">📹</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Camera Privacy</h3>
              <p className="text-gray-600">
                Focus Detection processes video in real-time. No video is recorded, stored, or transmitted to our servers.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Minimal Permissions</h3>
              <p className="text-gray-600">
                We request only the permissions necessary for features to work. No unnecessary access.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🗑️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Data Deletion</h3>
              <p className="text-gray-600">
                Uninstalling ExPro automatically deletes all stored data. You can also clear data manually in settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chrome Web Store Compliance */}
      <section className="container-custom mb-16">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Chrome Web Store Compliance</h2>
          <p className="text-gray-700 mb-4">
            ExPro fully complies with Chrome Web Store policies:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Permissions are clearly justified and necessary for functionality</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Privacy policy is clear, comprehensive, and accessible</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No deceptive or misleading practices</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>User data is handled securely and privately</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Camera usage is clearly disclosed and justified</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Third-party service usage is transparent</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Questions */}
      <section className="container-custom">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Questions About Security?</h2>
          <p className="text-lg mb-8 opacity-90">
            We're committed to transparency. If you have security concerns or questions, we're here to help.
          </p>
          <a
            href="mailto:security@expro.dev"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-colors duration-200"
          >
            Contact Security Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default Security;
