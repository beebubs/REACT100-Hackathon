import React, { Component } from 'react';
import axios from 'axios';
import Weather from './weather';
import Header from './header';
import Dropdown from './dropdown';
import Welcome from './welcome';


class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            cityInfoObj:{
                cityName:"",
                cityParam: "",
                temp: "",
                weather: "",
                showInfo: false

            },
           //cityInfoArr : []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        //sets state to the value of the selected city in the dropdown menu 
        //creates a deep copy of the object
        console.log(event.target.value)
        console.log(event.target.name)
        let copy = JSON.parse(JSON.stringify(this.state.cityInfoObj));
        //const {name, value} = event.target;
        const name = event.target.name;
        const value = event.target.value;
        copy[name] = value; 
        //copy.cityName = value;
        this.setState({
        cityInfoObj: copy
    });
    
        
    }

    handleClick(event){
        //sets state of cityInfoObj to name, temp and weather from API object
        //sets state of showInfo to true to allow the welcome message to chagnge to weather info panel
        console.log("handle click");
        let copy = JSON.parse(JSON.stringify(this.state.cityInfoObj));
        axios
            .get(`/api/${this.state.cityInfoObj.cityParam}`)
            .then((response) => {
                console.log(response);
                copy = {
                    cityName: response.data.name,
                    temp: response.data.main.temp,
                    weather: response.data.weather[0].description,
                    showInfo: true
                }
                this.setState({cityInfoObj: copy});
                });

    }


    
  
  render() {
    
    return (
        <div className="container my-4">
            <Header/>
        <div className="row">

        <div className="col-lg-4 col-md-4 mb-4">
          <Dropdown
              handleClick = {this.handleClick}
              handleChange= {this.handleChange}
          />
        </div>

        <div className="col-lg-8 col-md-8 mb-8">
        
            {this.state.cityInfoObj.showInfo == false ? <Welcome/> : 
            <Weather
                cityInfoObj = {this.state.cityInfoObj}
                handleChange = {this.handleChange}
            />
            }
        </div>

        </div>

        </div>


    ); 
  }
}

export default App;