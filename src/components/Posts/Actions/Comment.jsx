import React from "react";
// import { FaRegComment } from "react-icons/fa";
// import { Blog } from "../../../../Context/Context";
// import { formatNum } from "../../../../utils/helper";
import { useState , useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import moment from "moment";
import { Input } from "antd";
import { DeleteOutlined , SendOutlined} from '@ant-design/icons';
import {Row , Col} from "antd";


const { TextArea } = Input;


const Comment = ({id}) => {

   

     

const [comments,setComments] = useState();
const [commentAdded,setCommentAdded] = useState(false);
const [commentRemoved,setCommentRemoved] = useState(false);
const [comment,setComment] = useState();
const author = sessionStorage.getItem("authorName");
const [date,setDate] = useState();
const [blogId,setBlogId] = useState();
const userRole = sessionStorage.getItem("userRole");

const fetchData = async() => {

    const response = await axios.get(`http://localhost:8080/comment/${id}`)
    setComments(response.data);
    console.log("response",response)
}

useEffect(() => {
  setCommentAdded(false);
  setCommentRemoved(false);
    console.log("response" + "Inside UseEffect")
    fetchData();
  },[commentAdded,commentRemoved])
  const handleOnChange =  (e) => {

    console.log("loig",e.target.value)
    setComment(e.target.value);
    
    // e.target.value= "";
  }

  const submitAction = async (e) => {
    
    // const commentData = new FormData();
    // commentData.append('comment', comment);
    // commentData.append('blogId', blogId);
    // commentData.append('author', author);
    // commentData.append('date', date);
    
console.log("loig",e.target.value)
  await  axios.post('http://localhost:8080/comment/comments', 
{
    blogId: id,
    comment: comment,
    author: author
})
setComment("");

setCommentAdded(true);
// window.location.reload();
  }
  const deleteAction = async (id) => {
    await axios.delete(`http://localhost:8080/comment/${id}`).then(res=>{
      console.log(res);
    }).catch((error)=>{
      console.log("Error caught", error)
    })
    setCommentRemoved(true)
    
  }

  


  return(
    <div>
        <Card title="Comments">
   
    {comments?.map((cmnt)=>{
        return(
           <section>
            <Card type="inner"  title={cmnt.author} extra={<div>{moment(cmnt.date).format('MM/DD/YYYY')}</div>}>
            { ( userRole == 'admin')?<div style={{cursor:"pointer"}} onClick={()=>deleteAction(cmnt.id)}><DeleteOutlined  style={{ marginLeft:"100%",fontSize:"25px"}}/> </div>:""}
            {cmnt.comment}
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
    <div><TextArea value={comment} rows={4} onChange={e=>handleOnChange(e)}/></div>
    </Col>
    <Col span={1}>
    <button style={{size:"50px"}} class="button" onClick={e=>submitAction(e)}>
					<span  style={{fontSize:"30px",transform:"revert", marginLeft:"3px",marginTop:"25px"}} class="button__text"  >{<SendOutlined twoToneColor="#52c41a" style={{marginTop:"35px", color:"blue"}}  />}</span>
                    </button>
                    </Col>
          
          </Row>
          </section>
    </div>
  );
}

export default Comment;
