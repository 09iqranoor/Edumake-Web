import React, { useState } from 'react';
import './SupportTickets.css';
import PageHeader from './PageHeader';

// Icons
const StatIconNew = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FF4D4F" strokeWidth="1.5" />
        <path d="M12 7V13" stroke="#FF4D4F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 16V16.5" stroke="#FF4D4F" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const StatIconProgress = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FAAD14" strokeWidth="1.5" />
        <path d="M12 7V12L15 15" stroke="#FAAD14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const StatIconWaiting = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#52C41A" strokeWidth="1.5" />
        <path d="M8 12H16" stroke="#52C41A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const StatIconResolved = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#F759AB" strokeWidth="1.5" />
        <path d="M8 12L11 15L16 9" stroke="#F759AB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6L18 18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Interfaces
interface Comment {
    id: string;
    author: string;
    avatar?: string;
    message: string;
    timeAgo: string;
    isAdmin: boolean;
}

interface Ticket {
    id: string;
    ticketId: string;
    title: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'New' | 'In Progress' | 'Waiting' | 'Resolved';
    school: {
        name: string;
        avatar?: string;
    };
    timeAgo: string;
    comments?: Comment[];
}

const SupportTickets: React.FC = () => {
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

    // Mock Data
    const tickets: Ticket[] = [
        {
            id: '1',
            ticketId: 'T-1001',
            title: 'Unable to add new students',
            priority: 'High',
            status: 'New',
            school: { name: 'Lead British Int\'l School' },
            timeAgo: '2 hours ago',
            comments: [
                {
                    id: 'c1',
                    author: "Lead British Int'l School",
                    message: "We're experiencing an issue with adding new students to our system. Every time we try to add a student, we get an error message.",
                    timeAgo: "2 hours ago",
                    isAdmin: false
                },
                {
                    id: 'c2',
                    author: "Admin User",
                    message: "Thank you for reporting this issue. I'm looking into it now.",
                    timeAgo: "30 minutes ago",
                    isAdmin: true
                }
            ]
        },
        {
            id: '2',
            ticketId: 'T-1002',
            title: 'Payment gateway integration issue',
            priority: 'High',
            status: 'In Progress',
            school: { name: 'Riverside Academy', avatar: 'https://ui-avatars.com/api/?name=RA&background=2C3E50&color=fff' },
            timeAgo: '2 hours ago'
        },
        {
            id: '3',
            ticketId: 'T-1003',
            title: 'Feature request: Dark mode',
            priority: 'Medium',
            status: 'In Progress',
            school: { name: 'Oakwood Elementary', avatar: 'https://ui-avatars.com/api/?name=OE&background=2C3E50&color=fff' },
            timeAgo: '2 hours ago'
        },
        {
            id: '4',
            ticketId: 'T-1004',
            title: 'How to export students report',
            priority: 'Low',
            status: 'Waiting',
            school: { name: 'Riverside Academy', avatar: 'https://ui-avatars.com/api/?name=RA&background=2C3E50&color=fff' },
            timeAgo: '2 hours ago'
        }
    ];

    // Stats
    const stats = {
        new: tickets.filter(t => t.status === 'New').length,
        inProgress: tickets.filter(t => t.status === 'In Progress').length,
        waiting: tickets.filter(t => t.status === 'Waiting').length,
        resolved: tickets.filter(t => t.status === 'Resolved').length
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'High': return 'red';
            case 'Medium': return 'yellow';
            case 'Low': return 'green';
            default: return 'gray';
        }
    };

    const renderColumn = (title: string, status: string, count: number) => (
        <div className="ticket-column">
            <div className="column-header">
                <h3>{title}</h3>
                <span className="count-badge">{count}</span>
            </div>
            <div className="column-content">
                {tickets.filter(t => t.status === status).map(ticket => (
                    <div key={ticket.id} className="ticket-card" onClick={() => setSelectedTicket(ticket)}>
                        <div className="card-header">
                            <span className="ticket-id">{ticket.ticketId}</span>
                            <span className={`priority-badge ${getPriorityColor(ticket.priority)}`}>
                                {ticket.priority}
                            </span>
                        </div>
                        <h4 className="ticket-title">{ticket.title}</h4>
                        <div className="school-info">
                            <div className="avatar">
                                {ticket.school.avatar ? <img src={ticket.school.avatar} alt="" /> : <div className="avatar-placeholder" />}
                            </div>
                            <span className="school-name">{ticket.school.name}</span>
                        </div>
                        <div className="ticket-footer">
                            <span className="time-ago">{ticket.timeAgo}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="support-tickets-page">
            <PageHeader
                title="Support Tickets"
                subtitle="Manage and respond to school support requests"
                buttonText=""
                showButton={false}
            />

            {/* Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-info">
                        <span className="stat-label">New</span>
                        <span className="stat-value">{stats.new}</span>
                    </div>
                    <div className="stat-icon-wrapper red">
                        <StatIconNew />
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-info">
                        <span className="stat-label">In Progress</span>
                        <span className="stat-value">{stats.inProgress}</span>
                    </div>
                    <div className="stat-icon-wrapper yellow">
                        <StatIconProgress />
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-info">
                        <span className="stat-label">Waiting</span>
                        <span className="stat-value">{stats.waiting}</span>
                    </div>
                    <div className="stat-icon-wrapper green">
                        <StatIconWaiting />
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-info">
                        <span className="stat-label">Resolved</span>
                        <span className="stat-value">{stats.resolved}</span>
                    </div>
                    <div className="stat-icon-wrapper pink">
                        <StatIconResolved />
                    </div>
                </div>
            </div>

            {/* Kanban Columns */}
            <div className="kanban-board">
                {renderColumn('New', 'New', stats.new)}
                {renderColumn('In Progress', 'In Progress', stats.inProgress)}
                {renderColumn('Waiting', 'Waiting', stats.waiting)}
            </div>

            {/* Ticket Detail Modal */}
            {selectedTicket && (
                <div className="modal-overlay" onClick={() => setSelectedTicket(null)}>
                    <div className="ticket-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedTicket(null)}>
                            <CloseIcon />
                        </button>

                        <div className="modal-header">
                            <div className="modal-header-top">
                                <span className="ticket-id-large">{selectedTicket.ticketId}</span>
                                <span className={`priority-badge ${getPriorityColor(selectedTicket.priority)}`}>
                                    {selectedTicket.priority}
                                </span>
                            </div>
                            <h2 className="modal-title">{selectedTicket.title}</h2>
                            <div className="school-info-large">
                                <div className="avatar-large">
                                    {selectedTicket.school.avatar ?
                                        <img src={selectedTicket.school.avatar} alt="" /> :
                                        <div className="avatar-placeholder" />
                                    }
                                </div>
                                <div className="school-details">
                                    <span className="school-name-large">{selectedTicket.school.name}</span>
                                </div>
                            </div>
                        </div>

                        <div className="modal-content">
                            {selectedTicket.comments?.map((comment, index) => (
                                <div key={index} className="comment-item">
                                    <div className="comment-header">
                                        <div className="comment-author-avatar">
                                            {comment.isAdmin ?
                                                <div className="admin-avatar-placeholder" /> :
                                                (selectedTicket.school.avatar ?
                                                    <img src={selectedTicket.school.avatar} alt="" /> :
                                                    <div className="avatar-placeholder" />)
                                            }
                                        </div>
                                        <span className="comment-author">{comment.author}</span>
                                        <span className="comment-time">{comment.timeAgo}</span>
                                    </div>
                                    <p className="comment-message">{comment.message}</p>
                                </div>
                            ))}
                        </div>

                        <div className="modal-footer">
                            <textarea placeholder="Type your reply..." className="reply-input" rows={3}></textarea>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SupportTickets;
