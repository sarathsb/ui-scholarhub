import React, { useState } from "react";
import styled from "styled-components";
import styles from "./signup.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup =() =>{
  const navigate = useNavigate();


  const [firstNameinput,setfirstName]=useState("");
  const [lastNameinput,setlastName]=useState("");
  const [Emailinput,setEmail]=useState("");
  const [PhoneNumberinput,setPhoneNumber]=useState("");
  const [Usernameinput,setUserName]=useState("");
  const [Passwordinput,setPassword]=useState("");
  const [gender,setGender]=useState("");
  const [errorMessage,setErrorMessage]=useState(false);
  // const [,setGender]=useState(undefined)


    const signUpAction = () =>{
      

    console.log("Log before axios call")
    
  
    axios.post ('http://localhost:8080/user/register',
    {
      firstName:firstNameinput,
      lastName:lastNameinput,
      email:Emailinput,
      phnNo:PhoneNumberinput,
      userName:Usernameinput,
      passWord:Passwordinput,
      gender: gender
    })
    .then((response) => {
      console.log(response);
      navigate("/")
    }).catch((error)=>{
      console.log("Error caught", error)
      setErrorMessage(true)
    })


    console.log("Log after axios call")
  }
    


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
    <div className="signUpTitle">Registration</div>
    <div className="signUpContent">
      <form action="#" className="signUpForm">
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input type="text" placeholder="Enter your name" required value={firstNameinput} onChange={(event) => setfirstName(event.target.value)}/>
          </div>
          <div className="input-box" >
            <span className="details">Last Name</span>
            <input type="text" placeholder="Enter your name" required value={lastNameinput} onChange={(event) => setlastName(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required value={Emailinput} onChange={(event) => setEmail(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">phone Number</span>
            <input type="text" placeholder="Enter your number" required value={PhoneNumberinput} onChange={(event) => setPhoneNumber(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your username" required value={Usernameinput} onChange={(event) => setUserName(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required value={Passwordinput} onChange={(event) => setPassword(event.target.value)}/>
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" onChange={(event) =>setGender("Male")}/>
          <input type="radio" name="gender" id="dot-2" onChange={(event) =>setGender("Female")}/>
          <input type="radio" name="gender" id="dot-3" onChange={(event) =>setGender("NA")}/>
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
          <input type="submit" value="Register" onClick={signUpAction} />
        </div>
    </form>
    </div>
    </div>
</body>
// </Container>
    );
};


export default Signup;