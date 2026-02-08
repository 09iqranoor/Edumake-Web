import React, { useState, useEffect, useRef } from 'react';
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const actionMenuRef = useRef<HTMLDivElement>(null);

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
    },
    {
      id: 6,
      name: 'Sunshine High School',
      admin: { name: 'David Wilson', email: 'd.wilson@sunshine.edu' },
      plan: 'Standard',
      status: 'Active',
      students: 980,
      joinDate: '10/01/2025',
      lastActive: '1 day ago',
      avatarColor: '#D9D9D9'
    },
    {
      id: 7,
      name: 'Mountain View Academy',
      admin: { name: 'Lisa Anderson', email: 'l.anderson@mountainview.edu' },
      plan: 'Premium',
      status: 'Active',
      students: 1450,
      joinDate: '05/01/2025',
      lastActive: '4 hours ago',
      avatarColor: '#D9D9D9'
    },
    {
      id: 8,
      name: 'Ocean Side School',
      admin: { name: 'Thomas Lee', email: 't.lee@oceanside.edu' },
      plan: 'Basic',
      status: 'Inactive',
      students: 760,
      joinDate: '20/01/2025',
      lastActive: '5 days ago',
      avatarColor: '#D9D9D9'
    }
  ];

  const [schools, setSchools] = useState<School[]>(initialSchools);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (actionMenuRef.current && !actionMenuRef.current.contains(event.target as Node)) {
        handleCloseMenu();
      }
    };

    if (actionMenu.isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [actionMenu.isOpen]);

  const handleMoreClick = (e: React.MouseEvent, schoolId: number) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // Calculate position - ensure it doesn't go off screen
    let x = rect.right - 163;
    if (x + 163 > viewportWidth) {
      x = viewportWidth - 180;
    }
    if (x < 0) x = 10;

    setActionMenu({
      isOpen: true,
      schoolId,
      position: { x, y: rect.bottom + 5 }
    });
  };

  const handleCloseMenu = () => {
    setActionMenu({ isOpen: false, schoolId: null, position: { x: 0, y: 0 } });
  };

  const handleSuspendSchool = () => {
    if (actionMenu.schoolId) {
      setSchools(schools.map(school =>
        school.id === actionMenu.schoolId
          ? { ...school, status: school.status === 'Active' ? 'Inactive' : 'Active' }
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

  // Pagination logic
  const totalPages = Math.ceil(schools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSchools = schools.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleExport = () => {
    // Export functionality
    console.log('Exporting school data...');
    alert('Export functionality will be implemented!');
  };

  return (
    <div className="schools-management-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="title-section">
          <h1 className="title">Schools Management</h1>
          <p className="subtitle">Manage all registered schools and their subscriptions</p>
        </div>
        <button className="export-button" onClick={handleExport}>
          <div className="export-icon">
            <img src="/icons/export.png" alt="export" />
          </div>
          <span className="export-text">Export</span>
        </button>
      </div>

      {/* Controls Section */}
      <div className="controls-section">
        <div className="controls-row">
          <div className="search-container">
            <div className="search-icon">
              <img src="/icons/search-normal.png" alt="search-icon" />
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search schools..."
            />
          </div>

          <div className="filter-container">
            <div className="filter-item filter-icon-container">
              <div className="filter-icon">
                <img src="/icons/Vector(Stroke).png" alt="filter" />
              </div>
            </div>
            <div className="filter-item">
              <span className="filter-label">Filter By</span>
            </div>
            <div className="filter-item">
              <span className="filter-label">Status</span>
              <div className="direction-down">
                <img src="/icons/down-arrow.png" alt="status" />
              </div>
            </div>
            <div className="filter-item">
              <span className="filter-label">Subscription Type</span>
              <div className="direction-down">
                <img src="/icons/down-arrow.png" alt="status" />
              </div>
            </div>
            <div className="filter-item reset-filter">
              <div className="reset-icon">
                <img src="/icons/reset.png" alt="reset-path" />
              </div>
              <span className="reset-text">Reset Filter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="table-container">
        <div className="table-wrapper">
          {/* Table Header */}
          <div className="table-header">
            <div className="header-row">
              <span className="header-cell col-school">School</span>
              <span className="header-cell col-admin">Admin</span>
              <span className="header-cell col-plan">Plan</span>
              <span className="header-cell col-status">Status</span>
              <span className="header-cell col-students">Students</span>
              <span className="header-cell col-join-date">Join Date</span>
              <span className="header-cell col-last-active">Last Active</span>
              <span className="header-cell col-actions">Actions</span>
            </div>
            <div className="header-line"></div>
          </div>

          {/* Table Body */}
          <div className="table-body">
            {currentSchools.map((school) => {
              const planColor = getPlanColor(school.plan);
              const statusColor = getStatusColor(school.status);

              return (
                <div key={school.id} className="table-row-container">
                  <div className="table-row">
                    <div className="school-cell col-school">
                      <div
                        className="school-avatar"
                        style={{ backgroundColor: school.avatarColor }}
                      ></div>
                      <span className="school-name">{school.name}</span>
                    </div>

                    <div className="admin-cell col-admin">
                      <div className="admin-name">{school.admin.name}</div>
                      <div className="admin-email">{school.admin.email}</div>
                    </div>

                    <div className="col-plan">
                      <div
                        className="plan-badge"
                        style={{
                          backgroundColor: planColor.bg,
                          color: planColor.text
                        }}
                      >
                        {school.plan}
                      </div>
                    </div>

                    <div className="col-status">
                      <div
                        className="status-badge"
                        style={{
                          backgroundColor: statusColor.bg,
                          color: statusColor.text
                        }}
                      >
                        <div
                          className="status-point-circle"
                          style={{
                            backgroundColor: school.status === 'Active' ? '#11A75C' : '#E82D2D'
                          }}
                        ></div>
                        <span className="status-text">{school.status}</span>
                      </div>
                    </div>

                    <div className="students-cell col-students">
                      {school.students.toLocaleString()}
                    </div>

                    <div className="join-date-cell col-join-date">
                      {school.joinDate}
                    </div>

                    <div className="last-active-cell col-last-active">
                      {school.lastActive}
                    </div>

                    <div className="actions-cell col-actions">
                      <button
                        className="more-button"
                        onClick={(e) => handleMoreClick(e, school.id)}
                      >
                        <div className="more-icon">
                          <img src="/icons/more.png" alt="more-icon" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Menu */}
        {actionMenu.isOpen && (
          <div
            ref={actionMenuRef}
            className="action-menu"
            style={{
              left: `${actionMenu.position.x}px`,
              top: `${actionMenu.position.y}px`
            }}
          >
            <div className="menu-header"></div>
            <div className="menu-items">
              <button className="menu-item" onClick={handleSuspendSchool}>
                <span className="menu-text">Suspend School</span>
              </button>
              <button className="menu-item remove-item" onClick={handleRemoveSchool}>
                <span className="remove-text remove-item">Remove School</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Pagination - UPDATED */}
      <div className="pagination-section">
        <span className="pagination-text">
          Showing {startIndex + 1}-{Math.min(endIndex, schools.length)} of {schools.length}
        </span>

        <div className="pagination-controls">
          <button
            className="pagination-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <img src="/icons/arrow-left.png" alt="Previous" />
          </button>

          <button
            className="pagination-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <img src="/icons/arrow-right.png" alt="Next" />
          </button>
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