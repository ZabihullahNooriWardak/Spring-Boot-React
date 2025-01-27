package employeesmanagement.com.employeeDemo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import employeesmanagement.com.employeeDemo.entity.Department;
public interface DepartmentRepository extends JpaRepository<Department,Long>{
    
}
