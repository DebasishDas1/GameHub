import User from '../model/User.js'

// Ragister a get all user on the database
export const  allUser = async (req, res, next) => {
    try {
        const all_users = await User.find();
        res.json( all_users );
    } catch (error) {
        res.status(409).json({ message: error.message });
        next(error);
    }
}

// Ragister a new user
export const SignUp = async (req, res, next) => {
    const {first_name, last_name, email, phone, pasword} = req.body;
    let existingUser;

    // check for existing user
    try {
        existingUser = await User.findOne( {email: email} );
    } catch (error) {
        res.status(409).json({ message: error.message });
        next(error);
    }

    // existing user found
    if( existingUser ) {
        res.status(422).json({ message: 'user exist already' });
        return ;
    }

    // creating new user
    try {
        const newUser = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            pasword: pasword,
            game: []
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
        next(error);
    }
} 

// logging in a new user
export const login = async (req, res, next) => {
    const {email, pasword} = req.body;
    let existingUser;

    // check for existing user
    try {
        existingUser = await User.findOne( {email: email} );
    } catch (error) {
        res.status(409).json({ message: error.message });
        next(error);
    }

    // check for password
    if( !existingUser || existingUser.pasword != pasword ) {
        res.status(422).json({ message: 'invalid email or password' });
        return ;
    }

    // sucess
    res.json( { message: 'logged in' } )
}

export const editUser = async (req, res, next) => {
    
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
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    const uid = req.params.uid;
    let data;
    try {
        data = await User.findById(uid);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
        next(error);
    }
    try {
        await data.remove();
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
        next(error);
    }
}