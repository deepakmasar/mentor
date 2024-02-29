import './loginPage.css'
import React, { Component } from 'react'


export class loginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }


    loginAPI = async () => {
        console.log(this.state.username);
        console.log(this.state.password);

        let url = "http://localhost:3000/api/auth/login";
        let data =  await fetch(url,{
            method:"POST",
            headers:{
                "accept":"application/JSON",
                "Content-type":"application/JSON",
                "Access-Control-Allow-Origin":"no-cors"
            },
            body: JSON.stringify({     
                "email":this.state.username,
                "password":this.state.password,
            })
        });
        console.log(data);

    }




    render() {
        return (
            <div>
                <div className="bg">
                    <div className="main">
                        <div className="image"></div>
                        <form className="form" action="">
                            <div className="newUser">Welcome again!</div>
                            <div className="credential">
                                <input className='input username' type="text" placeholder='username' value={this.state.username} onChange={(event) => { this.setState({ username: event.target.value }) }} />
                                <div className="passwordBox">
                                <input className='input password' type="text" placeholder='password' value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />
                                <button>

                                <i className="fa-solid fa-eye" aria-hidden="true"></i>
                                </button>
                                </div>
                                <div className="forgot">
                                    <div className="fp"><a href="/">forgot password</a></div>
                                </div>
                                <div>
                                
                                </div>
                            </div>
                            <button type='button' className='loginButton' onClick={this.loginAPI} >login</button>
                            <div className="register">Dont!have an account.  <a href="/">register</a></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default loginPage