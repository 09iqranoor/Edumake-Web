import React, { useState, useMemo } from 'react';
import './AuditLogs.css';
import FilterHeader from './FilterHeader';

interface AuditLog {
    id: number;
    timestamp: {
        date: string;
        time: string;
    };
    action: {
        title: string;
        category: string;
    };
    actor: {
        name: string;
        email: string;
    };
    target: string;
    status: 'Success' | 'Failed';
    ipAddress: string;
}

const AuditLogs: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [filterPlan, setFilterPlan] = useState('');

    const itemsPerPage = 5;

    const initialLogs: AuditLog[] = [
        {
            id: 1,
            timestamp: { date: '12/09/2025', time: '12:34:45' },
            action: { title: 'School Suspended', category: 'School Management' },
            actor: { name: 'Admin User', email: 'edumake@gmail.com' },
            target: 'Lead British Int\'l School',
            status: 'Success',
            ipAddress: '192.168.1.100'
        },
        {
            id: 2,
            timestamp: { date: '12/09/2025', time: '12:34:45' },
            action: { title: 'Subscription Plan Updated', category: 'Subscription Changes' },
            actor: { name: 'Admin User', email: 'edumake@gmail.com' },
            target: 'Premium Plan',
            status: 'Success',
            ipAddress: '192.168.1.100'
        },
        {
            id: 3,
            timestamp: { date: '12/09/2025', time: '12:34:45' },
            action: { title: 'Admin Login', category: 'User Management' },
            actor: { name: 'Admin User', email: 'edumake@gmail.com' },
            target: 'System',
            status: 'Success',
            ipAddress: '192.168.1.100'
        },
        {
            id: 4,
            timestamp: { date: '12/09/2025', time: '12:34:45' },
            action: { title: 'Failed Login Attempt', category: 'User Management' },
            actor: { name: 'Unknown', email: 'unknown@example.com' },
            target: 'System',
            status: 'Failed',
            ipAddress: '203.168.1.100'
        },
        {
            id: 5,
            timestamp: { date: '12/09/2025', time: '12:34:45' },
            action: { title: 'School Created', category: 'School Management' },
            actor: { name: 'Admin User', email: 'edumake@gmail.com' },
            target: 'System',
            status: 'Success',
            ipAddress: '192.168.1.100'
        }
    ];

    const [logs] = useState<AuditLog[]>(initialLogs);

    const filteredLogs = useMemo(() => {
        return logs.filter(log => {
            const matchesSearch = searchTerm === '' ||
                log.action.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                log.actor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                log.target.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesStatus = filterStatus === '' || log.status === filterStatus;

            return matchesSearch && matchesStatus;
        });
    }, [logs, searchTerm, filterStatus]);

    const getStatusColor = (status: AuditLog['status']) => {
        switch (status) {
            case 'Success': return { bg: 'rgba(29, 180, 105, 0.12)', text: '#11A75C' };
            case 'Failed': return { bg: 'rgba(232, 45, 45, 0.12)', text: '#E82D2D' };
            default: return { bg: 'rgba(136, 136, 136, 0.12)', text: '#888888' };
        }
    };

    const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentLogs = filteredLogs.slice(startIndex, startIndex + itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleReset = () => {
        setSearchTerm('');
        setFilterStatus('');
        setFilterPlan('');
        setCurrentPage(1);
    };

    const statusOptions = [
        { label: 'Success', value: 'Success' },
        { label: 'Failed', value: 'Failed' }
    ];

    const planOptions = [
        { label: 'Basic', value: 'Basic' },
        { label: 'Standard', value: 'Standard' },
        { label: 'Premium', value: 'Premium' }
    ];

    const handleExport = () => {
        console.log('Exporting logs...');
    };

    return (
        <div className="audit-logs-container">
            {/* Header Section */}
            <div className="header-section">
                <div className="title-section">
                    <h1 className="title">Audit Logs</h1>
                    <p className="subtitle">Track system activities and changes</p>
                </div>
                <button className="export-button-logs" onClick={handleExport}>
                    <div className="export-icon">
                        <img src="/icons/export.png" alt="export" />
                    </div>
                    <span className="export-text">Export Logs</span>
                </button>
            </div>

            {/* Controls Section */}
            <FilterHeader
                searchTerm={searchTerm}
                onSearchChange={(val) => { setSearchTerm(val); setCurrentPage(1); }}
                onReset={handleReset}
                searchPlaceholder="search"
                filters={[
                    { label: 'Status', options: statusOptions, value: filterStatus, onChange: setFilterStatus },
                    { label: 'Subscription Type', options: planOptions, value: filterPlan, onChange: setFilterPlan }
                ]}
            />

            {/* Table Container */}
            <div className="table-container-logs">
                {/* Table Header */}
                <div className="table-header">
                    <div className="header-row">
                        <span className="header-cell timestamp-header">Timestamp</span>
                        <span className="header-cell action-header">Action</span>
                        <span className="header-cell actor-header">Actor</span>
                        <span className="header-cell target-header">Target</span>
                        <span className="header-cell status-header">Status</span>
                        <span className="header-cell ip-header">IP Address</span>
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
                                    <div className="timestamp-cell">
                                        <div className="log-date">{log.timestamp.date}</div>
                                        <div className="log-time">{log.timestamp.time}</div>
                                    </div>

                                    <div className="action-cell">
                                        <div className="action-title">{log.action.title}</div>
                                        <div className="action-category">{log.action.category}</div>
                                    </div>

                                    <div className="actor-cell">
                                        <div className="actor-name">{log.actor.name}</div>
                                        <div className="actor-email">{log.actor.email}</div>
                                    </div>

                                    <div className="target-cell">
                                        <span className="target-text">{log.target}</span>
                                    </div>

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

                                    <div className="ip-cell">
                                        {log.ipAddress}
                                    </div>
                                </div>
                                <div className="row-line"></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Pagination */}
            <div className="pagination-section">
                <span className="pagination-text">
                    Showing {startIndex + 1}-{Math.min(startIndex + currentLogs.length, logs.length)} of {logs.length}
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
