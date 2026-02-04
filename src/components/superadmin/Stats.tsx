import React from 'react';
import './Stats.css';

// SVG Icons for each stat card
const SchoolsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.0008 22H16.0008C20.0208 22 20.7408 20.39 20.9508 18.43L21.7008 10.43C21.9708 7.99 21.2708 6 17.0008 6H7.0008C2.7308 6 2.0308 7.99 2.3008 10.43L3.0508 18.43C3.2608 20.39 3.9808 22 8.0008 22Z" stroke="#00B2FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6" stroke="#00B2FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z" stroke="#00B2FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02" stroke="#00B2FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.61914 11.27C4.86914 12.81 7.40914 13.74 9.99914 14.03" stroke="#00B2FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
);

const RevenueIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18016 10.16 8.49016 10.96 8.49016H12.84C13.76 8.49016 14.51 9.27016 14.51 10.2402" stroke="#FBBC04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7.5V16.5" stroke="#FBBC04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#FBBC04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 3V7H21" stroke="#FBBC04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 2L17 7" stroke="#FBBC04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SubscriptionIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8.5H14.5" stroke="#21A772" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 16.5H8" stroke="#21A772" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 16.5H14.5" stroke="#21A772" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5" stroke="#21A772" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 3.5V9.5L22 7.5" stroke="#21A772" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 9.5L18 7.5" stroke="#21A772" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TicketsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 7V8.55C22 9.55 21.5 10.05 20.5 10.05H17V5.02C17 3.91 17.91 3 19.02 3C20.11 3.01 21.11 3.45 21.83 4.17C22.55 4.9 22 5.9 22 7Z" stroke="#FF1FE9" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V5C16 3.9 16.9 3 18 3H7H6C3 3 2 4.79 2 7V8Z" stroke="#FF1FE9" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 13.01H12" stroke="#FF1FE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9.01001H12" stroke="#FF1FE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.99561 13H6.00459" stroke="#FF1FE9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.99561 9H6.00459" stroke="#FF1FE9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowUpIcon = ({ color = "#34A853" }: { color?: string }) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9.5V2.5" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 4.5L6 1.5L9 4.5" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

interface StatCardProps {
    title: string;
    value: string | number;
    percentageChange: string;
    changeText: string;
    icon: React.ReactNode;
    iconBgColor: string;
    isPositive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    percentageChange,
    changeText,
    icon,
    iconBgColor,
    isPositive = true
}) => {
    return (
        <div className="stat-card">
            <div className="stat-card__content">
                <span className="stat-card__title">{title}</span>
                <span className="stat-card__value">{value}</span>
                <div className="stat-card__change">
                    <div className={`stat-card__badge ${isPositive ? 'stat-card__badge--positive' : 'stat-card__badge--negative'}`}>
                        <ArrowUpIcon color={isPositive ? "#34A853" : "#E82D2D"} />
                        <span>{percentageChange}</span>
                    </div>
                    <span className="stat-card__change-text">{changeText}</span>
                </div>
            </div>
            <div className="stat-card__icon" style={{ backgroundColor: iconBgColor }}>
                {icon}
            </div>
        </div>
    );
};

const Stats: React.FC = () => {
    const stats = [
        {
            title: 'Total Schools',
            value: '250',
            percentageChange: '10.75%',
            changeText: 'up last week',
            icon: <SchoolsIcon />,
            iconBgColor: 'rgba(0, 178, 255, 0.2)',
            isPositive: true
        },
        {
            title: 'Total Revenue',
            value: '$127,655',
            percentageChange: '10.75%',
            changeText: 'up last week',
            icon: <RevenueIcon />,
            iconBgColor: 'rgba(251, 188, 4, 0.2)',
            isPositive: true
        },
        {
            title: 'Active Subscription',
            value: '212',
            percentageChange: '10.75%',
            changeText: 'up last week',
            icon: <SubscriptionIcon />,
            iconBgColor: 'rgba(33, 167, 114, 0.2)',
            isPositive: true
        },
        {
            title: 'Support Tickets',
            value: '112',
            percentageChange: '10.75%',
            changeText: 'up last week',
            icon: <TicketsIcon />,
            iconBgColor: 'rgba(255, 31, 233, 0.2)',
            isPositive: true
        }
    ];

    return (
        <div className="stats">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    );
};

export default Stats;
