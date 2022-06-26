import styles from './component.module.css';
import poster_img from '../../../asset/deba_img_1.png';

const WellcomePoster = () => {
    return (
        <div className={styles.wellcome_poster}>
            <h1>Wellcome to the world of fun and much more ...</h1>
            <img
                    src={poster_img}
                    alt="game_hub_logo"
            />
        </div>
    );
}

export default WellcomePoster;