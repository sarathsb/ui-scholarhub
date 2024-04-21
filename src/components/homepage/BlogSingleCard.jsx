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



const BlogSingleCard = ({blogData}) => {
    // const [navigate, setNavigate] = useNavigate();

    const imageSrc = 'data:image/jpeg;base64,' + blogData.image ;
    
 
    
    console.log("blogData",blogData);
    return (
        
        <div class="col-lg-8" >
            <div class="row g-5">
        <div class="post-entry-1">
            <a href="single-post.html" ><img src={imageSrc} alt="title image" class="img-fluid"/></a>
            <div class="post-meta" ><span class="date">{blogData.tag}</span><br></br> <span>{blogData.date}</span></div>
            <h2><a href="single-post.html" dangerouslySetInnerHTML={{ __html: blogData.title  }} ></a></h2>
        </div>
        </div>
        </div>
    

    );
};

export default BlogSingleCard;
