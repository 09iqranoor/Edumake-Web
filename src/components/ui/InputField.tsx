import React from 'react';
import './InputField.css';

interface InputFieldProps {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = 'text',
    placeholder = '',
    value,
    onChange,
    name,
    id,
    required = false,
    disabled = false,
    error,
    className = '',
}) => {
    const inputId = id || name || label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className={`input-field ${error ? 'input-field--error' : ''} ${className}`}>
            <label htmlFor={inputId} className="input-field__label">
                {label}
                {required && <span className="input-field__required">*</span>}
            </label>
            <div className="input-field__wrapper">
                <input
                    type={type}
                    id={inputId}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    className="input-field__input"
                />
            </div>
            {error && <span className="input-field__error">{error}</span>}
        </div>
    );
};

export default InputField;
