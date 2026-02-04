import React from 'react';
import './AlertError.css';

interface AlertErrorProps {
    title: string;
    message: string;
}

const AlertError: React.FC<AlertErrorProps> = ({ title, message }) => {
    return (
        <div className="alert-error">
            <div className="alert-error__icon-wrapper">
                {/* Alert Circle Icon */}
                <div className="alert-error__icon-outer"></div>
                <div className="alert-error__icon-inner"></div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="alert-error__icon-svg">
                    <path d="M10 6.66667V10M10 13.3333H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z" stroke="#EA4335" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="alert-error__content">
                <div className="alert-error__text-container">
                    <span className="alert-error__title">{title}</span>
                    <span className="alert-error__message">{message}</span>
                </div>
            </div>
        </div>
    );
};

export default AlertError;
