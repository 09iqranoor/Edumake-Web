import React from 'react';
import './Checkbox.css';

interface CheckboxProps {
    label: React.ReactNode;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    required?: boolean;
    className?: string;
    id?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked = false,
    onChange,
    required = false,
    className = '',
    id,
}) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.checked);
        }
    };

    return (
        <div className={`checkbox-wrapper ${className}`}>
            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id={checkboxId}
                    checked={checked}
                    onChange={handleChange}
                    required={required}
                    className="checkbox-input"
                />
                <label htmlFor={checkboxId} className="checkbox-visual" />
            </div>
            <label htmlFor={checkboxId} className="checkbox-label">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
