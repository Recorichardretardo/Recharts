import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from "recharts";
import * as moment from "moment";

const series = [
  {
    name: "Actual Order",
    data: [
      { orderDate: "1", value: 8 },
      { orderDate: "2", value: 5 },
      { orderDate: "3", value: 5.5 },
      { orderDate: "4", value: 4.25 }
    ],
    stroke: "#ffc220"
  },
  {
    name: "HVI Prediction",
    data: [
      { orderDate: "1", value: 6 },
      { orderDate: "2", value: 5.5 },
      { orderDate: "3", value: 4.25 },
      { orderDate: "4", value: 5 }
    ],
    stroke: "#a0b5e8"
  },
  {
    name: "HVI Order",
    data: [
      { orderDate: "8", value: 6 },
      { orderDate: "9", value: 4.5, HVIRecommendedOrder: true }
    ],
    stroke: "#0065ff",
    strokeDasharray: "7 7"
  }
];

const CustomizedDot = props => {
  const { cx, cy, stroke, payload } = props;

  if (!payload.HVIRecommendedOrder) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={40}
        height={40}
        fill={stroke}
        viewBox="0 0 200 200"
      >
        <circle cx="50" cy="50" r="40" strokeWidth="3" fill={stroke} />
      </svg>
    );
  }

  return (
    <svg x={cx - 20} y={cy - 15} width={40} height={40} viewBox="0 0 200 200">
      <rect
        width="15"
        height="15"
        fill="white"
        stroke={stroke}
        strokeWidth="2"
        transform="matrix(3 3 -3 3 100 25)"
      />
    </svg>
  );
};

const CustomLine = props => {
  const { x, y } = props.viewBox;
  return (
    <text
      fontSize="10px"
      fontWeight="bold"
      fill="green"
      x={x}
      y={y - 10}
      className="recharts-text recharts-label"
      textAnchor="middle"
    >
      <tspan x={x} dy="0.355em">
        Activated 4/10
      </tspan>
    </text>
  );
};

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined
    };
    this.tooltip = null;
    this.tooltipQty = null;
    this.tooltipDate = null;
  }
  tootltipchange = (event) => {
    console.log("ddddddddd",event)

  }
  customMouseOver = (props, name) => {
   console.log("e props",props)
   
   
  };

  over = e => {
   
  };

  xAxisTickFormatter(month) {
    return month;
  }
  renderTooltip = ({ active, payload, label }) => {
    if (active) {
       console.log("payload",payload)
      // console.log("label",label)
      
      
      return (
        <div className="custom-tooltip">
            <h1>{label}</h1>
          {Object.keys(payload).map((key) => { 
             return (
              <div key={key}>
                 <span>{payload[key].payload.value}</span>
               
                 {/* {payload[key].map((dataItem) => {
                   


                 })} */}
              </div>)
          } 
          )}

          <p className="label">{`${label} : ${'ddd'}`}</p>
        </div>
      );
    }
  
    return null;

  }

  render() {
    return (
      <div>
        <LineChart width={900} height={300} margin={{ top: 20, right: 20 }} 
        onMouseOver={(e)=>this.tootltipchange(e)}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="orderDate"
            tick={{ fontSize: 14, fontWeight: "bold" }}
            domain={[1, 12]}
            tickCount={12}
            tickFormatter={this.xAxisTickFormatter}
            type="number"
            tickLine={false}
            allowDuplicatedCategory={false}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis
            dataKey="value"
            tick={{ fontSize: 13, fill: "#6d6e71" }}
            domain={[0, "dataMax + 12"]}
            tickCount={20}
            allowDecimals={false}
            tickLine={false}
          />
          <Tooltip content={this.renderTooltip}/>
          <ReferenceLine
            x="7"
            strokeDasharray="5,5"
            stroke="green"
            label={<CustomLine />}
          />
          {series.map(s => (
            <Line
              activeDot={{
                onMouseOver: e => this.customMouseOver(e, s)    
              }}
              isAnimationActive={true}
              dataKey="value"
              dot={<CustomizedDot data={s.data} />}
              stroke={s.stroke}
              strokeDasharray={s.strokeDasharray}
              data={s.data}
              name={s.name}
              key={s.name}
            />
          ))}
        </LineChart>
      </div>
    );
  }
}


const CustomTooltip = ({ active, payload, label }) => {
 
};