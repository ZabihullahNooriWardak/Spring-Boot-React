import React, { useState } from "react";
import { addnewDepartment } from "../service/departmentService";
import { useNavigate } from "react-router-dom";

export function AddDepartment() {

    const [departname, setDepartmentName] = useState([]);
    const [description, setDesciption] = useState([]);
        const navigator = useNavigate()
    function clickHandler(e) {
        e.preventDefault();
        let obj = { name: departname, description: description };
        addnewDepartment(obj)
        navigator("/departments")

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