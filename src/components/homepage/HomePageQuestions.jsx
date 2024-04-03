import { Divider } from 'antd';
import React from 'react';
import { dummyQstnsData } from '../../utils/dummy-questions-data';

const HomePageQuestions = () => {
    return (
        <div style={{backgroundColor: "#cce3e0"}}>
    
        {dummyQstnsData.map((qstn) => {
            return(
                <div> 
                    <span style={{marginLeft:"18px"}}>{qstn.Question}</span>
                    <br></br>
                    <span style={{marginLeft:"20px",color:"brown"}}class="author">{qstn.Author}</span>
                    <Divider/>
                </div>
            )
        })}
        </div>
    );
};

export default HomePageQuestions;
