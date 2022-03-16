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
            cityInfo:{

            },
           weathers : []
        };
        // this.componentWillMount = this.componentWillMount.bind(this);
    }
  
    // componentWillMount() {
    //     axios
    //     .get('/api')
    //     .then(response => response.data)
    //     .then(weathers => this.setState({ weathers }));
     
    //  }
  
  render() {
    
    return (
        <div className="container my-4">
            <Header/>
        <div className="row">

        <div className="col-lg-4 col-md-4 mb-4">
          <Dropdown/>
        </div>

        <div className="col-lg-8 col-md-8 mb-8">
        
            {this.state.weathers.length == 0 ? <Welcome/> : 
            <Weather/>
            }
        </div>

        </div>

        </div>


    ); 
  }
}

export default App;