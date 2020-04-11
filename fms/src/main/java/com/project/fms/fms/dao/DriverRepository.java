package com.project.fms.fms.dao;
import com.project.fms.fms.model.Driver;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DriverRepository extends CrudRepository<Driver, Integer> {
    List<Driver> findAll();
    Driver findByDriverId(Integer id);
}
