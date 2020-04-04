import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../Datepicker/index.scss';

 class Datepicker extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    
    };
  }
  componentDidMount() {
   
  }

  

  render() {
    return (<>
    <div className="date-picker-class">
     Hello World
</div>
     </>);
  }
}

export default  Datepicker;

