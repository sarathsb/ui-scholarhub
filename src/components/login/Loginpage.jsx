import "./Login.css"
import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Loginpage = () => {

    const navigate = useNavigate();
       
    const [loginfailed, setLoginfailed] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginAction = () => {
        const url = `http://localhost:8080/user/login?userName=${username}&passWord=${password}`;
        axios.get(url)
        .then(res => {
			sessionStorage.setItem("userId",res.data.id)
			sessionStorage.setItem("userRole",res.data.role)
            navigate("/home");
             console.log(res)
         })
        .catch((error) => { 
            setLoginfailed(true);
            console.log(error)
         })

        console.log(username, password);
    }

    return (


<div class="container">
	<div class="screen">
		<div class="screen__content">
		<h1 style={{color:"blue", fontFamily:"fantasy",fontWeight:"italics",marginTop:"74px", marginLeft: "74px"}}>ScholarHub</h1>
			<div class="login">
			
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email"  required value={username} onChange={(event) => setUsername(event.target.value)} />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"  required value={password} onChange={(event) => setPassword(event.target.value)} />
				</div>
				<button class="button login__submit" onClick={loginAction}>
					<span class="button__text"  >Log In Now  </span>
					{/* <input class="button__text" type="submit" value="Login" onClick={loginAction} /> */}
					{/* <i class="button__icon fas fa-chevron-right"></i> */}
				</button>
				<div style={{color: "#ffffff", margin: "-13px",padding: "0px", marginLeft: "81px",marginTop: "50px"}}> Create an account?<Link to="/Signup">Signup</Link></div>
			</div>
			{
                                loginfailed && 
                            <div>
                                <label style={{backgroundColor:"white",color:"red",margin:"50px"}}>Invalid username and password</label>
                            </div>
                            }
					</div>
		
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
);

};

export default Loginpage;