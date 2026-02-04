import React, { useState } from 'react';
import './DashboardPage.css';
import { Sidebar, TopNav } from '../../components/superadmin';
import Stats from '../../components/superadmin/Stats';
import Charts from '../../components/superadmin/Charts';
import QuickActions from '../../components/superadmin/QuickActions';
import RecentActivities from '../../components/superadmin/RecentActivities';
import SchoolPage from './SchoolPage';
// import SubscriptionPage from './SubscriptionPage';
// import CommunicationsPage from './CommunicationsPage';
// import SupportPage from './SupportPage';
// import AuditLogsPage from './AuditLogsPage';
// import AnalyticsPage from './AnalyticsPage';
// import ResourcesPage from './ResourcesPage';
// import SettingsPage from './SettingsPage';

const DashboardPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');

  const handleMenuClick = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div className="dashboard">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
        activeItem={activePage}
        onItemClick={(label) => setActivePage(label)}
      />

      <TopNav
        title={activePage}
        userName="Lead British"
        userRole="Admin"
        onMenuClick={handleMenuClick}
      />

      <main className="dashboard__main">
        {activePage === 'Dashboard' && (
          <div className="dashboard__content">
            <section className="dashboard__section dashboard__section--stats">
              <Stats />
            </section>
            <section className="dashboard__section dashboard__section--charts">
              <Charts />
            </section>
            <section className="dashboard__section dashboard__section--bottom">
              <QuickActions />
              <RecentActivities />
            </section>
          </div>
        )}
        {activePage === 'Schools' && <SchoolPage />}
        {/* {activePage === 'Subscription' && <SubscriptionPage />}
        {activePage === 'Communications' && <CommunicationsPage />}
        {activePage === 'Support' && <SupportPage />}
        {activePage === 'Audit Logs' && <AuditLogsPage />}
        {activePage === 'Analytics' && <AnalyticsPage />}
        {activePage === 'Resources' && <ResourcesPage />}
        {activePage === 'Settings' && <SettingsPage />} */}
      </main>
    </div>
  );
};

export default DashboardPage;
