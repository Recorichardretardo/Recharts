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

    // console.log("============CURRENT DATE IST ==============\n")
     // let currentDate = new Date();
    //   console.log("currentDate : ",currentDate);
    //   let currentDateFormat = moment(currentDate).format("YYYY-MM-DDTHH:mm:ss+00:00")
    //   console.log("currentDateFormat : ",currentDateFormat);
    //   console.log("============CURRENT DATE UTC ==============\n") 
      // let utcDate = currentDate.toUTCString();
      // console.log("utcDate :  ",utcDate); 
      // let utcDateFormat = moment(utcDate).utc().format("YYYY-MM-DDTHH:mm:ss+00:00")
      // console.log("utcDateFormat : ",utcDateFormat);
    //   // console.log("============CURRENT DATE GMT ==============/n") 
    //   // let gmtDate = currentDate.toGMTString();
    //   //  console.log("gmtDate : ",gmtDate)
    //   // let gmtDateFormat = moment(gmtDate).format("YYYY-MM-DDTHH:mm:ss+00:00")
    //   // console.log("gmtDateFormat : ",gmtDateFormat);
    // console.log("===========================================================================================\n");
     let pstOffSet = -8*60

    // console.log("============CURRENT DATE IST PT TIME ZONE ==============\n")

    let currentPTDATE = new Date();
     currentPTDATE.setMinutes(currentPTDATE.getMinutes() + pstOffSet);

     console.log("currentPTDATE : ",currentPTDATE);
     let currentPTDATEFormat = moment(currentPTDATE).format("YYYY-MM-DDTHH:mm:ss+00:00");
     console.log("currentPTDATEFormat : ",currentPTDATEFormat);

    //  console.log("============CURRENT DATE UTC PT TIME ZONE ==============\n")
    //  let ptOffSet = -12*60
    // let utcPTDATE = new Date();
    // utcPTDATE.setUTCMinutes(utcPTDATE.getUTCMinutes() + ptOffSet);

    //  console.log("utcPTDATE : ",utcPTDATE);


    let offset =  -8

    console.log("offset",offset)
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    
    // let UTCString = nd.toLocaleString

    console.log("d",d)
    console.log("nd",nd)

    let ndDateFormat = moment(nd).format("YYYY-MM-DDTHH:mm:ss+00:00");
    console.log("ndDateFormat : ",ndDateFormat);
    
   

   

    function calcTime(city, offset) {

      d = new Date();
  
      utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  
      nd = new Date(utc + (3600000*offset));
  
      return "The local time in " + city + " is " + nd.toLocaleString();
  
  }
  
  // get Bombay time
  console.log(calcTime('Bombay', '+5.5'));
  
  // get Singapore time
  console.log(calcTime('Singapore', '+8'));

  console.log(calcTime('GMT', '-8'));
  
  // get London time
  console.log(calcTime('London', '+1'));
    
  function dateToGMT(date, offset ) {
    let hours = date.getUTCHours() + offset
    if (hours > 23) hours = 24 - hours
    if (hours < 0) hours = 24 + hours
    return `${hours}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
   } 

   console.log("dateToGMT",dateToGMT(new Date(), -8));

    
 
    
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

