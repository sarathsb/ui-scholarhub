import Editor from "react-medium-editor";
import { ScholarHubHeader } from "../ScholarHubHeader";
import  axios  from "axios";
import { useNavigate} from "react-router-dom";
import { useState } from "react";

const CreateQuestion = () => {

    const navigate = useNavigate();

    const [question,setQuestion]=useState("");
    const [description,setDescription]=useState("");
    const [author,setAuthor]=useState(sessionStorage.getItem("userId"));
  
    const handleSubmitStories =  () => {
      
      // image
    //   console.log(image)
      
      const questionData = new FormData();
      questionData.append('question', question);
      questionData.append('description', description);
  
      axios.post('http://localhost:8080/questions/addquestion', {question:question,
       description:description,
    author:author})
      
      .then((res)=> {
         console.log(res)
     })
    .catch((error) => { 
        // setLoginfailed(true);
        console.log(error)
     });
     console.log(questionData)
     navigate("/questions")
    }

    return(
        <section style={{backgroundColor:"white"}}>
         <div>
        <ScholarHubHeader/>
        </div>
         <div style={{backgroundColor:"white", marginTop:"350px", padding:"130px"}}>
            
      <div style={{marginTop:"px"}}className="pub-button">
        <button style={{marginTop:"-250px"}}onClick={handleSubmitStories}>Publish </button>
      </div>

      <div
        style={{
          margin: "10px 0",
          textAlign: "center",
        }}
      >
        <h2 style={{marginTop:"-20px"}}>Question</h2>
      </div>
    <Editor
        tag="pre"
        text={question}
        onChange={(text, medium) => {
          setQuestion(text);
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
            text: "Write  your question.",
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
        <h2>Description</h2>
      </div>
    <Editor
        tag="pre"
        text={description}
        onChange={(text, medium) => {
          setDescription(text);
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
      </div>
      </section>
    );
};

export default CreateQuestion;