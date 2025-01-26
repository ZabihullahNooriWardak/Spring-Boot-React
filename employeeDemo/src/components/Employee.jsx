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
                            <td className="btn btn-secondary p-2 m-1" onClick={()=>updateHandler(employee.id)} >Update</td>
                            <td className="btn btn-danger">Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
