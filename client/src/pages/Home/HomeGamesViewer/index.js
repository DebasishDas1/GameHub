import styles from './homeGames.module.css';
import ShowGameList from './ShowGameList';
import FilterGames from './FilterGames';

import GameListData from '../../../constants/GameListData';
import { useEffect, useState } from 'react';

const HomeGames = () => {
    const [GameList, setGameList] = useState(GameListData);
    const [selectedOption, setSelectedOption] = useState('All');

    useEffect( () => {
        if (selectedOption === 'All' ) {
            setGameList( GameListData );
            return;
        }
        const filtered = GameListData.filter( game => game.tag.includes(selectedOption) );
        setGameList( filtered );
    }, [selectedOption]);

    return (
        <div className={styles.home_games}>
            <FilterGames gameFilter={setSelectedOption}/>
            <ShowGameList data = {GameList}/>
        </div>
    );
}

export default HomeGames;