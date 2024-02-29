import React, { useState } from 'react'
import './forgotPasswordPage.css'

export default function ForgotPasswordPage() {
    const[email,setEmail] = useState("");

    const ForgotPasswordAPI=()=>{
        console.log(email);
    }
    return (
        <div className="bg">
            <div className="main">
                <div className="image"></div>
                <form className="form" action="">
                    <div className="newUser">Forgot password</div>
                    <div className="credential">
                        <input className='input email' type="text" placeholder='email' value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                       
                    <button type='button' onClick={ForgotPasswordAPI} className='loginButton sendOTP'>send OTP</button>
                    </div>
                    <div className="register back"> <a href="/">back</a></div>
                </form>
            </div>
        </div>
    )

}
