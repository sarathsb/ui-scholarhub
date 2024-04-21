import axios from "axios";
import { ScholarHubHeader } from "../ScholarHubHeader";
import { useState, useEffect } from "react";

const Profile =()=>{

    const [profile, setProfile] = useState();
    
    const Fetchdata = async () => {
  
      const response = await axios.get('http://localhost:8080/user/274393ea-5efd-4781-b046-cab1d1c29976')
      console.log("response" + response.data)
      setProfile(response.data);
      console.log(profile+ profile)
    }
    useEffect(() => {
        console.log("response" + "Inside UseEffect")
        Fetchdata();
      }, []);
  
    

    return(
        <div>
          <ScholarHubHeader/>

        <div style={{marginTop:"110px" , textAlign:"center",fontSize:"30px",fontFamily:"fantasy",color:"black",listStyle:"inside",padding:"200px"}}>
        First Name : {profile?.firstName}<br></br>
            Last Name : {profile?.lastName}<br></br>
            Email-id : {profile?.email}<br></br>
            Phone Number : {profile?.phnNo}<br></br>
        

        </div>
        </div>
    );
}

export default Profile;