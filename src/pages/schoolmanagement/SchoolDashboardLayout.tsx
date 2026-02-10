import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../pages/superadmin/DashboardPage.css'; // Reuse existing dashboard layout styles
import SchoolSidebar from '../../components/schoolmanagement/SchoolSidebar';
import { TopNav } from '../../components/superadmin'; // Reuse existing TopNav
import SchoolDashboard from '../../components/schoolmanagement/SchoolDashboard';

const SchoolDashboardLayout: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="dashboard">
            <SchoolSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <TopNav
                onMenuClick={() => setSidebarOpen(true)}
            />

            <main className="dashboard__main">
                <div className="dashboard__content">
                    <Routes>
                        <Route index element={<SchoolDashboard />} />
                        {/* Add other school-specific routes here later */}
                        <Route path="teachers" element={<div>Teachers Page (Coming Soon)</div>} />
                        <Route path="students" element={<div>Students Page (Coming Soon)</div>} />
                        <Route path="classes" element={<div>Classes Page (Coming Soon)</div>} />
                        <Route path="attendance" element={<div>Attendance Page (Coming Soon)</div>} />
                        <Route path="payment" element={<div>Payment Page (Coming Soon)</div>} />
                        <Route path="messages" element={<div>Messages Page (Coming Soon)</div>} />
                    </Routes>
                </div>
            </main>
        </div>
    );
};

export default SchoolDashboardLayout;
