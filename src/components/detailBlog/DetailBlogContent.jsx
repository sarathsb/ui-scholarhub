import React, { useState } from 'react';
import "../../assets/css/main.css";
// import parser from 'html-react-parser';
import image2 from "../../assets/img/post-landscape-1.jpg";
import { singleB } from '../../utils/dummy-single-blog-data';
import parser from "html-react-parser";
import axios from 'axios';
// import Comment from './components/Posts/Actions/Comment';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { DeleteOutlined  }from "@ant-design/icons";
// import Comment from '../Comments/Comment';
import moment from 'moment';
import {Row , Col } from "antd";
import Comment from '../Posts/Actions/Comment';
import Like from '../Posts/Actions/Like'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';


const DetailBlogContent = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [imageSrc, setImsgeSrc] = useState();

const userId = sessionStorage.getItem("userId");
const userRole = sessionStorage.getItem("userRole");

  const [blogData, setBlogData] = useState();
  const fetchData = async () => {

let authorName = "";
    const response1 = await axios.get(`http://localhost:8080/blogs/${id}`);
    try{
    const response2 = await axios.get(`http://localhost:8080/user/${response1.data.author}`);
    authorName = `${response2.data.firstName} ${response2.data.lastName}`;
    }
    catch(error){
      authorName = "Deleted User"
    }
    const combinedData = {
      ...response1.data,
      authorName: authorName,
      imageSrc: 'data:image/jpeg;base64,' + response1.data?.image
    };

    setBlogData(combinedData);
console.log("BLOGDATA", JSON.stringify(blogData))

    // const response = await axios.get(`http://localhost:8080/blogs/${id}`)
    // console.log("response" + JSON.stringify(response))
    // setBlogData(response.data);
    // console.log("blogData" + JSON.stringify(blogData))
    // // axios.get(`http://localhost:8080/blogs/${id}`).then(response => {
    // //   console.log("response" + response.data)
    // // setBlogData(response.data);
    // // console.log("blogData" + blogData)
    // // })
    // const response2 = await axios.get(`http://localhost:8080/user/${response.data?.author}`);
    //   setAuthorName(response2.data.firstName + " " + response2.data.lastName);
  
    // setImsgeSrc('data:image/jpeg;base64,' + blogData?.image);
    // console.log("blogData image" + imageSrc)
    

  }
  const deleteAction = () => {
    const url =  (`http://localhost:8080/blogs/${id}`)
    axios.delete(url)
    navigate("/blog")
  }



  useEffect(() => {
    console.log("response" + "Inside UseEffect")
    fetchData();
  }, [id]);

  return (
blogData &&
    <main id="main" style={{ marginTop: "0px" }}>

      {
        console.log("Test inside render ",blogData)
      }
      <section className="single-post-content">
        <div className="container2" style={{marginLeft:'20px'}}>
          <div className="row">
            <div style={{ display: "flex", textAlign: "left" }} className="col-md-9 post-content" data-aos="fade-up"></div>
            <div className="single-post">
              <div className="post-meta"><span className="date">{blogData?.category}</span> <span className="mx-1">*</span> {moment(blogData?.date).format("DD-MMMM-YYYY")}<span></span></div>
              <Row>
              <Col span={20} style={{ display: "flex", color: "#060270" }} className="author mb-3 ">{blogData?.authorName}</Col> 
              <Col span={4}  onClick={deleteAction}> {(blogData.author == userId || userRole == 'admin')?<div><DeleteOutlined  style={{ fontSize:"20px" , cursor:"pointer"}}/></div>:""} </Col>
              </Row>
              <h1 className="mb-5">{blogData ? parser(blogData.title) : ""} </h1>
              {/* {console.log("imageSRC"+ imageSrc)} */}
              <img src={blogData?.imageSrc} alt="title image" class="img-fluid" style={{ alignItems: "center" }} />
              {blogData ? parser(blogData?.content) : ""}
            </div><br></br>
            {/* < /> */}
           <Like postId={blogData?.id}/>
            <div> <Comment id={id} /> </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailBlogContent;
