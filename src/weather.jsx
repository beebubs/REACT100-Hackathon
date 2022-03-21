import React, { Component } from "react";
import WeatherDetails from './weatherDetails';
import ShowTime from './showTime';

class Weather extends Component {
    render() {
      
      
      return (
        
        
    
    <div className="panel panel-default">
    <div className="panel-heading">{this.props.cityInfoObj.cityName}</div>
    <div className="panel-body">

      {this.props.cityInfoObj.showTime == false ?
      <WeatherDetails cityInfoObj = {this.props.cityInfoObj}
        handleChange = {this.props.handleChange}
        checkTimeButton={this.props.checkTimeButton}/>

      :
      <ShowTime cityInfoObj = {this.props.cityInfoObj}
        handleChange = {this.props.handleChange}
        checkTimeButton={this.props.checkTimeButton}/>
      }



    </div>
    </div>
     
      );
    }
  }
  export default Weather;