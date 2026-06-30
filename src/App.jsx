import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll class addition for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for highlighting active link in navbar
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'skills',
      'experience',
      'projects',
      'education',
      'certifications',
      'contact'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-10% 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-brand-dark-bg text-white bg-grid overflow-hidden relative noise-overlay">
      {/* ─── Premium Animated Glow Background (Purple Glows & Subtle Orange Highlights) ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Purple Glow Top Left */}
        <div className="absolute top-[-15%] left-[-15%] w-[65vw] h-[65vw] max-w-[800px] rounded-full bg-brand-purple/12 blur-[140px] animate-glow-purple" />

        {/* Soft Purple Glow Bottom Right */}
        <div className="absolute bottom-[-15%] right-[-15%] w-[65vw] h-[65vw] max-w-[800px] rounded-full bg-brand-purple/10 blur-[140px] animate-glow-purple" />

        {/* Subtle Orange Highlight Glow in the Center */}
        <div className="absolute top-[35%] right-[20%] w-[35vw] h-[35vw] max-w-[400px] rounded-full bg-brand-orange/4 blur-[120px] animate-glow-orange" />

        {/* Floating Blurred Glass Shapes */}
        <div className="absolute top-[25%] left-[5%] w-32 h-32 rounded-[18px] glass-panel backdrop-blur-md animate-float-1 hidden md:block" />
        <div className="absolute bottom-[35%] right-[8%] w-48 h-48 rounded-[18px] glass-panel backdrop-blur-lg animate-float-2 hidden md:block" />
      </div>

      {/* ─── Sticky Header / Navigation ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'glass-nav shadow-lg shadow-black/[0.2] py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo (Matching Screenshot HD initials logo style with Purple Gradient) */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-poppins group"
          >
            <div className="w-10 h-10 rounded-[18px] bg-gradient-to-tr from-brand-purple to-brand-purple-secondary flex items-center justify-center font-extrabold text-white text-base tracking-tight shadow-md shadow-brand-purple/20 transition-transform duration-300 group-hover:scale-105">
              HD
            </div>
            <span className="text-base md:text-lg font-bold tracking-tight text-white transition-colors duration-300">
              Hiruni Dissanayake
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href} className="relative py-2">
                    <a
                      href={link.href}
                      className={`font-poppins text-xs font-semibold uppercase tracking-wider px-3.5 py-2 transition-all duration-300 ${isActive
                        ? 'text-white font-bold'
                        : 'text-white/60 hover:text-white'
                        }`}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Let's Connect Pill Button (Gradient) */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-purple to-brand-purple-secondary hover:opacity-90 text-white font-poppins text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg shadow-brand-purple/15 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Let's Connect
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Mobile Actions Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-[5px] p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
              />
              <span
                className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
              />
              <span
                className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
        >
          <ul className="glass-panel mx-4 rounded-[18px] p-6 flex flex-col gap-2 shadow-xl border border-white/5 bg-brand-dark-card/90">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block font-poppins text-sm font-semibold uppercase tracking-wider px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                      ? 'text-white bg-brand-purple/20 border-l-4 border-brand-purple'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-brand-purple to-brand-purple-secondary text-white font-poppins text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-all duration-300"
              >
                Let's Connect
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ─── Portfolio Main Layout Sections ─── */}
      <main className="relative z-10">
        <Hero />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
        <About />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
        <Skills />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
        <Experience />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
        <Projects />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
        <Education />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
        <Certifications />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
