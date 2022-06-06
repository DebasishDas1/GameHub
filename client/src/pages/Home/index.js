import Header from './Header'
import WellcomePoster from './WellcomePoster'
import HomeGamesViewer from './HomeGamesViewer'

// import axios from 'axios'
// import { useEffect } from 'react';

// const url = 'http://localhost:5000/dummy';

const Home = () => {
    // useEffect( async () => {
    //     const data = await axios.get(url)
    //     .then( data => data.data )
    //     .catch( (error) => error.message )

    // console.log(data);
    // }, [] )

    return (
        <>
            <Header />
            <WellcomePoster />
            <HomeGamesViewer />
        </>
    );
};

export default Home;