import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
    <div className='App container jumbotron'>
            <h1>Weather Forecasts</h1>
            <p>Check out the weather in any of the cites below.</p>
            <hr/>
    </div>
    );
  }
}
export default Header;