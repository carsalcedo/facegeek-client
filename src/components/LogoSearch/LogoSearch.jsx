import React from 'react'
import logo from '../../img/logo.png'
import './LogoSearch.css'
import {UilSearch} from '@iconscout/react-unicons'
//import UilReact from '@iconscout/react-unicons/icons/uil-react'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={logo} alt="FaceGeek" />
        <div className="Search">
            <input type='text' placeholder='#Explore'/>
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch