import { useState } from "react";

import SnakeDot from './Snake'
import Food from './Food'
import GameTemplate from '../../components/GameTemplate'
import Colour from '../../constants/Colours'

import styles from './snake.module.css'

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
                    <SnakeDot />
                    <Food />
                    <button onClick={() => setScore(score + 1) }>ok check yo</button>
                </div>
            </GameTemplate>
    ); 
} 
 
export default Snake;