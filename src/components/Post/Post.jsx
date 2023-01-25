import React from 'react'
import './Post.css'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import heart from '../../img/like.png'
import notLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likePost } from '../../Api/PostRequest'

export const Post = ({data}) => {
  
  const {user} = useSelector((state) => state.authReducer.authData)

  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };

  return (
    <div className="Post">
        {/*<img src={data.img} alt="FaceGeek" />*/}
        <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image: ""} alt="FaceGeek" />

        <div className="postReact">
            <img src={liked ? heart : notLike} alt="FaceGeek" style={{cursor: "pointer"}} onClick={handleLike}/>
            <img src={comment} alt="FaceGeek" />
            <img src={share} alt="FaceGeek" />
        </div>

        <span> {likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}
