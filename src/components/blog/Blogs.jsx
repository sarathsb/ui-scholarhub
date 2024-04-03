import react from 'react';
import { ScholarHubHeader } from "../ScholarHubHeader";
import { Col, Layout, Row, Divider } from 'antd';
// import HomePageBlog from '../homepage/HomePageBlog';
import BlogSingleCard from '../homepage/BlogSingleCard';
import HomePageBlog from '../homepage/HomePageBlog';
import HomePageBody from '../homepage/HomePageBody';
import Posts from '../Posts/Posts';

const Blogs = (blog) =>{
    

    return(
        <div>
  <ScholarHubHeader />
  <Layout style={{fontFamily:"Stencil Std, fantasy", marginTop: "50px", minHeight: "calc(100vh - 58px)" }}>
  <BlogSingleCard blogData = {blog}/>
   </Layout>
</div>


    );

};

export default Blogs;