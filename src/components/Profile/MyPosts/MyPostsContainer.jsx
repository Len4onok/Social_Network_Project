import { connect } from 'react-redux';
import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}



const MyPostsContainer=connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
