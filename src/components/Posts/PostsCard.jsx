import React, { useState } from "react";
import { readTime } from "../../utils/helper";
import { useEffect, } from "react";
import moment from "moment/moment";
// import SavedPost from "../singlepost/Actions/SavedPost";
// import { Blog } from "../../../Context/Context";
// import Actions from "../singlepost/Actions/Actions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Divider } from "antd";


const PostsCard = ({ post }) => {

    const [userData, setUserData] = useState();
  const { title, author: author, content, date: created, id: postId, userId, username, image } = post;
  // const { currentUser } = Blog();


  const fetchUserData=async() => {
  
    
    if(author != null){
        console.log("AUTHOR"+author)
    const response = await axios.get('http://localhost:8080/user/'+ `${author}`)
    console.log("response"+ response.data + "author" + author)
    setUserData(response.data);
    }
    }
    useEffect(()=>{
        fetchUserData();
      },[]);
    
  
  console.log("USERDATA" + userData)
const imageSrc = 'data:image/jpeg;base64,' + image ;

  const navigate = useNavigate();

  return (
    <section>
      <div style={{margin:"10px"}}
        onClick={() => navigate(`/post/${postId}`)}
        className="flex flex-col sm:flex-row gap-4 cursor-pointer">
        <div className="flex-[2.5]">
          <p className="pb-2 font-semibold capitalize">{userData?.firstName}</p>
          <div style={{color:"#743407"}} className="text-xl font-bold line-clamp-2 leading-6 capitalize" dangerouslySetInnerHTML={{ __html: title }}>
             
          </div>
          <div
            className="py-1 text-gray-500 line-clamp-2 leading-5"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        { (   //postImg &&
          <div className="flex-[1]">
            <img style={{height:"200px",width:"200px", marginLeft:"80px", marginTop:"50px"}}
              src={imageSrc}
              alt="postImg"
              className="w-[53rem] h-[8rem] object-cover"
            />
          </div>
        )}
      </div>
      <div style={{margin:"10px"}}  className="flex items-center justify-between w-full md:w-[70%] mt-[2rem] md:mt-0">
        <p className="text-xs text-gray-600">
          {readTime({ __html: content })} min read .
          {moment(created).format("MMM DD")}
        </p>
        <div className="flex items-center gap-3">
          {/* <SavedPost post={post} />
          {currentUser?.uid === userId && (
            <Actions postId={postId} title={title} desc={desc} />
          )} */}
        </div>
      </div>
      <Divider type="horizontal" style={{height:"100%", opacity:"100px",color:"black" ,class:"solid"}}/>
    </section>
  );
};

export default PostsCard;
