import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../service/employeeService";

export function Employee() {
   const [listofEmployee,setListofEmployee]=useState([]);
   const fetchEmployees = async () => {
    try {
      const response = await getAllEmployees(); // Await the response from the service
      setListofEmployee(response.data); // Update state with the resolved data
    } catch (error) {
      console.error("Error fetching employees:", error); // Handle errors
    }
  };
   useEffect(()=>{
     fetchEmployees();
   },[])
    return (
        <>
 <h1>All Employee page</h1>
  {
    listofEmployee.map(employee=>(
        <div key={employee.id}>
            <p>{employee.id}</p>
           <p>{employee.name}</p>
           <p>{employee.lastName}</p>
           <p>{employee.email}</p>
        </div>
    ))
  }




        </>

    )
}