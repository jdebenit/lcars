import React from 'react';
import styles from './Chart.module.css';

export interface ChartDataItem {
    label: string;
    value: number;
    color?: string;
    onClick?: () => void;
}

export interface ChartProps {
    data: ChartDataItem[];
    title: string;
    type?: 'bar' | 'donut' | 'horizontal';
    height?: number;
}

export const Chart: React.FC<ChartProps> = ({
    data,
    title,
    type = 'bar',
    height = 200
}) => {
    const maxValue = Math.max(...data.map(item => item.value), 1);
    const total = data.reduce((sum, item) => sum + item.value, 0);

    const defaultColors = [
        'var(--lcars-orange)',
        'var(--lcars-blue)',
        'var(--lcars-purple)',
        'var(--lcars-red)',
        'var(--lcars-yellow)',
        'var(--lcars-tan)',
        '#FF6B9D', // Pink
        '#00D9FF', // Cyan
        '#B4E7CE', // Mint
        '#FFB86C', // Peach
        '#BD93F9', // Lavender
        '#50FA7B', // Green
        '#FF79C6', // Hot Pink
        '#8BE9FD', // Light Blue
        '#FFD700', // Gold
        '#FF6347'  // Tomato
    ];

    if (type === 'donut') {
        const radius = 80;
        const strokeWidth = 30;
        const center = 100;
        let currentAngle = -90;

        const segments = data.map((item, index) => {
            const percentage = total > 0 ? (item.value / total) * 100 : 0;
            const angle = (percentage / 100) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            currentAngle = endAngle;

            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            const x1 = center + radius * Math.cos(startRad);
            const y1 = center + radius * Math.sin(startRad);
            const x2 = center + radius * Math.cos(endRad);
            const y2 = center + radius * Math.sin(endRad);

            const largeArc = angle > 180 ? 1 : 0;

            const pathData = [
                `M ${center} ${center}`,
                `L ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
                'Z'
            ].join(' ');

            return {
                pathData,
                color: item.color || defaultColors[index % defaultColors.length],
                item,
                percentage
            };
        });

        return (
            <div className={styles.chartContainer}>
                <div className={styles.chartTitle}>{title}</div>
                <div className={styles.donutContainer}>
                    <svg viewBox="0 0 200 200" className={styles.donutSvg}>
                        <circle
                            cx={center}
                            cy={center}
                            r={radius}
                            fill="none"
                            stroke="rgba(0, 0, 0, 0.3)"
                            strokeWidth={strokeWidth}
                        />
                        {segments.map((segment, index) => (
                            <g key={index}>
                                <path
                                    d={segment.pathData}
                                    fill={segment.color}
                                    className={segment.item.onClick ? styles.clickable : ''}
                                    onClick={segment.item.onClick}
                                    opacity={0.8}
                                />
                            </g>
                        ))}
                        <circle
                            cx={center}
                            cy={center}
                            r={radius - strokeWidth}
                            fill="rgba(0, 0, 0, 0.5)"
                        />
                    </svg>
                    <div className={styles.donutCenter}>
                        <div className={styles.donutTotal}>{total}</div>
                        <div className={styles.donutLabel}>Total</div>
                    </div>
                </div>
                <div className={styles.legend}>
                    {data.map((item, index) => {
                        const percentage = total > 0 ? ((item.value / total) * 100).toFixed(1) : 0;
                        return (
                            <div
                                key={index}
                                className={`${styles.legendItem} ${item.onClick ? styles.clickable : ''}`}
                                onClick={item.onClick}
                            >
                                <div
                                    className={styles.legendColor}
                                    style={{ backgroundColor: item.color || defaultColors[index % defaultColors.length] }}
                                />
                                <div className={styles.legendLabel}>{item.label}</div>
                                <div className={styles.legendValue}>
                                    {item.value} ({percentage}%)
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    // Horizontal bar chart
    if (type === 'horizontal') {
        return (
            <div className={styles.chartContainer}>
                <div className={styles.chartTitle}>{title}</div>
                <div className={styles.horizontalBarChart}>
                    {data.map((item, index) => {
                        const barWidth = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
                        return (
                            <div key={index} className={styles.horizontalBarWrapper}>
                                <div className={styles.horizontalBarLabel}>{item.label}</div>
                                <div className={styles.horizontalBarContainer}>
                                    <div
                                        className={`${styles.horizontalBar} ${item.onClick ? styles.clickable : ''}`}
                                        style={{
                                            width: `${barWidth}%`,
                                            backgroundColor: item.color || defaultColors[index % defaultColors.length]
                                        }}
                                        onClick={item.onClick}
                                    >
                                        <div className={styles.horizontalBarValue}>{item.value}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    // Bar chart
    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartTitle}>{title}</div>
            <div className={styles.barChart} style={{ height: `${height}px` }}>
                {data.map((item, index) => {
                    const barHeight = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
                    return (
                        <div key={index} className={styles.barWrapper}>
                            <div className={styles.barContainer}>
                                <div
                                    className={`${styles.bar} ${item.onClick ? styles.clickable : ''}`}
                                    style={{
                                        height: `${barHeight}%`,
                                        backgroundColor: item.color || defaultColors[index % defaultColors.length]
                                    }}
                                    onClick={item.onClick}
                                >
                                    <div className={styles.barValue}>{item.value}</div>
                                </div>
                            </div>
                            <div className={styles.barLabel}>{item.label}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};



