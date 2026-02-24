import { useState } from "react";

function Register() {
    const [fullname, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleOnClick() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "fullName": fullname,
            "username": username,
            "password": password
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:8080/register", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    return <>
        <h1>Register</h1>
        <input type="text" onChange={(e) => { setFullName(e.target.value) }} placeholder="FullName" />
        <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" />
        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        <button onClick={handleOnClick}>Submit</button>
    </>
}

export default Register;