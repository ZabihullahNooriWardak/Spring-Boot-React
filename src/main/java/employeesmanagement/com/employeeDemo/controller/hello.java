package employeesmanagement.com.employeeDemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class hello {
    
    @GetMapping("/hello")
    public String helloo(){
        return "hello";
    }
}
