import React from 'react';
import './SchoolDashboard.css';

// Import images from assets
import backCover from '../../assets/schoolmanagment/backcover.jpg';
import studentsPosing from '../../assets/schoolmanagment/successful-students-posing.png';
import studentAdd from '../../assets/schoolmanagment/student-add.png';
import teacherAdd from '../../assets/schoolmanagment/teacher-add.png';
import subjectAdd from '../../assets/schoolmanagment/add-subject.png';
import classAdd from '../../assets/schoolmanagment/class-add.png';

// Import stats icons
import totalStudentIcon from '../../assets/schoolmanagment/student.png';
import totalTeachersIcon from '../../assets/schoolmanagment/users.png';
import totalSubjectsIcon from '../../assets/schoolmanagment/book-info.png';
import totalClassesIcon from '../../assets/schoolmanagment/calendar.png';

// Import new components
import AttendanceChart from './AttendanceChart';
import PaymentsList from './PaymentsList';

const SchoolDashboard: React.FC = () => {
    return (
        <div className="school-dashboard">
            {/* Welcome Banner */}
            <div className="welcome-banner" style={{ '--banner-bg': `url(${backCover})` } as React.CSSProperties}>
                <div className="welcome-content">
                    <div className="date-badge">
                        <img src={totalClassesIcon} alt="date" style={{ width: '16px', filter: 'brightness(0) invert(1)' }} />
                        <span>Nov 14, 2025  09:13AM</span>
                    </div>
                    <h1 className="welcome-title">Welcome Lead British Int'l School</h1>
                    <p className="welcome-subtitle">
                        Manage your school's classes, teachers, and students all in one place
                    </p>
                </div>
                <div className="welcome-illustration">
                    <img src={studentsPosing} alt="Students" />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                {[
                    { title: 'Total Student', value: '1563', trend: '+ 18.75%', icon: totalStudentIcon, color: 'blue' },
                    { title: 'Total Teachers', value: '98', trend: '+ 10.75%', icon: totalTeachersIcon, color: 'yellow' },
                    { title: 'Total Subjects', value: '30', trend: '+ 10.75%', icon: totalSubjectsIcon, color: 'green' },
                    { title: 'Total Classes', value: '18', trend: '+ 18.75%', icon: totalClassesIcon, color: 'pink' },
                ].map((stat, idx) => (
                    <div key={idx} className="stat-card">
                        <div className="stat-header">
                            <span className="stat-title">{stat.title}</span>
                        </div>
                        <div className="stat-header">
                            <span className="stat-value">{stat.value}</span>
                            <div className={`stat-icon icon-${stat.color}`}>
                                <img src={stat.icon} alt={stat.title} />
                            </div>
                        </div>


                        <div className="stat-trend trend-up">
                            <img src="/icons/status-up.png" alt="up" />
                            <span>{stat.trend}</span>
                            <span className="trend-label">up last week</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Action Cards Grid */}
            <div className="action-grid">
                {[
                    { label: 'Add Student', color: 'blue', img: studentAdd },
                    { label: 'Add Teacher', color: 'yellow', img: teacherAdd },
                    { label: 'Add Subject', color: 'green', img: subjectAdd },
                    { label: 'Add Class', color: 'pink', img: classAdd },
                ].map((action, idx) => (
                    <div key={idx} className={`action-card card-${action.color}`}>
                        <div className="action-illustration">
                            <img src={action.img} alt={action.label} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Middle Section: Attendance & Payments */}
            <div className="middle-section">
                <AttendanceChart />
                <PaymentsList />
            </div>

            {/* Bottom Section: Events & Notifications */}
            <div className="bottom-section" style={{ marginBottom: '20px' }}>
                <div className="dashboard-card events-card">
                    <div className="card-header">
                        <h2 className="card-title">Upcoming Events</h2>
                        <button className="view-all">View all</button>
                    </div>
                    <div className="events-list">
                        {[
                            { title: 'Spelling Bee for JSS1', date: '12/09/2025', location: 'Lead British School Multipurpose Hall', icon: '/icons/Group22.png' },
                            { title: 'Science Fairs', date: '12/09/2025', location: 'Lead British School Multipurpose Hall', icon: '/icons/Group22.png' },
                            { title: 'Maths Competition', date: '11/09/2025', location: 'Lead British School Multipurpose Hall', icon: '/icons/Group22.png' },
                        ].map((event, idx) => (
                            <div key={idx} className="event-item">
                                <div className="event-icon-container">
                                    <img src={event.icon} alt="event" />
                                </div>
                                <div className="event-details">
                                    <div className="event-title">{event.title}</div>
                                    <div className="event-location">📍 {event.location}</div>
                                    <div className="event-date">📅 {event.date}</div>
                                </div>
                            </div>
                        ))}
                        <button className="add-event-btn">
                            + Add New Event
                        </button>
                    </div>
                </div>

                <div className="dashboard-card notifications-card">
                    <div className="card-header">
                        <h2 className="card-title">Notifications</h2>
                        <button className="view-all">View all</button>
                    </div>
                    <div className="notifications-list">
                        {[
                            { user: 'Mrs. K.K. Oseni', action: 'posted English Language assignment for JSS1A', time: 'Today at 12:14PM', avatar: '/icons/profile.png' },
                            { user: 'System', action: 'Mathematics test result has just been uploaded.', time: 'Yesterday at 09:15AM', avatar: '/icons/Group22.png' },
                            { user: 'System', action: 'Mathematics test result has just been uploaded.', time: 'Yesterday at 09:15AM', avatar: '/icons/Group22.png' },
                        ].map((notif, idx) => (
                            <div key={idx} className="notif-item">
                                <img src={notif.avatar} alt="user" className="notif-avatar" />
                                <div className="notif-content">
                                    <p className="notif-text">
                                        <strong>{notif.user}</strong> {notif.action}
                                    </p>
                                    <span className="notif-time">{notif.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolDashboard;
