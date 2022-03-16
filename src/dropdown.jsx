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
                    name="priority" 
                    // value= {this.props.priority}
                    // onChange = {this.props.handleChange}
                    className="create-todo-priority form-select" required>
                      <option>Select A City</option>
                      <option value="1">Los Angeles, US</option>
                      <option value="2">London, UK</option>
                      <option value="3">Berlin, DE</option>
                      <option value="4">Sydney, AU</option>
                      <option value="5">Hong Kong, CN</option>
                      <option value="6">Guatemala City, GT</option>
                      <option value="7">Corinto, NI</option>
                    </select>

                </div>
              </div>
              

              {/*add button and click event */}
              {/* <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary" type="button" name="submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.handleClick(e);
                }}>Check Weather</button>
                </div>
              </div> */}
                </form>

        </div>
      </div>
    );
  }
}
export default Dropdown;