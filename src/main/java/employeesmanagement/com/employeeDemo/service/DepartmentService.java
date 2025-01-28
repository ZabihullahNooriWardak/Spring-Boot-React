package employeesmanagement.com.employeeDemo.service;

import java.util.List;

import employeesmanagement.com.employeeDemo.dto.DepartmentDto;

public interface DepartmentService {
    
    DepartmentDto getDepartment(Long id);
    DepartmentDto updateDepartmentDto(DepartmentDto employeeDto,Long id);
    DepartmentDto createDepartment(DepartmentDto departmentDto);
    List<DepartmentDto>getAllDepartments();
    void  deleteDepartment(Long id);
    
}
