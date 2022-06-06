import React, { useState } from 'react';
import styles from './game_template.module.css'

const GameRull = (props) => {
    const [viewGameInfo, setViewGameInfo] = useState(false);

    const handelViewGameInfo = () => {
        setViewGameInfo( !viewGameInfo )
    }

    return (
        <div  className={styles.game_info} onClick={handelViewGameInfo} >
            <h2 >Information</h2>
            {viewGameInfo ? props.info : 'Click to check information'}
        </div>
    );
}

export default React.memo( GameRull );