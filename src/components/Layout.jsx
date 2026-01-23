import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <nav className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded flex items-center justify-center border border-gray-700">
                <span className="text-white font-bold text-lg font-mono">E</span>
              </div>
              <span className="text-xl font-bold text-white font-mono">ExPro</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium font-mono transition-colors uppercase tracking-wider ${
                    isActive(item.href)
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://chrome.google.com/webstore"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-transparent border border-gray-700 text-gray-300 font-mono text-sm hover:bg-gray-800 hover:text-white transition-all uppercase tracking-wider"
              >
                INSTALL
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium font-mono uppercase tracking-wider ${
                      isActive(item.href)
                        ? 'text-white'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://chrome.google.com/webstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-transparent border border-gray-700 text-gray-300 font-mono text-sm hover:bg-gray-800 hover:text-white transition-all text-center uppercase tracking-wider"
                >
                  INSTALL
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 mt-20">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded flex items-center justify-center border border-gray-700">
                  <span className="text-white font-bold text-lg font-mono">E</span>
                </div>
                <span className="text-xl font-bold text-white font-mono">ExPro</span>
              </Link>
              <p className="text-sm text-gray-500 font-mono">
                Privacy-first developer and productivity toolkit for Chrome.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 font-mono uppercase tracking-wider">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-sm text-gray-500 hover:text-gray-300 font-mono">Features</Link></li>
                <li><Link to="/security" className="text-sm text-gray-500 hover:text-gray-300 font-mono">Security</Link></li>
                <li><Link to="/faq" className="text-sm text-gray-500 hover:text-gray-300 font-mono">FAQ</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 font-mono uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm text-gray-500 hover:text-gray-300 font-mono">About</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-500 hover:text-gray-300 font-mono">Contact</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4 font-mono uppercase tracking-wider">Legal</h3>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-300 font-mono">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-gray-500 hover:text-gray-300 font-mono">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 font-mono">
                © {new Date().getFullYear()} ExPro. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 mt-2 md:mt-0 font-mono">
                Support: <a href="mailto:support@expro.dev" className="text-gray-400 hover:text-gray-300">support@expro.dev</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
