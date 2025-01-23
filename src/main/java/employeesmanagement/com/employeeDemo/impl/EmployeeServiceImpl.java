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

    @Override
    public EmployeeDto getEmployee(Long id) {
        Employee employee = null;
        try {
            employee = employeeRepository.findById(id).orElseThrow(() -> new Exception());
        } catch (Exception e) {
            System.err.println(e);
        }
        return EmployeeMapper.employeeEntityToDto(employee);
    }

    @Override
    public EmployeeDto updateEmployee(EmployeeDto employeeDto, Long id) {
        Employee employee = null;
        try {
            employee = employeeRepository.findById(id).orElseThrow(() -> new Exception());
        } catch (Exception e) {
            e.printStackTrace();
        }
        employee.setName(employeeDto.getName());
        employee.setEmail(employeeDto.getEmail());
        employee.setLastName(employeeDto.getLastName());
        return EmployeeMapper.employeeEntityToDto(employeeRepository.save(employee));

    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

}
