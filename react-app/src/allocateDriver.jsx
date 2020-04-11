import React, { Component } from "react";

class AllocateDriver extends Component {
  state = {
    driver: [],
    cities: []
  };

  componentDidMount() {
    fetch(`http://localhost:8080/drivers`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          driver: json
        });
      });  
      fetch(`http://localhost:8080/cities`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          cities: json
        });
      });   
 
  }

  allocate = e => {
    e.preventDefault();
    const driverId = e.target.elements.driver.value;
    const model = this.props.vehicle.model;
    const vehicleId = this.props.vehicle.vehicleId;
    const category = this.props.vehicle.category;
    const licensePlate = this.props.vehicle.licensePlate;
    const yearRegistration = this.props.vehicle.yearRegistration;
    const yearProduction = this.props.vehicle.yearProduction;
    const color = this.props.vehicle.color;
    const fuel = this.props.vehicle.fuel;
    const hp = this.props.vehicle.hp;
    const seats = this.props.vehicle.seats;
    const brandId = this.props.vehicle.brandId;
    const vin = this.props.vehicle.vin;

    
    const vehicleList = this.props.vehicles.map(vehicle => {
      let brand = vehicle.brand; 
      if (vehicle.vehicleId == vehicleId) { 
        brand.brandId = brandId;
      }
        return vehicle;
      });
    console.log("vehicle id" + vehicleId);
    this.props.updatedVehicles( );
    fetch(`http://localhost:8080/vehicles/driver`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: model,
        category: category,
        licensePlate: licensePlate,
        yearRegistration: yearRegistration,
        yearProduction: yearProduction,
        color: color,
        fuel: fuel,
        hp: hp,
        vin: vin,
        seats: seats,
        vehicleId: vehicleId,
        brand: {
          brandId: brandId
        },
        driver: {
          driverId: driverId
        }
      })
    });

    this.setState({
      isAdded: true
    });
     console.log("worked")

     const cityFrom = e.target.elements.cityFrom.value;
     const cityTo = e.target.elements.cityTo.value;
     console.log("vehicle id" + vehicleId);
    if(vehicleId == null) {
      alert("Please reload the page to view the modified data.")
    }else {
      fetch(`http://localhost:8080/logs`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          vehicle: {
            vehicleId: vehicleId
          },
          driver: {
            driverId: driverId
          },
          cityTo: {
            cityId : cityFrom
          },
          cityFrom: {
            cityId: cityTo
          }
        })
      });
    }

  };
  render() {
    let driverArray;
    let cityArray;

    if (this.state.driver != null) {
      driverArray = this.state.driver.map(driver => {
        return (
          <option value={driver.driverId}>FMS-ID-{driver.driverId}</option>
        );
      });
    }
    if (this.state.cities != null) {
      cityArray = this.state.cities.map(city => {
        return (
          <option value={city.cityId}>{city.name}</option>
        );
      });
    }
    return (
      <div className="crudproduct-div-all">
        <img
          src="https://image.flaticon.com/icons/svg/305/305982.svg"
          width="100"
          height="100"
          className="crudproduct-img-desc"
          alt="React Bootstrap logo"
        />
        <form onSubmit={this.allocate}>
          <div class="form-group">
            <br />
            <select
              name="driver"
              className="form-control"
              placeholder="Category"
            >
              {driverArray}
            </select>  
            From :  
            <select
              name="cityFrom"
              className="form-control"
              placeholder="City From"

            >
              {cityArray}
            </select> 
            To : 
              <select
              name="cityTo"
              className="form-control"
              placeholder="City To"
            >
              {cityArray}
            </select>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AllocateDriver;
