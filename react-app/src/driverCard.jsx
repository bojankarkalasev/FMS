import React, { Component } from "react";
 
class DriverCard extends Component {
  state = {
    genders: [],
    drivers: [],
    firstName: "",
    lastName: "",
    gender: "",
    position: "",
    isUpdated: false
  };

  componentDidMount() {
    fetch(`http://localhost:8080/genders`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          genders: json
        });
      });
    fetch(`http://localhost:8080/drivers`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          drivers: json
        });
      });
    this.setState({
      crudUpdateDriverBool: true
    });
  }
  addDriver = e => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const gender = e.target.elements.gender.value;
    const position = e.target.elements.position.value;
    const drivers = this.state.drivers;

    const newDriver = { firstName, lastName, gender, position };
    drivers.push(newDriver);
    this.props.setDrivers(drivers);
    
    fetch(`http://localhost:8080/drivers`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        gender,
        position
      })
    });

    this.setState({
      isAdded: true
    });

    this.props.closeModal();

  };

  updateDriver = e => {
    e.preventDefault();
    this.setState({
      updateVehicleSelected: true
    });
    const position = e.target.elements.position.value;
    const driverId = e.target.elements.driver.value;
    const drivers = this.state.drivers;
    console.log("drivers", drivers, driverId, position);
    const updatedDrivers = drivers.map(element => {
      const updatedElement = element;
      console.log(element, element.driverId === driverId);
      if (element.driverId === Number.parseInt(driverId)) {
        updatedElement.position = position;
      }
      return updatedElement;
    });
    console.log("updare", updatedDrivers);
    this.props.setDrivers(updatedDrivers);

    fetch(`http://localhost:8080//drivers/${driverId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        position: position
      })
    }).then(
      this.setState({
        isUpdated: true
      })
    );
    this.props.closeModal();
  };
  render() {
    let postMethod;
    let crudUpdateBool;
    let crudUpdateDriverBool;
    let confirmation;
    let driverArray;

    if (this.props.crudoption === "add") {
      postMethod = this.addDriver;
      crudUpdateDriverBool = true;
    }
    if (this.props.crudoption === "update") {
      postMethod = this.updateDriver;
      crudUpdateBool = true;
      crudUpdateDriverBool = false;
    }

    if (this.state.drivers != null) {
      driverArray = this.state.drivers.map(driver => {
        return (
          <option value={driver.driverId}>DRIV-ID-{driver.driverId}</option>
        );
      });
    }

    return (
      <div className="sample-div">
        <div className="crudproduct-div-all">
          {confirmation}
          <img
            src="https://image.flaticon.com/icons/svg/305/305982.svg"
            width="100"
            height="100"
            className="crudproduct-img-desc"
            alt="React Bootstrap logo"
          />
          <form onSubmit={postMethod}>
            <div class="form-group">
              <br />
              <select
                name="driver"
                className="form-control"
                placeholder="Category"
                hidden={crudUpdateDriverBool}
              >
                {driverArray}
              </select>
              <input
                type="text"
                class="form-control"
                name="firstName"
                aria-describedby="emailHelp"
                placeholder="First Name"
                disabled={crudUpdateBool}
              />
              <input
                type="text"
                class="form-control"
                name="lastName"
                aria-describedby="emailHelp"
                placeholder="Last Name"
                disabled={crudUpdateBool}
              />
              <select
                name="gender"
                className="form-control"
                placeholder="Gender"
                hidden={crudUpdateBool}
              >
                {this.state.genders.map(gender => {
                  return <option value={gender}>{gender}</option>;
                })}
              </select>
              <input
                type="text"
                class="form-control"
                name="position"
                aria-describedby="emailHelp"
                placeholder="Position"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default DriverCard;
