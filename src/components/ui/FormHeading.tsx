import React from 'react';
import './FormHeading.css';

interface FormHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const FormHeading: React.FC<FormHeadingProps> = ({
    title,
    subtitle,
    className = '',
}) => {
    return (
        <div className={`form-heading ${className}`}>
            <h1 className="form-heading__title">{title}</h1>
            {subtitle && (
                <p className="form-heading__subtitle">{subtitle}</p>
            )}
        </div>
    );
};

export default FormHeading;
