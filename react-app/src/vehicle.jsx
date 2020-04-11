import React, { Component } from "react";  
import Modal from "react-awesome-modal";
import AllocateDriver from "./allocateDriver";
class Vehicle extends Component {
  state = {
    isAllocated: false
  };

  openModal() {
    console.log();
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  handleRemove = e => {  
      e.preventDefault();
      const vehicleId = this.props.vehicle.vehicleId; 
  
      fetch(`http://localhost:8080/vehicles/${vehicleId}`, {
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
    let vehiclePlaceholder;
    let isAllocated;
    let allocateText = "Allocate";
    let driverAllocated;

    if (this.props.vehicle.category === "Cargo") {
      vehiclePlaceholder = "https://cdn0.iconfinder.com/data/icons/isometric-city-basic-transport/48/truck-front-01-512.png";
    } else {
      vehiclePlaceholder =
        "https://cdn0.iconfinder.com/data/icons/isometric-city-basic-transport/480/car-front-02-512.png";
    }
    
    if (this.props.vehicle.driver) {
      isAllocated = true;
      allocateText = "Allocated";
      driverAllocated = <div className="vehicle-div-driverallocated"> Allocated to :  {this.props.vehicle.driver.firstName} / DRIV-ID-{this.props.vehicle.driver.driverId}</div>  ;
    }
    else {
      driverAllocated = <div className="filler"> </div> ; 
    }

     
    return (
      <div className="vehicle-div-card">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <div class="card bg-light mb-400">
          <div class="card-header">
            {this.props.vehicle.brand.name} {this.props.vehicle.model} - FMS-ID-
            {this.props.vehicle.vehicleId}
          </div>

          <div className="vehicle-div-imageholder">
            <img src={vehiclePlaceholder} />
          </div>
          <div class="card-body">
            <h5 class="card-title">{this.props.vehicle.licensePlate}</h5>
            <h6 class="card-title">
              {this.props.vehicle.color}. {this.props.vehicle.seats} seater.
            </h6>
          </div>
          <div></div> 
            {driverAllocated} 
          <button
            className="btn btn-primary"
            disabled={isAllocated}
            onClick={this.openModal.bind(this)}
          >
            <b>{allocateText}</b>
          </button>
          <div className="vehicle-div-close">
            <button className="btn btn-danger" disabled={isAllocated} onClick={this.handleRemove}>
              Remove
            </button>
          </div>
        </div>
        <Modal
          visible={this.state.visible}
          width="500"
          height="800"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <AllocateDriver
            closeModal={this.closeModalDriver}
            crudoption={this.state.crudoption}
            vehicle={this.props.vehicle}
            vehicles={this.props.vehicles}
            updatedVehicles={this.props.updateVehicles}
          />
        </Modal>
      </div>
    );
  }
}

export default Vehicle;