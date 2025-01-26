import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../service/employeeService";
import { useNavigate } from "react-router-dom";

export function Employee() {
    const [listofEmployee, setListofEmployee] = useState([]);

  const navigator = useNavigate()

    const fetchEmployees = async () => {
        try {
            const response = await getAllEmployees();
            console.log(response.data);
            setListofEmployee(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    function updateHandler(employeeId){
          navigator(`/updateEmployee/${employeeId}`)
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listofEmployee.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                           <td><button className="btn btn-secondary " onClick={()=>updateHandler(employee.id)} >Update</button></td>
                           <td> <button className="btn btn-danger">Delete </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
