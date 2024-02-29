import React, { useState } from 'react'
import './registerPage.css'

export default function RegisterPage(props) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [occupation,setOccupation] = useState("");
    const [institute,setInstitute] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassowrd] = useState("");

   const registerAPI=()=>{
        console.log(name);
        console.log(email);
        console.log(occupation);
        console.log(institute);
        console.log(password);
        console.log(confirmPassword);

        let url = "http://localhost:3001/api/auth/register";
        let data = fetch(url,{
            method:"POST",
            headers:{
                "accept":"application/JSON",
                "Content-type":"application/JSON",
                "Access-Control-Allow-Origin":"*"
            },
            body:{
                "name":name,
                "email":email,
                "password":password,
                "userType":occupation,
                "instituteName":institute,
                "tagline":"hey i am new user"
            }
        });
        
        console.log(data);

    }
    return (
        <div className="bg">
            <div className="main">
                <div className="image"></div>
                <form className="form" action="">
                    <div className="newUser">Welcome! to connect</div>
                    <div className="crendential">
                        <input type="text" className="input name" placeholder="name" value={name} onChange={(event)=>{setName(event.target.value)}} />
                        <input type="text" className="input email" placeholder="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                        <input type="text" className="input Occupation" placeholder="occupation" value={occupation} onChange={(event)=>{setOccupation(event.target.value)}}/>
                        <input type="text" className="input institute" placeholder="institute name" value={institute} onChange={(event)=>{setInstitute(event.target.value)}} />
                        <input type="text" className="input password" placeholder="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} />
                        <input type="text" className="input confirmPassword" placeholder="confirm password" value={confirmPassword} onChange={(event)=>{setConfirmPassowrd(event.target.value)}}/>   
                    </div>
                  <button type="button" onClick={registerAPI} className="input register-button">Register</button>
                    <div className="register">Already have an account.  <a href="/">login</a></div>
                </form>
            </div>
        </div>


    )

}