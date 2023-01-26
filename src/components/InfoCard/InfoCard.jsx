import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import * as UserApi from '../../Api/UserRequest.js'
import { logOut } from '../../actions/AuthAction'

const InfoCard = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()
    const params = useParams()

    const profileUserId = params.id
    const [profileUser, setProfileUser] = useState({})
    const {user} = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchProfileUser = async () => {
            if(profileUserId === user._id){
                setProfileUser(user)
               // console.log(user)
            }else{
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
                //console.log(profileUser)
            }
        }
        fetchProfileUser()
    }, [user]);

    const handleLogOut = () =>{
        dispatch(logOut())
    }


    

  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Profile info</h4>
            {user._id === profileUserId 
            ? (
                <div>
                    <UilPen width='2rem' height='1.2rem' cursor='pointer' onClick={()=>setModalOpen(true)}/>
                    <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} data= {user}/>
                </div>
            ) 
            : ("") }
                
        </div>

        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>{profileUser.relationship}</span>
        </div>
        <div className="info">
            <span>
                <b>Live in </b>
            </span>
            <span>{profileUser.livesin}</span>
        </div>
        <div className="info">
            <span>
                <b>Country </b>
            </span>
            <span>{profileUser.country}</span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>{profileUser.worksAt}</span>
        </div>
        <div className="info">
            <span>
                <b>Anime Favourite </b>
            </span>
            <span>{profileUser.animeFavorito}</span>
        </div>
        <div className="info">
            <span>
                <b>Waifu </b>
            </span>
            <span>{profileUser.waifu}</span>
        </div>

        <button className='button logoutButton' onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default InfoCard