import styles from './reUuable.module.css';

const SimpleCard = (props) => {
    return (
        <div className = {styles.Card_structure} >
            {props.id}
            <div >
                {props.title}
            </div>
        </div>
    );
};

export default SimpleCard ;