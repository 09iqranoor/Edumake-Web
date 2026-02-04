import { useState } from 'react'
import './App.css'
import { SignupPage, OtpVerificationPage, SetPasswordPage, SigninPage, ForgotPasswordPage, DashboardPage } from './pages';

import signinImage from './assets/signin.png';
import LandingPage from './pages/landingpage/LandingPage';

function App() {
  const [currentPage, setCurrentPage] = useState<
  'landing' | 'signup' | 'otp' | 'complete' | 'signin' | 'forgot-password' | 'otp-reset' | 'set-password-reset' | 'dashboard'
>('landing');
 const [userEmail, setUserEmail] = useState('');
  const [signinSuccessMessage, setSigninSuccessMessage] = useState('');
  const [otpError, setOtpError] = useState('');

  const handleNavigateToLogin = () => {
    setCurrentPage('signin');
  };

  const handleNavigateToSignup = () => {
    setCurrentPage('signup');
  };

  const handleSignupSuccess = (data: any) => {
    console.log('Signup success', data);
    setUserEmail(data.email || 'your email');
    setCurrentPage('otp');
  };

  const handleBackToSignup = () => {
    setCurrentPage('signup');
  };

  // const handleBackToOtp = () => {
  //   setCurrentPage('otp');
  // };

  const handleOtpVerified = (otp: string) => {
    console.log('OTP Verified:', otp);
    setCurrentPage('complete');
  };

  const handleProfileComplete = (data: any) => {
    console.log('Profile Completed:', data);
    setSigninSuccessMessage('Account created successfully!');
    setCurrentPage('signin');
  };

  const handleLoginSuccess = (data: any) => {
    console.log('Login Success:', data);
    // Navigate to dashboard on successful login
    setCurrentPage('dashboard');
  };

  // Forgot Password Flow Handlers
  const handleForgotPassword = () => {
    setCurrentPage('forgot-password');
  };

  const handleResetPassword = (email: string) => {
    console.log('Resetting password for:', email);
    setUserEmail(email);
    setCurrentPage('otp-reset');
    setOtpError('');
  };

  const handleOtpResetVerified = (otp: string) => {
    if (otp === '00000') { // Simulation of wrong OTP
      setOtpError("The code you entered is incorrect. Please try again.");
    } else {
      setOtpError('');
      setCurrentPage('set-password-reset');
    }
  };

  const handleSetPasswordResetComplete = (data: any) => {
    console.log('Password Reset Complete:', data);
    setSigninSuccessMessage('Password reset successfully. Please login with your new password.');
    setCurrentPage('signin');
  };

  const handleCloseSuccessAlert = () => {
    setSigninSuccessMessage('');
  };

  const handleBackToHome = () => {
    setCurrentPage('landing');
  };

  if (currentPage === 'landing') {
    return <LandingPage onLoginClick={ handleNavigateToLogin } />;
  }


  if (currentPage === 'dashboard') {
    return <DashboardPage />;
  }

  if (currentPage === 'signin') {
    return (
      <SigninPage
        onNavigateToSignup={handleNavigateToSignup}
        onLoginSuccess={handleLoginSuccess}
        onForgotPassword={handleForgotPassword}
        successMessage={signinSuccessMessage}
        onCloseSuccessAlert={handleCloseSuccessAlert}
        onBack={handleBackToSignup}
      />
    );
  }

  if (currentPage === 'forgot-password') {
    return (
      <ForgotPasswordPage
        onBack={handleBackToHome}
        onResetPassword={handleResetPassword}
      />
    );
  }

  if (currentPage === 'otp-reset') {
    return (
      <OtpVerificationPage
        email={userEmail}
        onBack={handleBackToHome}
        onVerify={handleOtpResetVerified}
        error={otpError}
        imageSrc={signinImage}
        imagePosition="left"
      />
    );
  }

  if (currentPage === 'set-password-reset') {
    return (
      <SetPasswordPage
        onBack={handleBackToHome}
        onComplete={handleSetPasswordResetComplete}
        imageSrc={signinImage}
        imagePosition="left"
        showTerms={false}
        buttonText="Reset Password"
        onLogin={handleNavigateToLogin}
      />
    );
  }

  if (currentPage === 'complete') {
    return (
      <SetPasswordPage
        onBack={handleBackToHome}
        onComplete={handleProfileComplete}
        onLogin={handleNavigateToLogin}
      />
    );
  }

  if (currentPage === 'otp') {
    return (
      <OtpVerificationPage
        onBack={handleBackToHome}
        email={userEmail}
        onVerify={handleOtpVerified}
      />
    );
  }

  return (
    <SignupPage
      onNavigateToLogin={handleNavigateToLogin}
      onSignupSuccess={handleSignupSuccess}
      onBack={handleBackToHome}
    />
  )
}

export default App
