import React from 'react'

import {SigninContainer,SignInTitle,ButtonsContainer} from "./login-styles";

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth,signInWithGoogle} from "../../firebase/firebase"


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }
    handleSubmit = async event => {
        event.preventDefault();


        const {email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
            
        } catch(error){
            console.log(error);
        };
        
        
    }

    handleChange = e => {
        const {value,name} = e.target;
        this.setState({
            [name]:value
        })

    }
    render() {
        return (
            <SigninContainer>
                <SignInTitle>already have an account</SignInTitle> 
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="email"
                        required
                    />
                    
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="password"
                        required/>
                    <ButtonsContainer>
                    <CustomButton type="submit" value="submit form">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonsContainer>
                  </form>
                  </SigninContainer>
        )
    }
}

export default Login;