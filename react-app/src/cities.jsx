import React, { Component } from 'react';
import "./home.css";

class Cities extends Component {
    state = {  }


    handleRemove = () => {
        fetch(`http://localhost:8080/cities/${this.props.city.cityId}`, {
          method: "DELETE",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ 
              city: {
                  cityId: this.props.city.cityId
              }
          })
          });
      }


    render() { 
        return ( 
            <div>
                  <div>
                 <div className="vehicle-div-card">
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
            />
            <div className="card bg-light">
            <div className="card-header">
                <h3>{this.props.city.name} </h3>
            </div> 
            <div classNameName="vehicle-div-imageholderd-driver">
                <img src="https://img.icons8.com/bubbles/2x/city.png" />
            </div> 
            <div className="vehicle-div-close">
            <button className="btn btn-danger" onClick={this.handleRemove}> 
                Remove
            </button>
            </div>
            </div>
        </div> 
            </div>

            </div>
         );
    }
}
 
export default Cities;  