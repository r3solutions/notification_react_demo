import axios from 'axios';
import React, { useState , useEffect } from 'react';
import { useHistory } from 'react-router';

function Post(props) {


    // const likePost = (e) => {
    //     e.preventDefault();
    //       const options = {
    //         url: "http://localhost:8080/",
    //         method: "GET",
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type": "application/json;charset=UTF-8",
    //         }
    //       };
    //       axios(options)
    //         .then((response) => {
    //             console.log(response.data)
    //             localStorage.setItem("user",JSON.stringify(response.data))
    //           history.push("/login");
    //         })
    //         .catch((err) => {
    //           console.log(err.headers);
    //           // alert("something went wrong please try again");
    //         });
        
    //   };

    return (
        <div>
            <h2>Created By : {props.userFullName}</h2>
            <h3>Title : {props.title}</h3>
            <p>Content : {props.content}</p>
            <button>Like</button>
            <label htmlFor="">{props.likeCount}</label>
        </div>
    );
}

export default Post;