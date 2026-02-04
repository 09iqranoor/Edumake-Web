import React from 'react';
import './QuickActions.css';

// SVG Icons
const AddSchoolIcon = () => (
    <img src="/icons/eye.png" alt="" />
);

const AnnouncementIcon = () => (
    <img src="/icons/tag-2.png" alt="" />
);

const ReportIcon = () => (
    <img src="/icons/receipt.png" alt="" />
);

interface QuickActionItemProps {
    icon: React.ReactNode;
    label: string;
    isPrimary?: boolean;
    onClick?: () => void;
}

const QuickActionItem: React.FC<QuickActionItemProps> = ({
    icon,
    label,
    isPrimary = false,
    onClick
}) => {
    return (
        <button
            className={`quick-action-item ${isPrimary ? 'quick-action-item--primary' : ''}`}
            onClick={onClick}
        >
            <span className="quick-action-item__icon">{icon}</span>
            <span className="quick-action-item__label">{label}</span>
        </button>
    );
};

const QuickActions: React.FC = () => {
    const actions = [
        {
            icon: <AddSchoolIcon />,
            label: 'Add New School',
            isPrimary: true
        },
        {
            icon: <AnnouncementIcon />,
            label: 'Create New Announcements',
            isPrimary: false
        },
        {
            icon: <ReportIcon />,
            label: 'Generate Reports',
            isPrimary: false
        }
    ];

    return (
        <div className="quick-actions">
            <h3 className="quick-actions__title">Quick Actions</h3>
            <div className="quick-actions__list">
                {actions.map((action, index) => (
                    <QuickActionItem key={index} {...action} />
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
