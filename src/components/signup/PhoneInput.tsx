import React, { useState } from 'react';
import './PhoneInput.css';

interface PhoneInputProps {
    label: string;
    value?: string;
    onChange?: (value: string) => void;
    countryCode?: string;
    onCountryCodeChange?: (code: string) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
}

const countryCodes = [
    { code: '+234', flag: '🇳🇬', country: 'Nigeria' },
    { code: '+1', flag: '🇺🇸', country: 'USA' },
    { code: '+44', flag: '🇬🇧', country: 'UK' },
    { code: '+91', flag: '🇮🇳', country: 'India' },
    { code: '+86', flag: '🇨🇳', country: 'China' },
    { code: '+81', flag: '🇯🇵', country: 'Japan' },
    { code: '+49', flag: '🇩🇪', country: 'Germany' },
    { code: '+33', flag: '🇫🇷', country: 'France' },
];

const PhoneInput: React.FC<PhoneInputProps> = ({
    label,
    value = '',
    onChange,
    countryCode = '+234',
    onCountryCodeChange,
    placeholder = 'Enter phone number...',
    required = false,
    className = '',
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCode, setSelectedCode] = useState(countryCode);

    const handleCountrySelect = (code: string) => {
        setSelectedCode(code);
        if (onCountryCodeChange) {
            onCountryCodeChange(code);
        }
        setIsDropdownOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };



    return (
        <div className={`phone-input ${className}`}>
            <label className="phone-input__label">
                {label}
                {required && <span className="phone-input__required">*</span>}
            </label>
            <div className="phone-input__wrapper">
                <div className="phone-input__dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <span className="phone-input__dropdown-text">{selectedCode}</span>
                    <svg
                        className={`phone-input__dropdown-icon ${isDropdownOpen ? 'phone-input__dropdown-icon--open' : ''}`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="#666666"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    {isDropdownOpen && (
                        <div className="phone-input__dropdown-menu">
                            {countryCodes.map((country) => (
                                <div
                                    key={country.code}
                                    className={`phone-input__dropdown-item ${country.code === selectedCode ? 'phone-input__dropdown-item--selected' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCountrySelect(country.code);
                                    }}
                                >
                                    <span className="phone-input__dropdown-item-flag">{country.flag}</span>
                                    <span className="phone-input__dropdown-item-code">{country.code}</span>
                                    <span className="phone-input__dropdown-item-country">{country.country}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <input
                    type="tel"
                    value={value}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className="phone-input__input"
                />
            </div>
        </div>
    );
};

export default PhoneInput;
