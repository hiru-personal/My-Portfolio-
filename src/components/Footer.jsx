import React from 'react';

function Footer() {
  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hiruni-dissanayake-2a7a65396?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:hirunidissanayake116@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#09090D] text-white/70 overflow-hidden">
      {/* Subtle purple gradient border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Monogram & Description */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="font-poppins text-lg font-extrabold tracking-tight text-white hover:text-brand-purple transition-colors duration-300"
            >
              H. DISSANAYAKE
            </a>
            <p className="font-inter text-xs text-white/40 mt-1.5 font-medium uppercase tracking-wider">
              Business Analyst • Enterprise Solutions
            </p>
          </div>

          {/* Middle: Professional Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-[18px] bg-white/5 border border-white/10 text-white/50 hover:text-brand-purple hover:bg-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Right Side: Live URL & Copyright details */}
          <div className="text-center md:text-right space-y-1.5">
            <a
              href="https://hiruni-dissanayake-portfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins text-xs font-semibold text-brand-purple hover:text-brand-purple-secondary transition-colors inline-flex items-center gap-1.5"
            >
              <span>hiruni-dissanayake-portfolio.netlify.app</span>
              <svg className="w-3 h-3 text-brand-purple" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <p className="font-inter text-xs text-white/40">
              © {new Date().getFullYear()} Hiruni Dissanayake. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom micro-credits with Last Modified tag */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/40 tracking-wider font-semibold uppercase">
          <span className="flex items-center gap-1.5">
            Framework: <span className="text-brand-purple-secondary font-bold">React + Vite</span>
          </span>
          <span className="hidden sm:inline text-white/10">•</span>
          <span className="flex items-center gap-1.5 text-emerald-400/90 font-mono text-[11px] normal-case">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Last Modified: July 22, 2026
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
