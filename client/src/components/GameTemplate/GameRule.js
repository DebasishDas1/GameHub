import React, { useState } from 'react';
import styles from './game_template.module.css'

const GameNavigator = (props) => {
    const [viewGameRule, setViewGameRule] = useState(false);

    const handelViewGameRule = () => {
        setViewGameRule( !viewGameRule )
    }


    return (
        <div  className={styles.game_rule} onClick={handelViewGameRule} >
            <h2 >Rule</h2>
            {viewGameRule ? props.rule : 'Click to check rule'}
        </div>
    );
}

export default React.memo(GameNavigator);