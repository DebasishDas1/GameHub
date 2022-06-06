import game_hub_logo from '../../../asset/game_hub_logo.png';
import styles from './header.module.css';

const HeaderLogoArea = () => {
    const goToHome = () => {
        console.log("Home");
    }

    return (
        <div className={styles.header_logo_area} onClick={goToHome}>
            <img
                src={game_hub_logo}
                alt="game_hub_logo"
            />
        </div>
    );
}

export default HeaderLogoArea;