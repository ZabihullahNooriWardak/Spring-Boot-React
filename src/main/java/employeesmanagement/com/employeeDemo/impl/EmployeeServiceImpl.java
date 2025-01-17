package employeesmanagement.com.employeeDemo.impl;

import org.springframework.stereotype.Service;

import employeesmanagement.com.employeeDemo.dto.EmployeeDto;
import employeesmanagement.com.employeeDemo.entity.Employee;
import employeesmanagement.com.employeeDemo.mapper.EmployeeMapper;
import employeesmanagement.com.employeeDemo.repository.EmployeeRepository;
import employeesmanagement.com.employeeDemo.service.EmployeeService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class EmployeeServiceImpl implements EmployeeService {

    EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee savedEmployee = EmployeeMapper.employeeDtoToEntity(employeeDto);
        Employee employee = employeeRepository.save(savedEmployee);

        return EmployeeMapper.employeeEntityToDto(employee);

    }

}
