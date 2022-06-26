import express from 'express'
import {
    allUser,
    SignUp,
    login,
    editUser,
    deleteUser
} from '../controller/user_middleware.js'

const router = express.Router();

router.get('/all', allUser);
router.get('/login', login);
router.post('/signUp', SignUp);
router.put('/:uid', editUser);
router.delete('/:uid', deleteUser);

export default router; 
