import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      }
    });
  }, []);

  const contactOptions = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'General Support',
      description: 'Have a question or need help? Our support team is ready to assist you.',
      email: 'support@expro.dev'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Report a Bug',
      description: 'Found a bug? Help us improve by reporting issues with detailed information.',
      email: 'bugs@expro.dev'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Feature Requests',
      description: 'Have an idea for a new feature? We\'d love to hear your suggestions.',
      email: 'features@expro.dev'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Privacy & Legal',
      description: 'Questions about privacy, data handling, or legal matters? Contact our legal team.',
      email: 'legal@expro.dev'
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
              Contact & Support
            </h1>
            <p className="text-xl text-gray-500 font-mono">
              We're here to help. Reach out with questions, bug reports, or feature requests.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="container-custom pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 mb-4">
                {option.icon}
              </div>
              <h2 className="text-2xl font-black font-mono text-white mb-3 uppercase tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                {option.title}
              </h2>
              <p className="text-gray-400 font-mono mb-6 leading-relaxed">
                {option.description}
              </p>
              <a
                href={`mailto:${option.email}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-mono font-bold transition-colors duration-300"
              >
                {option.email}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Bug Report Guidelines */}
      <section className="container-custom pb-20">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={el => cardsRef.current[4] = el}
            className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 md:p-12 hover:border-blue-500/30 transition-all duration-300"
          >
            <h2 className="text-3xl font-black font-mono text-white mb-6 uppercase tracking-tight">How to Report a Bug</h2>
            <p className="text-gray-400 font-mono mb-6 leading-relaxed">
              To help us resolve issues quickly, please include the following information:
            </p>
            <ul className="space-y-4">
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Description:</strong> Clear description of the issue</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Steps to Reproduce:</strong> Detailed steps to recreate the bug</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Expected Behavior:</strong> What should happen</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Actual Behavior:</strong> What actually happens</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Browser Version:</strong> Chrome version and OS</span>
              </li>
              <li className="text-gray-400 font-mono flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0"></span>
                <span><strong className="text-white">Screenshots:</strong> Visual evidence if applicable</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
