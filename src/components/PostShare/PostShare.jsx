import React, { useRef, useState } from 'react'
import ProfileImage from '../../img/profile.jpg';
import './PostShare.css';
import {UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes} from '@iconscout/react-unicons';
//quede en hora 1:08
const PostShare = () => {
  const[image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) =>{
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0]
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  }

  return (
    <div className="PostShare">
        <img src={ProfileImage} alt=""/>
        <div>
          <input type="text" placeholder='What´s happening' />
          <div className="PostOptions">
            <div className="option" 
              style={{color:  "var(--photo)"}}
              onClick={()=>imageRef.current.click()}>
              <UilScenery/>
              Photo
            </div>
            <div className="option" style={{color:  "var(--video)"}}>
              <UilPlayCircle/>
              Video
            </div>
            <div className="option" style={{color:  "var(--location)"}}>
              <UilLocationPoint/>
              Location
            </div>
            <div className="option" style={{color:  "var(--shedule)"}}>
              <UilSchedule/>
              Schedule
            </div>
            <button className='button ps-button'>Share</button>
            <div style={{display: "none"}}>
              <input 
                type="file" 
                name="myImage" 
                ref={imageRef} 
                onChange={onImageChange}/>
            </div>
          </div>

          {image && (
            <div className="previewImage">
              <div className='timesContainer'>
                <UilTimes onClick={()=>setImage(null)}/>
              </div>
              <img src={image.image} alt="FaceGeek" />
            </div>
          )}

        </div>
    </div>

  )
}

export default PostShare