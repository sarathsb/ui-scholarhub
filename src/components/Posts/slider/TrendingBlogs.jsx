import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
// import { dummyBolgData } from '../../../utils/dummy-blog-data';
import axios from 'axios';
import SiderBlog from './SiderBlog';

import "../../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../../assets/css/variables.css";
import "../../../assets/css/main.css";




const TrendingBlogs = () => {
    const [blogData, setBlogData] = useState();
    const fetchData = async ()=> {
        const response = await axios.get('http://localhost:8080/blogs?type=trending')
        setBlogData(response.data);
    }
    useEffect(() =>{
        fetchData();
    },[])


  return (
    <div> 
    {blogData && blogData.map((blog, index) => {
        return(
            <>
            <SiderBlog blog={blog}/>
                </>
            
        )
    })
    }
    </div>
    );
};

export default TrendingBlogs;
