import React, { useRef, useState } from 'react'
import ProfileImage from '../../img/profile.jpg';
import './PostShare.css';
import {UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes} from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/uploadAction';

const PostShare = () => {
  const loading = useSelector((state)=>state.postReducer.uploading)
  const[image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const desc = useRef();
  const {user} = useSelector((state) => state.authReducer.authData)

  const onImageChange = (e) =>{
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0]
      setImage(img);
    }
  };

  const reset = () =>{
    setImage(null);
    desc.current.value= "";
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    if(image){
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename)
      data.append("file", image)
      newPost.image = filename;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost))
    reset()
  };

  return (
    <div className="PostShare">
        <img src={ProfileImage} alt=""/>
        <div>
          <input ref={desc}
                 required 
                 type="text" 
                 placeholder='What´s happening' />

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

            <button className='button ps-button' onClick={handleSubmit} disabled={loading}>
              {loading ? "Uploading" : "Share"}
            </button>

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
              <img src={URL.createObjectURL(image)} alt="FaceGeek" />
            </div>
          )}

        </div>
    </div>

  )
}

export default PostShare