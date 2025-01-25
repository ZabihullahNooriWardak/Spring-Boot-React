package employeesmanagement.com.employeeDemo.mapper;
import employeesmanagement.com.employeeDemo.dto.EmployeeDto;
import employeesmanagement.com.employeeDemo.entity.Employee;

public class EmployeeMapper {
    
    //convert dto to entity 

    public static Employee employeeDtoToEntity(EmployeeDto empolyeeDto){
        return  new Employee(empolyeeDto.getId(),empolyeeDto.getName(),empolyeeDto.getLastName(),empolyeeDto.getEmail());
    }

    // convert entity to dto 
    

    public static EmployeeDto employeeEntityToDto(Employee employee){
        return new EmployeeDto(employee.getId(),employee.getName(),employee.getLastName(),employee.getEmail());
    }
    
}
