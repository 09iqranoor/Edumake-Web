import React, { useState } from 'react';
import './SetPasswordPage.css';
import { Button, InputField, ProgressBar, BackButton, FormHeading, Checkbox } from '../components/ui';
import { SupportEmail } from '../components/common';
import signupImage from '../assets/signup.png';

interface SetPasswordPageProps {
    onBack?: () => void;
    onComplete?: (data: any) => void;
    imageSrc?: string;
    imagePosition?: 'left' | 'right';
    showTerms?: boolean;
    buttonText?: string;
    onLogin?: () => void;
}

const SetPasswordPage: React.FC<SetPasswordPageProps> = ({
    onBack,
    onComplete,
    imageSrc = signupImage,
    imagePosition = 'right',
    showTerms = true,
    buttonText = 'Create Account',
    onLogin,
}) => {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
        agreeTerms: false,
        agreeUpdates: false,
    });

    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handleCheckboxChange = (field: string) => (checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            [field]: checked,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        if (onComplete) {
            onComplete(formData);
        }
    };

    return (
        <div className="complete-profile-page" style={{ flexDirection: imagePosition === 'left' ? 'row-reverse' : 'row' }}>
            <div className="complete-profile-page__form-section">
                <div className="complete-profile-page__form-container">
                    <div className="complete-profile-page__header">
                        <BackButton onClick={onBack} />
                        <FormHeading
                            title="Set Password"
                            subtitle="Secure your account and agree to our terms to get started."
                        />
                    </div>

                    <div className="complete-profile-page__content">
                        {/* Step 3 active means all 3 segments highlighted */}
                        <ProgressBar steps={3} currentStep={3} />

                        <form className="complete-profile-page__form" onSubmit={handleSubmit}>
                            <InputField
                                label="Create Password"
                                type="password"
                                placeholder="Enter password..."
                                value={formData.password}
                                onChange={handleInputChange('password')}
                                required
                            />

                            <InputField
                                label="Confirm Password"
                                type="password"
                                placeholder="Confirm password..."
                                value={formData.confirmPassword}
                                onChange={handleInputChange('confirmPassword')}
                                required
                            />

                            {showTerms && (
                                <div className="complete-profile-page__checkboxes">
                                    <Checkbox
                                        checked={formData.agreeTerms}
                                        onChange={handleCheckboxChange('agreeTerms')}
                                        required
                                        label={
                                            <span>
                                                By clicking and creating an account, I agree to EduMake’s <a href="#">Term of Use</a> and <a href="#">Privacy Policy</a>
                                            </span>
                                        }
                                    />
                                </div>
                            )}

                            <div className="complete-profile-page__actions">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    fullWidth
                                    disabled={(!formData.agreeTerms && showTerms) || !formData.password}
                                >
                                    {buttonText}
                                </Button>

                                <div className="complete-profile-page__login-link">
                                    <span className="complete-profile-page__login-text">Already have an account?</span>
                                    <Button variant="link" onClick={onLogin}>
                                        Log in
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="complete-profile-page__support">
                    <SupportEmail />
                </div>
            </div>

            <div className="complete-profile-page__image-section">
                <div className="complete-profile-page__image-container">
                    <img
                        src={imageSrc}
                        alt="Students and teachers - Simplify Administration, Amplify Learning"
                        className="complete-profile-page__image"
                    />
                </div>
            </div>
        </div>
    );
};

export default SetPasswordPage;
