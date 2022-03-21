import React, { Component } from "react";

class ShowTime extends Component {
  render() {
    return (
      
      <div>
        <h4>Current Time in {this.props.cityInfoObj.cityName}</h4>
        <h1>{this.props.cityInfoObj.cityTime}</h1>
      </div>
  
    );
  }
}
export default ShowTime;