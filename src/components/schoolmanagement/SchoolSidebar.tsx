import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SchoolSidebar.css';

// Import local icons
import dashboardIcon from '../../assets/schoolmanagment/material-symbols-light_dashboard-outline-rounded.png';
import teachersIcon from '../../assets/schoolmanagment/users.png';
import studentsIcon from '../../assets/schoolmanagment/student.png';
import classesIcon from '../../assets/schoolmanagment/calendar.png';
import attendanceIcon from '../../assets/schoolmanagment/assignment.png';
import paymentIcon from '/icons/cards.png'; // Fallback if not in schoolmanagment
import messagesIcon from '../../assets/schoolmanagment/assignment.png'; // Using assignment as placeholder if no messages icon found

interface SchoolSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const SchoolSidebar: React.FC<SchoolSidebarProps> = ({ isOpen = true, onClose }) => {
    const location = useLocation();

    const menuItems = [
        {
            label: 'Dashboard',
            path: '/school-dashboard',
            icon: dashboardIcon,
            activeIcon: dashboardIcon
        },
        {
            label: 'Teachers',
            path: '/school-dashboard/teachers',
            icon: teachersIcon,
            activeIcon: teachersIcon
        },
        {
            label: 'Students',
            path: '/school-dashboard/students',
            icon: studentsIcon,
            activeIcon: studentsIcon
        },
        {
            label: 'Classes',
            path: '/school-dashboard/classes',
            icon: classesIcon,
            activeIcon: classesIcon
        },
        {
            label: 'Attendance',
            path: '/school-dashboard/attendance',
            icon: attendanceIcon,
            activeIcon: attendanceIcon
        },
        {
            label: 'Payment',
            path: '/school-dashboard/payment',
            icon: paymentIcon,
            activeIcon: paymentIcon
        },
        {
            label: 'Messages',
            path: '/school-dashboard/messages',
            icon: messagesIcon,
            activeIcon: messagesIcon
        },
    ];

    const handleLogout = () => {
        window.location.href = '/';
    };

    return (
        <>
            {isOpen && <div className="school-sidebar-overlay" onClick={onClose} />}
            <aside className={`school-sidebar ${isOpen ? 'school-sidebar--open' : ''}`}>
                <div className="school-sidebar__logo-container">
                    <img src="/logo.png" alt="Logo" className="school-sidebar__logo-icon" />
                    <span className="school-sidebar__logo-text">Edu-Make</span>
                </div>

                <nav className="school-sidebar__nav">
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.path || (item.path !== '/school-dashboard' && location.pathname.startsWith(item.path));
                        return (
                            <Link
                                key={index}
                                to={item.path}
                                className={`school-sidebar__nav-item ${isActive ? 'school-sidebar__nav-item--active' : ''}`}
                                onClick={onClose}
                            >
                                <span className="school-sidebar__nav-icon">
                                    <img src={isActive ? item.activeIcon : item.icon} alt={item.label} />
                                </span>
                                <span className="school-sidebar__nav-label">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="sidebar-promo">
                    <div className="sidebar-promo__icon">
                        <img src="/icons/user-tag.png" alt="Go Pro" style={{ width: '20px' }} />
                    </div>
                    <div className="sidebar-promo__title">Go Pro!</div>
                    <div className="sidebar-promo__text">Full access to Edumake features and analytics</div>
                    <button className="sidebar-promo__button">
                        <img src="/icons/receipt.png" alt="Upgrade" style={{ width: '16px' }} />
                        Upgrade
                    </button>
                </div>

                <button className="school-sidebar__logout" onClick={handleLogout}>
                    <span className="school-sidebar__logout-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.90002 7.56023C9.21002 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24002 20.0802 8.91002 16.5402" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 12H3.62" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <span className="school-sidebar__logout-label">Log Out</span>
                </button>
            </aside>
        </>
    );
};

export default SchoolSidebar;
