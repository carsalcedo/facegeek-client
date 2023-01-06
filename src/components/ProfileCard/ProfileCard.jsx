import React from 'react'
import Cover from '../../img/cover3.jpg'
import Profile from '../../img/profile.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
        <div className="ProfileName">
            <span>Ferdinand Carrere</span>
            <span>Frontend Developer</span>
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
            </div>
            <hr />
        </div>

        <span>
            My Profile
        </span>

    </div>
    
  )
}

export default ProfileCard