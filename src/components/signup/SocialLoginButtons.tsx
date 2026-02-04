import React from 'react';
import './SocialLoginButtons.css';
import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';
import AppleLoginButton from './AppleLoginButton';

interface SocialLoginButtonsProps {
    onGoogleLogin?: () => void;
    onFacebookLogin?: () => void;
    onAppleLogin?: () => void;
    className?: string;
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({
    onGoogleLogin,
    onFacebookLogin,
    onAppleLogin,
    className = '',
}) => {
    return (
        <div className={`social-login-buttons ${className}`}>
            <GoogleLoginButton onClick={onGoogleLogin} />
            <FacebookLoginButton onClick={onFacebookLogin} />
            <AppleLoginButton onClick={onAppleLogin} />
        </div>
    );
};

export default SocialLoginButtons;
