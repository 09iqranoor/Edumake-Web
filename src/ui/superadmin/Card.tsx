import React from 'react';
import './Card.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'none' | 'small' | 'medium' | 'large';
    variant?: 'default' | 'bordered';
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = 'medium',
    variant = 'default'
}) => {
    return (
        <div className={`card card--${padding} card--${variant} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
