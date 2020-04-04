import React, { Component } from 'react';
import moment from 'moment';

 class TimeZones extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    
    };
  }
  componentDidMount() {
    
    let date = new Date();
    console.log("date : "+date)
    // 2020-04-04T07:53:00+00:00
    let dateFormat = moment(date).format("YYYY-MM-DDTHH:mm:ss+00:00")
    console.log("dateFormat : "+dateFormat)

    let pstOffSet = -8*60

     date.setMinutes(date.getMinutes() + pstOffSet)

    console.log("PST : "+date)
    let PSTFormat = moment(date).format("YYYY-MM-DDTHH:mm:ss+00:00")

    console.log("PSTFormat TO  : "+PSTFormat)

    let sevenDay = new Date(date.getTime() - (1000*60*60*7*24));

    let PSTSevenDaysFormat = moment(sevenDay).format("YYYY-MM-DDTHH:mm:ss+00:00")

    console.log("PSTFormat From : "+PSTSevenDaysFormat)
   
  }

  

  render() {
    return (<>
    <div className="date-picker-class">
     Hello World
</div>
     </>);
  }
}

export default  TimeZones;

