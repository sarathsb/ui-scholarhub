import DetailBlogPageSider from "../Posts/slider/DetailBlogPageSider";
import { ScholarHubHeader } from "../ScholarHubHeader"
// import HomePageQuestions from "../homepage/HomePageQuestions";
import { Row , Col , Divider} from 'antd';
import Questionspage from "./Questionspage";
import {useNavigate} from "react-router-dom";
import HomePageQuestions from "../homepage/HomePageQuestions";
import MainQuestionspage from "./MainQuestionpage";


const Questions =() =>{
    const navigate = useNavigate();

    const action = () =>{
        navigate("/createquestion");
    }

    return(
        <section>

        <div> 
            <ScholarHubHeader/>
        </div>
        <Row style={{ backgroundColor: "white" }}>

          <div style={{color:"black", fontFamily:"cursive",fontSize:"20px", marginTop:"-50px", marginLeft:"0px"}}>
          <button style={{ marginTop: "100px", marginLeft: "1300px", padding: "10px", fontFamily: "fantasy" }} onClick={action}>Write📝</button>
        </div>
      </Row>

    
        <div style={{textAlign:"center",backgroundColor:"white"}}>
        <Row style={{marginTop: "-40px"}}>
        <Col span={23} style={{marginLeft:"28px",marginTop:"40px",padding:"0px"}}>
        <MainQuestionspage/>
        </Col>
        {/* <Col span={1} style={{color:"red",marginTop:"40px"}}>
        <Divider type="vertical" style={{height:"100%"}}/>
        </Col>
       
        <Col span={6} style={{marginTop:"40px",backgroundColor:"lightgray"}}>
        <HomePageQuestions/>
        </Col> */}
    </Row> 
        </div>
        
        </section>
      
        
    );
}
export default Questions;