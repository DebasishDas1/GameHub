import styles from './game_template.module.css'

const GameHolder = (props) => {
    return (
        <div  className={styles.game_holder} >
            {props.children}
        </div>
    );
}

export default GameHolder;