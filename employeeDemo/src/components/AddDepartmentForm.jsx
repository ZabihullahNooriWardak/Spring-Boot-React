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

    function selectName() {
        if (id) {
            return <p>update department Form</p>
        } else {
            return <p>Adding department Form</p>
        }
    }
    return (<>


        <form style={{margin:"30px"}}>
            <h4>{selectName()}</h4>
            <label style={{ marginRight: "4px" }}> name of department :</label>
            <input className="mb-2" type="text" placeholder="Enter department name" name="name" value={departname} onChange={(e) => setDepartmentName(e.target.value)}></input><br></br>
            <label style={{ marginRight: "4px" }}>Description of department :</label>
            <input type="text" style={{ width: "220px" }} name="description" placeholder="Enter department description" value={description} onChange={(e) => setDesciption(e.target.value)}></input><br></br>

            <button className="btn btn-primary" type="submit" onClick={(e) => { clickHandler(e) }}>submit</button>


        </form>




    </>)
}