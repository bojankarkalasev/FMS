import React, { Component } from "react";
import Cookies from "universal-cookie";
import "./product.css";

class CrudProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      categories: [],
      fuels: [],
      genders: [],
      brands: [],
      vehicles: [],
      model: "",
      category: "",
      licenseplate: "",
      registrationyear: "",
      productionyear: "",
      color: "",
      fuel: "",
      hp: "",
      seats: "",
      brand: "",
      updateVehicleSelected: false,
      crudUpdateHiddenBool: true,
      crudRemoveBool: true
    };
  }

  getColors = () => {
    const cookie = new Cookies();
  };

  componentDidMount() {
    fetch(`http://localhost:8080/colors`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          colors: json
        });
      });
    fetch(`http://localhost:8080/fuels`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          fuels: json
        });
      });
    fetch(`http://localhost:8080/categories`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          categories: json
        });
      });
    fetch(`http://localhost:8080/brands`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          brands: json
        });
      });
    fetch(`http://localhost:8080/vehicles`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          vehicles: json
        });
      });
    this.setState({
      crudUpdateHiddenBool: true
    });
  }

  addVehicle = e => {
    e.preventDefault();

    const model = e.target.elements.model.value;
    const category = e.target.elements.category.value;
    const licensePlate = e.target.elements.licenseplate.value;
    const yearRegistration = e.target.elements.registrationyear.value;
    const yearProduction = e.target.elements.productionyear.value;
    const color = e.target.elements.colors.value;
    const fuel = e.target.elements.fuel.value;
    const hp = e.target.elements.hp.value;
    const seats = e.target.elements.seats.value;
    const brandId = e.target.elements.brand.value;
    const vin = e.target.elements.vin.value;

    this.props.addVehicle({
      model,
      category,
      licensePlate,
      yearRegistration,
      yearProduction,
      color,
      fuel,
      hp,
      seats,
      brand:{brandId},
      vin,
    });

    fetch(`http://localhost:8080/vehicles`, {
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
        brand: {
          brandId: brandId
        }
      })
    });
       
    this.props.closeModal();
  };

  updateVehicle = e => {
    e.preventDefault();
    this.setState({
      updateVehicleSelected: true
    }); 
    const color = e.target.elements.colors.value;
    const seats = e.target.elements.seats.value;
    const vehicleId = e.target.elements.vehicle.value;

    const vehicles = this.state.vehicles;
    const updatedVehicles = vehicles.map((vehicle) =>{
      const updatedVehicle = vehicle; 
        if (vehicle.vehicleId == vehicleId){
          updatedVehicle.color = color;
          updatedVehicle.seats =  seats
        }
        return updatedVehicle;
    });
    this.props.updateVehicles(updatedVehicles);

    fetch(`http://localhost:8080/vehicles/${vehicleId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        color: color,
        seats: seats
      })
    });

    fetch(`http://localhost:8080/vehicles`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          vehicles: json
        });
      });
      
    this.props.closeModal();
  };

  state = {};
  render() {
    let confirmation;
    let postMethod;
    let crudUpdateBool;
    let crudUpdateHiddenBool;
    let vehiclesArray;
    let categoryArray;
    let colorArray;
    let fuelArray;
    let brandArray;

    if (this.state.isAdded) {
      confirmation = (
        <div class="alert alert-success">
          Created successfully! Refresh page to see new items!
        </div>
      );
    }

    if (this.props.crudoption === "add") {
      postMethod = this.addVehicle;
      crudUpdateHiddenBool = true;
    }
    if (this.props.crudoption === "update") {
      postMethod = this.updateVehicle;
      crudUpdateBool = true;
      crudUpdateHiddenBool = false;
    }

    if (this.state.vehicles != null) {
      vehiclesArray = this.state.vehicles.map(vehicle => {
        return (
          <option value={vehicle.vehicleId}>FMS-ID-{vehicle.vehicleId}</option>
        );
      });
    }

    if (this.state.categories != null) {
      categoryArray = this.state.categories.map(category => {
        return <option value={category}>{category}</option>;
      });
    }

    if (this.state.colors != null) {
      colorArray = this.state.colors.map(color => {
        return <option value={color}>{color}</option>;
      });
    }

    if (this.state.fuels != null) {
      fuelArray = this.state.fuels.map(fuel => {
        return <option value={fuel}>{fuel}</option>;
      });
    }

    if (this.state.brands != null) {
      brandArray = this.state.brands.map(brand => {
        return <option value={brand.brandId}>{brand.name}</option>;
      });
    }

    return (
      <div className="crudproduct-div-all">
        <img
          src="https://cdn.onlinewebfonts.com/svg/img_157771.png"
          width="100"
          height="100"
          className="crudproduct-img-desc"
          alt="React Bootstrap logo"

        />
        <form onSubmit={postMethod}>
          <div class="form-group">
            <br />
            <select
              name="vehicle"
              className="form-control"
              placeholder="Category"
              hidden={crudUpdateHiddenBool} 
            >
              {vehiclesArray}
            </select>
            <input
              type="text"
              class="form-control"
              name="model"
              aria-describedby="emailHelp"
              placeholder="Model"
              disabled={crudUpdateBool}
              required
            />

            <select
              name="category"
              className="form-control"
              placeholder="Category"
              disabled={crudUpdateBool}
              required
            >
              {categoryArray}
            </select>
            <input
              type="text"
              class="form-control"
              name="licenseplate"
              placeholder="License Plate"
              disabled={crudUpdateBool}
              required
            />
            <input
              type="text"
              class="form-control"
              name="vin"
              placeholder="VIN"
              disabled={crudUpdateBool}
              required
            />
            <input
              type="text"
              class="form-control"
              name="registrationyear"
              placeholder="Registration Year"
              disabled={crudUpdateBool}
              required
            />
            <input
              type="text"
              class="form-control"
              name="productionyear"
              placeholder="Production Year"
              disabled={crudUpdateBool}
              required
            />
            <select name="colors" className="form-control" placeholder="Color">
              {colorArray}
            </select>
            <select
              name="fuel"
              className="form-control"
              placeholder="fuel"
              disabled={crudUpdateBool}
              required
            >
              {fuelArray}{" "}
            </select>
            <input
              type="text"
              class="form-control"
              name="hp"
              placeholder="HP"
              disabled={crudUpdateBool}
              required
            />
            <input
              type="text"
              class="form-control"
              name="seats"
              placeholder="Seats"
              required
            />
            <select
              name="brand"
              className="form-control"
              placeholder="Brand"
              disabled={crudUpdateBool}
              required
            >
              {brandArray}
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CrudProduct;
