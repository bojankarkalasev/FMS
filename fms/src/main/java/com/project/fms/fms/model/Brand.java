package com.project.fms.fms.model;

import javax.persistence.*;

@Entity
@Table(name="brand", schema="fleet_management")
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="brandId")
    private int brandId;
    @Column(name="name")
    private String name;
    @Column(name="logo")
    private String logo;

    public Brand() {
    }

    public int getBrandId() {
        return brandId;
    }

    public void setBrandId(int brandId) {
        this.brandId = brandId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }
}
