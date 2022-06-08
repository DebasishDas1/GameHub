import Game from '../model/Game.js'
import Users from '../model/User.js'

export const newGame = async (req, res, nest) => {
    let new_game;
    const {game_name, score} = req.body;
    try {
        new_game = await Game.create({
            game_name: game_name,
            log: [{
              date: new Date,
              score:  score,
            }]
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
        nest(error);
    }
    res.status(200).json({ new_game: new_game.toObject({ getters: true }) });
}

export const getGame = async (req, res, nest) => {
    const game_id = req.params.gameID;
    try {
        const data = await User.findById(game_id);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
        nest(error);
    }
}

export const updateGame = async (req, res, nest) => {
    let game_id = req.params.gameID;
    let selected_game;
    const {game_name} = req.body;

    try {
        selected_game = await Game.findById(game_id);
    } catch (error) {
        res.status(404).json({ message: error.message });
        nest(error);
    }

    try {
        selected_game.game_name = game_name;
        await selected_game.save();
    } catch (error) {
        res.status(404).json({ message: error.message });
        nest(error);
    }
    res.status(200).json({ selected_game: selected_game.toObject({ getters: true }) });
}

export const deleteUser = async (req, res, nest) => {
    let game_id = req.params.gameID;
    let selected_game;

    try {
        selected_game = await Game.findById(game_id);
    } catch (error) {
        res.status(404).json({ message: error.message });
        nest(error);
    }

    try {
        await selected_game.remove();
        res.status(200).json(selected_game);
    } catch (error) {
        res.status(404).json({ message: error.message });
        nest(error);
    }
}