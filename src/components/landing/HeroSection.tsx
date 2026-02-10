// components/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css';


interface HeroSectionProps {
  onLoginClick: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({ onLoginClick }) => {
  const languages = [
    { code: 'US-EN', label: 'US-ENG', flag: '/icons/flag.png' },
    { code: 'UK-EN', label: 'UK-ENG', flag: '/icons/flag.png' },
    { code: 'FR-FR', label: 'FR-FRA', flag: '/icons/flag.png' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleLanguageSelect = (lang: typeof languages[0]) => {
    setSelectedLanguage(lang);
    setDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileNavOpen]);


  useEffect(() => {
    const header = document.querySelector('.hero-header');

    const handleScroll = () => {
      if (window.scrollY > 20) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);







  return (
    <section className="hero">
      <div className="hero-container">

        {/* Header */}
        {/* Header */}
        <header className="hero-header">
          <div className="logo-container">
            <img src='/logo.png' alt="Edu-Make Logo" className="logo-img" />
            <span className="logo-text">Edu-Make</span>
          </div>

          {/* Hamburger for mobile */}
          <div className="menu-icon" onClick={toggleMobileNav}>
            <img
              src={mobileNavOpen ? "/icons/close.png" : "/icons/menu.png"}
              alt="menu"
            />
          </div>

          {/* Desktop Navigation & Actions */}
          <nav className={`main-nav ${mobileNavOpen ? 'open' : ''}`}>
            <div className="nav-links">
              <a href="#features" onClick={() => setMobileNavOpen(false)}>Features</a>
              <a href="#faq" onClick={() => setMobileNavOpen(false)}>FAQ</a>
              <a href="#pricing" onClick={() => setMobileNavOpen(false)}>Pricing</a>
              <a href="#why-choose-us" onClick={() => setMobileNavOpen(false)}>Why Choose Us</a>
            </div>

            {/* Mobile-only header actions inside the nav */}
            <div className="mobile-nav-actions">
              <a href="" className="login-link" onClick={(e) => { e.preventDefault(); setMobileNavOpen(false); onLoginClick(); }}>Login</a>
              {/* <button className="get-started-btn mobile-get-started" onClick={() => setMobileNavOpen(false)}>
                Get Started
              </button> */}

              <button className="btn-primary" onClick={() => setMobileNavOpen(false)}>Get Started</button>



              {/* Mobile Language Dropdown */}
              <div className="dropdown-container mobile-dropdown">
                <div className="dropdown-selected" onClick={toggleDropdown}>
                  <img src={selectedLanguage.flag} alt={`${selectedLanguage.label} Flag`} className="flag-icon" />
                  <span>{selectedLanguage.label}</span>
                  <img
                    src="/icons/dropdown_arrow.svg"
                    alt="arrow"
                    className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}
                  />
                </div>

                {dropdownOpen && (
                  <div className="dropdown-list mobile-dropdown-list">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        className="dropdown-item"
                        onClick={() => {
                          handleLanguageSelect(lang);
                          setMobileNavOpen(false);
                        }}
                      >
                        <img src={lang.flag} alt={`${lang.label} Flag`} className="flag-icon" />
                        <span>{lang.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Desktop-only header actions */}
          <div className='header-actions desktop-only'>

            <button className="login-link" onClick={() => { setMobileNavOpen(false); onLoginClick(); }}>
              Login
            </button>
            {/* <a href=""  onClick={onLoginClick} className="login-link">Login</a> */}
            <button className="btn-primary">Get Started</button>

            {/* Desktop Language Dropdown */}
            <div className="dropdown-container">
              <div className="dropdown-selected" onClick={toggleDropdown}>
                <img src={selectedLanguage.flag} alt={`${selectedLanguage.label} Flag`} className="flag-icon" />
                <span>{selectedLanguage.label}</span>
                <img
                  src="/icons/dropdown_arrow.svg"
                  alt="arrow"
                  className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}
                />
              </div>

              {dropdownOpen && (
                <div className="dropdown-list">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="dropdown-item"
                      onClick={() => handleLanguageSelect(lang)}
                    >
                      <img src={lang.flag} alt={`${lang.label} Flag`} className="flag-icon" />
                      <span>{lang.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>






        {/* Hero Content */}
        <div className="hero-content-wrapper">
          {/* Decorative Icons */}
          <img src="/icons/hero-icon1.png" alt="Decorative" className="hero-icon icon-top" />
          <img src="/icons/hero-icon2.png" alt="Decorative" className="hero-icon icon-right" />
          <img src="/icons/hero-icon3.png" alt="Decorative" className="hero-icon icon-left" />
          <img src="/icons/hero-icon4.png" alt="Decorative" className="hero-icon icon-bottom" />


          <div className="hero-content">
            <h1 className="hero-title">
              Empowering Schools & Simplifying <span>Educational Management</span>
            </h1>

            <p className="hero-subtitle">
              Transform the way your school runs with intuitive tools that reduce administrative stress, improve collaboration, and boost overall efficiency.
            </p>

            <div className="hero-cta">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Book A Demo</button>
            </div>

            <div className="trusted-by">
              <div className="trusted-avatars">
                <img src="/trustedpeople.png" alt="Trusted by schools" className="trusted-people" />
              </div>
              <div className="trusted-text">
                Trusted by over <span className="highlight">100+</span><br />
                <span>school management</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Mockup */}
        <div className="desktop-mockup">
          <div className='icon-desktop'>
            <img src="icons/Group22.png" alt="" /></div>
          <img src="/Desktop.png" alt="Dashboard Mockup" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;