import styles from './reUuable.module.css';

const GlassCard = (props) => {
    return (
        <div className = {styles.glass_Card_structure} >
            {props.id}
            <div >
                {props.title}
            </div>
        </div>
    );
};

export default GlassCard ;