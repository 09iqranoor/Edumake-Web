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

  // Revenue Trend Data
  const revenueTrendData = {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    datasets: [
      { label: 'Collected', data: [3000000, 2000000, 500000, 1000000, 2000000, 400000], color: '#8979FF' },
      { label: 'Pending', data: [1000000, 500000, 200000, 400000, 300000, 100000], color: '#FF928A' },
      { label: 'Overdue', data: [100000, 50000, 50000, 200000, 20000, 15000], color: '#3CC3DF' }
    ]
  };

  const maxRevenue = 3000000;
  const yAxisLabels = [3000000, 2500000, 2000000, 1500000, 1000000, 500000, 0];

  // MRR Data
  const mrrData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [89000, 94000, 102000, 108000, 112000, 118000]
  };
  const maxMRR = 200000;
  const mrrYAxisLabels = [200000, 160000, 120000, 80000, 40000, 0];

  // ARPU Data
  const arpuData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [285, 290, 295, 300, 305, 310]
  };
  const maxARPU = 400;
  const arpuYAxisLabels = [0, 50, 100, 150, 200, 250, 300, 350, 400];

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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="analytics-export-text">Export</span>
          </button>
        </div>
      </div>

      {/* Tabs - Gray background with rounded pills */}
      <div className="analytics-tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`analytics-tab-pill ${activeTab === tab.id ? 'analytics-tab-pill--active' : ''}`}
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
          <div className="analytics-metric-cards-row">
            {/* Total Revenue */}
            <div className="analytics-metric-card-new">
              <div className="analytics-metric-card-content">
                <div className="analytics-metric-label-new">Total Revenue</div>
                <div className="analytics-metric-value-new">$128,450</div>
                <div className="analytics-metric-change-row">
                  <span className="analytics-metric-badge-new analytics-metric-badge-new--positive">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 3L9 6L3 6L6 3Z" fill="#34A853" />
                    </svg>
                    10.75%
                  </span>
                </div>
              </div>
              <div className="analytics-metric-icon-new analytics-metric-icon-new--blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7V11H6C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10V17C10 17.5523 10.4477 18 11 18C11.5523 18 12 17.5523 12 17V13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H12V7Z" fill="#00B2FF" />
                  <circle cx="12" cy="5" r="2" fill="#00B2FF" />
                  <path d="M8 15C8 13.3431 9.34315 12 11 12H13C14.6569 12 16 13.3431 16 15V18" stroke="#00B2FF" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* MRR */}
            <div className="analytics-metric-card-new">
              <div className="analytics-metric-card-content">
                <div className="analytics-metric-label-new">MRR</div>
                <div className="analytics-metric-value-new">$118,000</div>
                <div className="analytics-metric-change-row">
                  <span className="analytics-metric-badge-new analytics-metric-badge-new--positive">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 3L9 6L3 6L6 3Z" fill="#34A853" />
                    </svg>
                    10.75%
                  </span>
                </div>
              </div>
              <div className="analytics-metric-icon-new analytics-metric-icon-new--yellow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="7" r="2" stroke="#FBBC04" strokeWidth="1.5" />
                  <path d="M4 19C4 16.7909 5.79086 15 8 15H10C12.2091 15 14 16.7909 14 19" stroke="#FBBC04" strokeWidth="1.5" />
                  <circle cx="17" cy="6" r="2" fill="#FBBC04" />
                  <path d="M19 14C20.1046 14 21 14.8954 21 16V19" stroke="#FBBC04" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* ARPU */}
            <div className="analytics-metric-card-new">
              <div className="analytics-metric-card-content">
                <div className="analytics-metric-label-new">ARPU</div>
                <div className="analytics-metric-value-new">$320</div>
                <div className="analytics-metric-change-row">
                  <span className="analytics-metric-badge-new analytics-metric-badge-new--positive">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 3L9 6L3 6L6 3Z" fill="#34A853" />
                    </svg>
                    10.75%
                  </span>
                </div>
              </div>
              <div className="analytics-metric-icon-new analytics-metric-icon-new--green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="7" height="7" stroke="#21A772" strokeWidth="1.5" />
                  <rect x="13" y="4" width="7" height="9" stroke="#21A772" strokeWidth="1.5" />
                  <path d="M17 16V18" stroke="#21A772" strokeWidth="1.5" />
                  <circle cx="17" cy="19" r="0.5" fill="#21A772" />
                </svg>
              </div>
            </div>

            {/* Churn Rate */}
            <div className="analytics-metric-card-new">
              <div className="analytics-metric-card-content">
                <div className="analytics-metric-label-new">Churn Rate</div>
                <div className="analytics-metric-value-new">2.4%</div>
                <div className="analytics-metric-change-row">
                  <span className="analytics-metric-badge-new analytics-metric-badge-new--positive">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 3L9 6L3 6L6 3Z" fill="#34A853" />
                    </svg>
                    10.75%
                  </span>
                </div>
              </div>
              <div className="analytics-metric-icon-new analytics-metric-icon-new--pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="10" cy="8" r="3" stroke="#FF1FE9" strokeWidth="1.5" />
                  <path d="M5 19C5 16.2386 7.23858 14 10 14C12.7614 14 15 16.2386 15 19" stroke="#FF1FE9" strokeWidth="1.5" />
                  <circle cx="19" cy="10" r="2" stroke="#FF1FE9" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Revenue Trend bar chart - Full width */}
          <div className="analytics-chart-card-full">
            <div className="analytics-chart-header-new">
              <h3 className="analytics-chart-title-new">Revenue Trend</h3>
            </div>

            <div className="analytics-bar-chart-new">
              <div className="analytics-bar-chart-main">
                {/* Y Axis */}
                <div className="analytics-bar-y-axis">
                  {yAxisLabels.map((label, idx) => (
                    <span key={idx} className="analytics-bar-y-label">
                      {label.toLocaleString()}
                    </span>
                  ))}
                </div>

                {/* Chart Area with Grid */}
                <div className="analytics-bar-chart-area-new">
                  {/* Horizontal Grid Lines */}
                  <div className="analytics-bar-grid-horizontal">
                    {yAxisLabels.map((_, idx) => (
                      <div
                        key={idx}
                        className={`analytics-bar-grid-line ${idx === yAxisLabels.length - 1 ? 'analytics-bar-grid-line--solid' : ''}`}
                      />
                    ))}
                  </div>

                  {/* Vertical Grid Lines */}
                  <div className="analytics-bar-grid-vertical">
                    {revenueTrendData.labels.map((_, idx) => (
                      <div key={idx} className="analytics-bar-grid-line-vertical" />
                    ))}
                  </div>

                  {/* Bars */}
                  <div className="analytics-bar-groups-container">
                    {revenueTrendData.labels.map((_, labelIdx) => (
                      <div key={labelIdx} className="analytics-bar-group-new">
                        {revenueTrendData.datasets.map((dataset, datasetIdx) => (
                          <div key={datasetIdx} className="analytics-bar-wrapper-new">
                            <div className="analytics-bar-bg-new" />
                            <div
                              className="analytics-bar-fill-new"
                              style={{
                                height: `${(dataset.data[labelIdx] / maxRevenue) * 100}%`,
                                backgroundColor: dataset.color
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* X Axis */}
              <div className="analytics-bar-x-axis-new">
                {revenueTrendData.labels.map((label, idx) => (
                  <span key={idx} className="analytics-bar-x-label">{label}</span>
                ))}
              </div>

              {/* Legends */}
              <div className="analytics-chart-legend-new">
                {revenueTrendData.datasets.map((dataset, idx) => (
                  <div key={idx} className="analytics-legend-item-new">
                    <div
                      className="analytics-legend-square"
                      style={{ backgroundColor: dataset.color }}
                    />
                    <span className="analytics-legend-text">{dataset.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Two line charts row */}
          <div className="analytics-charts-row-new">
            {/* Monthly Recurring Revenue */}
            <div className="analytics-chart-card-half">
              <div className="analytics-chart-header-new">
                <h3 className="analytics-chart-title-new">Monthly Recurring Revenue</h3>
              </div>

              <div className="analytics-line-chart-new">
                <div className="analytics-line-chart-main">
                  {/* Y Axis */}
                  <div className="analytics-line-y-axis">
                    {mrrYAxisLabels.map((label, idx) => (
                      <span key={idx} className="analytics-line-y-label">
                        {label.toLocaleString()}
                      </span>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="analytics-line-chart-area">
                    {/* Grid Lines */}
                    <div className="analytics-line-grid-horizontal">
                      {mrrYAxisLabels.map((_, idx) => (
                        <div
                          key={idx}
                          className={`analytics-line-grid-line ${idx === mrrYAxisLabels.length - 1 ? 'analytics-line-grid-line--solid' : ''}`}
                        />
                      ))}
                    </div>

                    <div className="analytics-line-grid-vertical">
                      {mrrData.labels.map((_, idx) => (
                        <div key={idx} className="analytics-line-grid-line-vertical" />
                      ))}
                    </div>

                    {/* SVG Line */}
                    <svg className="analytics-line-svg" viewBox="0 0 416 293" preserveAspectRatio="none">
                      <defs>
                        <filter id="mrr-shadow">
                          <feDropShadow dx="0" dy="9" stdDeviation="6" floodColor="#8979FF" floodOpacity="0.4" />
                        </filter>
                      </defs>
                      <polyline
                        points={mrrData.values.map((value, idx) => {
                          const x = (idx / (mrrData.values.length - 1)) * 416;
                          const y = 293 - ((value / maxMRR) * 293);
                          return `${x},${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="#8979FF"
                        strokeWidth="2"
                        filter="url(#mrr-shadow)"
                      />
                      {mrrData.values.map((value, idx) => {
                        const x = (idx / (mrrData.values.length - 1)) * 416;
                        const y = 293 - ((value / maxMRR) * 293);
                        return (
                          <circle
                            key={idx}
                            cx={x}
                            cy={y}
                            r="4"
                            fill="#FFFFFF"
                            stroke="#8979FF"
                            strokeWidth="1"
                          />
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* X Axis */}
                <div className="analytics-line-x-axis">
                  {mrrData.labels.map((label, idx) => (
                    <span key={idx} className="analytics-line-x-label">{label}</span>
                  ))}
                </div>

                {/* Legend */}
                <div className="analytics-chart-legend-new">
                  <div className="analytics-legend-item-new">
                    <div className="analytics-legend-line-icon">
                      <div className="analytics-legend-line-stroke" style={{ backgroundColor: '#8979FF' }} />
                      <div className="analytics-legend-line-node" style={{ borderColor: '#8979FF' }} />
                    </div>
                    <span className="analytics-legend-text">MRR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Average Revenue Per User - Horizontal */}
            <div className="analytics-chart-card-half">
              <div className="analytics-chart-header-new">
                <h3 className="analytics-chart-title-new">Average Revenue Per User</h3>
              </div>

              <div className="analytics-line-chart-horizontal">
                {/* Y Axis Top */}
                <div className="analytics-line-y-axis-top">
                  {arpuYAxisLabels.map((label, idx) => (
                    <span key={idx} className="analytics-line-y-label-top">{label}</span>
                  ))}
                </div>

                <div className="analytics-line-chart-main-horizontal">
                  {/* X Axis Left */}
                  <div className="analytics-line-x-axis-left">
                    {arpuData.labels.map((label, idx) => (
                      <span key={idx} className="analytics-line-x-label-left">{label}</span>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="analytics-line-chart-area-horizontal">
                    {/* Grid */}
                    <div className="analytics-line-grid-horizontal-chart">
                      {arpuYAxisLabels.map((_, idx) => (
                        <div key={idx} className="analytics-line-grid-line-horizontal-chart" />
                      ))}
                    </div>

                    <div className="analytics-line-grid-vertical-chart">
                      {arpuData.labels.map((_, idx) => (
                        <div key={idx} className="analytics-line-grid-line-vertical-chart" />
                      ))}
                    </div>

                    {/* SVG Line */}
                    <svg className="analytics-line-svg-horizontal" viewBox="0 0 305 423" preserveAspectRatio="none">
                      <defs>
                        <filter id="arpu-shadow">
                          <feDropShadow dx="-9" dy="0" stdDeviation="6" floodColor="#8979FF" floodOpacity="0.4" />
                        </filter>
                      </defs>
                      <polyline
                        points={arpuData.values.map((value, idx) => {
                          const y = (idx / (arpuData.values.length - 1)) * 423;
                          const x = (value / maxARPU) * 305;
                          return `${x},${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="#8979FF"
                        strokeWidth="2"
                        filter="url(#arpu-shadow)"
                      />
                      {arpuData.values.map((value, idx) => {
                        const y = (idx / (arpuData.values.length - 1)) * 423;
                        const x = (value / maxARPU) * 305;
                        return (
                          <circle
                            key={idx}
                            cx={x}
                            cy={y}
                            r="4"
                            fill="#FFFFFF"
                            stroke="#8979FF"
                            strokeWidth="1"
                          />
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* Legend */}
                <div className="analytics-chart-legend-new">
                  <div className="analytics-legend-item-new">
                    <div className="analytics-legend-line-icon">
                      <div className="analytics-legend-line-stroke" style={{ backgroundColor: '#8979FF' }} />
                      <div className="analytics-legend-line-node" style={{ borderColor: '#8979FF' }} />
                    </div>
                    <span className="analytics-legend-text">ARPU</span>
                  </div>
                </div>
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
                  <span className="analytics-quick-action-value analytics-quick-action-value--green">+12</span>
                </div>
                <div className="analytics-quick-action-row">
                  <span className="analytics-quick-action-label">Upgrades This Month</span>
                  <span className="analytics-quick-action-value">8</span>
                </div>
                <div className="analytics-quick-action-row">
                  <span className="analytics-quick-action-label">Downgrades This Month</span>
                  <span className="analytics-quick-action-value analytics-quick-action-value--red">3</span>
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
                    <img src="/image.png" alt={school.name} className="analytics-school-avatar" />
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
            <div className="analytics-usage-chart-container">
              <div className="analytics-usage-y-axis">
                <span>20000</span>
                <span>16000</span>
                <span>12000</span>
                <span>8000</span>
                <span>4000</span>
                <span>0</span>
              </div>
              <div className="analytics-usage-chart-main">
                {/* Grid Lines */}
                <div className="analytics-usage-grid-lines">
                  <div className="usage-grid-line"></div>
                  <div className="usage-grid-line"></div>
                  <div className="usage-grid-line"></div>
                  <div className="usage-grid-line"></div>
                  <div className="usage-grid-line"></div>
                  <div className="usage-grid-line usage-grid-line-bottom"></div>
                </div>

                <div className="analytics-usage-bars">
                  {[
                    { month: 'Jan', active: 25, login: 40 },
                    { month: 'Feb', active: 30, login: 45 },
                    { month: 'Mar', active: 32.5, login: 50 },
                    { month: 'Apr', active: 35, login: 55 },
                    { month: 'May', active: 37.5, login: 60 },
                    { month: 'Jun', active: 40, login: 65 },
                  ].map((d) => (
                    <div key={d.month} className="analytics-usage-bar-group-wrapper">
                      <div className="analytics-usage-group-bg"></div>
                      <div className="analytics-usage-bar-group">
                        <div
                          className="analytics-usage-bar analytics-usage-bar--active"
                          style={{ height: `${d.active}%` }}
                        />
                        <div
                          className="analytics-usage-bar analytics-usage-bar--login"
                          style={{ height: `${d.login}%` }}
                        />
                      </div>
                      {/* Label moved inside the wrapper */}
                      <span className="analytics-usage-x-label">{d.month}</span>
                    </div>
                  ))}
                </div>
              </div>
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
