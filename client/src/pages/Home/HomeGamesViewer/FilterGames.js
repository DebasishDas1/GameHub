import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { useState } from 'react';

import styles from './homeGames.module.css';


const FilterGames = (props) => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    props.gameFilter( selectedFilter );

    return (
        <Container>
            <div className={styles.filter_games}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={1}>
                        <div 
                            className={selectedFilter === 'All' ? styles.filter_button_active : styles.filter_button }
                            onClick={() => setSelectedFilter('All') }
                            >
                            All
                        </div>
                    </Grid>
                    <Grid item xs={5} md={1.5}>
                        <div 
                            className={selectedFilter === 'Shooter' ? styles.filter_button_active : styles.filter_button }
                            onClick={() => setSelectedFilter('Shooter') }
                            >
                            Shooter
                        </div>
                    </Grid>
                    <Grid item xs={5} md={1.5}>
                        <div 
                            className={selectedFilter === 'Casino' ? styles.filter_button_active : styles.filter_button }
                            onClick={() => setSelectedFilter('Casino') }
                            >
                            Casino
                        </div>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <div 
                            className={selectedFilter === 'Adventure' ? styles.filter_button_active : styles.filter_button }
                            onClick={() => setSelectedFilter('Adventure') }
                            >
                            Adventure
                        </div>
                    </Grid>
                    <Grid item xs={4} md={1.5}>
                        <div 
                            className={selectedFilter === 'Board' ? styles.filter_button_active : styles.filter_button }
                            onClick={() => setSelectedFilter('Board') }
                            >
                            Board
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default FilterGames;