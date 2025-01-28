package employeesmanagement.com.employeeDemo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import employeesmanagement.com.employeeDemo.dto.DepartmentDto;
import employeesmanagement.com.employeeDemo.impl.DepartmentServiceImpl;
import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/departments")
@AllArgsConstructor
public class DepartmentController {
    DepartmentServiceImpl departmentServiceImpl;

    @GetMapping("/id")
    public ResponseEntity<DepartmentDto> getDepartment(@PathVariable Long id) {
        DepartmentDto departmentDto = departmentServiceImpl.getDepartment(id);
        return ResponseEntity.ok(departmentDto);
    }

}
