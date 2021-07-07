import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';



const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://i.pinimg.com/originals/dd/39/6a/dd396aa73c2d5f140d899dccdecebbbd.jpg' ></img>
    <div className={s.loginBlock}>
      {props.isAuth
      ? <div>
        <span className={s.login}> {props.login} </span> 
        <button onClick={props.logOut}>Logout</button>
        </div>
      :<NavLink to='/login'>Login</NavLink>}
    </div>
    </header>
  );
}

export default Header;
