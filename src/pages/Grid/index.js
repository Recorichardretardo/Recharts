import React, { Component } from "react";



import "./index.scss";

import "bootstrap/dist/css/bootstrap.css";

class Grid extends Component {
  render() {

//     <div className="d-none d-xl-block col-xl-2" style={{backgroundColor:'green'}}>
//     <p>Sed ut perspiciatis...</p>
//   </div>


    return (
      <>
      <div className="container-fluid">
  <h1>Hello World!</h1>
  <div className="flex-xl-nowrap row">
    <div className="col-xl-1 col-md-1 col-12 d-flex flex-column" style={{backgroundColor:'yellow'}}>
      <p>Lorem ipsum...</p>
    </div>
    <div className="col-xl-9 col-md-9 col-12" style={{backgroundColor:'pink'}}>
      <p>Sed ut perspiciatis...</p>
    </div>
    <div className="col-xl-2 col-md-2 col-12 d-flex flex-column" style={{backgroundColor:'green'}}>
      <p>Sed ut perspiciatis...</p>
    </div>
  </div>
</div>
      </>
    );
  }
}

export default Grid;