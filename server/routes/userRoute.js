import express from 'express'
import {
    createUser,
    getUser,
    editUser,
    deleteUser
} from '../controller/userMiddleware.js'

const router = express.Router();

router.get('/:uid', getUser);
router.post('/', createUser);
router.put('/:uid', editUser);
router.delete('/:uid', deleteUser);

export default router;
