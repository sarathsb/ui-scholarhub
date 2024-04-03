import React from 'react';
import { dummyBolgData } from '../../../utils/dummy-blog-data';
import { Divider } from 'antd';

const TrendingBlogs = () => {
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

export default TrendingBlogs;
