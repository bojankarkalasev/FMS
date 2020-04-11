import React, { Component } from 'react'; 
import "./home.css"
class dashboard extends Component {
    state = {  
        vehicleCount: 0,
        brandCount: 0,
        driverCount: 0,
        cityCount: 0,
    }

    componentDidMount() {
        fetch(`http://localhost:8080/vehicles/count`)
          .then(res => {
              res.json().then(body => {
                this.setState({
                    vehicleCount: body
                })
              })});
              fetch(`http://localhost:8080/cities/count`)
              .then(res => {
                  res.json().then(body => {
                    this.setState({
                        cityCount: body
                    })
                  })}); fetch(`http://localhost:8080/brands/count`)
                  .then(res => {
                      res.json().then(body => {
                        this.setState({
                            brandCount: body
                        })
                      })}); fetch(`http://localhost:8080/drivers/count`)
                      .then(res => {
                          res.json().then(body => {
                            this.setState({
                                driverCount: body
                            })
                          })});
         }

    render() { 
        return ( 
            <div class="card-group"> 
            <div class="card">
              <img src="http://elektra.mk/fms/images/vehicle.png" class="card-img-top" alt="http://elektra.mk/fms/images/vehicle.png" />
              <div class="card-body">
                <center><h1> {this.state.vehicleCount}</h1></center> 
              </div>
            </div>
            <div class="card">
              <img src="http://elektra.mk/fms/images/driver.png" class="card-img-top" alt="http://elektra.mk/fms/images/driver.png" />
              <div class="card-body">
                <center><h1> {this.state.driverCount} </h1></center> 
              </div>
            </div>
            <div class="card">
              <img src="http://elektra.mk/fms/images/brand.png" class="card-img-top" alt="http://elektra.mk/fms/images/brand.png"/>
              <div class="card-body">
                <center><h1> {this.state.brandCount}</h1></center> 
              </div>
            </div><div class="card">
              <img src="http://elektra.mk/fms/images/city.png" class="card-img-top" alt="http://elektra.mk/fms/images/city.png"/>
              <div class="card-body">
                <center><h1> {this.state.cityCount}</h1></center> 
              </div>
            </div>
          </div> );
    }
}
 
export default dashboard;