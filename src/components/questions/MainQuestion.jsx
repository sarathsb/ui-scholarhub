
import { Divider } from 'antd';
import React, { useState } from 'react';
// import { dummyQstnsData } from '../../utils/dummy-questions-data';
import axios from 'axios';
import { useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import {Row , Col } from "antd";

const MainQuestion = (qstn) =>{

  const navigate = useNavigate();


    
    const [authorName,setAuthorName] = useState();
    const { id,question, author: author, description ,date } = qstn.qstn;

    const fetchData = async () => {
        console.log("qstn" + JSON.stringify(qstn))
  if(author && author!=null){
    console.log("author" + author)
    try{
        const response = await axios.get(`http://localhost:8080/user/${author}`)
        console.log("response in question page for user" + response.data)
        setAuthorName(response.data?.firstName + " " +response.data?.lastName);
    }catch(error){
      setAuthorName("Deleted User")
    }
  } 
        
  
      //   setImsgeSrc('data:image/jpeg;base64,' + blogData?.image ); 
      //   console.log("blogData image" + imageSrc)
      }
      const change = () => {
        navigate(`/detailquestion/${id}`)
      }
      
      
    
      useEffect(() => {
        console.log("response" + "Inside UseEffect")
        fetchData();
      },[])



    return(
        <div onClick={change}> 

      <Row>
                    <Col span={18} ><div style={{color:"black",fontSize:"15px",marginTop:"15px" , textAlign:"left" , marginLeft:"10px"}}>{authorName}</div> </Col> <Col span={6}style={{marginTop:"15px"}}>{moment(date).format("DD-MMMM")}</Col>
                    </Row>
                    {/* <br></br> */}
                    <Row>
                    <Col span={24}>
                    <div style={{color:"brown",fontSize:"25px",marginTop:"15px" , textAlign:"left" , marginLeft:"10px"}} class="author">{question}</div>
                        </Col> 
                    </Row>
                    
                    <Divider style={{ borderWidth: 1, borderStyle: 'solid', color: 'black', borderColor: 'black' }}/>
                </div>
      
        
    );
}
export default MainQuestion;