package com.project.fms.fms.controller;

import com.project.fms.fms.dao.BrandRepository;
import com.project.fms.fms.dao.DriverRepository;
import com.project.fms.fms.dao.VehicleRepository;
import com.project.fms.fms.model.Brand;
import com.project.fms.fms.model.Driver;
import com.project.fms.fms.model.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class VehicleController {

    @Autowired
    VehicleRepository vehicleRepository;

    @Autowired
    BrandRepository brandRepository;

    @Autowired
    DriverRepository driverRepository;

    @RequestMapping("/vehicles")
    public List<Vehicle> getVehicleId()
    {
        return vehicleRepository.findAll();
    }

    @RequestMapping("/vehicles/{VehicleId}")
    public Vehicle getVehicle(@PathVariable int VehicleId)
    {
        return vehicleRepository.findByVehicleId(VehicleId);
    }


    @RequestMapping(method= RequestMethod.POST, value="/vehicles")
    public void addVehicle(@RequestBody Vehicle vehicle) {
        Brand brand = brandRepository.findByBrandId(vehicle.getBrand().getBrandId());
        vehicle.setBrand(brand);
        vehicleRepository.save(vehicle);
    }

    @RequestMapping(method= RequestMethod.DELETE, value="/vehicles/{VehicleId}")
    public void deleteVehicle(@PathVariable int VehicleId) {
        Vehicle newVehicle = vehicleRepository.findByVehicleId(VehicleId);
        vehicleRepository.delete(newVehicle);

    }

    @RequestMapping(method= RequestMethod.PUT, value="/vehicles/{VehicleId}")
    public void updateVehicle(@PathVariable int VehicleId, @RequestBody  Vehicle vehicle) {
        Vehicle newVehicle = vehicleRepository.findByVehicleId(VehicleId);
        if(vehicle.getColor()!= null) {
            newVehicle.setColor(vehicle.getColor());
        }
        if(vehicle.getSeats() != 0) {
            newVehicle.setSeats(vehicle.getSeats());
        }
        vehicleRepository.save(newVehicle);

    }

    @RequestMapping(method= RequestMethod.POST, value="/vehicles/driver")
    public void assignVehicleToDriver(@RequestBody Vehicle vehicle) {
        Vehicle nVehicle = vehicleRepository.findByVehicleId(vehicle.getVehicleId());
        Driver driver = driverRepository.findByDriverId(vehicle.getDriver().getDriverId());

        nVehicle.setDriver(driver);
        vehicleRepository.save(nVehicle);

}

}
