import React, { useEffect, useState } from "react";
import { addnewDepartment, getOneDepartment, updateDepartment } from "../service/departmentService";
import { useNavigate, useParams } from "react-router-dom";

export function AddDepartment() {

    const [departname, setDepartmentName] = useState([]);
    const [description, setDesciption] = useState([]);
    const { id } = useParams();
    const navigator = useNavigate();
    useEffect(() => {
        if (id) {
            getOneDepartment(id).then(res => {
                setDepartmentName(res.data.name)
                setDesciption(res.data.description)
            })
        } else {
            setDepartmentName("")
            setDesciption("")
        }

    }, [id])
    async function clickHandler(e) {
        e.preventDefault();
        let obj = { name: departname, description: description };
        if (id) {
            await updateDepartment(id, obj);
            navigator('/departments')

        } else {
            await addnewDepartment(obj).then(res => {
                console.log(res.data)
                console.log(res)
            })
            navigator("/departments")
        }

    }
    return (<>
        <p>Adding department Form</p>

        <form>
            <label>name of department</label>
            <input type="text" name="name" value={departname} onChange={(e) => setDepartmentName(e.target.value)}></input>
            <label>Description of department</label>
            <input type="text" name="description" value={description} onChange={(e) => setDesciption(e.target.value)}></input>

            <button type="submit" onClick={(e) => { clickHandler(e) }}>submit</button>


        </form>




    </>)
}