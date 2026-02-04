import React, { useState } from 'react';
import './SignupForm.css';
import { Button, InputField, ProgressBar, BackButton, FormHeading } from '../ui';
import SocialLoginButtons from './SocialLoginButtons';
import PhoneInput from './PhoneInput';

interface SignupFormProps {
    onSubmit?: (data: SignupFormData) => void;
    onBack?: () => void;
    onLogin?: () => void;
    onGoogleSignup?: () => void;
    onFacebookSignup?: () => void;
    onAppleSignup?: () => void;
}

interface SignupFormData {
    FullName: string;
    SchoolName: string;
    email: string;
    phoneNumber: string;
    countryCode: string;
}

const SignupForm: React.FC<SignupFormProps> = ({
    onSubmit,
    onBack,
    onLogin,
    onGoogleSignup,
    onFacebookSignup,
    onAppleSignup,
}) => {
    const [formData, setFormData] = useState<SignupFormData>({
        FullName: '',
        SchoolName: '',
        email: '',
        phoneNumber: '',
        countryCode: '+234',
    });

    const handleInputChange = (field: keyof SignupFormData) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };

    const handlePhoneChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            phoneNumber: value,
        }));
    };

    const handleCountryCodeChange = (code: string) => {
        setFormData((prev) => ({
            ...prev,
            countryCode: code,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <div className="signup-form">
            <div className="signup-form__header">
                <BackButton onClick={onBack} />
                <FormHeading
                    title="Create an Account"
                    subtitle="Create your account to access powerful learning tools and real-time insights."
                />
            </div>

            <div className="signup-form__content">
                <ProgressBar steps={3} currentStep={1} />

                <form className="signup-form__form" onSubmit={handleSubmit}>
                    <InputField
                        label="Full Name"
                        placeholder="Enter full name..."
                        value={formData.FullName}
                        onChange={handleInputChange('FullName')}
                        name="FullName"
                        required
                    />

                    <InputField
                        label="School Name"
                        placeholder="Enter school name..."
                        value={formData.SchoolName}
                        onChange={handleInputChange('SchoolName')}
                        name="SchoolName"
                        required
                    />

                    <InputField
                        label="Email"
                        type="email"
                        placeholder="Enter email address..."
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        name="email"
                        required
                    />

                    <PhoneInput
                        label="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}
                        countryCode={formData.countryCode}
                        onCountryCodeChange={handleCountryCodeChange}
                        placeholder="Enter phone number..."
                        required
                    />

                    <div className="signup-form__actions">
                        <Button type="submit" variant="primary" fullWidth>
                            Get Started
                        </Button>

                        <div className="signup-form__divider">
                            <span className="signup-form__divider-line"></span>
                            <span className="signup-form__divider-text">OR</span>
                            <span className="signup-form__divider-line"></span>
                        </div>

                        <SocialLoginButtons
                            onGoogleLogin={onGoogleSignup}
                            onFacebookLogin={onFacebookSignup}
                            onAppleLogin={onAppleSignup}
                        />
                    </div>
                </form>

                <div className="signup-form__footer">
                    <span className="signup-form__footer-text">Already have an account?</span>
                    <Button variant="link" onClick={onLogin}>
                        Log in
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
