import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from 'antd';
import { Divider,  Typography } from 'antd';
import RightOutlined from "@ant-design/icons"
const FileList = () => {
    const [files, setFiles] = useState([]);

 
    const data = [
      '',
    ]

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axios.get('http://localhost:8080/files');
                setFiles(response.data);
                console.log("Files", response.data)
            } catch (error) {
                console.error('Error fetching files: ', error);
            }
        };

        fetchFiles();
        
    }, []);

    return (
      files &&
        <div style={{backgroundColor:"beige"}}>
            {/* <h1> Files List</h1>
            <ul>
                {files?.map((file) => (
                    <li key={file.id}>
                        <a href={`http://localhost:8080/files/${file.id}`} target="_blank" rel="noopener noreferrer">
                        <Divider orientation="left"></Divider> */}
    <List 
      header={<div style={{backgroundColor:"burlywood"}}><h1>Files List</h1></div>}
      // footer={<div></div>}
      bordered
      dataSource={files}
      renderItem={(item) => (
        
        <List.Item style={{border:"true"  }}>
          
          <a style={{color:"blueviolet"}} href={`http://localhost:8080/files/${item.id}`} target="_blank" rel="noopener noreferrer">
          <RightOutlined />
          <Typography.Text style={{color:"darkblue"}}>{item.name}</Typography.Text> 
          </a>
        </List.Item>
      )}
    />
    {/* </a> */}
    {/* <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    /> */}
  
                    
                    {/* </li>
                ))}
            </ul> */}
        </div>
    );
};

export default FileList;
