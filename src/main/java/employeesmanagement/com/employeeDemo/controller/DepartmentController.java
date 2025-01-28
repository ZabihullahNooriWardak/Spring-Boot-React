package employeesmanagement.com.employeeDemo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import employeesmanagement.com.employeeDemo.dto.DepartmentDto;
import employeesmanagement.com.employeeDemo.entity.Department;
import employeesmanagement.com.employeeDemo.impl.DepartmentServiceImpl;
import employeesmanagement.com.employeeDemo.mapper.DepartmentMapper;
import lombok.AllArgsConstructor;

import java.net.http.HttpResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/departments")
@CrossOrigin("*")

public class DepartmentController {
    @Autowired
    DepartmentServiceImpl departmentServiceImpl;

    @GetMapping("/{id}")
    public ResponseEntity<DepartmentDto> getDepartment(@PathVariable Long id) {
        DepartmentDto departmentDto = departmentServiceImpl.getDepartment(id);
        return ResponseEntity.ok(departmentDto);
    }

    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto) {
        DepartmentDto departmentDto2 = departmentServiceImpl.createDepartment(departmentDto);

        return new ResponseEntity<>(departmentDto2, HttpStatus.CREATED);
    }

}
