import React, { useState } from 'react';
import './AuditLogs.css';

interface AuditLog {
    id: number;
    timestamp: string;
    action: string;
    category: string;
    actor: string;
    email: string;
    target: string;
    status: 'Success' | 'Failed';
    ipAddress: string;
}

const AuditLogs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const initialAuditLogs: AuditLog[] = [
        {
            id: 1,
            timestamp: '12/09/2025 12:34:45',
            action: 'School Suspended',
            category: 'School Management',
            actor: 'Admin User',
            email: 'edumake@gmail.com',
            target: 'Lead British Int\'l School',
            status: 'Success',
            ipAddress: '192.168.1.100'
        },
        {
            id: 2,
            timestamp: '12/09/2025 12:34:45',
            action: 'Subscription Plan Updated',
            category: 'Subscription Changes',
            actor: 'Admin User',
            email: 'edumake@gmail.com',
            target: 'Premium Plan',
            status: 'Success',
            ipAddress: '192.168.1.100'
        },
        {
            id: 3,
            timestamp: '12/09/2025 12:34:45',
            action: 'Admin Login',
            category: 'User Management',
            actor: 'Admin User',
            email: 'edumake@email.com',
            target: 'System',
            status: 'Success',
            ipAddress: '192.168.1.100'
        },
        {
            id: 4,
            timestamp: '12/09/2024 12:34:45',
            action: 'Failed Login Attempt',
            category: 'User Management',
            actor: 'Unknown',
            email: 'unknown@example.com',
            target: 'System',
            status: 'Success',
            ipAddress: '192.168.1.100'
        },
        {
            id: 5,
            timestamp: '12/09/2025 12:34:45',
            action: 'School Created',
            category: 'School Management',
            actor: 'Admin User',
            email: 'edumake@gmail.com',
            target: 'System',
            status: 'Success',
            ipAddress: '192.168.1.100'
        },
        {
            id: 6,
            timestamp: '12/09/2025 12:34:45',
            action: 'School Suspended',
            category: 'School Management',
            actor: 'Admin User',
            email: 'edumake@gmail.com',
            target: 'System',
            status: 'Success',
            ipAddress: '192.168.1.100'
        },
        {
            id: 7,
            timestamp: '12/09/2025 12:34:45',
            action: 'Subscription Plan Updated',
            category: 'Subscription Changes',
            actor: 'Admin User',
            email: 'edumake@gmail.com',
            target: 'System',
            status: 'Success',
            ipAddress: '192.168.1.100'
        },
        {
            id: 8,
            timestamp: '12/09/2025 12:34:45',
            action: 'Admin Login',
            category: 'User Management',
            actor: 'Admin User',
            email: 'edumake@gmail.com',
            target: 'System',
            status: 'Success',
            ipAddress: '192.168.1.100'
        }
    ];

    const [auditLogs, setAuditLogs] = useState<AuditLog[]>(initialAuditLogs);

    const getStatusColor = (status: AuditLog['status']) => {
        switch (status) {
            case 'Success': return { bg: 'rgba(29, 180, 105, 0.12)', text: '#11A75C' };
            case 'Failed': return { bg: 'rgba(232, 45, 45, 0.12)', text: '#E82D2D' };
            default: return { bg: 'rgba(136, 136, 136, 0.12)', text: '#888888' };
        }
    };

    // Pagination logic
    const totalPages = Math.ceil(auditLogs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentLogs = auditLogs.slice(startIndex, endIndex);

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
        console.log('Exporting audit logs...');
        alert('Export functionality will be implemented!');
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm === '') {
            setAuditLogs(initialAuditLogs);
        } else {
            const filteredLogs = initialAuditLogs.filter(log =>
                log.action.toLowerCase().includes(searchTerm) ||
                log.category.toLowerCase().includes(searchTerm) ||
                log.actor.toLowerCase().includes(searchTerm) ||
                log.email.toLowerCase().includes(searchTerm) ||
                log.target.toLowerCase().includes(searchTerm) ||
                log.ipAddress.includes(searchTerm)
            );
            setAuditLogs(filteredLogs);
        }
        setCurrentPage(1);
    };

    return (
        <div className="audit-logs-container">
            {/* Header Section */}
            <div className="header-section">
                <div className="title-section">
                    <h1 className="title">Audit Logs</h1>
                    <p className="subtitle">Track system activities and changes</p>
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
                            placeholder="Search"
                            onChange={handleSearch}
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
                            <span className="filter-label">Action</span>
                            <div className="direction-down">
                                <img src="/icons/down-arrow.png" alt="action" />
                            </div>
                        </div>
                        <div className="filter-item">
                            <span className="filter-label">Actor</span>
                            <div className="direction-down">
                                <img src="/icons/down-arrow.png" alt="actor" />
                            </div>
                        </div>
                        <div className="filter-item">
                            <span className="filter-label">Status</span>
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
                            <span className="header-cell col-timestamp">Timestamp</span>
                            <span className="header-cell col-action">Action</span>
                            <span className="header-cell col-actor">Actor</span>
                            <span className="header-cell col-target">Target</span>
                            <span className="header-cell col-status">Status</span>
                            <span className="header-cell col-ip">IP Address</span>
                            <span className="header-cell col-actions">Actions</span>
                        </div>
                        <div className="header-line"></div>
                    </div>

                    {/* Table Body */}
                    <div className="table-body">
                        {currentLogs.map((log) => {
                            const statusColor = getStatusColor(log.status);

                            return (
                                <div key={log.id} className="table-row-container">
                                    <div className="table-row">
                                        <div className="timestamp-cell col-timestamp">
                                            <div className="timestamp-date">{log.timestamp.split(' ')[0]}</div>
                                            <div className="timestamp-time">{log.timestamp.split(' ')[1]}</div>
                                        </div>

                                        <div className="action-cell col-action">
                                            <div className="action-name">{log.action}</div>
                                            <div className="action-category">{log.category}</div>
                                        </div>

                                        <div className="actor-cell col-actor">
                                            <div className="actor-name">{log.actor}</div>
                                            <div className="actor-email">{log.email}</div>
                                        </div>

                                        <div className="target-cell col-target">
                                            {log.target}
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
                                                        backgroundColor: log.status === 'Success' ? '#11A75C' : '#E82D2D'
                                                    }}
                                                ></div>
                                                <span className="status-text">{log.status}</span>
                                            </div>
                                        </div>

                                        <div className="ip-cell col-ip">
                                            {log.ipAddress}
                                        </div>

                                        <div className="actions-cell col-actions">
                                            {/* For consistency, added actions cell if needed later */}
                                            <button className="more-button">
                                                <img src="/icons/more.png" alt="more" style={{ width: '24px' }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="pagination-section">
                <span className="pagination-text">
                    Showing {startIndex + 1}-{Math.min(endIndex, auditLogs.length)} of {auditLogs.length}
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
        </div>
    );
};

export default AuditLogs;