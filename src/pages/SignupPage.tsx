import React from 'react';
import './SignupPage.css';
import { SignupForm } from '../components/signup';
import { SupportEmail } from '../components/common';
import signupImage from '../assets/signup.png';

interface SignupPageProps {
    onNavigateToLogin?: () => void;
    onSignupSuccess?: (data: any) => void;
    onBack?: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigateToLogin, onSignupSuccess, onBack }) => {
    const handleSubmit = (data: {
        FullName: string;
        SchoolName: string;
        email: string;
        phoneNumber: string;
        countryCode: string;
    }) => {
        console.log('Signup form submitted:', data);
        if (onSignupSuccess) {
            onSignupSuccess(data);
        }
    };

    // const handleBack = () => {
    //     window.history.back();
    // };

    const handleGoogleSignup = () => {
        console.log('Google signup clicked');
        // Handle Google OAuth
    };

    const handleFacebookSignup = () => {
        console.log('Facebook signup clicked');
        // Handle Facebook OAuth
    };

    const handleAppleSignup = () => {
        console.log('Apple signup clicked');
        // Handle Apple OAuth
    };

    return (
        <div className="signup-page">
            <div className="signup-page__form-section">
                <div className="signup-page__form-container">
                    <SignupForm
                        onSubmit={handleSubmit}
                        onBack={onBack}
                        onLogin={onNavigateToLogin}
                        onGoogleSignup={handleGoogleSignup}
                        onFacebookSignup={handleFacebookSignup}
                        onAppleSignup={handleAppleSignup}
                    />
                </div>
                <div className="signup-page__support">
                    <SupportEmail />
                </div>
            </div>

            <div className="signup-page__image-section">
                <div className="signup-page__image-container">
                    <img
                        src={signupImage}
                        alt="Students and teachers - Simplify Administration, Amplify Learning"
                        className="signup-page__image"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

