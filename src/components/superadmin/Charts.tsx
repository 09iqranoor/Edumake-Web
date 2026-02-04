import React from 'react';
import './Charts.css';

interface BarChartProps {
    title: string;
    subtitle: string;
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            color: string;
        }[];
    };
}

const BarChart: React.FC<BarChartProps> = ({ title, subtitle, data }) => {
    const yAxisLabels = [100, 80, 60, 40, 20, 0];

    return (
        <div className="chart-card">
            <div className="chart-card__header">
                <div className="chart-card__title-group">
                    <h3 className="chart-card__title">{title}</h3>
                    <p className="chart-card__subtitle">{subtitle}</p>
                </div>
            </div>

            <div className="bar-chart">
                <div className="bar-chart__main">
                    {/* Y Axis */}
                    <div className="bar-chart__y-axis">
                        {yAxisLabels.map((label, idx) => (
                            <span key={idx} className="bar-chart__y-label">{label}</span>
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

                        {/* Bars */}
                        <div className="bar-chart__bars">
                            {data.labels.map((_label, labelIdx) => (
                                <div key={labelIdx} className="bar-chart__bar-group">
                                    {data.datasets.map((dataset, datasetIdx) => (
                                        <div key={datasetIdx} className="bar-chart__bar-wrapper">
                                            <div className="bar-chart__bar-bg" />
                                            <div
                                                className="bar-chart__bar"
                                                style={{
                                                    height: `${(dataset.data[labelIdx] / 100) * 100}%`,
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
                    {data.labels.map((label, idx) => (
                        <span key={idx} className="bar-chart__x-label">{label}</span>
                    ))}
                </div>

                {/* Legends */}
                <div className="bar-chart__legends">
                    {data.datasets.map((dataset, idx) => (
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
    );
};

interface PieChartProps {
    title: string;
    subtitle: string;
    data: {
        label: string;
        value: number;
        color: string;
    }[];
    centerValue?: string;
}

const PieChart: React.FC<PieChartProps> = ({ title, subtitle, data, centerValue }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    // Calculate pie slices
    let cumulativePercent = 0;
    const slices = data.map(item => {
        const percent = (item.value / total) * 100;
        const startAngle = cumulativePercent * 3.6;
        cumulativePercent += percent;
        const endAngle = cumulativePercent * 3.6;
        return {
            ...item,
            percent,
            startAngle,
            endAngle
        };
    });

    // Generate conic-gradient
    let gradientParts: string[] = [];
    let currentAngle = 0;
    slices.forEach((slice) => {
        gradientParts.push(`${slice.color} ${currentAngle}deg ${currentAngle + (slice.percent * 3.6)}deg`);
        currentAngle += slice.percent * 3.6;
    });

    return (
        <div className="chart-card">
            <div className="chart-card__header">
                <div className="chart-card__title-group">
                    <h3 className="chart-card__title">{title}</h3>
                    <p className="chart-card__subtitle">{subtitle}</p>
                </div>
            </div>

            <div className="pie-chart">
                <div className="pie-chart__container">
                    <div
                        className="pie-chart__circle"
                        style={{
                            background: `conic-gradient(${gradientParts.join(', ')})`
                        }}
                    >
                        <div className="pie-chart__inner">
                            {centerValue && (
                                <span className="pie-chart__center-value">{centerValue}</span>
                            )}
                        </div>
                    </div>

                    {/* Pie Labels */}
                    <div className="pie-chart__labels">
                        {slices.map((slice, idx) => {
                            // Calculate label position
                            const midAngle = (slice.startAngle + slice.endAngle) / 2;
                            const labelRadius = 0.55;
                            const x = 50 + labelRadius * 50 * Math.sin((midAngle * Math.PI) / 180);
                            const y = 50 - labelRadius * 50 * Math.cos((midAngle * Math.PI) / 180);

                            return (
                                <div
                                    key={idx}
                                    className="pie-chart__label"
                                    style={{
                                        left: `${x}%`,
                                        top: `${y}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <span className="pie-chart__label-name">{slice.label}</span>
                                    <div className="pie-chart__label-values">
                                        <span className="pie-chart__label-value">${slice.value.toFixed(2)}</span>
                                        <span className="pie-chart__label-percent">({slice.percent.toFixed(1)}%)</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Charts: React.FC = () => {
    const barChartData = {
        labels: ['Sep', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [
            { label: 'Total Schools', data: [20, 45, 70, 80, 48, 50], color: '#8979FF' },
            { label: 'Active', data: [17, 40, 60, 79, 45, 44], color: '#FF928A' },
            { label: 'Suspended', data: [3, 5, 10, 1, 3, 6], color: '#3CC3DF' }
        ]
    };

    const pieChartData = [
        { label: 'Sep', value: 58.72, color: '#8979FF' },
        { label: 'Oct', value: 27.83, color: '#FF928A' },
        { label: 'Nov', value: 82.89, color: '#3CC3DF' },
        { label: 'Dec', value: 60.78, color: '#FFAE4C' },
        { label: 'Jan', value: 53.15, color: '#537FF1' },
        { label: 'Feb', value: 72.18, color: '#6FD195' }
    ];

    const pieTotal = pieChartData.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="charts">
            <BarChart
                title="School Growth Chart"
                subtitle="Last 6 months comparison"
                data={barChartData}
            />
            <PieChart
                title="Subscription Revenue"
                subtitle="Last 6 months comparison"
                data={pieChartData}
                centerValue={pieTotal.toFixed(2)}
            />
        </div>
    );
};

export default Charts;
