import React from 'react'
import "./signin.scss";
import Login from '../../components/login/login';
import SignUp from '../../components/sign-up/sign-up';

const SignIn = () => (
    <div className="signin">
         <Login/>
         <SignUp/>
    </div>
    
)


export default SignIn