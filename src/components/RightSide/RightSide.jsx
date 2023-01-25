import React, { useState } from 'react'
import './RightSide.css'
import home from '../../img/home.png'
import noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import { Link } from 'react-router-dom'


const RightSide = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="RightSide">
        <div className="navIcons">
            <Link to='../home'>
              <img src={home} alt="FaceGeek" />
            </Link>
            <UilSetting/>
            <img src={noti} alt="FaceGeek" />
            <img src={comment} alt="FaceGeek" />
        </div>

        <TrendCard/>
        <button className="button r-button" onClick={()=>setModalOpen(true)}>Share</button>
        <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default RightSide