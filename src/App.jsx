import React, { Component } from 'react';
import axios from 'axios';
 
export default class App extends Component {
 constructor(props) {
     super(props);
 
     this.state = {
        weathers : []
     };
 }
 
  componentWillMount() {
    axios
    .get('/api')
    .then(response => response.data)
    .then(weathers => this.setState({ weathers }));
 
 }
 
  render() {
 
   
    return (
        

    <div className='App container jumbotron'>
        <h1>Weather Forecasts</h1>
        <p>Check out the weather in any city.</p>
        <pre>
	        { JSON.stringify(this.state.weathers, null, 2) }
        </pre>

    </div>

      
     
     
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
     
     
     
     
 
    );
 
   
 
   
  }
 
}
