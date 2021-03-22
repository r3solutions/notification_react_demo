import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { useHistory } from 'react-router';

function Login(props) {
    const [username, setUsername] = useState("");
    const history = useHistory();
    useEffect(()=>{
        const user = localStorage.getItem("user");
        if(user){
            history.push("/home");
        }
    })

    const login = (e) => {
        e.preventDefault();
          const options = {
            url: "http://localhost:8080/login/" + username,
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            }
          };
          axios(options)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem("user",JSON.stringify(response.data))
              history.push("/login");
            })
            .catch((err) => {
              console.log(err.headers);
              // alert("something went wrong please try again");
            });
        
      };
      
    return (
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" className="username" onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={(e) => {
                  login(e);
                }}>Login</button>
        </div>
    );
}

export default Login;