import React, { useState } from "react";
import styled from "styled-components";
// import styles from "./signup.css"
import axios from "axios";
import { useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";


const UpdateUser =() =>{
  const navigate = useNavigate();
  const { userId } = useParams();


  const [firstNameinput,setfirstName]=useState("");
  const [lastNameinput,setlastName]=useState("");
  const [Emailinput,setEmail]=useState("");
  const [PhoneNumberinput,setPhoneNumber]=useState("");
  const [Usernameinput,setUserName]=useState("");
  const [Passwordinput,setPassword]=useState("");
  const [gender,setGender]=useState("");
  const [role,setRole] = useState("");
  const [errorMessage,setErrorMessage]=useState(false);
  // const [,setGender]=useState(undefined)


    const signUpAction = () =>{
      
      

    console.log("Log before axios call")
    
    
    axios.put ('http://localhost:8080/user/' + userId,
    {
      firstName:firstNameinput,
      lastName:lastNameinput,
      email:Emailinput,
      phnNo:PhoneNumberinput,
      userName:Usernameinput,
      passWord:Passwordinput,
      role :role,
      gender: gender,
      
    })
    .then((response) => {
      console.log(response);
      navigate("/admin")
    }).catch((error)=>{
      console.log("Error caught", error)
      setErrorMessage(true)
    })


    console.log("Log after axios call")
  }
    
  const [profile, setProfile] = useState();

        // const userIdData = ;
        const Fetchdata = async () => {
          const response = await axios.get('http://localhost:8080/user/' +userId)
          console.log("response" + response.data)
          setfirstName(response.data.firstName);
          setlastName(response.data.lastName);
          setEmail(response.data.email);
          setPhoneNumber(response.data.phnNo);
          setUserName(response.data.userName);
          setPassword(response.data.passWord);
          setGender(response.data.gender);
          setRole(response.data.role);
          setProfile(response.data);
          console.log(profile + profile)
        }
        useEffect(() => {
            Fetchdata()
        },[]);



    return (
        // <Container>
        
<body className="signUpBody">
  <div className="signUpContainer">
  {
                                errorMessage && 
                            <div>
                                <label style={{backgroundColor:"white",color:"red",margin:"50px"}}>Username Already Taken</label>
                            </div>
                            }
    <div className="signUpTitle">Update</div>
    <div className="signUpContent">
      <form action="#" className="signUpForm">
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type="text" placeholder={profile?.firstName} required value={firstNameinput} onChange={(event) => setfirstName(event.target.value)}/>
          </div>
          <div className="input-box" >
            <span className="details">Last Name</span>
            <input type="text" placeholder={profile?.lastName} required value={lastNameinput} onChange={(event) => setlastName(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder={profile?.email} required value={Emailinput} onChange={(event) => setEmail(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">phone Number</span>
            <input type="text" placeholder={profile?.phnNo} required value={PhoneNumberinput} onChange={(event) => setPhoneNumber(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder={profile?.userName} required value={Usernameinput} onChange={(event) => setUserName(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder={profile?.passWord} required value={Passwordinput} onChange={(event) => setPassword(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Role</span>
            <input type="text" placeholder={profile?.role} required value={role} onChange={(event) => setRole(event.target.value)}/>
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" checked={gender=="Male"} onChange={(event) =>setGender("Male")}/>
          <input type="radio" name="gender" id="dot-2" checked={gender=="Female"} onChange={(event) =>setGender("Female")}/>
          <input type="radio" name="gender" id="dot-3" checked={gender=="NA"} onChange={(event) =>setGender("NA")}/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label className="signUpLabel" for="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label className="signUpLabel" for="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label className="signUpLabel" for="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Update" onClick={signUpAction} />
        </div>
    </form>
    </div>
    </div>
</body>
// </Container>
    );
};


export default UpdateUser;