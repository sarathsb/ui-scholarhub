import { Divider } from 'antd';
import React, { useState } from 'react';
// import { dummyQstnsData } from '../../utils/dummy-questions-data';
import axios from 'axios';
import { useEffect } from 'react';
import Question from "./Question";
// import Questions from './Quest

const Questionspage = () => {

    const [questions, setQuestions] = useState();
    const fetchData = async () => {

  
      const response = await axios.get(`http://localhost:8080/questions`)
      console.log("response" + response.data)
      setQuestions(response.data);
      console.log("questions" + questions);
      
    //   setImsgeSrc('data:image/jpeg;base64,' + blogData?.image ); 
    //   console.log("blogData image" + imageSrc)
    }
    useEffect(() => {
      console.log("response" + "Inside UseEffect")
      fetchData();
    },[])

    return (
        <div style={{backgroundColor: "#DFF8F8"}}>
    
        {questions?.map((qstn) => {
            return(
                <Question qstn={qstn}/>
            )
        })}
        </div>
    );
};

export default Questionspage;
