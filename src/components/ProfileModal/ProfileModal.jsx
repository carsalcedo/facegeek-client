import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/uploadAction';
import { updateUser } from '../../actions/userAction';

function ProfileModal({modalOpen, setModalOpen, data}) {
  const theme = useMantineTheme();
  const {password, ...other} = data;

  const [formData, setFormData] = useState(other)
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const dispatch = useDispatch()
  const params = useParams()
  const {user} = useSelector((state) => state.authReducer.authData)

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onImageChange = (event) =>{
     if(event.target.files && event.target.files[0]){
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img)
     }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    let UserData = formData;
    if(profileImage){
      const data = new FormData();
      const filename = Date.now() + profileImage.name;
      data.append("name", filename);
      data.append("file", profileImage);
      UserData.profilePicture = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error)
      }
    }
    if(coverImage){
      const data = new FormData();
      const filename = Date.now() + coverImage.name;
      data.append("name", filename);
      data.append("file", coverImage);
      UserData.coverPicture = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(updateUser(params.id, UserData));
    setModalOpen(false);
  }

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened = {modalOpen}
      onClose= {() => setModalOpen(false)}
    >
      <form action="" className="infoForm">
        <h3>your info</h3>
        <div>
            <input type="text" 
                name="firstname" 
                placeholder='First Name' 
                className="infoInput"
                onChange={handleChange} 
                value = {formData.firstname}/>
            <input type="text" 
                name="lastname" 
                placeholder='Last Name' 
                className="infoInput" 
                value = {formData.lastname}/>
        </div>
        <div>
            <input type="text" 
                name="worksAt" 
                placeholder='work at' 
                className="infoInput"
                onChange={handleChange}
                value = {formData.worksAt} />
             <input 
                type="text" 
                name="relationship"
                placeholder='RelationShip Status' 
                className="infoInput"
                onChange={handleChange}
                value = {formData.relationship} />
        </div>
        <div>
            <input type="text" 
                name="livesin" 
                placeholder='Lives In' 
                className="infoInput"
                onChange={handleChange}
                value = {formData.livein} />
            <input type="text" 
                name="country" 
                placeholder='Country' 
                className="infoInput"
                onChange={handleChange}
                value = {formData.country}/>
        </div>
        <div>
            <input 
                type="text" 
                name="animeFavorito"
                placeholder='Favourite Anime' 
                className="infoInput" 
                onChange={handleChange}
                value = {formData.animeFavorito}/>
            <input 
                type="text" 
                name="waifu"
                placeholder='Waifu' 
                className="infoInput" 
                onChange={handleChange}
                value = {formData.waifu}/>
        </div>
        <div>
            Profile Image
            <input type="file" name="profileImage" onChange={onImageChange}/>
            Cover Image 
            <input type="file" name="coverImage" onChange={onImageChange}/>
        </div>
        <button className="button infoButton" onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;