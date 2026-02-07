import React, { useState } from 'react';
import './Communication.css';
import PageHeader from './PageHeader';
import ComposeAnnouncement from './ComposeAnnouncement';

// Icons
const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M1.5 4L8 8.5L14.5 4" stroke="#00B2FF" strokeWidth="1.5" />
    <rect x="1.5" y="2.5" width="13" height="11" rx="2.5" stroke="#00B2FF" strokeWidth="1.5" />
  </svg>
);

const InAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2.91" y="0.83" width="10.18" height="3.47" rx="0.87" fill="#FBBC04" />
    <path d="M12.09 11.83H3.91C3.41 11.83 3 11.42 3 10.92V5.83C3 5.33 3.41 4.92 3.91 4.92H12.09C12.59 4.92 13 5.33 13 5.83V10.92C13 11.42 12.59 11.83 12.09 11.83Z" fill="#FBBC04" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.33 10.11V16.59" stroke="#292D32" strokeWidth="1.5" />
    <path d="M12 7.89V16.59" stroke="#292D32" strokeWidth="1.5" />
    <path d="M15.67 13.03V16.59" stroke="#292D32" strokeWidth="1.5" />
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5" />
  </svg>
);

const AddIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface Announcement {
  id: number;
  subject: string;
  recipients: { label: string; count: number };
  delivery: ('Email' | 'In-App')[];
  status: 'sent' | 'scheduled' | 'drafts';
  deliveryStats: { delivered: number; failed: number };
  dateSent: string;
  rowHeight?: string;
}

const Communication: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sent' | 'scheduled' | 'drafts'>('sent');
  const [isComposing, setIsComposing] = useState(false);

  const announcements: Announcement[] = [
    // ... data
    {
      id: 1,
      subject: 'New Feature Launch: Advanced Analytics',
      recipients: { label: 'All Schools', count: 345 },
      delivery: ['Email', 'In-App'],
      status: 'sent',
      deliveryStats: { delivered: 221, failed: 2 },
      dateSent: '15/01/2025',
    },
    {
      id: 2,
      subject: 'Scheduled Maintenance Notice',
      recipients: { label: 'Premium & Standard', count: 217 },
      delivery: ['Email'],
      status: 'sent',
      deliveryStats: { delivered: 209, failed: 0 },
      dateSent: '15/01/2025',
    },
    {
      id: 3,
      subject: 'Payment Reminder',
      recipients: { label: 'Schools with Overdue', count: 12 },
      delivery: ['Email', 'In-App'],
      status: 'sent',
      deliveryStats: { delivered: 209, failed: 0 },
      dateSent: '15/01/2025',
    }
  ];

  const filteredAnnouncements = announcements.filter(item => item.status === activeTab);

  if (isComposing) {
    return <ComposeAnnouncement onBack={() => setIsComposing(false)} />;
  }

  return (
    <div className="communication-page">
      <PageHeader
        title="Communications"
        subtitle="Send announcements and messages to schools"
        buttonText="Compose Announcements"
        buttonIcon={<AddIcon />}
        onButtonClick={() => setIsComposing(true)}
      />

      <div className="communication-content">
        {/* ... existing content ... */}
        {/* Tabs */}
        <div className="tabs-container">
          <div className="tabs-wrapper">
            <button
              className={`tab-btn ${activeTab === 'sent' ? 'active' : ''}`}
              onClick={() => setActiveTab('sent')}
            >
              Sent Announcements
            </button>
            <button
              className={`tab-btn ${activeTab === 'scheduled' ? 'active' : ''}`}
              onClick={() => setActiveTab('scheduled')}
            >
              Scheduled
            </button>
            <button
              className={`tab-btn ${activeTab === 'drafts' ? 'active' : ''}`}
              onClick={() => setActiveTab('drafts')}
            >
              Drafts
            </button>
          </div>
        </div>

        {/* Table / List */}
        <div className="comm-table-container">
          {filteredAnnouncements.length > 0 ? (
            <>
              {/* Header Row */}
              <div className="comm-table-header">
                <div className="col subject-col">Subjects</div>
                <div className="col recipient-col">Recipents</div>
                <div className="col delivery-col">Delivery</div>
                <div className="col status-col">Status</div>
                <div className="col date-col">Date Sent</div>
                <div className="col action-col">Actions</div>
              </div>

              <div className="comm-table-body">
                {filteredAnnouncements.map((item) => (
                  <div key={item.id} className="comm-table-row">
                    <div className="col subject-col">
                      <span className="subject-text">{item.subject}</span>
                    </div>

                    <div className="col recipient-col">
                      <span className="recipient-label">{item.recipients.label}</span>
                      <span className="recipient-count">{item.recipients.count} schools</span>
                    </div>

                    <div className="col delivery-col">
                      <div className="delivery-badges">
                        {item.delivery.map(type => (
                          <div key={type} className={`badge delivery-badge ${type.toLowerCase().replace('-', '')}`}>
                            {type === 'Email' ? <EmailIcon /> : <InAppIcon />}
                            <span>{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col status-col">
                      <div className="status-badges">
                        {item.deliveryStats.delivered > 0 && (
                          <div className="badge status-success">
                            <span className="dot success"></span>
                            {item.deliveryStats.delivered} delivered
                          </div>
                        )}
                        {item.deliveryStats.failed > 0 && (
                          <div className="badge status-failed">
                            <span className="dot failed"></span>
                            {item.deliveryStats.failed} failed
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col date-col">
                      <span className="date-text">{item.dateSent}</span>
                    </div>

                    <div className="col action-col">
                      <button className="analytics-btn">
                        <AnalyticsIcon />
                        <span>Analytics</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <p>
                {activeTab === 'scheduled' && 'No Scheduled Announcements'}
                {activeTab === 'drafts' && 'No Draft Announcements'}
                {activeTab === 'sent' && 'No Sent Announcements'}
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Communication;