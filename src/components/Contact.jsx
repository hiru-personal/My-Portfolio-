import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Contact() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactLinks = [
    {
      label: 'Email',
      value: 'hiruni.dissanayake@example.com',
      href: 'mailto:hiruni.dissanayake@example.com',
      gradient: 'from-ba-blue to-ba-blue-dark',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/hirunidissanayake',
      href: 'https://linkedin.com/in/hirunidissanayake',
      gradient: 'from-ba-blue-dark to-ba-blue',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Calendly Consultation',
      value: 'calendly.com/hiruni-d',
      href: 'https://calendly.com',
      gradient: 'from-ba-pink-dark to-ba-pink',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const inputClasses = (field) =>
    `w-full px-5 py-4 rounded-2xl border bg-ba-white/50 dark:bg-ba-dark/40 font-inter text-sm text-ba-dark dark:text-ba-white placeholder:text-ba-dark/30 dark:placeholder:text-ba-light/30 transition-all duration-500 outline-none ${
      focused === field
        ? 'border-ba-blue dark:border-ba-blue-light bg-ba-white dark:bg-ba-dark shadow-lg shadow-ba-blue/10 dark:shadow-ba-blue/5'
        : 'border-ba-blue/25 dark:border-white/10 hover:border-ba-blue/40'
    }`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-ba-blue to-ba-pink rounded-full" />
            <p className="font-poppins text-sm font-semibold text-ba-blue dark:text-ba-blue-light uppercase tracking-[0.2em]">
              Get In Touch
            </p>
          </div>
          <h2 className="font-poppins text-4xl sm:text-5xl font-extrabold text-ba-dark dark:text-ba-white">
            Connect With Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <p className="reveal font-inter text-ba-dark/70 dark:text-ba-light/70 text-base leading-relaxed">
              If you are a recruiter looking for an analytical mind to drive enterprise projects, or a leader seeking to optimize business workflows, let's establish contact.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group flex items-center gap-5 p-5 rounded-3xl glass-panel glass-card-hover"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-poppins text-[10px] font-bold text-ba-dark/40 dark:text-ba-light/40 uppercase tracking-[0.15em] mb-0.5">
                      {link.label}
                    </p>
                    <p className="font-inter text-sm font-semibold text-ba-dark dark:text-ba-white group-hover:text-ba-blue dark:group-hover:text-ba-blue-light transition-colors duration-300">
                      {link.value}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 ml-auto text-ba-dark/20 dark:text-ba-light/20 group-hover:text-ba-blue dark:group-hover:text-ba-blue-light transition-all duration-500 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal space-y-4"
          >
            <div className="glass-panel rounded-3xl p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block font-poppins text-[10px] font-bold text-ba-dark/50 dark:text-ba-light/50 uppercase tracking-[0.15em] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                  className={inputClasses('name')}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-poppins text-[10px] font-bold text-ba-dark/50 dark:text-ba-light/50 uppercase tracking-[0.15em] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                  className={inputClasses('email')}
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-poppins text-[10px] font-bold text-ba-dark/50 dark:text-ba-light/50 uppercase tracking-[0.15em] mb-2">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  className={`${inputClasses('message')} resize-none`}
                  placeholder="Describe your project, timeline, or open role..."
                />
              </div>

              <button
                type="submit"
                className={`group relative w-full font-poppins font-bold text-xs uppercase tracking-wider py-4 rounded-2xl overflow-hidden transition-all duration-500 ${
                  submitted
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-ba-blue text-white shadow-md hover:bg-ba-blue-dark hover:-translate-y-0.5'
                }`}
              >
                {!submitted && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? '✓ Communication Sent' : 'Send RFP / Inquiry'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
