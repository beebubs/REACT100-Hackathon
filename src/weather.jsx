import React, { Component } from "react";

class Weather extends Component {
    render() {
      
      
      return (
        
        
    
    <div className="panel panel-default">
    <div className="panel-heading">Weather in {this.props.cityInfoObj.cityName}</div>
    <div className="panel-body">

      
      <div className="media">
        <img className="mr-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZodP2YkVt0-QrBSSqoFMzs0ZypRYwRnxSg&usqp=CAU" alt="Generic placeholder image"/>
      <div className="media-body">
        <h5 className="mt-0">{this.props.cityInfoObj.cityName}</h5>
        <p>{this.props.cityInfoObj.weather}</p>
        <p>{this.props.cityInfoObj.temp} degrees</p>
      </div>
      </div>


        

        
        







	    {/* <h4>{this.props.cityInfoObj.cityName}</h4>
	    <p>{this.props.cityInfoObj.weather}</p>
      <p>{this.props.cityInfoObj.temp}</p> */}
    </div>
    </div>
     
      );
    }
  }
  export default Weather;