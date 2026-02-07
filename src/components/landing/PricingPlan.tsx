import React, { useState } from "react";
import "./PricingPlan.css";
import SectionBadge from "./SectionBadge";

const PricingPlan: React.FC = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="pricing-section">
      {/* Header */}
      <div className="pricing-header">
      <SectionBadge
  text="Pricing Plan"
  logo="/images/edu-make-logo.png"
/>

        <h2>Choose The Perfect Plan</h2>
        <p>
          Select a plan that works for you and enjoy full access to
          EduMake’s powerful features.
        </p>

        {/* Toggle */}
        <div className="pricing-toggle">
          <span className={!yearly ? "active" : ""}>Pay Monthly</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={yearly}
              onChange={() => setYearly(!yearly)}
            />
            <span className="slider"></span>
          </label>
          <span className={yearly ? "active" : ""}>Pay Yearly</span>
        </div>
      </div>

      {/* Cards */}
      <div className="pricing-cards">
        {/* Basic */}
        <div className="pricing-card">
          <div className="plan-icon"><img src="/icons/pricing-icon1.png" alt=""  /></div>
          <h4>Basic Plan</h4>
          <h3>$10–15<span>/month</span></h3>
          <p className="billing">Billed Monthly</p>

          <ul>
            <li>Access to Core Course Library</li>
            <li>Basic Features</li>
            <li>Ideal for Casual Learners</li>
          </ul>

          <button>Get Started</button>
        </div>

        {/* Standard */}
        <div className="pricing-card featured">
          <div className="plan-icon"><img src="/icons/pricing-icon2.png" alt=""  /></div>
          <h4>Standard Plan</h4>
          <h3>$20–25<span>/month</span></h3>
          <p className="billing">Billed Monthly</p>

          <ul>
            <li>Full access to most courses</li>
            <li>Progress Tracking</li>
            <li>Community Forum</li>
            <li>Moderate Support</li>
            <li>Good for Regular Learners</li>
          </ul>

          <button>Get Started</button>
        </div>

        {/* Premium */}
        <div className="pricing-card">
          <div className="plan-icon"><img src="/icons/pricing-icon2.png" alt=""  /></div>
          <h4>Premium Plan</h4>
          <h3>$35–50<span>/month</span></h3>
          <p className="billing">Billed Monthly</p>

          <ul>
            <li>All content unlocked</li>
            <li>Advanced Courses</li>
            <li>1-on-1 Support / Tutoring</li>
            <li>Certificates</li>
            <li>Priority Support</li>
            <li>Community Forum</li>
            
          </ul>

          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
