import React, { useState } from 'react';
import BlogSingleCard from './BlogSingleCard';
import { Col, Layout, Row, Divider } from 'antd';
import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/swiper/swiper-bundle.min.css"
import "../../assets/vendor/glightbox/css/glightbox.min.css"
import "../../assets/vendor/aos/aos.css"
import "../../assets/css/variables.css"
import "../../assets/css/main.css"
import { useEffect } from 'react';
import axios from 'axios';
import { dummyBolgData } from '../../utils/dummy-blog-data';


const HomePageBlog = () => {
  const [postData, setPostData] = useState();
  // const [fisrtRow, setFirstRow] = useState();


  const fetchData = async () => {




    const response = await axios.get('http://localhost:8080/blogs')
    console.log("response" + response.data)
    setPostData(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);



  // const firstRow = postData.slice(0,3);
  // const secondRow = postData.slice(3,6);
  // const thirdRow = postData.slice(6,9);



  return (


    <Layout>
      <Row>

      </Row>
      <Row>
        {postData?.map((blog) => {
          return (

            <Col span={8} push={1}>
              <BlogSingleCard blogData={blog} />
            </Col>

          )

        })

        }
      </Row>
    </Layout>
  );
};

export default HomePageBlog;
