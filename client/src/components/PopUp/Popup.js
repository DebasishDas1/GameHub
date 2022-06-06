// import Modal from 'react-modal'

// import { pupupActions } from '../../store/popupSlice'
// import { useDispatch } from 'react-redux'

import styles from './reUuable.module.css'

Modal.setAppElement('#root')

const Popup = (props) => {
    const dispatch = useDispatch();

    const close_all = () => {
        dispatch( pupupActions.close_about_omicron() );
        dispatch( pupupActions.close_omicron_symptoms() );
        dispatch( pupupActions.close_DNA_structur_of_omicron() );
        dispatch( pupupActions.close_Recommended_actions() );
    }

    return (
        <Modal 
            isOpen = {true} 
            onRequestClose = { close_all }
            style = {
                {
                    overlay: {
                        backgroundColor : 'rgb(0, 0, 0, 0.8 )'
                    },
                    content: {
                        backgroundColor: 'rgb(0, 0, 0)',
                        color: 'green',
                        left: '30%',
                        right: '30%',
                        border: '2px solid',
                        borderRadius: '25px',
                    }
                }
            }
        >
            <div className= {styles.popup_title_contaner}>
                <h1>{props.title}</h1>
                <button className= {styles.closs_button} onClick={ close_all }>X</button>
            </div>
            
            <div>
                <h3>{props.details}</h3>
            </div>
            
        </Modal>
    );
};

export default Popup;