import React, { useState } from 'react';
import './OtpVerificationPage.css';
import { Button, ProgressBar, BackButton, FormHeading, OtpInput } from '../components/ui';
import { SupportEmail } from '../components/common';
import signupImage from '../assets/signup.png';

import { AlertError } from '../components/signin';

interface OtpVerificationPageProps {
    onBack?: () => void;
    onVerify?: (otp: string) => void;
    onResend?: () => void;
    email?: string;
    error?: string;
    imageSrc?: string;
    imagePosition?: 'left' | 'right';
}

const OtpVerificationPage: React.FC<OtpVerificationPageProps> = ({
    onBack,
    onVerify,
    onResend,
    email = 'your email',
    error,
    imageSrc = signupImage,
    imagePosition = 'right',
}) => {
    const [otp, setOtp] = useState('');

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            window.history.back();
        }
    };

    const handleVerify = () => {
        if (onVerify) {
            onVerify(otp);
        } else {
            console.log('Verifying OTP:', otp);
        }
    };

    const handleResend = () => {
        if (onResend) {
            onResend();
        } else {
            console.log('Resending code...');
        }
    };

    return (
        <div className="otp-page" style={{ flexDirection: imagePosition === 'left' ? 'row-reverse' : 'row' }}>
            <div className="otp-page__form-section">
                <div className="otp-page__form-container">
                    <div className="otp-page__header">
                        <BackButton onClick={handleBack} />
                        <FormHeading
                            title="Verify it's you"
                            subtitle={`Enter a 5-digit code we’ve sent to ${email} associated with your account.`}
                        />
                    </div>

                    <div className="otp-page__content">
                        {error && (
                            <div className="otp-page__error-container" style={{ width: '100%', marginBottom: '16px' }}>
                                <AlertError
                                    title="That code wasn't valid."
                                    message={error}
                                />
                            </div>
                        )}

                        {/* Step 2 active means index 0 and 1 are highlighted (first 2 segments) */}
                        <ProgressBar steps={3} currentStep={2} />

                        <div className="otp-page__input-section">
                            <OtpInput
                                length={5}
                                value={otp}
                                onChange={setOtp}
                            />
                        </div>

                        <div className="otp-page__actions">
                            <Button
                                variant="primary"
                                fullWidth
                                onClick={handleVerify}
                                disabled={otp.length !== 5}
                            >
                                Verify
                            </Button>

                            <div className="otp-page__resend">
                                <span className="otp-page__resend-text">Didn't receive code?</span>
                                <Button variant="link" onClick={handleResend}>
                                    Resend code
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="otp-page__support">
                    <SupportEmail />
                </div>
            </div>

            <div className="otp-page__image-section">
                <div className="otp-page__image-container">
                    <img
                        src={imageSrc}
                        alt="Students and teachers - Simplify Administration, Amplify Learning"
                        className="otp-page__image"
                    />
                </div>
            </div>
        </div>
    );
};

export default OtpVerificationPage;
