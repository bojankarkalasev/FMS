package com.project.fms.fms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.fms.fms.enumeration.Category;
import com.project.fms.fms.enumeration.Color;
import com.project.fms.fms.enumeration.Fuel;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="vehicle", schema="fleet_management")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="vehicleId")
    private int vehicleId;
    @Column(name="model")
    private String model;
    @Column(name="category")
    private Category category;
    @Column(name="licensePlate")
    private String licensePlate;
    @Column(name="vin")
    private String vin;
    @Column(name="yearProduction")
    private int yearProduction;
    @Column(name="yearRegistration")
    private int yearRegistration;
    @Column(name="color")
    private Color color;
    @Column(name="fuel")
    private Fuel fuel;
    @Column(name="hp")
    private int hp;
    @Column(name="seats")
    private int seats;
    @ManyToOne
    @JoinColumn(name="brand")
    private Brand brand;

    @OneToOne
    private Driver driver;

    @JsonIgnore
    @OneToOne(mappedBy="vehicle",cascade = {CascadeType.PERSIST})
    private Log log;

    public Vehicle() {
    }

    public int getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(int vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public Log getLog() {
        return log;
    }

    public void setLog(Log log) {
        this.log = log;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public int getYearProduction() {
        return yearProduction;
    }

    public void setYearProduction(int yearProduction) {
        this.yearProduction = yearProduction;
    }

    public int getYearRegistration() {
        return yearRegistration;
    }

    public void setYearRegistration(int yearRegistration) {
        this.yearRegistration = yearRegistration;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public Fuel getFuel() {
        return fuel;
    }

    public void setFuel(Fuel fuel) {
        this.fuel = fuel;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }
}
