import React from 'react';
import './Badge.css';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
    size?: 'small' | 'medium';
    icon?: React.ReactNode;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'neutral',
    size = 'medium',
    icon,
    className = ''
}) => {
    return (
        <span className={`badge badge--${variant} badge--${size} ${className}`}>
            {icon && <span className="badge__icon">{icon}</span>}
            <span className="badge__text">{children}</span>
        </span>
    );
};

export default Badge;
