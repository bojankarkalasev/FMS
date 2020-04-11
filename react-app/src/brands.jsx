import React, { Component } from 'react';   


class Brands extends Component {

    handleRemove = () => {
      fetch(`http://localhost:8080/brands/${this.props.brand.brandId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            brand: {
                brandId: this.props.brand.brandId
            }
        })
        });
    }



    state = {  }
    render() { 
        return ( 
            <div>
                 <div className="vehicle-div-card">
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
            />
            <div className="card bg-light mb-400">  <div class="alert alert-danger" role="alert">
                   You cannot remove brands which have been associated to a vehicle!
            </div> 
            <div className="card-header">
                <img src={this.props.brand.logo}/>
            </div> 
            <div classNameName="vehicle-div-imageholderd-driver">
          <center> {this.props.brand.name} </center> 
            </div> 
            <div className="vehicle-div-close">
            <button className="btn btn-danger" onClick={this.handleRemove}> 
                Remove
            </button>
            </div>
            </div>
        </div> 
            </div>
         );
    }
}
 
export default Brands;