import React from 'react';

const Contact = () => {
  return (
    <div className="py-16">
      <section className="container-custom mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact & Support</h1>
          <p className="text-xl text-gray-600">
            We're here to help. Reach out with questions, bug reports, or feature requests.
          </p>
        </div>
      </section>

      <section className="container-custom">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Support */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">General Support</h2>
            <p className="text-gray-600 mb-6">
              Have a question or need help? Our support team is ready to assist you.
            </p>
            <a
              href="mailto:support@expro.dev"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
            >
              support@expro.dev
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Bug Reports */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-4xl mb-4">🐛</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Report a Bug</h2>
            <p className="text-gray-600 mb-6">
              Found a bug? Help us improve by reporting issues with detailed information.
            </p>
            <a
              href="mailto:bugs@expro.dev"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
            >
              bugs@expro.dev
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Feature Requests */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Feature Requests</h2>
            <p className="text-gray-600 mb-6">
              Have an idea for a new feature? We'd love to hear your suggestions.
            </p>
            <a
              href="mailto:features@expro.dev"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
            >
              features@expro.dev
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Privacy & Legal */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Privacy & Legal</h2>
            <p className="text-gray-600 mb-6">
              Questions about privacy, data handling, or legal matters? Contact our legal team.
            </p>
            <a
              href="mailto:legal@expro.dev"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
            >
              legal@expro.dev
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Bug Report Guidelines */}
      <section className="container-custom py-16">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Report a Bug</h2>
          <p className="text-gray-700 mb-4">
            To help us resolve issues quickly, please include the following information:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-500 mr-3 mt-1">•</span>
              <span><strong>Description:</strong> Clear description of the issue</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-3 mt-1">•</span>
              <span><strong>Steps to Reproduce:</strong> Detailed steps to recreate the bug</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-3 mt-1">•</span>
              <span><strong>Expected Behavior:</strong> What should happen</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-3 mt-1">•</span>
              <span><strong>Actual Behavior:</strong> What actually happens</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-3 mt-1">•</span>
              <span><strong>Browser Version:</strong> Chrome version and OS</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-3 mt-1">•</span>
              <span><strong>Screenshots:</strong> Visual evidence if applicable</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
