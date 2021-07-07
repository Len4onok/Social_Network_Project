import s from './Post.module.css'


const Post = (props) => {
  return (
    <div className={s.item} >
      <img src={props.imageSrc} alt='img'/>
      {props.message}
      <div>
        like {props.likeCount}
      </div>
    </div>
  );
}

export default Post;
