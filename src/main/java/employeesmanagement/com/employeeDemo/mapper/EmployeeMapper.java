package employeesmanagement.com.employeeDemo.mapper;
import employeesmanagement.com.employeeDemo.dto.EmployeeDto;
import employeesmanagement.com.employeeDemo.entity.Employee;

public class EmployeeMapper {
    
    //convert dto to entity 

    public static Employee employeeDtoToEntity(EmployeeDto empolyeeDto){
        Employee employee = new Employee();
        employee.setName(empolyeeDto.getName());
        employee.setLastName(empolyeeDto.getLastName());
        employee.setEmail(empolyeeDto.getEmail());
        employee.setId(empolyeeDto.getId());
        return employee;
    }

    // convert entity to dto 
    

    public static EmployeeDto employeeEntityToDto(Employee employee){
        EmployeeDto employeeDto = new EmployeeDto();
        employeeDto.setName(employee.getName());
        employeeDto.setEmail(employee.getEmail());
        employeeDto.setId(employee.getId());
        employeeDto.setLastName(employee.getLastName());
        return employeeDto;
    }
    
}
