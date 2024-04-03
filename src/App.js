import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateBlogPage } from './components/CreateBlog';
import Posts from "./components/Posts/Posts";
import BlogSingleCard from "./components/homepage/BlogSingleCard";
import HomePageBlog from "./components/homepage/HomePageBlog";
 import Loginpage from "./components/login/Loginpage";
import Blogs from './components/blog/Blogs';
import Signup from './components/Signup/Signup';
import HomePage from './components/homepage/HomePage'
// import SinglePost from './components/Posts/SinglePost';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/singlepage" element={<BlogSingleCard />}/> 
          <Route path="/blog" element={<Posts/>} />
          <Route path="/create" element={<CreateBlogPage/>} />
          <Route path="/signup" element={<Signup/>} /> 
          <Route path="/post" element={<Posts />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Loginpage />} /> 
          <Route path="/homepage" element={<HomePageBlog />}/>
          {/* <Route path="/singlepost" element={<SinglePost />}/> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;

