import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

import Button from '../../../components/Button'
import LoginPopup from '../../../components/PopUp/LoginPopup';
import SignupPopup from '../../../components/PopUp/SignupPopup';

import styles from './header.module.css';

const HeaderProfileArea = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginPopUp, setLoginPopUp] = useState(false);
    const [signupPopUp, setSignupPopUp] = useState(false);

    const loginHandler = () => {
        setLoggedIn(false)
        setLoginPopUp(true);
    } 

    const signupHandler = () => {
        setSignupPopUp(true);
    } 
    
    return (
        <div className={styles.header_profile_area}>
            {
                loggedIn && 
                <>
                    <Avatar alt="Debasish Das" src="/static/images/a" />
                    <h4>Debasish</h4>
                </>
            }
            {
                !loggedIn &&
                <>
                <Button action = {loginHandler} >Login</Button>
                    <LoginPopup
                        trigger={loginPopUp}
                        setTrigger ={setLoginPopUp}
                    >
                    </LoginPopup>

                <Button action = {signupHandler} >Signup</Button>
                    <SignupPopup 
                        trigger={signupPopUp}
                        setTrigger ={setSignupPopUp}
                        >
                        Login
                    </SignupPopup>
                </>
            }

        </div>
    );
}


export default HeaderProfileArea;
