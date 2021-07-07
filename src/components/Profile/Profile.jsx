import Preloader from '../../common/preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {
 if (!props.profile){
   return <Preloader/>
 }
  return (
   
    <div>
      <div >
        <img alt='img' src='https://www.tourprom.ru/site_media/images/upload/2016/11/7/resortimage/nyachang.jpg'></img>
      </div>
      <ProfileInfo 
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      authorizedUserId={props.authorizedUserId}
      />
      <MyPostsContainer/>
    </div>
  );
}

export default Profile;
