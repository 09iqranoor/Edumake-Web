import React from 'react';
import './Sidebar.css';

// Icons
const DashboardIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/dashboard.png' : '/icons/dashboard.png'} alt="Dashboard" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
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
  <img src={active ? '/icons/24-support-active.png' : '/icons/24-support.png'} alt="Support" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const AuditLogsIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/assignment-active.png' : '/icons/assignment.png'} alt="Audit Logs" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const AnalyticsIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/status-up-active.png' : '/icons/status-up.png'} alt="Analytics" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const ResourcesIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/carbon_software-resource-resource-active.png' : '/icons/carbon_software-resource-resource.png'} alt="Resources" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const SettingsIcon = ({ active }: { active?: boolean }) => (
  <img src={active ? '/icons/setting-active.png' : '/icons/setting.png'} alt="Settings" className={`sidebar-icon ${active ? 'sidebar-icon--active' : ''}`} />
);
const LogoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.90002 7.56023C9.21002 3.96023 11.06 2.49023 15.11 2.49023H15.24C19.71 2.49023 21.5 4.28023 21.5 8.75023V15.2702C21.5 19.7402 19.71 21.5302 15.24 21.5302H15.11C11.09 21.5302 9.24002 20.0802 8.91002 16.5402" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 12H3.62" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#E82D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface MenuItem {
  icon: React.ReactNode;
  label: string;
}

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onClose, activeItem = 'Dashboard', onItemClick }) => {
  const menuItems: MenuItem[] = [
    { icon: <DashboardIcon active={activeItem === 'Dashboard'} />, label: 'Dashboard' },
    { icon: <SchoolsIcon active={activeItem === 'Schools'} />, label: 'Schools' },
    { icon: <SubscriptionIcon active={activeItem === 'PricingPlane'} />, label: 'PricingPlane' },
    { icon: <CommunicationsIcon active={activeItem === 'Communications'} />, label: 'Communications' },
    { icon: <SupportIcon active={activeItem === 'Support'} />, label: 'Support' },
    { icon: <AuditLogsIcon active={activeItem === 'Audit Logs'} />, label: 'Audit Logs' },
    { icon: <AnalyticsIcon active={activeItem === 'Analytics'} />, label: 'Analytics' },
    { icon: <ResourcesIcon active={activeItem === 'Resources'} />, label: 'Resources' },
    { icon: <SettingsIcon active={activeItem === 'Settings'} />, label: 'Settings' },
  ];

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
            <button
              key={index}
              className={`sidebar__nav-item ${activeItem === item.label ? 'sidebar__nav-item--active' : ''}`}
              onClick={() => onItemClick?.(item.label)}
            >
              <span className="sidebar__nav-icon">{item.icon}</span>
              <span className="sidebar__nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="sidebar__logout">
          <span className="sidebar__logout-icon"><LogoutIcon /></span>
          <span className="sidebar__logout-label">Log Out</span>
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
