package employeesmanagement.com.employeeDemo.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import employeesmanagement.com.employeeDemo.dto.EmployeeDto;
import employeesmanagement.com.employeeDemo.entity.Department;
import employeesmanagement.com.employeeDemo.entity.Employee;
import employeesmanagement.com.employeeDemo.mapper.EmployeeMapper;
import employeesmanagement.com.employeeDemo.repository.DepartmentRepository;
import employeesmanagement.com.employeeDemo.repository.EmployeeRepository;
import employeesmanagement.com.employeeDemo.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    DepartmentRepository departmentRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Department department = new Department();
        try {

             department = departmentRepository.findById(employeeDto.getDepartmentId())
                    .orElseThrow(() -> new Exception("not Found"));
        } catch (Exception e) {
            System.err.println(e);
        }

        Employee savedEmployee = EmployeeMapper.employeeDtoToEntity(employeeDto);
        savedEmployee.setDepartment(department);
        Employee employee = employeeRepository.save(savedEmployee);


        return EmployeeMapper.employeeEntityToDto(employee);

    }

    @Override
    public EmployeeDto getEmployee(Long id) {
        Employee employee = new Employee();
        try {
            employee = employeeRepository.findById(id).orElseThrow(() -> new Exception());
        } catch (Exception e) {
            System.err.println(e);
        }
        return EmployeeMapper.employeeEntityToDto(employee);
    }

    @Override
    public EmployeeDto updateEmployee(EmployeeDto employeeDto, Long id) {
        Employee employee = new Employee();
        Department department = new Department();
        try {
            department = departmentRepository.findById(employeeDto.getDepartmentId())
                    .orElseThrow(() -> new Exception("not found"));
            employee = employeeRepository.findById(id).orElseThrow(() -> new Exception());
        } catch (Exception e) {
            e.printStackTrace();
        }
        employee.setName(employeeDto.getName());
        employee.setEmail(employeeDto.getEmail());
        employee.setLastName(employeeDto.getLastName());
        employee.setDepartment(department);
        return EmployeeMapper.employeeEntityToDto(employeeRepository.save(employee));

    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public List<EmployeeDto> getAllEmployee() {
        List<EmployeeDto> newList = new ArrayList<>();

        List<Employee> employees = employeeRepository.findAll();
        for (int i = 0; i < employees.size(); i++) {
            newList.add(EmployeeMapper.employeeEntityToDto(employees.get(i)));
        }
        return newList;
    }

}
