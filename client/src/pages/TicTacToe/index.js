import GameTemplate from '../../components/GameTemplate'
import Colour from '../../constants/Colours'

const TicTacToe = () => {
    return (
        <>
            <GameTemplate 
                name = 'TicTacToe'
                info = 'TicTacToe information'
                rule = 'TicTacToe rule'
                colour =  {Colour.TicTacToe}
            />
        </>
    );
}
 
export default TicTacToe;