import TextField from '@mui/material/TextField';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../store/userSlice';

import styles from './popup.module.css'

const LoginPopup = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState( useSelector(state => state.user.first_name) );
    const [password, setPassword] = useState( useSelector(state => state.user.pasword) );

    const logInHandler = () => {
        // check name
        // check password
        login();
        console.log('name : ' + name);
        console.log('password : ' + password);
    }

    return (props.trigger) ?(
        <>
            <div className={styles.pop_up_background}></div>
            <div className={styles.popu_up}>
                <div className = {styles.login_pop_up_contaner}>
                    <div 
                        className={styles.popup_close_button}
                        onClick={() => props.setTrigger(false)}
                    >
                        Close
                    </div>
                    <h1>Game Hub</h1>
                    <TextField
                        required
                        fullWidth
                        label='Your name'
                        value={name}
                        onChange={(event) => setName(event.target.value) }
                    />
                    <TextField
                        required
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value) }
                        // variant="filled"
                    />
                    <div onClick={logInHandler} className = {styles.login_buttom}>
                        Login
                    </div>
                </div>
            </div>
        </>

    ) : '';
}

export default LoginPopup;