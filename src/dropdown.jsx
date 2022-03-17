import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    return (
        <div style={{backgroundColor: 'lavender'}}>
        <div className="panel panel-default">
          <div className="panel-heading ">Cities</div>
            <form className="form-horizontal card card-body">
              <div className="form-group">
                <div className="col-sm-10">
                  

                    {/*select menu for priority*/}
                    <h6>Check out the weather in any city below:</h6>
                    <select 
                    name="cityName" 
                    value= {this.props.name}
                    onChange = {(e) => this.props.handleChange(e)}
                    className="create-todo-priority form-select" required>
                      <option>Select A City</option>
                      <option value="Los Angeles,US">Los Angeles, US</option>
                      <option value="London,UK">London, UK</option>
                      <option value="Berlin,DE">Berlin, DE</option>
                      <option value="Sydney,AU">Sydney, AU</option>
                      <option value="Hong Kong,CN">Hong Kong, CN</option>
                      <option value="Guatemala City,GT">Guatemala City, GT</option>
                      <option value="Corinto,NI">Corinto, NI</option>
                    </select>

                </div>
              </div>
              

              {/*add button and click event */}
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary" type="button" name="submit"
                onClick={(e) => {
                  // e.preventDefault();
                  this.props.handleClick(e);
                }}>Check Weather</button>
                </div>
              </div>
                </form>

        </div>
      </div>
    );
  }
}
export default Dropdown;