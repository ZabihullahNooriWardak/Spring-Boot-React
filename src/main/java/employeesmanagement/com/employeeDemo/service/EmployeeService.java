package employeesmanagement.com.employeeDemo.service;

import employeesmanagement.com.employeeDemo.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployee(Long id);
    EmployeeDto updateEmployee(EmployeeDto employeeDto,Long id);
    void deleteEmployee(Long id);
}
