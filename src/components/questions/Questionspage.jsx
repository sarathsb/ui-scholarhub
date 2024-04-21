import { Divider } from 'antd';
import React from 'react';
import { dummyQstnsData } from '../../utils/dummy-questions-data';

const Questionspage = () => {
    return (
        <div style={{backgroundColor: "#cce3e0"}}>
    
        {dummyQstnsData.map((qstn) => {
            return(
                <div> 
                    <span style={{marginLeft:"18px",padding:"50px",fontSize:"20px"}}>{qstn.Question}</span>
                    <br></br>
                    <span style={{marginLeft:"20px",color:"brown",fontSize:"15px",marginTop:"15px"}}class="author">{qstn.Author}</span>
                    <Divider/>
                </div>
            )
        })}
        </div>
    );
};

export default Questionspage;
