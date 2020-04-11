package com.project.fms.fms.dao;
import com.project.fms.fms.model.City;
import com.project.fms.fms.model.Vehicle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CityRepository extends CrudRepository<City, Integer> {
    List<City> findAll();
    City findByCityId(Integer id);
}
