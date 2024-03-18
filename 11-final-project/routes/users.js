import express from 'express';
import { getAllUsers, createUser, getSingleUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getSingleUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
