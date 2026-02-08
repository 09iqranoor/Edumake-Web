import React, { useRef, useState, useEffect } from 'react';
import './WhyChooseUs.css';
import SectionBadge from './SectionBadge';
import choose1 from '../../assets/whychooseus/choose_1.svg';
import choose2 from '../../assets/whychooseus/choose_2.svg';
import choose3 from '../../assets/whychooseus/choose_3.svg';
import choose4 from '../../assets/whychooseus/choose_4.svg';
import arrowLeft from '../../assets/whychooseus/arrowleft.png';
import arrowRight from '../../assets/whychooseus/arrowright.png';

const chooseImages = [choose1, choose2, choose3, choose4];


const WhyChooseUS: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollLeft = () => {
    if (!cardsRef.current) return;
    const cardWidth = cardsRef.current.children[0]?.clientWidth || 280;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    cardsRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    if (!cardsRef.current) return;
    const cardWidth = cardsRef.current.children[0]?.clientWidth || 280;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    cardsRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="why-choose-us" className="edu-section">
      <div className="edu-header">
        <SectionBadge text="About Edu-make" logo="/images/edu-make-logo.png" />
        <h2>Why Choose Edu-Make</h2>
        <p>
          Empowering educators, students, and parents with tools that truly make a difference.
        </p>
      </div>

      {/* Cards Section */}
      <div className="carousel-wrapper">
        <div className="edu-images-container" ref={cardsRef}>
          {chooseImages.map((img, index) => (
            <img key={index} src={img} alt={`Why Choose Us ${index + 1}`} className="edu-choose-image" />
          ))}
        </div>

        {/* Arrow buttons for mobile ONLY */}
        {isMobile && (
          <div className="carousel-controls">
            <button
              onClick={scrollLeft}
              aria-label="Previous card"
              className="arrow-btn"
            >
              <img src={arrowLeft} alt="Previous" className="arrow-img" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next card"
              className="arrow-btn"
            >
              <img src={arrowRight} alt="Next" className="arrow-img" />
            </button>
          </div>
        )}
      </div>
      {/* Stats Section */}
      <div className="edu-stats-container">
        <div className="edu-stat-item">
          <div className="edu-stat-top">
            <div className="edu-stat-box blue"></div>
            <span className="edu-stat-value">2x</span>
          </div>
          <p className="edu-stat-label">Faster Accuracy</p>
        </div>

        <div className="edu-stat-divider"></div>

        <div className="edu-stat-item">
          <div className="edu-stat-top">
            <div className="edu-stat-box orange"></div>
            <span className="edu-stat-value">70% Increase</span>
          </div>
          <p className="edu-stat-label">Parent Involvement</p>
        </div>

        <div className="edu-stat-divider"></div>

        <div className="edu-stat-item">
          <div className="edu-stat-top">
            <div className="edu-stat-box red"></div>
            <span className="edu-stat-value">50% Reduction</span>
          </div>
          <p className="edu-stat-label">Administrative Workload</p>
        </div>

        <div className="edu-stat-divider"></div>

        <div className="edu-stat-item">
          <div className="edu-stat-top">
            <div className="edu-stat-box green"></div>
            <span className="edu-stat-value">35% Improvement</span>
          </div>
          <p className="edu-stat-label">Staff Productivity</p>
        </div>
      </div>
    </section>

  );
};

export default WhyChooseUS;