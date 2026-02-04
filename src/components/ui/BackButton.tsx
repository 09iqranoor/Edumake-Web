import React from 'react';
import './BackButton.css';

interface BackButtonProps {
    onClick?: () => void;
    label?: string;
    className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
    onClick,
    label = 'Back',
    className = '',
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            window.history.back();
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`back-button ${className}`}
        >
            <svg
                className="back-button__icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.8333 10H4.16667M4.16667 10L10 15.8333M4.16667 10L10 4.16667"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="back-button__text">{label}</span>
        </button>
    );
};

export default BackButton;
