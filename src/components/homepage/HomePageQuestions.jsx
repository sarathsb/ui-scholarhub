import { Divider } from 'antd';
import React from 'react';
// import { dummyQstnsData } from '../../utils/dummy-questions-data';
import Questionspage from '../questions/Questionspage';

const HomePageQuestions = () => {
    return (
        
        <div style={{backgroundColor: "#DFF8F8"}}>
      
        {/* {dummyQstnsData.map((qstn) => { */}
            {/* return(
                <div>  */}
                    <Questionspage />
                    {/* <span style={{marginLeft:"-30px"}}>{qstn.Question}</span>
                    <br></br>
                    <span style={{marginLeft:"20px",color:"brown"}}class="author">{qstn.Author}</span> */}
                    <Divider/>
                {/* </div>
            ) */}
        {/* })} */}
        </div>
    );
};

export default HomePageQuestions;
