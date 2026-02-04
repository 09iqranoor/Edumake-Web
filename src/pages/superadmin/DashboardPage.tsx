import React, { useState } from 'react';
import './DashboardPage.css';
import { Sidebar, TopNav } from '../../components/superadmin';

import Stats from '../../components/superadmin/Stats';
import Charts from '../../components/superadmin/Charts';
import QuickActions from '../../components/superadmin/QuickActions';
import RecentActivities from '../../components/superadmin/RecentActivities';

import SchoolPage from './SchoolPage';
import SubscriptionPage from './SubscriptionPage';

type Page =
  | 'Dashboard'
  | 'Schools'
  | 'Subscription'
  | 'Communications'
  | 'Support'
  | 'Audit Logs'
  | 'Analytics'
  | 'Resources'
  | 'Settings';

const DashboardPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState<Page>('Dashboard');

  return (
    <div className="dashboard">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeItem={activePage}
        onItemClick={(label) => setActivePage(label as Page)}
      />

      <TopNav
        title={activePage}
        userName="Lead British"
        userRole="Admin"
        onMenuClick={() => setSidebarOpen(true)}
      />

      <main className="dashboard__main">
        {activePage === 'Dashboard' && (
          <>
            <Stats />
            <Charts />
            <QuickActions />
            <RecentActivities />
          </>
        )}

        {activePage === 'Schools' && <SchoolPage />}
        {activePage === 'Subscription' && <SubscriptionPage />}
      </main>
    </div>
  );
};

export default DashboardPage;
