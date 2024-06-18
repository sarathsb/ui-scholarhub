import { ScholarHubHeader } from "../ScholarHubHeader";
// import Questions from "./Questions";
import React, { useState } from 'react';
import "../../assets/css/main.css";
// import parser from 'html-react-parser';
// import image2 from "../../assets/img/post-landscape-1.jpg";
// import { singleB } from '../../utils/dummy-single-blog-data';
import parser from "html-react-parser";
import axios from 'axios';
import moment from "moment";
// import Comment from './components/Posts/Actions/Comment';
import { useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
// import Comment from '../Comments/Comment';
// import  Comment  from '../Posts/Actions/Comment';
import Answers from "./Answers";
import {DeleteFilled} from "@ant-design/icons";

const DetailQuestion = () => {
    

        const { id } = useParams();


        const navigate  = useNavigate();

        // const [imageSrc, setImsgeSrc] = useState() ;
        
        
        const [authorName , setAuthorName] = useState(undefined);
        // const { question, author: author, description } =;
        const [questionData, setQuestionData] = useState(undefined);
        const fetchData = async () => {
      
          const response = await axios.get(`http://localhost:8080/questions/${id}`)
          console.log("response question individual" + JSON.stringify(response))
          setQuestionData(response.data);
          try{
          const response2 = await axios.get(`http://localhost:8080/user/${response.data.author}`)
            console.log("response in question detail page for user" + response2.data)
            setAuthorName(response2.data?.firstName + " " +response2.data?.lastName);
          }catch(error){
            setAuthorName("Deleted User")
          }
          
        //   setImsgeSrc('data:image/jpeg;base64,' + blogData?.image ); 
        //   console.log("blogData image" + imageSrc)
        }
      
        const deleteAction = () => {
          axios.delete(`http://localhost:8080/questions/${id}`)
          navigate("/questions")
        }
        
      
        

        // const authordata = async() =>{
        
        // }
    // }
    const authordata = async() =>{
        if(questionData && questionData!=null){
          try{
            const response = await axios.get(`http://localhost:8080/user/${questionData.author}`)
            console.log("response in question detail page for user" + response.data)
            setAuthorName(response.data?.firstName + " " +response.data?.lastName);
        }
      
    catch(error){
        setAuthorName("Deleted User")
      }
    } 
  }
    
    

    useEffect(() => {
        console.log("response" + "Inside UseEffect")
        fetchData();
        // if(questionData && questionData!=null){
        // authordata();
        // }
      }, []);
        return (
            
            <main id="main" style={{ marginTop: "0px" }}>
      
      {
        console.log("Test inside render ")
      }
      {questionData  &&
            <section className="single-post-content">
                <ScholarHubHeader />
              <div className="container" style={{marginTop:"100px"}} >
                <div className="row">
                  <div style={{ display: "flex", textAlign: "left" }} className="col-md-9 post-content" data-aos="fade-up"></div>
                  <div className="single-post">
                    <div  style={{color:"black" , fontSize:"15px"}} className="post-meta"><span className="date">{authorName}</span> <span style={{marginLeft:"50px"}} className="mx-1"></span> <span style={{marginLeft:"350px", textAlign:"end"}}>{moment(questionData?.date).format('MM/DD/YYYY')}</span><span></span></div>
                    <div style={{cursor:"pointer"}} onClick={deleteAction}>{<DeleteFilled style={{marginLeft:"960px" , fontSize:"25px"}}/>}
                    <h1 style={{fontSize:"40px" , fontFamily:"emoji" , textAlign:"center" , marginTop:"20px"}} className="mb-5">{questionData?.question}</h1>
                    {/* {console.log("imageSRC"+ imageSrc)} */}
                     {/* <img src={imageSrc} alt="title image" class="img-fluid" style={{alignItems:"center"}}/> */}
                    <div style={{fontSize:"30px" , fontFamily:"sans-serif"}}>{questionData?parser(questionData.description):""}</div>
                    
                  </div><br></br>
                  <div style={{marginTop:"50px" , backgroundColor:""}}> <Answers id={id}/> </div>
                        </div>
                      </div>
                      </div>
            </section>
}
          </main>
    );
}

export default DetailQuestion;