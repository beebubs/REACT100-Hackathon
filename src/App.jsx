import React, { Component } from 'react';
import axios from 'axios';
 
export default class App extends Component {
 constructor(props) {
     super(props);
 
     this.state = {
        weather : []
     };
 }
 
  componentWillMount() {
    axios
    .get('/api')
    .then(response => console.log(response.data))
    // .then(response => response.data)
    // .then(weather => this.setState({ weather }));
 
 }
 
  render() {
 
   
    return (
        <pre>
	{ JSON.stringify(this.state.weather, null, 2) }
        </pre>


    //   <div className='App container jumbotron'>
    //     <h1>Weather Forecast</h1>
    //     <p>Check out the weather in any city.</p>
     
     
    //   {
    //     this.state.topspots.map(topspot => (
    //       <TopSpot
    //         key={topspot.id}
    //         name={topspot.name}
    //         description={topspot.description}
    //         location={topspot.location}
    //       />
    //     ))
    //   }
     
     
    //   </div>
     
     
 
    );
 
   
 
   
  }
 
}
