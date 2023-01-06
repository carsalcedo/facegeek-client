import React from 'react'
import './RightSide.css'
import home from '../../img/home.png'
import noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'


const RightSide = () => {
  return (
    <div className="RightSide">
        <div className="navIcons">
            <img src={home} alt="FaceGeek" />
            <UilSetting/>
            <img src={noti} alt="FaceGeek" />
            <img src={comment} alt="FaceGeek" />
        </div>

        <TrendCard/>
        <button className="button r-button">Share</button>
    </div>
  )
}

export default RightSide