import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
    steps: number;
    currentStep: number;
    className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    steps,
    currentStep,
    className = '',
}) => {
    return (
        <div className={`progress-bar ${className}`}>
            {Array.from({ length: steps }, (_, index) => (
                <div
                    key={index}
                    className={`progress-bar__step ${index < currentStep ? 'progress-bar__step--active' : ''
                        }`}
                />
            ))}
        </div>
    );
};

export default ProgressBar;
