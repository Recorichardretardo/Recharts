import React, { Component } from 'react';
import {
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    LabelList ,Cell,ErrorBar,Brush,ReferenceLine
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import clamp from 'clamp-js';
import './index.scss';
import lineClamp from 'line-clamp';

const CustomizedLabel = (props) => { 
	return <text x={props.x +22 + props.width} y={props.y +10 + props.height/2} dy={-4} fill={props.fill} fontSize={15} textAnchor="middle">{props.value}</text>
}
  

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
    {name: 'Page A123', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page 333333333333333333', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page Cccccccccccccc', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page Dxxxxxxxxxxxxxxxxxxxxxxxxxx', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page Exxxxxxxxxxxxxxxxxxxx', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page Fxxxxxxxxxxxxxxxxxxxxx', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page Gddddddddddddddddddddd', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page Assssssssssssssssssssss', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page Bssssssssssssssssssssss', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page Cssssssssssssssssssssss', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page Ddddddddddddddddddddd', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page Edddddddddddddddddddddd', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page Fddddddddddddddddddd', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page Gddddddddddddddddddddddd', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page Adddddddddddddddddddddddddddddddddd', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page Bddddddddddddddddddddd', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page Cdddddddddddddd', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page Dsssssssssssssss', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page Essssssssssssssssss', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page Fsssssssssssssssssssss', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page Gddddddddddd', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page Assssssssssssss', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page Bssssssssssssssss', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page Cwwwwwwwwwwwwwwwww', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page Dwwwwwwwwwwwwwwww', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page Ewwwwwwwwwwwww', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page Fwwwwwwwwwwwwwwww', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page Gwwwwwwwwwwwww', uv: 3490, pv: 43500, amt: 2100},
    {name: 'Page Awwwwwwwwwwwwwww', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page sssssssssssssssB', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page sssssssssssssssssssC', uv: 2000, pv: 98050, amt: 2290},
    {name: 'Page Dsssssssssssssss', uv: 2780, pv: 39508, amt: 2000},
    {name: 'Page Essssssssssss', uv: 1890, pv: 48500, amt: 2181},
    {name: 'Page Fsssssssssssssss', uv: 2390, pv: 38500, amt: 2500},
    {name: 'Page G1ddddddddddd1', uv: 3490, pv: 43500, amt: 2100},

    



];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const CustomYAxisTick =  ({ x, y, payload}) => {
      return (<g transform={`translate(${0},${y})`}>
          <text x={0} y={0}
              textAnchor="start"
              fill="#666"
              cursor="pointer">{payload.value.length >=10 ? payload.value.substring(0, 10)+'...' :'\xa0\xa0\xa0\xa0\xa0'+ payload.value}
              <title>{payload.value}</title>
              </text>
      </g>)
}  


 class Recharts extends Component {
  changeLabelValue = (props) => {

    console.log("props",props)

  }

  render() {
      
    return (
        <div  id="container" className="chartAreaWrapper">
      <ResponsiveContainer height={data.length * 50 + 10} width="100%">
      <BarChart layout="vertical" data={data}   width={900} 
            height={260} 

            margin={{top: 0, right: 40, left: 40, bottom: 20}}
              barCategoryGap="20%" barGap={2}
              maxBarSize={10}
              >


                  
            <XAxis type="number"  domain={['auto', 'auto']} 
              axisLine={false}
              padding={{ left: 20, right: 100 }}
              stroke='#a0a0a0'
              ticks={[900, 3000, 5000, 6000,7000,8000, 98050]}
              strokeWidth={0.5}/>
            <YAxis height="100" dataKey="name" interval={0} allowDataOverflow={true} type="category"
             fontFamily="sans-serif" tick={<CustomYAxisTick />} 
             />

                            
            <CartesianGrid  horizontal={false} vertical={false}
                        stroke='#a0a0a0'
                        strokeWidth={0.5}/>
         <Tooltip/>
         <Legend />
         <Bar barSize ={130}  animationDuration={1000} isAnimationActive={false}   dataKey="pv" fill="#8884d8" 
         label={<CustomizedLabel />} 
         radius={[2, 2, 2, 2]} >
           {
          	data.map((entry, index) => {
            	const color = entry.pv > 4000 ? COLORS[1] : COLORS[2];
            	return <Cell key={index} fill={colors[index % 20]} />;
            })
          }

           </Bar>
         <Brush dataKey="name" height={30} />
         <ReferenceLine type="horizontal" value={0} stroke="#666" />
          <LabelList fill="#000" angle={-45} />
          {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))
              }
              <ErrorBar dataKey="uvError" />
        </BarChart> 
      </ResponsiveContainer>
      </div>
    );
  }
}

export default Recharts;