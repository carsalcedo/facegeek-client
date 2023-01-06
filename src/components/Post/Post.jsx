import React from 'react'
import './Post.css'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import heart from '../../img/like.png'
import notLike from '../../img/notlike.png'

export const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="FaceGeek" />

        <div className="postReact">
            <img src={data.liked ? heart : notLike} alt="FaceGeek" />
            <img src={comment} alt="FaceGeek" />
            <img src={share} alt="FaceGeek" />
        </div>

        <span>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}
