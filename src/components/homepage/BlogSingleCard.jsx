import React, { useState } from 'react';
import "../../assets/css/main.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import "../../assets/vendor/glightbox/css/glightbox.min.css";
import "../../assets/vendor/aos/aos.css";
import "../../assets/css/variables.css";
import "../../assets/css/main.css";
// import image1 from "../../assets/img/post-landscape-2.jpg";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';



const BlogSingleCard = ({blogData}) => {
    // const [navigate, setNavigate] = useNavigate();
const navigate = useNavigate();
    const imageSrc = 'data:image/jpeg;base64,' + blogData.image ;
    const navigateToDetail = (id) =>{
        navigate(`/detail/${id}`)
    }
    
 
    
    console.log("blogData",blogData);
    return (
        
        <div class="col-lg-8" onClick={() => navigate(`/detail/${blogData.id}`)}>
            <div class="row g-5">
        <div class="post-entry-1">
            <img src={imageSrc} alt="title image" class="img-fluid"/>
            <div class="post-meta" ><span class="date">{blogData.category}</span><br></br> <span>{moment(blogData.date).format("DD-MM-YYYY")}</span></div>
            <h2 dangerouslySetInnerHTML={{ __html: blogData.title  }} ></h2>
        </div>
        </div>
        </div>
    

    );
};

export default BlogSingleCard;
