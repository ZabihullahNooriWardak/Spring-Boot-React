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
    function fetchAllDepartments() {
        getAllDepartment().then((res) => {
            console.log(res.data);
            setDepartment(res.data);
        })
    }

    function updateHandler(id) {
        navigator(`/updateDepartment/${id}`)
    }

    return (<>
        <button className="btn btn-primary"><Link style={{ color: "white", textDecoration: "none" }} to="/addDepartment">Add department</Link> </button>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {department.map(department => (
                    <tr key={department.id}>
                        <th scope="row">{department.id}</th>
                        <td>{department.name}</td>
                        <td>{department.description}</td>
                        <td><button className="mr-5" onClick={() => updateHandler(department.id)}>update</button>
                            <button onClick={() => deleteHandler(department.id)}>delete</button></td>

                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}
