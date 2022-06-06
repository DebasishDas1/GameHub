import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';

import styles from './game_template.module.css'

const GameNavigator = (props) => {
    return (
        <div  className={styles.game_navigator} >
            <Link to="/"> 
                <HomeIcon color="action" fontSize="large"  /> 
            </Link>
            <h2> {props.name} </h2>
            <Link to="/"> 
                <LogoutIcon color="action" fontSize="large"  />  
            </Link>
        </div>
    );
}

export default React.memo( GameNavigator );