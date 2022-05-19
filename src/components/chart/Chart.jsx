import React from 'react'
import { LineChart, Line, XAxis,
    YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer } from 'recharts';
import './chart.css';

const Chart = ({title, type, data, dataKey, grid}) => {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width= "100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <YAxis stroke="#5550bd"/>
                    <Line type={type} dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                    {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
