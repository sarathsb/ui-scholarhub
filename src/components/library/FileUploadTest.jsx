import React, { useState } from 'react';
import axios from 'axios';
import './button.css';

const FileUploadTest = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:8080/upload', formData);
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    };

    return (
      <section>
        <div style={{margin:"100px"}}>
          {/* <label for="upload">Upload Notes:  </label> */}
          <input  type="file" id="upload" onChange={handleFileChange} style={{color:"red"}} /></div>
           <div><br></br><button style={{marginTop:"-95px" , marginLeft:"160px"}} className="upload-button" onClick={handleFileUpload}>Upload</button>
        
        </div>
        </section>
    );
};

export default FileUploadTest;
