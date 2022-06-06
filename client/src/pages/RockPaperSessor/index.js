import GameTemplate from '../../components/GameTemplate'
import Colour from '../../constants/Colours'

import { useState } from "react";

const RockPaperSessor = () => {
    const [score, setScore] = useState(0);

    const scoreHandler = () => {
        setScore(score + 1)
    }

    return (
        <>
            <GameTemplate 
                name = 'Rock Paper Sessor'
                info = 'Rock Paper Sessor information'
                rule = 'Rock Paper Sessor rule'
                score = {score}
                colour =  {Colour.RockPaperSessor}
            />
        </>
    );
}
 
export default RockPaperSessor;