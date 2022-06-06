import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import styles from './homeGames.module.css';

const FilterGames = () => {
    return (
        <Container>
            <div className={styles.filter_games}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={1}>
                        <div className={styles.filter_button}  >All</div>
                    </Grid>
                    <Grid item xs={5} md={1.5}>
                        <div className={styles.filter_button}  >Shooter</div>
                    </Grid>
                    <Grid item xs={5} md={1.5}>
                        <div className={styles.filter_button}  >Casino</div>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <div className={styles.filter_button}  >Adventure</div>
                    </Grid>
                    <Grid item xs={4} md={1.5}>
                        <div className={styles.filter_button}  >Board</div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default FilterGames;