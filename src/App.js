// import Navbar from './Components/navigation.js';
import LoginPage from './Components/authentication/loginPage/loginPage.js';
import './App.css';
import RegisterPage from './Components/authentication/registerPage/registerPage.js';
import ForgotPasswordPage from './Components/authentication/forgotPasswordPage/forgotPasswordPage.js';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <LoginPage/>
        <RegisterPage/>
        <ForgotPasswordPage/>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <>
//       <LoginPage/>
//       <RegisterPage/>
//       <ForgotPasswordPage/>
//       </>    
//     </div>
//   );
// }
// export default App;
