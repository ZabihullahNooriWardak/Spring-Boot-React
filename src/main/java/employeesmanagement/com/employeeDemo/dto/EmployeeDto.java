package employeesmanagement.com.employeeDemo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {
    private long id;
    private String name ;
    private String lastName;
    private String email;
    private Long departmentId;

}
