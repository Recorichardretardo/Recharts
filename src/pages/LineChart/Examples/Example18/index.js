import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {name: new Date('2018-01-01'), uv: 4000, pv: 2400, amt: 2400},
  {name: new Date('2018-02-01'), uv: 3000, pv: 1398, amt: 2210},
  {name: new Date('2018-03-01'), uv: 2000, pv: 9800, amt: 2290},
  {name: new Date('2018-04-01'), uv: 2780, pv: 3908, amt: 2000},
  {name: new Date('2018-05-01'), uv: 1890, pv: 4800, amt: 2181},
  {name: new Date('2018-06-01'), uv: 2390, pv: 3800, amt: 2500},
  {name: new Date('2018-07-01'), uv: 3490, pv: 4300, amt: 2100},
];

export default class Example extends PureComponent {
  //https://github.com/recharts/recharts/issues/560
  constructor() {
    super();
    this.state = {
      opacity: {
      	uv: 1,
        pv: 1,
      },
      vis: true    
    };
  }

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;
    
  	this.setState({
    	opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }
  handleMouseLeave = (o) => {
  	const { dataKey } = o;
    const { opacity } = this.state;
    
  	this.setState({
    	opacity: { ...opacity, [dataKey]: 1 },
    });
  }


  render() {
    const { opacity } = this.state;
    return (<>
      <div>
        <LineChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey={(obj)=>obj.name.toString()}/>
         <YAxis type="number" domain={[0, 20000]} 
          ticks={[0, 1000, 5000, 10000, 18000]} />
         {/* <YAxis type="number" domain={['dataMin', 'dataMax']} /> */}
         {/* <YAxis type="number" domain={[0, 'dataMax']} /> */}
         {/* <YAxis type="number" domain={['auto', 'auto']} /> */}
         {/* <YAxis type="number" domain={[0, 'dataMax + 1000']} /> */}
         {/* <YAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} /> */}
         {/* <YAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} /> */}
         <Tooltip/>
         <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={(obj)=>{
         console.log(obj)
         return this.setState({vis: !this.state.vis})}}/>
         <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey={this.state.vis ? 'uv' : 'uv_'} strokeOpacity={opacity.uv} 
         strokeWidth={4} stroke="#82ca9d" />
        </LineChart> 
        <p className="notes">Tips: Hover the legend !</p>
      </div>
   </> );
  }
}
