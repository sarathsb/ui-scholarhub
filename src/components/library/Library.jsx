import ScholarHubHeader from "../ScholarHubHeader/ScholarHubHeader";
import {Row , Col , Divider, Layout} from "antd";
import FileUpload from "./FileUpload";


const Library = () => {

    return(
        <div style={{backgroundColor:"whitesmoke",height:"100%"}}> 
            <ScholarHubHeader/>

            <Layout style={{fontFamily:"Stencil Std, fantasy", marginTop: "65px", minHeight: "calc(100vh - 58px)" }}>
            <div style={{marginTop:"10%", height:"100%"}}>
                            <Row height="100%">
                <Col span={15} style={{height:"100%"}}>
                    hii
                
                </Col>
                <Col span={1}>
                <Divider type="vertical" style={{height:"100%"}}  />
                 </Col>              
                <Col span={6}><FileUpload/></Col>
            </Row>
            </div>
   </Layout>
            {/*  */}
        </div>

    );
    
}

export default Library;