import React, { useState } from 'react';
import PageHeader from './PageHeader';
import './Communication.css';
import ComposeAnnouncement from './ComposeAnnouncement';
import AnnouncementAnalytics from './AnnouncementAnalytics';

// --- Icons ---
const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 4L8 8.5L14.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="1.5" y="2.5" width="13" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const BellIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14.5C9.10457 14.5 10 13.6046 10 12.5H6C6 13.6046 6.89543 14.5 8 14.5Z" fill="currentColor" />
    <path d="M12.5 11L11.5 8.5V6C11.5 4.067 9.933 2.5 8 2.5C6.067 2.5 4.5 4.067 4.5 6V8.5L3.5 11H12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 1.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TrendUpIcon = () => (
  <img src="/icons/trend-up.png" alt="trend-up" />
);

interface Announcement {
  id: number;
  subject: string;
  recipients: { label: string; count: number };
  delivery: ('Email' | 'In-App')[];
  status: { delivered: number; failed?: number };
  dateSent: string;
}

const Communication: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sent' | 'scheduled' | 'drafts'>('sent');
  const [isComposing, setIsComposing] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  const announcements: Announcement[] = [
    {
      id: 1,
      subject: 'New Feature Launch: Advanced Analytics',
      recipients: { label: 'All Schools', count: 345 },
      delivery: ['Email', 'In-App'],
      status: { delivered: 221, failed: 2 },
      dateSent: '15/01/2025'
    },
    {
      id: 2,
      subject: 'Scheduled Maintenance Notice',
      recipients: { label: 'Premium & Standard', count: 217 },
      delivery: ['Email'],
      status: { delivered: 209 },
      dateSent: '15/01/2025'
    },
    {
      id: 3,
      subject: 'Payment Reminder',
      recipients: { label: 'Schools with Overdue', count: 12 },
      delivery: ['Email', 'In-App'],
      status: { delivered: 209 },
      dateSent: '15/01/2025'
    }
  ];

  const handleCompose = () => {
    setIsComposing(true);
  };

  const handleShowAnalytics = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const handleCloseAnalytics = () => {
    setSelectedAnnouncement(null);
  };

  if (isComposing) {
    return <ComposeAnnouncement onBack={() => setIsComposing(false)} />;
  }

  return (
    <div className="communication-wrapper">
      <PageHeader
        title="Communications"
        subtitle="Send announcements and messages to schools"
        buttonText="Compose Announcements"
        buttonIcon={<PlusIcon />}
        onButtonClick={handleCompose}
        buttonVariant="primary"
      />

      <div className="communication-container">
        {/* Tabs */}
        <div className="comm-tabs">
          <button
            className={`comm-tab ${activeTab === 'sent' ? 'active' : ''}`}
            onClick={() => setActiveTab('sent')}
          >
            Sent Announcements
          </button>
          <button
            className={`comm-tab ${activeTab === 'scheduled' ? 'active' : ''}`}
            onClick={() => setActiveTab('scheduled')}
          >
            Scheduled
          </button>
          <button
            className={`comm-tab ${activeTab === 'drafts' ? 'active' : ''}`}
            onClick={() => setActiveTab('drafts')}
          >
            Drafts
          </button>
        </div>

        {/* Content Card */}
        <div className="comm-table-card">
          {activeTab === 'sent' ? (
            <div className="comm-table-wrapper">
              <table className="comm-table">
                <thead>
                  <tr>
                    <th className="th-subjects">Subjects</th>
                    <th className="th-recipients">Recipients</th>
                    <th className="th-delivery">Delivery</th>
                    <th className="th-status">Status</th>
                    <th className="th-date">Date Sent</th>
                    <th className="th-actions">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {announcements.map((item) => (
                    <tr key={item.id}>
                      <td className="td-subjects">
                        <span className="subject-line">{item.subject}</span>
                      </td>
                      <td className="td-recipients">
                        <div className="recipient-info">
                          <span className="recipient-label">{item.recipients.label}</span>
                          <span className="recipient-count">{item.recipients.count} schools</span>
                        </div>
                      </td>
                      <td className="td-delivery">
                        <div className="comm-delivery-badges">
                          {item.delivery.map(d => (
                            <div key={d} className={`comm-delivery-badge ${d.toLowerCase() === 'email' ? 'email' : 'in-app'}`}>
                              {d === 'Email' ? <EmailIcon /> : <BellIcon />}
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="td-status">
                        <div className="comm-status-badges">
                          <div className="comm-status-badge delivered">
                            <span className="comm-status-dot"></span>
                            {item.status.delivered} delivered
                          </div>
                          {item.status.failed !== undefined && item.status.failed > 0 && (
                            <div className="comm-status-badge failed">
                              <span className="comm-status-dot"></span>
                              {item.status.failed} failed
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="td-date">{item.dateSent}</td>
                      <td className="td-actions">
                        <button className="btn-analytics" onClick={() => handleShowAnalytics(item)}>
                          <TrendUpIcon />
                          <span>Analytics</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '200px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#374151'
            }}>
              {activeTab === 'scheduled' ? 'No Scheduled Announcements' : 'No Draft Announcements'}
            </div>
          )}
        </div>
      </div>

      {/* Analytics Modal */}
      {selectedAnnouncement && (
        <AnnouncementAnalytics
          announcement={selectedAnnouncement}
          onClose={handleCloseAnalytics}
        />
      )}
    </div>
  );
};

export default Communication;
