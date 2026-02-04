import React from 'react';
import { useLocation } from 'react-router-dom';
import './TopNav.css';
import profileImg from '../../assets/profile-img.png';

// SVG Icons - EXACTLY SAME AS YOURS
const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21L17 17" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const NotificationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.02 2.91016C8.71 2.91016 6.02 5.60016 6.02 8.91016V11.8002C6.02 12.4102 5.76 13.3402 5.45 13.8602L4.3 15.7702C3.59 16.9502 4.08 18.2602 5.38 18.7002C9.69 20.1402 14.34 20.1402 18.65 18.7002C19.86 18.3002 20.39 16.8702 19.73 15.7702L18.58 13.8602C18.28 13.3402 18.02 12.4102 18.02 11.8002V8.91016C18.02 5.61016 15.32 2.91016 12.02 2.91016Z" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.9 21.1801C9.36 20.6401 9.02 19.8801 9.02 19.0601" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" />
    </svg>
);

const ArrowDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08 8.95" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7H21" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 12H21" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 17H21" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

interface TopNavProps {
    userName?: string;
    userRole?: string;
    onMenuClick?: () => void;
}

const TopNav: React.FC<TopNavProps> = ({
    userName = 'Lead British',
    userRole = 'Admin',
    onMenuClick
}) => {
    const location = useLocation();
    
    // Function to get page title from current URL - EXACT SAME LOGIC
    const getPageTitle = () => {
        const path = location.pathname;
        
        // Check exact matches first
        if (path === '/dashboard' || path === '/dashboard/') {
            return 'Dashboard';
        }
        
        // Check for sub-paths
        if (path.includes('/dashboard/schools')) {
            return 'Schools';
        }
        
        if (path.includes('/dashboard/subscription')) {
            return 'Subscription';
        }
        
        if (path.includes('/dashboard/communications')) {
            return 'Communications';
        }
        
        if (path.includes('/dashboard/support')) {
            return 'Support';
        }
        
        if (path.includes('/dashboard/audit-logs')) {
            return 'Audit Logs';
        }
        
        if (path.includes('/dashboard/analytics')) {
            return 'Analytics';
        }
        
        if (path.includes('/dashboard/resources')) {
            return 'Resources';
        }
        
        if (path.includes('/dashboard/settings')) {
            return 'Settings';
        }
        
        // Default title
        return 'Dashboard';
    };

    const pageTitle = getPageTitle();

    return (
        <header className="topnav">
            <div className="topnav__content">
                {/* Menu Button - EXACTLY SAME */}
                <button className="topnav__menu-btn" onClick={onMenuClick}>
                    <MenuIcon />
                </button>

                {/* Dynamic Title - Now gets from URL */}
                <h1 className="topnav__title">{pageTitle}</h1>

                {/* Search Bar - EXACTLY SAME */}
                <div className="topnav__search">
                    <span className="topnav__search-icon">
                        <SearchIcon />
                    </span>
                    <input
                        type="text"
                        className="topnav__search-input"
                        placeholder="search"
                    />
                </div>

                {/* Actions Section - EXACTLY SAME */}
                <div className="topnav__actions">
                    <div className="topnav__icons">
                        <button className="topnav__icon-btn">
                            <MailIcon />
                        </button>
                        <button className="topnav__icon-btn">
                            <NotificationIcon />
                        </button>
                    </div>

                    <div className="topnav__user">
                        <div className="topnav__user-info">
                            <div className="topnav__avatar">
                                <img src={profileImg} alt={userName} />
                            </div>
                            <div className="topnav__user-details">
                                <span className="topnav__user-name">{userName}</span>
                                <span className="topnav__user-role">{userRole}</span>
                            </div>
                        </div>
                        <button className="topnav__dropdown-btn">
                            <ArrowDownIcon />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopNav;