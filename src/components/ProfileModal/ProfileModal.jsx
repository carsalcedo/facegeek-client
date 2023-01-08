import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpen, setModalOpen}) {
  const theme = useMantineTheme();

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
                className="infoInput" />
            <input type="text" 
                name="lastname" 
                placeholder='Last Name' 
                className="infoInput" />
        </div>
        <div>
            <input type="text" 
                name="worksAT" 
                placeholder='work at' 
                className="infoInput" />
             <input 
                type="text" 
                name=""
                placeholder='RelationShip Status' 
                className="infoInput" />
        </div>
        <div>
            <input type="text" 
                name="livesIN" 
                placeholder='Lives In' 
                className="infoInput" />
            <input type="text" 
                name="Country" 
                placeholder='Country' 
                className="infoInput" />
        </div>
        <div>
            <input 
                type="text" 
                name="animeF"
                placeholder='Favourite Anime' 
                className="infoInput" />
            <input 
                type="text" 
                name="waifu"
                placeholder='Waifu' 
                className="infoInput" />
        </div>
        <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image 
            <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;