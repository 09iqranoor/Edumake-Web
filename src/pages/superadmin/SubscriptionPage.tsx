import React, { useState } from 'react';
// import './DashboardPage.css';
import {
    Sidebar,
    TopNav,
    PricingPlane
} from '../../components/superadmin';

const SubscriptionPage: React.FC = () => {
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
                activeItem="PricingPlane"
            />

            <TopNav
                title="Pricing Plane"
                userName="Lead British"
                userRole="Admin"
                onMenuClick={handleMenuClick}
            />

            <main className="dashboard__main">
                
                <PricingPlane/>
        
                    
            
            </main>
        </div>
    );
};

export default SubscriptionPage;
