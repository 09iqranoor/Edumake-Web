import React, { useRef, useEffect, useState } from 'react';
import './OtpInput.css';

interface OtpInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({
    length = 5,
    value = '',
    onChange,
    className = '',
}) => {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (value) {
            const newOtp = value.split('').slice(0, length);
            if (newOtp.length < length) {
                // Pad with empty strings if value is shorter than length
                newOtp.push(...new Array(length - newOtp.length).fill(''));
            }
            setOtp(newOtp);
        }
    }, [value, length]);

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (onChange) {
            onChange(newOtp.join(''));
        }

        // Focus next input
        if (element.value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            if (!otp[index] && index > 0) {
                // Move to previous input on backspace if current is empty
                const newOtp = [...otp];
                newOtp[index - 1] = '';
                setOtp(newOtp);
                if (onChange) onChange(newOtp.join(''));
                inputRefs.current[index - 1]?.focus();
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
                if (onChange) onChange(newOtp.join(''));
            }
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain').slice(0, length);
        if (!/^\d+$/.test(pastedData)) return;

        const newOtp = [...otp];
        pastedData.split('').forEach((char, i) => {
            newOtp[i] = char;
        });
        setOtp(newOtp);
        if (onChange) onChange(newOtp.join(''));

        // Focus the last filled input or the first empty one
        const focusIndex = Math.min(pastedData.length, length - 1);
        inputRefs.current[focusIndex]?.focus();
    };

    return (
        <div className={`otp-input ${className}`}>
            {otp.map((data, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    ref={(el) => { inputRefs.current[index] = el }}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onFocus={(e) => e.target.select()}
                    onPaste={handlePaste}
                    className="otp-input__field"
                />
            ))}
        </div>
    );
};

export default OtpInput;
