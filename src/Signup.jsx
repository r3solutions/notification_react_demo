import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

function Signup(props) {

const [fullName, setFullName] = useState("");
const [username, setUsername] = useState("");
const history = useHistory();

useEffect(()=>{
    const username = localStorage.getItem("username");
    if(username){
        history.push("/home");
    }
})


    const signUp = (e) => {
        e.preventDefault();
          const options = {
            url: "http://localhost:8080/signup",
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
            data: {
                fullName:fullName,
                username:username
            },
          };
          axios(options)
            .then((response) => {
                console.log(response.data)
              history.push("/login");
            })
            .catch((err) => {
              console.log(err.headers);
              // alert("something went wrong please try again");
            });
        
      };

    return (
        <div>
            <label htmlFor="fullname">Full Name : </label>
            <input type="text" className="fullname" onChange={(e) => setFullName(e.target.value)}/>
            <label htmlFor="username">Username : </label>
            <input type="text" className="username" onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={(e) => {
                  signUp(e);
                }}>Sign up</button>
        </div>
    );
}

export default Signup;