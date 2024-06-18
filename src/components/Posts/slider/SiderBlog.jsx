import React, { useEffect, useState } from 'react';

import parser from "html-react-parser";
import { Divider } from 'antd';
import axios from 'axios';
import moment from 'moment';
// import PostsCard from '../PostsCard';

const SiderBlog = (blog) => {

    const [authorName, setAuthorName] = useState();
    const fetchData = async () =>{
        console.log("Inside sider blog ",JSON.stringify(blog));
        // if(blog && blog.author){
            try{
        const response = await axios.get('http://localhost:8080/user/'+blog.blog.author)
        let data = response.data.firstName + " " + response.data.lastName;
        console.log("authorName", data)
        setAuthorName(data);
            }
            catch(error){
                setAuthorName("Deleted User");
            }
    // }
    }
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <>
            <div style={{display:"flex" , marginLeft:""}} class="post-meta">
               
        <span class="date">{authorName}</span> <span class="mx-1">&bull;</span> <span>{moment(blog.blog.date).format("DD-MMMM")}</span></div>
                <h2 style={{display:"flex", textAlign:"left"}} className="mb-2" >{parser(blog.blog.title)}</h2>
                <span style={{display:"flex"}} className="author mb-3 ">{blog.blog.category}</span>
                <Divider/>
                </>
            
        )
   
};

export default SiderBlog;
