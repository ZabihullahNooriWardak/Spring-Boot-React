import axios from "axios";

const  BASE_DEPARTMENT_URL = 'http://localhost:8080/api/departments'
export const getAllDepartment = ()=> axios.get(BASE_DEPARTMENT_URL);
export const addnewDepartment = (department)=>axios.post(BASE_DEPARTMENT_URL,department);
export const deleteDepartment = (departmentId)=>axios.delete(BASE_DEPARTMENT_URL+"/"+departmentId);
export const updateDepartment = (departmentId,department)=>axios.put(BASE_DEPARTMENT_URL+"/"+departmentId,department);
export const getOneDepartment = (id)=>axios.get(BASE_DEPARTMENT_URL+"/"+id);