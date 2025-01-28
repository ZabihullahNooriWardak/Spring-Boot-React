package employeesmanagement.com.employeeDemo.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import employeesmanagement.com.employeeDemo.dto.DepartmentDto;
import employeesmanagement.com.employeeDemo.entity.Department;
import employeesmanagement.com.employeeDemo.mapper.DepartmentMapper;
import employeesmanagement.com.employeeDemo.repository.DepartmentRepository;
import employeesmanagement.com.employeeDemo.service.DepartmentService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto getDepartment(Long id) {
        Department department = departmentRepository.findById(id).orElseThrow(() -> new RuntimeException());
        DepartmentDto departmentDto = DepartmentMapper.departmentEntityToDto(department);
        return departmentDto;

    }

    @Override
    public DepartmentDto updateDepartmentDto(DepartmentDto employeeDto, Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateDepartmentDto'");
    }

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department = DepartmentMapper.departmentDtoToEntity(departmentDto);
        departmentRepository.save(department);
        return departmentDto;

    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        List<DepartmentDto> departmentDtos = null;
        for (int i = 0; i < departments.size(); i++) {
            departmentDtos.add(DepartmentMapper.departmentEntityToDto(departments.get(i)));
        }
        return departmentDtos;

    }

    @Override
    public void deleteDepartment(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteDepartment'");
    }

}
