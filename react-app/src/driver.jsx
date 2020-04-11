import React, { Component } from "react"; 
import "./home.css";
class Driver extends Component {
  state = {};

  
  handleRemove = e => {  
    e.preventDefault();
    const driverId = this.props.driver.driverId; 
    this.props.removeDriver(driverId);
    fetch(`http://localhost:8080/drivers/${driverId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }, 
    });  
    this.setState({
      isRemoved: true
    }); 


}

  render() {
    let driverPlaceholder;

    if (this.props.driver.gender === "Male") {
      driverPlaceholder = "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg";
    } else {
      driverPlaceholder =
        "https://www.elladavidsalon.com/wp-content/uploads/female-placeholder.jpg";
    }
    return (
      <div className="vehicle-div-card">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <div className="card bg-light">
          <div className="card-header">
            {this.props.driver.firstName} {this.props.driver.lastName} - DRIVID-{this.props.driver.driverId} 
          </div>
       
          <div classNameName="vehicle-div-imageholderd-driver">
            <img src={driverPlaceholder} />
          </div>
          <div className="card-body"> 
            <h6 className="card-title">
             Position:  {this.props.driver.position}
            </h6>
          </div> 
          <div className="vehicle-div-close">
           <button className="btn btn-danger" onClick={this.handleRemove}> 
               Remove
           </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Driver;
