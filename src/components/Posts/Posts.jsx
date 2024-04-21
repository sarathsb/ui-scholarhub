import React, { useEffect, useState } from "react";
// import Loading from "../Loading/Loading";
import PostsCard from "./PostsCard";
import axios from "axios";
import { ScholarHubHeader } from "../ScholarHubHeader";
// import { Blog } from "../../../Context/Context";
import { Row, Col } from "antd";
// import Recommended from "./Recommended";
import DetailBlogPageSider from "./slider/DetailBlogPageSider";
import { Navigate, useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState()
  const createAction = () => {
    navigate("/create")

  }

  const setPost = async () => {

    const response = await axios.get('http://localhost:8080/blogs')
    console.log(response)
    setBlogData(response.data);
  }

  useEffect(() => {
    setPost();
  }, []);

  const { postData, postLoading } = {}
  return (
    // <section className="flex flex-col gap-[2.5rem]">
    <div style={{ backgroundColor: "white" }}>{
      blogData && <div>
        <ScholarHubHeader />
        {/* {blogData[0].title} */}
      </div>
    }
      <Row style={{ backgroundColor: "white" }}>
        <div>
          {/* <div style={{color:"black", fontFamily:"cursive",fontSize:"30px", marginTop:"100px", marginLeft:"0px"}}> */}
          <button style={{ marginTop: "100px", marginLeft: "1300px", padding: "10px", fontFamily: "fantasy" }} onClick={createAction}>Write📝</button>
        </div>
      </Row>


      <Row>
        <Col span={18}>
          <div style={{ color: "black", backgroundColor: "#f6fbfb", marginTop: "0px" }}>

            {
              blogData &&
              blogData?.map((post, i) => <PostsCard post={post} key={i} />)

            }
          </div>
        </Col>
        <Col span={6}>
          <div style={{ backgroundColor: "lightgrey", marginTop: "-15px" }}>

            <DetailBlogPageSider />
          </div>
        </Col>
      </Row></div>)

};


export default Posts;
