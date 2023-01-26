import React from 'react'
import './FollowersCard.css'
import {Followers} from '../Data/FollowersData.js'

const FollowersCard = () => {
  //quede en hora 2:39
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>

      {Followers.map((follower, id) =>{
        return(
          <div className="follower">
            <div>
              <img src={follower.img} alt="FaceGeek Follower" className='followerImg'/>
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className='button fc-button'>Follow</button>
          </div>
        )
      })}
    </div>
    
  )
}

export default FollowersCard