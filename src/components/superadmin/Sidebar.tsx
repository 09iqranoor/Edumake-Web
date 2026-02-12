import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';


// Icons
const DashboardIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/dashboard.png' : '/icons/dashboard-active.png'} alt="Dashboard" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const SchoolsIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/briefcase-active.png' : '/icons/briefcase.png'} alt="Schools" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const SubscriptionIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/cards-active.png' : '/icons/cards.png'} alt="Subscription" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const CommunicationsIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/announcement-active.png' : '/icons/announcement.png'} alt="Communications" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const SupportIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/24-support.png' : '/icons/24-support.png'} alt="Support" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const AuditLogsIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/assignment.png' : '/icons/assignment.png'} alt="Audit Logs" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const AnalyticsIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/status-up.png' : '/icons/status-up.png'} alt="Analytics" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const ResourcesIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/carbon_software-resource-resource.png' : '/icons/carbon_software-resource-resource.png'} alt="Resources" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const SettingsIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/setting.png' : '/icons/setting.png'} alt="Settings" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const LogoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.90002 7.56023C9.21002 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24002 20.0802 8.91002 16.5402" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 12H3.62" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose }) => {
  const location = useLocation();

  const menuItems = [
    {
      icon: <DashboardIcon active={location.pathname === '/dashboard'} />,
      label: 'Dashboard',
      path: '/dashboard'
    },
    {
      icon: <SchoolsIcon active={location.pathname.includes('/dashboard/schools')} />,
      label: 'Schools',
      path: '/dashboard/schools'
    },
    {
      icon: <SubscriptionIcon active={location.pathname.includes('/dashboard/subscription')} />,
      label: 'Subscription',
      path: '/dashboard/subscription'
    },
    {
      icon: <CommunicationsIcon active={location.pathname.includes('/dashboard/communications')} />,
      label: 'Communications',
      path: '/dashboard/communications'
    },
    {
      icon: <SupportIcon active={location.pathname.includes('/dashboard/support')} />,
      label: 'Support',
      path: '/dashboard/support'
    },
    {
      icon: <AuditLogsIcon active={location.pathname.includes('/dashboard/audit-logs')} />,
      label: 'Audit Logs',
      path: '/dashboard/audit-logs'
    },
    {
      icon: <AnalyticsIcon active={location.pathname.includes('/dashboard/analytics')} />,
      label: 'Analytics',
      path: '/dashboard/analytics'
    },
    {
      icon: <ResourcesIcon active={location.pathname.includes('/dashboard/resources')} />,
      label: 'Resources',
      path: '/dashboard/resources'
    },
    {
      icon: <SettingsIcon active={location.pathname.includes('/dashboard/settings')} />,
      label: 'Settings',
      path: '/dashboard/settings'
    },
  ];

  const handleLogout = () => {
    // Logout logic here
    window.location.href = '/';
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__logo-container">
          <img src="/logo.png" alt="Logo" className="sidebar__logo-icon" />
          <span className="sidebar__logo-text">Edu-Make</span>
        </div>

        <nav className="sidebar__nav">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`sidebar__nav-item ${location.pathname === item.path ? 'sidebar__nav-item--active' : ''}`}
              onClick={onClose}
            >
              <span className="sidebar__nav-icon">{item.icon}</span>
              <span className="sidebar__nav-label">{item.label}</span>
            </Link>
          ))}

          <button className="sidebar__logout" onClick={handleLogout}>
            <span className="sidebar__logout-icon"><LogoutIcon /></span>
            <span className="sidebar__logout-label">Log Out</span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;