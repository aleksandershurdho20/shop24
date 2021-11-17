import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import {Wrapper,Title} from './styles'
export default function Charts({title, data, dataKey, grid }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#038787" />
                        <Line type="monotone" dataKey={dataKey} stroke="#038787" />
                        <Tooltip />
                        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                    </LineChart>
             </ResponsiveContainer>
        </Wrapper>
    )
}
