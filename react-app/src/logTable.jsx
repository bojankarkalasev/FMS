import React, { Component } from 'react';  
import { Table } from 'reactstrap';


class LogTable extends Component {
    state = { 
        logs: []
     }

    componentDidMount(){
    fetch(`http://localhost:8080/logs`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          logs: json
        });
      });
      
    }

    render() {  
      let logArray;
      
      if (this.state.logs != null) {
        logArray = this.state.logs.map(log => {
          return (    
              <tr>    
                <td>{log.date}</td> 
                <td>VID- {log.vehicle.vehicleId}</td> 
                <td>DID- {log.driver.driverId}</td> 
                <td>{log.cityFrom.name}</td> 
                <td>{log.cityTo.name}</td> 
              </tr>       
          );
        })
      }
        return ( <div>
            <Table striped>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Vehicle</th>
                    <th>Driver</th>
                    <th>City From</th>
                    <th>City To</th>
                  </tr>
                </thead>
                <tbody> 
                    {logArray}
                </tbody>
            </Table>
        </div> );
    }
}
 
export default LogTable;