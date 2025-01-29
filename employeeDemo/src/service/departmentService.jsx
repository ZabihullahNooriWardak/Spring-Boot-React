import axios from "axios";

const  BASE_DEPARTMENT_URL = 'http://localhost:8080/api/departments'
export const getAllDepartment = ()=> axios.get(BASE_DEPARTMENT_URL);