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
                showInfo: false,
                wikiID: "",
                showTime: false,
                cityTime: ""

            }
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setWikiID = this.setWikiID.bind(this);
        this.checkTimeButton = this.checkTimeButton.bind(this);
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
        this.setWikiID();

    }

    //set WikiID based on cityParam
    setWikiID(){
        let cityParamVar = this.state.cityInfoObj.cityParam;
        let wikiIDVar = "";
        if(cityParamVar == "Corinto,NI"){
            wikiIDVar = "Q1132939";
        } 
        if(cityParamVar == "Los Angeles,US"){
            wikiIDVar ="Q65";
        }
        if(cityParamVar == "Hong Kong,CN"){
            wikiIDVar ="Q8646";
        }
        if(cityParamVar == "London,UK"){
            wikiIDVar ="Q84";
        }
        if(cityParamVar == "Berlin,DE"){
            wikiIDVar ="Q64";
        }
        if(cityParamVar == "Sydney,AU"){
            wikiIDVar ="Q3130";
        }
        if(cityParamVar == "Guatemala City,GT"){
            wikiIDVar ="Q1555";
        }
        console.log(wikiIDVar);
        return wikiIDVar;

    }
    
        
    

    handleClick(event){
        //sets state of cityInfoObj to name, temp and weather from API object
        //sets cityParamVar to the state of cityParam from handleChange(), then uses that to set state of cityParam
        //converts temp from response.data from kelvins to farenheit before setting state of temp
        //sets state of showInfo to true to allow the welcome message to change to weather info panel
        console.log("handle click");
        let wikiIDVar = this.setWikiID();
        console.log("wikiIDVar", wikiIDVar);
        let copy = JSON.parse(JSON.stringify(this.state.cityInfoObj));
        let cityParamVar = this.state.cityInfoObj.cityParam;
        axios
            .get(`/api/${cityParamVar}`)
            .then((response) => {
                console.log(response.data);
                let kelvins = response.data.main.temp;
                let farenheit = Math.round(((kelvins-273.15)*1.8)+32);
                copy = {
                    cityName: response.data.name,
                    temp: farenheit,
                    weather: response.data.weather[0].description,
                    showInfo: true,
                    cityParam: cityParamVar,
                    wikiID: wikiIDVar 
                }
                this.setState({cityInfoObj: copy});
                });    

    }

    checkTimeButton(event){
        console.log("check time button is clicked");
        let wikiIDVar = this.state.cityInfoObj.wikiID;
        console.log("WikiID in check time", wikiIDVar);
        axios
            .get(`/time/${wikiIDVar}`)
            .then((response) => {
                console.log("response.data for city time API once clicked", response.data);
           
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
                checkTimeButton={this.checkTimeButton}
            />
            }
        </div>

        </div>

        </div>


    ); 
  }
}

export default App;