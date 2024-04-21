// import { useState } from "react";
// import {FileUploader} from "react-drag-drop-files";
import {Upload } from "antd";
import {message} from "antd";
// import {props} from "antd";
import { CloudUploadOutlined } from '@ant-design/icons';
import { useState } from "react";
import axios from "axios";

const FileUpload = () => {

  const uploadAction = () => {
    console.log( "testing" ,notes)

    const fileData = new FormData();
    fileData.append('file',notes); 

     axios.post('http://localhost:8080/upload',fileData)
    //  console.log(notes)
  }

  const [notes,setNotes] = useState("");

  const onChangeDragger = (info) => {
    console.log("Test Infor",info)
    const file = info?.fileList?.[0]?.originFileobj;
    

    // if (types?.includes(file?.type)){
      const reader = new FileReader();
      reader.onload = (e) => {
        setNotes(e.target.result);
        console.log(info?.fileList?.[0]?.originFileobj)
        // onXmlcontent(e.target.result);
      };
      reader.readAsText(file);
    // }
      // else setXmlFile(null)
    
  }

 
  const props = {
    // listType:"picture",
    // name:"content",
    onChange: (info) => {
      console.log("info",info);
      const { status } = info?.file;
      console.log("status",status)
    // if (status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    // }
    // if (status === 'done') {
    //   message.success(`${info.file.name} file uploaded successfully.`);
    //   const file = info?.fileList?.[0]?.originFileobj;
    //   console.log("file",file)
    // } else if (status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
      
    },
   
  }

  const { Dragger } = Upload;

  

  return(
    
  // const App = () => (
  <div>
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
      <CloudUploadOutlined />
        {/* <InboxOutlined /> */}
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
        banned files.
      </p>
    </Dragger>
    <div>
    <button style={{backgroundColor:"grey",marginLeft:"40%",marginTop:"20px",height:"25px",width:"65px"}} onClick={uploadAction}>upload</button>
    </div>
    </div>
  );
  
        }



export default FileUpload;