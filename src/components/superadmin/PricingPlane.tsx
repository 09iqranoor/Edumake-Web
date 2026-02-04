// PricingPlans.tsx
import React from 'react';
import './PricingPlane.css';

const PricingPlane: React.FC = () => {
  return (
    <div className="pricing-plans-container">
      {/* Basic Plan */}
      <div className="plan-card basic-plan">
        <div className="plan-header">
          <h3 className="plan-title">Basic</h3>
          <div className="plan-subtitle">Monthly Charge</div>
          <div className="plan-price">$14.99</div>
        </div>
        
        <div className="plan-divider"></div>
        
        <div className="plan-features">
          <div className="plan-feature">Free Setup</div>
          <div className="plan-feature">20 User Connection</div>
          <div className="plan-feature">Bandwidth Limit 10 GB</div>
        </div>
        
        <div className="plan-divider"></div>
        
        <div className="plan-info">
          <button className="edit-plan-btn">
            Edit Plan
          </button>
          <div className="schools-count">
            <span>Schools on this plan</span>
            <div className="count-badge">123</div>
          </div>
        </div>
      </div>

      {/* Standard Plan */}
      <div className="plan-card standard-plan">
        <div className="plan-header">
          <h3 className="plan-title">Standard</h3>
          <div className="plan-subtitle">Monthly Charge</div>
          <div className="plan-price">$49.99</div>
        </div>
        
        <div className="plan-divider"></div>
        
        <div className="plan-features">
          <div className="plan-feature">Free Setup</div>
          <div className="plan-feature">20 User Connection</div>
          <div className="plan-feature">Bandwidth Limit 10 GB</div>
          <div className="plan-feature">Analytics Report</div>
          <div className="plan-feature">Public API Access</div>
          <div className="plan-feature disabled">Plugins Integration</div>
          <div className="plan-feature disabled">Custom Content Management</div>
        </div>
        
        <div className="plan-divider"></div>
        
        <div className="plan-info">
          <button className="edit-plan-btn">
            Edit Plan
          </button>
          <div className="schools-count">
            <span>Schools on this plan</span>
            <div className="count-badge">123</div>
          </div>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="plan-card premium-plan">
        <div className="plan-header">
          <h3 className="plan-title">Premium</h3>
          <div className="plan-subtitle">Monthly Charge</div>
          <div className="plan-price">$89.99</div>
        </div>
        
        <div className="plan-divider"></div>
        
        <div className="plan-features">
          <div className="plan-feature">Free Setup</div>
          <div className="plan-feature">20 User Connection</div>
          <div className="plan-feature">Bandwidth Limit 10 GB</div>
          <div className="plan-feature">Analytics Report</div>
          <div className="plan-feature">Public API Access</div>
          <div className="plan-feature">Plugins Integration</div>
          <div className="plan-feature">Custom Content Management</div>
        </div>
        
        <div className="plan-divider"></div>
        
        <div className="plan-info">
          <button className="edit-plan-btn">
            Edit Plan
          </button>
          <div className="schools-count">
            <span>Schools on this plan</span>
            <div className="count-badge">123</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlane;