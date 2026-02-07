import React, { useState } from 'react';
import './Charts.css';

const Charts: React.FC = () => {
    const [activeTab, setActiveTab] = useState('revenue');

    // Revenue Trend Data
    const revenueTrendData = {
        labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
        datasets: [
            { label: 'Collected', data: [3000000, 2000000, 500000, 1000000, 2000000, 400000], color: '#8979FF' },
            { label: 'Pending', data: [1000000, 500000, 200000, 400000, 300000, 100000], color: '#FF928A' },
            { label: 'Overdue', data: [100000, 50000, 50000, 200000, 20000, 15000], color: '#3CC3DF' }
        ]
    };

    // MRR Data
    const mrrData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        values: [89000, 94000, 102000, 108000, 112000, 118000]
    };

    // ARPU Data
    const arpuData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        values: [285, 290, 295, 300, 305, 310]
    };

    const maxRevenueValue = 3000000;
    const yAxisLabels = [3000000, 2500000, 2000000, 1500000, 1000000, 500000, 0];

    const maxMRR = 200000;
    const mrrYAxisLabels = [200000, 160000, 120000, 80000, 40000, 0];

    const maxARPU = 400;
    const arpuYAxisLabels = [0, 50, 100, 150, 200, 250, 300, 350, 400];

    return (
        <div className="analytics-section">
            {/* Tab Navigation */}
            <div className="analytics-tabs">
                <button
                    className={`analytics-tab ${activeTab === 'revenue' ? 'analytics-tab--active' : ''}`}
                    onClick={() => setActiveTab('revenue')}
                >
                    Revenue Overview
                </button>
                <button
                    className={`analytics-tab ${activeTab === 'subscription' ? 'analytics-tab--active' : ''}`}
                    onClick={() => setActiveTab('subscription')}
                >
                    Subscription Analytics
                </button>
                <button
                    className={`analytics-tab ${activeTab === 'school' ? 'analytics-tab--active' : ''}`}
                    onClick={() => setActiveTab('school')}
                >
                    School Performance
                </button>
                <button
                    className={`analytics-tab ${activeTab === 'usage' ? 'analytics-tab--active' : ''}`}
                    onClick={() => setActiveTab('usage')}
                >
                    Usage Statistics
                </button>
            </div>

            {/* Analytics Content */}
            <div className="analytics-content">
                {/* Metric Cards */}
                <div className="metrics-row">
                    <div className="metric-card">
                        <div className="metric-card__content">
                            <div className="metric-card__label">Total Revenue</div>
                            <div className="metric-card__value">$128,450</div>
                            <div className="metric-card__change">
                                <span className="metric-card__badge metric-card__badge--positive">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 3L9 6L3 6L6 3Z" fill="#34A853" />
                                    </svg>
                                    10.75%
                                </span>
                            </div>
                        </div>
                        <div className="metric-card__icon metric-card__icon--blue">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 7L12 12M12 12L12 17M12 12L17 12M12 12L7 12" stroke="#00B2FF" strokeWidth="1.5" />
                                <circle cx="12" cy="12" r="9" stroke="#00B2FF" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="metric-card">
                        <div className="metric-card__content">
                            <div className="metric-card__label">MRR</div>
                            <div className="metric-card__value">$118,000</div>
                            <div className="metric-card__change">
                                <span className="metric-card__badge metric-card__badge--positive">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 3L9 6L3 6L6 3Z" fill="#34A853" />
                                    </svg>
                                    10.75%
                                </span>
                            </div>
                        </div>
                        <div className="metric-card__icon metric-card__icon--yellow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="9" cy="7" r="2" stroke="#FBBC04" strokeWidth="1.5" />
                                <path d="M4 19C4 16.7909 5.79086 15 8 15H10C12.2091 15 14 16.7909 14 19" stroke="#FBBC04" strokeWidth="1.5" />
                                <circle cx="17" cy="6" r="2" stroke="#FBBC04" strokeWidth="1.5" />
                                <path d="M19 14C20.1046 14 21 14.8954 21 16V19" stroke="#FBBC04" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="metric-card">
                        <div className="metric-card__content">
                            <div className="metric-card__label">ARPU</div>
                            <div className="metric-card__value">$320</div>
                            <div className="metric-card__change">
                                <span className="metric-card__badge metric-card__badge--positive">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 3L9 6L3 6L6 3Z" fill="#34A853" />
                                    </svg>
                                    10.75%
                                </span>
                            </div>
                        </div>
                        <div className="metric-card__icon metric-card__icon--green">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="4" y="4" width="7" height="7" stroke="#21A772" strokeWidth="1.5" />
                                <rect x="13" y="4" width="7" height="9" stroke="#21A772" strokeWidth="1.5" />
                                <path d="M17 16L17 18" stroke="#21A772" strokeWidth="1.5" />
                                <circle cx="17" cy="19" r="0.5" fill="#21A772" />
                            </svg>
                        </div>
                    </div>

                    <div className="metric-card">
                        <div className="metric-card__content">
                            <div className="metric-card__label">Churn Rate</div>
                            <div className="metric-card__value">2.4%</div>
                            <div className="metric-card__change">
                                <span className="metric-card__badge metric-card__badge--positive">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 3L9 6L3 6L6 3Z" fill="#34A853" />
                                    </svg>
                                    10.75%
                                </span>
                            </div>
                        </div>
                        <div className="metric-card__icon metric-card__icon--pink">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="10" cy="8" r="3" stroke="#FF1FE9" strokeWidth="1.5" />
                                <path d="M5 19C5 16.2386 7.23858 14 10 14C12.7614 14 15 16.2386 15 19" stroke="#FF1FE9" strokeWidth="1.5" />
                                <circle cx="19" cy="10" r="2" stroke="#FF1FE9" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Revenue Trend Chart */}
                <div className="chart-card chart-card--large">
                    <div className="chart-card__header">
                        <h3 className="chart-card__title">Revenue Trend</h3>
                    </div>
                    <div className="bar-chart">
                        <div className="bar-chart__main">
                            {/* Y Axis */}
                            <div className="bar-chart__y-axis">
                                {yAxisLabels.map((label, idx) => (
                                    <span key={idx} className="bar-chart__y-label">
                                        {label.toLocaleString()}
                                    </span>
                                ))}
                            </div>

                            {/* Chart Area */}
                            <div className="bar-chart__area">
                                {/* Grid Lines */}
                                <div className="bar-chart__grid">
                                    {yAxisLabels.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`bar-chart__grid-line ${idx === yAxisLabels.length - 1 ? 'bar-chart__grid-line--solid' : ''}`}
                                        />
                                    ))}
                                </div>

                                {/* Vertical Grid Lines */}
                                <div className="bar-chart__grid-vertical">
                                    {revenueTrendData.labels.map((_, idx) => (
                                        <div key={idx} className="bar-chart__grid-line-vertical" />
                                    ))}
                                </div>

                                {/* Bars */}
                                <div className="bar-chart__bars">
                                    {revenueTrendData.labels.map((_, labelIdx) => (
                                        <div key={labelIdx} className="bar-chart__bar-group">
                                            {revenueTrendData.datasets.map((dataset, datasetIdx) => (
                                                <div key={datasetIdx} className="bar-chart__bar-wrapper">
                                                    <div className="bar-chart__bar-bg" />
                                                    <div
                                                        className="bar-chart__bar"
                                                        style={{
                                                            height: `${(dataset.data[labelIdx] / maxRevenueValue) * 100}%`,
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
                        <div className="bar-chart__x-axis">
                            {revenueTrendData.labels.map((label, idx) => (
                                <span key={idx} className="bar-chart__x-label">{label}</span>
                            ))}
                        </div>

                        {/* Legends */}
                        <div className="bar-chart__legends">
                            {revenueTrendData.datasets.map((dataset, idx) => (
                                <div key={idx} className="bar-chart__legend">
                                    <div
                                        className="bar-chart__legend-color"
                                        style={{ backgroundColor: dataset.color }}
                                    />
                                    <span className="bar-chart__legend-label">{dataset.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Charts Row */}
                <div className="charts-row">
                    {/* Monthly Recurring Revenue Chart */}
                    <div className="chart-card">
                        <div className="chart-card__header">
                            <h3 className="chart-card__title">Monthly Recurring Revenue</h3>
                        </div>
                        <div className="line-chart">
                            <div className="line-chart__main">
                                {/* Y Axis */}
                                <div className="line-chart__y-axis">
                                    {mrrYAxisLabels.map((label, idx) => (
                                        <span key={idx} className="line-chart__y-label">
                                            {label.toLocaleString()}
                                        </span>
                                    ))}
                                </div>

                                {/* Chart Area */}
                                <div className="line-chart__area">
                                    {/* Grid Lines */}
                                    <div className="line-chart__grid">
                                        {mrrYAxisLabels.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`line-chart__grid-line ${idx === mrrYAxisLabels.length - 1 ? 'line-chart__grid-line--solid' : ''}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Vertical Grid Lines */}
                                    <div className="line-chart__grid-vertical">
                                        {mrrData.labels.map((_, idx) => (
                                            <div key={idx} className="line-chart__grid-line-vertical" />
                                        ))}
                                    </div>

                                    {/* Line */}
                                    <svg className="line-chart__svg" viewBox="0 0 416 293" preserveAspectRatio="none">
                                        <defs>
                                            <filter id="shadow">
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
                                            filter="url(#shadow)"
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
                            <div className="line-chart__x-axis">
                                {mrrData.labels.map((label, idx) => (
                                    <span key={idx} className="line-chart__x-label">{label}</span>
                                ))}
                            </div>

                            {/* Legend */}
                            <div className="line-chart__legends">
                                <div className="line-chart__legend">
                                    <div className="line-chart__legend-line">
                                        <div className="line-chart__legend-line-stroke" style={{ backgroundColor: '#8979FF' }} />
                                        <div className="line-chart__legend-node" style={{ borderColor: '#8979FF' }} />
                                    </div>
                                    <span className="line-chart__legend-label">MRR</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Average Revenue Per User Chart */}
                    <div className="chart-card">
                        <div className="chart-card__header">
                            <h3 className="chart-card__title">Average Revenue Per User</h3>
                        </div>
                        <div className="line-chart line-chart--horizontal">
                            {/* Y Axis Top */}
                            <div className="line-chart__y-axis-top">
                                {arpuYAxisLabels.map((label, idx) => (
                                    <span key={idx} className="line-chart__y-label-top">{label}</span>
                                ))}
                            </div>

                            <div className="line-chart__main-horizontal">
                                {/* X Axis (Left side for horizontal) */}
                                <div className="line-chart__x-axis-left">
                                    {arpuData.labels.map((label, idx) => (
                                        <span key={idx} className="line-chart__x-label-left">{label}</span>
                                    ))}
                                </div>

                                {/* Chart Area */}
                                <div className="line-chart__area-horizontal">
                                    {/* Grid Lines */}
                                    <div className="line-chart__grid-horizontal">
                                        {arpuYAxisLabels.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`line-chart__grid-line-horizontal ${idx === arpuYAxisLabels.length - 1 ? 'line-chart__grid-line--solid' : ''}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Vertical Grid Lines for horizontal chart */}
                                    <div className="line-chart__grid-vertical-horizontal">
                                        {arpuData.labels.map((_, idx) => (
                                            <div key={idx} className="line-chart__grid-line-vertical-horizontal" />
                                        ))}
                                    </div>

                                    {/* Line */}
                                    <svg className="line-chart__svg-horizontal" viewBox="0 0 305 423" preserveAspectRatio="none">
                                        <defs>
                                            <filter id="shadow-horizontal">
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
                                            filter="url(#shadow-horizontal)"
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
                            <div className="line-chart__legends">
                                <div className="line-chart__legend">
                                    <div className="line-chart__legend-line">
                                        <div className="line-chart__legend-line-stroke" style={{ backgroundColor: '#8979FF' }} />
                                        <div className="line-chart__legend-node" style={{ borderColor: '#8979FF' }} />
                                    </div>
                                    <span className="line-chart__legend-label">ARPU</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;
