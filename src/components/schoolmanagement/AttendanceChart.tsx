import React from 'react';
import './AttendanceChart.css';

const AttendanceChart: React.FC = () => {
    const data = [
        { label: 'JSS1', present: 275, absent: 5 },
        { label: 'JSS2', present: 307, absent: 2 },
        { label: 'JSS3', present: 290, absent: 15 },
        { label: 'SSS1', present: 350, absent: 12 },
        { label: 'SSS2', present: 289, absent: 7 },
        { label: 'SSS3', present: 200, absent: 25 },
    ];

    const maxVal = 400;

    return (
        <div className="attendance-chart-container">
            <div className="chart-header">
                <h2 className="chart-title">Attendance Stats</h2>
                <div className="chart-dropdown">
                    <span>This Month</span>
                    <img src="/icons/arrow-down.png" alt="dropdown" />
                </div>
            </div>

            <div className="chart-body">
                <div className="y-axis">
                    {[400, 320, 240, 160, 80, 0].map(val => (
                        <span key={val}>{val}</span>
                    ))}
                </div>

                <div className="chart-area">
                    <div className="grid-lines">
                        {[0, 1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="grid-line" style={{ bottom: `${(i * 100) / 5}%` }}></div>
                        ))}
                    </div>

                    <div className="bars-container">
                        {data.map((item, idx) => (
                            <div key={idx} className="bar-group">
                                <div className="bar-pair">
                                    <div className="bar-bg">
                                        <div
                                            className="bar absent"
                                            style={{ height: `${(item.absent / maxVal) * 100}%` }}
                                        ></div>
                                    </div>
                                    <div className="bar-bg">
                                        <div
                                            className="bar present"
                                            style={{ height: `${(item.present / maxVal) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="bar-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="chart-legend">
                <div className="legend-item">
                    <span className="legend-color absent-color"></span>
                    <span>Absent</span>
                </div>
                <div className="legend-item">
                    <span className="legend-color present-color"></span>
                    <span>Present</span>
                </div>
            </div>
        </div>
    );
};

export default AttendanceChart;
