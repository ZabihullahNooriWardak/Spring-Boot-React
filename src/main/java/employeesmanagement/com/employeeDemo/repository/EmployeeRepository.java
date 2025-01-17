package employeesmanagement.com.employeeDemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import employeesmanagement.com.employeeDemo.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    
}
