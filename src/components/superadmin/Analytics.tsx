import React, { useState } from 'react';
import './Analytics.css';

type TabId = 'revenue' | 'subscription' | 'school' | 'usage';

const Analytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('revenue');

  const tabs: { id: TabId; label: string }[] = [
    { id: 'revenue', label: 'Revenue Overview' },
    { id: 'subscription', label: 'Subscription Analytics' },
    { id: 'school', label: 'School Performance' },
    { id: 'usage', label: 'Usage Statistics' },
  ];

  const handleExport = () => {
    console.log('Export analytics...');
    alert('Export functionality will be implemented!');
  };

  return (
    <div className="analytics-container">
      {/* Header - same pattern as other sections */}
      <div className="analytics-header-section">
        <div className="analytics-title-section">
          <h1 className="analytics-title">Analytics & Revenue</h1>
          <p className="analytics-subtitle">Track platform performance and financial metrics</p>
        </div>
        <div className="analytics-header-actions">
          <select className="analytics-period-select">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="analytics-export-btn" onClick={handleExport}>
            <img src="/icons/export.png" alt="Export" className="analytics-export-icon" />
            <span className="analytics-export-text">Export</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="analytics-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`analytics-tab ${activeTab === tab.id ? 'analytics-tab--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'revenue' && (
        <div className="analytics-tab-content">
          {/* Metric cards */}
          <div className="analytics-metric-cards">
            <div className="analytics-metric-card">
              <div className="analytics-metric-icon analytics-metric-icon--blue" />
              <div className="analytics-metric-body">
                <span className="analytics-metric-label">Total Revenue</span>
                <span className="analytics-metric-value">$128,450</span>
                <div className="analytics-metric-change analytics-metric-change--positive">
                  <span className="analytics-metric-badge">+12.5%</span>
                  <span className="analytics-metric-change-text">vs last month</span>
                </div>
              </div>
            </div>
            <div className="analytics-metric-card">
              <div className="analytics-metric-icon analytics-metric-icon--yellow" />
              <div className="analytics-metric-body">
                <span className="analytics-metric-label">MRR</span>
                <span className="analytics-metric-value">$119,000</span>
                <div className="analytics-metric-change analytics-metric-change--positive">
                  <span className="analytics-metric-badge">+8.2%</span>
                  <span className="analytics-metric-change-text">vs last month</span>
                </div>
              </div>
            </div>
            <div className="analytics-metric-card">
              <div className="analytics-metric-icon analytics-metric-icon--green" />
              <div className="analytics-metric-body">
                <span className="analytics-metric-label">ARPU</span>
                <span className="analytics-metric-value">$320</span>
                <div className="analytics-metric-change analytics-metric-change--positive">
                  <span className="analytics-metric-badge">+5.1%</span>
                  <span className="analytics-metric-change-text">vs last month</span>
                </div>
              </div>
            </div>
            <div className="analytics-metric-card">
              <div className="analytics-metric-icon analytics-metric-icon--purple" />
              <div className="analytics-metric-body">
                <span className="analytics-metric-label">Churn Rate</span>
                <span className="analytics-metric-value">2.4%</span>
                <div className="analytics-metric-change analytics-metric-change--negative">
                  <span className="analytics-metric-badge">+0.3%</span>
                  <span className="analytics-metric-change-text">vs last month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Trend bar chart */}
          <div className="analytics-chart-card analytics-chart-card--full">
            <div className="analytics-chart-header">
              <h3 className="analytics-chart-title">Revenue Trend</h3>
              <p className="analytics-chart-subtitle">Monthly revenue breakdown</p>
            </div>
            <div className="analytics-bar-chart">
              <div className="analytics-bar-chart-y">
                <span>2,000,000</span>
                <span>1,500,000</span>
                <span>1,000,000</span>
                <span>500,000</span>
                <span>0</span>
              </div>
              <div className="analytics-bar-chart-area">
                <div className="analytics-bar-chart-bars">
                  {['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'].map((month, i) => (
                    <div key={month} className="analytics-bar-group">
                      <div className="analytics-bar analytics-bar--collected" style={{ height: `${30 + i * 8 + (i % 3) * 5}%` }} />
                      <div className="analytics-bar analytics-bar--pending" style={{ height: `${20 + i * 5}%` }} />
                      <div className="analytics-bar analytics-bar--premium" style={{ height: `${25 + i * 6}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="analytics-bar-chart-x">
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
                <span>Feb</span>
              </div>
            </div>
            <div className="analytics-chart-legend">
              <div className="analytics-legend-item">
                <span className="analytics-legend-dot analytics-legend-dot--collected" />
                <span>Collected</span>
              </div>
              <div className="analytics-legend-item">
                <span className="analytics-legend-dot analytics-legend-dot--pending" />
                <span>Pending</span>
              </div>
              <div className="analytics-legend-item">
                <span className="analytics-legend-dot analytics-legend-dot--premium" />
                <span>Premium</span>
              </div>
            </div>
          </div>

          {/* Two line charts row */}
          <div className="analytics-charts-row">
            <div className="analytics-chart-card">
              <div className="analytics-chart-header">
                <h3 className="analytics-chart-title">Monthly Recurring Revenue</h3>
                <p className="analytics-chart-subtitle">MRR over time</p>
              </div>
              <div className="analytics-line-chart">
                <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke="#8979FF"
                    strokeWidth="2"
                    points="0,100 50,85 100,70 150,55 200,45 250,35 300,25"
                  />
                </svg>
              </div>
            </div>
            <div className="analytics-chart-card">
              <div className="analytics-chart-header">
                <h3 className="analytics-chart-title">Average Revenue Per User</h3>
                <p className="analytics-chart-subtitle">ARPU trend</p>
              </div>
              <div className="analytics-line-chart">
                <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke="#3CC3DF"
                    strokeWidth="2"
                    points="0,30 50,45 100,55 150,65 200,75 250,85 300,95"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'subscription' && (
        <div className="analytics-tab-content analytics-tab-content--subscription">
          <div className="analytics-subscription-layout">
            {/* Plan distribution donut */}
            <div className="analytics-chart-card analytics-donut-card">
              <div className="analytics-chart-header">
                <h3 className="analytics-chart-title">Plan Distribution</h3>
                <p className="analytics-chart-subtitle">Subscription breakdown</p>
              </div>
              <div className="analytics-donut-wrapper">
                <div
                  className="analytics-donut"
                  style={{
                    background: `conic-gradient(
                      #7B9FFF 0deg 172deg,
                      #8979FF 172deg 316deg,
                      #FF928A 316deg 360deg
                    )`,
                  }}
                >
                  <div className="analytics-donut-hole">
                    <span className="analytics-donut-center-value">347</span>
                  </div>
                </div>
                <div className="analytics-donut-legend">
                  <div className="analytics-donut-legend-item">
                    <span className="analytics-donut-legend-dot" style={{ backgroundColor: '#7B9FFF' }} />
                    <span>Regular</span>
                    <span className="analytics-donut-legend-pct">47.79%</span>
                  </div>
                  <div className="analytics-donut-legend-item">
                    <span className="analytics-donut-legend-dot" style={{ backgroundColor: '#8979FF' }} />
                    <span>Basic</span>
                    <span className="analytics-donut-legend-pct">40.09%</span>
                  </div>
                  <div className="analytics-donut-legend-item">
                    <span className="analytics-donut-legend-dot" style={{ backgroundColor: '#FF928A' }} />
                    <span>Standard</span>
                    <span className="analytics-donut-legend-pct">7.78%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions card */}
            <div className="analytics-chart-card analytics-quick-actions-card">
              <h3 className="analytics-quick-actions-title">Quick Actions</h3>
              <div className="analytics-quick-actions-list">
                <div className="analytics-quick-action-row">
                  <span className="analytics-quick-action-label">Total Active Subscribers</span>
                  <span className="analytics-quick-action-value">347</span>
                </div>
                <div className="analytics-quick-action-row">
                  <span className="analytics-quick-action-label">New This Month</span>
                  <span className="analytics-quick-action-value analytics-quick-action-value--green">-12</span>
                </div>
                <div className="analytics-quick-action-row">
                  <span className="analytics-quick-action-label">Upgrades This Month</span>
                  <span className="analytics-quick-action-value">0</span>
                </div>
                <div className="analytics-quick-action-row">
                  <span className="analytics-quick-action-label">Downgrades This Month</span>
                  <span className="analytics-quick-action-value analytics-quick-action-value--red">6</span>
                </div>
                <div className="analytics-quick-action-row">
                  <span className="analytics-quick-action-label">Cancellation This Month</span>
                  <span className="analytics-quick-action-value analytics-quick-action-value--red">6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'school' && (
        <div className="analytics-tab-content">
          <div className="analytics-chart-card analytics-school-performance-card">
            <h3 className="analytics-section-title">Top Performing Schools</h3>
            <div className="analytics-school-table">
              <div className="analytics-school-table-header">
                <div className="analytics-school-th analytics-school-th--school">School</div>
                <div className="analytics-school-th">Students</div>
                <div className="analytics-school-th">Active Users %</div>
                <div className="analytics-school-th">Monthly Revenue</div>
              </div>
              {[
                { name: "Lead British Int'l School", students: 1250, activePct: 95, revenue: '$299' },
                { name: 'Riverside Academy', students: 2100, activePct: 83, revenue: '$799' },
                { name: 'Oakwood Elementary', students: 680, activePct: 72, revenue: '$99' },
                { name: 'Central School District', students: 1580, activePct: 88, revenue: '$399' },
                { name: 'Greenfield College', students: 3200, activePct: 91, revenue: '$599' },
              ].map((school, idx) => (
                <div key={idx} className="analytics-school-row">
                  <div className="analytics-school-cell analytics-school-cell--school">
                    <div className="analytics-school-avatar" />
                    <span className="analytics-school-name">{school.name}</span>
                  </div>
                  <div className="analytics-school-cell">{school.students.toLocaleString()}</div>
                  <div className="analytics-school-cell analytics-school-cell--progress">
                    <div className="analytics-progress-track">
                      <div
                        className="analytics-progress-fill"
                        style={{ width: `${school.activePct}%` }}
                      />
                    </div>
                    <span className="analytics-progress-pct">{school.activePct}%</span>
                  </div>
                  <div className="analytics-school-cell analytics-school-cell--revenue">{school.revenue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'usage' && (
        <div className="analytics-tab-content">
          <div className="analytics-chart-card analytics-usage-card">
            <h3 className="analytics-section-title">Platform Usage Trends</h3>
            <div className="analytics-usage-chart">
              <div className="analytics-usage-y-axis">
                <span>20000</span>
                <span>16000</span>
                <span>12000</span>
                <span>8000</span>
                <span>4000</span>
                <span>0</span>
              </div>
              <div className="analytics-usage-chart-main">
                <div className="analytics-usage-bars">
                  {[
                    { month: 'Jan', active: 85, login: 70 },
                    { month: 'Feb', active: 72, login: 65 },
                    { month: 'Mar', active: 90, login: 78 },
                    { month: 'Apr', active: 78, login: 72 },
                    { month: 'May', active: 95, login: 88 },
                    { month: 'Jun', active: 88, login: 82 },
                  ].map((d) => (
                    <div key={d.month} className="analytics-usage-bar-group">
                      <div
                        className="analytics-usage-bar analytics-usage-bar--active"
                        style={{ height: `${d.active}%` }}
                      />
                      <div
                        className="analytics-usage-bar analytics-usage-bar--login"
                        style={{ height: `${d.login}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="analytics-usage-x-axis">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
            <div className="analytics-chart-legend">
              <div className="analytics-legend-item">
                <span className="analytics-legend-dot analytics-usage-legend--active" />
                <span>Active Users</span>
              </div>
              <div className="analytics-legend-item">
                <span className="analytics-legend-dot analytics-usage-legend--login" />
                <span>Total Login</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
