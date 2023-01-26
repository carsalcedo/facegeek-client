import React from 'react'
import './auth.css'
import Logo from '../../img/logoicon.png'
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { login, signUp } from '../../actions/AuthAction'

const Auth = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSingUp] = useState(false);
  const [error, setError] = useState(false)
  console.log(loading);

  const [data, setData] = useState({
    firstname: "",
    lastname: "", 
    username: "",
    password: "",
    confirmpass: ""
  });


  const [confirmPass, setConfirmPass] = useState(true)

  const handleChange = (e) =>{
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignUp){
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false)
      
      }else{
        dispatch(login(data))
        
      }
   }


  const resetForm = () =>{
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "", 
      username: "",
      password: "",
      confirmpass: ""
    })
  }



  return (
   <div className="Auth">
    {/*Left side*/}
    <div className="aLeft">
      <img src={Logo} alt="FaceGeek" />
      <div className="webName">
        <h1>FaceGeek</h1>
        <h6>Social network dedicated to otakus and geeks</h6>
      </div>
    </div>

    {/*Right side*/}
    <div className="aRight">
      <form action="" className='infoForm authForm' onSubmit={handleSubmit}>
        <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

        {isSignUp && 
        <div>
            <input type="text" 
              name="firstname" 
              placeholder='First name' 
              className='infoInput'
              onChange={handleChange}
              value={data.firstname}/>
            <input type="text" 
              name="lastname" 
              placeholder='Last name' 
              className='infoInput'
              onChange={handleChange}
              value={data.lastname}/>
        </div>
        }

        <div>
          <input 
            type="text" 
            name="username"
            placeholder='username' 
            className="infoInput" 
            onChange={handleChange}
            value={data.username}/>
        </div>
        <div>
          <input 
            type="password" 
            name="password"
            placeholder='password' 
            className="infoInput"
            onChange={handleChange}
            value={data.password} />

        {isSignUp && 
        (<input 
          type="password" 
          name="confirmpass"
          placeholder='Confirm password' 
          className="infoInput"
          onChange={handleChange}
          value={data.confirmpass} />)
        }  
        </div>
        <span style={{display: confirmPass? "none" : "block", color: 'red', fontSize: '12px', alignSelf: "flex-end", marginRight: "5px"}}>
          * Confirm Password is not same 
        </span>

      {error 
        ? (<span style={{display: "block", color: 'red', fontSize: '12px', alignSelf: "flex-end", marginRight: "5px"}}>
            * username or password is incorrect
          </span>)
     : ("")} 
        

        <div>
          <span style={{fontSize: '12px', cursor: 'pointer'}} 
          onClick ={() => {
            setIsSingUp((prev)=>!prev); 
            resetForm()}}>
              {isSignUp ? "Already have an account. Login!" : "Don´t have an account? Sign Up!"}
          </span>
        </div>

        <button className="button infoButton" type='submit' disabled={loading}>
          {loading? "Loading..." : isSignUp ? "Signup" : "Log In"}
        </button>
      </form>
    </div>

   
   </div>
  )
}


export default Auth