package com.project.fms.fms.controller;

import com.project.fms.fms.dao.LogRepository;
import com.project.fms.fms.model.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class LogController {

    @Autowired
    LogRepository logRepository;

    @RequestMapping("/Logs")
    public List<Log> getLogId()
    {
        return logRepository.findAll();
    }


    @RequestMapping("/Logs/{LogId}")
    public Log getLog(@PathVariable int LogId)
    {
        return logRepository.findByLogId(LogId);
    }


    @RequestMapping(method= RequestMethod.POST, value="/Logs")
    public void addLog(@RequestBody Log Log) {
        logRepository.save(Log);
    }

    @RequestMapping(method= RequestMethod.DELETE, value="/Logs/{LogId}")
    public void deleteLog(@PathVariable int LogId) {

        Log newLog = logRepository.findByLogId(LogId);
        logRepository.delete(newLog);

    }
}
