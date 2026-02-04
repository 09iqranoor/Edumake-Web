import React, { useState } from 'react';
import './PlaneEditModal.css';
import Button from '../ui/Button';



const CloseIcon = () => (
  <img  src="/icons/close.png" alt="close" />
);

const ArrowDownIcon = () => (
 <img  src="/icons/down-arrow.png" alt="downarrow" />
);

const AddIcon = () => (
 <img  src="/icons/add.png" alt="add" />
);

const RemoveIcon = () => (
  <img  src="/icons/remove.png" alt="close" />
);

const CrossIcon = () => (
  <img  src="/icons/close.png" alt="close" />
);

interface PlanEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  planData?: {
    name: string;
    description: string;
    price: string;
    billingCycle: string;
    features: string[];
  };
  onSubmit: (data: any) => void;
}

const PlanEditModal: React.FC<PlanEditModalProps> = ({ 
  isOpen, 
  onClose, 
  planData, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState({
    name: planData?.name || 'Basic',
    description: planData?.description || 'Brief description of the plan',
    price: planData?.price || '$14.99',
    billingCycle: planData?.billingCycle || 'Monthly',
    features: planData?.features || ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']
  });

  const [newFeature, setNewFeature] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleNewFeatureKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddFeature();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="plan-edit-overlay" onClick={handleBackdropClick}>
      <div 
        className="plan-edit-modal-inline" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="modal-close-btn-inline" onClick={onClose}>
          <CloseIcon />
        </button>

        {/* Modal Content */}
        <div className="modal-content-inline">
          {/* Header with Logo */}
          <div className="modal-header-inline">
            <div className="modal-logo-inline">
              
              <div className="logo-placeholder-inline">  <img  src="/logo.png" /> </div>
            </div>
            <div className="modal-title-section-inline">
              <h2 className="modal-title-inline">Add/Edit Plan</h2>
              <p className="modal-subtitle-inline">
                Configure plan details, pricing, and features
              </p>
            </div>
          </div>

          {/* Form with scrollable content area */}
          <form className="plan-form-inline" onSubmit={handleSubmit}>
            <div className="form-content">
              {/* Plan Name */}
              <div className="form-group-inline">
                <label className="form-label-inline">Plan Name</label>
                <div className="form-input-container-inline">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input-inline"
                    placeholder="Basic"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="form-group-inline">
                <label className="form-label-inline">Description</label>
                <div className="form-textarea-container-inline">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-textarea-inline"
                    placeholder="Brief description of the plan"
                  />
                </div>
              </div>

              {/* Price & Billing Cycle */}
              <div className="form-row-inline">
                <div className="form-group-inline half-width-inline">
                  <label className="form-label-inline">Price</label>
                  <div className="form-input-container-inline">
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="form-input-inline"
                      placeholder="$14.99"
                    />
                  </div>
                </div>

                <div className="form-group-inline half-width-inline">
                  <label className="form-label-inline">Billing Cycle</label>
                  <div className="select-container-inline">
                    <select
                      name="billingCycle"
                      value={formData.billingCycle}
                      onChange={(e) => setFormData(prev => ({ ...prev, billingCycle: e.target.value }))}
                      className="form-select-inline"
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Yearly">Yearly</option>
                      <option value="Quarterly">Quarterly</option>
                    </select>
                    <span className="select-arrow-inline">
                      <ArrowDownIcon />
                    </span>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="form-group-inline">
                <label className="form-label-inline">Features</label>
                
                {/* Existing Features List */}
                <div className="features-list-inline">
                  {formData.features.map((feature, index) => (
                    <div key={index} className="feature-item-inline">
                      <div className="feature-input-container-inline">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => {
                            const newFeatures = [...formData.features];
                            newFeatures[index] = e.target.value;
                            setFormData(prev => ({ ...prev, features: newFeatures }));
                          }}
                          className="feature-input-inline"
                          placeholder="Enter feature"
                        />
                      </div>
                      <button
                        type="button"
                        className="remove-feature-btn-inline"
                        onClick={() => handleRemoveFeature(index)}
                      >
                        <RemoveIcon />
                      </button>
                    </div>
                  ))}
                </div>

                {/* NEW: Add Feature Field with Cross Icon */}
                <div className="new-feature-container-inline">
                  <div className="new-feature-input-wrapper-inline">
                    <div className="feature-input-container-inline new-feature-input-inline">
                      <input
                        type="text"
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        onKeyPress={handleNewFeatureKeyPress}
                        className="feature-input-inline"
                        placeholder="Add new feature"
                      />
                    </div>
                  
                    <button
                      type="button"
                      className="new-feature-cross-btn-inline"
                      onClick={() => setNewFeature('')}
                    >
                      <CrossIcon />
                    </button>
                  </div>
                  
                  
                  
                </div>



                  <div className="new-feature-container-inline">
                  <div className="new-feature-input-wrapper-inline">
                    <div className="feature-input-container-inline new-feature-input-inline">
                      <input
                        type="text"
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        onKeyPress={handleNewFeatureKeyPress}
                        className="feature-input-inline"
                        placeholder="Add new feature"
                      />
                    </div>
                  
                    <button
                      type="button"
                      className="new-feature-cross-btn-inline"
                      onClick={() => setNewFeature('')}
                    >
                      <CrossIcon />
                    </button>
                  </div>
                  
                  
                  
                </div>




                 <div className="new-feature-container-inline">
                  <div className="new-feature-input-wrapper-inline">
                    <div className="feature-input-container-inline new-feature-input-inline">
                      <input
                        type="text"
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        onKeyPress={handleNewFeatureKeyPress}
                        className="feature-input-inline"
                        placeholder="Add new feature"
                      />
                    </div>
                  
                    <button
                      type="button"
                      className="new-feature-cross-btn-inline"
                      onClick={() => setNewFeature('')}
                    >
                      <CrossIcon />
                    </button>
                  </div>
                  
                  
                  
                </div>

                
              </div>
              
            </div>

             <Button
    type="button"
    variant="secondary"
    onClick={handleAddFeature}
    disabled={!newFeature.trim()}
    className="add-feature-btn-custom"
  >
    <AddIcon />
    <span style={{ marginLeft: '8px' }}>Add feature</span>
  </Button>

           
            <div className="form-actions-inline">
              <button
                type="button"
                className="cancel-btn-inline"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="submit-btn-inline"
              >
                Update Plan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlanEditModal;