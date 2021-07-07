import { ErrorMessage, Field, Form, Formik } from "formik";
import { Redirect } from "react-router";
import { validationSchemaLogin } from "../../helpers/validation/validation";
import s from './Login.module.css'



const Login =(props)=>{

    if (props.isAuth){return <Redirect to='/profile'></Redirect>}

    return <div>
         <h1>
        LOGIN
    </h1>
    <LoginForm {...props} />
    </div>
   
}

export default Login;

const LoginForm =(props)=>{

    return <Formik
    initialValues={{
        email:'',
        password:'',
        rememberMe: false
    }}
    validationSchema={validationSchemaLogin}
    onSubmit={values=>{
        props.logIn(values);
    }}
    >
         {({ errors, touched, isSubmitting }) => (
        <Form>
            <div>
                <div>E-mail</div>
                <Field className={errors.email&&touched.email?s.errorField:null} 
                label='E-mail' name='email' type='email' />
                <ErrorMessage  className={s.error} name="email" component="div" />
            </div>
            <div>
                <div>Password</div>
                <Field className={errors.password&&touched.password?s.errorField:null} 
                name='password' type='password'/>
                <ErrorMessage className={s.error} name="password" component="div" />
            </div>
            <div>
                
                <Field label='Remember me' name='rememberMe' type='checkbox' />
                <span>Remember me</span>
            </div>
            { (!props.isLoginSuccess&&isSubmitting)&&<div className={s.error} >{props.logInErrorMessage}</div>}  
            <div>
                <button type='submit'>Sing in</button>
            </div>
            
        </Form>
        )}
    </Formik>
}


