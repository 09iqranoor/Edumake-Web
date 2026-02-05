// App.tsx -
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { SignupPage, SigninPage, ForgotPasswordPage, OtpVerificationPage, SetPasswordPage } from './pages';
import LandingPage from './pages/landingpage/LandingPage';
import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route 1: Landing Page */}
        <Route path="/" element={
          <LandingPage onLoginClick={() => window.location.href = '/signin'} />
        } />
        
        {/* Route 2: Signin Page */}
        <Route path="/signin" element={
          <SigninPage
            onNavigateToSignup={() => window.location.href = '/signup'}
            onLoginSuccess={() => window.location.href = '/dashboard'}
            onForgotPassword={() => window.location.href = '/forgot-password'}
            onBack={() => window.location.href = '/'}
          />
        } />
        
        {/* Route 3: Signup Page */}
        <Route path="/signup" element={
          <SignupPage
            onNavigateToLogin={() => window.location.href = '/signin'}
            onSignupSuccess={(data) => {
              console.log('Signup data:', data);
              window.location.href = '/otp-verification';
            }}
            onBack={() => window.location.href = '/'}
          />
        } />
        
        {/* Route 4: OTP Verification */}
        <Route path="/otp-verification" element={
          <OtpVerificationPage
            onBack={() => window.location.href = '/'}
            email="user@example.com" // You can pass actual email
            onVerify={(otp) => {
              console.log('OTP entered:', otp);
              window.location.href = '/complete-profile';
            }}
          />
        } />
        
        {/* Route 5: Complete Profile */}
        <Route path="/complete-profile" element={
          <SetPasswordPage
            onBack={() => window.location.href = '/'}
            onComplete={(data) => {
              console.log('Profile complete:', data);
              window.location.href = '/signin';
            }}
            onLogin={() => window.location.href = '/signin'}
          />
        } />
        
        {/* Route 6: Forgot Password */}
        <Route path="/forgot-password" element={
          <ForgotPasswordPage
            onBack={() => window.location.href = '/'}
            onResetPassword={(email) => {
              console.log('Reset password for:', email);
              window.location.href = '/otp-reset';
            }}
          />
        } />
        
        {/* Route 7: Dashboard */}
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        
        {/* Redirect all other routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;