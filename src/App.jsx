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
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return userPrefersDark ? 'dark' : 'light';
    }
    return 'light';
  });

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle Theme Switching
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-ba-light dark:bg-ba-dark text-ba-dark dark:text-ba-light overflow-hidden relative noise-overlay">
      {/* ─── Premium Animated Glow Background ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Pink Glowing Blob */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-ba-pink/35 dark:bg-ba-pink/15 blur-[120px] animate-glow-pink" />

        {/* Professional Blue Glowing Blob */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-ba-blue/30 dark:bg-ba-blue/12 blur-[120px] animate-glow-blue" />

        {/* Floating Blurred Glass Shapes */}
        <div className="absolute top-[25%] left-[5%] w-32 h-32 rounded-full glass-panel backdrop-blur-md animate-float-1 hidden md:block" />
        <div className="absolute bottom-[35%] right-[8%] w-48 h-48 rounded-full glass-panel backdrop-blur-lg animate-float-2 hidden md:block" />
        <div className="absolute top-[65%] left-[8%] w-24 h-24 rounded-full glass-panel backdrop-blur-sm animate-float-2 hidden lg:block" />
      </div>

      {/* ─── Sticky Header / Navigation ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'glass-nav shadow-lg shadow-black/[0.02] py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group font-poppins text-lg md:text-xl font-extrabold tracking-tight text-ba-dark dark:text-ba-white transition-colors duration-300"
          >
            <span>D.H.HIRUNI DISSANAYAKE</span>
            <span className="inline-block w-2.5 h-2.5 ml-1 rounded-full bg-gradient-to-r from-ba-blue to-ba-pink animate-pulse" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`relative font-poppins text-xs font-semibold uppercase tracking-wider px-3 py-2 rounded-lg transition-all duration-300 ${isActive
                        ? 'text-ba-blue dark:text-ba-blue-light bg-ba-blue/10 dark:bg-ba-blue/20'
                        : 'text-ba-dark/65 dark:text-ba-light/65 hover:text-ba-blue dark:hover:text-ba-blue-light hover:bg-ba-blue/5'
                        }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Light/Dark Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass-panel text-ba-dark dark:text-ba-white hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Toggle display theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 transition-transform duration-500 hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 transition-transform duration-500 hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Actions (Toggle + Menu Button) */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-panel text-ba-dark dark:text-ba-white"
              aria-label="Toggle display theme"
            >
              {theme === 'light' ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-[5px] p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`block w-6 h-[2px] bg-ba-dark dark:bg-ba-white rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
              />
              <span
                className={`block w-6 h-[2px] bg-ba-dark dark:bg-ba-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
              />
              <span
                className={`block w-6 h-[2px] bg-ba-dark dark:bg-ba-white rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
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
          <ul className="glass-panel mx-4 rounded-3xl p-6 flex flex-col gap-2 shadow-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block font-poppins text-sm font-semibold uppercase tracking-wider px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                      ? 'text-ba-blue dark:text-ba-blue-light bg-ba-blue/10 dark:bg-ba-blue/20'
                      : 'text-ba-dark/70 dark:text-ba-light/70 hover:text-ba-blue hover:bg-ba-blue/5'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ─── Portfolio Main Layout Sections ─── */}
      <main className="relative z-10">
        <Hero />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-ba-blue/15 to-transparent dark:via-white/5" />
        <About />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-ba-blue/15 to-transparent dark:via-white/5" />
        <Skills />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-ba-blue/15 to-transparent dark:via-white/5" />
        <Experience />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-ba-blue/15 to-transparent dark:via-white/5" />
        <Projects />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-ba-blue/15 to-transparent dark:via-white/5" />
        <Education />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-ba-blue/15 to-transparent dark:via-white/5" />
        <Certifications />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-ba-blue/15 to-transparent dark:via-white/5" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
