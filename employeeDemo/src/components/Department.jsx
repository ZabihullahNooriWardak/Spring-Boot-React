import React, { useEffect, useState } from "react";
import { deleteDepartment, getAllDepartment } from "../service/departmentService";
import { Link, useNavigate, useParams } from "react-router-dom";


export function Department() {
    const [department, setDepartment] = useState([]);

    // const { id } = useParams();
    const navigator = useNavigate()

    useEffect(() => {
fetchAllDepartments()
    }, [])

    async function deleteHandler(id) {

        await deleteDepartment(id)
        fetchAllDepartments()
    }
   function fetchAllDepartments(){
        getAllDepartment().then((res) => {
            console.log(res.data);
            setDepartment(res.data);
        })
    }

    return (<>
        <div>
            <button><Link to="/newDepartment">Add department</Link> </button>
            {department.map(department => (
                <div key={department.id}>
                    <p>{department.id}</p>
                    <p>{department.name}</p>
                    <p>{department.description}</p>
                    <button>update</button>
                    <button onClick={() => deleteHandler(department.id)}>delete</button>
                </div>
            ))}
        </div>
    </>)
}