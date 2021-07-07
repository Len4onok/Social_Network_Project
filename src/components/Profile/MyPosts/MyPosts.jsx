import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react'
import NewPostForm from './NewPostForm';


const MyPosts = React.memo(props => {

  console.log('render')

const postComponents = props.posts.map((post) => {
  return <Post key={post.id} id={post.id} message={post.message} likeCount={post.likeCount} imageSrc={post.imageSrc}></Post>
}
)

  return (
    <div>
      <NewPostForm addPost={props.addPost}/>
      <div>
        New post
      </div>
      <div>
        {postComponents}
      </div>

    </div>
  );
})

export default MyPosts;
