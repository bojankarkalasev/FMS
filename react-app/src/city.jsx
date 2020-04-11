import React, { Component } from "react";

class City extends Component {
  state = {};

  postMethod = e => {
    e.preventDefault();
    const name = e.target.elements.name.value; 

    fetch(`http://localhost:8080/cities`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name, 
      })
    })

    this.props.closeModal();
  }
  render() {
      
    return (
      <div>
        <div className="crudproduct-div-all">
          <img
            src="https://cdn4.iconfinder.com/data/icons/city-12/500/CITY_ICON_Recovered-07-512.png"
            width="100"
            height="100"
            className="crudproduct-img-desc"
            alt="React Bootstrap logo"
          />
          <form onSubmit={this.postMethod}>
            <div class="form-group">
              <br />
              <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Name"
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

export default City;
