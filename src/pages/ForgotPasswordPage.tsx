import React, { useState } from 'react';
import './ForgotPasswordPage.css';
import { Button, InputField, ProgressBar, BackButton, FormHeading } from '../components/ui';
import { SupportEmail } from '../components/common';
import signupImage from '../assets/signin.png'; // Reuse signin image

interface ForgotPasswordPageProps {
    onBack?: () => void;
    onResetPassword?: (email: string) => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
    onBack,
    onResetPassword,
}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onResetPassword) {
            onResetPassword(email);
        }
    };

    return (
        <div className="forgot-password-page">
            {/* Image Section - Left Side */}
            <div className="forgot-password-page__image-section">
                <div className="forgot-password-page__image-container">
                    <img
                        src={signupImage}
                        alt="Students and teachers - Simplify Administration, Amplify Learning"
                        className="forgot-password-page__image"
                    />
                </div>
            </div>

            {/* Form Section - Right Side */}
            <div className="forgot-password-page__form-section">
                <div className="forgot-password-page__form-container">
                    <div className="forgot-password-page__header">
                        <BackButton onClick={onBack} />
                        <FormHeading
                            title="Forgot Password?"
                            subtitle="No worries, we'll send you reset instructions."
                        />
                    </div>

                    <div className="forgot-password-page__content">
                        <ProgressBar steps={3} currentStep={1} />

                        <form className="forgot-password-page__form" onSubmit={handleSubmit}>
                            <InputField
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <div className="forgot-password-page__actions">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    fullWidth
                                >
                                    Reset Password
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="forgot-password-page__support">
                    <SupportEmail />
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
