import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {

    const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your info</h4>
            <UilPen width='2rem' height='1.2rem' cursor='pointer' onClick={()=>setModalOpen(true)}/>
            <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </div>

        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>single</span>
        </div>
        <div className="info">
            <span>
                <b>Live in </b>
            </span>
            <span>Tokyo</span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>Fer-sama´s Yorozuya</span>
        </div>
        <div className="info">
            <span>
                <b>Anime Favourite </b>
            </span>
            <span>Death Note</span>
        </div>
        <div className="info">
            <span>
                <b>Waifu </b>
            </span>
            <span>Erza Scarlet</span>
        </div>

        <button className='button logoutButton'>Logout</button>
    </div>
  )
}

export default InfoCard