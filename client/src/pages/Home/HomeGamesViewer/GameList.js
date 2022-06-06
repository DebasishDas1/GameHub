import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GameCard from '../../../components/Card/GameCard';

import GameListData from '../../../constants/GameListData'

const GameList = () => {
    return (
        <Container>
            <Grid container spacing={2.5}>
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
            </Grid>
        </Container>
    );
}

export default GameList;