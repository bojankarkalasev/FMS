package com.project.fms.fms.dao;
import com.project.fms.fms.model.Log;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LogRepository extends CrudRepository<Log, Integer> {
    List<Log> findAll();
    Log findByLogId(Integer id);
}
