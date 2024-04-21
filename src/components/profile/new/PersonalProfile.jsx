import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../new/profiles.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { ScholarHubHeader } from '../../ScholarHubHeader';
import { useNavigate } from "react-router-dom";
 
const PersonalProfile = () => {
const navigate = useNavigate();

  const editAction = () => {
    navigate("/update")
  }

  const [profile, setProfile] = useState();

  // const userIdData = ;
  const Fetchdata = async () => {
    const response = await axios.get('http://localhost:8080/user/' + sessionStorage.getItem("userId"))
    console.log("response" + response.data)
    setProfile(response.data);
    console.log(profile + profile)
  }
  useEffect(() => {
      Fetchdata()
  },[]);





  return (

    <section className="vh-100" style={{ backgroundColor: '#e9f4ea', }}>
      <ScholarHubHeader />
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem', width: "750px", marginLeft: "-200px" }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem',height:"500px" , marginTop:"0px"}}>
                    { <div style={{justifyItems:"center",marginLeft:"11%",backfaceVisibility:"hidden",marginTop:"35%"}}>
                      {(profile?.gender=="Male")?(<MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px',marginLeft:"20%",marginTop:"50%" }} fluid />):(<MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />)}
                     </div>
                    }
                
                  <MDBTypography tag="h5" style={{marginTop:"80px",fontFamily:"fantasy",fontSize:"20px" , color:'darkblue'}}>{profile?.firstName + " " + profile?.lastName}</MDBTypography>

                  {/* <MDBCardText>Web Designer</MDBCardText> */}
                  <button style={{ color: "brown" }} onClick={editAction}>Edit✍️</button>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8" style={{backgroundColor:"#f1d9a9"}}>
                  <MDBCardBody className="p-4" style={{ marginTop:"50px"}}>
                    <MDBTypography tag="h6" style={{fontFamily:"cursive"}}>Personal Details</MDBTypography>
                    <hr className="mt-0 mb-4" />
 
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">First Name</MDBTypography>
                        <MDBCardText className="text-muted">{profile?.firstName}</MDBCardText>
                      </MDBCol>
                    

                    
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Last Name</MDBTypography>
                        <MDBCardText className="text-muted">{profile?.lastName}</MDBCardText>
                      </MDBCol>
                     </MDBRow>
                     <hr className="mt-0 mb-4" />

                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{profile?.email}</MDBCardText>
                      </MDBCol>


                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{profile?.phnNo}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    {/* <MDBTypography tag="h6">Information</MDBTypography> */}
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Gender</MDBTypography>
                        <MDBCardText className="text-muted">{profile?.gender}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Username</MDBTypography>
                        <MDBCardText className="text-muted">{profile?.userName}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default PersonalProfile;
