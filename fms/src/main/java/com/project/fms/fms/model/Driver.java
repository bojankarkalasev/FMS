package com.project.fms.fms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.fms.fms.enumeration.Color;
import com.project.fms.fms.enumeration.Fuel;
import com.project.fms.fms.enumeration.Gender;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="driver", schema="fleet_management")
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="driverId")
    private int driverId;
    @Column(name="firstName")
    private String firstName;
    @Column(name="lastName")
    private String lastName;
    @Column(name="gender")
    private Gender gender;
    @Column(name="position")
    private String position;


    @OneToOne
    private Vehicle  driver;

    @JsonIgnore
    @OneToOne(mappedBy="driver",cascade = {CascadeType.PERSIST})
    private Log log;

    public Driver() {
    }

    public int getDriverId() {
        return driverId;
    }

    public void setDriverId(int driverId) {
        this.driverId = driverId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Vehicle getDriver() {
        return driver;
    }

    public void setDriver(Vehicle driver) {
        this.driver = driver;
    }

    public Log getLog() {
        return log;
    }

    public void setLog(Log log) {
        this.log = log;
    }
}
