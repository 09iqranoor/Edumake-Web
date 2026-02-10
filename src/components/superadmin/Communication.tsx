// Communication.tsx
import React, { useState } from 'react';
import './Communication.css';
import PageHeader from './PageHeader';

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M1.5 4L8 8.5L14.5 4" stroke="#00B2FF" strokeWidth="1.5" />
    <rect x="1.5" y="2.5" width="13" height="11" rx="2.5" stroke="#00B2FF" strokeWidth="1.5" />
  </svg>
);

const InAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2.91" y="0.83" width="10.18" height="3.47" rx="0.87" fill="#FBBC04"/>
    <path d="M12.09 11.83H3.91C3.41 11.83 3 11.42 3 10.92V5.83C3 5.33 3.41 4.92 3.91 4.92H12.09C12.59 4.92 13 5.33 13 5.83V10.92C13 11.42 12.59 11.83 12.09 11.83Z" fill="#FBBC04"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.33 10.11V16.59" stroke="#292D32" strokeWidth="1.5"/>
    <path d="M12 7.89V16.59" stroke="#292D32" strokeWidth="1.5"/>
    <path d="M15.67 13.03V16.59" stroke="#292D32" strokeWidth="1.5"/>
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" strokeWidth="1.5"/>
  </svg>
);

const AddIcon = () => (
  <img src="/icons/add-2.png" alt="add" width={24} height={24} />
);

interface Announcement {
  id: number;
  subject: string;
  recipients: { label: string; count: number };
  delivery: ('Email' | 'In-App')[];
  status: { delivered: number; failed: number };
  dateSent: string;
  rowHeight: 'row-1' | 'row-2' | 'row-3';
}

const Communication: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sent' | 'scheduled' | 'drafts'>('sent');

  const announcements: Announcement[] = [
    {
      id: 1,
      subject: 'New Feature Launch: Advanced Analytics',
      recipients: { label: 'All Schools', count: 345 },
      delivery: ['Email', 'In-App'],
      status: { delivered: 221, failed: 2 },
      dateSent: '15/01/2025',
      rowHeight: 'row-1'
    },
    {
      id: 2,
      subject: 'Scheduled Maintenance Notice',
      recipients: { label: 'Premium & Standard', count: 217 },
      delivery: ['Email'],
      status: { delivered: 209, failed: 0 },
      dateSent: '15/01/2025',
      rowHeight: 'row-2'
    },
    {
      id: 3,
      subject: 'Welcome to Our New Platform!',
      recipients: { label: 'New Schools', count: 45 },
      delivery: ['Email', 'In-App'],
      status: { delivered: 45, failed: 3 },
      dateSent: '14/01/2025',
      rowHeight: 'row-3'
    }
  ];

  return (
    <div className="communication-page">
      <PageHeader
        title="Communications"
        subtitle="Manage your announcements and messages"
        buttonText="New Announcement"
        buttonIcon={<AddIcon />}
      />

      <div className="communication-content">

        <div className="tabs-section">
          {['sent', 'scheduled', 'drafts'].map(tab => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab as any)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>

        <div className="table-container">
          <div className="table-header">
            <div className="table-header-row">
              <div className="header-column subjects-col">Subjects</div>
              <div className="header-column recipients-col">Recipients</div>
              <div className="header-column delivery-col">Delivery</div>
              <div className="header-column status-col">Status</div>
              <div className="header-column date-col">Date Sent</div>
              <div className="header-column actions-col">Actions</div>
            </div>
            <div className="header-divider"></div>
          </div>

          <div className="table-body">
            {announcements.map(item => (
              <div key={item.id} className={`announcement-row ${item.rowHeight}`}>
                <div className="cell subject-cell">
                  <div className="subject-text">{item.subject}</div>
                </div>

                <div className="cell recipients-cell">
                  <div className="recipient-label">{item.recipients.label}</div>
                  <div className="recipient-count">{item.recipients.count} schools</div>
                </div>

                <div className="cell delivery-cell">
                  <div className="delivery-methods">
                    {item.delivery.map(type => (
                      <div key={type} className={`delivery-method ${type.toLowerCase().replace('-', '')}`}>
                        <div className="method-icon">
                          {type === 'Email' ? <EmailIcon /> : <InAppIcon />}
                        </div>
                        <div className="method-text">{type}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="cell status-cell">
                  <div className="status-badge delivered">
                    <div className="status-dot"></div>
                    {item.status.delivered} delivered
                  </div>
                  {item.status.failed > 0 && (
                    <div className="status-badge failed">
                      <div className="status-dot"></div>
                      {item.status.failed} failed
                    </div>
                  )}
                </div> */}
                 <div className="cell delivery-cell">
                  <div className="delivery-methods">
                    {item.delivery.map(type => (
                      <div key={type} className={`delivery-method ${type.toLowerCase().replace('-', '')}`}>
                        
                        <div className="method-text">{type}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cell date-cell">{item.dateSent}</div>

                <div className="cell actions-cell">
                  <button className="analytics-button">
                    <div className="analytics-icon">
                      <AnalyticsIcon />
                    </div>
                    <span>Analytics</span>
                  </button>
                </div>
                <div className="row-divider"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Communication;