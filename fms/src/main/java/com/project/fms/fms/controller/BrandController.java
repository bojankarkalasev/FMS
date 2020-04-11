package com.project.fms.fms.controller;

import com.project.fms.fms.dao.BrandRepository;
import com.project.fms.fms.model.Brand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BrandController {

    @Autowired
    BrandRepository brandRepository;

    @RequestMapping("/brands")
    public List<Brand> getBrands()
    {
        return brandRepository.findAll();
    }

    @RequestMapping("/brands/{brandId}")
    public Brand getBrand(@PathVariable int brandId)
    {
        return brandRepository.findByBrandId(brandId);
    }

    @RequestMapping(method= RequestMethod.POST, value="/brands")
    public void addBrand(@RequestBody Brand brand) {
        brandRepository.save(brand);
    }

    @PutMapping("/brands/{brandId}")
    public void updateBrand(@PathVariable int brandId, @RequestBody Brand brand ) {
        Brand newBrand = brandRepository.findByBrandId(brandId);
        newBrand.setBrandId(brand.getBrandId());
        newBrand.setLogo(brand.getLogo());
        newBrand.setName(brand.getName());
        brandRepository.save(newBrand);

    }

    @RequestMapping(method= RequestMethod.DELETE, value="/brands/{brandId}")
    public void deleteBrand(@PathVariable int brandId, @RequestBody Brand brand ) {

        Brand newBrand = brandRepository.findByBrandId(brandId);
        brandRepository.delete(newBrand);

    }
}
