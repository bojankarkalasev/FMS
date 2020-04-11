package com.project.fms.fms.dao;
import com.project.fms.fms.model.Vehicle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, Integer> {
    List<Vehicle> findAll();
    Vehicle findByVehicleId(Integer id);
}
