import React, { Component } from "react";
import Vehicle from "./vehicle";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown"; 
import Modal from "react-awesome-modal";
import CrudProduct from "./crudproduct";
import Driver from "./driver";
import Brand from "./brand";
import Brands from "./brands";
import DriverCard from "./driverCard"; 
import City from "./city";
import Cities from "./cities"; 
import LogTable from "./logTable"; 
import { ToastProvider, useToasts } from 'react-toast-notifications'
import Dashboard from "./dashboard";


class Home extends Component {
  state = {
    vehicles: [],
    brands: [],
    drivers: [],
    cities: [],
    crudoption: "",
    viewVehicles: true,
    viewBrands: false,
    viewDrivers: false,
    viewDashboard: false,
    viewCities: false,
    viewLogs: false,
    isCompleted: false,
    isDashboard: false,
    cityVisible: false,
    brandVisible: false,
    isDriverAdded: false,
    isDriverUpdated: false,
    isVechicleAdded: false,
    isVehicleUpdated: false,
    isCityAdded: false,
    isBrandAdded: false
    
  };

  openModal(crud) {
    
    console.log(crud);
    this.setState({
      visible: true,
      crudoption: crud
    });
    console.log("crudoption" + this.state.crudoption);
  }

  closeModal = () => {
    this.setState({
      visible: false
    });
    this.isLogs()
  };
  openModalDriver(crud) {
    console.log(crud);
    this.setState({ 
      driverVisible: true,
      crudoption: crud
    });
  }

  closeModalDriver = () => {
    this.setState({
      driverVisible: false
    });
    this.isDriver() 
  };
  openModalBrand(crud) {
    console.log(crud);
    this.setState({
      brandVisible: true,
      crudoption: crud
    });
  }

  closeModalBrand = () => {
    this.setState({
      brandVisible: false
    });
    this.isBrand()  
  };
  openModalCity(crud) {
    console.log(crud);
    this.setState({
      cityVisible: true,
      crudoption: crud
    });
  } 
  
  openLogTable(crud) {
    console.log(crud);
    this.setState({ 
      crudoption: crud
    });
  }

  closeModalCity = () => {
    this.setState({
      cityVisible: false
    }); 
    this.isCities() 
  };

  isVehicle = () => {
    this.setState({
      viewVehicles: true,
      viewDrivers: false,
      viewLogs: false, 
      viewBrands: false,
      viewCities: false,
      viewDashboard: false

    });
  };  
  
  isCities = () => {
    this.setState({
      viewVehicles: false,
      viewDrivers: false,
      viewLogs: false, 
      viewBrands: false,
      viewCities: true,
      viewDashboard: false

    });
  };

  isDriver = () => {
    this.setState({
      viewVehicles: false,
      viewDrivers: true,
      viewLogs: false, 
      viewBrands: false,
      viewCities: false,
      viewDashboard: false

    });
  };
  
  isBrand = () => {
    this.setState({
      viewVehicles: false,
      viewDrivers: false,
      viewLogs: false, 
      viewBrands: true,
      viewCities: false,
      viewDashboard: false

    });
  }; 
  
  isDashboard = () => {
    this.setState({
      viewVehicles: false,
      viewDrivers: false,
      viewLogs: false, 
      viewDashboard: true,
      viewBrands: false,
      viewCities: false,
    });  
  }
  isLogs = () => {
    this.setState({
      viewVehicles: false,
      viewDrivers: false,
      viewLogs: true, 
      viewBrands: false,
      viewCities: false,
      viewDashboard: false
    });
  };

  setDrivers = drivers => {
    this.setState({ drivers });
  };

  removeDrivers = driverId => {
    const drivers = this.state.drivers;
    const updatedDrivers = drivers.filter(
      driver => driver.driverId !== parseInt(driverId)
    );
    this.setState({
      drivers: updatedDrivers
    });
  };

  updateVehicles = vehicles => {
    this.setState({
      vehicles
    });
  };

  
  addVehicle = vehicle => {
    const vehicles = this.state.vehicles;
    vehicles.push(vehicle);
    this.setState({ vehicles });
  };

  componentDidMount() {
    fetch(`http://localhost:8080/vehicles`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          vehicles: json
        });
      }); 
    fetch(`http://localhost:8080/cities`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          cities: json
        });
      });
    fetch(`http://localhost:8080/brands`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          brands: json
        });
      });
    fetch(`http://localhost:8080/drivers`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          drivers: json
        });
      });
  }

  render() {
    
    let view;
    let confirmation;

    if (this.state.viewDrivers) {
      if (this.state.drivers !== null) {
        view = this.state.drivers.map(driver => {
          return (
            <div>
              <Driver driver={driver} removeDriver={this.removeDrivers} />
            </div>
          );
        });
      }
    } else if (this.state.viewVehicles) {
      if(this.state.vehicles != null) {
        view = this.state.vehicles.map(vehicle => {
          return (
            <Vehicle
              vehicle={vehicle}
              updateVehicles={this.updateVehicles}
              vehicles={this.state.vehicles}
            />
          );
        });
      }
    
    } else if (this.state.viewBrands) {
      view = this.state.brands.map(brand => {
        return (
          <Brands brand={brand}/>
        )
      })
    } else if (this.state.viewCities) {
      view = this.state.cities.map(city => {
        return (
          <Cities city={city}/>
        )
      })
    }
    else if (this.state.viewLogs) {
      view =   <LogTable />
    }
    else if(this.state.viewDashboard) {
      view = <Dashboard />
    } 
     
    if (this.state.isDriverAdded) {
      confirmation = <div class="alert alert-success">Driver Added!</div>;
    } else if (this.state.isDriverUpdated) {
      confirmation = <div class="alert alert-success">Driver Updated!</div>;
    } else if (this.state.isVechicleAdded) {
      confirmation = <div class="alert alert-success">Vehicle Added!</div>;
    } else if (this.state.isBrandAdded) {
      confirmation = <div class="alert alert-success">Brand Added!</div>;
    } else if (this.state.isCityAdded) {
      confirmation = <div class="alert alert-success">Brand Updated!</div>;
    } 
    return ( 
      <div className="home-div-all"> 
        {confirmation}
        <Navbar expand="lg" variant="light" bg="light">
          <img
            src="https://pregem.com/wp-content/uploads/2017/03/fleet-icon-1.png"
            height="50"
            style={{paddingRight: 10 + 'px'}}
            className="d-inline-block align-top"
            alt="React Bootstrap logo" 
          />
          <Navbar.Brand >Fleet Management System</Navbar.Brand>
          <NavDropdown title="Dashboard" id="basic-nav-dropdown" > 
          <NavDropdown.Item  onClick={this.isDashboard}>
              View Dashboard
            </NavDropdown.Item> 
          </NavDropdown>
          <NavDropdown title="Vehicle" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={this.openModal.bind(this, "add")}>
              Add
            </NavDropdown.Item>
            <NavDropdown.Item onClick={this.openModal.bind(this, "update")}>
              Update
            </NavDropdown.Item>
            <NavDropdown.Item onClick={this.isVehicle}>View</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Driver" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={this.openModalDriver.bind(this, "add")}>
              Add
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={this.openModalDriver.bind(this, "update")}
            >
              Update
            </NavDropdown.Item>
            <NavDropdown.Item onClick={this.isDriver}>View</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Brand" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={this.openModalBrand.bind(this, "add")}>
              Add
            </NavDropdown.Item>  
             <NavDropdown.Item onClick={this.openModalBrand.bind(this, "update")}>
              Update
            </NavDropdown.Item> 
            <NavDropdown.Item onClick={this.isBrand}>
              View
            </NavDropdown.Item> 
          </NavDropdown>
          <NavDropdown title="City" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={this.openModalCity.bind(this, "add")}>
              Add
            </NavDropdown.Item>
            <NavDropdown.Item onClick={this.isCities}>
              View
            </NavDropdown.Item> 
          </NavDropdown>
          <NavDropdown title="Logs" id="basic-nav-dropdown" > 
          <NavDropdown.Item onClick={this.isLogs}>
              View
            </NavDropdown.Item> 
          </NavDropdown> 
        </Navbar>
        <div className="home-div-vehicles">{view}</div>
        <Modal
          visible={this.state.visible}
          width="500"
          height="800"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <CrudProduct
            closeModal={this.closeModal}
            crudoption={this.state.crudoption}
            updateVehicles={this.updateVehicles}
            addVehicle={this.addVehicle}
          />
        </Modal>
        <Modal
          visible={this.state.driverVisible}
          width="500"
          height="800"
          effect="fadeInUp"
          onClickAway={() => this.closeModalDriver()}
        >
          <DriverCard
            closeModal={this.closeModalDriver}
            crudoption={this.state.crudoption}
            setDrivers={this.setDrivers}
          />
        </Modal>
        <Modal
          visible={this.state.brandVisible}
          width="500"
          height="800"
          effect="fadeInUp"
          onClickAway={() => this.closeModalBrand()}
        >
          <Brand
            closeModal={this.closeModalBrand}
            crudoption={this.state.crudoption}
          />
        </Modal>
        <Modal
          visible={this.state.cityVisible}
          width="500"
          height="800"
          effect="fadeInUp"
          onClickAway={() => this.closeModalCity()}
        >
          <City
            closeModal={this.closeModalCity}
            crudoption={this.state.crudoption}
          />
        </Modal>
      </div>
       
    );
  }
}

export default Home;
