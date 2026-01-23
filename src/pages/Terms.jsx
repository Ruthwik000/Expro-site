import React from 'react';

const Terms = () => {
  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 23, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By installing and using ExPro ("the Extension"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the Extension.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">License Grant</h2>
            <p className="text-gray-700 mb-4">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Install and use ExPro on devices you own or control</li>
              <li>Use the Extension for personal, non-commercial purposes</li>
              <li>Access features as described in our documentation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Use the Extension for any illegal purpose or in violation of any laws</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the Extension</li>
              <li>Remove, alter, or obscure any proprietary notices</li>
              <li>Use the Extension to harm, harass, or violate the rights of others</li>
              <li>Attempt to gain unauthorized access to any systems or networks</li>
              <li>Use the Extension to distribute malware or malicious code</li>
              <li>Abuse or overload third-party APIs (Groq, Roboflow) integrated with the Extension</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features and Functionality</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Developer Tools</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Auto Clear Cache:</strong> Clears browser cache on demand</li>
              <li><strong>Cookie Editor:</strong> Allows viewing and editing of cookies</li>
              <li><strong>SEO Checker:</strong> Analyzes page SEO elements</li>
              <li><strong>Font Finder:</strong> Identifies fonts used on web pages</li>
              <li><strong>Color Picker:</strong> Extracts colors from web pages</li>
              <li><strong>GitHub AI Agent:</strong> AI-powered GitHub assistance (requires Groq API key)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Learning Tools</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Ad Blocker:</strong> Blocks advertisements on web pages</li>
              <li><strong>Speed Improver:</strong> Optimizes page loading performance</li>
              <li><strong>Learning AI Agent:</strong> AI-powered learning assistance (requires Groq API key)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Productivity Tools</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>YouTube Focus Mode:</strong> Removes distractions from YouTube</li>
              <li><strong>Focus Detection:</strong> Detects when you're looking away (requires camera permission and Roboflow API key)</li>
              <li><strong>Nuclear Mode:</strong> Blocks distracting websites</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Tab Manager</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Save Tab Groups:</strong> Saves current tab configurations</li>
              <li><strong>Restore Sessions:</strong> Restores previously saved tab groups</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              ExPro integrates with third-party services (Groq API, Roboflow API). Your use of these services is subject to their respective terms of service and privacy policies. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Obtaining and maintaining valid API keys</li>
              <li>Complying with third-party service terms</li>
              <li>Any costs associated with API usage</li>
              <li>Securing your API keys</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI-Generated Content Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Features powered by AI (GitHub AI Agent, Learning AI Agent, Focus Detection) may produce outputs that are:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Inaccurate, incomplete, or misleading</li>
              <li>Not suitable for all purposes</li>
              <li>Subject to limitations of the underlying AI models</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You are responsible for verifying AI-generated content before relying on it. We do not guarantee the accuracy, reliability, or suitability of AI outputs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              THE EXTENSION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>Warranties that the Extension will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy or reliability of any content or features</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, use, or goodwill</li>
              <li>Service interruptions or errors</li>
              <li>Damages resulting from third-party services (Groq, Roboflow)</li>
              <li>Damages resulting from unauthorized access to your data</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Our total liability shall not exceed $10 USD or the amount you paid for the Extension (currently $0).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless ExPro and its developers from any claims, damages, losses, or expenses arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Your use of the Extension</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your use of third-party APIs</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications to the Extension</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Modify, suspend, or discontinue any feature at any time</li>
              <li>Update the Extension with bug fixes and improvements</li>
              <li>Change these Terms with notice to users</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to the Extension immediately, without notice, for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violation of these Terms</li>
              <li>Illegal or harmful conduct</li>
              <li>Abuse of third-party services</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You may terminate your use by uninstalling the Extension.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes shall be resolved in the appropriate courts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We may update these Terms from time to time. We will notify users of material changes through the Extension or this website. Continued use after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms, contact us at:
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:legal@expro.dev" className="text-primary-600 hover:text-primary-700 underline">legal@expro.dev</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
