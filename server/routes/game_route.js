import express from 'express'
import {
    newGame,
    getGame,
    updateGame
} from '../controller/game_middleware.js'

const router = express.Router();

router.post('/', newGame);
router.get('/:gameID', getGame);
router.post( '/gameID/:gameID', updateGame);

export default router;
