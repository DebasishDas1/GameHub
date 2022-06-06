import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

import styles from './card.module.css';
import scissor from '../../asset/rock.png'

const GameCard = (props) => {
    return (
        <div className = {styles.game_Card_structure} >
            <div className = {styles.game_card_logo} >
                <Avatar 
                    alt="Game" 
                    src={scissor} 
                    sx={{ width: 70, height: 70 }}
                />
            </div>
            <div className = {styles.game_card_info} >
                <div className = {styles.game_card_title}>
                    {props.title}
                </div>
                {
                    props.description &&
                    <div className = {styles.game_card_description} >
                        {props.description}
                    </div>
                }
                <Link to={ props.path }> Play </Link>
            </div>
        </div>
    );
}; 

export default GameCard ; 