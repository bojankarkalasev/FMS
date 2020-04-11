import React, { Component } from "react";
 
class CrudDriver extends Component {
  state = {};
  render() {
    let categoryArray;

    if (this.state.categories != null) {
      categoryArray = this.state.categories.map(category => {
        return <option value={category}>{category}</option>;
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
        <form>
          <div class="form-group">
            <br />
            <input
                type="text"
                class="form-control"
                id="Brand"
                placeholder="Brand"   
                required
              />
            <input
              type="text"
              class="form-control"
              id="Model"
              aria-describedby="emailHelp"
              placeholder="Model"
              required
            />
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="Password"
                placeholder="Password"
                required
              />
              <select
                name="category"
                className="form-control"
                placeholder="Category"
                required
              >
                {category}
              </select>
              <input
                type="text"
                class="form-control"
                id="licenseplate"
                placeholder="License Plate"
                required
              />
              <input
                type="text"
                class="form-control"
                id="VIN"
                placeholder="VIN"
                required
              />
              <input
                type="text"
                class="form-control"
                id="registrationyear"
                placeholder="Registration Year"
                required
              />
              <input
                type="text"
                class="form-control"
                id="productionyear"
                placeholder="Production Year"
                required
              />
              <select
                name="colors"
                className="form-control"
                placeholder="Color"
                required
              >
                {this.state.colors.map(color => {
                  return <option value={color}>{color}</option>;
                })}
              </select>
              {console.log(this.state.colors)}
              <select
                name="fuel"
                className="form-control"
                placeholder="fuel"
                required
              >
                {this.state.fuels.map(fuel => {
                  return <option value={fuel}>{fuel}</option>;
                })}{" "}
              </select>
              <input
                type="text"
                class="form-control"
                id="hp"
                placeholder="HP"
                required
              />
              <input
                type="text"
                class="form-control"
                id="seats"
                placeholder="Seats"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CrudDriver;
