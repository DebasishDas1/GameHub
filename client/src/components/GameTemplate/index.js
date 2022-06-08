import GameHolder from './GameHolder'
import GameInfo from './GameInfo'
import GameNavigator from './GameNavigator'
import GameRule from './GameRule'
import GameScore from './GameScore'

import styles from './game_template.module.css'

const GameTemplate = (props) => {

    return (
        <div  style={ {backgroundColor: props.colour} }  className={styles.game_template}>
            <div className={styles.game}>
                <GameHolder>
                    {props.children}
                </GameHolder>
            </div>
            <div className={styles.game_info_contaner}>
                <GameNavigator name = {props.name}/>
                <GameScore score = {props.score}/>
                <GameInfo info = {props.info}/>
                <GameRule rule = {props.rule} />
            </div>
        </div>
    );
}

export default GameTemplate;