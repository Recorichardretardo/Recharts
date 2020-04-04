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
    
    // let date = new Date();
    // console.log("date : "+date)
    // // 2020-04-04T07:53:00+00:00
    // let dateFormat = moment(date).format("YYYY-MM-DDTHH:mm:ss+00:00")
    // console.log("dateFormat : "+dateFormat)
    // let pstOffSet = -8*60
    //  date.setMinutes(date.getMinutes() + pstOffSet)
    //  console.log("PST : "+date)
    // let PSTFormat = moment(date).format("YYYY-MM-DDTHH:mm:ss+00:00")
    // console.log("PSTFormat TO  : "+PSTFormat)
    // let sevenDay = new Date(date.getTime() - (1000*60*60*7*24));
    // let PSTSevenDaysFormat = moment(sevenDay).format("YYYY-MM-DDTHH:mm:ss+00:00")
    // console.log("PSTFormat From : "+PSTSevenDaysFormat)

    console.log("============CURRENT DATE IST ==============\n")
      let currentDate = new Date();
      console.log("currentDate : ",currentDate);
      let currentDateFormat = moment(currentDate).format("YYYY-MM-DDTHH:mm:ss+00:00")
      console.log("currentDateFormat : ",currentDateFormat);
      console.log("============CURRENT DATE UTC ==============\n") 
      let utcDate = currentDate.toUTCString();
      console.log("utcDate :  ",utcDate); 
      let utcDateFormat = moment(utcDate).utc().format("YYYY-MM-DDTHH:mm:ss+00:00")
      console.log("utcDateFormat : ",utcDateFormat);
      // console.log("============CURRENT DATE GMT ==============/n") 
      // let gmtDate = currentDate.toGMTString();
      //  console.log("gmtDate : ",gmtDate)
      // let gmtDateFormat = moment(gmtDate).format("YYYY-MM-DDTHH:mm:ss+00:00")
      // console.log("gmtDateFormat : ",gmtDateFormat);
    console.log("===========================================================================================\n");
    let pstOffSet = -8*60

    console.log("============CURRENT DATE IST PT TIME ZONE ==============\n")

    let currentPTDATE = new Date();
     currentPTDATE.setMinutes(currentPTDATE.getMinutes() + pstOffSet);

     console.log("currentPTDATE : ",currentPTDATE);

     console.log("============CURRENT DATE UTC PT TIME ZONE ==============\n")
     let ptOffSet = -12*60
    let utcPTDATE = new Date();
    utcPTDATE.setUTCMinutes(utcPTDATE.getUTCMinutes() + ptOffSet);

     console.log("utcPTDATE : ",utcPTDATE);

   

    


    
 
    
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

