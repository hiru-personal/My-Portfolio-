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

  // Theme state: default to 'light' as requested by user
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme) return savedTheme;
      return 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Track mouse position for the subtle glowing cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-brand-dark-bg text-slate-900 dark:text-white bg-grid overflow-hidden relative noise-overlay transition-colors duration-300">
      {/* Subtle Mouse-Following Purple Glow */}
      <div className="mouse-glow" />

      {/* ─── Premium Animated Glow Background (5-Color Palette Ambient) ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Luminous Glow Top Left (Violet to Royal) */}
        <div className="absolute top-[-12%] left-[-10%] w-[65vw] h-[65vw] max-w-[800px] rounded-full bg-gradient-to-br from-brand-violet/20 via-brand-royal/15 to-transparent dark:from-brand-violet/15 dark:via-brand-royal/10 dark:to-transparent blur-[130px] animate-glow-purple" />

        {/* Luminous Glow Bottom Right (Royal to Sky) */}
        <div className="absolute bottom-[-12%] right-[-10%] w-[65vw] h-[65vw] max-w-[800px] rounded-full bg-gradient-to-tl from-brand-royal/20 via-brand-sky/15 to-transparent dark:from-brand-royal/15 dark:via-brand-sky/10 dark:to-transparent blur-[130px] animate-glow-purple" />

        {/* Cyan Accent Glow */}
        <div className="absolute top-[35%] right-[15%] w-[40vw] h-[40vw] max-w-[450px] rounded-full bg-gradient-to-bl from-brand-cyan/20 via-brand-sky/15 to-transparent dark:from-brand-cyan/10 dark:to-transparent blur-[120px] animate-glow-orange" />

        {/* Subtle Sky Accent Glow */}
        <div className="absolute top-[60%] left-[5%] w-[35vw] h-[35vw] max-w-[400px] rounded-full bg-brand-sky/15 dark:opacity-0 blur-[110px]" />

        {/* Floating Blurred Glass Shapes */}
        <div className="absolute top-[25%] left-[5%] w-32 h-32 rounded-[18px] glass-panel border border-brand-royal/20 backdrop-blur-md animate-float-1 hidden md:block" />
        <div className="absolute bottom-[35%] right-[8%] w-48 h-48 rounded-[18px] glass-panel border border-brand-royal/20 backdrop-blur-lg animate-float-2 hidden md:block" />
      </div>

      {/* ─── Sticky Header / Navigation (Distinct Palette Deep Indigo Color) ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'glass-nav py-3.5 shadow-xl shadow-brand-indigo/30'
          : 'bg-brand-indigo/95 backdrop-blur-md py-4 border-b border-brand-royal/30 shadow-lg shadow-brand-indigo/20'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-poppins group"
          >
            <div className="w-10 h-10 rounded-[18px] bg-gradient-to-tr from-brand-royal via-brand-violet to-brand-cyan flex items-center justify-center font-extrabold text-white text-base tracking-tight shadow-md shadow-brand-royal/40 transition-transform duration-300 group-hover:scale-105">
              HD
            </div>
            <span className="text-base md:text-lg font-bold tracking-tight text-white transition-colors duration-300">
              Hiruni Dissanayake
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href} className="relative py-2">
                    <a
                      href={link.href}
                      className={`font-poppins text-xs font-semibold uppercase tracking-wider px-3.5 py-2 transition-all duration-300 ${isActive
                        ? 'text-white font-bold'
                        : 'text-white/75 hover:text-white'
                        }`}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#34BAF7]" />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-brand-cyan hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm flex items-center justify-center cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                // Sun icon for dark mode
                <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                // Moon icon for light mode
                <svg className="w-4 h-4 text-brand-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Let's Connect Pill Button (Gradient from Royal -> Violet -> Cyan) */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-royal via-brand-violet to-brand-cyan hover:opacity-95 text-white font-poppins text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg shadow-brand-royal/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Let's Connect
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Mobile Actions Menu */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 border border-white/20 text-white"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-brand-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
              )}
            </button>

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
          <ul className="glass-panel mx-4 rounded-[18px] p-6 flex flex-col gap-2 shadow-2xl border border-brand-royal/30 bg-brand-indigo/98 text-white">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block font-poppins text-sm font-semibold uppercase tracking-wider px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                      ? 'text-white bg-brand-royal/30 border-l-4 border-brand-cyan font-bold'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
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
                className="flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-brand-royal via-brand-violet to-brand-cyan text-white font-poppins text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-all duration-300"
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
