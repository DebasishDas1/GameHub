// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GameCard from '../../../components/Card/GameCard';

import styles from './homeGames.module.css';

const ShowGameList = props => {
    return (
        <Container>
            {/* <Grid container spacing={2.5}>
                {
                    GameListData.map( game => (
                        <Grid item xs={12} md={2.5} key = {game.title} >
                            <GameCard 
                                title = {game.title} 
                                path = {game.path} 
                                description = {game.description}
                            />
                        </Grid>
                    ))
                }
            </Grid> */}

            <div className={styles.game_list}>
                {
                    props.data.map( game => (
                        <GameCard 
                            key = {game.title} 
                            title = {game.title} 
                            path = {game.path} 
                            description = {game.description}
                        />
                    ))
                }
            </div>

        </Container>
    );
}

export default ShowGameList;