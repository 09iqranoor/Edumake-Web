import React from 'react';
import './RecentActivities.css';

// SVG Icons
const BuildingIcon = () => (
   <img src="/icons/Frame1.png" alt="" />
);

const UpgradeIcon = () => (
    <img src="/icons/Frame2.png" alt="" />
);

const ErrorIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8V13" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9941 16H12.0031" stroke="#E82D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

interface Activity {
    id: string;
    type: 'registration' | 'upgrade' | 'error';
    title: string;
    description: string;
    time: string;
}

interface ActivityItemProps {
    activity: Activity;
}

const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
        case 'registration':
            return <BuildingIcon />;
        case 'upgrade':
            return <UpgradeIcon />;
        case 'error':
            return <ErrorIcon />;
        default:
            return <BuildingIcon />;
    }
};

const getActivityBgColor = (type: Activity['type']) => {
    switch (type) {
        case 'registration':
            return 'rgba(0, 178, 255, 0.2)';
        case 'upgrade':
            return 'rgba(52, 168, 83, 0.2)';
        case 'error':
            return 'rgba(232, 45, 45, 0.2)';
        default:
            return 'rgba(0, 178, 255, 0.2)';
    }
};

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
    return (
        <div className="activity-item">
            <div
                className="activity-item__icon"
                style={{ backgroundColor: getActivityBgColor(activity.type) }}
            >
                {getActivityIcon(activity.type)}
            </div>
            <div className="activity-item__content">
                <span className="activity-item__title">{activity.title}</span>
                <span className="activity-item__description">{activity.description}</span>
                <span className="activity-item__time">{activity.time}</span>
            </div>
        </div>
    );
};

const RecentActivities: React.FC = () => {
    const activities: Activity[] = [
        {
            id: '1',
            type: 'registration',
            title: 'New School Registered',
            description: "Lead British Int'l School",
            time: '2 minutes ago'
        },
        {
            id: '2',
            type: 'upgrade',
            title: 'Subscription Upgraded',
            description: 'Riverside Academy →Premium Plan',
            time: '5 minutes ago'
        },
        {
            id: '3',
            type: 'error',
            title: 'Payment Failed',
            description: 'Central School District - $299.00',
            time: '10 minutes ago'
        }
    ];

    return (
        <div className="recent-activities">
            <h3 className="recent-activities__title">Recent Activities</h3>
            <div className="recent-activities__list">
                {activities.map((activity) => (
                    <ActivityItem key={activity.id} activity={activity} />
                ))}
            </div>
        </div>
    );
};

export default RecentActivities;
