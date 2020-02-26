import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 12345682, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 369582147, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 1253695874, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 125369857, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1236589654, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 125963255, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 125478965, pv: 4300, amt: 2100,
  },
];

const CustomYAxisTick =  ({ x, y, payload}) => {

    console.log("ppppp",x,y,payload)
    
        return (<g transform={`translate(${0},${y})`}>
            <text x={0} y={0}
                textAnchor="start"
                fill="#666"
                cursor="pointer">{payload.value.toLocaleString('en-IN')}
                <title>{payload.value}</title>
                </text>
        </g>)
  }  

export default class Example extends PureComponent {
  
  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" tick={<CustomYAxisTick />}  />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    );
  }
}
