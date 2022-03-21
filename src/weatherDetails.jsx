import React, { Component } from "react";

class WeatherDetails extends Component {
  render() {
    return (
      
      <div>
      <div className="media">
        <img className="mr-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZodP2YkVt0-QrBSSqoFMzs0ZypRYwRnxSg&usqp=CAU" alt="Generic placeholder image"/>
      <div className="media-body">
        {/* <h5 className="mt-0">{this.props.cityInfoObj.cityName}</h5>
        <p>{this.props.cityInfoObj.weather}</p>
        <p>{this.props.cityInfoObj.temp}</p> */}
        <h3>{`The weather in ${this.props.cityInfoObj.cityName} is ${this.props.cityInfoObj.weather} with a temperature of ${this.props.cityInfoObj.temp}.`}</h3>
      </div>
      </div>

       
      <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-primary" type="button" name="submit"
                onClick={(e) => {
                this.props.checkTimeButton(e);
            }}>Check Time</button>
          </div>
      </div>
      </div>
      
        
       
        
    );
  }
}
export default WeatherDetails;