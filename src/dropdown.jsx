import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    return (
        <div className="panel panel-default">
          <div className="panel-heading ">Cities</div>
            <form className="form-horizontal card card-body">
              <div className="form-group">
                <div className="col-sm-10">
                  

                    {/*select menu for cities*/}
                    <h6>List of Cities:</h6>
                    <select 
                    name="cityParam" 
                    value= {this.props.cityParam}
                    onChange = {(e) => this.props.handleChange(e)}
                    className="create-todo-priority form-select" required>
                      <option>Select A City</option>
                      <option value="Los Angeles,US">Los Angeles, US</option>
                      <option value="London,UK">London, UK</option>
                      <option value="Berlin,DE">Berlin, DE</option>
                      <option value="Sydney,AU">Sydney, AU</option>
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
                  this.props.handleClick(e);
                }}>Check Weather</button>
                </div>
              </div>
                </form>

        </div>
      
    );
  }
}
export default Dropdown;