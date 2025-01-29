import React, { useEffect, useState } from "react";
import { getAllDepartment } from "../service/departmentService";
import { Link } from "react-router-dom";


export function Department() {
    const [department, setDepartment] = useState([]);

    useEffect(() => {
        getAllDepartment().then((res) => {
            console.log(res.data);
            setDepartment(res.data);
        })
    }, [])

    return (<>
        <div>
            <button><Link to="/newDepartment">Add department</Link> </button>
            {department.map(department=>(
              <div key = {department.id}>
                <p>{department.id}</p>
                <p>{department.name}</p>
                <p>{department.description}</p>
                </div>
            ))}
        </div>
    </>)
}