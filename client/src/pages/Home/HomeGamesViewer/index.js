import styles from './homeGames.module.css';
import GameList from './GameList';
import FilterGames from './FilterGames';

const HomeGames = () => {
    return (
        <div className={styles.home_games}>
            <FilterGames />
            <GameList />
        </div>
    );
}

export default HomeGames;