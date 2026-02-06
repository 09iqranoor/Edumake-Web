// components/PageHeader.tsx
import React from 'react';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  onButtonClick?: () => void;
  buttonVariant?: 'primary' | 'secondary' | 'outline';
  showButton?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  buttonText,
  buttonIcon,
  onButtonClick,
  buttonVariant = 'primary',
  showButton = true
}) => {
  const getButtonClass = () => {
    switch (buttonVariant) {
      case 'secondary':
        return 'page-header-btn-secondary';
      case 'outline':
        return 'page-header-btn-outline';
      default:
        return 'page-header-btn-primary';
    }
  };

  return (
    <div className="page-header-container">
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-header-title">{title}</h1>
          {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        </div>
        
        {showButton && buttonText && (
          <button 
            className={`page-header-btn ${getButtonClass()}`}
            onClick={onButtonClick}
            type="button"
          >
            {buttonIcon && <div className="page-header-btn-icon">{buttonIcon}</div>}
            <span className="page-header-btn-text">{buttonText}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PageHeader;