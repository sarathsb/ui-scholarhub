import React from 'react';
import { Divider } from 'antd';
import { dummyBolgData } from '../../../utils/dummy-blog-data';

import "../../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../../assets/css/variables.css";
import "../../../assets/css/main.css";




const LatestBlogs = () => {
  return (
    <div> 
    {dummyBolgData.map((blog) => {
        return(
            <>
            <div style={{display:"flex"}} class="post-meta">
        <span class="date">Lifestyle</span> <span class="mx-1">&bull;</span> <span>Jul 5th '22</span></div>
                <h2 style={{display:"flex", textAlign:"left"}} className="mb-2" >{blog.title}</h2>
                <span style={{display:"flex"}} className="author mb-3 ">{blog.author}</span>
                <Divider/>
                </>
            
        )
    })
    }
    </div>
    );
};

export default LatestBlogs;
