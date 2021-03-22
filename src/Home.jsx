import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Post from "./Post";



function Home(props) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [postData, setPostData] = useState(null);
    const [likeCount, setLikeCount] = useState();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const history = useHistory();

    useEffect(()=>{
        getPost();
        const user = localStorage.getItem("user");
        if(!user){
            history.push("/login");
        }
    },[])


    const addPost = (e) => {
        e.preventDefault();
          const options = {
            url: "http://localhost:8080/post/add",
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
            data: {
                title:title,
                content:content,
                likeCount: likeCount,
                userMaster : {
                    userId : user.userId
                }
            },
          };
          axios(options)
            .then((response) => {
                console.log(response.data)
                getPost();
            })
            .catch((err) => {
              console.log(err.headers);
              // alert("something went wrong please try again");
            });
        
      };

      const getPost = () => {
          const options = {
            url: "http://localhost:8080/post/all",
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
          };
          axios(options)
            .then((response) => {
                console.log(response.data)
                setPostData(response.data);
               
                
              
            })
            .catch((err) => {
              console.log(err.headers);
              // alert("something went wrong please try again");
            });
        
      };

    return (
        <div>
            <h1>Welcome {user.fullName}</h1>
            <button>Logout</button>
        <center>
            <label htmlFor="post-title">Title : </label>
            <input type="text" className="post-title" onChange={(e) => setTitle(e.target.value)}/>
            <label htmlFor="post-content"> Content : </label>
            <input type="text" className="post-content" onChange={(e) => setContent(e.target.value)}/>
            <button onClick={(e) => {addPost(e)}}>Post</button>
        </center>
        <center>
            {/* {
                getApiContent ? getApiContent.map((res) => <Post title={res.title} content={res.content} />) : null
            } */}
            { postData ? postData.map((item) => <Post title={item.title} 
                                                      content={item.content} 
                                                      likeCount = {item.likeCount} 
                                                      userFullName = {item.userMaster.fullName}
                                                      />) : <p>no data</p>}
        </center>
        </div>
    );
}

export default Home;