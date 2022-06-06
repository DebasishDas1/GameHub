import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import styles from './header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { updaeSearch } from '../../../store/searchSlice';

const HeaderSeachArea = () => {
    const dispatch = useDispatch()
    const [gameSearch, setGameSearch] = useState(
        useSelector(state => state.search.game)
    );

    const onGameSearch = (event) => {
        setGameSearch( event.target.value );
        dispatch( updaeSearch() )
        console.log(event.target.value);
    }

    return (
        <div className={styles.header_seach_area}>
            <SearchIcon />
            <input type="text" value={gameSearch} onChange={onGameSearch} placeholder="Game name"/>
        </div>
    );
};

export default HeaderSeachArea;