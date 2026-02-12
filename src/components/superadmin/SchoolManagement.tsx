import React, { useState } from 'react';
import PageHeader from './PageHeader';
import FilterHeader from './FilterHeader';
import './SchoolManagement.css';

interface School {
  id: number;
  name: string;
  admin: string;
  adminEmail: string;
  plan: 'Basic' | 'Standard' | 'Premium';
  status: 'Active' | 'Inactive';
  students: number;
  joinDate: string;
  lastActive: string;
}

const SchoolManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [subscriptionFilter, setSubscriptionFilter] = useState('');

  // Mock Data
  const schools: School[] = [
    {
      id: 1,
      name: "Lead British Int'l School",
      admin: "Sarah Johnson",
      adminEmail: "sarah.j@leadb.edu",
      plan: "Premium",
      status: "Active",
      students: 1259,
      joinDate: "15/01/2025",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Riverside Academy",
      admin: "Michael Chen",
      adminEmail: "m.chen@riverside.edu",
      plan: "Standard",
      status: "Active",
      students: 1259,
      joinDate: "15/01/2025",
      lastActive: "10 hours ago"
    },
    {
      id: 3,
      name: "Oakwood Elementary",
      admin: "Emily Davis",
      adminEmail: "e.davis@oakwood.edu",
      plan: "Basic",
      status: "Inactive",
      students: 1259,
      joinDate: "15/01/2025",
      lastActive: "2 days ago"
    },
    {
      id: 4,
      name: "Central School District",
      admin: "Robert Martinez",
      adminEmail: "r.martinez@central.edu",
      plan: "Premium",
      status: "Active",
      students: 1259,
      joinDate: "15/01/2025",
      lastActive: "3 days ago"
    },
    {
      id: 5,
      name: "Greenfield College",
      admin: "Jessica Brown",
      adminEmail: "j.brown@greenfield.edu",
      plan: "Premium",
      status: "Active",
      students: 1259,
      joinDate: "15/01/2025",
      lastActive: "6 hours ago"
    }
  ];



  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const toggleDropdown = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  // Close dropdown when clicking elsewhere
  React.useEffect(() => {
    const handleClickOutside = () => setOpenDropdownId(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleExport = () => {
    console.log('Exporting data...');
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setStatusFilter('');
    setSubscriptionFilter('');
  };

  const getPlanClass = (plan: string) => {
    switch (plan.toLowerCase()) {
      case 'basic': return 'school-plan-badge-basic';
      case 'standard': return 'school-plan-badge-standard';
      case 'premium': return 'school-plan-badge-premium';
      default: return '';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'school-status-active';
      case 'inactive': return 'school-status-inactive';
      default: return 'school-status-inactive';
    }
  };

  const handleDelete = (id: number) => {
    console.log('Delete school', id);
    // Implement delete logic
  };

  const handleSuspend = (id: number) => {
    console.log('Suspend school', id);
    // Implement suspend logic
  };

  return (
    <div className="school-management-container">
      <PageHeader
        title="Schools Management"
        subtitle="Manage all registered schools and their subscriptions"
        buttonText="Export"
        buttonIcon={<img src="/icons/export.png" alt="Export" />}
        onButtonClick={handleExport}
        buttonVariant="outline"
      />

      <FilterHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filters={[
          {
            label: "Status",
            value: statusFilter,
            onChange: setStatusFilter,
            options: [
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" }
            ]
          },
          {
            label: "Subscription Type",
            value: subscriptionFilter,
            onChange: setSubscriptionFilter,
            options: [
              { label: "Basic", value: "basic" },
              { label: "Standard", value: "standard" },
              { label: "Premium", value: "premium" }
            ]
          }
        ]}
        onReset={handleResetFilters}
        searchPlaceholder="search"
      />
      <div className="school-management-content">


        <div className="table-responsive-wrapper">
          <table className="school-table">
            <thead>
              <tr>
                <th className="th-school">School</th>
                <th className="th-admin">Admin</th>
                <th className="th-plan">Plan</th>
                <th className="th-status">Status</th>
                <th className="th-students">Students</th>
                <th className="th-join-date">Join Date</th>
                <th className="th-last-active">Last Active</th>
                <th className="th-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school) => (
                <tr key={school.id}>
                  <td className="td-school">
                    <div className="school-info">
                      <div className="school-avatar"></div>
                      <span className="school-name">{school.name}</span>
                    </div>
                  </td>
                  <td className="td-admin">
                    <div className="admin-info">
                      <span className="admin-name">{school.admin}</span>
                      <span className="admin-email">{school.adminEmail}</span>
                    </div>
                  </td>
                  <td className="td-plan">
                    <span className={`school-plan-badge ${getPlanClass(school.plan)}`}>
                      {school.plan}
                    </span>
                  </td>
                  <td className="td-status">
                    <span className={`school-status-badge ${getStatusClass(school.status)}`}>
                      <span className="school-status-dot"></span>
                      {school.status}
                    </span>
                  </td>

                  <td className="td-students">{school.students}</td>
                  <td className="td-join-date">{school.joinDate}</td>
                  <td className="td-last-active">{school.lastActive}</td>
                  <td className="td-actions" style={{ position: 'relative' }}>
                    <button
                      className="action-btn"
                      onClick={(e) => toggleDropdown(school.id, e)}
                    >
                      <img src="/icons/more.png" alt="Actions" />
                    </button>
                    {openDropdownId === school.id && (
                      <div className="action-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                        <button className="dropdown-item suspend" onClick={() => handleSuspend(school.id)}>
                          Suspend School
                        </button>
                        <button className="dropdown-item remove" onClick={() => handleDelete(school.id)}>
                          Remove School
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination-info">
          Showing 1-5 of 78
          <div className="pagination-controls">
            <button className="pagination-btn"><img src="/icons/arrow-left.png" alt="Previous" /></button>
            <button className="pagination-btn"><img src="/icons/arrow-right.png" alt="Next" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolManagement;
