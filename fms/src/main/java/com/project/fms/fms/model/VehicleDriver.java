package com.project.fms.fms.model;

import javax.persistence.*;
import java.io.Serializable;
@Entity @IdClass(VehicleDriver.class)
@Table(name="vehicle_driver", schema="fleet_management")
public class VehicleDriver implements Serializable {
    @EmbeddedId
    @ManyToOne(cascade = CascadeType.ALL)
    private Vehicle vehicle;
    @EmbeddedId
    @ManyToOne(cascade = CascadeType.ALL)
    private Driver driver;

    public VehicleDriver() {
    }

    public VehicleDriver(Vehicle vehicle, Driver driver) {
        this.vehicle = vehicle;
        this.driver = driver;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }
}
