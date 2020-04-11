package com.project.fms.fms.dao;
import com.project.fms.fms.model.VehicleDriver;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface VehicleDriversRepository extends CrudRepository<VehicleDriver, Integer> {
    List<VehicleDriver> findAll();
}
