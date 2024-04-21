import DetailBlogPageSider from "../Posts/slider/DetailBlogPageSider";
import { ScholarHubHeader } from "../ScholarHubHeader"
// import HomePageQuestions from "../homepage/HomePageQuestions";
import { Row , Col , Divider} from 'antd';
import Questionspage from "./Questionspage";

const Questions =() =>{

    return(
        <section>

        <div> 
            <ScholarHubHeader/>
        </div>
    
        <div style={{textAlign:"center",backgroundColor:"white"}}>
        <Row style={{marginTop: "10px"}}>
        <Col span={17} style={{marginTop:"40px",padding:"0px"}}>
        <Questionspage/>
        </Col>
        <Col span={1} style={{color:"red",marginTop:"40px"}}>
        <Divider type="vertical" style={{height:"100%"}}/>
        </Col>
       
        <Col span={6} style={{marginTop:"40px",backgroundColor:"lightgray"}}>
        <DetailBlogPageSider/>
        </Col>
    </Row> 
        </div>
        
        </section>
      
        
    );
}
export default Questions;