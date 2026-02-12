import React from 'react';
import './AnnouncementAnalytics.css';

interface AnnouncementAnalyticsProps {
    onClose: () => void;
    announcement: {
        subject: string;
        status: {
            delivered: number;
            failed?: number;
        };
    };
}

const AnnouncementAnalytics: React.FC<AnnouncementAnalyticsProps> = ({ onClose, announcement }) => {

    const delivered = announcement.status.delivered;
    const failed = announcement.status.failed || 0;
    const opened = Math.floor(delivered * 0.9); // Mock 90% open rate for demo

    const deliveredPct = "99.4%"; // Mocking percentages to match image for now or calculating
    const openedPct = "83.6%";
    const failedPct = "0.6%";

    return (
        <div className="analytics-modal-overlay">
            <div className="analytics-modal-container">
                <button className="analytics-close-icon-btn" onClick={onClose}>
                    <img src="/icons/close.png" alt="Close" />

                </button>

                <div className="analytics-header">
                    <div className="analytics-logo">
                        <img src="/logo.png" alt="Edu-Make" />
                    </div>
                    <h2 className="analytics-title">Announcement Analytics</h2>
                    <p className="analytics-subtitle">{announcement.subject}</p>
                </div>

                <div className="analytics-stats-grid">
                    {/* Delivered */}
                    <div className="analytics-stat-card">
                        <span className="stat-label">Delivered</span>
                        <div className="stat-value">{delivered}</div>
                        <div className="stat-pct success">{deliveredPct}</div>
                    </div>

                    {/* Opened */}
                    <div className="analytics-stat-card">
                        <span className="stat-label">Opened</span>
                        <div className="stat-value">{opened}</div>
                        <div className="stat-pct info">{openedPct}</div>
                    </div>

                    {/* Failed */}
                    <div className="analytics-stat-card">
                        <span className="stat-label">Failed</span>
                        <div className="stat-value">{failed}</div>
                        <div className="stat-pct error">{failedPct}</div>
                    </div>
                </div>

                <div className="analytics-footer">
                    <button className="analytics-close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementAnalytics;
