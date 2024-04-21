import { useState ,useEffect} from "react"
import { ScholarHubHeader } from "../ScholarHubHeader"
import axios from "axios";

const Admin = ()=> {

    // const users=sessionStorage.getItem(user)
    const [user,setUsers] = useState("");
     

    const Fetchdata = async () => {
        const response = await axios.get('http://localhost:8080/user')
        console.log("response" + response.data)
        setUsers(response.data[0]);
        console.log(user + user)
    }
    useEffect(() => {
        Fetchdata()
    },[]);
    

return(

    <div>
        <ScholarHubHeader/>
        <section>
            <div style={{margin:"30px",marginTop:"80px"}}>
                <li>{user?.userName}
               </li>
            </div>
        </section>
    </div>
);

};
export default Admin;