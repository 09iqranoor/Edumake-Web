import React from 'react';
import './ComposeAnnouncement.css';
// import PageHeader from './PageHeader';
// import PageHeader from './PageHeader';

const BackIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19L5 12L12 5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SendPlaneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.11 13.6501L13.69 10.0601" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

interface ComposeAnnouncementProps {
    onBack: () => void;
}

const ComposeAnnouncement: React.FC<ComposeAnnouncementProps> = ({ onBack }) => {
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
    const [recipient, setRecipient] = React.useState('All Schools');
    const [deliveryMethods, setDeliveryMethods] = React.useState<string[]>(['Email', 'In-App Notifications']);
    const [schedule, setSchedule] = React.useState('Send Now');

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const handleRecipientChange = (value: string) => {
        setRecipient(value);
        setOpenDropdown(null);
    };

    const handleDeliveryChange = (value: string) => {
        if (deliveryMethods.includes(value)) {
            setDeliveryMethods(deliveryMethods.filter(item => item !== value));
        } else {
            setDeliveryMethods([...deliveryMethods, value]);
        }
    };

    const handleScheduleChange = (value: string) => {
        setSchedule(value);
        setOpenDropdown(null);
    };

    const ChevronIcon = () => (
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <div className="compose-page">
            <button className="back-btn" onClick={onBack}>
                <BackIcon />
                <span>Back</span>
            </button>

            <div className="compose-header">
                <h1>Communications</h1>
                <p>Send announcements and messages to schools</p>
            </div>

            <div className="compose-form-container">
                <h2 className="form-title">New Announcements</h2>

                <div className="form-group">
                    <label>Recipients</label>
                    <div className="custom-select-container">
                        <div className={`custom-select-trigger ${openDropdown === 'recipients' ? 'open' : ''}`} onClick={() => toggleDropdown('recipients')}>
                            <span>{recipient}</span>
                            <ChevronIcon />
                        </div>
                        {openDropdown === 'recipients' && (
                            <div className="custom-options-list">
                                {['All Schools', 'Basic Plans Schools', 'Standard Plans Schools', 'Premium Plans Schools', 'Active Schools Only'].map((option) => (
                                    <label key={option} className="radio-option">
                                        <input
                                            type="radio"
                                            name="recipients"
                                            checked={recipient === option}
                                            onChange={() => handleRecipientChange(option)}
                                        />
                                        <span className="radio-custom"></span>
                                        <span className="radio-label">{option}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    <span className="helper-text">This will send to 345 schools</span>
                </div>

                <div className="form-group">
                    <label>Delivery Method</label>
                    <div className="custom-select-container">
                        <div className={`custom-select-trigger ${openDropdown === 'delivery' ? 'open' : ''}`} onClick={() => toggleDropdown('delivery')}>
                            <span>{deliveryMethods.length > 0 ? deliveryMethods.join(', ') : 'Select Delivery Method'}</span>
                            <ChevronIcon />
                        </div>
                        {openDropdown === 'delivery' && (
                            <div className="custom-options-list">
                                {['Email', 'In-App Notifications'].map((option) => (
                                    <label key={option} className="checkbox-option">
                                        <input
                                            type="checkbox"
                                            checked={deliveryMethods.includes(option)}
                                            onChange={() => handleDeliveryChange(option)}
                                        />
                                        <span className="checkbox-custom"></span>
                                        <span className="checkbox-label">{option}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Enter announcement subject..." />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Compose your message here" rows={6}></textarea>
                </div>

                <div className="form-group">
                    <label>Schedule</label>
                    <div className="custom-select-container">
                        <div className={`custom-select-trigger ${openDropdown === 'schedule' ? 'open' : ''}`} onClick={() => toggleDropdown('schedule')}>
                            <span>{schedule}</span>
                            <ChevronIcon />
                        </div>
                        {openDropdown === 'schedule' && (
                            <div className="custom-options-list">
                                {['Send Now', 'Schedule for Later'].map((option) => (
                                    <label key={option} className="radio-option">
                                        <input
                                            type="radio"
                                            name="schedule"
                                            checked={schedule === option}
                                            onChange={() => handleScheduleChange(option)}
                                        />
                                        <span className="radio-custom"></span>
                                        <span className="radio-label">{option}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="form-actions">
                    <div className="left-actions">
                        <button className="btn-cancel" onClick={onBack}>Cancel</button>
                        <button className="btn-draft">Save as Draft</button>
                    </div>
                    <button className="btn-send">
                        <SendPlaneIcon />
                        <span>Send Announcement</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ComposeAnnouncement;
