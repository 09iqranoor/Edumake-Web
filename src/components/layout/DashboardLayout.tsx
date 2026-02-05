// components/layout/DashboardLayout.tsx
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './DashboardPage.css'; 
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
                <div>Communications Page</div>
              </div>
            } />
            <Route path="support" element={
              <div className="dashboard__section dashboard__section--full">
                <div>Support Page</div>
              </div>
            } />
            <Route path="audit-logs" element={
              <div className="dashboard__section dashboard__section--full">
                <div>Audit Logs Page</div>
              </div>
            } />
            <Route path="analytics" element={
              <div className="dashboard__section dashboard__section--full">
                <div>Analytics Page</div>
              </div>
            } />
            <Route path="resources" element={
              <div className="dashboard__section dashboard__section--full">
                <div>Resources Page</div>
              </div>
            } />
            <Route path="settings" element={
              <div className="dashboard__section dashboard__section--full">
                <div>Settings Page</div>
              </div>
            } />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;