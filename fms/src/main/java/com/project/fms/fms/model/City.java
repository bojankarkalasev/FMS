package com.project.fms.fms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="city", schema="fleet_management")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cityId")
    private int cityId;
    @Column(name="name")
    private String name;

    @JsonIgnore
    @OneToOne(mappedBy="cityFrom",cascade = {CascadeType.PERSIST})
    private Log cityFrom;

    @JsonIgnore
    @OneToOne(mappedBy="cityTo",cascade = {CascadeType.PERSIST})
    private Log cityTo;

    public City() {
    }

    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Log getCityFrom() {
        return cityFrom;
    }

    public void setCityFrom(Log cityFrom) {
        this.cityFrom = cityFrom;
    }

    public Log getCityTo() {
        return cityTo;
    }

    public void setCityTo(Log cityTo) {
        this.cityTo = cityTo;
    }
}
