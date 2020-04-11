package com.project.fms.fms.controller;

import com.project.fms.fms.dao.DriverRepository;
import com.project.fms.fms.model.Driver;
import com.project.fms.fms.model.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class DriverController {

    @Autowired
    DriverRepository driverRepository;

    @RequestMapping("/drivers")
    public List<Driver> getdriverId()
    {
        return driverRepository.findAll();
    }


    @RequestMapping("/drivers/{driverId}")
    public Driver getDriver(@PathVariable int driverId)
    {
        return driverRepository.findByDriverId(driverId);
    }


    @RequestMapping(method= RequestMethod.POST, value="/drivers")
    public void addDriver(@RequestBody Driver Driver) {
        driverRepository.save(Driver);
    }

    @PutMapping("/drivers/{driverId}")
    public void updateDriver(@PathVariable int driverId, @RequestBody Driver Driver ) {

        Driver newDriver = driverRepository.findByDriverId(driverId);
        if(!newDriver.getPosition().isEmpty()) {
            newDriver.setPosition(Driver.getPosition());
            driverRepository.save(newDriver);
        }

    }

    @RequestMapping(method= RequestMethod.DELETE, value="/drivers/{driverId}")
    public void deleteDriver(@PathVariable int driverId) {

        Driver newDriver = driverRepository.findByDriverId(driverId);
        driverRepository.delete(newDriver);

    }

}
