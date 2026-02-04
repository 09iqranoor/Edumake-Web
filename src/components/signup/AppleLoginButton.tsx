import React from 'react';

interface AppleLoginButtonProps {
    onClick?: () => void;
}

const AppleLoginButton: React.FC<AppleLoginButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="social-button"
            aria-label="Sign up with Apple"
        >
            <div className="social-button__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.05 20.28C16.07 21.23 15 21.08 13.97 20.63C12.88 20.17 11.88 20.15 10.73 20.63C9.29 21.25 8.53 21.07 7.67 20.28C2.79 15.25 3.51 7.59 9.05 7.31C10.4 7.38 11.34 8.05 12.13 8.11C13.31 7.87 14.44 7.18 15.71 7.27C17.22 7.39 18.36 7.99 19.12 9.07C15.98 10.94 16.72 15.05 19.58 16.2C18.97 17.82 18.17 19.42 17.04 20.29L17.05 20.28ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3C16.06 5.58 13.43 7.5 12.03 7.25Z" fill="#333333" />
                </svg>
            </div>
        </button>
    );
};

export default AppleLoginButton;
