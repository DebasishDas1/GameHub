import styles from './Button.module.css'

const Button = (props) => {
    return (
        <div className={styles.button} onClick={props.action} >
            {props.children}
        </div>
    );
};

export default Button;