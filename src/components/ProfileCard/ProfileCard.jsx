import React from 'react'
import Cover from '../../img/cover3.jpg'
import Profile from '../../img/profile.jpg'
import './ProfileCard.css'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
    //quede en hora 1:56:00
    const {user} = useSelector((state) => state.authReducer.authData)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const ProfilePage = false

  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={user.coverPicture? serverPublic + user.coverPicture : serverPublic + "cover.jpg"} alt="" />
            <img src={Profile} alt="" />
        </div>
        <div className="ProfileName">
            <span>Ferdinand Carrere</span>
            <span>Lord OtakuManiaco</span>
        </div>
        <div className="followStatus">
            <hr/>
            <div>
                <div className="follow">
                    <span>7,000</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>5</span>
                    <span>Followers</span>
                </div>

                {ProfilePage && (
                    <>
                        <div className="vl">

                        </div>
                        <div className="follow">
                            <span>3</span>
                            <span>Posts</span>
                        </div>
                    </>
                )}

            </div>
            <hr />
        </div>

        {ProfilePage ? '' : <span>My Profile</span>}          
        

    </div>
    
  )
}

export default ProfileCard