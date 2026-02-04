import React, { useState } from 'react';
import './SigninPage.css';
import { Button, InputField, FormHeading, Checkbox, BackButton } from '../components/ui';
import { SocialLoginButtons } from '../components/signup';
import { SupportEmail } from '../components/common';
import signupImage from '../assets/signin.png';

import { AlertSuccess } from '../components/signin';

interface SigninPageProps {
    onNavigateToSignup?: () => void;
    onLoginSuccess?: (data: any) => void;
    successMessage?: string;
    onCloseSuccessAlert?: () => void;
    onForgotPassword?: () => void;
    onBack?: () => void;
}

const SigninPage: React.FC<SigninPageProps> = ({
    onNavigateToSignup,
    onLoginSuccess,
    successMessage,
    onCloseSuccessAlert,
    onForgotPassword,
    onBack,
}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            rememberMe: checked,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
        if (onLoginSuccess) {
            onLoginSuccess(formData);
        }
    };

    const handleGoogleLogin = () => console.log('Google login');
    const handleFacebookLogin = () => console.log('Facebook login');
    const handleAppleLogin = () => console.log('Apple login');

    return (
        <div className="signin-page">
            {/* Image Section - Left Side */}
            <div className="signin-page__image-section">
                <div className="signin-page__image-container">
                    <img
                        src={signupImage}
                        alt="Students and teachers - Simplify Administration, Amplify Learning"
                        className="signin-page__image"
                    />
                </div>
            </div>

            {/* Form Section - Right Side */}
            <div className="signin-page__form-section">
                <div className="signin-page__form-container">
                    <div className="signin-page__header">
                        <BackButton onClick={onBack} />
                        <FormHeading
                            title="Welcome Back"
                            subtitle="Welcome back! Please enter your details."
                        />
                    </div>

                    <div className="signin-page__content">
                        {successMessage && (
                            <div style={{ width: '100%', marginBottom: '24px' }}>
                                <AlertSuccess
                                    title="Success"
                                    message={successMessage}
                                    onClose={onCloseSuccessAlert}
                                />
                            </div>
                        )}
                        <form className="signin-page__form" onSubmit={handleSubmit}>
                            <InputField
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange('email')}
                                required
                            />

                            <InputField
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleInputChange('password')}
                                required
                            />

                            <div className="signin-page__options">
                                <Checkbox
                                    label="Remember for 30 days"
                                    checked={formData.rememberMe}
                                    onChange={handleCheckboxChange}
                                    className="signin-page__remember-me"
                                />
                                <Button variant="link" onClick={onForgotPassword} className="signin-page__forgot-password">
                                    Forgot password?
                                </Button>
                            </div>

                            <div className="signin-page__actions">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    fullWidth
                                >
                                    Sign in
                                </Button>

                                <div className="signin-page__divider">
                                    <span className="signin-page__divider-line"></span>
                                    <span className="signin-page__divider-text">OR</span>
                                    <span className="signin-page__divider-line"></span>
                                </div>

                                <SocialLoginButtons
                                    onGoogleLogin={handleGoogleLogin}
                                    onFacebookLogin={handleFacebookLogin}
                                    onAppleLogin={handleAppleLogin}
                                />

                                <div className="signin-page__signup-link">
                                    <span className="signin-page__signup-text">Don't have an account?</span>
                                    <Button variant="link" onClick={onNavigateToSignup}>
                                        Sign up
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="signin-page__support">
                    <SupportEmail />
                </div>
            </div>
        </div>
    );
};

export default SigninPage;
