import React from "react";
// import { FaRegComment } from "react-icons/fa";
// import { Blog } from "../../../../Context/Context";
// import { formatNum } from "../../../../utils/helper";
import { useState , useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import moment from "moment";
import { Input } from "antd";
import { DeleteFilled , SendOutlined} from '@ant-design/icons';
import {Row , Col} from "antd";
import { useNavigate } from "react-router-dom";


const { TextArea } = Input;



const Answers = ({id}) => {

const navigate = useNavigate();   

     

const [answers,setAnswers] = useState();
const [answerAdded,setAnswerAdded] = useState(false);
const [answerRemoved,setAnswerRemoved] = useState(false);
const [answer,setAnswer] = useState();
const author = sessionStorage.getItem("authorName");
const [date,setDate] = useState();
const [questionId,setQuestionId] = useState();

const fetchData = async() => {

    const response = await axios.get(`http://localhost:8080/answer/${id}`)
    setAnswers(response.data);
    console.log("response",response)
}
const userId = sessionStorage.getItem("userId");
const userRole = sessionStorage.getItem("userRole");

useEffect(() => {
  setAnswerAdded(false);
  setAnswerRemoved(false);
    console.log("response" + "Inside UseEffect")
    fetchData();
  },[answerAdded, answerRemoved])
  const handleOnChange =  (e) => {

    console.log("loig",e.target.value)
    setAnswer(e.target.value);
    
    // e.target.value= "";
  }

  const submitAction =  (e) => {
    
    // const commentData = new FormData();
    // commentData.append('comment', comment);
    // commentData.append('blogId', blogId);
    // commentData.append('author', author);
    // commentData.append('date', date);
    
console.log("loig",e.target.value)
    axios.post('http://localhost:8080/answer/answers', 
{
    questionId: id,
    answer: answer,
    author: author
})
setAnswerAdded(true);
setAnswer("");
// window.location.reload();
  }
  
  const deleteAction = (id) => {
    axios.delete(`http://localhost:8080/answer/${id}`).then(res=>{
      console.log(res);
    }).catch((error)=>{
      console.log("Error caught", error)
    })
    setAnswerRemoved(true)
    
  }


  return(
    <div>
        <Card style={{backgroundColor:"bisque"}} title="Answers">
   
    {answers?.map((ans)=>{
        return(
           <section>
            <Card type="inner"  title={ans.author}   extra={<div>{moment(ans.date).format('MM/DD/YYYY')}</div>}>{ ( userRole == 'admin')?<div style={{cursor:"pointer"}} onClick={()=>deleteAction(ans.id)}><DeleteFilled style={{marginLeft:"700px" , fontSize:"25px"}}/> </div>:""}
            {ans.answer}
          </Card>
          
          </section>
            // <section>
            // <div>{cmnt.author}<div style={{textAlign:"right"}}>{cmnt.date}</div></div>
            // <div style={{marginLeft:"10px"}}>{cmnt.comment}</div>
            // </section>
        )
    }
)
    }
    </Card>
    <section>
    <Row>
        <Col span={23}>
    <div><TextArea value={answer} rows={4} onChange={e=>handleOnChange(e)}/></div>
    </Col>
    <Col span={1}>
    <button style={{size:"50px"}} class="button" onClick={e=>submitAction(e)}>
					<span  style={{fontSize:"30px",transform:"revert", marginLeft:"3px",marginTop:"25px"}} class="button__text"  >{<SendOutlined twoToneColor="#52c41a" style={{marginTop:"35px", color:"black"}}  />}</span>
                    </button>
                    </Col>
          
          </Row>
          </section>
    </div>
  );
}

export default Answers;