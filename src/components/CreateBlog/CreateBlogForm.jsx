import React from 'react';
import Editor from "react-medium-editor";
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/beagle.css";
import "./css/index.css";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateBlogForm = () => {
  const navigate = useNavigate();

  const [title,setTitle]=useState("");
  const [author,setAuthor]=useState("");
  const [date,setDate]=useState("");
  const [content,setContent]=useState("");
  const [category,setCategory]=useState("");
  const [image,setImage]=useState();

  const handleSubmitStories =  () => {
    
    // image
    console.log(image)
    
    const blogData = new FormData();
    blogData.append('title', title);
    blogData.append('author', author);
    blogData.append('content', content);
    blogData.append('category', category);
    blogData.append('titleImage', image);

    axios.post('http://localhost:8080/blogs/blog', blogData)
    
    .then((res)=> {
       console.log(res)
   })
  .catch((error) => { 
      // setLoginfailed(true);
      console.log(error)
   });
   navigate("/post")
  }


    // const body = {
    //   title: setTitle,
    //   content: setContent,
    // };
    // console.log("Body", body);
  // console.log("Story Submitted Successfully! - Description: ", desc);
  // };
  return (
  
    <div>
      <div className="pub-button">
        <button onClick={handleSubmitStories}>Publish </button>
      </div>

      <div
        style={{
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        <h2>Category</h2>
      </div>
    <Editor
        tag="pre"
        text={category}
        onChange={(text, medium) => {
          setCategory(text);
          // console.log(medium);
        }}
        options={{
          toolbar: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "anchor",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "quote",
              // "unorderedlist",
              // "orderedlist",
              // "subscript",
              // "superscript",
              "outdent",
              "indent",
              "code",
              "image",
            ],
          },
          placeholder: {
            text: "Write  your category.",
          },

          autoLink: true,
          anchor: {
            placeholderText: "Enter reference link",
            // customClassOption: "btn",
            // customClassOptionText: "Refernce link",
          },
          paste: {
            cleanPastedHTML: true,
            cleanAttrs: ["style", "dir"],
            cleanTags: ["label", "meta"],
          },
          anchorPreview: {
            hideDelay: 300,
          },
        }}
      />

        
        
        




      <div
        style={{
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        <h2>Title of the Story</h2>
      </div>
    <Editor
        tag="pre"
        text={title}
        onChange={(text, medium) => {
          setTitle(text);
          // console.log(medium);
        }}
        options={{
          toolbar: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "anchor",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "quote",
              // "unorderedlist",
              // "orderedlist",
              // "subscript",
              // "superscript",
              "outdent",
              "indent",
              "code",
              "image",
            ],
          },
          placeholder: {
            text: "Write  your story.",
          },

          autoLink: true,
          anchor: {
            placeholderText: "Enter reference link",
            // customClassOption: "btn",
            // customClassOptionText: "Refernce link",
          },
          paste: {
            cleanPastedHTML: true,
            cleanAttrs: ["style", "dir"],
            cleanTags: ["label", "meta"],
          },
          anchorPreview: {
            hideDelay: 300,
          },
        }}
      />
      <div
        style={{
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        <h2>Description of story</h2>
      </div>
      <Editor
        tag="div"
        text={content}
        onChange={(text) => setContent(text)}
        options={{
          // extensions: {
          //   embedButton: new EmbedButtonExtension(),
          // },
          toolbar: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "anchor",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "quote",
              "justified",
              "unorderedlist",
              "orderedlist",
              "subscript",
              "superscript",
              "outdent",
              "indent",
              "code",
              "horizontal",
            ],
          },
          placeholder: {
            text: "Write  your story.",
          },

          autoLink: true,
          anchor: {
            placeholderText: "Enter reference link",
            // customClassOption: "btn",
            // customClassOptionText: "Refernce link",
          },
          paste: {
            cleanPastedHTML: true,
            cleanAttrs: ["style", "dir"],
            cleanTags: ["label", "meta"],
          },
          anchorPreview: {
            hideDelay: 300,
          },
        }}
      />

<div
        style={{
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        <h2>Title Image</h2>
      </div>
      <div
     style={{marginLeft:"100px"}}>
      < input type="file" style={{marginLeft:"540px"}} onChange={(event)=>setImage(event.target.files[0] )} />
</div>

      </div>
  );
  };

export default CreateBlogForm;
