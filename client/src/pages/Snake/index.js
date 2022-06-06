import GameTemplate from '../../components/GameTemplate'
import Colour from '../../constants/Colours'
import styles from './snake.module.css'

import { useState } from "react";

const Snake = () => {
    const [score, setScore] = useState(0);

    return (
            <GameTemplate 
                name = 'Sanke'
                info = 'snake information'
                rule = 'snake rule'
                score = {score}
                colour = {Colour.Sanke}
            >
                <div className={styles.snake_game_bord}>
                    <div className={styles.snake_dot} ></div>
                    <button onClick={() => setScore(score + 1) }>ok check yo</button>
                </div>
            </GameTemplate>
    ); 
} 
 
export default Snake;