import React, { useState } from 'react';
import "../../assets/css/main.css";
// import parser from 'html-react-parser';
import image2 from "../../assets/img/post-landscape-1.jpg";
import { singleB } from '../../utils/dummy-single-blog-data';
import parser from "html-react-parser";
import axios from 'axios';
import { useEffect } from 'react';


const DetailBlogContent = () => {

  const [blogData, setBlogData] = useState();
  const fetchData = async () => {

    const response = await axios.get('http://localhost:8080/blogs/5083cef0-4e28-442e-974e-2fb79e3332d6')
    console.log("response" + response.data)
    setBlogData(response.data);
    console.log(blogData + blogData)
  }

  useEffect(() => {
    console.log("response" + "Inside UseEffect")
    fetchData();
  }, []);

  return (

    <main id="main" style={{ marginTop: "0px" }}>
TEst
{
  console.log("Test inside render ")
}
      <section className="single-post-content">
        <div className="container">
          <div className="row">
            <div style={{ display: "flex", textAlign: "left" }} className="col-md-9 post-content" data-aos="fade-up"></div>
            <div className="single-post">
              <div className="post-meta"><span className="date">{blogData?.category}</span> <span className="mx-1">-</span> {blogData?.date}<span></span></div>
              <h1 className="mb-5">{blogData?.title}</h1>
              {blogData?parser(blogData?.content):""}
            </div>
            <div className="comments">
              <h5 className="comment-title py-4">2 Comments</h5>
              <div className="comment d-flex mb-4">
                <div className="flex-shrink-0">
                  <div className="avatar avatar-sm rounded-circle">
                    <img className="avatar-img" src="assets/img/person-5.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-sm-3">
                  <div className="comment-meta d-flex align-items-baseline">
                    <h6 className="me-2">hi</h6>
                    <span className="text-muted">2d</span>
                  </div>
                  <div className="comment-body">

                    {singleB.content}                  </div>

                  <div className="comment-replies bg-light p-3 mt-3 rounded">
                    <h6 className="comment-replies-title mb-4 text-muted text-uppercase">2 replies</h6>

                    <div className="reply d-flex mb-4">
                      <div className="flex-shrink-0">
                        <div className="avatar avatar-sm rounded-circle">
                          <img className="avatar-img" src="assets/img/person-4.jpg" alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-2 ms-sm-3">
                        <div className="reply-meta d-flex align-items-baseline">
                          <h6 className="mb-0 me-2">Brandon Smith</h6>
                          <span className="text-muted">2d</span>
                        </div>
                        <div className="reply-body">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </div>
                      </div>
                    </div>
                    <div className="reply d-flex">
                      <div className="flex-shrink-0">
                        <div className="avatar avatar-sm rounded-circle">
                          <img className="avatar-img" src="assets/img/person-3.jpg" alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-2 ms-sm-3">
                        <div className="reply-meta d-flex align-items-baseline">
                          <h6 className="mb-0 me-2">James Parsons</h6>
                          <span className="text-muted">1d</span>
                        </div>
                        <div className="reply-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore sed eos sapiente, praesentium.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment d-flex">
                <div className="flex-shrink-0">
                  <div className="avatar avatar-sm rounded-circle">
                    <img className="avatar-img" src="../../assets/img/person-2.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="flex-shrink-1 ms-2 ms-sm-3">
                  <div className="comment-meta d-flex">
                    <h6 className="me-2">Santiago Roberts</h6>
                    <span className="text-muted">4d</span>
                  </div>
                  <div className="comment-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum in corrupti dolorum, quas delectus nobis porro accusantium molestias sequi.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailBlogContent;
