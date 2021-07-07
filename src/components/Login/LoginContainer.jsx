
import { connect } from "react-redux";
import { logIn } from "../../redux/auth-reducer";
import Login from "./Login";



let mapStateToProps=(state)=>{
    return{
        isAuth: state.auth.isAuth,
        isLoginSuccess: state.auth.isLoginSuccess,
        logInErrorMessage: state.auth.logInErrorMessage
    }
}

export default  connect(mapStateToProps, {logIn})(Login);

