import React, { useState } from "react";

export function CreateEmployee() {
    const [Name, setName] = useState("")
    const [LastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    function submitHandler(e) {
        e.preventDefault();
        let formValues = { Name, LastName, email }
        console.log(formValues);
    }

    return (
        <>

            <h1>Create Employee page </h1>
            <form>
                <label>Name</label>
                <input name="name" type="text" placeholder="Enter your Name" value={Name} onChange={(e) => setName(e.target.value)}></input>
                <br></br>
                <label>Last Name</label>
                <input name="lastName" type="text" placeholder="Enter your Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)}></input>
                <br></br>
                <label>Email</label>

                <input name="email" type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br></br>
                <button onClick={(e) => submitHandler(e)}>Submit</button>

            </form>

        </>
    )
}