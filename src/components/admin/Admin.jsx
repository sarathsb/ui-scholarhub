import { useState ,useEffect} from "react"
import { ScholarHubHeader } from "../ScholarHubHeader"
import axios from "axios";
import {Table , Space, Button, Row, Col, ConfigProvider} from "antd";
import "../admin/CustomAdmin.css";
import { UserAddOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
const { Column, ColumnGroup } = Table;

const Admin = ()=> {
  const [userUpdated, setUserUpdated] = useState(false);
    const navigate = useNavigate();

    const deleteAction = (user) =>{
        axios.delete('http://localhost:8080/user/' + user.id)
        setUserUpdated(true);
        // window.location.reload()
    }

    // const navigation = (userId) => {
    //     navigate(`/adminupdate/${userId}`)

    // }

    const createuser = () => {
      navigate("/usercreate")
    }

    const editAction = (user) => {
      console.log("User Updaste", user)
      user.id &&  navigate(`/adminupdate/${user.id}`)
    }

    // const users=sessionStorage.getItem(user)
    const [user,setUsers] = useState("");
     

    const Fetchdata = async () => {
      setUserUpdated(false);
        const response = await axios.get('http://localhost:8080/user')
        console.log("response" + response.data)
        setUsers(response.data);
        console.log(user + user)
    }
    useEffect(() => {
        Fetchdata()
    },[userUpdated]);
    

  return( 
    <div style={{height: "100%", paddingBottom: "100px"}}>
        
        <ScholarHubHeader/>
        <div style={{marginTop:"130px"}}></div>
        <div style={{marginTop:"50px", height:"100%"}}>
        {}

        <div>
          <Row>
            <Col span={23}>
            </Col>
            <Col span={1}>
            <UserAddOutlined onClick={createuser}   style={{ fontSize: '40px', marginLeft:'5px', color:"#060270"}}/>
            </Col>
        
        </Row>
      {/* <Button  type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button> */}

<ConfigProvider
    theme={{
      components: {
        Table: {
          borderColor: '#C6C6C6',
        },
      },
    }}
  >

        <Table bordered={true} dataSource={user} style={{borderColor:"black", height: "1024px" , backgroundColor:""}}>
      <ColumnGroup  title="Users"   >
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Gender" dataIndex="gender" key="gender" />
    <Column title="email" dataIndex="email" key="email" />
    
     <Column
      title=""
      dataIndex= ""
      key=""
      onCellClick={(record)=> editAction(record)}
      render={(_s, record) => (
        <Space size="middle">
          <div onClick={e=>editAction(record)}><button style={{color:"blue"}} >Edit</button></div>
          
        </Space>
      )}                         
    /> 
    <Column 
      title=""
      dataIndex= ""
      key=""
      onCellClick={(record)=> deleteAction(record)}
      render={(_s, record) => (
        <Space size="middle">
          <div onClick={e=>deleteAction(record)}><button style={{color:"blue"}}>Delete</button></div>
          
        </Space>
      )}                         
    /> 
  </Table>
  </ConfigProvider>
  </div>
    </div>
    </div>
);

};
export default Admin;