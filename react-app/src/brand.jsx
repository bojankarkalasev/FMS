import React, { Component } from "react";

class Brand extends Component {
  state = {};

  componentDidMount() {
    fetch(`http://localhost:8080/brands`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        brands: json
      });
    });
  }
  addBrand = e => {
      e.preventDefault();
    const name = e.target.elements.name.value;
    const logo = e.target.elements.logo.value; 

    fetch(`http://localhost:8080/brands`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        logo: logo
      })
    })

    this.props.closeModal();
  }
  updateBrand = e => {
    e.preventDefault(); 

    const logo = e.target.elements.logo.value;  
    const brandId = e.target.elements.brandId.value;  
    const name = e.target.elements.name.value;
    
    fetch(`http://localhost:8080/brands/${brandId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({  
        logo: logo
      })
    }); 
    this.props.closeModal();
  };

  render() {
    let postMethod; 
    let crudUpdate;
    let crudUpdateHidden;
    let brandArray = [];

    if (this.props.crudoption === "add") {
      postMethod = this.addBrand;
      crudUpdateHidden = true; 
      crudUpdate = false;
    }
    if (this.props.crudoption === "update") {
      postMethod = this.updateBrand;
      crudUpdateHidden = false;
      crudUpdate = true;
    } 

    if (this.state.brands != null) {
      brandArray = this.state.brands.map(brand => {
        return (
          <option value={brand.brandId}>{brand.name}</option>
        );
      });
    }

    return (
      <div>
      <div className="crudproduct-div-all">
        <img
          src="https://image.flaticon.com/icons/png/512/180/180758.png"
          width="100"
          height="100"
          className="crudproduct-img-desc"
          alt="React Bootstrap logo"
        />
        <form onSubmit={postMethod}>
          <div class="form-group">
            <br />
            <select
            name="brandId"
            className="form-control"
            placeholder="brandId"
            hidden={crudUpdateHidden} 
          >
            {brandArray}
          </select>
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Name"
              disabled={crudUpdate}
            />
            <input
              type="text"
              class="form-control"
              name="logo"
              placeholder="Logo"
            />
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    );
  }
} 

export default Brand;
