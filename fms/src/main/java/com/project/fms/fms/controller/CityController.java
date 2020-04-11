package com.project.fms.fms.controller;

import com.project.fms.fms.dao.CityRepository;
import com.project.fms.fms.model.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class CityController {

    @Autowired
    CityRepository cityRepository;

    @RequestMapping("/cities")
    public List<City> getCities()
    {
        return cityRepository.findAll();
    }


    @RequestMapping("/cities/{cityId}")
    public City getCity(@PathVariable int cityId)
    {
        return cityRepository.findByCityId(cityId);
    }


    @RequestMapping(method= RequestMethod.POST, value="/cities")
    public void addCity(@RequestBody City city) {
        cityRepository.save(city);
    }

    @PutMapping("/cities/{cityId}")
    public void updateCity(@PathVariable int cityId, @RequestBody City city ) {

        City newCity = cityRepository.findByCityId(cityId);
        newCity.setCityFrom(city.getCityFrom());
        newCity.setCityTo(city.getCityTo());
        newCity.setName(city.getName());
        cityRepository.save(newCity);

    }

    @RequestMapping(method= RequestMethod.DELETE, value="/cities/{cityId}")
    public void deleteCity(@PathVariable int cityId, @RequestBody City city ) {

        City newCity = cityRepository.findByCityId(cityId);
        cityRepository.delete(newCity);

    }
}
