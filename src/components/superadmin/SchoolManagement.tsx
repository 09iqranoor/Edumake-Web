// SchoolsManagement.tsx
import React, { useState } from 'react';
import './SchoolManagement.css';

interface School {
  id: number;
  name: string;
  admin: {
    name: string;
    email: string;
  };
  plan: 'Premium' | 'Standard' | 'Basic';
  status: 'Active' | 'Inactive';
  students: number;
  joinDate: string;
  lastActive: string;
  avatarColor?: string;
}

interface ActionMenu {
  isOpen: boolean;
  schoolId: number | null;
  position: { x: number; y: number };
}

const SchoolManagement: React.FC = () => {
  const [actionMenu, setActionMenu] = useState<ActionMenu>({
    isOpen: false,
    schoolId: null,
    position: { x: 0, y: 0 }
  });

  const initialSchools: School[] = [
    {
      id: 1,
      name: 'Lead British Int\'l School',
      admin: { name: 'Sarah Johnson', email: 'sarah.j@leadb.edu' },
      plan: 'Premium',
      status: 'Active',
      students: 1259,
      joinDate: '15/01/2025',
      lastActive: '2 hours ago',
      avatarColor: '#D9D9D9'
    },
    {
      id: 2,
      name: 'Riverside Academy',
      admin: { name: 'Michael Chen', email: 'm.chen@riverside.edu' },
      plan: 'Standard',
      status: 'Active',
      students: 1259,
      joinDate: '15/01/2025',
      lastActive: '10 hours ago',
      avatarColor: '#D9D9D9'
    },
    {
      id: 3,
      name: 'Oakwood Elementary',
      admin: { name: 'Emily Davis', email: 'e.davis@oakwood.edu' },
      plan: 'Basic',
      status: 'Inactive',
      students: 1259,
      joinDate: '15/01/2025',
      lastActive: '2 days ago',
      avatarColor: '#D9D9D9'
    },
    {
      id: 4,
      name: 'Central School District',
      admin: { name: 'Robert Martinez', email: 'r.martinez@central.edu' },
      plan: 'Premium',
      status: 'Active',
      students: 1259,
      joinDate: '15/01/2025',
      lastActive: '3 days ago',
      avatarColor: '#D9D9D9'
    },
    {
      id: 5,
      name: 'Greenfield College',
      admin: { name: 'Jessica Brown', email: 'j.brown@greenfield.edu' },
      plan: 'Premium',
      status: 'Active',
      students: 1259,
      joinDate: '15/01/2025',
      lastActive: '6 hours ago',
      avatarColor: '#D9D9D9'
    }
  ];

  const [schools, setSchools] = useState<School[]>(initialSchools);

  const handleMoreClick = (e: React.MouseEvent, schoolId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setActionMenu({
      isOpen: true,
      schoolId,
      position: { x: rect.left - 163, y: rect.top + 40 }
    });
  };

  const handleCloseMenu = () => {
    setActionMenu({ isOpen: false, schoolId: null, position: { x: 0, y: 0 } });
  };

  const handleSuspendSchool = () => {
    if (actionMenu.schoolId) {
      setSchools(schools.map(school => 
        school.id === actionMenu.schoolId 
          ? { ...school, status: 'Inactive' }
          : school
      ));
      handleCloseMenu();
    }
  };

  const handleRemoveSchool = () => {
    if (actionMenu.schoolId) {
      setSchools(schools.filter(school => school.id !== actionMenu.schoolId));
      handleCloseMenu();
    }
  };

  const getPlanColor = (plan: School['plan']) => {
    switch (plan) {
      case 'Premium': return { bg: 'rgba(0, 178, 255, 0.2)', text: '#00B2FF' };
      case 'Standard': return { bg: 'rgba(251, 188, 4, 0.2)', text: '#FBBC04' };
      case 'Basic': return { bg: 'rgba(136, 136, 136, 0.2)', text: '#888888' };
      default: return { bg: 'rgba(136, 136, 136, 0.2)', text: '#888888' };
    }
  };

  const getStatusColor = (status: School['status']) => {
    switch (status) {
      case 'Active': return { bg: 'rgba(29, 180, 105, 0.12)', text: '#11A75C' };
      case 'Inactive': return { bg: 'rgba(232, 45, 45, 0.12)', text: '#E82D2D' };
      default: return { bg: 'rgba(136, 136, 136, 0.12)', text: '#888888' };
    }
  };

  return (
    <div className="schools-management-container">
      {/* Frame 2147224965 */}
      <div className="header-section">
        <div className="title-section">
          <h1 className="title">Schools Management</h1>
          <p className="subtitle">Manage all registered schools and their subscriptions</p>
        </div>
        <button className="export-button">
          <div className="export-icon">
            <div className="vector vector1"></div>
            <div className="vector vector2"></div>
            <div className="vector vector3"></div>
          </div>
          <span className="export-text">Export</span>
        </button>
      </div>

      {/* Frame 2147224664 */}
      <div className="controls-section">
        <div className="controls-row">
          <div className="search-container">
            <div className="search-icon">
              <div className="search-vector search-vector1"></div>
              <div className="search-vector search-vector2"></div>
            </div>
            <span className="search-text">search</span>
          </div>

          <div className="filter-container">
            <div className="filter-item filter-icon-container">
              <div className="filter-icon">
                <div className="filter-path"></div>
                <div className="filter-path filter-path-444"></div>
                <div className="filter-path filter-path-445"></div>
                <div className="filter-path filter-path-446"></div>
              </div>
            </div>
            <div className="filter-item">
              <span className="filter-label">Filter By</span>
            </div>
            <div className="filter-item">
              <span className="filter-label">Status</span>
              <div className="direction-down">
                <div className="direction-down-vector"></div>
              </div>
            </div>
            <div className="filter-item">
              <span className="filter-label">Subscription Type</span>
              <div className="direction-down">
                <div className="direction-down-vector"></div>
              </div>
            </div>
            <div className="filter-item reset-filter">
              <div className="reset-icon">
                <div className="reset-path"></div>
                <div className="reset-path reset-path-colored"></div>
              </div>
              <span className="reset-text">Reset Filter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Frame 2147224976 */}
      <div className="table-container">
        {/* Table Header */}
        <div className="table-header">
          <div className="header-row">
            <span className="header-cell" style={{ left: '0px' }}>School</span>
            <span className="header-cell" style={{ left: '181px' }}>Admin</span>
            <span className="header-cell" style={{ left: '341px' }}>Plan</span>
            <span className="header-cell" style={{ left: '455px' }}>Status</span>
            <span className="header-cell" style={{ left: '579px' }}>Students</span>
            <span className="header-cell" style={{ left: '712px' }}>Join Date</span>
            <span className="header-cell" style={{ left: '847px' }}>Last Active</span>
            <span className="header-cell" style={{ left: '993px' }}>Actions</span>
          </div>
          <div className="header-line"></div>
        </div>

        {/* Table Body */}
        <div className="table-body">
          {schools.map((school) => {
            const planColor = getPlanColor(school.plan);
            const statusColor = getStatusColor(school.status);
            
            return (
              <div key={school.id} className="table-row-container">
                <div className="table-row">
                  <div className="school-cell">
                    <div 
                      className="school-avatar" 
                      style={{ backgroundColor: school.avatarColor }}
                    ></div>
                    <span className="school-name">{school.name}</span>
                  </div>

                  <div className="admin-cell">
                    <div className="admin-name">{school.admin.name}</div>
                    <div className="admin-email">{school.admin.email}</div>
                  </div>

                  <div 
                    className="plan-badge"
                    style={{
                      backgroundColor: planColor.bg,
                      color: planColor.text,
                      left: '341px'
                    }}
                  >
                    {school.plan}
                  </div>

                  <div 
                    className="status-badge"
                    style={{
                      backgroundColor: statusColor.bg,
                      color: statusColor.text,
                      left: '455px'
                    }}
                  >
                    <div className="status-point">
                      <div className="status-point-circle"></div>
                    </div>
                    <span className="status-text">{school.status}</span>
                  </div>

                  <div className="students-cell" style={{ left: '579px' }}>
                    {school.students.toLocaleString()}
                  </div>

                  <div className="join-date-cell" style={{ left: '712px' }}>
                    {school.joinDate}
                  </div>

                  <div className="last-active-cell" style={{ left: '847px' }}>
                    {school.lastActive}
                  </div>

                  <button 
                    className="more-button"
                    style={{ left: '1012px' }}
                    onClick={(e) => handleMoreClick(e, school.id)}
                  >
                    <div className="more-icon">
                      <div className="more-dot more-dot1"></div>
                      <div className="more-dot more-dot2"></div>
                      <div className="more-dot more-dot3"></div>
                    </div>
                  </button>
                </div>
                <div className="row-line"></div>
              </div>
            );
          })}
        </div>

        {/* Action Menu */}
        {actionMenu.isOpen && (
          <div 
            className="action-menu"
            style={{
              left: `${actionMenu.position.x}px`,
              top: `${actionMenu.position.y}px`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="menu-item" onClick={handleSuspendSchool}>
              <span className="menu-text">Suspend School</span>
            </div>
            <div className="menu-item remove-item" onClick={handleRemoveSchool}>
              <span className="remove-text">Remove School</span>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination-section">
        <span className="pagination-text">Showing 1-5 of 78</span>
        <div className="pagination-indicator">
          <div className="indicator-bg"></div>
          <div className="indicator-arrow left-arrow">
            <div className="arrow-path"></div>
          </div>
          <div className="indicator-arrow right-arrow">
            <div className="arrow-path"></div>
          </div>
          <div className="indicator-line"></div>
        </div>
      </div>

      {/* Backdrop for closing menu */}
      {actionMenu.isOpen && (
        <div className="menu-backdrop" onClick={handleCloseMenu} />
      )}
    </div>
  );
};

export default SchoolManagement;