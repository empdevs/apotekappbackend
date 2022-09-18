import express, { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/UserController';

const router : Router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
// router.get('/:id/', getRoleById);
// router.put('/:id/update/', updatedRole);
// router.put('/:id/delete/', deleteRole);

export default router;