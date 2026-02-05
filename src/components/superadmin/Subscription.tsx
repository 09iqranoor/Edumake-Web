import React, { useState, useEffect } from 'react';
import './Subscription.css';
import PlanEditModal from './PlanEditModel';


const AddIcon = () => (
  <img src="/icons/add.png" alt="addicon" />
);

const Subscription: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'standard' | 'premium' | null>(null);

  
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  const handleEditPlan = (planType: 'basic' | 'standard' | 'premium') => {
    setSelectedPlan(planType);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (data: any) => {
    console.log('Plan updated:', data);
    // Here you would update the plan data in your state/backend
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  // Mock plan data for each plan type
  const getPlanData = () => {
    switch (selectedPlan) {
      case 'basic':
        return {
          name: 'Basic',
          description: 'Basic plan for small schools',
          price: '$14.99',
          billingCycle: 'Monthly',
          features: ['Free Setup', '20 User Connection', 'Bandwidth Limit 10 GB']
        };
      case 'standard':
        return {
          name: 'Standard',
          description: 'Standard plan for medium schools',
          price: '$49.99',
          billingCycle: 'Monthly',
          features: [
            'Free Setup',
            '20 User Connection',
            'Bandwidth Limit 10 GB',
            'Analytics Report',
            'Public API Access',
            'Plugins Integration',
            'Custom Content Management'
          ]
        };
      case 'premium':
        return {
          name: 'Premium',
          description: 'Premium plan for large institutions',
          price: '$89.99',
          billingCycle: 'Monthly',
          features: [
            'Free Setup',
            '20 User Connection',
            'Bandwidth Limit 10 GB',
            'Analytics Report',
            'Public API Access',
            'Plugins Integration',
            'Custom Content Management'
          ]
        };
      default:
        return {
          name: '',
          description: '',
          price: '',
          billingCycle: 'Monthly',
          features: []
        };
    }
  };

  return (
    <>
      <div className={`subscription-container ${isModalOpen ? 'modal-open' : ''}`}>
        {/* Header Section */}
        <div className="subscription-header">
          <div className="header-left">
            <h1 className="page-title">Subscription Plans</h1>
            <p className="page-subtitle">Manage pricing plans and features for schools</p>
          </div>
          <button className="create-plan-btn">
            <AddIcon />
            <span>Create New Plan</span>
          </button>
        </div>

        {/* Pricing Plans Container */}
        <div className="pricing-plans-container">
          
          {/* Basic Plan Card */}
          <div className="plan-card basic-plan">
            <div className="plan-content">
              <h3 className="plan-title">Basic</h3>
              <p className="plan-subtitle">Monthly Charge</p>
              <div className="plan-price">$14.99</div>
              
              <div className="plan-divider"></div>
              
              <div className="plan-features">
                <div className="feature-item">Free Setup</div>
                <div className="feature-item">20 User Connection</div>
                <div className="feature-item">Bandwidth Limit 10 GB</div>
              </div>
              
              <div className="plan-divider"></div>
              
              <div className="plan-footer">
                <button 
                  className="edit-plan-btn" 
                  onClick={() => handleEditPlan('basic')}
                >
                  Edit Plan
                </button>
                <div className="schools-count">
                  <span>Schools on this plan</span>
                  <div className="count-badge">123</div>
                </div>
              </div>
            </div>
          </div>

          {/* Standard Plan Card */}
          <div className="plan-card standard-plan">
            <div className="plan-content">
              <h3 className="plan-title">Standard</h3>
              <p className="plan-subtitle">Monthly Charge</p>
              <div className="plan-price">$49.99</div>
              
              <div className="plan-divider"></div>
              
              <div className="plan-features">
                <div className="feature-item">Free Setup</div>
                <div className="feature-item">20 User Connection</div>
                <div className="feature-item">Bandwidth Limit 10 GB</div>
                <div className="feature-item">Analytics Report</div>
                <div className="feature-item">Public API Access</div>
                <div className="feature-item disabled">Plugins Integration</div>
                <div className="feature-item disabled">Custom Content Management</div>
              </div>
              
              <div className="plan-divider"></div>
              
              <div className="plan-footer">
                <button 
                  className="edit-plan-btn" 
                  onClick={() => handleEditPlan('standard')}
                >
                  Edit Plan
                </button>
                <div className="schools-count">
                  <span>Schools on this plan</span>
                  <div className="count-badge">123</div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Plan Card */}
          <div className="plan-card premium-plan">
            <div className="plan-content">
              <h3 className="plan-title">Premium</h3>
              <p className="plan-subtitle">Monthly Charge</p>
              <div className="plan-price">$89.99</div>
              
              <div className="plan-divider"></div>
              
              <div className="plan-features">
                <div className="feature-item">Free Setup</div>
                <div className="feature-item">20 User Connection</div>
                <div className="feature-item">Bandwidth Limit 10 GB</div>
                <div className="feature-item">Analytics Report</div>
                <div className="feature-item">Public API Access</div>
                <div className="feature-item">Plugins Integration</div>
                <div className="feature-item">Custom Content Management</div>
              </div>
              
              <div className="plan-divider"></div>
              
              <div className="plan-footer">
                <button 
                  className="edit-plan-btn" 
                  onClick={() => handleEditPlan('premium')}
                >
                  Edit Plan
                </button>
                <div className="schools-count">
                  <span>Schools on this plan</span>
                  <div className="count-badge">123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal/Overlay */}
      <PlanEditModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        planData={getPlanData()}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default Subscription;