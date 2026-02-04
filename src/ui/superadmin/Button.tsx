import React from 'react';
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    disabled = false,
    onClick,
    type = 'button',
    className = '',
    icon,
    iconPosition = 'left'
}) => {
    return (
        <button
            type={type}
            className={`
        btn 
        btn--${variant} 
        btn--${size} 
        ${fullWidth ? 'btn--full-width' : ''} 
        ${className}
      `}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && iconPosition === 'left' && (
                <span className="btn__icon btn__icon--left">{icon}</span>
            )}
            <span className="btn__text">{children}</span>
            {icon && iconPosition === 'right' && (
                <span className="btn__icon btn__icon--right">{icon}</span>
            )}
        </button>
    );
};

export default Button;

























