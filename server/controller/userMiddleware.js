import User from '../model/User.js'

export const createUser = async (req, res, nest) => {
    try {
        const newUser = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            pasword: req.body.pasword,
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
        nest(error);
    }
}

export const getUser = async (req, res, nest) => {
    const uid = req.params.uid;
    try {
        const data = await User.findById(uid);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
        nest(error);
    }
}

export const editUser = async (req, res, nest) => {
    const userUpdate = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        pasword: req.body.pasword,
    });
    try {
        await userUpdate.save();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
        nest(error);
    }
}

export const deleteUser = async (req, res, nest) => {
    try {
        const data = await User.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
        nest(error);
    }
}