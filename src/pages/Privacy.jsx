import React from 'react';

const Privacy = () => {
  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 23, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-700 mb-4">
              ExPro is built with privacy as a core principle. We believe your data belongs to you. This policy explains what data we collect, how we use it, and your rights regarding your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Data We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Data Stored Locally</h3>
            <p className="text-gray-700 mb-4">ExPro stores the following data locally on your device using Chrome's storage API:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>API Keys:</strong> Your Groq API and Roboflow API keys for AI-powered features</li>
              <li><strong>User Preferences:</strong> Extension settings, feature toggles, and customization options</li>
              <li><strong>Tab Data:</strong> Saved tab groups and session information for Tab Manager features</li>
              <li><strong>Cookies:</strong> Cookie data accessed through the Cookie Editor feature</li>
              <li><strong>Cache Data:</strong> Temporary cache information for the Auto Clear Cache feature</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Camera/Webcam Usage</h3>
            <p className="text-gray-700 mb-4">
              The Focus Detection feature uses your device camera to detect when you're looking away from the screen. This feature:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Only activates when you explicitly enable Focus Detection</li>
              <li>Processes video frames locally on your device</li>
              <li>Does not record, store, or transmit any video or images</li>
              <li>Uses the Roboflow API for real-time face detection processing</li>
              <li>Can be disabled at any time through extension settings</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Data</h2>
            <p className="text-gray-700 mb-4">All data collected is used solely for feature functionality:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>API Keys:</strong> Used to authenticate requests to Groq and Roboflow services for AI features</li>
              <li><strong>Preferences:</strong> Used to customize your extension experience</li>
              <li><strong>Tab Data:</strong> Used to save and restore your browsing sessions</li>
              <li><strong>Cookies:</strong> Accessed only when you use the Cookie Editor tool</li>
              <li><strong>Camera Data:</strong> Processed in real-time for focus detection, never stored</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Where Data Is Stored</h2>
            <p className="text-gray-700 mb-4">
              All data is stored locally on your device using:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>chrome.storage.local:</strong> For device-specific data</li>
              <li><strong>chrome.storage.sync:</strong> For preferences you want synced across devices (optional)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We do not have access to your stored data. It remains on your device and is never transmitted to our servers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Groq API</h3>
            <p className="text-gray-700 mb-4">
              When you use AI-powered features (GitHub AI Agent, Learning AI Agent), your queries are sent to Groq's API for processing. Please review <a href="https://groq.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Groq's Privacy Policy</a> for details on how they handle data.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Roboflow API</h3>
            <p className="text-gray-700 mb-4">
              The Focus Detection feature sends video frames to Roboflow's API for face detection processing. No video is stored. Please review <a href="https://roboflow.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">Roboflow's Privacy Policy</a> for details.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Don't Do</h2>
            <p className="text-gray-700 mb-4">ExPro does not:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Collect personal information (name, email, phone number)</li>
              <li>Track your browsing history</li>
              <li>Use analytics or tracking tools</li>
              <li>Display advertisements</li>
              <li>Sell or share your data with third parties</li>
              <li>Store your camera footage or images</li>
              <li>Access your data remotely</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have complete control over your data:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Access:</strong> All your data is stored locally and accessible through Chrome's developer tools</li>
              <li><strong>Delete:</strong> Clear all extension data through the extension settings or by uninstalling</li>
              <li><strong>Export:</strong> Export your settings and tab groups through the extension interface</li>
              <li><strong>Disable Features:</strong> Turn off any feature, including camera access, at any time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Deletion</h2>
            <p className="text-gray-700 mb-4">
              When you uninstall ExPro, all locally stored data is automatically removed from your device. You can also manually clear data through the extension settings at any time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              ExPro is not directed at children under 13. We do not knowingly collect data from children.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy to reflect changes in our practices or legal requirements. We will notify users of significant changes through the extension or on this website. Continued use of ExPro after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this privacy policy or how we handle data, please contact us:
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:privacy@expro.dev" className="text-primary-600 hover:text-primary-700 underline">privacy@expro.dev</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
