import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/swiper/swiper-bundle.min.css"
import "../../assets/vendor/glightbox/css/glightbox.min.css"
import "../../assets/vendor/aos/aos.css"
import "../../assets/css/variables.css"
import "../../assets/css/main.css"

const ScholarHubHeader = () => {
  return (
    <>
  
    <header style={{backgroundColor:"#94e4e1"}} id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
    
        <img src="assets/img/logo.png" alt=""/>
        <h1 style={{fontFamily:"impact,Times,Serif", fontSize:"50px",color:"black",fontWeight:"10px"}}>ScholarHub</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
        <li><Link to="/home">Home</Link></li>
          <li><Link to="/blog">Blogs</Link></li>
          <li><Link to="/questions">Queries</Link></li>
          <li><Link to="/profile">My Account</Link></li>
          <li><Link to="/admin">Admin Area</Link></li>
          
          <li><a href="about.html">Library</a></li>
        </ul>
      </nav>

      <div class="position-relative">
        <a href="https://www.facebook.com" class="mx-2" target='_blank'><span class="bi-facebook"></span></a>
        <a href="https://www.twitter.com" class="mx-2" target='_blank'><span class="bi-twitter"></span></a>
        <a href="https://www.instagram.com" class="mx-2" target='_blank'><span class="bi-instagram"></span></a>

        <a href="#" class="mx-2 js-search-open"><span class="bi-search"></span></a>
        <i class="bi bi-list mobile-nav-toggle"></i>

   
        <div class="search-form-wrap js-search-form-wrap">
          <form action="search-result.html" class="search-form">
            <span class="icon bi-search"></span>
            <input type="text" placeholder="Search" class="form-control"/>
            <button class="btn js-search-close"><span class="bi-x"></span></button>
          </form>
        </div>

      </div>

    </div>

  </header>
  </>
  );
};

export default ScholarHubHeader;