// components/layout/DashboardLayout.tsx
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './DashboardPage.css'; // Keep your existing styles
import { Sidebar, TopNav } from '../superadmin';

// Import dashboard components
import Stats from '../superadmin/Stats';
import Charts from '../superadmin/Charts';
import QuickActions from '../superadmin/QuickActions';
import RecentActivities from '../superadmin/RecentActivities';
import SchoolManagement from '../superadmin/SchoolManagement';
import Subscription from '../superadmin/Subscription';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <TopNav
        onMenuClick={() => setSidebarOpen(true)}
      />

      <main className="dashboard__main">
        <Routes>
          {/* Dashboard Home */}
          <Route index element={
            <>
              <Stats />
              <Charts />
              <QuickActions />
              <RecentActivities />
            </>
          } />
          
          {/* Schools Page */}
          <Route path="schools" element={<SchoolManagement />} />
          
          {/* Subscription Page */}
          <Route path="subscription" element={<Subscription />} />
          
          {/* Other Pages */}
          <Route path="communications" element={<div>Communications Page</div>} />
          <Route path="support" element={<div>Support Page</div>} />
          <Route path="audit-logs" element={<div>Audit Logs Page</div>} />
          <Route path="analytics" element={<div>Analytics Page</div>} />
          <Route path="resources" element={<div>Resources Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardLayout;