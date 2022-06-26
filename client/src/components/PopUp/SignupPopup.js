import styles from './popup.module.css'

const SignupPopup = (props) => {
    return (props.trigger) ?(
        <div className={styles.popu_up}>
            <div className = {styles.pop_up_contaner}>
                <div 
                    className={styles.popup_close_button}
                    onClick={() => props.setTrigger(false)}
                >
                    Close
                </div>
                {props.children}
            </div>
        </div>
    ) : '';
}

export default SignupPopup;