import React from 'react';
import './AlertSuccess.css';

interface AlertSuccessProps {
    title: string;
    message: string;
    onClose?: () => void;
}

const AlertSuccess: React.FC<AlertSuccessProps> = ({ title, message, onClose }) => {
    return (
        <div className="alert-success">
            <div className="alert-success__icon-wrapper">
                {/* Check Circle Icon */}
                <div className="alert-success__icon-outer"></div>
                <div className="alert-success__icon-inner"></div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="alert-success__icon-svg">
                    <path d="M10 18.3333C14.6025 18.3333 18.3334 14.6025 18.3334 9.99999C18.3334 5.39752 14.6025 1.66666 10 1.66666C5.39755 1.66666 1.66669 5.39752 1.66669 9.99999C1.66669 14.6025 5.39755 18.3333 10 18.3333Z" stroke="#079455" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="#079455" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="alert-success__content">
                <div className="alert-success__text-container">
                    <span className="alert-success__title">{title}</span>
                    <span className="alert-success__message">{message}</span>
                </div>
            </div>

            {onClose && (
                <button className="alert-success__close-btn" onClick={onClose}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L5 15M5 5L15 15" stroke="#079455" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default AlertSuccess;
