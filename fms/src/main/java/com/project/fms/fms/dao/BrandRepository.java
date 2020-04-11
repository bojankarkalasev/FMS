package com.project.fms.fms.dao;
import com.project.fms.fms.model.Brand;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BrandRepository extends CrudRepository<Brand, Integer> {
    List<Brand> findAll();
    Brand findByBrandId(Integer id);
}
