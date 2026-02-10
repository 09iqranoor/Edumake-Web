// components/layout/DashboardLayout.tsx
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './DashboardPage.css';
import {
  Sidebar,
  TopNav,
  Stats,
  Charts,
  QuickActions,
  RecentActivities,
  SchoolManagement,
  Subscription,
  Communication,
  AuditLogs,
  Analytics,
  SupportTickets,
  Settings,
  Resources
} from '../superadmin';

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
        <div className="dashboard__content">
          <Routes>
            {/* Dashboard Home */}
            <Route index element={
              <>
                <div className="dashboard__section dashboard__section--stats">
                  <Stats />
                </div>

                <div className="dashboard__section dashboard__section--charts">
                  <Charts />
                </div>

                <div className="dashboard__section dashboard__section--bottom">
                  <QuickActions />
                  <RecentActivities />
                </div>
              </>
            } />

            {/* Other routes - yahan pe aap chahein to normal render kar sakte hain */}
            <Route path="schools" element={
              <div className="dashboard__section dashboard__section--full">
                <SchoolManagement />
              </div>
            } />

            <Route path="subscription" element={
              <div className="dashboard__section dashboard__section--full">
                <Subscription />
              </div>
            } />

            <Route path="communications" element={
              <div className="dashboard__section dashboard__section--full">
                <Communication />
              </div>
            } />
            <Route path="support" element={
              <div className="dashboard__section dashboard__section--full">
                <SupportTickets />
              </div>
            } />
            <Route path="audit-logs" element={
              <div className="dashboard__section dashboard__section--full">
                <AuditLogs />
              </div>
            } />
            <Route path="analytics" element={
              <div className="dashboard__section dashboard__section--full">
                <Analytics />
              </div>
            } />
            <Route path="resources" element={
              <div className="dashboard__section dashboard__section--full">
                <Resources />
              </div>
            } />
            <Route path="settings" element={
              <div className="dashboard__section dashboard__section--full">
                <Settings />
              </div>
            } />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;