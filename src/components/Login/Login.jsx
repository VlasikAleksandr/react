import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators"
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom";
import s from "../../components/common/FormsControls/FormsControls.module.css"
import { Field } from "redux-form";

const LoginForm = ({ handleSubmit, error }) => {
   return (
      <form onSubmit={handleSubmit}>

         <div>
            <Field placeholder={'Email'} name={'email'} validate={[required]} component={Input}/>
         </div>
         <div>
            <Field placeholder={'Password'} name={'password'} type={'password'} validate={[required]} component={Input}/> 
         </div>
         <div>
            <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
         </div>

         {error && <div className={s.formSummaryError}>{error}</div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }

   if (props.isAuth) {
      return <Navigate to='profile' />
   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})




export default connect(mapStateToProps, { login })(Login)