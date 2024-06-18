import React, { useEffect, useState } from "react";
import { LikeTwoTone, HeartTwoTone, HeartOutlined, HeartFilled } from '@ant-design/icons'
import { Button } from 'antd'
import axios from 'axios';


const Like = ({ postId }) => {

    const userId = sessionStorage.getItem("userId");
    
  const [isLiked, setIsLiked] = useState(false);
  const [likeEntry, setLikeEntry] = useState();
  const [likeCount, setLikeCount] = useState();

  const handleLikeClick = async () =>{
    if(isLiked){
        if(likeEntry != null){
            likeEntry.liked = false;
            await axios.post("http://localhost:8080/likes",likeEntry);
            setIsLiked(false);
        }else{

            await axios.post("http://localhost:8080/likes",{
                blogId: postId,
                userId: userId,
                liked: false
            });
            setIsLiked(false); 
        }
        
    }else{
        if(likeEntry != null){
        likeEntry.liked = true;
        await axios.post("http://localhost:8080/likes",likeEntry);
        setIsLiked(true);
    }else{

        await axios.post("http://localhost:8080/likes",{
            blogId: postId,
            userId: userId,
            liked: true
        });
        setIsLiked(true); 
    }
    }
  }

    const fetchData = async () => {
        axios.get(`http://localhost:8080/likes/${postId}/${userId}`).then(res => {
            console.log("response in detail blog content", JSON.stringify(res.data))
              setLikeEntry(res.data.likesEntryRetrieved);
              setLikeCount(res.data.count);
              console.log("likeEntry.liked", likeEntry?.liked)
              console.log("LikeEntry", likeEntry)
              console.log("likeCount", likeCount)
              setIsLiked(likeEntry?.liked);
            })
    }
    useEffect(()=>{
fetchData();
    },[isLiked, likeCount])
  return(
    
        <button className="like-button" onClick={handleLikeClick} style={{marginTop:"20px"}}>
            {
                isLiked?<HeartFilled style={{ color: "red", fontSize:"20px" }} />:<HeartOutlined style={{ color: "red", fontSize:"20px"  }} />
            } 
        
        <span className="likes-count" style={{fontSize:"20px"}}>{likeCount}</span>
      </button>
    
  )
};

export default Like;
