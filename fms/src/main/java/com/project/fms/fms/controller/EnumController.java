package com.project.fms.fms.controller;

import com.project.fms.fms.enumeration.Category;
import com.project.fms.fms.enumeration.Color;
import com.project.fms.fms.enumeration.Fuel;
import com.project.fms.fms.enumeration.Gender;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class EnumController {

    @RequestMapping("/colors")
    public String[] getColors()
    {
        Color[] colors = Color.values();
        String[] colorList = new String[colors.length];

        for (int i = 0; i < colors.length; i++) {
            colorList[i] = colors[i].name();
        }

        return colorList;
    }

    @RequestMapping("/categories")
    public String[] getCategory()
    {
        Category[] categories = Category.values();
        String[] categoryList = new String[categories.length];

        for (int i = 0; i < categories.length; i++) {
            categoryList[i] = categories[i].name();
        }

        return categoryList;    }

    @RequestMapping("/fuels")
    public String[] getFuel()
    {
        Fuel[] fuels = Fuel.values();
        String[] fuelList = new String[fuels.length];

        for (int i = 0; i < fuels.length; i++) {
            fuelList[i] = fuels[i].name();
        }

        return fuelList;    }

    @RequestMapping("/genders")
    public String[] getGenders()
    {
        Gender[] genders = Gender.values();
        String[] genderList = new String[genders.length];

        for (int i = 0; i < genders.length; i++) {
            genderList[i] = genders[i].name();
        }

        return genderList;    }

}
