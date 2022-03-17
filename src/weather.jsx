import React, { Component } from "react";

class Weather extends Component {
    render() {
      
      
      return (
        
        
    
    <div className="panel panel-default">
    <div className="panel-heading">Weather in {this.props.cityInfoObj.cityName}</div>
    <div className="panel-body">
	    <h4>{this.props.cityInfoObj.cityName}</h4>
	    <p>{this.props.cityInfoObj.weather}</p>
      <p>{this.props.cityInfoObj.temp}</p>
    </div>
    </div>
     
      );
    }
  }
  export default Weather;