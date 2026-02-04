import React, { useState } from 'react';
// import './DashboardPage.css';
import {
    Sidebar,
    TopNav,
    SchoolManagement
} from '../../components/superadmin';

const SchoolPage: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleMenuClick = () => {
        setSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="dashboard">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={handleCloseSidebar}
                activeItem="School"
            />

            <TopNav
                title="School"
                userName="Lead British"
                userRole="Admin"
                onMenuClick={handleMenuClick}
            />

            <main className="dashboard__main">
                
                    <SchoolManagement/>
        
                    
            
            </main>
        </div>
    );
};

export default SchoolPage;
