import axios  from "axios";

const  EMPLOYEE_REST_API_BASE_URL = 'http://localhost:8080/api/employee'

export const getAllEmployees = ()=> axios.get(EMPLOYEE_REST_API_BASE_URL);
export const newEmployee = (employee)=>axios.post(EMPLOYEE_REST_API_BASE_URL,employee)
export const getOneEmployee = (id)=> axios.get(EMPLOYEE_REST_API_BASE_URL+"/"+id);
export const updateEmployee = (id,employee)=>axios.put(EMPLOYEE_REST_API_BASE_URL+"/"+id,employee);
export const deletEmployee = (id)=> axios.delete(EMPLOYEE_REST_API_BASE_URL+"/"+id);