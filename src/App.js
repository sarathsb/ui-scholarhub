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
import DetailBlogPage from './components/detailBlog/DetailBlogPage';
import Questions from './components/questions/Questions';
import PersonalProfile from './components/profile/new/PersonalProfile';
import Admin from './components/admin/Admin';
import Update from './components/userUpdate/Update';
import Library from './components/library/Library';
import Comment from './components/Posts/Actions/Comment';
import  CreateQuestion from './components/questions/CreateQuestion';
import UpdateUser from './components/admin/UpdateUser';
import DetailQuestion from './components/questions/DetailQuestion';
import Answers from './components/questions/Answers';
import UserCreate from './components/admin/UserCreate';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/singlepage" element={<BlogSingleCard />}/> 
          <Route path="/blog" element={<Posts/>} />
          <Route path="/create" element={<CreateBlogPage/>} />
          <Route path="/signup" element={<Signup/>} /> 
          <Route path="/post" element={<Posts />} />
          <Route path="/comment" element={<Comment/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Loginpage />} /> 
          <Route path="/homepage" element={<HomePageBlog />}/>
          <Route path="/detail/:id" element={<DetailBlogPage />}/>
          <Route path="/createquestion" element={<CreateQuestion/>} />
          <Route path="/questions" element={<Questions/>}/>
          <Route path="/profile" element={<PersonalProfile/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/update" element={<Update/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/detailquestion/:id" element={<DetailQuestion/>}/>
          <Route path="/answer" element={<Answers/>}/>
          <Route path="/usercreate" element={< UserCreate />}/>
          <Route path="/adminupdate/:userId" element={<UpdateUser/>}/>
           {/* <Route path="/singlepost" element={<SinglePost />}/> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;

