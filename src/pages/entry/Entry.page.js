import React from "react";
import "./entry.style.css";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { useState } from "react";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";


export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [frmLoad, setFrmLoad]= useState("login");

    const handleOnChange = (e) => {
        const { name, value}= e.target;

        switch(name){
         case'email':
            setEmail(value)
            break; 

         case'password':
            setPassword(value)
            break;
         default:
            break;

        }
        
    };

    const handleOnSubmit= e => {
        e.preventDefault()

        if (!email || !password){
          return  alert("Fill up all the form!")
        }

        //TODO call api to submit the form
    }

    const handleOnResetSubmit = (e) =>{
        e.preventDefault();
        if (!email){
            return  alert("Please enter your email address")
          }
    };

    const frmSwitcher = frmType =>{
        setFrmLoad(frmType);

    }

    return(
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {frmLoad==='login' &&
                <LoginForm 
                handleOnChange={handleOnChange} 
                handleOnSubmit={handleOnSubmit}
                frmSwitcher={frmSwitcher}
                email= {email}
                pass= {password}
                />}

                {frmLoad==='reset' &&<ResetPassword 
                handleOnChange={handleOnChange} 
                handleOnResetSubmit={handleOnResetSubmit}
                frmSwitcher={frmSwitcher}
                email= {email}
                />}
            </Jumbotron>  
        </div>
    );

};