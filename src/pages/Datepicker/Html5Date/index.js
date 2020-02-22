import React, { Component } from 'react';
import moment from 'moment';
import './index.scss'




 class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      startDate:  null,
      endDate:null,
      minDate:'01/09/2019',
      maxDate:'07/09/2019'
    };
  }
  componentDidMount() {
   
    //console.log("new date",new Date())
  }




  render() {

  

      
    return (<>
    <div className="date-picker-class">

    <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" />
  
</div>
     </>);
  }
}

export default  Datepicker;

