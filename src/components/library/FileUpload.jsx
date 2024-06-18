// import { useState } from "react";
// import {FileUploader} from "react-drag-drop-files";
import {Upload } from "antd";
import {message} from "antd";
// import {props} from "antd";
import { CloudUploadOutlined } from '@ant-design/icons';
import { useState } from "react";
import axios from "axios";
// import http from "../http-common";

const FileUpload = () => {

  const uploadAction = () => {
    console.log( "testing" ,notes)

    const fileData = new FormData();
    fileData.append('file',notes); 

     axios.post('http://localhost:8080/upload',fileData,{
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }
    )
    //  console.log(notes)
  }

  const [notes,setNotes] = useState("");
  const [fileList, setFileList] = useState([]);


  const { Dragger } = Upload;

  const props = {
    name: 'file',
    multiple: false, // Allow only single file upload
    onUploadChange: (info) => {
      if (info.file.status === 'done') {
        setFileList([]); // Clear existing file list before uploading a new one
        message.success(`${info.file.name} uploaded successfully!`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} upload failed.`);
      }
    },
    customRequest: (info ) => {
      return axios.post('http://localhost:8080/api/files', new FormData({ file: info.fileList[0] }), {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    },
  };
  

  return(
    <Upload {...props}>
      <div>
        <p className="ant-upload-drag-icon">
          <i className="fas fa-upload" />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single PDF file only.
        </p>
      </div>
    </Upload>
  // const App = () => (
//   <div>
//     <Dragger 
//     listType="picture"
//     multiple={false}
//     customRequest={dummyRequest}
//     onChange={setFileData}
//     maxCount={1}
//     onRemove={()=>{
// setNotes("");
//     }}
//     >
//       <p className="ant-upload-drag-icon">
//       <CloudUploadOutlined />
//         {/* <InboxOutlined /> */}
//       </p>
//       <p className="ant-upload-text">Click or drag file to this area to upload</p>
//       <p className="ant-upload-hint">
//         Support for a single or bulk upload. Strictly prohibited from uploading company data or other
//         banned files.
//       </p>
//     </Dragger>
//     <div>
//     <button style={{backgroundColor:"grey",marginLeft:"40%",marginTop:"20px",height:"25px",width:"65px"}} onClick={uploadAction}>upload</button>
//     </div>
//     </div>
  );
  
        }



export default FileUpload;