package employeesmanagement.com.employeeDemo.mapper;

import employeesmanagement.com.employeeDemo.dto.DepartmentDto;
import employeesmanagement.com.employeeDemo.entity.Department;

public class DepartmentMapper {

    public static DepartmentDto departmentEntityToDto(Department department) {
        return new DepartmentDto(department.getId(), department.getName(), department.getDescription());
    }

    public static Department departmentDtoToEntity(DepartmentDto departmentDto) {
        return new Department(departmentDto.getId(), departmentDto.getName(), departmentDto.getDescription());
    }
}
