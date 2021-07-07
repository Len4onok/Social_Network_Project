import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
  return (
    
      <div>
        <img src={props.profile.photos.large} alt='img'/>
        <ProfileStatus 
          status={props.status}
          updateStatus={props.updateStatus}/>
        <div>Обо мне: {props.profile.aboutMe}</div>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.lookingForAJob? 'ищу работу':'не ищу работу'}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
        </div>
     
  );
}

export default ProfileInfo;
