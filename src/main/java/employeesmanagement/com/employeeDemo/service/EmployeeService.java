package employeesmanagement.com.employeeDemo.service;

import java.util.List;

import employeesmanagement.com.employeeDemo.dto.EmployeeDto;

public interface EmployeeService {
    List<EmployeeDto> getAllEmployee();
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployee(Long id);
    EmployeeDto updateEmployee(EmployeeDto employeeDto,Long id);
    void deleteEmployee(Long id);
}
