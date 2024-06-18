import React from 'react';
import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/swiper/swiper-bundle.min.css"
import "../../assets/vendor/glightbox/css/glightbox.min.css"
import "../../assets/vendor/aos/aos.css"
import "../../assets/css/variables.css"
import "../../assets/css/main.css"
import { Col, Row, Divider } from 'antd';
import HomePageBlog from './HomePageBlog';
import HomePageQuestions from './HomePageQuestions';

const HomePageBody = () => {
  return (
    <section >
      <div>
      <Row>
        <Col span={15}>
        <div style={{fontFamily:"fantasy",marginLeft:"450px",fontsize:"20px",color:"darkblue"}}>Top Blogs</div>
        </Col>
        <Col span={2}>
        <Divider type="vertical" style={{height:"100%"}}/>
        </Col>
       
        <Col span={7}>
        <div style={{fontFamily:"fantasy",marginLeft:"170px",fontsize:"20px",color:"darkblue"}}>Top Questions</div>
        </Col>
    </Row >
        <Row style={{marginTop: "10px"}}>
        <Col span={17}>
        <HomePageBlog/>
        </Col>
        <Col span={1} style={{backgroundColor:"#DFF8F8"}}>
        <Divider type="vertical" style={{ borderWidth: 1, borderStyle: "dashed", color: 'black', borderColor: 'black' , height:"100%" }}/>
        </Col>
       
        <Col span={6} style={{backgroundColor:"#DFF8F8"}}>
        <HomePageQuestions/>
        </Col>
    </Row>
    </div>
  </section>
  );
};

export default HomePageBody;
