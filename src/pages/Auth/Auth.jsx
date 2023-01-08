import React from 'react'
import './auth.css'
import Logo from '../../img/logoicon.png'

const Auth = () => {
  return (
   <div className="Auth">
    <div className="aLeft">
      <img src={Logo} alt="FaceGeek" />
      <div className="webName">
        <h1>FaceGeek</h1>
        <h6>Social network dedicated to otakus and geeks</h6>
      </div>
    </div>
    <LogIn/>
   </div>
  )
}

function LogIn() {
  return (
    <div className="aRight">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
            
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp(){
  return(
    <div className="aRight">
      <form action="" className='infoForm authForm'>
        <h3>Sign up</h3>

        <div>
          <input type="text" 
            name="firstname" 
            placeholder='First name' 
            className='infoInput'/>
          <input type="text" 
            name="lastname" 
            placeholder='Last name' 
            className='infoInput'/>
        </div>
        <div>
          <input 
            type="text" 
            name="username"
            placeholder='username' 
            className="infoInput" />
        </div>
        <div>
          <input 
            type="password" 
            name="password"
            placeholder='password' 
            className="infoInput" />
          <input 
            type="password" 
            name="confirmpass"
            placeholder='Confirm password' 
            className="infoInput" />
        </div>
        <div>
          <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Auth