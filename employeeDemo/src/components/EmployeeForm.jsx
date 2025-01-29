import React, { useEffect, useState } from "react";
import { getOneEmployee, newEmployee, updateEmployee } from "../service/employeeService";
import { useNavigate, useParams } from "react-router-dom";

export function EmployeeForm() {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const navigator = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getOneEmployee(id).then(res => {
                setName(res.data.name);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
            })
        }
    }, [id])
    async function submitHandler(e) {
        e.preventDefault();
        let formValues = { name, lastName, email }
        if (!id) {
            newEmployee(formValues).then((res) => {
                navigator("/employees")
                return res.data;

            });

        } else {
            await updateEmployee(id, formValues);
            navigator("/employees");
        }
    }

    function checkPage() {
        if (id) {
            return <h1>Update Employee</h1>
        } else {
            return <h1>Create Employee</h1>
        }
    }
    return (
        <>

            {checkPage()}
            <form className=" ">
                <div className="form-group d-flex justify-content-center">
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" className="form-control w-50 p-2 " aria-describedby="emailHelp" type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <br></br>
                <div className="form-group d-flex justify-content-center">
                    <label htmlFor="last_name">Last Name</label>
                    <input name="lastName" id="last_name" className="form-control w-50 p-2" type="text" placeholder="Enter your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <br></br>

                <div className="form-group d-flex justify-content-center">
                    <label htmlFor="email">Email</label>
                    <input name="email" className="form-control w-50 p-2 " id="email" type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <br></br>
                <button style={{ margin: "auto " }} className="btn btn-success d-flex  " onClick={(e) => submitHandler(e)}>Submit</button>

            </form>

        </>
    )
}