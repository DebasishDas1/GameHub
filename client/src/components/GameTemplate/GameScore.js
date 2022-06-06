import React from 'react';

import styles from './game_template.module.css'

const GameScore = (props) => {
    return (
        <div  className={styles.game_score} >
            <h3> Score : </h3>
            <h1> {props.score} </h1>
        </div>
    );
}

export default React.memo(GameScore);