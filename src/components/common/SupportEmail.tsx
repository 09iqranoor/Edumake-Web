import React from 'react';
import './SupportEmail.css';

interface SupportEmailProps {
    email?: string;
    className?: string;
}

const SupportEmail: React.FC<SupportEmailProps> = ({
    email = 'support@edumake.com',
    className = '',
}) => {
    return (
        <a href={`mailto:${email}`} className={`support-email ${className}`}>
            <img
                src="/icons/mail_icon.svg"
                alt="Email"
                className="support-email__icon"
            />
            <span className="support-email__text">{email}</span>
        </a>
    );
};

export default SupportEmail;
